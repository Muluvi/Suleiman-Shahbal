/**
 * §11.2 [CHECK REF] — what the campaign does not yet know, and the instruments it plans to find out with.
 *
 * WHAT THESE REPLACE. Three box-drawing blocks: a two-column research-and-tracker panel, a
 * research architecture table of three modules, and a service-delivery tracker architecture.
 *
 * THE HONEST GAPS ARE THE SUBSTANCE HERE and they are transcribed as gaps. §4.5.1's tracker names
 * counts it does not have — water hours by ward and the county pending-bills schedule — and
 * prints them as pending. The brief forbids filling an empty data state with an estimate; these figures print the
 * absence in the cell where the number would go, which is what the source does.
 *
 * The decision column is the other thing worth preserving exactly. Each module names the decision
 * it unlocks, so the research is not a measurement for its own sake.
 *
 * SEPTEMBER 2026 AUDIT. Firefly forms strategy from existing records and its own analysis only, so
 * every module reads a record that already exists: module 1 the Week 1 channel audit, module 2 the
 * IEBC's ward-level results, module 3 the log of what arrives unprompted on the line Firefly
 * operates. Nothing is commissioned.
 */
import type { FigureSeries } from "./types";
import { regFmt } from "./from-registry.ts";

/* ------------------------------------------------------------------ §5.1.2 the two programmes */

export const RESEARCH_TIERS = [
  {
    label: "19A: the evidence tests",
    items: [
      "The Week 1 channel audit (confirm or refute the turnout thesis on his own data)",
      "The 2017 and 2022 ward-level results (IEBC Forms 37A and 37B)",
      "Inbound feedback on the campaign's SMS and USSD line, logged on the platform",
      "Gatekeeper decision triggers",
    ],
  },
  {
    label: "19B: service-delivery tracker",
    items: [
      "Ward-by-ward baseline metrics",
      "OAG / KNBS / CRA data feeds",
      "Monthly public web and USSD sync",
      "Dual asset: campaign evidence and a day-one governing dashboard",
    ],
  },
];

export const RESEARCH_SPLIT: FigureSeries = {
  id: "research-and-tracker",
  headline: "One programme tests whether the deficit is real; the other is the evidence it argues with",
  measure: "§18.1's tests of the recognition hypothesis, and the service-delivery tracker",
  points: [],
  note:
    "The research programme feeds the tracker: what the audit establishes about a ward becomes " +
    "a baseline the tracker publishes against. 19B is stated as a dual asset — campaign evidence " +
    "now, and a governing dashboard from day one.",
};

/* ------------------------------------------------------------------ §5.2.6 the research modules */

export const RESEARCH_MODULES: string[][] = [
  [
    "1. The Week 1 channel audit",
    "Ninety days of his own channels, exported and coded twice · reach by city mapped to sub-county · engagement on reach · language and format mix",
    "Every post in the window · his Meta Insights export · no personal data",
    "Week 1",
    "If reach concentrates on the Island and among existing supporters, output weight shifts to the north and west mainland. If it lands in the belt but does not convert, the problem is a reason to vote against him, not reach.",
  ],
  [
    "2. The ward-level record",
    "The 2017 and 2022 governor results by ward and polling station, set against the close-contest belt and the twelve largest wards · his 2013 and 2017 votes, ward by ward",
    "IEBC Forms 37A and 37B for all 30 wards · public records, not yet in hand",
    "On receipt",
    "If his 2013 voters stayed home in 2017 and 2022, the gap is turnout and the ground plan is the answer. If they voted for someone else, the gap is a reason to vote against him and the message changes first.",
  ],
  [
    "3. Inbound feedback log",
    "What arrives unprompted on the SMS/USSD line and the tracker · reports, questions and market-day rumours · counted and coded, never solicited",
    "Every inbound message from consented contacts across 30 wards · aggregated via the Africa's Talking API",
    "Weekly, ongoing",
    "Rapid pivots for weekly radio and SMS copy.",
  ],
];

export const MODULES_SERIES: FigureSeries = {
  id: "research-modules",
  headline: "Three instruments, and each one names the decision it unlocks",
  measure: "§18.5's tests of the turnout-and-machinery hypothesis — module, method, record, timing and the decision it unlocks",
  points: [],
  note:
    "The last column is what makes this a decision instrument: the audit's result routes directly " +
    "to a stated change of plan, set out in advance in Section 12.7. All three read records that " +
    "already exist: his own analytics, the IEBC's published forms and the line his team operates.",
};

/* ------------------------------------------------------------------ §4.5.1 the tracker */

export const TRACKER_DIMENSIONS: string[][] = [
  [
    "1. Water hours and price, by ward",
    "MOWASCO supply schedules · county water kiosk records · hours of supply and price pending a ward-level record",
    "Weekly · residents' reports on the consented line, checked against the supply schedule",
  ],
  [
    "2. Mwache Dam and the last mile",
    "Ministry of Water progress reports · Coast Water Works Development Agency · reticulation into the estates",
    "Quarterly · project status as the agency reports it; site visits",
  ],
  [
    "3. Public financial stewardship ledger",
    "Office of the Auditor-General reports (2013–2025) · Controller of Budget reports · the county pending-bills schedule",
    "Annual / statutory audit cycle · each year's audit opinion as the OAG report states it; the reports are not yet retrieved",
  ],
  [
    "4. Jobs at the Jomvu SEZ",
    "Special Economic Zones Authority · the promoters' reports · county business permits",
    `Quarterly · jobs that exist, against the ${regFmt("record.sez.jobs")} projected (Tier 2, a projection)`,
  ],
];

export const TRACKER_SERIES: FigureSeries = {
  id: "delivery-tracker",
  headline: "Four delivery dimensions, two of which are still waiting on a ward-level record",
  measure: "§15.1.1's public service-delivery tracker — dimension, statutory sources, update cadence and verification",
  points: [],
  note:
    "Water hours by ward and the pending-bills schedule are stated as pending the record, and they " +
    "are printed that way rather than filled with an estimate. The SEZ jobs figure is the promoters' " +
    "projection, and the tracker reports jobs that exist against it.",
};
