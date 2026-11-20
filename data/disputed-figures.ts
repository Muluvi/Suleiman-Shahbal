// Phase 3 — disputed figures. Two known contradictions in the published record, both resolved
// by a preferred value (November 2026). None is
// resolved by picking a winner and dropping the other value: every entry keeps both (or all)
// values, both sources, and states either the reason a value is preferred or exactly what
// would resolve the dispute. Rendered by components/markdown/DisputedFigure.tsx.
import type { DisputedFigureEntry, Source } from "./types";
import { HIGH_COURT_2013, MEDIA_2022_DECLARATION } from "./sources";
import { figure, fmt, val } from "../lib/data/read.ts";

const MEDIA_98108: Source = {
  name: "The Standard, KNA and NTV, 30 August 2022",
  publicationDate: "2022-08",
  tier: 2,
};

const SCRUTINY_2013: Source = {
  name: "Court-ordered scrutiny of the 2013 Mombasa governor election, as reported (The Star, 28 September 2013)",
  publicationDate: "2013-09",
  tier: 2,
};

export const DISPUTED_FIGURES: DisputedFigureEntry[] = [
  {
    id: "omar-2022-governor-votes",
    label: "Hassan Omar, 2022 Mombasa governor election — runner-up vote total",
    values: [
      { value: val("result.2022.gov.omar"), unit: "votes", source: MEDIA_2022_DECLARATION, granularity: "county" },
      { value: val("result.2022.gov.omar.media"), unit: "votes", source: MEDIA_98108, granularity: "county" },
    ],
    preferredIndex: 0,
    preferenceReason:
      `${fmt("result.2022.gov.omar")} is the total most outlets printed from the declaration (The Star, Capital FM); ${fmt("result.2022.gov.omar.media")} appears in others. The three-vote difference changes no conclusion in this plan.`,
    resolutionPath: "The IEBC Form 37C for the 2022 Mombasa governor result, held directly, would settle the figure and make it Tier 1.",
    status: "resolved-preferred",
  },
  {
    id: "shahbal-2013-governor-votes",
    label: "Suleiman Shahbal, 2013 Mombasa governor election — vote total",
    values: [
      { value: val("result.2013.gov.shahbal"), unit: "votes", source: HIGH_COURT_2013, granularity: "county" },
      { value: figure("result.2013.gov.shahbal").alt?.value ?? 0, unit: "votes", source: SCRUTINY_2013, granularity: "county" },
    ],
    preferredIndex: 0,
    preferenceReason:
      "The declared total, as the High Court recorded it, stands: the court upheld the result. The scrutiny's recount added 13 votes and is reported only through the press.",
    resolutionPath: "The scrutiny report filed in the 2013 petition, held directly, would attach the recount to the record.",
    status: "resolved-preferred",
  },
];
