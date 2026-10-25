/**
 * Sector Entry Assessment — Five Forces × capability 2×2.
 * PROVISIONAL.
 */

import React, { useMemo, useState } from 'react';
import { ModuleShell } from '../../components/ModuleShell';
import { ScatterPlot } from '../../components/charts/ScatterPlot';
import { PLACEHOLDER_FORCES } from '../../data/business/schemas';
import type { Provenance } from '../../design/tokens';

const provenance: Provenance = {
  source: 'Placeholder — replace PLACEHOLDER_FORCES in src/data/business/schemas.ts',
  vintage: 'PROVISIONAL',
  status: 'PROVISIONAL',
};

export function SectorEntryModule({ briefingMode = false }: { briefingMode?: boolean }) {
  const [capability, setCapability] = useState(3);
  const [forceAdj, setForceAdj] = useState(0);

  const avgForce = useMemo(() => {
    const scores = PLACEHOLDER_FORCES.map((f) => Math.min(5, Math.max(1, f.score + forceAdj)));
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  }, [forceAdj]);

  // x = industry attractiveness (inverted force: 6 - avg), y = capability
  const attractiveness = 6 - avgForce;
  const action =
    attractiveness >= 3 && capability >= 3
      ? 'Enter'
      : attractiveness >= 3 && capability < 3
        ? 'Partner'
        : 'Decline';

  const decision =
    action === 'Enter'
      ? 'Enter the sector; attractiveness and capability both clear the threshold.'
      : action === 'Partner'
        ? 'Partner rather than solo entry; industry is attractive but internal capability is below threshold.'
        : 'Decline entry; industry structure or capability does not support a commitment.';

  const insight = `Avg force intensity ${avgForce.toFixed(1)} → attractiveness ${attractiveness.toFixed(1)}; capability ${capability}.`;

  const sensitivity = `Sensitivity: recommendation flips when capability crosses 3 or average force intensity crosses 3 (attractiveness 3). Adjust force offset or capability to test.`;

  const controls = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="cap">Capability score (1–5)</label>
          <span className="font-data tabular-nums font-semibold">{capability}</span>
        </div>
        <input
          id="cap"
          type="range"
          min={1}
          max={5}
          step={0.5}
          value={capability}
          onChange={(e) => setCapability(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="fadj">Force intensity offset</label>
          <span className="font-data tabular-nums font-semibold">{forceAdj > 0 ? '+' : ''}{forceAdj}</span>
        </div>
        <input
          id="fadj"
          type="range"
          min={-1.5}
          max={1.5}
          step={0.5}
          value={forceAdj}
          onChange={(e) => setForceAdj(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
    </div>
  );

  const calculation = (
    <div className="space-y-1 font-data text-[13px]">
      <p>Attractiveness = 6 − mean(Five Forces scores). Capability is an internal 1–5 score.</p>
      <p>Enter if attractiveness ≥ 3 AND capability ≥ 3; Partner if attractiveness ≥ 3 AND capability &lt; 3; else Decline.</p>
      <p className="text-[var(--text-tertiary)]">Replace PLACEHOLDER_FORCES with scored forces for the target sector.</p>
    </div>
  );

  return (
    <ModuleShell
      question="Enter, partner, or decline this sector?"
      modelName="Sector Entry Assessment"
      visual={
        <ScatterPlot
          points={[
            {
              id: 'pos',
              x: attractiveness,
              y: capability,
              r: 12,
              label: action,
              tone: action === 'Enter' ? 'positive' : action === 'Partner' ? 'base' : 'accent',
            },
          ]}
          xLabel="Industry attractiveness"
          yLabel="Capability"
          xDomain={[0, 5]}
          yDomain={[0, 5]}
          xMid={3}
          yMid={3}
          summary="Five Forces attractiveness vs capability"
        />
      }
      controls={controls}
      calculation={calculation}
      sensitivity={<p>{sensitivity}</p>}
      modelLabel="Porter Five Forces × capability 2×2"
      insight={insight}
      decision={decision}
      provenance={provenance}
      briefingMode={briefingMode}
    />
  );
}
