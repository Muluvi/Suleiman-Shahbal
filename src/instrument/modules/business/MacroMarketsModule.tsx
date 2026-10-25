/**
 * Macro & Markets Console — scenario cones + tornado.
 * PROVISIONAL.
 */

import React, { useMemo, useState } from 'react';
import { ModuleShell } from '../../components/ModuleShell';
import { TornadoBar } from '../../components/charts/TornadoBar';
import {
  PLACEHOLDER_MACRO_SCENARIOS,
  PLACEHOLDER_MACRO_DRIVERS,
} from '../../data/business/schemas';
import type { Provenance } from '../../design/tokens';

const provenance: Provenance = {
  source: 'Placeholder — replace PLACEHOLDER_MACRO_* in src/data/business/schemas.ts',
  vintage: 'PROVISIONAL',
  status: 'PROVISIONAL',
};

export function MacroMarketsModule({ briefingMode = false }: { briefingMode?: boolean }) {
  const [shockSize, setShockSize] = useState(1.0);
  const [hedgeCost, setHedgeCost] = useState(2);

  const drivers = useMemo(
    () =>
      PLACEHOLDER_MACRO_DRIVERS.map((d) => ({
        id: d.id,
        label: d.name,
        value: Math.round(d.impact * shockSize),
      })),
    [shockSize]
  );

  const worstImpact = Math.min(...drivers.map((d) => d.value));
  const shouldHedge = Math.abs(worstImpact) > hedgeCost * 3;

  const decision = shouldHedge
    ? `Hedge the dominant exposure; modelled downside (${worstImpact}) exceeds three times hedge cost (${hedgeCost}).`
    : `Wait; current shock size does not justify hedge cost of ${hedgeCost}. Revisit if drivers move.`;

  const insight = `Largest driver impact at ${shockSize}σ: ${drivers[0]?.label ?? '—'} (${drivers[0]?.value ?? 0}).`;

  const sensitivity = `Sensitivity: recommendation flips to Hedge when the largest absolute driver impact exceeds ${hedgeCost * 3} (3× hedge cost). Increase shock size or lower hedge cost to cross the threshold.`;

  const controls = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="shock">Shock size (σ)</label>
          <span className="font-data tabular-nums font-semibold">{shockSize.toFixed(1)}</span>
        </div>
        <input
          id="shock"
          type="range"
          min={0.5}
          max={2.5}
          step={0.1}
          value={shockSize}
          onChange={(e) => setShockSize(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="hedge">Hedge cost (pts)</label>
          <span className="font-data tabular-nums font-semibold">{hedgeCost}</span>
        </div>
        <input
          id="hedge"
          type="range"
          min={1}
          max={8}
          step={0.5}
          value={hedgeCost}
          onChange={(e) => setHedgeCost(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
    </div>
  );

  const calculation = (
    <div className="space-y-1 font-data text-[13px]">
      <p>Rule: Hedge if max |driver impact| &gt; 3 × hedge cost.</p>
      <p>Driver impacts scaled linearly by shock size (σ). Paths shown are illustrative cones only.</p>
      <p className="text-[var(--text-tertiary)]">Replace PLACEHOLDER_MACRO_DRIVERS and SCENARIOS with verified series.</p>
    </div>
  );

  // Simple path display
  const paths = PLACEHOLDER_MACRO_SCENARIOS;

  return (
    <ModuleShell
      question="Should the dominant macro exposure be hedged, waited out, or repositioned?"
      modelName="Macro & Markets Console"
      visual={
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 text-[11px]">
            {paths.map((s) => (
              <div key={s.id} className="border border-[var(--border-subtle)] p-2">
                <p className="font-medium text-[var(--text-secondary)] mb-1">{s.label}</p>
                <p className="font-data tabular-nums text-[var(--text-primary)]">
                  {s.path[0]} → {s.path[s.path.length - 1]}
                </p>
              </div>
            ))}
          </div>
          <TornadoBar items={drivers} summary="Driver impact tornado" />
        </div>
      }
      controls={controls}
      calculation={calculation}
      sensitivity={<p>{sensitivity}</p>}
      modelLabel="Scenario cones + sensitivity tornado"
      insight={insight}
      decision={decision}
      provenance={provenance}
      briefingMode={briefingMode}
    />
  );
}
