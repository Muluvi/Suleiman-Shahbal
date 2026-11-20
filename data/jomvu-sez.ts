// The Jomvu Special Economic Zone: the strongest proof of what Mr Shahbal can build, and the most
// exposed point in his campaign. Feeds §3.8. Every number is read from the figure registry; the
// jobs figure is the promoters' projection and is always called one.
import type { Granularity, Source } from "./types";
import { figure, fmt } from "../lib/data/read.ts";

export interface QualitativeFact {
  label: string;
  statement: string;
  source: Source;
  granularity: Granularity;
  note?: string;
}

const SEZ_SOURCE: Source = { name: figure("record.sez.ksh").source ?? "", publicationDate: "2026-09", tier: 2 };

export const SEZ_FACTS: QualitativeFact[] = [
  {
    label: "What was signed",
    statement: `GulfCap Group, DP World and the County Government of Mombasa signed a KSh ${fmt("record.sez.ksh", "bn")} billion agreement for a ${fmt("record.sez.acres")}-acre Special Economic Zone in Jomvu, witnessed at State House on 8 September 2026.`,
    source: SEZ_SOURCE,
    granularity: "county",
  },
  {
    label: "Jobs projected",
    statement: `The promoters project ${fmt("record.sez.jobs")} direct jobs and report ${fmt("record.sez.firms")} companies confirmed before construction.`,
    source: SEZ_SOURCE,
    granularity: "county",
    note: "A projection, not a count: the campaign reports jobs that exist against it, quarter by quarter.",
  },
  {
    label: "The public zone next door",
    statement: "Dongo Kundu, a public SEZ of about 3,000 acres in Likoni run by the Kenya Ports Authority, remains the state's flagship on the south mainland.",
    source: SEZ_SOURCE,
    granularity: "county",
  },
  {
    label: "The exposure",
    statement: "The deal ties his private business to a county partnership while he campaigns against the governor who signed it; the campaign states the link and puts the jobs on a public tracker rather than hiding either.",
    source: SEZ_SOURCE,
    granularity: "county",
  },
];
