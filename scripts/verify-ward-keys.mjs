#!/usr/bin/env node
/**
 * Build guard: data/geo/ward-keys.json still joins the register and the boundary file, ward for
 * ward.
 *
 * It checks, with no download:
 *   - exactly the register's 30 wards, each once, in its own constituency, slug as slugOf();
 *   - each wardcode exists in public/geo/mombasa-wards.topo.json under the same ward and
 *     constituency, and no two wards share one;
 *   - no alias resolves to two wards in one constituency, or repeats a ward's own name;
 *   - every ward names one of Mombasa's six KNBS census sub-counties, with shares that sum to 1.
 *
 * Rebuild the table with `node scripts/build-ward-keys.mjs`. Runs as part of `npm run verify`.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (...p) => JSON.parse(fs.readFileSync(path.join(ROOT, ...p), "utf8"));

const keys = read("data", "geo", "ward-keys.json");
const register = read("data", "ward-register.json");
const topo = read("public", "geo", "mombasa-wards.topo.json");

const slugOf = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const fold = (s) => s.toLowerCase().replace(/[^a-z/]/g, "");

/** Mombasa's six sub-counties in the KNBS 2019 census, with their KNBS codes. */
const KNBS_SUBCOUNTIES = { CHANGAMWE: "0101", JOMVU: "0102", KISAUNI: "0103", NYALI: "0104", LIKONI: "0105", MVITA: "0106" };
const key = (s) => s.toLowerCase().replace(/[^a-z]/g, "");

const errors = [];
const fail = (msg) => errors.push(msg);

const registerWards = register.constituencies.flatMap((c) => c.wards.map((w) => ({ name: w.name, constituency: c.name, id: c.id })));
if (keys.wards.length !== registerWards.length) fail(`${keys.wards.length} rows, but the register has ${registerWards.length} wards`);

for (const rw of registerWards) {
  const rows = keys.wards.filter((k) => k.name === rw.name && k.constituency === rw.constituency);
  if (rows.length !== 1) fail(`${rw.name} (${rw.constituency}): ${rows.length} rows in ward-keys.json`);
  else if (rows[0].constituency_id !== rw.id) fail(`${rw.name}: constituency_id "${rows[0].constituency_id}", register says "${rw.id}"`);
}

const polygons = new Map(topo.objects.wards.geometries.map((g) => [g.properties.wardcode, g.properties]));
const seen = { slug: new Set(), wardcode: new Set() };
for (const k of keys.wards) {
  if (k.slug !== slugOf(k.name)) fail(`${k.name}: slug "${k.slug}", expected "${slugOf(k.name)}"`);
  for (const field of ["slug", "wardcode"]) {
    if (!k[field]) fail(`${k.name}: no ${field}`);
    else if (seen[field].has(k[field])) fail(`${k.name}: ${field} "${k[field]}" used twice`);
    else seen[field].add(k[field]);
  }
  const p = polygons.get(k.wardcode);
  if (!p) fail(`${k.name}: wardcode ${k.wardcode} is not in the boundary file`);
  else if (key(p.ward) !== key(k.name) || key(p.constituency) !== key(k.constituency)) {
    fail(`${k.name}: wardcode ${k.wardcode} is "${p.ward}" (${p.constituency}) in the boundary file`);
  }
  if (KNBS_SUBCOUNTIES[k.knbs_subcounty] === undefined) fail(`${k.name}: knbs_subcounty "${k.knbs_subcounty}" is not a Mombasa census sub-county`);
  else if (k.knbs_code !== KNBS_SUBCOUNTIES[k.knbs_subcounty]) fail(`${k.name}: knbs_code ${k.knbs_code} is not ${k.knbs_subcounty}'s`);
  if (typeof k.knbs_split !== "boolean") fail(`${k.name}: knbs_split is not set`);
  const shares = k.knbs_shares ?? [];
  const total = shares.reduce((n, x) => n + x.share, 0);
  if (shares.length === 0 || Math.abs(total - 1) > 0.005) fail(`${k.name}: knbs_shares sum to ${total.toFixed(3)}, not 1`);
  if (shares[0]?.subcounty !== k.knbs_subcounty) fail(`${k.name}: knbs_subcounty is not the largest share`);
  if (shares.some((x, i) => i > 0 && x.share > shares[i - 1].share)) fail(`${k.name}: knbs_shares are not largest first`);
  if (shares.some((x) => KNBS_SUBCOUNTIES[x.subcounty] !== x.code)) fail(`${k.name}: a knbs_shares row has the wrong code`);
  for (const a of k.aliases) {
    if (!a.spelling || !a.source) fail(`${k.name}: alias without spelling or source`);
    if (a.spelling.toLowerCase() === k.name.toLowerCase()) fail(`${k.name}: alias "${a.spelling}" is its own name`);
  }
}

// One spelling, one ward, within a constituency: otherwise a join would have to guess.
for (const c of register.constituencies) {
  const owner = new Map();
  for (const k of keys.wards.filter((w) => w.constituency === c.name)) {
    for (const spelling of [k.name, ...k.aliases.map((a) => a.spelling)]) {
      const f = fold(spelling);
      if (owner.has(f) && owner.get(f) !== k.name) fail(`"${spelling}" names both ${owner.get(f)} and ${k.name} in ${c.name}`);
      owner.set(f, k.name);
    }
  }
}

if (errors.length > 0) {
  console.error("verify-ward-keys FAILED:\n" + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}

const aliasCount = keys.wards.reduce((n, k) => n + k.aliases.length, 0);
console.log(
  `Ward key check passed: ${keys.wards.length} wards join the register and the boundary file one to one, ` +
  `${aliasCount} aliases with no collisions, ` +
  `${keys.wards.filter((k) => k.knbs_split).length} wards split between census sub-counties.`
);
