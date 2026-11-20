// Complete 2022 IEBC ward register — all 30 wards across the 6 constituencies. Source: IEBC,
// "Registered Voters per County Assembly Ward", https://www.iebc.or.ke/docs/rov_per_caw.pdf.
// Tier 1, ward-level. Every consumer of ward data reads from here.
//
// The raw figures live in ./ward-register.json rather than inline in this file so that
// scripts/verify-ward-register.mjs (a plain Node script, run as an npm `prebuild` step) can
// check the same numbers without a TypeScript toolchain. This file is the typed view onto
// that JSON, plus a second copy of the same integrity assertion that runs at module-load
// time — so any build that imports this module (which app/page.tsx does, transitively,
// through WardCartogram and every Phase 6 chart) fails immediately if the register and its
// totals are ever edited out of sync.
import type { Provenance } from "./types";
import { IEBC_WARD_REGISTER } from "./sources";
import raw from "./ward-register.json";

export interface Ward {
  name: string;
  voters: number;
}

export interface Constituency {
  id: string;
  name: string;
  voters: number;
  wards: Ward[];
}

export const WARD_REGISTER_PROVENANCE: Provenance = {
  source: IEBC_WARD_REGISTER,
  granularity: "ward",
};

export const PRISON_VOTERS: number = raw.prisonVoters;
export const COUNTY_TOTAL_WARDS: number = raw.countyTotalWards;
export const COUNTY_TOTAL_WITH_PRISONS: number = raw.countyTotalWithPrisons;
export const CONSTITUENCIES: Constituency[] = raw.constituencies;

function assertWardRegisterIntegrity(): void {
  for (const c of CONSTITUENCIES) {
    const wardSum = c.wards.reduce((sum, w) => sum + w.voters, 0);
    if (wardSum !== c.voters) {
      throw new Error(
        `Ward register integrity failure: ${c.name} wards sum to ${wardSum}, but the constituency total is recorded as ${c.voters}.`
      );
    }
  }

  const constituencySum = CONSTITUENCIES.reduce((sum, c) => sum + c.voters, 0);
  if (constituencySum !== COUNTY_TOTAL_WARDS) {
    throw new Error(
      `Ward register integrity failure: constituency totals sum to ${constituencySum}, expected ${COUNTY_TOTAL_WARDS}.`
    );
  }

  if (COUNTY_TOTAL_WARDS + PRISON_VOTERS !== COUNTY_TOTAL_WITH_PRISONS) {
    throw new Error(
      `Ward register integrity failure: ${COUNTY_TOTAL_WARDS} + ${PRISON_VOTERS} prison voters !== ${COUNTY_TOTAL_WITH_PRISONS}.`
    );
  }

  const wardCount = CONSTITUENCIES.reduce((sum, c) => sum + c.wards.length, 0);
  if (wardCount !== 30) {
    throw new Error(`Ward register integrity failure: expected 30 wards, found ${wardCount}.`);
  }
}
assertWardRegisterIntegrity();

export const TOTAL_WARDS = CONSTITUENCIES.reduce((sum, c) => sum + c.wards.length, 0);

/** All 30 wards flattened, each tagged with its constituency — the shape the Phase 6 "Path to
 * the benchmark" chart sorts and accumulates. */
export const ALL_WARDS: { constituencyId: string; constituencyName: string; name: string; voters: number }[] =
  CONSTITUENCIES.flatMap((c) => c.wards.map((w) => ({ constituencyId: c.id, constituencyName: c.name, name: w.name, voters: w.voters })));

/** Constituencies sorted by register size, descending — Kisauni is largest. */
export const CONSTITUENCIES_BY_SIZE = [...CONSTITUENCIES].sort((a, b) => b.voters - a.voters);

/** The close-contest belt: the three constituencies decided by fewer than 2,000 votes in 2022. */
export const POOL_CONSTITUENCY_IDS = new Set(["kisauni", "nyali", "changamwe"]);

/** The belt's register total, from the register. */
export const POOL_TOTAL = CONSTITUENCIES.filter((c) => POOL_CONSTITUENCY_IDS.has(c.id)).reduce((sum, c) => sum + c.voters, 0);
