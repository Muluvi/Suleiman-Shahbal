/**
 * Trade & Logistics Corridor — cost-per-TEU waterfall.
 * PROVISIONAL.
 */

import React, { useMemo, useState } from 'react';
import { ModuleShell } from '../../components/ModuleShell';
import { WaterfallSteps, type WaterfallStep } from '../../components/charts/WaterfallSteps';
import { PLACEHOLDER_CORRIDOR } from '../../data/business/schemas';
import type { Provenance } from '../../design/tokens';

const provenance: Provenance = {
  source: 'Placeholder — replace PLACEHOLDER_CORRIDOR in src/data/business/schemas.ts',
  vintage: 'PROVISIONAL',
  status: 'PROVISIONAL',
};

export function CorridorModule({ briefingMode = false }: { briefingMode?: boolean }) {
  const [dwellMultiplier, setDwellMultiplier] = useState(1);
  const [haulMultiplier, setHaulMultiplier] = useState(1);

  const steps = useMemo(() => {
    const adjusted = PLACEHOLDER_CORRIDOR.map((s) => {
      let cost = s.costPerTeu;
      if (s.id === 'port') cost = Math.round(cost * dwellMultiplier);
      if (s.id === 'inland') cost = Math.round(cost * haulMultiplier);
      return { ...s, costPerTeu: cost };
    });
    const total = adjusted.reduce((a, s) => a + s.costPerTeu, 0);
    return adjusted.map((s) => ({
      id: s.id,
      label: s.label,
      value: s.costPerTeu,
      widthPct: total ? (s.costPerTeu / total) * 100 : 0,
      tone: 'base' as const,
      sublabel: 'USD/TEU',
    }));
  }, [dwellMultiplier, haulMultiplier]);

  const ranked = [...steps].sort((a, b) => b.value - a.value);
  const top = ranked[0];

  const decision = `Prioritise investment where cost is highest under current parameters: ${top?.label ?? '—'}. Re-run after dwell or haul assumptions change.`;

  const insight = `Largest cost node: ${top?.label} at ${top?.value.toLocaleString()} USD/TEU (${Math.round(top?.widthPct ?? 0)}% of stack).`;

  const sensitivity = `Sensitivity: if dwell multiplier rises above ~${(PLACEHOLDER_CORRIDOR.find((s) => s.id === 'inland')!.costPerTeu / PLACEHOLDER_CORRIDOR.find((s) => s.id === 'port')!.costPerTeu).toFixed(2)}, port handling overtakes inland haul as the largest node (or vice versa when haul rises).`;

  const controls = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="dwell">Dwell / port multiplier</label>
          <span className="font-data tabular-nums font-semibold">{dwellMultiplier.toFixed(2)}×</span>
        </div>
        <input
          id="dwell"
          type="range"
          min={0.7}
          max={1.8}
          step={0.05}
          value={dwellMultiplier}
          onChange={(e) => setDwellMultiplier(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="haul">Inland haul multiplier</label>
          <span className="font-data tabular-nums font-semibold">{haulMultiplier.toFixed(2)}×</span>
        </div>
        <input
          id="haul"
          type="range"
          min={0.7}
          max={1.8}
          step={0.05}
          value={haulMultiplier}
          onChange={(e) => setHaulMultiplier(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
    </div>
  );

  const calculation = (
    <div className="space-y-1 font-data text-[13px]">
      <p>Cost stack = Σ segment costs. Port segment scaled by dwell multiplier; inland by haul multiplier.</p>
      <p>Decision rule: invest first at the current largest cost node.</p>
      <p className="text-[var(--text-tertiary)]">Replace PLACEHOLDER_CORRIDOR with measured USD/TEU by segment.</p>
    </div>
  );

  return (
    <ModuleShell
      question="Where in the trade corridor should the next unit of capital be applied?"
      modelName="Trade & Logistics Corridor"
      visual={<WaterfallSteps steps={steps as WaterfallStep[]} summary="Cost per TEU decomposition" />}
      controls={controls}
      calculation={calculation}
      sensitivity={<p>{sensitivity}</p>}
      modelLabel="Cost-per-TEU waterfall"
      insight={insight}
      decision={decision}
      provenance={provenance}
      briefingMode={briefingMode}
    />
  );
}
