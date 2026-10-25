import React, { useState } from 'react';
import { Calculator, Table, BarChart2, Info, ArrowRight } from 'lucide-react';

export const ElectoralWaterfall: React.FC = () => {
  const [turnoutRate, setTurnoutRate] = useState<number>(60);
  const [targetShare, setTargetShare] = useState<number>(54);
  const [showTableFallback, setShowTableFallback] = useState<boolean>(false);

  const totalRegistered = 641913; // Official IEBC 2022 gazetted count
  const projectedVotesCast = Math.round((totalRegistered * turnoutRate) / 100);
  const projectedWinningVotes = Math.round((projectedVotesCast * targetShare) / 100);
  const winner2022Votes = 119083; // Abdulswamad Nassir 2022
  const surplusOver2022 = projectedWinningVotes - winner2022Votes;

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
      
      {/* Header and Accessibility Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider block">
            Explanatory Arithmetic · Section 5.8
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
            The Mathematical Formula for Victory (Waterfall Build-Up)
          </h3>
        </div>
        
        <button
          onClick={() => setShowTableFallback(!showTableFallback)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 px-3 py-1.5 rounded-md transition-colors shrink-0"
          aria-expanded={showTableFallback}
        >
          <Table className="w-3.5 h-3.5" />
          <span>{showTableFallback ? 'Show Interactive Graphic' : 'View as Data Table'}</span>
        </button>
      </div>

      {!showTableFallback ? (
        <div className="space-y-6">
          {/* Interactive Calculation Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-neutral-800 mb-1">
                <span>Modelled County Turnout:</span>
                <span className="font-mono text-neutral-950 font-extrabold text-sm">{turnoutRate}%</span>
              </div>
              <input
                type="range"
                min={35}
                max={75}
                step={1}
                value={turnoutRate}
                onChange={(e) => setTurnoutRate(Number(e.target.value))}
                className="w-full accent-neutral-900 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                aria-label="Modelled county turnout percentage"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>2022 Baseline (34.1%)</span>
                <span>Historic High (70%)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold text-neutral-800 mb-1">
                <span>Target Winning Share:</span>
                <span className="font-mono text-neutral-950 font-extrabold text-sm">{targetShare}%</span>
              </div>
              <input
                type="range"
                min={45}
                max={65}
                step={1}
                value={targetShare}
                onChange={(e) => setTargetShare(Number(e.target.value))}
                className="w-full accent-neutral-900 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                aria-label="Target winning vote share percentage"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>Plurality (45%)</span>
                <span>Landslide (65%)</span>
              </div>
            </div>
          </div>

          {/* Waterfall Steps Visual Bar Graphic */}
          <div className="space-y-4">
            {/* Step 1: Total Registered */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-neutral-700">
                <span>1. Gazetted Electorate Base (IEBC 2022)</span>
                <span className="font-mono tabular-nums text-neutral-900 font-bold">{totalRegistered.toLocaleString()} Voters</span>
              </div>
              <div className="w-full h-8 bg-neutral-100 rounded-md overflow-hidden relative">
                <div className="h-full bg-neutral-400 w-full flex items-center px-3 text-xs font-mono text-white font-semibold">
                  100% Total Electorate Pool
                </div>
              </div>
            </div>

            {/* Step 2: Projected Turnout */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-neutral-700">
                <span>2. Modelled Ballots Cast ({turnoutRate}% Turnout)</span>
                <span className="font-mono tabular-nums text-neutral-900 font-bold">{projectedVotesCast.toLocaleString()} Ballots</span>
              </div>
              <div className="w-full h-8 bg-neutral-100 rounded-md overflow-hidden relative">
                <div
                  className="h-full bg-neutral-700 transition-all duration-300 flex items-center px-3 text-xs font-mono text-white font-semibold"
                  style={{ width: `${turnoutRate}%` }}
                >
                  {projectedVotesCast.toLocaleString()} votes cast
                </div>
              </div>
            </div>

            {/* Step 3: Target Winning Votes */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-neutral-700">
                <span>3. Target Winning Threshold ({targetShare}% of Turnout)</span>
                <span className="font-mono tabular-nums text-emerald-800 font-bold text-sm">{projectedWinningVotes.toLocaleString()} Votes</span>
              </div>
              <div className="w-full h-9 bg-neutral-100 rounded-md overflow-hidden relative border border-emerald-300">
                <div
                  className="h-full bg-emerald-700 transition-all duration-300 flex items-center px-3 text-xs font-mono text-white font-bold"
                  style={{ width: `${(projectedWinningVotes / totalRegistered) * 100}%` }}
                >
                  Winning Target: {projectedWinningVotes.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Mathematical Context Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-100">
            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
              <span className="text-xs font-mono text-neutral-500 uppercase block">2022 Winner Baseline</span>
              <span className="text-lg font-bold text-neutral-900 font-mono tabular-nums block mt-0.5">
                {winner2022Votes.toLocaleString()}
              </span>
              <span className="text-xs text-neutral-500">Abdulswamad Nassir (54.09%)</span>
            </div>

            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
              <span className="text-xs font-mono text-neutral-500 uppercase block">2027 Winning Target</span>
              <span className="text-lg font-bold text-emerald-800 font-mono tabular-nums block mt-0.5">
                {projectedWinningVotes.toLocaleString()}
              </span>
              <span className="text-xs text-neutral-500">At {turnoutRate}% county turnout</span>
            </div>

            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
              <span className="text-xs font-mono text-neutral-500 uppercase block">Net Margin Required</span>
              <span className="text-lg font-bold text-neutral-900 font-mono tabular-nums block mt-0.5">
                {surplusOver2022 > 0 ? `+${surplusOver2022.toLocaleString()}` : surplusOver2022.toLocaleString()}
              </span>
              <span className="text-xs text-neutral-500">Relative to 2022 winner tally</span>
            </div>
          </div>

          <p className="text-xs text-neutral-500 italic">
            *Visual adheres to the FT Visual Vocabulary for Explanatory Arithmetic (Guide Section 5.8): showing how variables multiply to define the target rather than displaying an isolated number.
          </p>
        </div>
      ) : (
        /* Accessible Data Table Fallback */
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-neutral-100 text-neutral-700 font-mono uppercase border-b border-neutral-200">
                <th className="p-3 font-bold">Calculation Parameter</th>
                <th className="p-3 font-bold text-right">Value / Metric</th>
                <th className="p-3 font-bold">Authoritative Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-800">
              <tr>
                <td className="p-3 font-medium">Total Registered Electorate (Mombasa)</td>
                <td className="p-3 text-right font-mono tabular-nums font-bold">641,913</td>
                <td className="p-3 text-neutral-500">Gazetted IEBC 2022 Register (County 001)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Delayed 2022 Election Turnout</td>
                <td className="p-3 text-right font-mono tabular-nums font-bold">34.1% (218,876 votes)</td>
                <td className="p-3 text-neutral-500">IEBC Official Gubernatorial Declaration 2022</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">2027 Targeted Turnout Scenario</td>
                <td className="p-3 text-right font-mono tabular-nums font-bold">{turnoutRate}% ({projectedVotesCast.toLocaleString()} votes)</td>
                <td className="p-3 text-neutral-500">Strategic Turnout Target (Firefly Model)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Target Winning Vote Count</td>
                <td className="p-3 text-right font-mono tabular-nums font-bold text-emerald-800">{projectedWinningVotes.toLocaleString()} votes</td>
                <td className="p-3 text-neutral-500">At {targetShare}% of projected valid ballots</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">2022 Winning Vote Count (Abdulswamad Nassir)</td>
                <td className="p-3 text-right font-mono tabular-nums">119,083 votes (54.09%)</td>
                <td className="p-3 text-neutral-500">IEBC Form 37D Official Return</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
