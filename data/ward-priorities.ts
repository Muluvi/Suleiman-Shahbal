/**
 * What each ward asked the county for: the ranked ward-based priorities in the county's own
 * Annual Development Plan 2026/27 (Section 3.16, "Synthesized Ranked Equitable Ward Based Project
 * Proposals"), compiled from the County Assembly's public participation. Tier 1: a county document.
 *
 * The ADP lists Miritini and Mikindani twice and gives no ranked entry for Mkomani or Kadzandani.
 * For those two the entry is the health request recorded for the ward at the plan's public
 * participation, unranked.
 * The rank is the ADP's own order, kept as printed.
 */
import type { Source } from "./types";

export const ADP_2026_27: Source = {
  name: "County Government of Mombasa, Annual Development Plan 2026/27, Section 3.16 (ward priorities from public participation)",
  publicationDate: "2025-09",
  tier: 1,
};

/** rank is the ADP's own order in Section 3.16; null means the request comes from the plan's
 *  ward-by-ward public-participation record instead, where nothing is ranked. */
export type WardPriority = { rank: number | null; sector: string; ask: string };

export const WARD_PRIORITIES: Record<string, WardPriority | null> = {
  "Changamwe": { rank: 1, sector: "Health", ask: "Upgrade Magongo Health Centre and keep Chaani Hospital open around the clock." },
  "Kipevu": { rank: 2, sector: "Water and sanitation", ask: "Unclog drains, repair manholes, drill boreholes and collect waste." },
  "Chaani": { rank: 3, sector: "Water, sanitation and drainage", ask: "Stormwater drains, sewerage and waste transfer sites." },
  "Airport": { rank: 4, sector: "Health", ask: "Upgrade Bokole CDF Hospital and staff it." },
  "Port Reitz": { rank: 5, sector: "Water, sanitation and waste", ask: "Fresh water, sewerage, public toilets and waste collection." },
  "Miritini": { rank: 6, sector: "Roads and drainage", ask: "Roads, cabro paving, footbridges and drainage." },
  "Mikindani": { rank: 7, sector: "Roads and drainage", ask: "Roads, drainage, streetlights and erosion control." },
  "Frere Town": { rank: 8, sector: "Health", ask: "Upgrade dispensaries, add ambulances and raise vaccination coverage." },
  "Kongowea": { rank: 9, sector: "Health", ask: "Upgrade the dispensary to Level 4 with a maternity wing, drugs and ambulances." },
  "Ziwa la Ng'ombe": { rank: 10, sector: "Drainage", ask: "Rehabilitate the drainage system and manage flooding." },
  "Bamburi": { rank: 11, sector: "Health", ask: "Upgrade the dispensary and staff it." },
  "Mtopanga": { rank: 12, sector: "Health", ask: "Upgrade Mtopanga Dispensary." },
  "Mjambere": { rank: 13, sector: "Drainage and sanitation", ask: "Unclog drains and manage waste." },
  "Magogoni": { rank: 14, sector: "Health", ask: "Upgrade health centres and staff them." },
  "Junda": { rank: 15, sector: "Roads and drainage", ask: "Build roads and drainage." },
  "Jomvu Kuu": { rank: 17, sector: "Health", ask: "Upgrade Jomvu Kuu Dispensary and add a maternity wing." },
  "Majengo": { rank: 19, sector: "Health", ask: "Expand Majengo Dispensary and build a maternity unit at Mvita Clinic." },
  "Mji wa Kale/Makadara": { rank: 20, sector: "Drainage and water", ask: "Rehabilitate blocked drains and boreholes." },
  "Tudor": { rank: 21, sector: "Water", ask: "Fresh water supply, and control of illegal waste connections." },
  "Tononoka": { rank: 22, sector: "Infrastructure", ask: "Finish the stalled Tononoka Stadium." },
  "Mwakirunge": { rank: 23, sector: "Health", ask: "Ambulances and round-the-clock service at Digirikani and Mwakirunge dispensaries." },
  "Likoni": { rank: 24, sector: "Health", ask: "Drugs and facilities at Kindunguni Dispensary." },
  "Bofu": { rank: 25, sector: "Health", ask: "Build a Level 4 hospital." },
  "Shika Adabu": { rank: 26, sector: "Health", ask: "Finish Kwa Joho Hospital." },
  "Mtongwe": { rank: 27, sector: "Education", ask: "Build a secondary school." },
  "Timbwani": { rank: 28, sector: "Health", ask: "Finish Shika Adabu Dispensary with an ICU and staff." },
  "Shimanzi/Ganjoni": { rank: 29, sector: "Health", ask: "Stock Railway Dispensary with drugs." },
  "Shanzu": { rank: 30, sector: "Streetlights and roads", ask: "Streetlights for security, and cabro access roads." },
  "Mkomani": { rank: null, sector: "Health", ask: "Refurbish Maweni Dispensary to maternity level." },
  "Kadzandani": { rank: null, sector: "Health", ask: "Specialised medical support for people with disabilities." },
};

