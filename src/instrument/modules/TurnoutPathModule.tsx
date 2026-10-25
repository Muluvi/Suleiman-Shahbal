/**
 * Exemplar module — Turnout Path
 * Named model: Turnout Path (Registered × Turnout × Share)
 * Proves the ModuleShell contract with live parameters that can flip DECISION.
 */

import React, { useMemo, useState } from 'react';
import { ModuleShell } from '../components/ModuleShell';
import { WaterfallSteps, type WaterfallStep } from '../components/charts/WaterfallSteps';
import {
  mombasaElectorate,
  computeTurnoutPath,
} from '../data/electoral';
import type { Provenance } from '../design/tokens';

const provenance: Provenance = {
  source: mombasaElectorate.source,
  vintage: mombasaElectorate.vintage,
  status: 'VERIFIED',
  notes: 'Baseline registered and 2022 winner votes from IEBC. Turnout and share are adjustable scenario parameters.',
};

/** Threshold: decision flips when projected winning votes fall below 2022 winner + 15k buffer */
const VICTORY_BUFFER = 15_000;
const VICTORY_THRESHOLD = mombasaElectorate.winner2022Votes + VICTORY_BUFFER;

export interface TurnoutPathModuleProps {
  briefingMode?: boolean;
}

export function TurnoutPathModule({ briefingMode = false }: TurnoutPathModuleProps) {
  const [turnoutPct, setTurnoutPct] = useState(55);
  const [sharePct, setSharePct] = useState(52);

  const result = useMemo(
    () =>
      computeTurnoutPath(
        mombasaElectorate.registeredVoters2022,
        turnoutPct,
        sharePct
      ),
    [turnoutPct, sharePct]
  );

  const clearsThreshold = result.winningVotes >= VICTORY_THRESHOLD;

  const steps: WaterfallStep[] = useMemo(
    () => [
      {
        id: 'registered',
        label: '1. Gazetted electorate (IEBC 2022)',
        value: mombasaElectorate.registeredVoters2022,
        widthPct: 100,
        tone: 'muted',
      },
      {
        id: 'cast',
        label: `2. Projected votes cast at ${turnoutPct}% turnout`,
        value: result.votesCast,
        widthPct: turnoutPct,
        tone: 'base',
        sublabel: `(${turnoutPct}%)`,
      },
      {
        id: 'win',
        label: `3. Winning ballots at ${sharePct}% share`,
        value: result.winningVotes,
        widthPct: (turnoutPct * sharePct) / 100,
        tone: clearsThreshold ? 'positive' : 'accent',
        sublabel: clearsThreshold ? 'clears threshold' : 'below threshold',
      },
    ],
    [turnoutPct, sharePct, result, clearsThreshold]
  );

  const decision = clearsThreshold
    ? `Concentrate mobilisation on the ${turnoutPct}% turnout path; the modelled margin clears the 2022 winner plus buffer.`
    : `Raise turnout above ${Math.ceil(
        (VICTORY_THRESHOLD / (mombasaElectorate.registeredVoters2022 * (sharePct / 100))) * 100
      )}% or increase share; current path falls short of the victory threshold.`;

  const insight = clearsThreshold
    ? `At ${turnoutPct}% turnout and ${sharePct}% share the path yields ${result.winningVotes.toLocaleString()} votes — ${result.surplusVs2022Winner.toLocaleString()} above the 2022 winning total.`
    : `Current parameters produce ${result.winningVotes.toLocaleString()} votes, ${Math.abs(result.surplusVs2022Winner).toLocaleString()} ${result.surplusVs2022Winner >= 0 ? 'above' : 'below'} the 2022 winner and short of the ${VICTORY_THRESHOLD.toLocaleString()} decision threshold.`;

  const sensitivityText = (() => {
    // Find approximate turnout at which decision flips, holding share fixed
    const minTurnoutForThreshold =
      (VICTORY_THRESHOLD / (mombasaElectorate.registeredVoters2022 * (sharePct / 100))) * 100;
    const flipPoint = Math.ceil(minTurnoutForThreshold * 10) / 10;
    if (clearsThreshold) {
      return `Sensitivity: holding share at ${sharePct}%, the recommendation flips to “shortfall” if turnout falls below ~${flipPoint}%.`;
    }
    return `Sensitivity: holding share at ${sharePct}%, the recommendation flips to “clear threshold” if turnout reaches ~${flipPoint}%.`;
  })();

  const controls = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="turnout-slider" className="font-medium text-[var(--text-secondary)]">
            Turnout rate
          </label>
          <span className="font-data tabular-nums font-semibold text-[var(--text-primary)]">
            {turnoutPct}%
          </span>
        </div>
        <input
          id="turnout-slider"
          type="range"
          min={34}
          max={70}
          step={1}
          value={turnoutPct}
          onChange={(e) => setTurnoutPct(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)] cursor-pointer"
          aria-valuemin={34}
          aria-valuemax={70}
          aria-valuenow={turnoutPct}
          aria-label="Turnout rate percentage"
        />
        <div className="flex justify-between text-[10px] text-[var(--text-tertiary)] mt-0.5">
          <span>2022 baseline 34%</span>
          <span>70%</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-[12px] mb-1">
          <label htmlFor="share-slider" className="font-medium text-[var(--text-secondary)]">
            Target winning share
          </label>
          <span className="font-data tabular-nums font-semibold text-[var(--text-primary)]">
            {sharePct}%
          </span>
        </div>
        <input
          id="share-slider"
          type="range"
          min={45}
          max={60}
          step={1}
          value={sharePct}
          onChange={(e) => setSharePct(Number(e.target.value))}
          className="w-full h-1.5 accent-[var(--cat-1)] cursor-pointer"
          aria-valuemin={45}
          aria-valuemax={60}
          aria-valuenow={sharePct}
          aria-label="Target winning vote share percentage"
        />
        <div className="flex justify-between text-[10px] text-[var(--text-tertiary)] mt-0.5">
          <span>Plurality 45%</span>
          <span>60%</span>
        </div>
      </div>
    </div>
  );

  const calculation = (
    <div className="space-y-2 font-data text-[13px]">
      <p>
        <span className="text-[var(--text-tertiary)]">Formula:</span>{' '}
        <code className="text-[var(--text-primary)]">
          WinningVotes = Registered × (Turnout% / 100) × (Share% / 100)
        </code>
      </p>
      <p>
        Registered = {mombasaElectorate.registeredVoters2022.toLocaleString()} (IEBC 2022, fixed)
      </p>
      <p>
        Turnout = {turnoutPct}% → VotesCast = {result.votesCast.toLocaleString()}
      </p>
      <p>
        Share = {sharePct}% → WinningVotes = {result.winningVotes.toLocaleString()}
      </p>
      <p>
        Decision threshold = 2022 winner ({mombasaElectorate.winner2022Votes.toLocaleString()}) +{' '}
        {VICTORY_BUFFER.toLocaleString()} buffer = {VICTORY_THRESHOLD.toLocaleString()}
      </p>
      <p className="text-[var(--text-tertiary)] pt-1">
        Assumption: buffer of 15,000 votes is an adjustable policy parameter, not a hard IEBC figure.
        Change the buffer in code or future control to test robustness.
      </p>
    </div>
  );

  return (
    <ModuleShell
      question="What turnout and share combination clears a defensible victory threshold against the 2022 baseline?"
      modelName="Turnout Path"
      visual={
        <WaterfallSteps
          steps={steps}
          summary={`Waterfall from ${mombasaElectorate.registeredVoters2022.toLocaleString()} registered to ${result.winningVotes.toLocaleString()} projected winning votes at ${turnoutPct}% turnout and ${sharePct}% share.`}
        />
      }
      controls={controls}
      calculation={calculation}
      sensitivity={<p>{sensitivityText}</p>}
      modelLabel="Turnout Path (Registered × Turnout × Share)"
      insight={insight}
      decision={decision}
      provenance={provenance}
      briefingMode={briefingMode}
      ariaSummary="Interactive turnout path model for Mombasa 2027 using IEBC 2022 registered electorate"
    />
  );
}
