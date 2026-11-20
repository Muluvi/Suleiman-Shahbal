/**
 * FIGURES: every number the proposal prints, once.
 *
 * Mombasa edition (November 2026). Same four groups, in this order:
 *
 *   1. The register, generated from data/ward-register.json (IEBC 2022, Tier 1): one figure per
 *      ward and per constituency, so a ward total can never be retyped.
 *   2. Sourced figures, read off a named document. Tier is the tier of the document cited, not of
 *      the value.
 *   3. Derived figures, computed here from 1 and 2, so a sum or a ballot count moves when its
 *      inputs move and cannot be typed wrong. Each is marked modelled, with its formula.
 *   4. Targets: numbers the engagement or the campaign commits to. Evidence about nothing, so no
 *      tier; each says whose target it is.
 *
 * Where a figure the first (Kitui) edition carried has no Mombasa source in hand yet, it is held
 * here as `needed`, naming the document that would close it. Nothing is filled from memory.
 */
import register from "../../data/ward-register.json" with { type: "json" };
import projectsByWard from "../../data/analysis/projects-by-ward.json" with { type: "json" };
import type { Figure, Tier, Unit } from "./schema";
// The team's edits from the in-site data editor (data/team/figures.json), applied as each figure is
// defined, so a figure derived from an edited one recomputes. See lib/data/team-overlay.ts.
import { FIGURE_EDITS, patchFigure } from "./team-overlay.ts";
import {
  AUDITOR_GENERAL_FY2023_24,
  CA_KNBS_ICT_2023_24,
  CONTROLLER_OF_BUDGET,
  COURT_OF_APPEAL_2018,
  FISCAL_STRATEGY_PAPER_FY2026_27,
  HIGH_COURT_2013,
  IEBC_PRESIDENTIAL_34C_2022,
  IEBC_REGISTER_2026_REPORTED,
  IEBC_WARD_REGISTER,
  KNBS_CENSUS_2019,
  KNBS_POVERTY_REPORT,
  MEDIA_2022_DECLARATION,
} from "../../data/sources.ts";

const FIG: Record<string, Figure> = {};

function add(original: Figure): Figure {
  if (FIG[original.id]) throw new Error(`figures: duplicate id ${original.id}`);
  const f = patchFigure(original);
  FIG[f.id] = f;
  return f;
}

function sourced(id: string, value: number, unit: Unit, tier: Tier, source: string, extra: Partial<Figure> = {}) {
  return add({ id, value, unit, tier, state: "sourced", source, ...extra });
}

function modelled(id: string, value: number, unit: Unit, note: string, extra: Partial<Figure> = {}) {
  return add({ id, value, unit, tier: extra.tier ?? "T1", state: "modelled", source: extra.source ?? "Derived in lib/data/figures.ts", note, ...extra });
}

function target(id: string, value: number, unit: Unit, note: string, extra: Partial<Figure> = {}) {
  return add({ id, value, unit, tier: null, state: "target", source: extra.source ?? "This plan", note, ...extra });
}

function needed(id: string, unit: Unit, closesWith: string) {
  if (FIG[id]) return FIG[id];
  return add({ id, value: null, unit, tier: null, state: "needed", source: null, closesWith });
}

/** Stable slug for a ward or constituency name: "Mji wa Kale/Makadara" -> "mji-wa-kale-makadara". */
export function slugOf(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const v = (id: string): number => {
  const f = FIG[id];
  if (!f || f.value === null) throw new Error(`figures: ${id} has no value`);
  return f.value;
};
const pct = (part: number, whole: number) => (part / whole) * 100;

/* =============================================================== 1. the register, generated */

const IEBC_WARDS = IEBC_WARD_REGISTER.name;

type Constituency = { id: string; name: string; voters: number; wards: { name: string; voters: number }[] };
const CONSTITUENCIES = register.constituencies as Constituency[];
const WARD_COUNT = CONSTITUENCIES.reduce((n, c) => n + c.wards.length, 0);

for (const c of CONSTITUENCIES) {
  sourced(`con.${c.id}`, c.voters, "voters", "T1", IEBC_WARDS);
  for (const w of c.wards) sourced(`ward.${slugOf(w.name)}`, w.voters, "voters", "T1", IEBC_WARDS);
}

const WARDS = CONSTITUENCIES.flatMap((c) => c.wards.map((w) => ({ ...w, constituency: c.id })))
  .sort((a, b) => b.voters - a.voters);

sourced("register.2022", register.countyTotalWards, "voters", "T1", IEBC_WARDS);
sourced("register.2022.prisons", register.prisonVoters, "voters", "T1", IEBC_WARDS, { note: "No prison voters are carried separately in the Mombasa ward file; the county total and the ward sum are the same 641,913." });
sourced("register.2022.with-prisons", register.countyTotalWithPrisons, "voters", "T1", IEBC_WARDS);
sourced("register.polling-stations", 1_041, "count", "T1", "IEBC 2022 polling station register (data/public-2026-11)");
sourced("register.registration-centres", 228, "count", "T1", "IEBC 2022 polling station register (data/public-2026-11)");
sourced("register.wards", WARD_COUNT, "count", "T1", IEBC_WARDS);
modelled("register.2022.ward-mean", Math.round(v("register.2022") / WARD_COUNT), "voters", "641,913 across 30 wards.");
// No 2026 Mombasa register figure is in hand. The 2022 register stands in, so every "2026"
// calculation below is a floor, and says so. When IEBC publishes the Mombasa row of the ECVR annex,
// replace this one value and every dependent figure recomputes.
modelled("register.2026", v("register.2022"), "voters", "No 2026 Mombasa register figure is in hand; the 2022 register stands in, so every 2026 calculation is a floor.", { source: IEBC_REGISTER_2026_REPORTED.name, tier: "T3" });
needed("register.2026.ecvr-drive", "voters", "IEBC ECVR county annex, Mombasa row (new registrations, 2026 drives)");
needed("register.2026.growth", "voters", "IEBC 2026 register, Mombasa total, less the 2022 register");
needed("register.2026.continuous", "voters", "IEBC 2026 register, Mombasa total, less 2022 and the ECVR drive");

/* ------------------------------------------------------------------ groupings of the register */

const sumCons = (...ids: string[]) => ids.reduce((n, id) => n + v(`con.${id}`), 0);
modelled("bloc.north", sumCons("kisauni", "nyali"), "voters", "Kisauni + Nyali: the north mainland, 2022 register.");
modelled("bloc.north.share", pct(v("bloc.north"), v("register.2022")), "percent", "North mainland / 2022 register.", { decimals: 2 });
modelled("bloc.west", sumCons("changamwe", "jomvu"), "voters", "Changamwe + Jomvu: the west mainland, 2022 register.");
modelled("bloc.west.share", pct(v("bloc.west"), v("register.2022")), "percent", "West mainland / 2022 register.", { decimals: 2 });
// The pool: the three constituencies where the 2022 governor's race was decided by fewer than
// 2,000 votes (Section 2.2): Nyali (807), Kisauni (1,046) and Changamwe (1,842).
const POOL = ["kisauni", "nyali", "changamwe"];
modelled("pool", sumCons(...POOL), "voters", "The close-contest belt: Kisauni, Nyali and Changamwe, where the 2022 governor's race was decided by fewer than 2,000 votes each.");
modelled("pool.share", pct(v("pool"), v("register.2022")), "percent", "Pool / 2022 register.");
modelled("pool.wards", CONSTITUENCIES.filter((c) => POOL.includes(c.id)).reduce((n, c) => n + c.wards.length, 0), "count", "Wards in the pool.");
for (const c of CONSTITUENCIES) modelled(`con.${c.id}.share`, pct(c.voters, v("register.2022")), "percent", `${c.name} / 2022 register.`, { decimals: 2 });
modelled("big4", sumCons("kisauni", "nyali", "mvita", "likoni"), "voters", "Kisauni, Nyali, Mvita and Likoni: the four largest constituencies.");
modelled("big4.share", pct(v("big4"), v("register.2022")), "percent", "Big 4 / 2022 register.", { decimals: 2 });

const top = (n: number) => WARDS.slice(0, n).reduce((s, w) => s + w.voters, 0);
modelled("pareto.top12", top(12), "voters", "The twelve largest wards, 2022 register.");
modelled("pareto.top12.share", pct(top(12), v("register.2022")), "percent", "Top 12 / 2022 register.", { decimals: 2 });
modelled("pareto.top20", top(20), "voters", "The twenty largest wards.");
modelled("pareto.top20.share", pct(top(20), v("register.2022")), "percent", "Top 20 / 2022 register.", { decimals: 2 });
const bottom10 = WARDS.slice(-10).reduce((s, w) => s + w.voters, 0);
modelled("pareto.bottom10", bottom10, "voters", "The ten smallest wards.");
modelled("pareto.bottom10.share", pct(bottom10, v("register.2022")), "percent", "Bottom 10 / 2022 register.", { decimals: 2 });
const top12InPool = WARDS.slice(0, 12).filter((w) => POOL.includes(w.constituency));
modelled("pareto.top12.in-pool", top12InPool.length, "count", "Of the twelve largest wards, those in the pool.");
modelled("pareto.top12.in-pool.voters", top12InPool.reduce((s, w) => s + w.voters, 0), "voters", "Registered voters in those wards.");
modelled("pareto.top12.in-pool.share", pct(top12InPool.reduce((s, w) => s + w.voters, 0), v("register.2022")), "percent", "Their share of the register.");
modelled("largest3", v("ward.timbwani") + v("ward.mikindani") + v("ward.majengo"), "voters", "Timbwani + Mikindani + Majengo: the three largest wards.");

/* =============================================================== 2. sourced figures */

// ---- results (Section 2.2). The 2022 governor figures reach this plan through media reporting
// of the returning officer's declaration of 30 August 2022, so they are Tier 2 until Form 37C is
// cited. Two runner-up totals were published; both are kept.
const MEDIA_2022 = MEDIA_2022_DECLARATION.name;
const HC_2018 = COURT_OF_APPEAL_2018.name;
const HC_2013 = HIGH_COURT_2013.name;
sourced("result.2022.gov.nassir", 119_083, "votes", "T2", MEDIA_2022, { asOf: "2022-08", note: "Abdulswamad Nassir, ODM." });
sourced("result.2022.gov.omar", 98_105, "votes", "T2", MEDIA_2022, {
  asOf: "2022-08",
  note: "Hassan Omar, UDA.",
  alt: { value: 98_108, source: "The Standard, KNA and NTV, 30 August 2022", tier: "T2", note: "A second published total. Form 37C settles which is certified." },
});
sourced("result.2022.gov.omar.media", 98_108, "votes", "T2", "The Standard, KNA and NTV, 30 August 2022", { note: "The second published total; The Star and Capital FM print 98,105." });
sourced("result.2022.gov.valid", 221_148, "votes", "T2", "Returning officer Swalha Yusuf, as reported by The Standard, 30 August 2022", { note: "Valid votes cast in the governor election of 29 August 2022." });
sourced("result.2022.gov.awiti", 875, "votes", "T2", "The Star, 30 August 2022", { note: "Hezron Awiti, VDP: third of seven candidates." });
sourced("result.2022.gov.kingi", 712, "votes", "T2", "The Star, 30 August 2022", { note: "William Kingi, PAA." });
sourced("result.2022.gov.candidates", 7, "count", "T2", "The Standard, 30 August 2022");
modelled("result.2022.gov.omar.share", pct(v("result.2022.gov.omar"), v("result.2022.gov.valid")), "percent", "98,105 / 221,148 valid votes.", { decimals: 2, tier: "T2" });
modelled("result.2022.gov.nassir.share", pct(v("result.2022.gov.nassir"), v("result.2022.gov.valid")), "percent", "119,083 / 221,148 valid votes.", { decimals: 2, tier: "T2" });
modelled("result.2022.gov.margin", v("result.2022.gov.nassir") - v("result.2022.gov.omar"), "votes", "119,083 less 98,105.", { tier: "T2" });
modelled("turnout.2022", pct(v("result.2022.gov.valid"), v("register.2022")), "percent", "Valid governor votes as a share of the 2022 register: 221,148 / 641,913. The returning officer gave 34%.", { tier: "T2" });
modelled("abstained.2022", v("register.2022") - v("result.2022.gov.valid"), "voters", "Registered voters who cast no valid governor vote on 29 August 2022: 641,913 less 221,148.", { tier: "T2" });
modelled("abstained.2022.share", pct(v("register.2022") - v("result.2022.gov.valid"), v("register.2022")), "percent", "Abstainers / the 2022 register.");

// The governor's race by constituency, 2022 (Section 2.4). Five constituencies as reported; Likoni
// is the county total less the five, so it is modelled.
const BY_CON_2022: [string, number, number][] = [
  ["changamwe", 17_740, 15_898],
  ["jomvu", 15_629, 11_038],
  ["kisauni", 21_796, 20_750],
  ["nyali", 22_387, 21_580],
  ["mvita", 24_106, 19_086],
];
for (const [id, n, o] of BY_CON_2022) {
  sourced(`result.2022.gov.${id}.nassir`, n, "votes", "T2", "The Standard and KNA, 30 August 2022 (constituency tallies)", { asOf: "2022-08" });
  sourced(`result.2022.gov.${id}.omar`, o, "votes", "T2", "The Standard and KNA, 30 August 2022 (constituency tallies)", { asOf: "2022-08" });
  modelled(`result.2022.gov.${id}.margin`, n - o, "votes", "Nassir less Omar in the constituency.", { tier: "T2" });
}
modelled("result.2022.gov.likoni.nassir", v("result.2022.gov.nassir") - BY_CON_2022.reduce((s, [, n]) => s + n, 0), "votes", "County total less the five reported constituencies.", { tier: "T2" });
modelled("result.2022.gov.likoni.omar", v("result.2022.gov.omar") - BY_CON_2022.reduce((s, [, , o]) => s + o, 0), "votes", "County total less the five reported constituencies.", { tier: "T2" });
modelled("result.2022.gov.likoni.margin", v("result.2022.gov.likoni.nassir") - v("result.2022.gov.likoni.omar"), "votes", "Nassir less Omar in Likoni.", { tier: "T2" });

sourced("result.2022.senate.faki", 113_694, "votes", "T2", "IEBC declaration as gazetted (Gazette 9955), via Mzalendo", { note: "Mohamed Faki, ODM." });
needed("result.2022.womanrep.zamzam", "votes", "IEBC Form 38C or the gazette notice, Mombasa Woman Representative 2022");

sourced("result.2017.gov.joho", 221_177, "votes", "T1", HC_2018, { asOf: "2017-08", note: "Hassan Joho, ODM, as recited by the election court." });
sourced("result.2017.gov.shahbal", 69_515, "votes", "T1", HC_2018, { asOf: "2017-08", note: "Suleiman Shahbal, Jubilee." });
sourced("result.2017.gov.omar", 43_787, "votes", "T1", HC_2018, { asOf: "2017-08", note: "Hassan Omar, Wiper." });
sourced("result.2017.gov.awiti", 4_709, "votes", "T1", HC_2018, { asOf: "2017-08" });
sourced("result.2017.gov.kitsao", 1_670, "votes", "T1", HC_2018, { asOf: "2017-08" });
modelled("result.2017.gov.valid", 221_177 + 69_515 + 43_787 + 4_709 + 1_670, "votes", "The five candidates' votes as recited by the court.");
modelled("result.2017.gov.shahbal.share", pct(v("result.2017.gov.shahbal"), v("result.2017.gov.valid")), "percent", "69,515 / the five candidates' votes.", { decimals: 1 });

sourced("result.2013.gov.joho", 132_583, "votes", "T1", HC_2013, {
  asOf: "2013-03",
  note: "Hassan Joho, ODM.",
  alt: { value: 132_507, source: "Court-ordered scrutiny, as reported (Star, 28 September 2013)", tier: "T2", note: "The scrutiny's recount; the declared figure stands." },
});
sourced("result.2013.gov.shahbal", 94_905, "votes", "T1", HC_2013, {
  asOf: "2013-03",
  note: "Suleiman Shahbal, Wiper: his highest tally to date.",
  alt: { value: 94_918, source: "Court-ordered scrutiny, as reported (Star, 28 September 2013)", tier: "T2", note: "The scrutiny added 13 votes; the declared figure stands." },
});
modelled("result.shahbal.drop", v("result.2013.gov.shahbal") - v("result.2017.gov.shahbal"), "votes", "94,905 (2013) less 69,515 (2017).");
modelled("result.2013.gov.gap", v("result.2013.gov.joho") - v("result.2013.gov.shahbal"), "votes", "132,583 less 94,905: the closest he has come.");
modelled("result.2013.gov.shahbal.share-of-two", pct(v("result.2013.gov.shahbal"), v("result.2013.gov.joho") + v("result.2013.gov.shahbal")), "percent", "Shahbal / (Joho + Shahbal), 2013: his share of the two-way vote.");

const PRES = IEBC_PRESIDENTIAL_34C_2022.name;
sourced("result.2022.pres.odinga.share", 58.07, "percent", "T1", PRES, { decimals: 2 });
sourced("result.2022.pres.ruto.share", 41.0, "percent", "T1", PRES, { decimals: 2 });
sourced("result.2022.pres.wajackoyah.share", 0.76, "percent", "T1", PRES, { decimals: 2 });
sourced("result.2022.pres.mwaure.share", 0.17, "percent", "T1", PRES, { decimals: 2 });

// ---- the benchmark and the arithmetic (Section 2.5)
target("benchmark", 120_000, "votes", "The single working benchmark: the 2022 winning tally, 119,083, rounded. Stated once in Section 2.5 and reused everywhere.");
target("benchmark.high", 221_177, "votes", "The high-turnout benchmark: Joho's 2017 tally, when turnout was far higher. Used only to bracket the working benchmark.");
modelled("benchmark.share-2022", pct(v("result.2022.gov.nassir"), v("register.2022")), "percent", "119,083 / 641,913: the 2022 winner's share of the register.");
modelled("benchmark.2026-equivalent", Math.round((v("result.2022.gov.nassir") / v("register.2022")) * v("register.2026")), "votes", "The 2022 winner's share of the register applied to the register in use. A ratio carried forward, not a forecast.");
modelled("benchmark.2026-equivalent.rounded", Math.round(v("benchmark.2026-equivalent") / 5000) * 5000, "votes", "The equivalent, rounded to the nearest 5,000 for prose.");
modelled("benchmark.2026-equivalent.share", pct(v("result.2022.gov.nassir"), v("register.2022")), "percent", "The share carried forward: 119,083 / 641,913.");
target("turnout.constant", Math.round(v("turnout.2022") * 10) / 10, "percent", "The turnout rate used in every calculation: the 2022 governor election's rate carried forward to 2027. An assumption, and a low one: that election was held three weeks after the general election, after two postponements. The scenario model brackets it at 34–55%.", { decimals: 1 });
const TURNOUT = v("turnout.constant") / 100;
modelled("turnout.rate", TURNOUT, "percent", "The turnout rate as a multiplier, for the working shown in Section 2.5.", { decimals: 3 });
sourced("ballots.2022", v("result.2022.gov.valid"), "votes", "T2", MEDIA_2022, { note: "Valid votes for governor, 2022: the turnout universe the benchmark is measured against." });
modelled("ballots.2026", Math.round(v("register.2026") * TURNOUT), "votes", "Register in use × the 2022 turnout rate, carried forward.");
modelled("benchmark.share-of-ballots.2026", pct(v("benchmark"), v("register.2026") * TURNOUT), "percent", "120,000 / ballots at the 2022 turnout rate on the register in use.");
modelled("benchmark.share-of-ballots", pct(v("benchmark"), v("ballots.2022")), "percent", "120,000 / the 221,148 valid 2022 ballots.");
modelled("benchmark.share-of-register", pct(v("benchmark"), v("register.2022")), "percent", "120,000 / 2022 register.");
modelled("benchmark.like-for-like.2026", Math.round((v("result.2022.gov.nassir") / v("register.2022")) * v("register.2026")), "votes", "119,083 / 641,913 × the register in use.", { tier: "T3" });
modelled("benchmark.gap.2013", v("benchmark") - v("result.2013.gov.shahbal"), "votes", "120,000 less his 2013 tally of 94,905.");
modelled("benchmark.gap.2017", v("benchmark") - v("result.2017.gov.shahbal"), "votes", "120,000 less his 2017 tally of 69,515.");

// ---- the four routes (Section 2.5): registered voters, ballots at the constant, and the margin
// against 120,000 at 100% of ballots.
const ROUTES: [string, number, string][] = [
  ["a", v("bloc.north"), "Kisauni + Nyali (the north mainland)"],
  ["b", sumCons("mvita", "likoni"), "Mvita + Likoni (the Island and the south)"],
  ["c", top(12), "The twelve largest wards"],
  ["d", v("pool"), "Kisauni + Nyali + Changamwe (the close-contest belt)"],
];
for (const [key, registered, what] of ROUTES) {
  modelled(`path.${key}.registered`, registered, "voters", `${what}, 2022 register.`);
  modelled(`path.${key}.share`, pct(registered, v("register.2022")), "percent", `${what} / 2022 register.`, { decimals: 2 });
  const ballots = Math.round(registered * TURNOUT);
  modelled(`path.${key}.ballots`, ballots, "votes", `${what} × the 2022 turnout rate, carried forward.`);
  modelled(`path.${key}.margin`, ballots - v("benchmark"), "votes", "Ballots at the constant less 120,000, even if every ballot went to him.");
}
for (const key of ["a", "d"]) {
  const eighty = Math.round(0.8 * v(`path.${key}.ballots`));
  modelled(`path.${key}.at80`, eighty, "votes", "80% of the route's ballots.");
  modelled(`path.${key}.at80.short`, v("benchmark") - eighty, "votes", "120,000 less 80% of the route's ballots.");
}
// What turnout does: the same register at the 2017-style rate the scenario model brackets.
modelled("turnout.abstainers.to-benchmark", pct(v("benchmark") - v("result.2013.gov.shahbal"), v("abstained.2022")), "percent", "The votes he needs beyond his 2013 tally, as a share of the 2022 abstainers.");

// ---- people and economy (Section 1). KNBS 2019 Census unless stated.
const CENSUS = KNBS_CENSUS_2019.name;
const CENSUS_V1 = "KNBS 2019 Census Volume I, Table 2.5 (population by sex and sub-county), via rKenyaCensus";
const CENSUS_V2 = "KNBS 2019 Census Volume II, Table 2.2 (households, land area and density), via rKenyaCensus";
sourced("census.population", 1_208_333, "people", "T1", CENSUS_V1);
sourced("census.male", 610_257, "people", "T1", CENSUS_V1);
sourced("census.female", 598_046, "people", "T1", CENSUS_V1);
sourced("census.intersex", 30, "people", "T1", CENSUS_V1);
modelled("census.female.share", pct(598_046, 1_208_333), "percent", "Women / residents.");
sourced("census.households", 378_422, "households", "T1", CENSUS_V2);
sourced("census.area", 220, "km2", "T1", CENSUS_V2, { note: "Land area. Gazette Notice 12251 uses 219 km² for the spending formula." });
sourced("census.density", 5_495, "per-km2", "T1", CENSUS_V2, { note: "Persons per square kilometre: the highest of any county outside Nairobi." });
modelled("census.household-size", 1_208_333 / 378_422, "persons", "Residents / households.", { decimals: 1 });
const CRA = "CRA, Kenya County Fact Sheets, 3rd edition (Mombasa), from KNBS 2019 Census Volume II";
sourced("census.rural", 0, "people", "T2", CRA, { note: "Mombasa is classed entirely urban." });
sourced("census.urban", 1_208_333, "people", "T2", CRA);
sourced("census.rural.share", 0, "percent", "T2", CRA);
sourced("census.urban.share", 100, "percent", "T2", CRA);
sourced("census.subcounties", 6, "count", "T1", CENSUS, { note: "Mombasa's six KNBS sub-counties carry the same names and boundaries as its six constituencies." });

const CENSUS_V3 = "KNBS 2019 Census Volume III, Table 2.3 (population by age, sex and sub-county), via rKenyaCensus";
const AGE_NOTE = "Share of Mombasa's 1,208,277 residents with age stated, summed from single years.";
modelled("census.median-age", 24.0, "count", "Median age in years, interpolated within the single year of age where the cumulative count of residents passes half: 603,614 are under 24 and 30,165 are aged 24, of 1,208,277 with age stated.", { source: CENSUS_V3, asOf: "2019", decimals: 1 });
sourced("census.age.0-14.share", 32.6, "percent", "T1", CENSUS_V3, { asOf: "2019", note: AGE_NOTE });
sourced("census.age.15-34.share", 41.8, "percent", "T1", CENSUS_V3, { asOf: "2019", note: AGE_NOTE });
sourced("census.age.35-59.share", 22.4, "percent", "T1", CENSUS_V3, { asOf: "2019", note: AGE_NOTE });
sourced("census.age.60-plus.share", 3.2, "percent", "T1", CENSUS_V3, { asOf: "2019", note: AGE_NOTE });
sourced("census.adults", 756_906, "people", "T1", CENSUS_V3, { asOf: "2019", note: "Residents aged 18 and over." });
sourced("census.adults.18-34", 447_253, "people", "T1", CENSUS_V3, { asOf: "2019", note: "Residents aged 18 to 34." });
modelled("census.adults.18-34.share", pct(447_253, 756_906), "percent", "18–34 / all residents aged 18 and over.", { source: CENSUS_V3 });

const CENSUS_V4_LIGHT = "KNBS 2019 Census Volume IV, Table 2.19 (main lighting fuel), via rKenyaCensus";
sourced("electricity.mains.2019", 85.9, "percent", "T1", CENSUS_V4_LIGHT, { asOf: "2019", note: "Mombasa's conventional households whose main lighting is mains electricity." });
sourced("electricity.national", 50.4, "percent", "T1", CENSUS_V4_LIGHT, { asOf: "2019", note: "Kenya's conventional households whose main lighting is mains electricity. A national figure." });

const POVERTY = KNBS_POVERTY_REPORT.name;
sourced("poverty.2021", 31.8, "percent", "T2", POVERTY, { asOf: "2021", note: "Overall headcount poverty; Kenya 38.6%." });
sourced("poverty.2021.people", 402_000, "people", "T2", POVERTY, { asOf: "2021" });
sourced("poverty.2021.national", 38.6, "percent", "T1", "KNBS, Kenya Poverty Report 2021", { asOf: "2021", note: "National rate." });
sourced("poverty.2022", 27.0, "percent", "T2", "KNBS, Kenya Poverty Report 2022, via Stats Kenya", { asOf: "2022" });
sourced("poverty.food.2021", 29.3, "percent", "T2", POVERTY, { asOf: "2021", note: "Food poverty; Kenya 30.5%." });
sourced("poverty.hardcore.2021", 1.0, "percent", "T2", POVERTY, { asOf: "2021" });
sourced("gva.share", 5.1, "percent", "T1", "KNBS Gross County Product 2023, via KIPPRA Mombasa county brief", { note: "Mombasa's average share of national Gross Value Added, 2013–2022." });
sourced("gva.services", 65.5, "percent", "T1", "KNBS Gross County Product 2023, via KIPPRA Mombasa county brief", { note: "Services' average share of Mombasa's GVA." });

// ---- sub-county census tables (Section 1.2). KNBS sub-counties = constituencies in Mombasa.
const SUBCOUNTIES: [string, number, number, number][] = [
  // id, population, conventional households, gazette area km² (GN 2021 Third Schedule)
  ["changamwe", 131_882, 46_439, 16],
  ["jomvu", 163_415, 53_214, 29],
  ["kisauni", 291_930, 88_159, 88],
  ["nyali", 216_577, 69_771, 22],
  ["likoni", 250_358, 80_002, 42],
  ["mvita", 154_171, 38_710, 16],
];
for (const [id, pop, hh, area] of SUBCOUNTIES) {
  sourced(`sub.${id}.population`, pop, "people", "T1", CENSUS_V1);
  sourced(`sub.${id}.households`, hh, "households", "T1", "KNBS 2019 Census Volume IV, Table 2.19 (conventional households), via rKenyaCensus");
  modelled(`sub.${id}.density`, pop / area, "per-km2", `Population / the ${area} km² the 2021 spending-limit gazette gives the constituency.`, { source: CENSUS_V1 });
}
const zoneSum = (ids: string[], field: string) => ids.reduce((n, id) => n + v(`sub.${id}.${field}`), 0);
// Three zones, and Likoni rotating: the Island (Mvita), the north mainland (Kisauni, Nyali) and the
// west mainland (Changamwe, Jomvu). Internal ids keep the platform's names: anchor, mwingi, arid.
const ZONES: [string, string[], string][] = [
  ["anchor", ["mvita"], "the Island"],
  ["mwingi", ["kisauni", "nyali"], "the north mainland"],
  ["arid", ["changamwe", "jomvu"], "the west mainland"],
];
for (const [zone, ids, label] of ZONES) {
  modelled(`zone.${zone}.population`, zoneSum(ids, "population"), "people", `Sum of ${label}'s sub-counties: ${ids.join(", ")}.`);
  modelled(`zone.${zone}.households`, zoneSum(ids, "households"), "households", `Sum of ${label}'s sub-counties.`);
  modelled(`zone.${zone}.share`, pct(zoneSum(ids, "population"), v("census.population")), "percent", "Zone population / county.");
}
modelled("zones.population", ZONES.reduce((n, [, ids]) => n + zoneSum(ids, "population"), 0), "people", "The three zones together.");
modelled("zones.share", pct(v("zones.population"), v("census.population")), "percent", "The three zones / county.");
modelled("zones.excluded", Math.round((v("census.population") - v("zones.population")) / 1e4) * 1e4, "people", "Residents in no zone (Likoni, the rotating constituency), rounded to the nearest 10,000.");
modelled("zones.excluded.share", 100 - v("zones.share"), "percent", "Likoni / county: 100 less the three zones' share.");
modelled("zone.anchor.register.share", pct(v("con.mvita"), v("register.2022")), "percent", "Mvita / 2022 register.");
modelled("zone.mwingi.register.share", pct(v("bloc.north"), v("register.2022")), "percent", "Kisauni + Nyali / 2022 register.");
modelled("zone.arid.register.share", pct(v("bloc.west"), v("register.2022")), "percent", "Changamwe + Jomvu / 2022 register.");

// ---- connectivity (Section 4). CA/KNBS 2023/24 is current; 2019 is comparison only.
const CA_2024 = CA_KNBS_ICT_2023_24.name;
const CENSUS_V4_ICT = "KNBS 2019 Census Volume IV, Tables 2.32 and 2.33 (phone ownership and internet use, persons aged 3+), via rKenyaCensus";
sourced("ict.internet", 46.9, "percent", "T1", CA_2024, { asOf: "2023-24", note: "Individuals using the internet: fourth-highest county in Kenya." });
sourced("ict.phone", 61.8, "percent", "T1", CENSUS_V4_ICT, { asOf: "2019", note: "Mobile phone ownership, persons aged 3 and over, 2019. The 2023/24 county row is to be read from the CA/KNBS report table." });
modelled("ict.offline", 100 - 46.9, "percent", "100% less 46.9% internet use.", { source: CA_2024 });
sourced("ict.internet.2019", 39.2, "percent", "T1", CENSUS_V4_ICT, { asOf: "2019" });
sourced("ict.phone.2019", 61.8, "percent", "T1", CENSUS_V4_ICT, { asOf: "2019" });
sourced("ict.internet.2019.people", 431_327, "people", "T1", CENSUS_V4_ICT);
sourced("ict.phone.2019.people", 679_402, "people", "T1", CENSUS_V4_ICT);
for (const [id, internet, phone] of [["changamwe", 39.9, 65.3], ["jomvu", 32.2, 59.1], ["kisauni", 35.6, 58.7], ["likoni", 33.0, 58.9], ["mvita", 55.2, 66.4], ["nyali", 44.9, 65.7]] as [string, number, number][]) {
  sourced(`ict.internet.2019.${id}`, internet, "percent", "T1", CENSUS_V4_ICT, { asOf: "2019" });
  sourced(`ict.phone.2019.${id}`, phone, "percent", "T1", CENSUS_V4_ICT, { asOf: "2019" });
}
const CA_Q3 = "Communications Authority, Q3 FY2025/26 sector statistics";
sourced("ict.smartphone-share", 59.7, "percent", "T2", CA_Q3, { note: "50.2m smartphones / 84.1m active SIMs, national." });
sourced("ict.sim-penetration", 157.7, "percent", "T1", CA_Q3);
sourced("ict.momo-penetration", 100.1, "percent", "T1", CA_Q3);
sourced("ict.sims.national", 84.1e6, "count", "T1", CA_Q3, { decimals: 1, note: "Active SIM cards, national." });
sourced("ict.smartphones.national", 50.2e6, "count", "T2", CA_Q3, { decimals: 1, note: "Smartphones, national." });
sourced("ict.broadband.national", 62.6e6, "count", "T1", CA_Q3, { decimals: 1, note: "Mobile broadband subscriptions, national." });
sourced("ict.momo.national", 53.4e6, "count", "T1", CA_Q3, { decimals: 1, note: "Mobile money subscriptions, national." });
sourced("ict.agents", 602_470, "count", "T1", CA_Q3, { asOf: "2026-03" });
sourced("ict.agents.2025", 480_216, "count", "T1", "Communications Authority, sector statistics", { asOf: "2025-09" });
const ICT_NATIONAL = `${CA_2024} (national tables)`;
for (const [id, value] of [
  ["ict.kenya.internet", 35.0], ["ict.kenya.internet.rural", 25.0], ["ict.kenya.internet.urban", 56.6],
  ["ict.kenya.internet.15-24", 46.6], ["ict.kenya.internet.25-34", 59.3], ["ict.kenya.internet.35-44", 47.1],
  ["ict.kenya.youth", 58.6], ["ict.kenya.youth.urban", 78.7], ["ict.nairobi.youth", 83.1],
  ["ict.kenya.phone", 53.7], ["ict.nairobi.internet", 64.7],
] as [string, number][]) sourced(id, value, "percent", "T1", ICT_NATIONAL, { asOf: "2023/24", note: "National or Nairobi figure, not a Mombasa figure." });
sourced("ict.mombasa.youth", 70.4, "percent", "T1", ICT_NATIONAL, { asOf: "2023/24", note: "Mombasa's young people using the internet." });

// ---- modelled reach on the register in use (Section 4.1).
const REACH = "Published rates × the register in use (Section 4.1)";
modelled("reach.smartphone", Math.round((v("register.2026") * v("ict.internet")) / 100), "voters", "46.9% internet use applied to the register in use.", { source: REACH });
modelled("reach.sms-only", Math.round((v("register.2026") * (v("ict.phone") - v("ict.internet"))) / 100), "voters", "61.8% phone ownership less 46.9% internet use, on the register in use. Mixes a 2019 and a 2023/24 rate: an estimate.", { source: REACH, tier: "T2" });
modelled("reach.nophone", v("register.2026") - v("reach.smartphone") - v("reach.sms-only"), "voters", "The remainder of the register in use: no phone of their own.", { source: REACH, tier: "T2" });
modelled("reach.offline", v("register.2026") - v("reach.smartphone"), "voters", "The register in use less those reachable online.");
modelled("reach.smartphone.short", v("benchmark") - v("reach.smartphone"), "votes", "120,000 less the digital ceiling.");
modelled("reach.smartphone.of-benchmark", pct(v("reach.smartphone"), v("benchmark")), "percent", "The digital ceiling / 120,000.");
modelled("reach.phone.resident", v("reach.smartphone") + v("reach.sms-only"), "voters", "Phone owners: reachable online plus reachable by SMS only.", { source: REACH, tier: "T2" });

// ---- the county budget (Section 1.5). FY2025/26 is the last year with a full picture in hand.
const BUDGET = "Controller of Budget, FY2025/26 county budget implementation review (Mombasa), as reported by Business Radar";
sourced("budget.total", 18.73e9, "ksh", "T3", BUDGET, { asOf: "2025-26", decimals: 2, note: "Approved supplementary budget, FY2025/26, of which KSh 5.62bn (30%) for development. Read through secondary reporting; verify against the CBIRR." });
sourced("budget.development", 5.62e9, "ksh", "T3", BUDGET, { asOf: "2025-26", decimals: 2 });
sourced("budget.equitable", 8.38e9, "ksh", "T3", BUDGET, { asOf: "2025-26", decimals: 2, note: "Equitable share, FY2025/26." });
sourced("budget.equitable.2026-27", 8.66e9, "ksh", "T3", FISCAL_STRATEGY_PAPER_FY2026_27.name, { asOf: "2026-27", decimals: 2, note: "Equitable share for FY2026/27; with KSh 0.21bn national grants and KSh 0.20bn partner funds, KSh 9.06bn in transfers." });
sourced("budget.osr", 6.21e9, "ksh", "T3", BUDGET, { asOf: "2025-26", decimals: 2, note: "Own-source revenue, FY2025/26, including KSh 2.41bn from county hospitals." });
modelled("budget.grants", 18.73e9 - 8.38e9 - 6.21e9, "ksh", "The budget less the equitable share and own-source revenue: grants, loans, and balances brought forward, together.", { decimals: 2, tier: "T3" });
modelled("budget.rounding", 0, "ksh", "No rounding segment: the remainder above absorbs it.", { decimals: 2, tier: "T3" });
modelled("budget.equitable.share", pct(8.38e9, 18.73e9), "percent", "Equitable share / budget.", { tier: "T3" });
modelled("budget.osr.share", pct(6.21e9, 18.73e9), "percent", "Own-source revenue / budget.", { tier: "T3" });
modelled("budget.grants.share", pct(18.73e9 - 8.38e9 - 6.21e9, 18.73e9), "percent", "The remainder / budget.", { tier: "T3" });
modelled("budget.development.share", pct(5.62e9, 18.73e9), "percent", "Development / budget.", { tier: "T3" });
sourced("budget.estimates.2025-26", 14.6e9, "ksh", "T2", "Eastleigh Voice, Mombasa County Executive Committee budget estimates FY2025/26", { decimals: 1, note: "The original estimates, before the supplementary budget." });
sourced("budget.health.2025-26", 4.75e9, "ksh", "T2", "Eastleigh Voice, Mombasa County Executive Committee budget estimates FY2025/26", { decimals: 2 });
sourced("budget.overdraft.2026-06", 620.52e6, "ksh", "T3", BUDGET, { asOf: "2026-06", decimals: 2, note: "Overdraft from KCB to pay June 2026 salaries." });
sourced("budget.ward-dev", 4e9, "ksh", "T2", "The Standard, on the County Equitable Share Bill (2025)", { decimals: 0, note: "The annual development budget the bill would have shared, 30% equally across the 30 wards." });

const COB = CONTROLLER_OF_BUDGET.name;
sourced("budget.pending-bills.2021", 4.4e9, "ksh", "T2", "Controller of Budget, as reported by AllAfrica (September 2024)", { asOf: "2024", decimals: 1, note: "Pending bills: third-highest of the 47 counties (KSh 2.7bn recurrent, KSh 1.7bn development)." });
sourced("budget.pending-bills.2026", 3.8e9, "ksh", "T3", BUDGET, { asOf: "2026-06", decimals: 1, note: "Outstanding bills at 30 June 2026, almost all owed by the executive." });
sourced("budget.pending-bills.aged", 98, "percent", "T2", "Nation, reporting the Controller of Budget (2026)", { decimals: 0, note: "Share of Mombasa's pending bills older than three years: the highest proportion in Kenya." });
needed("budget.absorption.q1", "percent", `${COB}: Mombasa development absorption, latest quarter`);
const OAG = AUDITOR_GENERAL_FY2023_24.name;
needed("audit.cash", "ksh", `${OAG}: the basis-for-qualification paragraphs`);
needed("audit.uncollected", "ksh", `${OAG}: revenue arrears`);
needed("audit.ifmis", "ksh", `${OAG}: payments outside IFMIS`);
needed("audit.transfers", "ksh", `${OAG}: unsupported transfers`);
needed("audit.pending.contested", "ksh", `${OAG}: pending bills disputed by the auditor`);

// ---- water (Section 3.2)
const WATER_GOV = "Governor Abdulswamad Nassir, as reported by The Star and KNA (2025)";
const WATER_CS = "Water CS Eric Mugaa to the Senate Committee on Lands, Environment and Natural Resources, 18 June 2026, as reported";
sourced("water.demand", 200_000, "count", "T2", WATER_GOV, { note: "Cubic metres a day Mombasa needs." });
sourced("water.supply", 40_000, "count", "T2", WATER_GOV, { note: "Cubic metres a day Mombasa receives, from Baricho, Marere and Mzima." });
sourced("water.delivered", 20_000, "count", "T2", WATER_GOV, { note: "Cubic metres a day that reach residents after leaks and theft." });
sourced("water.nrw", 60, "percent", "T2", "Kenya News Agency, October 2026", { decimals: 0, note: "Non-revenue water: lost to leaks and illegal connections, about KSh 100m of lost county water revenue every month (the county's estimate)." });
modelled("water.supply.share", pct(40_000, 200_000), "percent", "Supply / demand.", { tier: "T2" });
modelled("water.delivered.share", pct(20_000, 200_000), "percent", "Water reaching residents / demand.", { tier: "T2" });
sourced("water.mowasco.met", 11.6, "percent", "T2", "Nation, reporting the water regulator's FY2025/26 performance review (2026)", { note: "Share of residents' demand Mombasa Water met in the year to June 2026: 10m m³ against 85.9m m³." });
sourced("water.mowasco.debt", 1.47e9, "ksh", "T2", "Nation, reporting the water regulator's FY2025/26 performance review (2026)", { decimals: 2 });
sourced("water.coast.demand", 512_000, "count", "T1", WATER_CS, { note: "Cubic metres a day, Mombasa, Kwale, Kilifi and Taita Taveta together." });
sourced("water.coast.supply", 185_000, "count", "T1", WATER_CS);
sourced("water.coast.deficit", 327_000, "count", "T1", WATER_CS);
sourced("water.mwache", 186_000, "count", "T1", WATER_CS, { note: "Cubic metres a day Mwache Dam will add for Mombasa and Kwale; 86% complete at June 2026, impoundment due from October 2026." });
sourced("water.mwache.complete", 86, "percent", "T1", WATER_CS, { decimals: 0, asOf: "2026-06" });
sourced("water.mzima2", 105_000, "count", "T2", "Nation, on the Mzima II pipeline (2026)", { note: "Cubic metres a day the planned Sh51bn Mzima II pipeline would carry to the Coast." });
sourced("price.water.vendor", 30, "ksh", "T2", WATER_GOV, { note: "Per 20-litre jerrican from vendors: KSh 30–40." });
sourced("price.water.county", 5, "ksh", "T2", WATER_GOV, { note: "Per jerrican at county sources." });

// ---- the candidate's record (Section 6)
const SEZ = "The Standard, Citizen Digital and Nation reporting on the GulfCap–DP World Mombasa SEZ (July–September 2026)";
sourced("record.sez.ksh", 12e9, "ksh", "T2", SEZ, { decimals: 0, note: "More than US$100m: GulfCap Group, DP World and Mombasa County, signed at State House on 8 September 2026." });
sourced("record.sez.acres", 535, "count", "T2", SEZ, { note: "Acres, in Jomvu." });
sourced("record.sez.jobs", 7_972, "count", "T2", SEZ, { note: "Direct jobs projected by the promoters. A projection, not a count." });
sourced("record.sez.firms", 67, "count", "T2", SEZ, { note: "Companies confirmed before construction, as the promoters report." });
sourced("record.gab.founded", 2008, "count", "T2", "Wikipedia and The Standard, on Gulf African Bank", { note: "Year he founded Gulf African Bank, Kenya's first Islamic bank." });
needed("channel.fb.followers", "count", "His public Facebook page, follower count read on the Week 1 export");
needed("channel.fb.posts", "count", "His public Facebook page, post count read on the Week 1 export");
needed("channel.x.followers", "count", "His public X profile, follower count read on the Week 1 export");

// ---- segment sizes that are derived rather than measured (Section 11)
modelled("segment.rural.voters", 0, "voters", "Mombasa is classed entirely urban.");
modelled("segment.urban.voters", v("register.2022"), "voters", "The whole 2022 register.");
modelled("segment.youth.voters", Math.round((v("register.2022") * v("census.adults.18-34.share")) / 100 / 1000) * 1000, "voters", "The 2019 census share of adults aged 18–34 (59.1%) applied to the 2022 register, rounded. The register is not published by age, and young people register less, so this is a ceiling.", { source: CENSUS_V3, tier: "T2" });
modelled("segment.youth.share", pct(v("segment.youth.voters"), v("register.2022")), "percent", "Youth voters / the 2022 register.", { decimals: 0, tier: "T2" });

/* =============================================================== 4. targets */

const T_FIREFLY = "Firefly's target, this plan";
const T_CAMPAIGN = "The campaign's build target, this plan";
target("target.sms.phase-1", 15_000, "count", "Consented SMS contacts by the end of Phase −1.", { source: T_FIREFLY });
target("target.sms.phase-1b", 40_000, "count", "Consented SMS contacts, Phase 1.", { source: T_FIREFLY });
target("target.sms.phase-2", 80_000, "count", "Consented SMS contacts, Phase 2.", { source: T_FIREFLY });
target("target.sms", 120_000, "count", "Consented SMS/USSD contacts by Phase 3 (objective 8.3.3).", { source: T_FIREFLY });
target("target.ussd.phase-1", 5_000, "count", "USSD unique sessions, Phase 1.", { source: T_FIREFLY });
target("target.ussd.phase-2", 25_000, "count", "USSD unique sessions, Phase 2.", { source: T_FIREFLY });
target("target.ussd.phase-3", 60_000, "count", "USSD unique sessions, Phase 3.", { source: T_FIREFLY });
target("target.tracker.phase-1", 500, "count", "Tracker reports, Phase 1.", { source: T_FIREFLY });
target("target.tracker.phase-2", 3_000, "count", "Tracker reports, Phase 2.", { source: T_FIREFLY });
target("target.tracker.phase-3", 8_000, "count", "Tracker reports, Phase 3.", { source: T_FIREFLY });
target("target.reach.phase-1", 1_000_000, "count", "Combined social reach, Phase 1: an operational diagnostic, not a performance indicator.", { source: T_FIREFLY });
target("target.reach.phase-2", 3_000_000, "count", "Cumulative reach, Phase 2: diagnostic.", { source: T_FIREFLY });
target("target.reach.phase-3", 5_000_000, "count", "Cumulative reach, Phase 3: diagnostic.", { source: T_FIREFLY });
target("target.followers.phase-1", 50_000, "count", "Engaged followers, Phase 1: diagnostic.", { source: T_FIREFLY });
target("target.followers.phase-2", 150_000, "count", "Engaged followers, Phase 2: diagnostic.", { source: T_FIREFLY });
target("target.followers.phase-3", 250_000, "count", "Engaged followers, Phase 3: diagnostic.", { source: T_FIREFLY });
target("target.subscribers.phase-1", 5_000, "count", "Email/SMS subscribers, Phase 1.", { source: T_FIREFLY });
target("target.subscribers.phase-2", 15_000, "count", "Email/SMS subscribers, Phase 2.", { source: T_FIREFLY });
target("target.volunteers.phase-1", 1_000, "count", "Digital volunteer sign-ups, Phase 1 (campaign-owned programme).", { source: T_CAMPAIGN });
target("target.volunteers.phase-2", 5_000, "count", "Digital volunteer sign-ups, Phase 2 (campaign-owned programme).", { source: T_CAMPAIGN });
target("target.pledges", 30_000, "count", "Digital pledges to vote, Phase 3.", { source: T_CAMPAIGN });
target("target.supporters", 130_000, "count", "Verified supporters mapped to polling stations by 31 May 2027 (objective 8.3.4): the benchmark plus a margin.", { source: T_CAMPAIGN });
target("target.pledged-voters", 140_000, "count", "Pledged voters in the CRM (GE-01).", { source: T_CAMPAIGN });
target("target.contact-universe.lean", 60_000, "count", "Realistic Phase 3 contact universe at Level 1.", { source: T_FIREFLY });
target("target.contact-universe.standard", 150_000, "count", "Realistic Phase 3 contact universe at Level 2.", { source: T_FIREFLY });
target("target.contact-universe.premium", 250_000, "count", "Realistic Phase 3 contact universe at Level 3.", { source: T_FIREFLY });
target("target.content.first", 100, "count", "Pieces of content approved and scheduled in Phase 0.", { source: T_FIREFLY });
target("target.captains", 300, "count", "Ward captains, 10 per ward: a campaign-owned recommendation.", { source: T_CAMPAIGN });
target("target.coordinators", 30, "count", "Ward coordinators, one per ward: a campaign-owned recommendation.", { source: T_CAMPAIGN });
target("target.captains.pool", 170, "count", "Of the 300 captains, those recommended for the pool's 17 wards: campaign-owned.", { source: T_CAMPAIGN });
target("target.ambassadors", 600, "count", "M-Pesa 'Economic Ambassadors', 20 per ward: a campaign-owned recommendation.", { source: T_CAMPAIGN });
target("target.stage-champions", 900, "count", "Boda-boda and tuk-tuk Stage Champions, 30 per ward: a campaign-owned recommendation.", { source: T_CAMPAIGN });
target("target.volunteer-points", 100, "count", "Average points per volunteer per month: the campaign-owned volunteer programme's target.", { source: T_CAMPAIGN });
target("target.whatsapp-groups", 180, "count", "Community WhatsApp groups monitored by the 30 ward monitoring assistants.", { source: T_FIREFLY });
target("target.polling-agents", 1_041, "count", "One trained agent per polling station: a campaign-owned requirement.", { source: T_CAMPAIGN });

// ---- Firefly's effort weighting by zone (Section 11): shares of communications effort, by phase.
// anchor = the Island, mwingi = the north mainland, arid = the west mainland, rotating = Likoni and testing.
const EFFORT: [string, number, number, number, number][] = [
  ["p-1", 20, 40, 25, 15],
  ["p12", 20, 35, 25, 20],
  ["p3", 20, 35, 25, 20],
];
for (const [phase, anchor, mwingi, arid, rotating] of EFFORT) {
  target(`effort.${phase}.anchor`, anchor, "percent", "Share of communications effort to the Island (Mvita).", { source: T_FIREFLY, decimals: 0 });
  target(`effort.${phase}.mwingi`, mwingi, "percent", "Share of communications effort to the north mainland (Kisauni, Nyali).", { source: T_FIREFLY, decimals: 0 });
  target(`effort.${phase}.arid`, arid, "percent", "Share of communications effort to the west mainland (Changamwe, Jomvu).", { source: T_FIREFLY, decimals: 0 });
  target(`effort.${phase}.rotating`, rotating, "percent", "Share of communications effort to Likoni and to rotating ward tests.", { source: T_FIREFLY, decimals: 0 });
}
// Where communications effort goes by channel (Section 12): the conventional pitch as Firefly
// characterises it, and the rebalanced target. Shares of effort, not money. Mombasa is more online
// than most counties (46.9% internet use), so digital keeps a larger share than in a rural county.
const CHANNEL_SHIFT: [string, string, number, number][] = [
  ["radio", "Coast radio in Kiswahili (Rahma, Salaam, Pwani FM, Baraka FM)", 20, 28],
  ["sms", "Direct SMS and the USSD tree", 10, 18],
  ["markets", "Markets, stages and barazas (Kongowea, Marikiti, Majengo)", 15, 16],
  ["digital", "Digital and social media", 45, 30],
  ["church", "Mosque, church and community outreach", 10, 8],
];
for (const [id, label, from, to] of CHANNEL_SHIFT) {
  target(`channel.${id}.conventional`, from, "percent", `${label}: share of effort in the conventional pitch, as Firefly characterises it.`, { source: T_FIREFLY, decimals: 0 });
  target(`channel.${id}.rebalanced`, to, "percent", `${label}: share of effort, rebalanced.`, { source: T_FIREFLY, decimals: 0 });
}
target("channel.offline.rebalanced", CHANNEL_SHIFT.filter(([id]) => id !== "digital").reduce((n, [, , , to]) => n + to, 0), "percent", "Share of effort offline, rebalanced: radio, SMS, markets and faith outreach.", { source: T_FIREFLY, decimals: 0 });
target("effort.digital.pool", 60, "percent", "Share of Phase −1 digital reach effort geofenced to the pool.", { source: T_FIREFLY, decimals: 0 });
target("effort.sms.pool", 60, "percent", "Share of SMS/USSD onboarding effort to the pool's 17 wards.", { source: T_FIREFLY, decimals: 0 });

// ---- county-policy parameters the campaign is still to size (Section 9)
target("policy.ward-fund", 40_000_000, "ksh", "A ward development fund per ward per year: 30% of the KSh 4bn development budget shared equally across 30 wards, as the County Equitable Share Bill proposed. A campaign policy proposal, not yet sized against the FY2027/28 budget.", { source: "Campaign policy proposal, this plan" });
modelled("policy.ward-fund.total", 30 * v("policy.ward-fund"), "ksh", "KSh 40m per ward × 30 wards, a year.", { decimals: 1 });
modelled("policy.ward-fund.share", pct(30 * v("policy.ward-fund"), v("budget.total")), "percent", "The ward fund / the FY2025/26 budget.", { decimals: 0, tier: "T3" });
target("policy.water.price", 5, "ksh", "A public price ceiling per 20-litre jerrican at county water points and kiosks: the price the county itself charges at source. A campaign policy proposal.", { source: "Campaign policy proposal, this plan" });
modelled("policy.water.saving", v("price.water.vendor") - v("policy.water.price"), "ksh", "Vendor price less the county price, per jerrican.", { tier: "T2" });
target("policy.nrw.target", 30, "percent", "Non-revenue water by 2030: the county's own stated two-year target, adopted and dated.", { source: "Campaign policy proposal, this plan", decimals: 0 });

/* ------------------------------------------- held from the first edition, not yet sourced */

// The Kitui edition read many figures from a county source pack (gender data sheet, food-security
// assessment, scorecard). Their Mombasa equivalents are named here so every chart that reads one
// shows "data needed" instead of a number, and the evidence table lists what would close each.
const GDS_M = "County Gender Data Sheet: Mombasa (KNBS and UN Women), if published; otherwise KDHS 2022 Mombasa factsheet";
for (const [id, unit, closes] of [
  ["population.2025", "people", "KNBS county population projection, Mombasa, 2025"],
  ["population.2030", "people", "KNBS county population projection, Mombasa, 2030"],
  ["register.women.share", "percent", "IEBC 2022 register by sex, Mombasa"],
  ["ict.phone.adult", "percent", `${GDS_M}: adult phone ownership by sex`],
  ["ict.phone.adult.men", "percent", `${GDS_M}: men 18+ owning a phone`],
  ["ict.phone.adult.women", "percent", `${GDS_M}: women 18+ owning a phone`],
  ["reach.phone.adult", "voters", `${GDS_M}: adult phone ownership, applied to the register`],
  ["health.stunting", "percent", "KDHS 2022 Mombasa factsheet: stunting"],
  ["health.typhoid.2025", "count", "Mombasa County Department of Health, disease surveillance, 2025"],
  ["health.typhoid.2024", "count", "Mombasa County Department of Health, disease surveillance, 2024"],
  ["water.basic.kdhs", "percent", "KDHS 2022 Mombasa factsheet: at least basic drinking water"],
  ["literacy.county", "percent", "KNBS county literacy table (2019 Census or KDHS 2022)"],
  ["unemployment.youth.county", "percent", "KNBS Quarterly Labour Force Survey county tables, Mombasa"],
  ["scorecard.claimed", "count", "Mombasa County Government's own published delivery scorecard or annual progress report"],
  ["scorecard.itemised", "count", "Mombasa County Annual Development Plan and progress report: itemised projects with cost and ward"],
  ["scorecard.attributed.ksh", "ksh", "Mombasa County progress report: itemised spend by constituency"],
  ["radio.rahma", "percent", "KARF or GeoPoll audience report, Coast region: Radio Rahma share"],
  ["radio.salaam", "percent", "KARF or GeoPoll audience report, Coast region: Radio Salaam share"],
  ["radio.pwani", "percent", "KARF or GeoPoll audience report, Coast region: Pwani FM share"],
  ["radio.baraka", "percent", "KARF or GeoPoll audience report, Coast region: Baraka FM share"],
  ["radio.citizen", "percent", "KARF or GeoPoll audience report, Coast region: Radio Citizen share"],
  ["radio.kaya", "percent", "KARF or GeoPoll audience report, Coast region: Radio Kaya share"],
  ["boda.riders", "people", "NTSA or county register of boda-boda and tuk-tuk operators, Mombasa"],
  ["kpis.nomination", "count", "The New Democrats' nomination rules, once certified"],
  ["edu.none.women", "percent", "KDHS 2022 Mombasa factsheet: women aged 6+ with no education"],
  ["edu.none.men", "percent", "KDHS 2022 Mombasa factsheet: men aged 6+ with no education"],
  ["disability.men", "percent", "KDHS 2022 Mombasa factsheet: men 15+ with a disability"],
  ["disability.women", "percent", "KDHS 2022 Mombasa factsheet: women 15+ with a disability"],
] as [string, Unit, string][]) needed(id, unit, closes);

// The scorecard projects by ward (analysis Stage 14) carry no Mombasa rows until a county project
// register is in hand; the loop stays so a register dropped into the export flows straight through.
type ProjectValue = { value: number; status: string; dims: { ward?: string; level?: string; measure: string } };
const PROJECT_VALUES = projectsByWard.values as ProjectValue[];
for (const p of PROJECT_VALUES) {
  const key = p.dims.ward ?? p.dims.level?.replace("_", "-");
  if (p.dims.measure === "projects") sourced(`projects.${key}.count`, p.value, "count", "T1", "County project register", { asOf: "2026" });
  else sourced(`projects.${key}.ksh`, p.value, "ksh", "T1", "County project register", { asOf: "2026", decimals: 1 });
}

// Figures the team added through the in-site data editor.
for (const f of FIGURE_EDITS.added) add(f);

export const FIGURES: Readonly<Record<string, Figure>> = FIG;

/** The ward register as ranked rows, for tables and charts that need the order. */
export const WARD_ROWS = WARDS.map((w) => ({ id: `ward.${slugOf(w.name)}`, name: w.name, constituency: w.constituency, voters: w.voters }));

export function figure(id: string): Figure {
  const f = FIG[id];
  if (!f) throw new Error(`figures: unknown id "${id}"`);
  return f;
}
