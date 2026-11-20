/**
 * The six voter segments, in one file. Every view that sizes a segment reads it from here, and
 * every size is a registry read (lib/data/figures.ts, segment.*), so a segment cannot be sized two
 * ways again (consolidation pass, Step 1: docs/consolidation-2026-11/DECISIONS.md D1.7).
 *
 * Read by: The voters to win (the segmentation matrix, components/markdown/AudienceSegmentationMatrix
 * .tsx), fig-4-3 (the segment matrix, The voters to win) and the segment summary in the playbooks
 * (lib/figures/annex.ts).
 *
 * Three segments are sized: the census rural and urban shares, and the census age distribution,
 * applied to the 2022 register (modelled, Tier 1 inputs). Three are NOT SIZED: no published source
 * gives their registered-voter count, and none is estimated here. Each says what is known instead.
 * The ranges earlier drafts printed for them (80,000–105,000 agro-pastoralists, 25,000–35,000
 * professionals, 150,000+ diaspora) had no source and are retired.
 *
 * To edit: change a segment's wording here. To change a size, change the registry figure it names.
 */
import { formatFigure } from "../lib/data/format.ts";
import { figure } from "../lib/data/figures.ts";
import { withTeamEdits } from "../lib/data/team-overlay.ts";

export interface Segment {
  id: "agrarian" | "pastoralist" | "youth" | "msme" | "professionals" | "diaspora";
  name: string;
  shortName: string;
  /** The registry figure that sizes it, in registered voters; null when no source publishes one. */
  size: string | null;
  /** The registry figure for its share, and what the share is of. */
  share?: { id: string; of: string };
  /** For an unsized segment: what is known instead, and the document that would size it. */
  notSized?: { context: () => string; closesWith: string };
}

const f = (id: string) => formatFigure(figure(id));

export const SEGMENTS: Segment[] = withTeamEdits<Segment>("segments", "id", [
  {
    id: "agrarian",
    name: "Port, transport & logistics workers",
    shortName: "Port and transport",
    size: null,
    notSized: {
      context: () => "Concentrated in Changamwe and Jomvu, along the port and the Nairobi road",
      closesWith: "Registered voters by occupation; not published",
    },
  },
  {
    id: "pastoralist",
    name: "Women & household managers",
    shortName: "Women",
    size: null,
    notSized: {
      context: () => `${f("census.female")} women residents (2019 Census, Tier 1): residents, not voters`,
      closesWith: "IEBC 2022 register by sex, Mombasa",
    },
  },
  { id: "youth", name: "The young mainland voter, ages 18–34", shortName: "Youth 18–34", size: "segment.youth.voters", share: { id: "segment.youth.share", of: "the 2022 register" } },
  {
    id: "msme",
    name: "Traders & small businesses",
    shortName: "Traders",
    size: null,
    notSized: {
      context: () => "Kongowea, Marikiti, Majengo, the CBD and every estate's trading strip",
      closesWith: "County single business permit register by ward",
    },
  },
  {
    id: "professionals",
    name: "Professionals & the public service",
    shortName: "Professionals",
    size: null,
    notSized: {
      context: () => "Teachers, health workers, county and national civil servants, bank and port staff; headcounts not published",
      closesWith: "TSC establishment for Mombasa; County Public Service Board staff return",
    },
  },
  { id: "diaspora", name: "The 2022 abstainers", shortName: "2022 abstainers", size: "abstained.2022", share: { id: "abstained.2022.share", of: "the 2022 register" } },
]);

export const segment = (id: Segment["id"]): Segment => {
  const s = SEGMENTS.find((x) => x.id === id);
  if (!s) throw new Error(`segments: unknown id ${id}`);
  return s;
};

/** A segment's size as a cell prints it: "≈507,000 registered voters (modelled)" or "Not sized". */
export function sizeText(s: Segment): string {
  if (!s.size) return "Not sized";
  return `≈${f(s.size)} registered voters (modelled)`;
}

/** Its share, where it has one: "95.2% of county population". */
export function shareText(s: Segment): string | null {
  if (!s.share) return null;
  return `${f(s.share.id)}% of ${s.share.of}`;
}
