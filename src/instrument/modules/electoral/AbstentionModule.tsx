/**
 * Abstention Structure — 10×10 waffle.
 * VERIFIED baseline from IEBC 2022.
 */

import React, { useMemo, useState } from 'react';
import { ModuleShell } from '../../components/ModuleShell';
import { mombasaElectorate } from '../../data/electoral';
import type { Provenance } from '../../design/tokens';

const provenance: Provenance = {
  source: mombasaElectorate.source,
  vintage: mombasaElectorate.vintage,
  status: 'VERIFIED',
  notes: 'Abstention = 100 − turnout. Mobilisation target is adjustable scenario.',
};

export function AbstentionModule({ briefingMode = false }: { briefingMode?: boolean }) {
  const [targetTurnout, setTargetTurnout] = useState(55);
  const baselineTurnout = mombasaElectorate.turnout2022Pct;
  const abstentionPct = 100 - baselineTurnout;
  const gapToClose = Math.max(0, targetTurnout - baselineTurnout);

  const tiles = useMemo(() => {
    // 100 tiles: filled = voted 2022, empty = abstained; highlight = gap to close
    const voted = Math.round(baselineTurnout);
    const gap = Math.round(gapToClose);
    return Array.from({ length: 100 }, (_, i) => {
      if (i < voted) return 'voted';
      if (i < voted + gap) return 'gap';
      return 'abstained';
    });
  }, [baselineTurnout, gapToClose]);

  const additionalVotes = Math.round(
    (mombasaElectorate.registeredVoters2022 * gapToClose) / 100
  );

  const decision =
    gapToClose > 0
      ? `Mobilise to close a ${gapToClose.toFixed(1)} pt turnout gap — approximately ${additionalVotes.toLocaleString()} additional ballots.`
      : `Target turnout is at or below 2022 baseline; no incremental mobilisation required under this scenario.`;

  const insight = `2022 abstention ${abstentionPct.toFixed(1)}% (${(
    mombasaElectorate.registeredVoters2022 - mombasaElectorate.votesCast2022
  ).toLocaleString()} registered non-voters). Target ${targetTurnout}% requires lifting ${gapToClose.toFixed(1)} pts.`;

  const sensitivity = `Sensitivity: setting target turnout ≤ ${baselineTurnout}% removes the mobilisation imperative; any target above baseline generates a positive additional-ballot figure.`;

  const controls = (
    <div>
      <div className="flex justify-between text-[12px] mb-1">
        <label htmlFor="tt">Target turnout %</label>
        <span className="font-data tabular-nums font-semibold">{targetTurnout}%</span>
      </div>
      <input
        id="tt"
        type="range"
        min={30}
        max={70}
        step={1}
        value={targetTurnout}
        onChange={(e) => setTargetTurnout(Number(e.target.value))}
        className="w-full h-1.5 accent-[var(--cat-1)]"
      />
    </div>
  );

  const calculation = (
    <div className="space-y-1 font-data text-[13px]">
      <p>Abstention% = 100 − 2022 turnout ({baselineTurnout}%).</p>
      <p>Gap = max(0, Target − 2022 turnout). Additional ballots ≈ Registered × Gap / 100.</p>
    </div>
  );

  const colour = (t: string) =>
    t === 'voted'
      ? 'bg-[var(--cat-1)]'
      : t === 'gap'
        ? 'bg-[var(--accent-signal)]'
        : 'bg-[var(--surface-muted)] border border-[var(--border-subtle)]';

  return (
    <ModuleShell
      question="How large is the abstention pool and what mobilisation gap must be closed?"
      modelName="Abstention Structure"
      visual={
        <div>
          <div
            className="grid grid-cols-10 gap-1 max-w-xs"
            role="img"
            aria-label={`Waffle: ${Math.round(baselineTurnout)} voted, ${Math.round(gapToClose)} gap, rest abstained`}
          >
            {tiles.map((t, i) => (
              <div key={i} className={`aspect-square ${colour(t)}`} title={t} />
            ))}
          </div>
          <div className="flex gap-4 mt-3 text-[11px] text-[var(--text-secondary)]">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-[var(--cat-1)] inline-block" /> Voted 2022
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-[var(--accent-signal)] inline-block" /> Gap to close
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-[var(--surface-muted)] border border-[var(--border-subtle)] inline-block" /> Still abstaining
            </span>
          </div>
        </div>
      }
      controls={controls}
      calculation={calculation}
      sensitivity={<p>{sensitivity}</p>}
      modelLabel="Part-to-whole abstention waffle"
      insight={insight}
      decision={decision}
      provenance={provenance}
      briefingMode={briefingMode}
    />
  );
}
