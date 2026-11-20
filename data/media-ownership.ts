// Phase 5d — media ownership map. Formalises the station list already carried in Section
// 17A.1's ownership table with explicit tiers, per the source-discipline rule that ownership
// claims are Tier 2/3 and must be labelled as such.
//
// No listenership or audience-reach figures were supplied by the research pass — "radio
// listenership figures" is itself a named row in the Data Gaps Register (Appendix C). The
// `reachTier` below is a qualitative 1–3 reading of §3.7.1's own "Campaign posture"
// column (Priority / party-sensitive / Secondary), the same treatment already used for the
// competitive-field quadrant chart's qualitative credibility axis — it is not measured data and
// is never rendered with the visual authority of a Tier 1 figure.
import type { Source } from "./types";
import { LOCAL_DIGITAL_MEDIA_OWNERSHIP } from "./sources.ts";
import { withTeamEdits } from "../lib/data/team-overlay.ts";

const ROYAL_MEDIA: Source = { name: "Royal Media Services corporate ownership (public record)", publicationDate: "2026", tier: 2 };
const STANDARD_GROUP: Source = { name: "Standard Group corporate ownership (public record)", publicationDate: "2026", tier: 2 };
const CATHOLIC: Source = { name: "Catholic Archdiocese of Mombasa (publicly known denominational ownership)", publicationDate: "2026", tier: 2 };
const KBC_STATE: Source = { name: "Kenya Broadcasting Corporation, state ownership (public record)", publicationDate: "2026", tier: 2 };

export interface RadioStation {
  name: string;
  /**
   * Frequency as publicly listed for the Mombasa service area, or null where it is not yet
   * confirmed. Tier 3 (aggregator listings);
   * the Communications Authority broadcast frequency register is the Tier 1 confirmation and is
   * a named data request in §6.1.
   */
  frequency: string | null;
  alignment: string;
  source: Source;
  reachTier: 1 | 2 | 3;
  reachLabel: string;
  posture: string;
}

export const RADIO_STATIONS: RadioStation[] = withTeamEdits<RadioStation>("radio-stations", "name", [
  { name: "Pwani FM", frequency: null, alignment: "Royal Media Services", source: ROYAL_MEDIA, reachTier: 3, reachLabel: "Coast-wide, Kiswahili", posture: "Priority — commercial, coast-wide reach" },
  { name: "Radio Citizen", frequency: null, alignment: "Royal Media Services", source: ROYAL_MEDIA, reachTier: 3, reachLabel: "National, Kiswahili", posture: "Priority — national reach, strong at the coast" },
  { name: "Radio Maisha", frequency: null, alignment: "Standard Group", source: STANDARD_GROUP, reachTier: 2, reachLabel: "National, Kiswahili", posture: "Priority — commercial" },
  { name: "Radio Rahma", frequency: null, alignment: "Islamic community broadcaster (to be checked against the CA register)", source: LOCAL_DIGITAL_MEDIA_OWNERSHIP, reachTier: 2, reachLabel: "Mombasa, Kiswahili", posture: "Community programming only — no partisan placement" },
  { name: "Radio Salaam", frequency: null, alignment: "Islamic broadcaster (to be checked against the CA register)", source: LOCAL_DIGITAL_MEDIA_OWNERSHIP, reachTier: 2, reachLabel: "Coast, Kiswahili", posture: "Community programming only — no partisan placement" },
  { name: "Baraka FM", frequency: null, alignment: "Catholic Archdiocese of Mombasa", source: CATHOLIC, reachTier: 2, reachLabel: "Coast, Kiswahili", posture: "Community programming only — no partisan placement" },
  { name: "Radio Kaya", frequency: null, alignment: "Community broadcaster (to be checked against the CA register)", source: LOCAL_DIGITAL_MEDIA_OWNERSHIP, reachTier: 1, reachLabel: "Mijikenda languages", posture: "Secondary — the Mijikenda audience on the mainland" },
  { name: "KBC Pwani", frequency: null, alignment: "State-owned (KBC)", source: KBC_STATE, reachTier: 1, reachLabel: "Coast, Kiswahili", posture: "Secondary — institutional coverage" },
]);
