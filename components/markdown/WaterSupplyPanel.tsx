import { WATER_SUPPLY_ITEMS } from "../../data/water-supply";
import { TierBadge } from "./TierBadge";
import { ProvenanceLine } from "./ProvenanceLine";

/** The dam, the pipeline and the utility (§3.2). Server component, no chart. */
export function WaterSupplyPanel() {
  return (
    <div className="bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6 print-avoid-break">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-1.5 h-6 bg-accent rounded-full shrink-0" />
        <h4 className="font-serif text-sm font-bold text-ink">The Dam, the Pipeline and the Utility</h4>
      </div>
      <p className="t-small text-muted mb-4 leading-relaxed pl-4">
        New supply arrives in the next term whoever governs. Whether it reaches the estates depends on the utility that
        distributes it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {WATER_SUPPLY_ITEMS.map((item, i) => (
          <div key={i} className="rounded-xl border border-line/60 bg-paper p-3">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="t-micro font-bold text-muted">{item.label}</span>
              <TierBadge tier={item.provenance.source.tier} compact />
            </div>
            <div className="font-serif text-sm font-black text-ink">{item.value.toLocaleString()} {item.unit}</div>
            {item.provenance.note && <div className="t-label text-muted italic mt-1 leading-relaxed">{item.provenance.note}</div>}
          </div>
        ))}
      </div>

      <ProvenanceLine provenance={WATER_SUPPLY_ITEMS.map((i) => i.provenance)} />
    </div>
  );
}
