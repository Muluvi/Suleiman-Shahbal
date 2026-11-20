// Phase 4b — county fiscal and audit record. Feeds §3.7 and the fiscal/audit panel.
// Every value is read from the figure registry. The Auditor-General's queries carry figures where
// the FY2024/25 summary gives them; the rest are named gaps listed with the document that closes
// them. Nothing here is summed.
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
    label: "Pending bills, 1 July 2025 (the county's own count)",
    value: val("budget.pending-bills.2025-07"),
    unit: "KSh",
    provenance: { source: src("budget.pending-bills.2025-07", 1), granularity: "county", note: "Annual Development Plan 2026/27, Table 2.4; KSh 1.29bn of it is unpaid salary arrears and statutory deductions." },
  },
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

/** The audit record, FY2024/25, and the revenue owed to the county. Each line reads its own figure. */
const AUDIT_LINES: [string, string, string][] = [
  ["audit.unsupported", "Spending without supporting documents (Auditor-General, FY2024/25)", "A query, not a finding of wrongdoing."],
  ["audit.misstatement", "Inaccuracies in the financial statements (Auditor-General, FY2024/25)", "A query, not a finding of wrongdoing."],
  ["audit.procurement", "Contracts with procurement irregularities (Auditor-General, FY2024/25)", "A query, not a finding of wrongdoing."],
  ["audit.cash", "Cash book against the bank: unreconciled gap (Auditor-General, FY2024/25)", "A query, not a finding of wrongdoing."],
  ["audit.uncollected", "Revenue owed to the county, 30 June 2026 (mostly unpaid land rates)", "Controller of Budget, as reported."],
  ["audit.ifmis", "Payments outside IFMIS", ""],
  ["audit.transfers", "Unsupported inter-account transfers", ""],
];
const tierNumber = (id: string) => Number((figure(id).tier ?? "T3").slice(1)) as 1 | 2 | 3;

/** The audit lines that carry a figure, as typed figures. */
export const AUDIT_QUERIES: SourcedFigure[] = AUDIT_LINES.filter(([id]) => figure(id).value !== null).map(([id, label, note]) => ({
  label,
  value: val(id),
  unit: "KSh",
  provenance: { source: src(id, tierNumber(id)), granularity: "county", note },
}));

/** The audit lines still without a figure: named gaps, listed with the document that closes them. */
export const AUDIT_QUERY_GAPS: { label: string; closesWith: string }[] = AUDIT_LINES.filter(([id]) => figure(id).value === null).map(([id, label]) => ({
  label,
  closesWith: figure(id).closesWith ?? "The Auditor-General's report",
}));

export const STALLED_HEALTH_PROJECTS_GAP =
  "Stalled county health projects are flagged in Auditor-General reporting, but no count, facility list or committed amount is in hand.";
