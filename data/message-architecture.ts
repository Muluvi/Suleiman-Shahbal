import { withTeamEdits } from "../lib/data/team-overlay.ts";
/**
 * The message architecture: one claim, three pillars, four content types. One file, read by every
 * figure that names a pillar or a content type, so a count cannot be printed two ways again.
 *
 * Where it is set out in prose: The message, "One claim, three pillars, six themes"
 * (content/message.md). Earlier drafts carried four campaign pillars; the message section folds
 * them into these three, and each pillar below names the earlier aims it now carries.
 *
 * To edit: change a title or a line here. Figures fig-4-1 (the message house), fig-4-3 (segments)
 * and fig-4-5 (the briefed week) read this file at build.
 */

export interface Pillar {
  /** Pillars carry no code: P1 to P4 name the content types. */
  title: string;
  /** How the pillar is argued, as content/message.md states it, shortened for a figure. */
  argued: string;
  /** The earlier campaign pillars this pillar now carries. */
  carries: string[];
}

export const PILLARS: Pillar[] = withTeamEdits<Pillar>("pillars", "title", [
  {
    title: "Water at the tap",
    argued: "Mwache Dam arrives in the next term whoever governs; the pillar is the last mile into the estates, a public price ceiling at county kiosks, and the share of water lost published every quarter.",
    carries: ["Water and the household purse", "Verification and follow-through"],
  },
  {
    title: "Jobs that stay in Mombasa",
    argued: "More of the port's value kept in the county; the Jomvu SEZ shown as proof he can attract it, its jobs reported as a projection until they exist.",
    carries: ["Jobs, the port and the young"],
  },
  {
    title: "A county that pays its bills",
    argued: "How the county's budget is spent, with a published pending-bills schedule paid oldest first and a ward development share every ward can check.",
    carries: ["Fiscal accountability and devolution"],
  },
]);

export interface ContentType {
  /** P1 to P4: the weekly brief's slot. */
  code: "P1" | "P2" | "P3" | "P4";
  /** The short name a calendar cell prints. */
  short: string;
  /** The full name, as content/message.md's content-type table prints it. */
  name: string;
}

export const CONTENT_TYPES: ContentType[] = withTeamEdits<ContentType>("content-types", "code", [
  { code: "P1", short: "Where the water and the money went", name: "Where the water and the money went" },
  { code: "P2", short: "He built it, go and see", name: "He built it, go and see" },
  { code: "P3", short: "The builder explains", name: "The builder explains" },
  { code: "P4", short: "He came, and said", name: "He came, and this is what he said he would do" },
]);

