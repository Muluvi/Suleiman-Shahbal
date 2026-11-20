/**
 * Two lists the tools and the share cards both read (visual upgrade, Part E), kept apart from the
 * tool components so an image route can use them without loading any tool.
 */
import { NOMINATION_CONFIRMATION_REQUIREMENTS } from "../../data/nomination-path";
import { RACE_CALENDAR } from "../public-data";

/** The Fact Card Generator's figures: a plain label and the registry id it reads. */
export const FACTS: [string, string][] = [
  ["Registered voters in Mombasa, 2022", "register.2022"], ["Polling stations, 2022", "register.polling-stations"], ["Turnout in the 2022 governor race", "turnout.2022"],
  ["Valid votes for governor, 2022", "result.2022.gov.valid"], ["The 2022 winning total for governor", "result.2022.gov.nassir"], ["Registered voters who cast no governor vote, 2022", "abstained.2022"],
  ["Suleiman Shahbal's votes for governor, 2013", "result.2013.gov.shahbal"], ["Suleiman Shahbal's votes for governor, 2017", "result.2017.gov.shahbal"],
  ["Mombasa's population, 2019 census", "census.population"], ["Households, 2019 census", "census.households"], ["Median age in Mombasa", "census.median-age"],
  ["Residents aged 15 to 34", "census.age.15-34.share"], ["People per square kilometre", "census.density"], ["Residents in poverty, 2021", "poverty.2021"],
  ["Residents using the internet", "ict.internet"], ["Young people using the internet", "ict.mombasa.youth"],
  ["Water Mombasa needs each day (m³)", "water.demand"], ["Water Mombasa receives each day (m³)", "water.supply"], ["Water lost before it is paid for", "water.nrw"],
  ["A 20-litre jerrican from a vendor (KSh)", "price.water.vendor"], ["A 20-litre jerrican at a county source (KSh)", "price.water.county"], ["Mwache Dam, share complete", "water.mwache.complete"],
  ["County budget, FY2025/26", "budget.total"], ["Equitable share from the national government", "budget.equitable"], ["County's own-source revenue, FY2025/26", "budget.osr"],
  ["County pending bills, 30 June 2026", "budget.pending-bills.2026"], ["Pending bills older than three years", "budget.pending-bills.aged"], ["Overdraft to pay June 2026 salaries", "budget.overdraft.2026-06"],
  ["Jomvu SEZ agreement (KSh)", "record.sez.ksh"], ["Jomvu SEZ, direct jobs projected", "record.sez.jobs"], ["Year Gulf African Bank was founded", "record.gab.founded"],
];

const NOMINATION_WANTED = /Governor|financing account|authorised persons for campaign|expenditure report|Public officers/i;

/** The Governor Nomination Path: the two open confirmations, then the dated Gazette steps from 2027. */
export const NOMINATION_ITEMS: { id: string; label: string; detail: string }[] = [
  ...NOMINATION_CONFIRMATION_REQUIREMENTS.map((r, i) => ({ id: `party-${i}`, label: r, detail: "Needed to confirm the nomination method" })),
  ...RACE_CALENDAR.filter((e) => NOMINATION_WANTED.test(e.event) && e.date >= "2027-01-01").map((e) => ({ id: e.date + e.event, label: e.event, detail: `${e.date} · ${e.source}` })),
];
