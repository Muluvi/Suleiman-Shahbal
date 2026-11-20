/**
 * Section 3, The Strategy: the position, the effort, the segments, the message by region, the
 * calendar, the channel shift, the six fixes and the decision rules.
 */
import { RADIO_STATIONS } from "../../../data/media-ownership.ts";
import { CONTENT_TYPES, PILLARS } from "../../../data/message-architecture.ts";
import { SEGMENTS as SEGMENT_DATA } from "../../../data/segments.ts";
import { CountWord, countWord } from "../../count-word.ts";
import type { FigureSpec } from "../types.ts";
import { fmt, num, src } from "./_util.ts";

const T_FIREFLY = { name: "Firefly's weighting, this plan", tier: null, state: "target" as const };

/* ------------------------------------------------------------------ fig-4-1-message-house */

export const FIG_4_1: FigureSpec = {
  id: "fig-4-1-message-house",
  section: "3.2.1",
  title: `One position, ${countWord(PILLARS.length)} pillars that argue it, and a record that holds it up`,
  question: "What is the position, and what holds it up?",
  takeaway: "Every message rests on something already on the public record; none rests on a promise alone.",
  sources: [src("record.sez.ksh"), { name: "EALA record; Gulf African Bank; reporting on the Jomvu SEZ agreement", tier: "T2" }],
  chart: {
    type: "house",
    roof: "Suleiman Shahbal is the Builder Governor Mombasa needs: a manager who delivers, fixes what is broken and moves the port city forward.",
    pillars: PILLARS.map((p) => ({ title: p.title, body: `${p.argued.replace("the county's budget", `the county's KSh ${fmt("budget.total", "bn")}bn`)} Carries: ${p.carries.join("; ")}.` })),
    foundation: [
      `Founded Gulf African Bank, ${fmt("record.gab.founded")}`,
      `Jomvu SEZ, KSh ${fmt("record.sez.ksh", "bn")}bn, ${fmt("record.sez.acres")} acres, signed 2026`,
      "Chair, EALA Communication, Trade and Investment Committee",
      `${fmt("result.2013.gov.shahbal")} votes for governor in 2013`,
      "Chairman, GulfCap Investment Group",
    ],
  },
  columns: [{ key: "level", label: "Level" }, { key: "text", label: "Content" }],
  rows: [
    { cells: { level: "Roof: the position", text: "The Builder Governor Mombasa needs" } },
    ...PILLARS.map((p) => ({ cells: { level: "Pillar", text: `${p.title} (carries: ${p.carries.join("; ")})` } })),
    { cells: { level: "Foundation", text: "Founded Gulf African Bank (T2)" } },
    { cells: { level: "Foundation", text: `Jomvu SEZ, KSh ${fmt("record.sez.ksh", "bn")}bn (T2)` } },
    { cells: { level: "Foundation", text: "Chair, EALA Communication, Trade and Investment Committee (T2)" } },
    { cells: { level: "Foundation", text: `${fmt("result.2013.gov.shahbal")} votes in 2013 (T1)` } },
  ],
};

/* ------------------------------------------------------------------ fig-4-2-effort */

const ZONE_ROWS = [["anchor", "The Island (Mvita)"], ["mwingi", "North mainland (Kisauni, Nyali)"], ["arid", "West mainland (Changamwe, Jomvu)"], ["rotating", "Likoni and rotating tests"]] as const;
const PHASES = [["p-1", "Phase −1 (nomination)"], ["p12", "Phases 1–2"], ["p3", "Phase 3 (GOTV)"]] as const;

export const FIG_4_2: FigureSpec = {
  id: "fig-4-2-effort",
  section: "3.3.1",
  title: `In Phase −1, ${num("effort.p-1.mwingi") + num("effort.p-1.arid")}% of the effort goes to the mainland belt, above its share of residents`,
  question: "Where does the effort go in Phase −1?",
  takeaway: `The weighting over-indexes on the close-contest belt on the working hypothesis that his gap there is turnout and machinery; ${fmt("effort.digital.pool")}% of digital reach effort is geofenced to it.`,
  sources: [T_FIREFLY, src("zone.mwingi.share")],
  chart: {
    type: "composite",
    parts: [
      { heading: "Phase −1 effort, ward by ward", chart: { type: "tilemap", layers: ["effort"], initial: "effort" } },
      {
        heading: "Share of effort by zone and phase, %",
        chart: {
          type: "heatmap",
          rowLabels: ZONE_ROWS.map(([, l]) => l),
          colLabels: PHASES.map(([, l]) => l),
          values: ZONE_ROWS.map(([z]) => PHASES.map(([p]) => num(`effort.${p}.${z}`))),
          unit: "%",
          state: "target",
        },
      },
    ],
  },
  notes: ["Firefly's weighting, not a measurement: every cell is a target, reviewed monthly against the reach data in Section 18.1."],
  columns: [{ key: "zone", label: "Zone" }, { key: "pop", label: "Share of residents, %", numeric: true }, ...PHASES.map(([p, l]) => ({ key: p, label: `${l}, %`, numeric: true }))],
  rows: ZONE_ROWS.map(([z, l]) => ({ cells: { zone: l, pop: z === "rotating" ? "—" : Math.round(num(`zone.${z}.share`) * 10) / 10, ...Object.fromEntries(PHASES.map(([p]) => [p, num(`effort.${p}.${z}`)])) }, state: "target" as const })),
};

/* ------------------------------------------------------------------ fig-4-3-segments */

const typeName = (code: string) => {
  const t = CONTENT_TYPES.find((c) => c.code === code);
  return t ? `${t.code} · ${t.short}` : code;
};
/** Segment sizes and what is known about the unsized ones: data/segments.ts. Language, channel and content type stay here. */
const SEGMENT_PLAN: Record<string, { pillar: string; lang: string; channel: string }> = {
  agrarian: { pillar: "P2", lang: "Kiswahili", channel: "Drive-time radio, workplace visits" },
  pastoralist: { pillar: "P1", lang: "Kiswahili", channel: "WhatsApp voice note, chamas, SMS" },
  youth: { pillar: "P3", lang: "Kiswahili and Sheng", channel: "TikTok, Instagram, the stages" },
  msme: { pillar: "P1", lang: "Kiswahili; English for associations", channel: "Market walks, WhatsApp" },
  professionals: { pillar: "P3", lang: "English, Kiswahili", channel: "X, LinkedIn, talk radio" },
  diaspora: { pillar: "P4", lang: "Kiswahili", channel: "Ward captains, SMS and USSD" },
};
const SEGMENTS = SEGMENT_DATA.map((g) => ({ ...g, ...SEGMENT_PLAN[g.id], context: g.notSized?.context, closes: g.notSized?.closesWith }));

export const FIG_4_3: FigureSpec = {
  id: "fig-4-3-segments",
  section: "3.4.3",
  title: "Six segments, two sized in voters and four with context but no published voter count",
  question: "Who are we trying to move, and how much do they matter?",
  takeaway: "Sizes overlap and are not additive; where no source publishes a voter count, none is given.",
  sources: [src("census.adults.18-34.share"), src("abstained.2022"), { name: "Segment sizes: census shares and 2022 results applied to the 2022 register, derived", tier: "T1", state: "modelled" }],
  chart: {
    type: "matrix",
    header: ["Segment", "Size (registered voters)", "Content type", "Language", "Lead channel"],
    rows: SEGMENTS.map((g) => ({ head: g.name, cells: [g.size ? `≈${fmt(g.size)} (modelled)` : `${g.context ? `${g.context()}. ` : ""}Voters: not published`, typeName(g.pillar), g.lang, g.channel] })),
  },
  notes: ["Priority among segments is set by the Week 1 audit and re-set at each monthly review, not chosen in advance."],
  columns: [{ key: "segment", label: "Segment" }, { key: "size", label: "Size, registered voters", numeric: true }, { key: "pillar", label: "Content type" }, { key: "lang", label: "Language" }, { key: "channel", label: "Lead channel" }],
  rows: SEGMENTS.map((g) => ({ cells: { segment: g.name, size: g.size ? num(g.size) : "Not published", pillar: typeName(g.pillar), lang: g.lang, channel: g.channel }, state: g.size ? ("modelled" as const) : undefined })),
};

/* ------------------------------------------------------------------ fig-4-4-message-region */

export const FIG_4_4: FigureSpec = {
  id: "fig-4-4-message-region",
  section: "10.4",
  title: "Each zone hears a different case for the same candidate, all of it in Kiswahili first",
  question: "What do we say where, and in which language?",
  takeaway: "The Island hears the bills and the bank, the north mainland hears water and jobs, the west mainland hears the port and the SEZ; Kiswahili leads everywhere.",
  sources: [{ name: "This plan, Sections 1.2 and 10.2; political-messaging rules", tier: null, state: "target" }],
  chart: {
    type: "composite",
    parts: [
      {
        heading: "Zone by message",
        chart: {
          type: "matrix",
          header: ["Zone", "Lead message", "Why it fits", "Language"],
          rows: [
            { head: "The Island (Mvita)", cells: ["A county that pays its bills; the builder's record", "Traders, the CBD and the public service, owed by the county", "Kiswahili and English"] },
            { head: "North mainland (Kisauni, Nyali)", cells: ["Water at the tap, jobs for the young", "The largest block, decided by about a thousand votes in 2022", "Kiswahili and Sheng"] },
            { head: "West mainland (Changamwe, Jomvu)", cells: ["The port's value kept in Mombasa: the Jomvu SEZ", "The SEZ site and the port's workforce", "Kiswahili"] },
          ],
        },
      },
      {
        heading: "Language rules",
        chart: {
          type: "cards",
          columns: 2,
          cards: [
            { kicker: "Rule 1", title: "Kiswahili first", body: "Mombasa Kiswahili leads every public channel; English carries the national press and professionals." },
            { kicker: "Rule 2", title: "No machine translation", body: "Native-speaker review signs off every public line." },
            { kicker: "Rule 3", title: "Sheng only where it is natural", body: "Short video and the stages, written by young people from the estates." },
            { kicker: "Rule 4", title: "Faith stations carry programming, not adverts", body: "Water, health and jobs programming on Rahma, Salaam and Baraka FM; no paid political placement." },
          ],
        },
      },
    ],
  },
  columns: [{ key: "region", label: "Zone" }, { key: "message", label: "Lead message" }, { key: "language", label: "Language" }],
  rows: [
    { cells: { region: "The Island (Mvita)", message: "A county that pays its bills", language: "Kiswahili, English" } },
    { cells: { region: "North mainland (Kisauni, Nyali)", message: "Water at the tap, jobs for the young", language: "Kiswahili, Sheng" } },
    { cells: { region: "West mainland (Changamwe, Jomvu)", message: "The port's value kept in Mombasa", language: "Kiswahili" } },
    { cells: { region: "Rule", message: "Faith stations carry programming, never paid placement", language: "—" } },
  ],
};

/* ------------------------------------------------------------------ fig-4-5-calendar */

/** The calendar's slots are the four content types (data/message-architecture.ts), not the pillars. */
const TYPES = CONTENT_TYPES.map((t) => t.short);
const WEEK: { day: string; pillar: 1 | 2 | 3 | 4 | null; after: string; now: string }[] = [
  { day: "Mon", pillar: 1, after: "Same photos; one ward's hours of water this week, and what the household pays. Kiswahili voice note.", now: "Meeting with a residents' association; group photo." },
  { day: "Tue", pillar: 3, after: "45-second vertical clip: the port, the SEZ and one job title. Kiswahili and Sheng.", now: "Business forum photo." },
  { day: "Wed", pillar: 2, after: "The SEZ site in Jomvu: what is there now, and the jobs figure called a projection.", now: "Site visit photos." },
  { day: "Thu", pillar: 4, after: "Same photos, plus the ward, one commitment and one date; to that ward's WhatsApp and SMS list.", now: "Ward tour photos." },
  { day: "Fri", pillar: null, after: "Unchanged: not every post is a campaign asset.", now: "Jumu'ah and community visit." },
  { day: "Sat", pillar: 1, after: "One trader, one unpaid county bill or one fee, one number. Kiswahili.", now: "Market walk photos." },
  { day: "Sun", pillar: 1, after: "A twelve-week-old Thursday commitment, revisited: delivered, delayed or not done.", now: "Community event photos." },
];

export const FIG_4_5: FigureSpec = {
  id: "fig-4-5-calendar",
  section: "3.7",
  title: `The same seven days become six briefed posts across ${countWord(CONTENT_TYPES.length)} content types, and Thursday's commitment returns as a Sunday check`,
  question: "What gets published, and when?",
  takeaway: "Two fields on a Thursday post and a language rule change the week; who takes the photograph and who presses publish do not.",
  sources: [{ name: "An illustrative week; checked against his actual week in Week 1", tier: "T3" }, { name: "The briefed week: this plan", tier: null, state: "target" }],
  chart: { type: "calendar", days: WEEK, pillars: TYPES },
  notes: ["Two rules on top: at least two of the seven originate in a ward of the close-contest belt, and every one leads in Kiswahili."],
  columns: [{ key: "day", label: "Day" }, { key: "pillar", label: "Content type" }, { key: "after", label: "After" }, { key: "now", label: "Now" }],
  rows: WEEK.map((d) => ({ cells: { day: d.day, pillar: d.pillar ? `${CONTENT_TYPES[d.pillar - 1].code} · ${TYPES[d.pillar - 1]}` : "Unchanged", after: d.after, now: d.now } })),
};

/* ------------------------------------------------------------------ fig-4-6-channel-shift */

const CHANNELS = [["radio", "Coast radio"], ["sms", "SMS and USSD"], ["markets", "Markets, stages and barazas"], ["digital", "Digital and social"], ["church", "Mosque, church and community"]] as const;
const POSTURE = RADIO_STATIONS.map((s) => ({ name: s.name, posture: /^Priority/.test(s.posture) ? "Place" : /^Secondary/.test(s.posture) ? "Secondary" : "Monitor" }));

export const FIG_4_6: FigureSpec = {
  id: "fig-4-6-channel-shift",
  section: "3.3.2",
  title: `Digital's share of effort falls to ${fmt("channel.digital.rebalanced")}%, and radio and SMS rise, because reach is not turnout`,
  question: "How does effort move between channels?",
  takeaway: `${fmt("channel.offline.rebalanced")}% of effort goes offline; radio placement goes only to the stations Section 4.2 marks for placement.`,
  sources: [T_FIREFLY, src("reach.smartphone")],
  chart: {
    type: "composite",
    parts: [
      {
        heading: "Share of communications effort, %",
        chart: {
          type: "slope",
          left: "Conventional pitch",
          right: "Rebalanced",
          unit: "%",
          lines: CHANNELS.map(([id, label]) => ({ label, a: num(`channel.${id}.conventional`), b: num(`channel.${id}.rebalanced`), tone: id === "radio" ? ("accent" as const) : ("neutral" as const) })),
        },
      },
      {
        heading: "Station posture, carried from Section 4.2",
        chart: { type: "matrix", header: ["Station", "Posture"], rows: POSTURE.map((p) => ({ head: p.name, cells: [p.posture] })) },
      },
    ],
  },
  notes: ["Shares of effort (production time, attention, output), not money. The conventional pitch is Firefly's characterisation, not a measured campaign."],
  columns: [{ key: "channel", label: "Channel" }, { key: "from", label: "Conventional, %", numeric: true }, { key: "to", label: "Rebalanced, %", numeric: true }],
  rows: CHANNELS.map(([id, label]) => ({ cells: { channel: label, from: num(`channel.${id}.conventional`), to: num(`channel.${id}.rebalanced`) }, state: "target" as const })),
};

/* ------------------------------------------------------------------ fig-4-7-profile-fixes */

const FIXES = [
  { order: 1, finding: 5, before: "The record, as his profiles show it today", after: "Put the SEZ and the bank first: the builder's proof" },
  { order: 2, finding: 3, before: "Party, as his profiles show it today", after: "The New Democrats, consistently on every channel" },
  { order: 3, finding: 1, before: "Name and title, as displayed", after: "One name and title across every channel" },
  { order: 4, finding: 2, before: "Work history, as displayed", after: "GulfCap, Gulf African Bank and EALA, dated" },
  { order: 5, finding: 4, before: "Current city, as displayed", after: "Mombasa" },
  { order: 6, finding: 6, before: "Bio, as displayed", after: "No claim of a nomination or a result" },
];

export const FIG_4_7: FigureSpec = {
  id: "fig-4-7-profile-fixes",
  section: "4.2.3",
  title: `${CountWord(FIXES.length)} profile checks, each minutes of work, and the builder's proof comes first`,
  question: "What gets fixed first?",
  takeaway: "The SEZ and the bank are his differentiators; they belong in the one field a voter checks. Each check is settled against his live profiles in Week 1.",
  sources: [{ name: "His public profiles, checked in Week 1; EALA record", tier: "T2" }],
  chart: {
    type: "cards",
    columns: 2,
    cards: FIXES.map((f) => ({ kicker: `${f.order} · finding #${f.finding}`, title: f.after, body: `Before: ${f.before}`, tone: f.order === 1 ? ("accent" as const) : undefined })),
  },
  columns: [{ key: "order", label: "Order", numeric: true }, { key: "finding", label: "Finding" }, { key: "before", label: "Before" }, { key: "after", label: "After" }],
  rows: FIXES.map((f) => ({ cells: { order: f.order, finding: `#${f.finding}`, before: f.before, after: f.after } })),
};

/* ------------------------------------------------------------------ fig-4-8-decision-rules */

const RULES = [
  { if: "reach concentrates on the Island and among existing supporters", then: "the turnout thesis is confirmed; output weight shifts to the north and west mainland, headline indicator R-02" },
  { if: "reach in the belt is material but engagement there is flat or hostile", then: "the problem is a reason to vote against him, not reach: the weekly creative test cycle re-cuts the message; the Section 12.1 weighting is revised" },
  { if: "Sheng posts out-engage Kiswahili among the young by a wide margin", then: "Sheng becomes a rule for P3 in the weekly brief" },
  { if: "video watch time collapses before ten seconds", then: "short vertical and voice notes replace long video; the Section 21.2 cadence is re-cut" },
  { if: "most engagement comes from a few hundred repeat accounts", then: "priority moves from page growth to consented WhatsApp and SMS lists" },
  { if: "the presence is a personal profile, not a Page", then: "nothing can be directed against it until it migrates: settled in the first hour" },
];

export const FIG_4_8: FigureSpec = {
  id: "fig-4-8-decision-rules",
  section: "3.8",
  title: "Six findings the Week 1 audit could return, each with the change it triggers, fixed in advance",
  question: "When does the plan change?",
  takeaway: "Stating the rules before the audit means the data cannot be read backwards into whatever was already planned.",
  sources: [{ name: "This plan; the test runs on the Week 1 export", tier: null, state: "target" }],
  chart: { type: "decision", question: "If the Week 1 audit finds…", rules: RULES },
  columns: [{ key: "if", label: "If the audit finds" }, { key: "then", label: "The strategy changes to" }],
  rows: RULES.map((r) => ({ cells: { if: r.if, then: r.then } })),
};

export const S4: FigureSpec[] = [FIG_4_1, FIG_4_2, FIG_4_3, FIG_4_4, FIG_4_5, FIG_4_6, FIG_4_7, FIG_4_8];
