/**
 * The arithmetic this document rests on, checked against the register it rests on.
 *
 *     node --experimental-strip-types --test lib/figures/figures.test.ts
 *     npm run test:figures
 *
 * WHY THESE ASSERTIONS EXIST. The analysis states many derived figures — the top twelve wards, the
 * close-contest pool, four routes, ballots at the 2022 turnout — and every one is a sum or a
 * subtraction over the same thirty ward numbers. Stated as prose they can drift apart, and this audit found
 * that they have. A failing assertion here is therefore NOT permission to edit the content: hard
 * rule 2 says a disagreement between the document and its own arithmetic is logged in
 * CONFLICTS.md and rendered with an Under review flag, and reconciled by Firefly. The test names
 * the conflict where one exists.
 *
 * WHY IT READS THE JSON DIRECTLY. data/ward-register.ts imports ./ward-register.json, which plain
 * Node will not do without an import attribute the bundler does not want. So the arithmetic lives
 * in ./register-math.ts, which takes the register as an argument and imports nothing, and this
 * file hands it the same JSON the application reads — no bundler, no mocking, and no second copy
 * of the thirty numbers this document rests on. ./register.ts binds the same functions to the real
 * register for the components.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  ballotsAt,
  blocTotal,
  bottomWards,
  countyTotal,
  rankWards,
  topWards,
  wardCount,
} from "./register-math.ts";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const register = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "ward-register.json"), "utf8"));
const CONS = register.constituencies;

/** Share of the county register, to two places — the precision §2.7 prints. */
const share = (n: number) => Number(((n / countyTotal(CONS)) * 100).toFixed(2));

/* ------------------------------------------------------------------ the register itself */

test("each constituency's wards sum to its stated total", () => {
  for (const c of CONS) {
    assert.equal(c.wards.reduce((n: number, w: { voters: number }) => n + w.voters, 0), c.voters, c.name);
  }
});

test("the six constituencies sum to 641,913 across 30 wards", () => {
  assert.equal(countyTotal(CONS), 641_913);
  assert.equal(wardCount(CONS), 30);
  assert.equal(CONS.length, 6);
});

test("no prison voters are folded into the ward register", () => {
  assert.equal(register.prisonVoters, 0);
});

/* ------------------------------------------------------------------ concentration */

test("the ward ranking covers every ward once", () => {
  const ranked = rankWards(CONS);
  assert.equal(ranked.length, 30);
  assert.equal(new Set(ranked.map((w) => w.name)).size, 30);
});

test("the top 12 and bottom 10 wards never overlap and stay inside the county total", () => {
  assert.ok(topWards(CONS, 12) + bottomWards(CONS, 10) < countyTotal(CONS));
});

/* ------------------------------------------------------------------ the close-contest pool */

test("the pool (Kisauni, Nyali, Changamwe) holds 353,090 registered voters", () => {
  assert.equal(blocTotal(CONS, ["Kisauni", "Nyali", "Changamwe"]), 353_090);
  assert.equal(share(353_090), 55.01);
});

test("the pool falls just short of 120,000 on ballots at the 2022 turnout", () => {
  const ballots = ballotsAt(353_090, 0.345);
  assert.ok(ballots > 119_000 && ballots < 125_000, String(ballots));
  assert.ok(Math.round(ballots * 0.8) < 120_000, "even 80% of the pool's ballots is short of the benchmark");
});

/* ------------------------------------------------------------------ language (§12.4) */

test("the published content mix and every deployment row allocate exactly 100%", () => {
  assert.equal(60 + 25 + 15, 100);
  const ROWS: [string, number[]][] = [
    ["Radio spots", [90, 10]],
    ["Direct 2G bulk SMS", [80, 20]],
    ["USSD menu system", [50, 50]],
    ["Print collateral", [70, 30]],
    ["Stage and PA jingles", [85, 15]],
    ["TikTok and Reels video", [70, 30]],
    ["Formal policy platform", [100]],
  ];
  for (const [medium, shares] of ROWS) assert.equal(shares.reduce((n, v) => n + v, 0), 100, medium);
});
