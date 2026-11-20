import { SEZ_FACTS } from "../../data/jomvu-sez";
import { TierBadge } from "./TierBadge";
import { ProvenanceLine } from "./ProvenanceLine";

/** The Jomvu SEZ (§3.8). Server component, no chart — the record as reported. */
export function SezPanel() {
  return (
    <div className="bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6 print-avoid-break">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-1.5 h-6 bg-accent rounded-full shrink-0" />
        <h4 className="font-serif text-sm font-bold text-ink">The Jomvu Special Economic Zone</h4>
      </div>
      <p className="t-small text-muted mb-4 leading-relaxed pl-4">
        Rendered as sourced statements. The jobs figure is the promoters&rsquo; projection, never a count.
      </p>

      <div className="space-y-3">
        {SEZ_FACTS.map((f, i) => (
          <div key={i} className="rounded-xl border border-line/60 bg-paper p-3">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="t-micro font-bold text-muted">{f.label}</span>
              <TierBadge tier={f.source.tier} compact />
            </div>
            <p className="t-label text-ink/90 leading-relaxed">{f.statement}</p>
            {f.note && <p className="t-label text-muted italic mt-1 leading-relaxed">{f.note}</p>}
          </div>
        ))}
      </div>

      <ProvenanceLine provenance={SEZ_FACTS.map((f) => ({ source: f.source, granularity: f.granularity }))} />
    </div>
  );
}
