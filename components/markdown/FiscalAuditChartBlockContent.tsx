"use client";

import { LazyMount } from "../LazyMount";
import { ProvenanceLine } from "./ProvenanceLine";
import { RESOURCE_ENVELOPE, FISCAL_PRESSURES } from "../../data/fiscal-audit";
import FiscalAuditChart, { type FiscalBar } from "../charts/FiscalAuditChart";

function fmt(v: number): string {
  return v >= 1_000_000_000 ? `KSh${(v / 1_000_000_000).toFixed(2)}bn` : `KSh${(v / 1_000_000).toFixed(0)}m`;
}

const COLORS = ["#e31d2b", "#b45309", "#8295a9"];
const DATA: FiscalBar[] = [
  { name: "Budget (FY2025/26)", value: RESOURCE_ENVELOPE.value, display: `${fmt(RESOURCE_ENVELOPE.value)} — Section 1.5`, color: "#0056a8" },
  ...FISCAL_PRESSURES.map((f, i) => ({ name: f.label, value: f.value, display: fmt(f.value), color: COLORS[i] })),
];
const LATEST = FISCAL_PRESSURES[0];

export function FiscalAuditChartBlockContent() {
  return (
    <div className="not-prose bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6 print-avoid-break">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-1.5 h-6 bg-accent rounded-full shrink-0" />
        <h4 className="font-serif text-sm font-bold text-ink">The Budget Against What the County Owes</h4>
      </div>
      <p className="t-small text-muted mb-3 leading-relaxed pl-4">
        The pending bills at 30 June 2026 were <strong className="text-ink">{fmt(LATEST.value)}</strong> — about{" "}
        <strong className="text-ink">{((LATEST.value / RESOURCE_ENVELOPE.value) * 100).toFixed(0)}%</strong> of the
        FY2025/26 budget. That ratio is this chart&apos;s only computation; the figures are from different sources and
        years and are not added together.
      </p>

      <div className="w-full t-micro mb-4">
        <LazyMount minHeight={180}>
          <FiscalAuditChart data={DATA} />
        </LazyMount>
      </div>

      {/* Accessible table equivalent */}
      <div className="not-prose fx-focus overflow-x-auto" tabIndex={0} role="group" aria-label="Fiscal audit data table, scrollable">
        <table className="data-table text-left t-small">
          <thead>
            <tr className="t-micro font-bold text-muted">
              <th className="py-1 pr-3">Category</th>
              <th className="py-1">Amount</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((d, i) => (
              <tr key={i} className="border-t border-line/40">
                <td className="py-2 pr-3 font-bold text-ink">{d.name}</td>
                <td className="py-2 text-ink/80">{d.display}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ProvenanceLine
        provenance={[RESOURCE_ENVELOPE.provenance, ...FISCAL_PRESSURES.map((q) => q.provenance)]}
      />
    </div>
  );
}
