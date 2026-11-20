import { fmt, val } from "../lib/data/read.ts";
export type TerminalModeId = "dgp" | "mea" | "tpc" | "wtr" | "reg" | "cpf";

export interface TerminalMode {
  id: TerminalModeId;
  code: string;
  name: string;
  label: string;
  cadence: string;
  summary: string;
}

export const TERMINAL_MODES: TerminalMode[] = [
  {
    id: "dgp",
    code: "DGP-30",
    name: "Daily Ground Pulse",
    label: "Ground Pulse (DGP)",
    cadence: "Daily @ 18:00 EAT",
    summary: "Ward-level intelligence reports tracking local economic anxieties and daily supporter growth.",
  },
  {
    id: "mea",
    code: "MEA-08",
    name: "Market Day Audit",
    label: "Market Audit (MEA)",
    cadence: "Weekly by Market Day",
    summary: "Crowd density metrics, physical Kiswahili leaflet uptake, and grassroots sentiment captured at major Mombasa trading centres.",
  },
  {
    id: "tpc",
    code: "TPC-120K",
    name: "Turnout & Pacing Check",
    label: "Turnout Pacing (TPC)",
    cadence: "Hourly on Polling Day",
    summary: `Real-time vote velocity pacing across all 30 wards against the ${fmt("benchmark")} benchmark.`,
  },
  // Visual upgrade, B9: three county-wide screens drawn from the figure registry, not the
  // illustrative ward data above. They show what the site holds and nothing more.
  {
    id: "wtr",
    code: "WTR",
    name: "Water Watch",
    label: "Water Watch (WTR)",
    cadence: "With each published water figure",
    summary: "Water needed, supplied and reaching residents, with the jerrican price and Mwache Dam's progress.",
  },
  {
    id: "reg",
    code: "REG",
    name: "Register Growth",
    label: "Register Growth (REG)",
    cadence: "With each IEBC release",
    summary: "The register since 2022: the 2022 base, and the 2026 figures as the IEBC publishes them.",
  },
  {
    id: "cpf",
    code: "CPF",
    name: "Content Performance",
    label: "Content Performance (CPF)",
    cadence: "Weekly, Monday standup",
    summary: "The nomination-stage indicators against their targets. Readings arrive with the first analytics export.",
  },
];

export interface WardPulseData {
  ward: string;
  constituency: string;
  coordinator: string;
  channel: "2G-SMS" | "USSD-Tree" | "WhatsApp-Bot";
  signalStrength: number;
  battery: string;
  dominantIssue: string;
  optInSupportersToday: number;
  totalWardSupporters: number;
  targetThreshold: number;
  moodIndex: "Strongly Favourable" | "Consolidating" | "Contested" | "High Opportunity";
  recentAudioDispatch: {
    title: string;
    duration: string;
    speaker: string;
    location: string;
  };
  marketData?: {
    marketName: string;
    crowdEstimate: string;
    leafletsDistributed: number;
    bodaBodaChampionsActive: number;
    keyQuote: string;
  };
  turnoutPacing?: {
    registeredVoters: number;
    targetTurnoutPct: number;
    currentPacingPct: number;
    projectedVotes: number;
    pollingStationsReporting: string;
  };
}

export const WARD_DATA: Record<string, WardPulseData> = {
  "mvita-tononoka": {
    ward: "Tononoka",
    constituency: "Mvita",
    coordinator: "A. Said (Coord #01)",
    channel: "WhatsApp-Bot",
    signalStrength: 4,
    battery: "96%",
    dominantIssue: "County fees on CBD traders and unpaid supplier bills",
    optInSupportersToday: 152,
    totalWardSupporters: 5120,
    targetThreshold: 6800,
    moodIndex: "Contested",
    recentAudioDispatch: {
      title: "Tononoka Traders Breakfast Briefing",
      duration: "01:42",
      speaker: "Ward Captain H. Omar",
      location: "Tononoka grounds",
    },
    marketData: {
      marketName: "Marikiti Market",
      crowdEstimate: "3,800 traders & shoppers",
      leafletsDistributed: 2200,
      bodaBodaChampionsActive: 30,
      keyQuote: "Traders want the county to pay its suppliers before it raises another fee.",
    },
    turnoutPacing: {
      registeredVoters: val("ward.tononoka"),
      targetTurnoutPct: 58,
      currentPacingPct: 60.4,
      projectedVotes: 14121,
      pollingStationsReporting: "40 / 40",
    },
  },
  "kisauni-junda": {
    ward: "Junda",
    constituency: "Kisauni",
    coordinator: "F. Mwinyi (Coord #10)",
    channel: "USSD-Tree",
    signalStrength: 3,
    battery: "88%",
    dominantIssue: "Hours of piped water and the vendor's jerrican price",
    optInSupportersToday: 186,
    totalWardSupporters: 6400,
    targetThreshold: 8200,
    moodIndex: "High Opportunity",
    recentAudioDispatch: {
      title: "Junda Water Queue Voice Note",
      duration: "02:15",
      speaker: "Women's Group Chair Z. Ali",
      location: "Junda water kiosk",
    },
    marketData: {
      marketName: "Mtopanga Stage Market",
      crowdEstimate: "2,900 residents & commuters",
      leafletsDistributed: 1900,
      bodaBodaChampionsActive: 44,
      keyQuote: "We buy water at thirty shillings a jerrican; tell us when the taps will run.",
    },
    turnoutPacing: {
      registeredVoters: val("ward.junda"),
      targetTurnoutPct: 57,
      currentPacingPct: 58.9,
      projectedVotes: 15080,
      pollingStationsReporting: "41 / 41",
    },
  },
  "changamwe-port-reitz": {
    ward: "Port Reitz",
    constituency: "Changamwe",
    coordinator: "J. Ochieng (Coord #04)",
    channel: "2G-SMS",
    signalStrength: 2,
    battery: "91%",
    dominantIssue: "Port jobs and casual work at the container freight stations",
    optInSupportersToday: 131,
    totalWardSupporters: 4950,
    targetThreshold: 6300,
    moodIndex: "Consolidating",
    recentAudioDispatch: {
      title: "Port Reitz Dockworkers Shift Change",
      duration: "01:55",
      speaker: "Stage Champion K. Baya",
      location: "Port Reitz Road",
    },
    marketData: {
      marketName: "Chaani Evening Market",
      crowdEstimate: "2,400 workers & traders",
      leafletsDistributed: 1500,
      bodaBodaChampionsActive: 26,
      keyQuote: "Jobs that come with a contract, not a day rate, is what people ask about.",
    },
    turnoutPacing: {
      registeredVoters: val("ward.port-reitz"),
      targetTurnoutPct: 55,
      currentPacingPct: 56.7,
      projectedVotes: 10102,
      pollingStationsReporting: "29 / 29",
    },
  },
  "likoni-timbwani": {
    ward: "Timbwani",
    constituency: "Likoni",
    coordinator: "R. Mwanaisha (Coord #25)",
    channel: "WhatsApp-Bot",
    signalStrength: 3,
    battery: "84%",
    dominantIssue: "The ferry crossing and the hours lost on it every day",
    optInSupportersToday: 144,
    totalWardSupporters: 5880,
    targetThreshold: 7600,
    moodIndex: "Contested",
    recentAudioDispatch: {
      title: "Ferry Commuters Morning Briefing",
      duration: "01:18",
      speaker: "Youth Mobilizer S. Juma",
      location: "Likoni ferry landing",
    },
    marketData: {
      marketName: "Shelly Beach Road Market",
      crowdEstimate: "3,100 commuters & traders",
      leafletsDistributed: 1700,
      bodaBodaChampionsActive: 32,
      keyQuote: "Every day starts with an hour at the ferry before anyone earns a shilling.",
    },
    turnoutPacing: {
      registeredVoters: val("ward.timbwani"),
      targetTurnoutPct: 54,
      currentPacingPct: 55.2,
      projectedVotes: 18729,
      pollingStationsReporting: "53 / 53",
    },
  },
  "jomvu-mikindani": {
    ward: "Mikindani",
    constituency: "Jomvu",
    coordinator: "C. Kahindi (Coord #08)",
    channel: "USSD-Tree",
    signalStrength: 3,
    battery: "92%",
    dominantIssue: "Jobs at the planned Jomvu SEZ and who gets hired first",
    optInSupportersToday: 165,
    totalWardSupporters: 7310,
    targetThreshold: 9100,
    moodIndex: "High Opportunity",
    recentAudioDispatch: {
      title: "Mikindani Youth & TVET Forum",
      duration: "02:04",
      speaker: "Coordinator C. Kahindi",
      location: "Mikindani social hall",
    },
    marketData: {
      marketName: "Mikindani Stage Market",
      crowdEstimate: "4,100 market-goers",
      leafletsDistributed: 2600,
      bodaBodaChampionsActive: 40,
      keyQuote: "Young people ask whether the zone's jobs will go to people from Jomvu.",
    },
    turnoutPacing: {
      registeredVoters: val("ward.mikindani"),
      targetTurnoutPct: 56,
      currentPacingPct: 57.8,
      projectedVotes: 18955,
      pollingStationsReporting: "54 / 54",
    },
  },
};

export const WARDS_LIST = [
  { id: "mvita-tononoka", label: "Tononoka", region: "Island" },
  { id: "kisauni-junda", label: "Junda", region: "North mainland" },
  { id: "changamwe-port-reitz", label: "Port Reitz", region: "West mainland" },
  { id: "likoni-timbwani", label: "Timbwani", region: "South" },
  { id: "jomvu-mikindani", label: "Mikindani", region: "West mainland" },
] as const;
