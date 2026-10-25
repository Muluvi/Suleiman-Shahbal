/**
 * Project Finance Lab — NPV / IRR with discount-rate sensitivity.
 * PROVISIONAL. No Monte-Carlo until real CF series exist.
 */

import React, { useMemo, useState } from 'react';
import { ModuleShell } from '../../components/ModuleShell';
import { PLACEHOLDER_PROJECT_CF } from '../../data/business/schemas';
import type { Provenance } from '../../design/tokens';

const provenance: Provenance = {
  source: 'Placeholder — replace PLACEHOLDER_PROJECT_CF in src/data/business/schemas.ts',
  vintage: 'PROVISIONAL',
  status: 'PROVISIONAL',
};

function npv(rate: number, cfs: { year: number; netCashFlow: number }[]): number {
  return cfs.reduce((acc, c) => acc + c.netCashFlow / Math.pow(1 + rate, c.year), 0);
}

export function ProjectFinanceModule({ briefingMode = false }: { briefingMode?: boolean }) {
  const [discountPct, setDiscountPct] = useState(12);
  const [overrunPct, setOverrunPct] = useState(0);

  const cfs = useMemo(() => {
    return PLACEHOLDER_PROJECT_CF.map((c) =>
      c.year === 0
        ? { ...c, netCashFlow: Math.round(c.netCashFlow * (1 + overrunPct / 100)) }
        : c
    );
  }, [overrunPct]);

  const rate = discountPct / 100;
  const value = useMemo(() => npv(rate, cfs), [rate, cfs]);
  const proceeds = value >= 0;

  // Approximate IRR by simple search
  const irrApprox = useMemo(() => {
    let lo = -0.5,
      hi = 1;
    for (let i = 0; i < 40; i++) {
      const mid = (lo + hi) / 2;
      if (npv(mid, cfs) > 0) lo = mid;
      else hi = mid;
    }
    return ((lo + hi) / 2) * 100;
  }, [cfs]);

  const decision = proceeds
    ? `Proceed at ${discountPct}% discount; NPV is positive (${value.toFixed(1)}).`
    : `Reject or restructure terms; NPV is negative (${value.toFixed(1)}) at ${discountPct}% discount.`;

  const insight = `NPV ${value.toFixed(1)} · approx IRR ${irrApprox.toFixed(1)}% · construction overrun ${overrunPct}%.`;

  const sensitivity = `Sensitivity: NPV crosses zero near ${irrApprox.toFixed(1)}% discount (approx IRR). Raising discount above that rate, or increasing overrun, flips the recommendation to Reject.`;

  const controls = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="disc">Discount rate %</label>
          <span className="font-data tabular-nums font-semibold">{discountPct}%</span>
        </div>
        <input
          id="disc"
          type="range"
          min={5}
          max={25}
          step={0.5}
          value={discountPct}
          onChange={(e) => setDiscountPct(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="over">Construction overrun %</label>
          <span className="font-data tabular-nums font-semibold">{overrunPct}%</span>
        </div>
        <input
          id="over"
          type="range"
          min={0}
          max={40}
          step={5}
          value={overrunPct}
          onChange={(e) => setOverrunPct(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
    </div>
  );

  const calculation = (
    <div className="space-y-1 font-data text-[13px]">
      <p>NPV = Σ CFₜ / (1+r)ᵗ. Year-0 CF scaled by (1 + overrun%).</p>
      <p>Decision: Proceed if NPV ≥ 0 at chosen discount rate; else Reject / restructure.</p>
      <p className="text-[var(--text-tertiary)]">Cash flows are placeholder. Replace PLACEHOLDER_PROJECT_CF. Monte-Carlo deferred until real series exist.</p>
    </div>
  );

  return (
    <ModuleShell
      question="Does the project clear the required return after construction risk?"
      modelName="Project Finance Lab"
      visual={
        <div className="space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="border border-[var(--border-subtle)] p-3">
              <p className="text-[10px] uppercase text-[var(--text-tertiary)]">NPV</p>
              <p className={`font-data tabular-nums text-xl font-semibold ${proceeds ? 'text-[var(--semantic-positive)]' : 'text-[var(--accent-signal)]'}`}>
                {value.toFixed(1)}
              </p>
            </div>
            <div className="border border-[var(--border-subtle)] p-3">
              <p className="text-[10px] uppercase text-[var(--text-tertiary)]">Approx IRR</p>
              <p className="font-data tabular-nums text-xl font-semibold">{irrApprox.toFixed(1)}%</p>
            </div>
            <div className="border border-[var(--border-subtle)] p-3">
              <p className="text-[10px] uppercase text-[var(--text-tertiary)]">Discount</p>
              <p className="font-data tabular-nums text-xl font-semibold">{discountPct}%</p>
            </div>
          </div>
          <div className="text-[12px] text-[var(--text-secondary)]">
            CF path (placeholder): {cfs.map((c) => c.netCashFlow).join(' · ')}
          </div>
        </div>
      }
      controls={controls}
      calculation={calculation}
      sensitivity={<p>{sensitivity}</p>}
      modelLabel="NPV / IRR with discount sensitivity"
      insight={insight}
      decision={decision}
      provenance={provenance}
      briefingMode={briefingMode}
    />
  );
}
