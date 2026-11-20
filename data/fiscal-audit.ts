// Phase 4b — county fiscal and audit record. Feeds §3.7 and the fiscal/audit panel.
// Every value is read from the figure registry; the Auditor-General's itemised queries are named
// gaps until the report is retrieved, so they are listed with the document that closes them and
// never summed.
import type { SourcedFigure } from "./types";
import { figure, val } from "../lib/data/read.ts";

const src = (id: string, tier: 1 | 2 | 3) => ({ name: figure(id).source ?? "", publicationDate: figure(id).asOf ?? "", tier });

// §1.5's budget, restated as a typed figure so the chart can plot it without a hardcoded number.
export const RESOURCE_ENVELOPE: SourcedFigure = {
  label: "Approved supplementary budget, FY2025/26",
  value: val("budget.total"),
  unit: "KSh",
  provenance: { source: src("budget.total", 3), granularity: "county", note: "Read through secondary reporting of the Controller of Budget's review." },
};

/** The county's unpaid obligations, each from its own source and year: never added together. */
export const FISCAL_PRESSURES: SourcedFigure[] = [
  {
    label: "Pending bills, 30 June 2026",
    value: val("budget.pending-bills.2026"),
    unit: "KSh",
    provenance: { source: src("budget.pending-bills.2026", 3), granularity: "county", note: "Almost all owed by the executive." },
  },
  {
    label: "Pending bills, as reported in 2024",
    value: val("budget.pending-bills.2021"),
    unit: "KSh",
    provenance: { source: src("budget.pending-bills.2021", 2), granularity: "county", note: "Third-highest of the 47 counties at the time." },
  },
  {
    label: "Overdraft to pay June 2026 salaries",
    value: val("budget.overdraft.2026-06"),
    unit: "KSh",
    provenance: { source: src("budget.overdraft.2026-06", 3), granularity: "county" },
  },
];

/** Share of pending bills older than three years (Tier 2). */
export const PENDING_BILLS_AGED_PCT = val("budget.pending-bills.aged");

/** The Auditor-General's itemised queries: named gaps until the report is retrieved. */
export const AUDIT_QUERY_GAPS: { label: string; closesWith: string }[] = [
  ["audit.cash", "Unconfirmed cash balances"],
  ["audit.uncollected", "Uncollected county rates and rents"],
  ["audit.ifmis", "Payments outside IFMIS"],
  ["audit.transfers", "Unsupported inter-account transfers"],
].map(([id, label]) => ({ label, closesWith: figure(id).closesWith ?? "The Auditor-General's report" }));

export const STALLED_HEALTH_PROJECTS_GAP =
  "Stalled county health projects are flagged in Auditor-General reporting, but no count, facility list or committed amount is in hand.";
