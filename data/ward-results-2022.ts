/**
 * Who holds each ward and constituency: the 2022 Member of County Assembly (MCA) and Member of
 * the National Assembly (MP) for Mombasa, with party and the winner's declared votes.
 *
 * Source: Mzalendo's Mombasa county profile, which lists the IEBC declarations (Tier 2: a
 * reliable aggregator of official results, not the IEBC forms themselves). Only winners' votes
 * are published there, so no margin is computed. Names are given exactly as the source lists them. Keys are the ward names used in
 * data/ward-register.json.
 */
import type { Source } from "./types";

export const MZALENDO_2022: Source = {
  name: "Mzalendo, Mombasa county profile: 2022 MCAs and MPs, from the IEBC declarations",
  publicationDate: "2022-08",
  tier: 2,
};

export type SeatResult = { holder: string; party: string; votes: number };

export const MCA_2022: Record<string, SeatResult> = {
  "Airport": { holder: "Omondi Ibrahim Oyugi", party: "Independent", votes: 3181 },
  "Chaani": { holder: "Makanga Frankline Mbega", party: "Independent", votes: 3363 },
  "Changamwe": { holder: "Ogutu Benard Ochieng", party: "ODM", votes: 3099 },
  "Kipevu": { holder: "Nyache Leila Mughazo", party: "ODM", votes: 2258 },
  "Port Reitz": { holder: "Makarani Fadhili Mwalimu", party: "ODM", votes: 3418 },
  "Jomvu Kuu": { holder: "Mose Joshua Ong'au", party: "ODM", votes: 2914 },
  "Mikindani": { holder: "Madialo Jacktone Oluoch", party: "ODM", votes: 6988 },
  "Miritini": { holder: "Baya Kibwana Swaleh", party: "ODM", votes: 2992 },
  "Bamburi": { holder: "Mbelle Patrick Mwavula", party: "ODM", votes: 2795 },
  "Junda": { holder: "Kai Silvester Tsuma", party: "UDA", votes: 2743 },
  "Magogoni": { holder: "Mohamed Hassan Ulher", party: "ODM", votes: 2331 },
  "Mjambere": { holder: "Juma Amriya Boy", party: "ODM", votes: 2736 },
  "Mtopanga": { holder: "Matsaki Morgan Ndapatani", party: "UDA", votes: 2478 },
  "Mwakirunge": { holder: "Khamis Mwinyi Mtoto", party: "WDM", votes: 1374 },
  "Shanzu": { holder: "Katana Allen Rodgers", party: "ODM", votes: 4140 },
  "Bofu": { holder: "Manuari Juma Seif", party: "ODM", votes: 2726 },
  "Likoni": { holder: "Mwamwiri Athman Rama", party: "ODM", votes: 1653 },
  "Mtongwe": { holder: "Kimuswa Nusura Mwinyi", party: "ODM", votes: 2142 },
  "Shika Adabu": { holder: "Kambi Mwalimu Juma", party: "ODM", votes: 2682 },
  "Timbwani": { holder: "Mbaya Hamisi Salim", party: "ODM", votes: 4954 },
  "Majengo": { holder: "Khamis Ahmed Khamis Salim", party: "ODM", votes: 5070 },
  "Mji wa Kale/Makadara": { holder: "Hussein Abdirahman Abdikadir", party: "ODM", votes: 3952 },
  "Shimanzi/Ganjoni": { holder: "Prischilla Mema", party: "ODM", votes: 3644 },
  "Tononoka": { holder: "Sharif Ali Omar", party: "ODM", votes: 2963 },
  "Tudor": { holder: "Baloo Samir Gulamabbass", party: "UDA", votes: 4587 },
  "Frere Town": { holder: "Salim Maryam Sharif", party: "ODM", votes: 4534 },
  "Kadzandani": { holder: "Mote Fatuma Swaleh", party: "ODM", votes: 2957 },
  "Kongowea": { holder: "Muigai Samwel Mwaura", party: "UDA", votes: 5064 },
  "Mkomani": { holder: "Murimi Eliud Kimari", party: "ODM", votes: 3846 },
  "Ziwa la Ng'ombe": { holder: "Athuman Hamisi Nyota", party: "ODM", votes: 3497 },
};

/** Keyed by constituency name as in data/ward-register.json. */
export const MP_2022: Record<string, SeatResult> = {
  "Changamwe": { holder: "Shimbwa Omar Mwinyi", party: "ODM", votes: 25077 },
  "Jomvu": { holder: "Bady Bady Twalib", party: "ODM", votes: 13850 },
  "Kisauni": { holder: "Bedzimba Rashid Juma", party: "ODM", votes: 34747 },
  "Likoni": { holder: "Mboko Mishi Juma Khamisi", party: "ODM", votes: 15997 },
  "Mvita": { holder: "Machele Mohamed Soud", party: "ODM", votes: 22611 },
  "Nyali": { holder: "Mohamed Mohamed Ali", party: "UDA", votes: 32988 },
};

/** MCA seats won in 2022, by party, largest first. */
export const MCA_SEATS_BY_PARTY: { party: string; seats: number }[] = Object.entries(
  Object.values(MCA_2022).reduce<Record<string, number>>((t, r) => ({ ...t, [r.party]: (t[r.party] ?? 0) + 1 }), {}),
)
  .map(([party, seats]) => ({ party, seats }))
  .sort((a, b) => b.seats - a.seats);
