/**
 * Real Assets — yield vs cap-rate spread.
 * PROVISIONAL.
 */

import React, { useMemo, useState } from 'react';
import { ModuleShell } from '../../components/ModuleShell';
import { ScatterPlot } from '../../components/charts/ScatterPlot';
import { PLACEHOLDER_REAL_ASSETS } from '../../data/business/schemas';
import type { Provenance } from '../../design/tokens';

const provenance: Provenance = {
  source: 'Placeholder — replace PLACEHOLDER_REAL_ASSETS in src/data/business/schemas.ts',
  vintage: 'PROVISIONAL',
  status: 'PROVISIONAL',
};

export function RealAssetsModule({ briefingMode = false }: { briefingMode?: boolean }) {
  const [minSpread, setMinSpread] = useState(0.5);
  const [exitCapAdj, setExitCapAdj] = useState(0);

  const evaluated = useMemo(() => {
    return PLACEHOLDER_REAL_ASSETS.map((a) => {
      const adjCap = a.capRatePct + exitCapAdj;
      const spread = a.yieldPct - adjCap;
      const action = spread >= minSpread ? 'Acquire' : spread >= 0 ? 'Hold' : 'Divest';
      return { ...a, adjCap, spread, action };
    });
  }, [minSpread, exitCapAdj]);

  const acquire = evaluated.filter((e) => e.action === 'Acquire').map((e) => e.name);
  const divest = evaluated.filter((e) => e.action === 'Divest').map((e) => e.name);

  const decision =
    divest.length > 0
      ? `Divest ${divest.join(', ')}; acquire only where spread ≥ ${minSpread} pts (${acquire.join(', ') || 'none'}).`
      : acquire.length > 0
        ? `Acquire ${acquire.join(', ')}; hold the remainder.`
        : `Hold the book; no position clears the ${minSpread} pt spread hurdle after cap-rate adjustment.`;

  const insight = `Positions above spread hurdle: ${acquire.length}. Average spread: ${(evaluated.reduce((s, e) => s + e.spread, 0) / evaluated.length).toFixed(2)} pts.`;

  const sensitivity = `Sensitivity: raising the minimum spread above the highest current spread forces all to Hold/Divest; a +1 pt exit cap-rate shift reduces every spread by 1 pt and can flip Acquire → Hold.`;

  const points = evaluated.map((e) => ({
    id: e.id,
    x: e.adjCap,
    y: e.yieldPct,
    r: 6 + Math.sqrt(e.value) / 2,
    label: e.name,
    tone: (e.action === 'Acquire' ? 'positive' : e.action === 'Divest' ? 'accent' : 'base') as 'positive' | 'accent' | 'base',
  }));

  const controls = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="spread">Min spread (pts)</label>
          <span className="font-data tabular-nums font-semibold">{minSpread.toFixed(1)}</span>
        </div>
        <input
          id="spread"
          type="range"
          min={-1}
          max={3}
          step={0.1}
          value={minSpread}
          onChange={(e) => setMinSpread(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="capadj">Exit cap-rate adj (pts)</label>
          <span className="font-data tabular-nums font-semibold">{exitCapAdj > 0 ? '+' : ''}{exitCapAdj.toFixed(1)}</span>
        </div>
        <input
          id="capadj"
          type="range"
          min={-1.5}
          max={1.5}
          step={0.1}
          value={exitCapAdj}
          onChange={(e) => setExitCapAdj(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
    </div>
  );

  const calculation = (
    <div className="space-y-1 font-data text-[13px]">
      <p>Spread = Yield − (Cap rate + exit adjustment). Acquire if spread ≥ min hurdle; Hold if spread ≥ 0; else Divest.</p>
      <p className="text-[var(--text-tertiary)]">Replace PLACEHOLDER_REAL_ASSETS with verified yield, cap-rate and NOI series.</p>
    </div>
  );

  return (
    <ModuleShell
      question="Acquire, hold, or divest real-asset positions given yield and exit cap rates?"
      modelName="Real Assets"
      visual={
        <ScatterPlot
          points={points}
          xLabel="Exit cap rate %"
          yLabel="Yield %"
          xDomain={[4, 10]}
          yDomain={[4, 10]}
          summary="Yield vs adjusted cap rate"
        />
      }
      controls={controls}
      calculation={calculation}
      sensitivity={<p>{sensitivity}</p>}
      modelLabel="Yield − cap-rate spread"
      insight={insight}
      decision={decision}
      provenance={provenance}
      briefingMode={briefingMode}
    />
  );
}
