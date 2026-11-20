/**
 * §5 [CHECK REF], §1A and the annexes — the last thirteen box-drawing blocks in the document.
 *
 * WHAT THESE REPLACE. The audience architecture and segment summary, the visit-to-verification
 * loop, the three provenance blocks, both message matrices and the escalation protocol.
 *
 * THE PROVENANCE BLOCKS ARE THE DOCUMENT'S OWN RULES ABOUT EVIDENCE, and they are the rules this
 * entire audit has been applying. §A.1.3's step 4 — "if unreconciled, report both numbers
 * explicitly side-by-side with their respective sources rather than calculating an artificial
 * average" — is, word for word, what CONFLICTS.md does with all twenty-two entries. Retiring these
 * blocks into figures that state the rules plainly is the closest thing to a self-portrait this
 * pass produces, and the reason they are transcribed rather than paraphrased.
 *
 */
import { CountWord, countWord } from "../count-word.ts";
import { RADIO_STATIONS } from "../../data/media-ownership.ts";
import { regFmt } from "./from-registry.ts";
import { segment, shareText, sizeText } from "../../data/segments.ts";
import type { FigureSeries } from "./types";

/** The stations the ownership map marks for placement, and the ones it marks for monitoring. */
const shortName = (n: string) => n.replace(/ FM$/, "");
const PLACEMENT_STATIONS = RADIO_STATIONS.filter((s) => /^Priority/.test(s.posture)).map((s) => shortName(s.name)).join(", ");

/* ------------------------------------------------------------------ §3.4 the audience overview */

export const AUDIENCE_FACETS = [
  { label: "Geographic locus", items: ["Urban: the whole county", `${regFmt("census.density")} people / km²`] },
  { label: "Age demographic", items: [`Aged 15–34: ${regFmt("census.age.15-34.share")}%`, `Aged 35+: ${regFmt("census.age.35-59.share")}% + ${regFmt("census.age.60-plus.share")}%`] },
  { label: "Connectivity status", items: [`Online: ${regFmt("ict.internet")}%`, `Not online: ${regFmt("ict.offline")}%`] },
  { label: "Primary language", items: ["Kiswahili: the common language", "English: business and professionals", "Sheng: the young, informally"] },
  { label: "Livelihood clusters", items: ["Port, transport & logistics", "Trade & small business", "Informal / boda-boda & tuk-tuk"] },
  { label: "Turnout", items: [`2022 governor election: ${regFmt("turnout.2022")}%`, `Abstained: ${regFmt("abstained.2022")}`] },
];

export const AUDIENCE_SERIES: FigureSeries = {
  id: "audience-overview",
  headline: "Six ways of cutting the same electorate, and two of them decide the channel plan",
  measure: "§11's Mombasa County audience architecture overview",
  points: [],
  note:
    `Connectivity and turnout are the two facets the rest of the proposal turns on: ${regFmt("ict.internet")}% online ` +
    "sets the channel mix (CA/KNBS 2023/24, Tier 1), and a 2022 turnout of about a third sets the task. " +
    "No published study gives Mombasa's home-language shares, so none is printed.",
};

/* ------------------------------------------------------------------ §4.5 the segments */

const sized = (id: Parameters<typeof segment>[0]) => {
  const s = segment(id);
  return s.size ? `${sizeText(s)} — ${shareText(s)}` : `Not sized: ${s.notSized?.context()}`;
};

export const AUDIENCE_SEGMENTS: string[][] = [
  ["1. The young mainland voter (18–34)", sized("youth"), "Tier 1 KNBS/IEBC, derived", "TikTok, Instagram, WhatsApp & the stages", "Jobs with an employer's name, TVET places"],
  ["2. Port, transport & logistics workers", sized("agrarian"), "No published count", "Drive-time radio & workplace visits", "The port's value kept in Mombasa: the SEZ"],
  ["3. Traders & small businesses", sized("msme"), "No published count", "Market walks, traders' associations, WhatsApp", "Single permit, bills paid oldest first"],
  ["4. Women & household managers", sized("pastoralist"), "Tier 1 KNBS (residents)", "WhatsApp voice notes, chamas, SMS", "Water at the county's price, hours published"],
  ["5. Professionals & the public service", sized("professionals"), "No published count", "X, LinkedIn, talk radio, unions", "Salaries on time, a professional public service"],
  ["6. The 2022 abstainers", sized("diaspora"), "Tier 2, calculated", "Ward captains, SMS & USSD", "Every promise with a date and a way to check it"],
];

/* ------------------------------------------------------------------ §3.2.3 the visit loop */

export const VISIT_LOOP = [
  { at: "P4", title: "Visit", steps: ["Ward named, photo taken."] },
  { at: "", title: "Commitment logged", steps: ["With a date and a named ward."] },
  { at: "~12 weeks", title: "Elapse", steps: ["The interval between the promise and the check."] },
  {
    at: "P1",
    title: "Verification",
    steps: [
      "Delivered, delayed or not done.",
      "Published either way to the service-delivery tracker — and the result feeds the next visit.",
    ],
  },
];

export const VISIT_SERIES: FigureSeries = {
  id: "visit-loop",
  headline: "Every visit logs a commitment, and twelve weeks later the tracker says what happened to it",
  measure: "§10.1's visit-to-verification loop",
  points: [],
  note:
    "It is a loop: the verification publishes to the tracker whether the commitment was kept or " +
    "not, and that record is what the next visit is measured against. “Published either way” is " +
    "the block's own phrase and the whole of its argument.",
};

/* ------------------------------------------------------------------ §2.3.1 the provenance mandate */

export const PROVENANCE_MANDATE: string[][] = [
  [
    "1. Primary source",
    "Exact institutional publishing entity",
    'e.g. "IEBC Certified Register", "KNBS 2019 Census"',
  ],
  [
    "2. Timestamp date",
    "Exact date or year of the census, statistical release or official gazettement",
    'e.g. "August 2022", "7 August 2026"',
  ],
  [
    "3. Geographic unit",
    "Exact administrative boundary to which the data applies",
    'e.g. "Countywide", "Kisauni", "Junda Ward"',
  ],
];

export const MANDATE_SERIES: FigureSeries = {
  id: "provenance-mandate",
  headline: "Three things every figure in this document has to carry",
  measure: "§2.4's tri-partite provenance mandate",
  points: [],
  note:
    "Source, date and geographic unit. Every figure in this pass carries all three in its " +
    "“View the data” disclosure, which is the document's own rule applied to the document's own " +
    "charts.",
};

/* ------------------------------------------------------------------ §A.1.2 the three tiers */

export const TIER_CLASSIFICATION: string[][] = [
  [
    "Tier 1",
    "Certified official records: IEBC gazetted registers · KNBS census bulletins · Auditor-General reports",
    "Unconditional baseline for all target mathematics, ward quotas, budgets and statutory compliance. Absolute authority.",
  ],
  [
    "Tier 2",
    "Reported records: published media reproductions of official figures · academic demographic data · industry audience measurement",
    "Used with its source named, pending the certified record; where two published values disagree, both are shown. Never used to measure candidate popularity.",
  ],
  [
    "Tier 3",
    "Internal / unverified intel: single-source field notes · campaign hearsay and rumours · self-reported crowd counts",
    "Hypothesis generation and field lead tracking ONLY. Strictly prohibited from driving financial or resource reallocation without escalation.",
  ],
];

export const TIERS_SERIES: FigureSeries = {
  id: "tier-classification",
  headline: "Three tiers, and only one of them may move money",
  measure: "§A.1.2's three-tier evidential classification — tier, source types, authorised strategic use",
  points: [],
  note:
    "The authorised-use column is what makes the tiers operational rather than descriptive: Tier 3 " +
    "is strictly prohibited from driving financial or resource reallocation without escalation. " +
    "Every figure in this pass carries the tier the section states, and flags disagreement rather " +
    "than resolving it — which is C-8 and C-9.",
};

/* ------------------------------------------------------------------ §A.1.3 conflict resolution */

export const CONFLICT_PROTOCOL = [
  {
    title: "Tier hierarchy test",
    steps: ["Tier 1 always overrides Tier 2; Tier 2 always overrides Tier 3."],
  },
  {
    title: "Methodological audit, for tier-equivalent conflicts",
    steps: [
      "Audit sample sizes, sampling frame (IEBC register vs. random dial), fieldwork dates and non-response bias.",
    ],
  },
  {
    title: "Conservative baseline selection",
    steps: [
      "In electoral modelling, adopt the lower, more demanding performance assumption to prevent operational complacency.",
    ],
  },
  {
    title: "Explicit dual-labelling",
    steps: [
      "If unreconciled, report both numbers explicitly side-by-side with their respective sources rather than calculating an artificial average.",
    ],
    emphasis:
      "This is the rule CONFLICTS.md follows for all twenty-two entries, and the reason no figure in this pass averages a disputed number.",
  },
];

export const PROTOCOL_SERIES: FigureSeries = {
  id: "conflict-protocol",
  headline: "What to do when two sources disagree, in four steps the document wrote for itself",
  measure: "§A.1.3's conflict resolution protocol, in order",
  points: [],
  note:
    "Step 4 is the one this audit has been applying throughout: where the document disagrees with " +
    "itself, both numbers are shown with their sources and neither is averaged away. The steps are " +
    "numbered because they are tried in order — the methodological audit only applies once the " +
    "tier test comes back equal.",
};

/* ------------------------------------------------------------------ §C.1 message by segment */

export const MESSAGE_BY_SEGMENT: string[][] = [
  [
    `1. The young mainland voter (18–34) — ${shareText(segment("youth"))}, ${sizeText(segment("youth"))}`,
    '"Kazi zibaki Mombasa." Jobs with an employer\'s name on them, TVET places, and a quarterly jobs report · Kiswahili and Sheng',
    `The Jomvu SEZ: ${regFmt("record.sez.jobs")} direct jobs projected by the promoters (Tier 2, a projection) · ${regFmt("ict.mombasa.youth")}% of young people online`,
  ],
  [
    "2. Port, transport & logistics workers — not sized: voters by occupation are not published",
    '"The port\'s value should stay in Mombasa." · The SEZ shown on site · Kiswahili',
    `The Jomvu SEZ agreement, KSh ${regFmt("record.sez.ksh", "bn")}bn, ${regFmt("record.sez.acres")} acres (Tier 2)`,
  ],
  [
    "3. Traders & small businesses — not sized: voters by occupation are not published",
    '"Pay the oldest bills first, and publish the list." · A single business permit · Kiswahili; English for associations',
    `KSh ${regFmt("budget.pending-bills.2026", "bn")}bn in pending bills, ${regFmt("budget.pending-bills.aged")}% older than three years (Controller of Budget, as reported)`,
  ],
  [
    `4. Women & household managers — women are ${regFmt("census.female.share")}% of residents (2019 Census); voters by sex are not published`,
    '"Maji mferejini." Water at the county\'s price at county kiosks, hours published ward by ward · Kiswahili voice notes',
    `A jerrican costs KSh ${regFmt("price.water.vendor")} from a vendor, KSh ${regFmt("price.water.county")} at a county source (Tier 2) · ${regFmt("water.supply.share")}% of demand supplied`,
  ],
  [
    "5. Professionals & the public service — not sized: headcounts are not published",
    '"Salaries and deductions paid on time." · A professional County Public Service Board · English and Kiswahili',
    `A KSh ${regFmt("budget.overdraft.2026-06", "m")}m overdraft to pay June 2026 salaries (Controller of Budget, as reported)`,
  ],
  [
    `6. The 2022 abstainers — ${sizeText(segment("diaspora"))}`,
    '"Every promise with a date, and a way to check it." · The visit, then the verification · Kiswahili',
    `${regFmt("turnout.2022")}% turnout in the 2022 governor election (Tier 2) · the service-delivery tracker`,
  ],
];

export const SEGMENT_MESSAGE_SERIES: FigureSeries = {
  id: "message-by-segment",
  headline: "Six segments, six messages, and a named evidence source behind every one",
  measure: "§C.1's message-by-demographic-segment matrix — segment, tailored message and Kiswahili framing, verifiable evidence",
  points: [],
  note:
    "The evidence column is not decoration: §15.1.2's approval gateway makes a primary citation " +
    "mandatory at drafting, and this matrix is where each segment's citation is named. The Kiswahili " +
    "lines are drafts until the native-speaker reviewer signs them off.",
};

/* ------------------------------------------------------------------ §C.2 message by channel */

export const MESSAGE_BY_CHANNEL: string[][] = [
  [
    `1. Kiswahili radio (${PLACEMENT_STATIONS}) — reach not measured`,
    "45-second testimonials and live call-in debates · conversational Mombasa Kiswahili",
    "The SEZ site, the pending-bills schedule and the water figures, each with its source named on air",
  ],
  [
    `2. Direct 2G bulk SMS & USSD — up to ${regFmt("reach.sms-only")} phone owners not online`,
    '160-character hyper-local alerts · "Junda: Mr Shahbal will publish every ward\'s water hours and the jerrican price, every quarter"',
    "The ward-by-ward water record · free USSD code to read the plan",
  ],
  [
    "3. Stages, markets & barazas — reach not measured",
    "Short PA speeches and jingles · Kiswahili music, trader and stage-chair endorsements, candidate Q&A",
    "Site photobooks from the SEZ and the bank · live testimony from residents",
  ],
  [
    `4. WhatsApp & social video (Meta, TikTok, X) — about ${regFmt("reach.smartphone")} voters online`,
    "30-second TikTok clips and infographic cards · Kiswahili and Sheng for the young, English for professionals",
    "Side-by-side cards: what the county owes, what it spends, what reaches the tap",
  ],
  [
    "5. Mosques, churches & community — reach not measured",
    "Programming and community forums on water, health and jobs; no partisan message from the pulpit",
    "Values of service, integrity, non-violent politics and youth mentorship",
  ],
];

export const CHANNEL_MESSAGE_SERIES: FigureSeries = {
  id: "message-by-channel",
  headline: "Five channels, each with its own register and its own proof",
  measure: "§C.2's message-by-channel matrix — channel and reach, format and linguistic style, evidential proof points",
  points: [],
  note:
    "Reach is shown only where a source supports it: the SMS layer (phone owners not online) and " +
    "the online audience, both read from the registry. Radio, the stages and faith networks have no measured " +
    "reach in Mombasa. The channels overlap and must not be added.",
};

/* ------------------------------------------------------------------ §D.2 the escalation ladder */

export const ESCALATION_LADDER = [
  {
    title: "Operational resolution — under 1 hour",
    steps: [
      "Issues: logistics delays, vendor equipment failure, routine social rumours.",
      "Resolution authority: the respective functional lead (Comms, Field or Tech).",
      "Rule: the functional lead resolves and logs the incident in the Daily Pulse Report.",
    ],
  },
  {
    title: "Strategic & scope escalation — under 2 hours",
    steps: [
      "Issues: unexpected scope overruns, a sharp change in reach requiring a major change in media weighting, or a constituency coordinator dispute.",
      "Resolution authority: Campaign Manager & Chief of Operations.",
      "Rule: the Campaign Manager makes a binding operational determination.",
    ],
  },
  {
    title: "Governance, coalition & red-line escalation — under 4 hours",
    steps: [
      "Issues: The New Democrats Party leadership alignments, major endorsements or defections, litigation and legal threats, or fundamental policy manifesto revisions.",
      "Resolution authority: Suleiman Shahbal & the Strategic Advisory Board.",
      "Rule: the candidate delivers the final executive directive.",
    ],
  },
];

export const ESCALATION_SERIES: FigureSeries = {
  id: "escalation-ladder",
  headline: `${CountWord(ESCALATION_LADDER.length)} decision levels, ${countWord(ESCALATION_LADDER.length)} authorities, and the candidate is only in the last`,
  measure: "The operational escalation path — issues, resolution authority and the rule at each decision level",
  points: [],
  note:
    "The levels are numbered because escalation is ordered: a level 1 issue that is not resolved " +
    "inside the hour becomes a level 2 issue, and the authority changes with it. Each level names " +
    "who decides and what they must do, which is what makes it a protocol rather than a list.",
};

