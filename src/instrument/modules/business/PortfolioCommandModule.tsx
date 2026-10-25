/**
 * Portfolio Command — BCG Growth-Share + risk overlay.
 * PROVISIONAL: replace PLACEHOLDER_PORTFOLIO in schemas.ts
 */

import React, { useMemo, useState } from 'react';
import { ModuleShell } from '../../components/ModuleShell';
import { ScatterPlot, type ScatterPoint } from '../../components/charts/ScatterPlot';
import { PLACEHOLDER_PORTFOLIO, type PortfolioPosition } from '../../data/business/schemas';
import type { Provenance } from '../../design/tokens';

const provenance: Provenance = {
  source: 'Placeholder schema — replace at src/data/business/schemas.ts (PLACEHOLDER_PORTFOLIO)',
  vintage: 'PROVISIONAL',
  status: 'PROVISIONAL',
  notes: 'Drop real holdings: name, relativeShare, growthPct, capital, riskScore.',
};

export function PortfolioCommandModule({ briefingMode = false }: { briefingMode?: boolean }) {
  const [growthCut, setGrowthCut] = useState(10);
  const [shareCut, setShareCut] = useState(1.0);
  const [riskTol, setRiskTol] = useState(50);

  const positions = PLACEHOLDER_PORTFOLIO;

  const classified = useMemo(() => {
    return positions.map((p) => {
      const highGrowth = p.growthPct >= growthCut;
      const highShare = p.relativeShare >= shareCut;
      let quadrant: 'Star' | 'Question' | 'Cash Cow' | 'Dog';
      if (highGrowth && highShare) quadrant = 'Star';
      else if (highGrowth && !highShare) quadrant = 'Question';
      else if (!highGrowth && highShare) quadrant = 'Cash Cow';
      else quadrant = 'Dog';
      const action =
        quadrant === 'Star' || (quadrant === 'Cash Cow' && p.riskScore <= riskTol)
          ? 'Concentrate'
          : quadrant === 'Question' && p.riskScore <= riskTol
            ? 'Hold'
            : 'Exit';
      return { ...p, quadrant, action };
    });
  }, [positions, growthCut, shareCut, riskTol]);

  const points: ScatterPoint[] = classified.map((p) => ({
    id: p.id,
    x: p.relativeShare,
    y: p.growthPct,
    r: 6 + Math.sqrt(p.capital),
    label: p.name,
    tone: p.action === 'Concentrate' ? 'positive' : p.action === 'Exit' ? 'accent' : 'base',
  }));

  const concentrate = classified.filter((c) => c.action === 'Concentrate').map((c) => c.name);
  const exit = classified.filter((c) => c.action === 'Exit').map((c) => c.name);

  const decision =
    exit.length > 0
      ? `Exit ${exit.join(', ')}; concentrate capital on ${concentrate.length ? concentrate.join(', ') : 'remaining high-share positions'}.`
      : `Hold current book; no forced exits at these thresholds. Concentrate on ${concentrate.join(', ') || 'stars and cash cows'}.`;

  const insight = `${classified.filter((c) => c.quadrant === 'Star').length} star(s), ${classified.filter((c) => c.quadrant === 'Dog').length} dog(s) at growth≥${growthCut}% and share≥${shareCut}.`;

  const sensitivity = `Sensitivity: raising the growth cut above ${Math.max(...positions.map((p) => p.growthPct))}% or share cut above ${Math.max(...positions.map((p) => p.relativeShare)).toFixed(1)} moves all positions out of Star; lowering risk tolerance below the lowest risk score forces additional exits.`;

  const controls = (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="growth-cut">Growth cut %</label>
          <span className="font-data tabular-nums font-semibold">{growthCut}%</span>
        </div>
        <input
          id="growth-cut"
          type="range"
          min={0}
          max={25}
          step={1}
          value={growthCut}
          onChange={(e) => setGrowthCut(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="share-cut">Share cut</label>
          <span className="font-data tabular-nums font-semibold">{shareCut.toFixed(1)}</span>
        </div>
        <input
          id="share-cut"
          type="range"
          min={0.3}
          max={1.8}
          step={0.1}
          value={shareCut}
          onChange={(e) => setShareCut(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="risk-tol">Risk tolerance</label>
          <span className="font-data tabular-nums font-semibold">{riskTol}</span>
        </div>
        <input
          id="risk-tol"
          type="range"
          min={10}
          max={90}
          step={5}
          value={riskTol}
          onChange={(e) => setRiskTol(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
    </div>
  );

  const calculation = (
    <div className="space-y-1 font-data text-[13px]">
      <p>Quadrant rules: Star = growth≥{growthCut}% AND share≥{shareCut}; Cash Cow = growth&lt;cut AND share≥cut; Question = growth≥cut AND share&lt;cut; Dog = otherwise.</p>
      <p>Action: Concentrate on Stars and low-risk Cash Cows (risk≤{riskTol}); Hold Questions with risk≤tolerance; Exit remainder.</p>
      <p className="text-[var(--text-tertiary)]">All positions are placeholder. Replace PLACEHOLDER_PORTFOLIO to drive real decisions.</p>
    </div>
  );

  return (
    <ModuleShell
      question="Where should capital be concentrated, held, or exited across the current book?"
      modelName="Portfolio Command · BCG Growth-Share"
      visual={
        <ScatterPlot
          points={points}
          xLabel="Relative market share"
          yLabel="Market growth %"
          xDomain={[0, 2]}
          yDomain={[0, 25]}
          xMid={shareCut}
          yMid={growthCut}
          summary="BCG growth-share positions with size by capital"
        />
      }
      controls={controls}
      calculation={calculation}
      sensitivity={<p>{sensitivity}</p>}
      modelLabel="BCG Growth-Share + risk filter"
      insight={insight}
      decision={decision}
      provenance={provenance}
      briefingMode={briefingMode}
    />
  );
}
