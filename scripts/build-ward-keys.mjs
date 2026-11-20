#!/usr/bin/env node
/**
 * Builds data/geo/ward-keys.json: one row per ward, joining every source that names Mombasa's 30
 * wards.
 *
 *   register   data/ward-register.json (IEBC 2022), the spelling every other source joins to
 *   polygons   public/geo/mombasa-wards.topo.json (Omare & Omare 2017, CC BY 4.0), by name and constituency
 *   census     the KNBS 2019 sub-county each ward sits in. In Mombasa the six census sub-counties
 *              and the six IEBC constituencies are the same areas, so each ward sits wholly in the
 *              sub-county of its constituency's name.
 *
 * Register entries are never renamed. Every other spelling is recorded as an alias with the source
 * that uses it, so a later join (a county project register's ward text) can resolve it without
 * guessing.
 *
 *     node scripts/build-ward-keys.mjs
 *
 * The committed output is checked on every `npm run verify` by scripts/verify-ward-keys.mjs.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "data", "geo", "ward-keys.json");

/** KNBS 2019 census sub-county codes for Mombasa (county 001). */
export const KNBS_SUBCOUNTIES = {
  CHANGAMWE: "0101", JOMVU: "0102", KISAUNI: "0103", NYALI: "0104", LIKONI: "0105", MVITA: "0106",
};

/** Spellings that do not join by case and spacing alone, with the source that uses each. */
const EXPLICIT_ALIASES = [];

const slugOf = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const key = (s) => s.toLowerCase().replace(/[^a-z]/g, "");

const register = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "ward-register.json"), "utf8"));
const topo = JSON.parse(fs.readFileSync(path.join(ROOT, "public", "geo", "mombasa-wards.topo.json"), "utf8"));

const errors = [];
const wards = [];
for (const c of register.constituencies) {
  for (const w of c.wards) {
    const polygon = topo.objects.wards.geometries.filter(
      (g) => key(g.properties.ward) === key(w.name) && key(g.properties.constituency) === key(c.name)
    );
    if (polygon.length !== 1) errors.push(`${w.name} (${c.name}): ${polygon.length} polygons join`);
    const sub = c.name.toUpperCase();
    if (!KNBS_SUBCOUNTIES[sub]) errors.push(`${c.name}: not a Mombasa census sub-county`);
    const aliases = EXPLICIT_ALIASES.filter((a) => a.ward === w.name).map(({ spelling, source, note }) => ({ spelling, source, note }));
    const polyName = polygon[0]?.properties.ward;
    if (polyName && polyName !== w.name && polyName.toLowerCase() !== w.name.toLowerCase() && !aliases.some((a) => a.spelling === polyName)) {
      aliases.push({ spelling: polyName, source: "boundary file", note: "Spacing only." });
    }
    wards.push({
      slug: slugOf(w.name),
      name: w.name,
      constituency: c.name,
      constituency_id: c.id,
      wardcode: polygon[0]?.properties.wardcode ?? null,
      knbs_subcounty: sub,
      knbs_code: KNBS_SUBCOUNTIES[sub] ?? null,
      knbs_split: false,
      knbs_shares: [{ subcounty: sub, code: KNBS_SUBCOUNTIES[sub] ?? null, share: 1 }],
      aliases,
    });
  }
}

if (errors.length > 0) {
  console.error("build-ward-keys FAILED:\n" + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}

const out = {
  id: "ward-keys",
  description:
    "One row per ward: the register's spelling and slug, the boundary file's wardcode, the census sub-county, and every other spelling in use.",
  sources: {
    register: "IEBC, Registered Voters per County Assembly Ward (2022): data/ward-register.json",
    wardcode: "Omare & Omare (2017), Kenya County Assembly Boundaries, CC BY 4.0: public/geo/mombasa-wards.topo.json",
    knbs_subcounty: "KNBS 2019 census: Mombasa's six sub-counties, which coincide with its six constituencies",
  },
  constituency_aliases: [],
  knbs_subcounty_method: "In Mombasa the census sub-counties and the IEBC constituencies are the same six areas, so every ward sits wholly in the sub-county of its constituency's name.",
  wards,
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
console.log(`build-ward-keys: ${wards.length} wards written to ${path.relative(ROOT, OUT)}, ${wards.reduce((n, w) => n + w.aliases.length, 0)} aliases`);
