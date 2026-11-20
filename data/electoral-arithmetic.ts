import { fmt, val } from "../lib/data/read.ts";
/**
 * Centralized Electoral Arithmetic and Official Certified Benchmarks
 * Single Source of Truth for all quantitative claims across prose and visuals.
 */

export interface CertifiedResult {
  candidate: string;
  office: string;
  year: number;
  votes: number;
  tier: "T1" | "T2" | "T3";
  source: string;
  notes?: string;
}

export const ELECTORAL_ARITHMETIC = {
  // Electorate baselines
  register2022Certified: val("register.2022"), // 30 wards, 2022 register - T1
  register2026ECVRReported: val("register.2026"), // the register in use: 2022 until the 2026 total is published
  turnoutHistoricalAvgPct: val("turnout.constant"), // 2022 governor election turnout, carried forward

  // Winning thresholds
  victoryThresholdBenchmark: val("benchmark"), // the 2022 winning total, rounded
  winner2022: val("result.2022.gov.nassir"),

  // Results in the record
  certifiedResults: [
    { candidate: "Abdulswamad Nassir", office: "Governor", year: 2022, votes: val("result.2022.gov.nassir"), tier: "T2", source: "IEBC declaration, as reported" },
    { candidate: "Hassan Omar", office: "Governor", year: 2022, votes: val("result.2022.gov.omar"), tier: "T2", source: "IEBC declaration, as reported", notes: `${fmt("result.2022.gov.omar")} as most outlets printed it; ${fmt("result.2022.gov.omar.media")} in others` },
    { candidate: "Mohamed Faki", office: "Senator", year: 2022, votes: val("result.2022.senate.faki"), tier: "T2", source: "IEBC declaration as gazetted" },
    { candidate: "Hassan Joho", office: "Governor", year: 2017, votes: val("result.2017.gov.joho"), tier: "T1", source: "High Court, Election Petition 10 of 2017" },
    { candidate: "Suleiman Shahbal", office: "Governor", year: 2017, votes: val("result.2017.gov.shahbal"), tier: "T1", source: "High Court, Election Petition 10 of 2017" },
    { candidate: "Hassan Joho", office: "Governor", year: 2013, votes: val("result.2013.gov.joho"), tier: "T1", source: "High Court, 2013 election petition" },
    { candidate: "Suleiman Shahbal", office: "Governor", year: 2013, votes: val("result.2013.gov.shahbal"), tier: "T1", source: "High Court, 2013 election petition" },
  ] as CertifiedResult[],

  // The close-contest belt
  poolRegisterPct: val("pool.share"),
} as const;
