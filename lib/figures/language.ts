/**
 * §12.4 — which language reaches which voters, on which channel.
 *
 * No published survey gives Mombasa's home-language shares, so the "share" here is the published
 * content mix the campaign targets (§12.4's donut), labelled as a target, not as a measurement of
 * who speaks what. Bulk political SMS carries Kiswahili and English only (§15.3.3); Sheng and the
 * Mijikenda languages never go by bulk SMS.
 */
import type { FigurePoint, FigureSeries } from "./types";
import type { Source } from "../../data/types";

/**
 * §7.3 [CHECK REF] states the three reach shares with no citation, and they are a language map rather than a
 * measurement — so they are Tier 3 and say so, rather than borrowing the register's authority.
 */
const LANGUAGE_REACH: Source = {
  name: "The campaign's published content mix, §12.4 (a target, not a measurement)",
  publicationDate: "2026",
  tier: 3,
};

export type LanguageRow = {
  name: string;
  /** Share of published content, the §12.4 target. */
  share: number;
  audiences: string[];
  channels: string[];
  objective: string;
  conflicts?: string[];
};

export const LANGUAGES: LanguageRow[] = [
  {
    name: "Kiswahili",
    share: 60,
    audiences: ["Every ward and every age", "Women's groups and chamas", "Traders and port workers", "Elders and faith communities"],
    channels: ["Kiswahili radio (Bahari FM, Radio Citizen, Radio Maisha)", "SMS, USSD and WhatsApp voice notes", "The stages and barazas", "Ward captains' audio clips"],
    objective: "The language of trust, argument and mobilisation in Mombasa: every line checked by a native speaker from Mombasa.",
  },
  {
    name: "English",
    share: 25,
    audiences: ["Professionals and the public service", "The national press", "Business associations", "Regulators and the courts"],
    channels: ["The full policy platform", "Statutory IEBC filings", "LinkedIn and X longform", "National TV interviews"],
    objective: "Policy precision and the national conversation about the port and the county's finances.",
  },
  {
    name: "Sheng and Mijikenda languages",
    share: 15,
    audiences: ["The young, online and at the stages", "Older mainland households (Digo, Giriama and others)"],
    channels: ["TikTok and Instagram video (Sheng)", "Radio Kaya spots and in person (Mijikenda)", "Never bulk SMS"],
    objective: "Meet the young and the mainland's older households in the language they use at home.",
  },
];

export const LANGUAGE_SPLIT: FigureSeries = {
  id: "language-map",
  headline: "Kiswahili first, English for policy, Sheng and the Mijikenda languages where they are spoken",
  measure: "The share of published content per language: the §12.4 target",
  points: LANGUAGES.map<FigurePoint>((l) => ({
    label: l.name,
    value: l.share,
    unit: "%",
    source: LANGUAGE_REACH,
    tier: 3,
    asOf: "2026",
    kind: "modelled",
    granularity: "county",
    note: l.objective,
    conflicts: l.conflicts,
  })),
  note:
    "These are targets for what the campaign publishes, not a measure of who speaks what: no published " +
    "study gives Mombasa's home-language shares. Bulk SMS carries Kiswahili and English only (§15.3.3).",
};

/** §3.6.1's channel-by-channel allocation, whose SMS row is the version C-21 points at. */
export type DeploymentRow = {
  medium: string;
  primary: { language: string; share: number };
  secondary: { language: string; share: number }[];
  /** Where §3.6.1 wrote a qualifier in the cell rather than a percentage. */
  note?: string;
  conflicts?: string[];
};

export const LANGUAGE_DEPLOYMENT: DeploymentRow[] = [
  {
    medium: "Radio spots",
    primary: { language: "Kiswahili", share: 90 },
    secondary: [{ language: "Mijikenda languages (Radio Kaya)", share: 10 }],
  },
  {
    medium: "Direct 2G bulk SMS",
    primary: { language: "Kiswahili", share: 80 },
    secondary: [{ language: "English", share: 20 }],
    note: "Kiswahili and English only, as the Communications Authority's bulk SMS rule requires.",
  },
  {
    medium: "USSD menu system",
    primary: { language: "Kiswahili", share: 50 },
    secondary: [{ language: "English", share: 50 }],
    note: "Toggle via option 6 on the USSD menu.",
  },
  {
    medium: "Print collateral",
    primary: { language: "Kiswahili", share: 70 },
    secondary: [{ language: "English", share: 30 }],
    note: "Bilingual: Kiswahili on the main spread, English on the back.",
  },
  {
    medium: "Stage and PA jingles",
    primary: { language: "Kiswahili", share: 85 },
    secondary: [{ language: "Sheng", share: 15 }],
  },
  {
    medium: "TikTok and Reels video",
    primary: { language: "Kiswahili and Sheng", share: 70 },
    secondary: [{ language: "English", share: 30 }],
  },
  {
    medium: "Formal policy platform",
    primary: { language: "English", share: 100 },
    secondary: [],
    note: "An abridged Kiswahili summary accompanies it.",
  },
];
