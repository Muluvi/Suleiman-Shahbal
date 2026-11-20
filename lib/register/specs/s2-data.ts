/**
 * Section 2, The Data: the figure register's eight records of what the official sources show.
 */
import register from "../../../data/ward-register.json" with { type: "json" };
import { RADIO_STATIONS } from "../../../data/media-ownership.ts";
import type { FigureSpec } from "../types.ts";
import { bar, byValue, F, fmt, num, src } from "./_util.ts";

const CONS = register.constituencies as { id: string; name: string }[];

/* ------------------------------------------------------------------ fig-2-1-register (pilot) */

const W22 = "IEBC ward register, 2022 (T1)";

const conBars = byValue(CONS.map((c) => bar(`con.${c.id}`, c.name)));

export const FIG_2_1: FigureSpec = {
  id: "fig-2-1-register",
  section: "2.1",
  title: `${fmt("register.2022")} registered voters in six constituencies; Kisauni and Nyali hold two in five`,
  question: "How big is the register, and where is it?",
  takeaway: `Mombasa had ${fmt("register.2022")} registered voters in 2022 at ${fmt("register.polling-stations")} polling stations. The certified 2026 register is not yet published (about ${fmt("register.2026")} on the new registrations IEBC has reported), so the 2022 register is the base for every calculation.`,
  sources: [src("register.2022"), src("register.polling-stations")],
  chart: { type: "bars", bars: conBars, unit: "" },
  notes: ["The ward sum and the county total agree exactly. The certified 2027 register replaces this base when IEBC gazettes it."],
  columns: [
    { key: "item", label: "Item" },
    { key: "voters", label: "Registered voters", numeric: true },
    { key: "source", label: "Source" },
  ],
  rows: [
    { cells: { item: "Registered, 2022", voters: num("register.2022"), source: W22 } },
    ...conBars.map((b) => ({ cells: { item: `${b.label}, 2022`, voters: b.value, source: W22 } })),
  ],
};

/* ------------------------------------------------------------------ fig-2-2-results */

const WIN = { value: num("result.2022.gov.nassir"), label: `${fmt("result.2022.gov.nassir")}, the 2022 governor's winning total` };
const PANELS = [
  { title: "Governor, 2013 (T1, High Court)", bars: [bar("result.2013.gov.joho", "Hassan Joho, winner"), bar("result.2013.gov.shahbal", "Suleiman Shahbal", { tone: "accent" })] },
  { title: "Governor, 2017 (T1, High Court)", bars: [bar("result.2017.gov.joho", "Hassan Joho, winner"), bar("result.2017.gov.shahbal", "Suleiman Shahbal", { tone: "accent" }), bar("result.2017.gov.omar", "Hassan Omar")] },
  { title: "Governor, 2022 (T2, as declared)", bars: [bar("result.2022.gov.nassir", "Abdulswamad Nassir, winner"), bar("result.2022.gov.omar", "Hassan Omar", { note: `A second published total is ${fmt("result.2022.gov.omar.media")}; Form 37C settles it.` }), bar("result.2022.gov.awiti", "Hezron Awiti")] },
  { title: "Senator, 2022 (T2)", bars: [bar("result.2022.senate.faki", "Mohamed Faki, winner")] },
];
const RESULT_ROWS = PANELS.flatMap((p) => p.bars.map((b) => ({ cells: { race: p.title.replace(/ \(.*\)$/, ""), candidate: b.label, votes: b.value }, state: b.state })));

export const FIG_2_2: FigureSpec = {
  id: "fig-2-2-results",
  section: "2.2",
  title: `He came within ${fmt("result.2013.gov.gap")} votes in 2013; in 2022 the seat was won with ${fmt("result.2022.gov.nassir")}`,
  question: "What does it take to win the governorship in Mombasa?",
  takeaway: `His 2013 tally, ${fmt("result.2013.gov.shahbal")}, is within ${fmt("benchmark.gap.2013")} of the ${fmt("benchmark")} benchmark; the 2022 winning total fell to ${fmt("result.2022.gov.nassir")} on a turnout of about a third.`,
  sources: [src("result.2013.gov.shahbal"), src("result.2017.gov.joho"), src("result.2022.gov.nassir"), src("result.2022.senate.faki")],
  chart: { type: "multiples", panels: PANELS, max: Math.max(...PANELS.flatMap((p) => p.bars.map((b) => b.value ?? 0))), ref: WIN },
  notes: ["One scale for all four panels, so bar lengths compare across races. The vertical line is the same value in every panel."],
  columns: [{ key: "race", label: "Race" }, { key: "candidate", label: "Candidate" }, { key: "votes", label: "Votes", numeric: true }],
  rows: RESULT_ROWS,
};

/* ------------------------------------------------------------------ fig-2-4-people */

const SUBS = byValue(["kisauni", "likoni", "nyali", "jomvu", "mvita", "changamwe"].map((id) => bar(`sub.${id}.population`, id[0].toUpperCase() + id.slice(1))));

export const FIG_2_4: FigureSpec = {
  id: "fig-2-4-people",
  section: "1.1",
  title: `Mombasa is young and entirely urban: half its residents are ${fmt("census.median-age")} or younger`,
  question: "Who lives in Mombasa?",
  takeaway: `A county of ${fmt("census.population")} people on ${fmt("census.area")} km², the densest outside Nairobi; ${fmt("poverty.2021")}% were poor in 2021.`,
  sources: [src("census.population"), src("census.age.15-34.share"), src("poverty.2021")],
  chart: {
    type: "composite",
    parts: [
      {
        heading: "Out of every 100 residents",
        chart: {
          type: "icons",
          items: [
            { label: "Aged 15–34 (KNBS 2019)", share: num("census.age.15-34.share"), state: "sourced" },
            { label: "In poverty, 2021", share: num("poverty.2021"), state: "sourced" },
          ],
        },
      },
      { heading: "Population by sub-county, 2019", chart: { type: "bars", bars: SUBS } },
    ],
  },
  notes: ["Mombasa's six sub-counties have the same names and boundaries as its six constituencies."],
  columns: [{ key: "measure", label: "Measure" }, { key: "value", label: "Value", numeric: true }, { key: "unit", label: "Unit" }, { key: "source", label: "Source" }],
  rows: [
    { cells: { measure: "Population (2019)", value: num("census.population"), unit: "people", source: "KNBS 2019 Census (T1)" } },
    { cells: { measure: "Median age", value: num("census.median-age"), unit: "years", source: "Calculated from KNBS 2019 Census Volume III (T1)" } },
    { cells: { measure: "Aged 15–34", value: num("census.age.15-34.share"), unit: "%", source: "KNBS 2019 Census (T1)" } },
    { cells: { measure: "Poverty rate (2021)", value: num("poverty.2021"), unit: "%", source: "KNBS via Stats Kenya (T2)" } },
    ...SUBS.map((b) => ({ cells: { measure: `${b.label}, population`, value: b.value, unit: "people", source: "KNBS 2019 Census (T1)" } })),
  ],
};

/* ------------------------------------------------------------------ fig-2-5-budget */

const bn = (id: string) => `KSh ${fmt(id, "bn")}bn`;
const BUDGET = [
  bar("budget.equitable", "Equitable share", { display: bn("budget.equitable"), tone: "accent" }),
  bar("budget.osr", "Own-source revenue", { display: bn("budget.osr") }),
  bar("budget.grants", "Grants, loans and balances brought forward", { display: bn("budget.grants") }),
];

export const FIG_2_5: FigureSpec = {
  id: "fig-2-5-budget",
  section: "1.5",
  title: `The county ran a ${bn("budget.total")} budget in FY2025/26, and raised a third of it itself`,
  question: "What does the next governor actually control?",
  takeaway: `Own-source revenue, ${bn("budget.osr")}, is a larger share in Mombasa than in almost any county; ${bn("budget.development")} of the budget was for development.`,
  sources: [{ name: F("budget.total").source ?? "", tier: "T3" }],
  chart: { type: "stack", segments: BUDGET, total: num("budget.total"), totalLabel: `Approved supplementary budget, FY2025/26: ${bn("budget.total")} (T3, as reported)` },
  notes: ["Read through secondary reporting of the Controller of Budget's review; the CBIRR itself is the Tier 1 record. The third segment is the remainder, so it is calculated."],
  columns: [{ key: "part", label: "Part" }, { key: "ksh", label: "KSh", numeric: true }, { key: "share", label: "Share of budget, %", numeric: true }, { key: "tier", label: "Tier" }],
  rows: [
    { cells: { part: "Equitable share", ksh: num("budget.equitable"), share: num("budget.equitable.share"), tier: "T3" } },
    { cells: { part: "Own-source revenue", ksh: num("budget.osr"), share: num("budget.osr.share"), tier: "T3" } },
    { cells: { part: "Grants, loans and balances brought forward (remainder)", ksh: num("budget.grants"), share: num("budget.grants.share"), tier: "T3" }, state: "modelled" },
    { cells: { part: "Total budget", ksh: num("budget.total"), share: 100, tier: "T3" } },
  ],
};

/* ------------------------------------------------------------------ fig-2-6-connectivity */

export const FIG_2_6: FigureSpec = {
  id: "fig-2-6-connectivity",
  section: "2.9.1",
  title: "Internet use rose from two in five residents to nearly half between 2019 and 2023/24",
  question: "How do people get online, and has that changed?",
  takeaway: `Mombasa is the fourth most online county in Kenya; ${fmt("ict.offline")}% are still not online. The 2023/24 county row for phone ownership is still to be read, so the phone line holds the 2019 rate.`,
  sources: [{ name: "KNBS, 2019 Kenya Population and Housing Census", tier: F("ict.internet.2019").tier }, { name: F("ict.internet").source ?? "", tier: F("ict.internet").tier }],
  chart: {
    type: "slope",
    left: "2019",
    right: "2023/24",
    unit: "%",
    lines: [
      { label: "own a phone", a: num("ict.phone.2019"), b: num("ict.phone"), tone: "neutral" },
      { label: "use the internet", a: num("ict.internet.2019"), b: num("ict.internet"), tone: "accent" },
    ],
  },
  columns: [{ key: "measure", label: "Share of residents" }, { key: "y2019", label: "2019, %", numeric: true }, { key: "y2023", label: "2023/24, %", numeric: true }],
  rows: [
    { cells: { measure: "Own a mobile phone", y2019: num("ict.phone.2019"), y2023: num("ict.phone") } },
    { cells: { measure: "Use the internet", y2019: num("ict.internet.2019"), y2023: num("ict.internet") } },
  ],
};

/* ------------------------------------------------------------------ fig-2-7-media */

const OWNER_OF = (alignment: string): { id: string; name: string } => {
  if (/Royal Media/.test(alignment)) return { id: "rms", name: "Royal Media Services" };
  if (/Standard Group/.test(alignment)) return { id: "sg", name: "Standard Group" };
  if (/Islamic/.test(alignment)) return { id: "islamic", name: "Islamic broadcasters" };
  if (/Catholic/.test(alignment)) return { id: "catholic", name: "Catholic Archdiocese of Mombasa" };
  if (/State-owned/.test(alignment)) return { id: "kbc", name: "KBC (state)" };
  return { id: "community", name: "Community broadcasters" };
};
const postureOf = (p: string): "placement" | "secondary" | "monitoring" => (/^Priority/.test(p) ? "placement" : /^Secondary/.test(p) ? "secondary" : "monitoring");
const STATIONS = [...RADIO_STATIONS].sort((a, b) => OWNER_OF(a.alignment).id.localeCompare(OWNER_OF(b.alignment).id));
const OWNERS = [...new Map(STATIONS.map((s) => [OWNER_OF(s.alignment).id, OWNER_OF(s.alignment)])).values()];

export const FIG_2_7: FigureSpec = {
  id: "fig-2-7-media",
  section: "4.2",
  title: "Paid placement goes to the commercial stations; the faith stations are partners for programming, never for advertising",
  question: "Who owns the airwaves, and where do we place vs partner?",
  takeaway: "Bahari FM, Radio Citizen and Radio Maisha carry the campaign's paid placements; Radio Rahma, Radio Salaam and Baraka FM carry community programming on water, health and jobs.",
  sources: [{ name: "Corporate and denominational ownership records", tier: "T2" }, { name: "Community station ownership, to be checked against the CA licensing register", tier: "T3" }],
  chart: { type: "network", owners: OWNERS, stations: STATIONS.map((s) => ({ name: s.name, owner: OWNER_OF(s.alignment).id, posture: postureOf(s.posture) })) },
  notes: ["Solid link: paid or secondary placement. Dashed link and outline: programming partnership only, no paid placement.", "No Coast audience share is in hand; the record that would close it is a KARF or GeoPoll report."],
  columns: [{ key: "station", label: "Station" }, { key: "owner", label: "Owner or association" }, { key: "posture", label: "Posture" }, { key: "reach", label: "Reach (as described)" }],
  rows: STATIONS.map((s) => ({ cells: { station: s.name, owner: s.alignment, posture: s.posture, reach: s.reachLabel } })),
};

/* ------------------------------------------------------------------ fig-2-8-record */

export const FIG_2_8: FigureSpec = {
  id: "fig-2-8-record",
  section: "6.1",
  title: `A builder's record: a bank in ${fmt("record.gab.founded")}, two governor's races, and a ${bn("record.sez.ksh")} industrial zone`,
  question: "What has he actually done?",
  takeaway: "His distinguishing proof is things built that voters can visit; the SEZ jobs figure is a projection until the jobs exist.",
  sources: [src("record.sez.jobs"), src("result.2013.gov.shahbal"), src("record.gab.founded")],
  chart: {
    type: "composite",
    parts: [
      {
        heading: "Career",
        chart: {
          type: "timeline",
          from: "2007-01-01",
          to: "2027-08-31",
          events: [
            { date: "2008-01", label: "Founds Gulf African Bank", state: "sourced", whenText: "2008", note: "Kenya's first Islamic bank (T2)." },
            { date: "2013-03", label: "Governor's race: second, Wiper", state: "sourced", whenText: "2013", note: `${fmt("result.2013.gov.shahbal")} votes (T1).` },
            { date: "2017-08", label: "Governor's race: second, Jubilee", state: "sourced", whenText: "2017", note: `${fmt("result.2017.gov.shahbal")} votes (T1).` },
            { date: "2022-05", label: "Stands down for the ODM nominee", state: "sourced", whenText: "2022" },
            { date: "2023-02", label: "Chairs EALA Communication, Trade and Investment Committee", state: "sourced", whenText: "2023" },
            { date: "2026-09", label: "Jomvu SEZ signed; leaves ODM", state: "sourced", whenText: "Sept 2026" },
          ],
        },
      },
      {
        heading: "Proof",
        chart: {
          type: "stats",
          items: [
            { value: bn("record.sez.ksh"), label: `Jomvu SEZ with DP World and the county, ${fmt("record.sez.acres")} acres (T2)`, state: "sourced" },
            { value: fmt("record.sez.jobs"), label: "direct jobs projected by the promoters: a projection, not a count (T2)", state: "sourced" },
            { value: fmt("record.gab.founded"), label: "year he founded Gulf African Bank (T2)", state: "sourced" },
            { value: fmt("result.2013.gov.shahbal"), label: "votes in 2013, his best tally (T1)", state: "sourced" },
          ],
        },
      },
    ],
  },
  columns: [{ key: "item", label: "Item" }, { key: "value", label: "Value" }, { key: "tier", label: "Tier" }],
  rows: [
    { cells: { item: "Gulf African Bank founded", value: num("record.gab.founded"), tier: "T2" } },
    { cells: { item: "Governor's race, 2013 (Wiper), votes", value: num("result.2013.gov.shahbal"), tier: "T1" } },
    { cells: { item: "Governor's race, 2017 (Jubilee), votes", value: num("result.2017.gov.shahbal"), tier: "T1" } },
    { cells: { item: "EALA committee chair", value: "Communication, Trade and Investment", tier: "T2" } },
    { cells: { item: "Jomvu SEZ, KSh", value: num("record.sez.ksh"), tier: "T2" } },
    { cells: { item: "Jomvu SEZ, direct jobs projected", value: num("record.sez.jobs"), tier: "T2" } },
  ],
};

/* ------------------------------------------------------------------ fig-2-9-channels */

export const FIG_2_9: FigureSpec = {
  id: "fig-2-9-channels",
  section: "6.4",
  title: "His channels are read on the Week 1 export, not estimated",
  question: "What does his presence look like?",
  takeaway: "Every count on this figure is set in Week 1 from his own exports.",
  sources: [src("channel.fb.followers"), src("channel.x.followers")],
  chart: {
    type: "matrix",
    header: ["Channel", "Status", "Tier"],
    rows: [
      { head: "Facebook", cells: [`Followers ${fmt("channel.fb.followers")}, posts ${fmt("channel.fb.posts")}; page-or-profile status settled in Week 1`, "—"] },
      { head: "X", cells: [`Followers ${fmt("channel.x.followers")}`, "—"] },
      { head: "Instagram, TikTok, YouTube, WhatsApp Channel", cells: ["Recorded in the Week 1 audit where they exist", "—"] },
    ],
  },
  columns: [{ key: "channel", label: "Channel" }, { key: "status", label: "Status" }, { key: "tier", label: "Tier" }],
  rows: [
    { cells: { channel: "Facebook", status: "Set in Week 1", tier: "—" } },
    { cells: { channel: "X", status: "Set in Week 1", tier: "—" } },
    { cells: { channel: "Instagram, TikTok, YouTube, WhatsApp Channel", status: "Recorded in the Week 1 audit where they exist", tier: "—" } },
  ],
};

/* ------------------------------------------------------------------ fig-2-10-hearings */

const HEARING_ISSUES = byValue([
  bar("adp.issues.health", "Health services and facilities"),
  bar("adp.issues.water", "Water and sanitation"),
  bar("adp.issues.roads", "Roads, drainage and transport"),
  bar("adp.issues.lighting", "Street lighting and security"),
  bar("adp.issues.education", "Education"),
  bar("adp.issues.waste", "Solid waste"),
  bar("adp.issues.youth", "Youth"),
  bar("adp.issues.markets", "Markets and trade"),
]);
const ADP_SRC = "County Government of Mombasa, ADP 2026/27, Section 3.17 (T1)";

export const FIG_2_10: FigureSpec = {
  id: "fig-2-10-hearings",
  section: "3.3",
  title: `Health was the issue residents raised most at the county's own planning hearings`,
  question: "What did residents ask the county for?",
  takeaway: `At the public hearings for the 2026/27 development plan, ${fmt("adp.issues.health")}% of the issues raised were about health, ahead of water and sanitation (${fmt("adp.issues.water")}%) and roads (${fmt("adp.issues.roads")}%).`,
  sources: [src("adp.issues.health")],
  chart: { type: "bars", bars: HEARING_ISSUES, unit: "%" },
  notes: ["Shares of the issues raised at the hearings, as the county's plan reports them. Each ward's own top request is in its Ward Dossier."],
  columns: [
    { key: "issue", label: "Issue raised" },
    { key: "share", label: "Share of issues (%)", numeric: true },
    { key: "source", label: "Source" },
  ],
  rows: HEARING_ISSUES.map((b) => ({ cells: { issue: b.label, share: b.value, source: ADP_SRC } })),
};

export const S2: FigureSpec[] = [FIG_2_1, FIG_2_2, FIG_2_4, FIG_2_5, FIG_2_6, FIG_2_7, FIG_2_8, FIG_2_9, FIG_2_10];
