/**
 * §12.5 — the cultural registers, and the quality gate every Kiswahili line passes.
 *
 * WHY THE TRANSLATIONS ARE THE POINT. §12.5 forbids machine translation outright and requires a
 * named native-speaker sign-off for every Kiswahili line. Mombasa Kiswahili (Kimvita) differs from
 * the Kiswahili of the national news, and a phrase that sounds like Nairobi or like a government
 * circular loses the listener.
 *
 * THE KISWAHILI LINES BELOW ARE DRAFTS. They are the plan's working framings, and the native-speaker
 * reviewer signs off or replaces each before anything publishes.
 */
import type { FigureSeries } from "./types";

/* ------------------------------------------------------------------ §3.6.2 cultural registers */

/**
 * Four technical terms, the literal translation that fails, and the working Kiswahili framing.
 * Drafts, pending the native-speaker reviewer's sign-off.
 */
export const CULTURAL_REGISTERS = [
  {
    term: "Fiscal Prudence & Integrity",
    literal: "Busara ya kifedha",
    literalWhy: "Too bureaucratic: sounds like a government circular",
    approved: "Kila shilingi ina hesabu yake",
    gloss: "Every shilling has its account",
  },
  {
    term: "Household Economic Empowerment",
    literal: "Kuwapa watu pesa",
    literalWhy: "Sounds like handouts",
    approved: "Riziki ya kila nyumba",
    gloss: "A livelihood for every household",
  },
  {
    term: "Devolution Equity & Ward Equalization",
    literal: "Kugawanya pesa za wodi",
    literalWhy: "Mechanical division",
    approved: "Kila mtaa na haki yake",
    gloss: "Every estate its fair share",
  },
  {
    term: "Youth Technical & Vocational Training",
    literal: "Masomo ya vijana",
    literalWhy: "Schooling only",
    approved: "Mikono ya vijana, kazi ya Mombasa",
    gloss: "Young hands, Mombasa's work",
  },
];

export const REGISTERS_SERIES: FigureSeries = {
  id: "cultural-registers",
  headline: "Four terms where the literal translation loses the argument",
  measure: "§12.5's framing protocol — the term, the translation that fails, and the working idiom",
  points: [],
  note:
    "The working framings are drafts in plain coastal Kiswahili; §12.5's rules of engagement forbid " +
    "machine translation, and the native-speaker reviewer signs off every line before it publishes.",
};

/* ------------------------------------------------------------------ §3.6.3 the QC gateway */

export const QC_STAGES = [
  {
    title: "English master source drafting",
    steps: [
      "Policy team crafts the core English policy brief, Hansard citation or release.",
      "Verified by the Legal & Economic Lead for empirical accuracy.",
    ],
  },
  {
    title: "Parallel adaptation — not literal translation",
    steps: [
      "Lead Kiswahili writer drafts the culturally resonant vernacular version.",
      "Swahili/Sheng specialist drafts the street-smart and market versions.",
    ],
  },
  {
    title: "Reverse-translation integrity audit",
    steps: [
      "An independent reviewer translates the vernacular draft back into English to verify that no policy commitments were distorted, inflated or omitted.",
    ],
  },
  {
    title: "Kiswahili cultural sign-off and executive clearance",
    steps: ["Final sign-off by the Campaign Manager before release to audio studio or print."],
    emphasis:
      "Mandatory sign-off authority for Kiswahili copy: Lead Cultural & Vernacular Communications Advisor (native Coast elder / senior vernacular broadcaster).",
  },
];

export const QC_SERIES: FigureSeries = {
  id: "qc-gateway",
  headline: "Four gates between an English draft and a Kiswahili broadcast",
  measure: "§12.5's translation and quality-control gateway, in order",
  points: [],
  note:
    "Numbered because it is a real sequence: the reverse-translation audit cannot run before the " +
    "adaptation it audits exists, and the cultural sign-off is the last gate before release.",
};
