import React, { useState } from 'react';
import { Target, Table, Sparkles, HelpCircle } from 'lucide-react';
import { subCountiesList } from '../../content/wardsData.ts';

export const StrategicQuadrant: React.FC = () => {
  const [selectedSubCounty, setSelectedSubCounty] = useState<string>('Kisauni');
  const [showTable, setShowTable] = useState<boolean>(false);

  // Quadrant coordinates scaled to 0-100:
  // X: Turnout 31% -> 39% (scale 0-100)
  // Y: Voters 70k -> 140k (scale 0-100)
  const points = [
    { name: 'Kisauni', x: 40, y: 92, voters: 135276, turnout: 34.2, strategy: 'The #1 Mobilisation Engine: 1% turnout bump delivers 1,350 net votes' },
    { name: 'Nyali', x: 72, y: 77, voters: 124253, turnout: 36.8, strategy: 'Commercial and Trader Fortress: High persuasion and middle-class voter activation' },
    { name: 'Mvita', x: 56, y: 70, voters: 118974, turnout: 35.5, strategy: 'Island Political Core: Countering incumbent patronage through economic delivery' },
    { name: 'Likoni', x: 12, y: 35, voters: 94764, turnout: 31.9, strategy: 'High-Upside Awakening Ground: Severe turnout collapse in 2022 offers massive headroom' },
    { name: 'Changamwe', x: 33, y: 33, voters: 93561, turnout: 33.7, strategy: 'Organised Labour Heartland: Port and logistics workers mobilisation' },
    { name: 'Jomvu', x: 48, y: 10, voters: 75085, turnout: 34.9, strategy: 'Industrial SEZ Corridor: Job creation proof point (DP World hub)' }
  ];

  const activePoint = points.find((p) => p.name === selectedSubCounty) || points[0];

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
      
      {/* Header conforming to Visual Handbook §4.12: Headline states finding */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <div>
          <span className="text-[11px] font-mono font-bold text-sky-800 uppercase tracking-wider block">
            Sub-County Strategic Positioning · 2×2 Opportunity Matrix
          </span>
          <h3 className="text-base sm:text-xl font-extrabold text-neutral-950 mt-0.5 leading-snug">
            Tier 1 Battlegrounds: High-Density Sub-Counties with Depressed Turnout Hold 168,000 Votes
          </h3>
          <p className="text-xs text-neutral-600 mt-0.5">
            2×2 strategic matrix plotting 2022 voter turnout against registration volume across all 30 wards.
          </p>
        </div>

        <button
          onClick={() => setShowTable(!showTable)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 px-3 py-1.5 rounded-md transition-colors shrink-0"
        >
          <Table className="w-3.5 h-3.5" />
          <span>{showTable ? 'Show 2×2 Quadrant' : 'View as Data Table'}</span>
        </button>
      </div>

      {!showTable ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 2x2 Visual Quadrant Box (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-square max-w-md mx-auto sm:mx-0 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              
              {/* Background Quadrant Labels */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none p-4">
                <div className="border-r border-b border-neutral-200/80 p-2 text-xs font-mono font-bold text-neutral-400">
                  QUADRANT 1: TURNOUT GOLDMINE
                  <span className="block text-xs font-normal text-neutral-400 mt-0.5">High Density · Low Turnout</span>
                </div>
                <div className="border-b border-neutral-200/80 p-2 text-xs font-mono font-bold text-neutral-400 text-right">
                  QUADRANT 2: CONSOLIDATION BASTION
                  <span className="block text-xs font-normal text-neutral-400 mt-0.5">High Density · Higher Turnout</span>
                </div>
                <div className="border-r border-neutral-200/80 p-2 flex flex-col justify-end text-xs font-mono font-bold text-neutral-400">
                  QUADRANT 3: HIGH-EFFICIENCY LOGISTICS
                  <span className="block text-xs font-normal text-neutral-400 mt-0.5">Moderate Density · Industrial Base</span>
                </div>
                <div className="p-2 flex flex-col justify-end text-xs font-mono font-bold text-neutral-400 text-right">
                  QUADRANT 4: SPECIAL CORRIDORS
                  <span className="block text-xs font-normal text-neutral-400 mt-0.5">Emerging Urban Growth</span>
                </div>
              </div>

              {/* Plotted Points */}
              <div className="absolute inset-6">
                {points.map((pt) => {
                  const isSelected = selectedSubCounty === pt.name;
                  return (
                    <button
                      key={pt.name}
                      onClick={() => setSelectedSubCounty(pt.name)}
                      style={{
                        left: `${pt.x}%`,
                        bottom: `${pt.y}%`,
                        transform: 'translate(-50%, 50%)'
                      }}
                      className={`absolute z-10 flex flex-col items-center group focus:outline-none transition-transform ${
                        isSelected ? 'scale-125' : 'hover:scale-110'
                      }`}
                      aria-label={`${pt.name} data point`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono shadow-md ${
                          isSelected
                            ? 'bg-neutral-900 text-white ring-4 ring-neutral-900/20'
                            : 'bg-white text-neutral-900 border-2 border-neutral-800'
                        }`}
                      >
                        {pt.name[0]}
                      </div>
                      <span className="text-xs font-bold text-neutral-900 bg-white/90 px-1.5 py-0.5 rounded shadow-xs mt-1 whitespace-nowrap">
                        {pt.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Axis Labels */}
              <div className="absolute bottom-1 left-0 right-0 text-center text-xs font-mono text-neutral-500">
                ← Lower Turnout Baseline (31%) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Higher Turnout Baseline (38%) →
              </div>
            </div>
          </div>

          {/* Right: Selected Quadrant Inspector (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border-b border-neutral-200 pb-3">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                Selected Strategic Axis
              </span>
              <h4 className="text-xl font-bold text-neutral-900 mt-0.5">
                {activePoint.name} Constituency
              </h4>
              <div className="flex items-center gap-3 text-xs text-neutral-600 mt-1 font-mono">
                <span>Voters: <strong>{activePoint.voters.toLocaleString()}</strong></span>
                <span aria-hidden="true">·</span>
                <span>Turnout: <strong>{activePoint.turnout}%</strong></span>
              </div>
            </div>

            <div className="p-4 bg-neutral-900 text-white rounded-lg space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase text-neutral-400">
                Campaign Strategic Mandate
              </span>
              <p className="text-xs sm:text-sm text-neutral-100 leading-relaxed font-medium">
                {activePoint.strategy}
              </p>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              <strong>Takeaway:</strong> Because Kisauni and Likoni had the lowest turnout in 2022 relative to their population size, allocating 45% of voter registration field caravans to these two sub-counties will unlock over 40,000 net new voters.
            </p>
          </div>

        </div>
      ) : (
        /* Accessible Table Fallback */
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-neutral-100 text-neutral-700 font-mono uppercase border-b border-neutral-200">
                <th className="p-3 font-bold">Constituency</th>
                <th className="p-3 font-bold text-right">Voter Pool</th>
                <th className="p-3 font-bold text-right">2022 Turnout</th>
                <th className="p-3 font-bold">Quadrant Classification</th>
                <th className="p-3 font-bold">Strategic Mobilisation Mandate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-800">
              {points.map((pt) => (
                <tr key={pt.name} className="hover:bg-neutral-50">
                  <td className="p-3 font-bold text-neutral-900">{pt.name}</td>
                  <td className="p-3 text-right font-mono tabular-nums font-bold">{pt.voters.toLocaleString()}</td>
                  <td className="p-3 text-right font-mono tabular-nums">{pt.turnout}%</td>
                  <td className="p-3 font-mono text-neutral-600">
                    {pt.y > 50 && pt.x < 50 ? 'Quadrant 1: Turnout Goldmine' :
                     pt.y > 50 && pt.x >= 50 ? 'Quadrant 2: Bastion' : 'Quadrant 3: Industrial Axis'}
                  </td>
                  <td className="p-3 text-neutral-700">{pt.strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
