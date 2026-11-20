/**
 * Section 2, The Analysis: the number, where the votes are, the four routes, the footprint, the
 * field, party flow, the regions, the digital ceiling, the audit, the gaps and the diagnosis.
 */
import openItems from "../generated/open-items.json" with { type: "json" };
import { WARD_TILES } from "../../geo/wards.ts";
import type { Bar, FigureSpec } from "../types.ts";
import { tileColumns, tileRows } from "./s0-cover.ts";
import { bar, F, fmt, num, src } from "./_util.ts";
import { WARD_ROWS } from "../../data/figures.ts";

const BENCH = { value: num("benchmark"), label: `${fmt("benchmark")}, the working benchmark` };
const TURNOUT = `${fmt("turnout.constant")}%`;

/* ------------------------------------------------------------------ fig-3-1-funnel */

const funnel = (reg: "2022" | "2026") => [
  { label: `Registered voters, ${reg === "2022" ? "2022" : "register in use"}`, value: num(`register.${reg}`), state: F(`register.${reg}`).state },
  reg === "2022"
    ? { label: `Ballots cast, 2022 (${TURNOUT} turnout)`, value: num("ballots.2022"), state: F("ballots.2022").state, note: `${fmt("ballots.2022")} valid votes for governor as declared, ${TURNOUT} of the register.` }
    : { label: `Ballots cast at the ${TURNOUT} turnout rate`, value: num("ballots.2026"), state: "modelled" as const, note: `${fmt("register.2026")} × ${TURNOUT} = ${fmt("ballots.2026")}. The rate is the 2022 governor election turnout, carried forward.` },
  { label: "Votes to win: the benchmark", value: num("benchmark"), state: "target" as const, note: `${fmt("benchmark")} is ${fmt(reg === "2022" ? "benchmark.share-of-ballots" : "benchmark.share-of-ballots.2026")}% of those ballots. A constant here, not re-derived from the register.` },
];

export const FIG_3_1: FigureSpec = {
  id: "fig-3-1-funnel",
  section: "2.1",
  title: `To win, he needs about ${fmt("benchmark.share-of-ballots")}% of the ballots cast, on the 2022 register`,
  question: "What is the winning number?",
  takeaway: `${fmt("benchmark")} votes is the 2022 winner's total rounded: a floor, set on the lowest turnout on record. The 2017 winner needed ${fmt("benchmark.high")}.`,
  sources: [src("register.2022"), src("register.2026"), src("turnout.2022", `Turnout of ${TURNOUT}: the 2022 Mombasa governor election, as declared, carried forward to 2027`), { name: "Benchmark: the 2022 governor's winning total, rounded", tier: null, state: "target" }],
  chart: { type: "funnel", stages: funnel("2022"), toggle: { label: "Register in use (2022 until 2026 is published)", stages: funnel("2026") } },
  notes: [`The turnout rate and the benchmark are held fixed: the toggle changes only the register. The rate is measured for 2022; applying it to 2027 is an assumption.`],
  columns: [{ key: "step", label: "Step" }, { key: "y2022", label: "2022 register", numeric: true }, { key: "y2026", label: "Register in use", numeric: true }],
  rows: [
    { cells: { step: "Registered voters", y2022: num("register.2022"), y2026: num("register.2026") } },
    { cells: { step: `Ballots (2022 declared; in use at ${TURNOUT})`, y2022: num("ballots.2022"), y2026: num("ballots.2026") }, state: "modelled" },
    { cells: { step: "Benchmark", y2022: num("benchmark"), y2026: num("benchmark") }, state: "target" },
    { cells: { step: "Benchmark as % of ballots", y2022: Number(fmt("benchmark.share-of-ballots")), y2026: Number(fmt("benchmark.share-of-ballots.2026")) }, state: "modelled" },
  ],
};

/* ------------------------------------------------------------------ fig-3-2-register-map */

const BIG4 = new Set(["kisauni", "nyali", "mvita", "likoni"]);
const RANKED = [...WARD_TILES].sort((a, b) => b.voters - a.voters);
const TOTAL = num("register.2022");

export const FIG_3_2: FigureSpec = {
  id: "fig-3-2-register-map",
  section: "2.3",
  title: `The twelve largest wards hold ${fmt("pareto.top12.share")}% of the register, and half the wards hold ${fmt("pareto.top20.share")}%`,
  question: "Where are the votes?",
  takeaway: `Registration is concentrated in the mainland estates: the ten smallest wards together hold ${fmt("pareto.bottom10.share")}% of voters.`,
  sources: [src("register.2022"), { name: "Shares and running totals, derived", tier: "T1", state: "modelled" }],
  chart: {
    type: "composite",
    parts: [
      // The one layered ward map (consolidation pass, Step 4D): register size, the twelve largest
      // wards, the three zones, the close-contest belt, the 2022 margins and in-reach share, switched by
      // layer. The figures that each drew one of these maps now link to the layer here.
      { heading: "The ward map: choose a layer", chart: { type: "tilemap", layers: ["register", "largest", "zones", "footprint", "party-flow", "reach-targets"], initial: "register", showWardList: true } },
      {
        heading: "The thirty wards ranked, as shares of the register",
        chart: {
          type: "pareto",
          items: RANKED.map((w, i) => ({ label: w.name, share: (w.voters / TOTAL) * 100, top: i < 12, mark: BIG4.has(w.constituency) })),
          cutAt: 12,
          cutLabel: `12 largest: ${fmt("pareto.top12.share")}%`,
          topLabel: "The twelve largest wards",
          markLabel: `A ward in the Big 4 constituencies (${fmt("big4.share")}% of the register)`,
        },
      },
    ],
  },
  notes: ["Bars and the running total are both shares of the register, read on the one 0–100% axis."],
  columns: [
    { key: "rank", label: "Rank", numeric: true },
    { key: "ward", label: "Ward" },
    { key: "constituency", label: "Constituency" },
    { key: "voters", label: "Registered voters, 2022", numeric: true },
    { key: "share", label: "Share, %", numeric: true },
    { key: "cum", label: "Running total, %", numeric: true },
  ],
  rows: (() => {
    let run = 0;
    return RANKED.map((w, i) => {
      run += w.voters;
      return { cells: { rank: i + 1, ward: w.name, constituency: w.constituencyName, voters: w.voters, share: Math.round((w.voters / TOTAL) * 1000) / 10, cum: Math.round((run / TOTAL) * 1000) / 10 } };
    });
  })(),
};

/* ------------------------------------------------------------------ fig-3-3-paths */

const cons = (...ids: [string, string][]): Bar[] => ids.map(([id, name]) => bar(`con.${id}`, name));
/** Section 2.4's own route details, carried by the figure so the prose can sit behind it (brief §12 [CHECK REF]). */
const PATHS: { key: string; title: string; tag?: string; wards: number; reg: Bar[]; at80?: boolean; note: string }[] = [
  {
    key: "a", title: "Path A: the north mainland", wards: 12, at80: true,
    reg: cons(["kisauni", "Kisauni"], ["nyali", "Nyali"]),
    note: `Even 80% of its ballots leaves him ${fmt("path.a.at80.short")} short. The largest block in the county, decided by about a thousand votes in each constituency in 2022: no win without it, and no win on it alone.`,
  },
  {
    key: "b", title: "Path B: the Island and the south", wards: 10,
    reg: cons(["mvita", "Mvita"], ["likoni", "Likoni"]),
    note: `The incumbent's strongest ground in 2022. Contested to hold his lead down, not to carry it; its ballots fall ${fmt("path.b.margin", "abs")} short even if every one were his.`,
  },
  {
    key: "c", title: "Path C: the twelve largest wards", wards: 12,
    reg: WARD_ROWS.slice(0, 12).map((w) => bar(w.id, w.name)),
    note: "The campaign does not need to contest all 30 wards with equal intensity: these twelve are where the margin is cheapest to build.",
  },
  {
    key: "d", title: "Path D: the close-contest belt", tag: "turnout decides it", wards: 17, at80: true,
    reg: cons(["kisauni", "Kisauni"], ["nyali", "Nyali"], ["changamwe", "Changamwe"]),
    note: `At the 2022 turnout, even 80% of its ballots leaves him ${fmt("path.d.at80.short")} short. At a general-election turnout the same belt carries the number: turnout, not geography, is the lever.`,
  },
];

export const FIG_3_3: FigureSpec = {
  id: "fig-3-3-paths",
  section: "2.4",
  title: `No route clears ${fmt("benchmark")} on its own ballots at the 2022 turnout`,
  question: "Which route builds the margin, and what does turnout change?",
  takeaway: `At the 2022 turnout no route carries the number alone; the close-contest belt is where the margin is built, and turnout decides whether it is enough.`,
  sources: [src("register.2022"), { name: `Ballots at the ${TURNOUT} turnout constant, derived`, tier: "T1", state: "modelled" }],
  chart: {
    type: "paths",
    ref: BENCH,
    max: Math.max(...PATHS.map((p) => num(`path.${p.key}.registered`)), num("benchmark")),
    groups: PATHS.map((p) => ({
      title: p.title,
      tag: p.tag,
      meta: `${p.wards} wards · ${fmt(`path.${p.key}.share`)}% of the register · ${fmt(`path.${p.key}.margin`, "abs")} short even with every ballot`,
      note: p.note,
      rows: [
        { label: "Registered voters", segments: p.reg },
        { label: `Ballots at ${TURNOUT}, if every one were his`, segments: [bar(`path.${p.key}.ballots`, "Ballots", { tone: p.tag ? "neg" : "neutral" })] },
        ...(p.at80 ? [{ label: "80% of those ballots", segments: [bar(`path.${p.key}.at80`, "80% of ballots", { tone: "neg" as const })] }] : []),
      ],
    })),
  },
  notes: ["Every route is measured at the 2022 governor election turnout, the lowest on record; a general-election turnout raises every ballot bar."],
  columns: [
    { key: "path", label: "Route" },
    { key: "wards", label: "Wards", numeric: true },
    { key: "registered", label: "Registered, 2022", numeric: true },
    { key: "share", label: "Share of register, %", numeric: true },
    { key: "ballots", label: `Ballots at ${TURNOUT}`, numeric: true },
    { key: "margin", label: `Against ${fmt("benchmark")}`, numeric: true },
    { key: "at80", label: "At 80% of ballots", numeric: true },
  ],
  rows: PATHS.map((p) => ({
    cells: {
      path: `${p.title}${p.tag ? ` (${p.tag})` : ""}`,
      wards: p.wards,
      registered: num(`path.${p.key}.registered`),
      share: num(`path.${p.key}.share`),
      ballots: num(`path.${p.key}.ballots`),
      margin: num(`path.${p.key}.margin`),
      at80: p.at80 ? num(`path.${p.key}.at80`) : "—",
    },
    state: "modelled" as const,
  })),
};

/* ------------------------------------------------------------------ fig-3-4-footprint */

export const FIG_3_4: FigureSpec = {
  id: "fig-3-4-footprint",
  section: "6.2",
  title: `${fmt("pool.share")}% of the register lives in the three constituencies decided by fewer than 2,000 votes in 2022`,
  question: "Where was the last race closest?",
  takeaway: `The ${fmt("pool")}-voter pool is structural, derived from the 2022 margins and the register, not from any measure of opinion; ${fmt("pareto.top12.in-pool")} of the twelve largest wards are in it.`,
  sources: [src("register.2022"), src("result.2022.gov.kisauni.margin"), { name: "The pool: Kisauni, Nyali and Changamwe, summed", tier: "T1", state: "modelled" }],
  chart: {
    type: "composite",
    parts: [
      { heading: "The pool, ward by ward", chart: { type: "maplink", layer: "footprint", label: "See the close-contest belt, ward by ward, on the ward map" } },
      {
        heading: "The pool",
        chart: {
          type: "stats",
          items: [
            { value: fmt("pool"), label: "registered voters in the pool: derived from the 2022 margins, not from any measure of opinion", state: "modelled" },
            { value: `${fmt("pool.share")}%`, label: "of the county register", state: "modelled" },
            { value: `${fmt("pareto.top12.in-pool")} of 12`, label: `largest wards lie in the pool, holding ${fmt("pareto.top12.in-pool.voters")} voters`, state: "modelled" },
            { value: fmt("pool.wards"), label: "wards: seven in Kisauni, five in Nyali, five in Changamwe", state: "modelled" },
          ],
        },
      },
    ],
  },
  columns: tileColumns(["footprint"]),
  rows: tileRows(["footprint"]),
};

/* ------------------------------------------------------------------ fig-3-6-party-flow */

export const FIG_3_6: FigureSpec = {
  id: "fig-3-6-party-flow",
  section: "6.3",
  title: `In 2022 the winner's lead was under 2,000 votes in three constituencies, and he contests 2027 without a big party behind him`,
  question: "Where will party loyalty not carry him?",
  takeaway: "No party vote carries to him anywhere: The New Democrats has no Mombasa machine. The margins show where the last race was close enough to turn.",
  sources: [src("result.2022.gov.nyali.margin"), { name: "Nation, on his exit from ODM and The New Democrats (2026)", tier: "T2" }],
  chart: {
    type: "composite",
    parts: [
      { heading: "The 2022 margin by constituency", chart: { type: "maplink", layer: "party-flow", label: "See the 2022 margins, ward by ward, on the ward map" } },
      {
        heading: "What it covers",
        chart: {
          type: "stats",
          items: [
            { value: fmt("result.2022.gov.nyali.margin"), label: "votes: the winner's lead in Nyali, 2022 (T2)", state: "sourced" },
            { value: fmt("result.2022.gov.kisauni.margin"), label: "votes: the lead in Kisauni (T2)", state: "sourced" },
            { value: fmt("result.2022.gov.changamwe.margin"), label: "votes: the lead in Changamwe (T2)", state: "sourced" },
          ],
        },
      },
    ],
  },
  columns: tileColumns(["party-flow"]),
  rows: tileRows(["party-flow"]),
};

/* ------------------------------------------------------------------ fig-3-7-zones */

const ZONES = [
  { label: "The Island (Mvita)", pop: "zone.anchor.share", reg: "zone.anchor.register.share" },
  { label: "The north mainland (Kisauni, Nyali)", pop: "zone.north.share", reg: "zone.north.register.share" },
  { label: "The west mainland (Changamwe, Jomvu)", pop: "zone.west.share", reg: "zone.west.register.share" },
  { label: "Likoni: rotating", pop: "zones.excluded.share", reg: "con.likoni.share" },
];
const one = (id: string) => Math.round(num(id) * 10) / 10;

export const FIG_3_7: FigureSpec = {
  id: "fig-3-7-zones",
  section: "1.2",
  title: `The three zones hold ${fmt("zones.share")}% of residents; Likoni, across the ferry, rotates`,
  question: "How do the three zones differ, and who is left out?",
  takeaway: `About ${fmt("zones.excluded")} residents and ${fmt("con.likoni.share")}% of the register are in Likoni, which takes a rotating share of effort and the campaign's ward tests.`,
  sources: [src("census.population"), src("register.2022"), { name: "This plan's zoning; shares derived", tier: "T1", state: "modelled" }],
  chart: {
    type: "composite",
    parts: [
      { heading: "The zones, ward by ward", chart: { type: "maplink", layer: "zones", label: "See the three zones, ward by ward, on the ward map" } },
      {
        heading: "Share of residents against share of the register",
        chart: { type: "dumbbell", aLabel: "Share of residents (2019 Census)", bLabel: "Share of the register (2022)", unit: "%", max: 50, items: ZONES.map((z) => ({ label: z.label, a: one(z.pop), b: one(z.reg) })) },
      },
    ],
  },
  notes: ["In Mombasa the census sub-counties and the constituencies are the same six areas, so the population and register shares are directly comparable."],
  columns: [{ key: "zone", label: "Zone" }, { key: "pop", label: "Share of residents, %", numeric: true }, { key: "reg", label: "Share of the register, %", numeric: true }],
  rows: ZONES.map((z) => ({ cells: { zone: z.label, pop: one(z.pop), reg: one(z.reg) }, state: "modelled" as const })),
};

/* ------------------------------------------------------------------ fig-3-8-ceiling */

export const FIG_3_8: FigureSpec = {
  id: "fig-3-8-ceiling",
  section: "2.9.3",
  title: `Digital can reach about ${fmt("reach.smartphone")} voters, ${fmt("reach.smartphone.of-benchmark")}% of the benchmark, but reach is not turnout`,
  question: "What can digital physically reach?",
  takeaway: `Mombasa is half online, so digital reach is large; ${fmt("reach.offline")} registered voters are still not reachable online, and SMS, USSD, radio and the ground carry them.`,
  sources: [src("reach.smartphone"), src("ict.internet")],
  chart: {
    type: "stack",
    total: num("register.2026"),
    totalLabel: `The register in use, ${fmt("register.2026")} voters, by how each can be reached (modelled)`,
    ref: BENCH,
    segments: [
      bar("reach.smartphone", "Reachable online: smartphone or data", { tone: "accent" }),
      bar("reach.sms-only", "Phone, no data: SMS and USSD only"),
      bar("reach.nophone", "No phone: radio and the ground"),
    ],
  },
  notes: ["All three segments are modelled from published rates applied to the register, and hatched for that reason. Reach is not votes."],
  columns: [{ key: "segment", label: "Segment" }, { key: "voters", label: "Registered voters", numeric: true }],
  rows: [
    { cells: { segment: "Reachable online", voters: num("reach.smartphone") }, state: "modelled" },
    { cells: { segment: "SMS and USSD only", voters: num("reach.sms-only") }, state: "modelled" },
    { cells: { segment: "No phone", voters: num("reach.nophone") }, state: "modelled" },
    { cells: { segment: "Reachable online, as % of the benchmark", voters: num("reach.smartphone.of-benchmark") }, state: "modelled" },
  ],
};

/* ------------------------------------------------------------------ fig-3-9-audit */

const EXPORT = "Meta Insights export, Week 1";
const PROFILE = [
  { n: 1, label: "Name and title", shown: "Checked in Week 1", issue: "Matches the EALA record and his public name." },
  { n: 2, label: "Work", shown: "Checked in Week 1", issue: "GulfCap, Gulf African Bank and EALA listed accurately (T2)." },
  { n: 3, label: "Party", shown: "Checked in Week 1", issue: "Reflects The New Democrats, not ODM, after September 2026." },
  { n: 4, label: "Current city", shown: "Checked in Week 1", issue: "Mombasa, for a Mombasa aspirant." },
  { n: 5, label: "The record", shown: "Checked in Week 1", issue: "The SEZ and the bank, the credentials the positioning rests on, are visible." },
  { n: 6, label: "Bio", shown: "Checked in Week 1", issue: "Does not presume a nomination or a result." },
];
const AUDIT_FIGURES = [
  { title: "Reach against the vote map", body: "His reach by constituency beside each constituency's share of the register, and the gap between them." },
  { title: "Ninety days, coded", body: "Every post in the window, by content pillar and reach." },
  { title: "Which language travels", body: "Engagement on reach for Kiswahili, English and Sheng posts." },
];

export const FIG_3_9: FigureSpec = {
  id: "fig-3-9-audit",
  section: "2.10.3",
  title: "Six profile checks and three audit figures, all set from the Week 1 export",
  question: "What does his current presence actually show?",
  takeaway: "The six checks are Section 14.3; the three audit figures are drawn from the Week 1 export, never from an estimate.",
  sources: [{ name: "His public profiles, checked in Week 1; EALA record", tier: "T2" }, { name: `The three audit figures: ${EXPORT}`, tier: null, state: "target" }],
  chart: {
    type: "composite",
    parts: [
      { heading: "The six checks, numbered", chart: { type: "mock", header: "Hon. Suleiman Shahbal · Facebook, intro", fields: PROFILE } },
      { heading: "What the Week 1 audit draws", chart: { type: "cards", columns: 2, cards: AUDIT_FIGURES.map((f, i) => ({ kicker: `Figure ${i + 1} · Week 1`, title: f.title, body: f.body })) } },
    ],
  },
  columns: [{ key: "item", label: "Item" }, { key: "shown", label: "As displayed, or the figure" }, { key: "issue", label: "The issue" }],
  rows: [
    ...PROFILE.map((p) => ({ cells: { item: `${p.n}. ${p.label}`, shown: p.shown, issue: p.issue } })),
    ...AUDIT_FIGURES.map((f) => ({ cells: { item: f.title, shown: "Drawn in Week 1", issue: f.body }, state: "target" as const })),
  ],
};

/* ------------------------------------------------------------------ fig-3-10-gaps */

const DATA_GAPS = (openItems as { kind: string; gap: string; closes: string; holder: string; status: string; where: string[] }[]).filter((i) => i.kind === "data");

export const FIG_3_10: FigureSpec = {
  id: "fig-3-10-gaps",
  section: "2.11",
  title: `${DATA_GAPS.length} things no published source can tell the analysis, and none is estimated`,
  question: "What can't the data tell us yet, and what closes each gap?",
  takeaway: "The analysis works from the register, declared totals and the 2022 constituency tallies, not from ward-level preference or ward returns not yet in hand.",
  sources: [{ name: "Generated from the named data gaps in Section 7.3 (scripts/build-open-items.ts)", tier: null }],
  chart: {
    type: "matrix",
    header: ["Gap", "Closing document", "Holder", "Where"],
    rows: DATA_GAPS.map((g) => ({ head: g.gap, cells: [g.closes, g.holder, g.where.join("; ")] })),
  },
  columns: [{ key: "gap", label: "Gap" }, { key: "doc", label: "Closing document" }, { key: "holder", label: "Holder" }, { key: "status", label: "Status" }, { key: "where", label: "Where" }],
  rows: DATA_GAPS.map((g) => ({ cells: { gap: g.gap, doc: g.closes, holder: g.holder, status: g.status, where: g.where.join("; ") } })),
};

/* ------------------------------------------------------------------ fig-3-11-evidence */

export const FIG_3_11: FigureSpec = {
  id: "fig-3-11-evidence",
  section: "7.1",
  title: "The diagnosis is a turnout and machinery gap, and his 2017 drop is the strongest evidence against it",
  question: "How strong is the diagnosis, and what would overturn it?",
  takeaway: "Week 1 tests it against his own channel data, and the 2017 Forms 37B test where his 2013 voters went.",
  sources: [src("result.2013.gov.shahbal"), src("abstained.2022"), { name: "The Week 1 test: his own Insights export", tier: null, state: "target" }],
  chart: {
    type: "composite",
    parts: [
      {
        heading: "The balance",
        chart: {
          type: "balance",
          hypothesis: "His gap is turnout and machinery, not recognition: Mombasa knows him, but no party machine has turned his voters out.",
          supporting: [
            `He received ${fmt("result.2013.gov.shahbal")} votes in 2013, more than the ${fmt("result.2022.gov.nassir")} that won in 2022.`,
            `${fmt("abstained.2022")} registered voters cast no valid governor vote in 2022.`,
            `${fmt("pool.share")}% of the register is in three constituencies decided by under 2,000 votes.`,
          ],
          counter: [
            `His vote fell from ${fmt("result.2013.gov.shahbal")} in 2013 to ${fmt("result.2017.gov.shahbal")} in 2017 while the winner's rose: voters who knew him may have chosen against him.`,
          ],
          test: ["Week 1: his reach by constituency, from his own Insights export, against the register.", "The 2017 Forms 37B: where his 2013 voters went."],
        },
      },
      {
        heading: "The Week 1 test",
        chart: {
          type: "decision",
          question: "Where does his reach land now, and does it convert?",
          rules: [
            { if: "reach concentrates on the Island and among existing supporters", then: "the turnout diagnosis holds: Phase −1 runs as written, weighted to the belt" },
            { if: "reach already lands in the belt, but engagement there is low or hostile", then: "the problem is a reason to vote against him: the message changes before the ground plan scales" },
            { if: "the export cannot be read by constituency", then: "the test waits on the method in Section 18.5; nothing is committed against the hypothesis" },
          ],
        },
      },
    ],
  },
  columns: [{ key: "side", label: "Side" }, { key: "point", label: "Point" }],
  rows: [
    { cells: { side: "Hypothesis", point: "A turnout and machinery gap, not recognition" } },
    { cells: { side: "Supports", point: `${fmt("result.2013.gov.shahbal")} votes in 2013` } },
    { cells: { side: "Supports", point: `${fmt("abstained.2022")} abstainers in 2022` } },
    { cells: { side: "Supports", point: `${fmt("pool.share")}% of the register in the close-contest belt` } },
    { cells: { side: "Counts against", point: `His 2017 tally fell to ${fmt("result.2017.gov.shahbal")}` } },
    { cells: { side: "Test", point: "Week 1 reach by constituency; the 2017 Forms 37B" }, state: "target" },
  ],
};

/* ------------------------------------------------------------------ fig-3-12-projects */

export const FIG_3_12: FigureSpec = {
  id: "fig-3-12-projects",
  section: "3.7",
  title: "No itemised county project register is in hand yet, so nothing is drawn ward by ward",
  question: "Where has the county placed its projects, ward by ward?",
  takeaway: "When the county's Annual Development Plan and progress report are in hand, their itemised projects load here and in the ward tools.",
  sources: [{ name: F("scorecard.itemised").closesWith ?? "County project register", tier: null, state: "needed" }],
  chart: {
    type: "cards",
    columns: 2,
    cards: [
      { kicker: "Data needed", title: "Projects by ward", body: F("scorecard.itemised").closesWith ?? "" },
      { kicker: "Data needed", title: "Spend by constituency", body: F("scorecard.attributed.ksh").closesWith ?? "" },
    ],
  },
  columns: [{ key: "item", label: "Item" }, { key: "closes", label: "The document that would close it" }],
  rows: [
    { cells: { item: "Projects by ward", closes: F("scorecard.itemised").closesWith ?? "" }, state: "needed", closesWith: F("scorecard.itemised").closesWith },
    { cells: { item: "Spend by constituency", closes: F("scorecard.attributed.ksh").closesWith ?? "" }, state: "needed", closesWith: F("scorecard.attributed.ksh").closesWith },
  ],
};

export const S3: FigureSpec[] = [FIG_3_1, FIG_3_2, FIG_3_3, FIG_3_4, FIG_3_6, FIG_3_7, FIG_3_8, FIG_3_9, FIG_3_10, FIG_3_11, FIG_3_12];
