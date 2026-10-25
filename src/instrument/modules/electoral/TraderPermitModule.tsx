/**
 * Trader Permit Economics — single-permit savings calculator.
 * Upgraded from legacy component; now contract-compliant.
 */

import React, { useMemo, useState } from 'react';
import { ModuleShell } from '../../components/ModuleShell';
import type { Provenance } from '../../design/tokens';

const provenance: Provenance = {
  source: 'Policy scenario model — daily fee assumptions adjustable; not an official county schedule',
  vintage: 'PROVISIONAL (fee schedule)',
  status: 'PROVISIONAL',
  notes: 'Replace daily fee inputs with verified county tariff schedule when available.',
};

export function TraderPermitModule({ briefingMode = false }: { briefingMode?: boolean }) {
  const [dailyFees, setDailyFees] = useState(80); // KES overlapping daily
  const [tradingDays, setTradingDays] = useState(280);
  const [unifiedAnnual, setUnifiedAnnual] = useState(8000);

  const currentAnnual = dailyFees * tradingDays;
  const savings = currentAnnual - unifiedAnnual;
  const worthSwitch = savings > 0;

  const decision = worthSwitch
    ? `Adopt the unified digital permit; modelled annual saving is KES ${savings.toLocaleString()} per trader.`
    : `Unified permit is not cheaper under these fee assumptions; revisit tariff design.`;

  const insight = `Current stack KES ${currentAnnual.toLocaleString()} / yr vs unified KES ${unifiedAnnual.toLocaleString()}.`;

  const sensitivity = `Sensitivity: recommendation flips when unified annual fee rises above KES ${currentAnnual.toLocaleString()} (current stack), or when daily fees / days fall so that stack ≤ unified.`;

  const controls = (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="df">Daily overlapping fees (KES)</label>
          <span className="font-data tabular-nums font-semibold">{dailyFees}</span>
        </div>
        <input
          id="df"
          type="range"
          min={20}
          max={150}
          step={5}
          value={dailyFees}
          onChange={(e) => setDailyFees(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="td">Trading days / yr</label>
          <span className="font-data tabular-nums font-semibold">{tradingDays}</span>
        </div>
        <input
          id="td"
          type="range"
          min={150}
          max={320}
          step={5}
          value={tradingDays}
          onChange={(e) => setTradingDays(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="ua">Unified annual (KES)</label>
          <span className="font-data tabular-nums font-semibold">{unifiedAnnual}</span>
        </div>
        <input
          id="ua"
          type="range"
          min={2000}
          max={20000}
          step={500}
          value={unifiedAnnual}
          onChange={(e) => setUnifiedAnnual(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)]"
        />
      </div>
    </div>
  );

  const calculation = (
    <div className="space-y-1 font-data text-[13px]">
      <p>Current annual = Daily fees × Trading days.</p>
      <p>Savings = Current annual − Unified annual. Switch if Savings &gt; 0.</p>
      <p className="text-[var(--text-tertiary)]">Fee levels are scenario inputs, not gazetted tariffs. Marked PROVISIONAL.</p>
    </div>
  );

  return (
    <ModuleShell
      question="Does a single digital permit save traders money relative to the current overlapping daily stack?"
      modelName="Trader Permit Economics"
      visual={
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-[var(--border-subtle)] p-4">
            <p className="text-[10px] uppercase text-[var(--text-tertiary)]">Current stack</p>
            <p className="font-data tabular-nums text-2xl font-semibold">
              {currentAnnual.toLocaleString()}
            </p>
            <p className="text-[11px] text-[var(--text-secondary)]">KES / year</p>
          </div>
          <div className="border border-[var(--border-subtle)] p-4">
            <p className="text-[10px] uppercase text-[var(--text-tertiary)]">Unified permit</p>
            <p className="font-data tabular-nums text-2xl font-semibold">
              {unifiedAnnual.toLocaleString()}
            </p>
            <p className="text-[11px] text-[var(--text-secondary)]">KES / year</p>
          </div>
          <div className="col-span-2 border border-[var(--border-subtle)] p-4 bg-[var(--surface-muted)]">
            <p className="text-[10px] uppercase text-[var(--text-tertiary)]">Modelled saving</p>
            <p
              className={`font-data tabular-nums text-2xl font-semibold ${
                worthSwitch ? 'text-[var(--semantic-positive)]' : 'text-[var(--accent-signal)]'
              }`}
            >
              {savings >= 0 ? '+' : ''}
              {savings.toLocaleString()} KES
            </p>
          </div>
        </div>
      }
      controls={controls}
      calculation={calculation}
      sensitivity={<p>{sensitivity}</p>}
      modelLabel="Overlapping fees vs unified annual"
      insight={insight}
      decision={decision}
      provenance={provenance}
      briefingMode={briefingMode}
    />
  );
}
