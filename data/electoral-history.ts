// Phase 4a — electoral history across the 2013, 2017 and 2022 cycles. Feeds §2.2 and
// the Phase 6c electoral-timeline chart.
import type { Source } from "./types";
import { COURT_OF_APPEAL_2018, HIGH_COURT_2013, MEDIA_2022_DECLARATION } from "./sources";
import { val } from "../lib/data/read.ts";

export interface RaceResult {
  candidate: string;
  party?: string;
  votes: number;
  source: Source;
  /** Set when this candidate's figure is one of the two disputed values — see data/disputed-figures.ts. */
  disputedFigureId?: string;
}

export interface ElectionRace {
  year: number;
  office: string;
  results: RaceResult[] | null;
  /** Set instead of `results` when the research pass did not supply this race's figures. */
  gapNote?: string;
}

export const ELECTORAL_HISTORY: ElectionRace[] = [
  {
    year: 2013,
    office: "Mombasa Governor",
    results: [
      { candidate: "Hassan Joho", party: "ODM", votes: val("result.2013.gov.joho"), source: HIGH_COURT_2013 },
      { candidate: "Suleiman Shahbal", party: "Wiper", votes: val("result.2013.gov.shahbal"), source: HIGH_COURT_2013 },
    ],
  },
  {
    year: 2017,
    office: "Mombasa Governor",
    results: [
      { candidate: "Hassan Joho", party: "ODM", votes: val("result.2017.gov.joho"), source: COURT_OF_APPEAL_2018 },
      { candidate: "Suleiman Shahbal", party: "Jubilee", votes: val("result.2017.gov.shahbal"), source: COURT_OF_APPEAL_2018 },
      { candidate: "Hassan Omar", party: "Wiper", votes: val("result.2017.gov.omar"), source: COURT_OF_APPEAL_2018 },
      { candidate: "Hezron Awiti", votes: val("result.2017.gov.awiti"), source: COURT_OF_APPEAL_2018 },
    ],
  },
  {
    year: 2022,
    office: "Mombasa Governor",
    results: [
      { candidate: "Abdulswamad Nassir", party: "ODM", votes: val("result.2022.gov.nassir"), source: MEDIA_2022_DECLARATION },
      { candidate: "Hassan Omar", party: "UDA", votes: val("result.2022.gov.omar"), source: MEDIA_2022_DECLARATION, disputedFigureId: "omar-2022-governor-votes" },
      { candidate: "Hezron Awiti", party: "VDP", votes: val("result.2022.gov.awiti"), source: MEDIA_2022_DECLARATION },
    ],
  },
  {
    year: 2022,
    office: "Mombasa Senator",
    results: [{ candidate: "Mohamed Faki", party: "ODM", votes: val("result.2022.senate.faki"), source: MEDIA_2022_DECLARATION }],
  },
];

// Omar's 2022 governor figure is 98,105 as most outlets printed it; The Standard, KNA and NTV printed
// 98,108 (data/disputed-figures.ts, id "omar-2022-governor-votes"). Form 37C settles it.
