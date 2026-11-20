import { AUDIT_QUERIES, AUDIT_QUERY_GAPS, FISCAL_PRESSURES, PENDING_BILLS_AGED_PCT, STALLED_HEALTH_PROJECTS_GAP } from "../../data/fiscal-audit";
import { TierBadge } from "./TierBadge";
import { ProvenanceLine } from "./ProvenanceLine";

function formatKSh(value: number): string {
  if (value >= 1_000_000_000) return `KSh${(value / 1_000_000_000).toFixed(2)}bn`;
  return `KSh${(value / 1_000_000).toFixed(0)}m`;
}

/**
 * County fiscal and audit record (§3.7). Server component — the chart pairing these figures
 * against the budget lives in FiscalAuditBlock, dynamically imported alongside it.
 */
export function FiscalAuditPanel() {
  return (
    <div className="bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6 print-avoid-break">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-1.5 h-6 bg-accent rounded-full shrink-0" />
        <h4 className="font-serif text-sm font-bold text-ink">Pending Bills, the Salary Overdraft and the Audit Record</h4>
      </div>
      <p className="t-small text-muted mb-4 leading-relaxed pl-4">
        Each figure is from its own source and year, so they are never added together. {PENDING_BILLS_AGED_PCT}% of
        Mombasa&rsquo;s pending bills are older than three years, the highest proportion in Kenya (Tier 2).
      </p>

      <div className="not-prose fx-focus overflow-x-auto" tabIndex={0} role="group" aria-label="Fiscal record table, scrollable">
        <table className="w-full text-left t-small">
          <thead>
            <tr className="t-micro font-bold text-muted">
              <th className="py-1 pr-3">Item</th>
              <th className="py-1 pr-3">Amount</th>
              <th className="py-1">Tier</th>
            </tr>
          </thead>
          <tbody>
            {[...FISCAL_PRESSURES, ...AUDIT_QUERIES].map((q, i) => (
              <tr key={i} className="border-t border-line/40">
                <td className="py-2 pr-3 font-bold text-ink">{q.label}</td>
                <td className="py-2 pr-3 font-black text-ink">{formatKSh(q.value)}</td>
                <td className="py-2">
                  <TierBadge tier={q.provenance.source.tier} compact />
                </td>
              </tr>
            ))}
            {AUDIT_QUERY_GAPS.map((q, i) => (
              <tr key={`gap-${i}`} className="border-t border-line/40">
                <td className="py-2 pr-3 font-bold text-ink">{q.label}</td>
                <td className="py-2 pr-3 text-muted italic" colSpan={2}>Data needed: {q.closesWith}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="t-label text-muted italic mt-3 leading-relaxed">
        The Auditor-General&rsquo;s itemised queries are queries, not settled findings of wrongdoing; the county has a
        right of reply. {STALLED_HEALTH_PROJECTS_GAP}
      </p>

      <ProvenanceLine provenance={[...FISCAL_PRESSURES, ...AUDIT_QUERIES].map((q) => q.provenance)} />
    </div>
  );
}
