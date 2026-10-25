import React, { useState } from 'react';
import { Grid, Table, Users, CheckCircle2 } from 'lucide-react';

export const TurnoutWaffleChart: React.FC = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);

  // 100 tiles representing 100% of registered electorate (each tile ≈ 6,419 voters)
  // 34 tiles voted in 2022 (approx 19 tiles Abdulswamad, 15 tiles Hassan Omar)
  // 66 tiles stayed home (did not vote)
  const tiles = Array.from({ length: 100 }, (_, i) => {
    if (i < 19) {
      return { id: i, category: 'Abdulswamad Nassir (ODM)', count: '~6,419 voters', color: 'bg-neutral-900', label: 'Voted: Abdulswamad (19%)' };
    } else if (i < 34) {
      return { id: i, category: 'Hassan Omar (UDA)', count: '~6,419 voters', color: 'bg-neutral-600', label: 'Voted: Hassan Omar (15%)' };
    } else {
      return { id: i, category: 'Abstained / Non-Voters', count: '~6,419 voters', color: 'bg-amber-100 hover:bg-amber-200 border border-amber-300', label: 'Did Not Vote / Untapped Majority (66%)' };
    }
  });

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
      
      {/* Header and Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider block">
            Part-to-Whole Composition · Visual Guide §4.7 (10×10 Waffle Grid)
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
            66% of Mombasa's Gazetted Electorate (424,725 Citizens) Did Not Vote in 2022
          </h3>
          <p className="text-xs text-neutral-600 mt-0.5">
            Part-to-whole 10×10 waffle grid mapping 217,188 ballots cast vs 424,725 unmobilised citizens (1 tile = 1% = 6,419 voters).
          </p>
        </div>

        <button
          onClick={() => setShowTable(!showTable)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 px-3 py-1.5 rounded-md transition-colors shrink-0"
          aria-expanded={showTable}
        >
          <Table className="w-3.5 h-3.5" />
          <span>{showTable ? 'Show Waffle Grid' : 'View as Data Table'}</span>
        </button>
      </div>

      {!showTable ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 10x10 Waffle Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div
              className="grid grid-cols-10 gap-1.5 p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 max-w-md mx-auto sm:mx-0"
              role="img"
              aria-label="Waffle chart showing 34% turnout and 66% non-voters in 2022 Mombasa election"
            >
              {tiles.map((tile) => (
                <div
                  key={tile.id}
                  onMouseEnter={() => setHoveredTile(tile.id)}
                  onMouseLeave={() => setHoveredTile(null)}
                  onClick={() => setHoveredTile(tile.id)}
                  className={`aspect-square rounded-xs cursor-pointer transition-transform duration-150 hover:scale-125 focus:ring-2 focus:ring-neutral-900 ${tile.color}`}
                  tabIndex={0}
                  aria-label={`${tile.label} tile`}
                />
              ))}
            </div>

            {/* Tile detail indicator */}
            <div className="text-xs text-neutral-600 h-5 font-mono">
              {hoveredTile !== null ? (
                <span>
                  Tile #{hoveredTile + 1}: <strong className="text-neutral-900">{tiles[hoveredTile].label}</strong> ({tiles[hoveredTile].count})
                </span>
              ) : (
                <span className="text-neutral-400">Hover or tap any tile to inspect the electorate demographic share.</span>
              )}
            </div>
          </div>

          {/* Right: Legend & Strategic Interpretation (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2.5">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50/70 border border-amber-200">
                <div className="w-4 h-4 rounded bg-amber-200 border border-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-neutral-900 font-mono block">
                    66% Non-Voters (424,000+ Citizens)
                  </span>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    The decisive prize. Disillusioned with candidate infighting and service failures. 
                    Shahbal’s digital mobilization targets this group directly with economic delivery messaging.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="w-4 h-4 rounded bg-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-neutral-900 font-mono block">
                    19% Abdulswamad Nassir (119,083 Votes)
                  </span>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    The incumbent’s base in 2022 represented less than a fifth of the total registered electorate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="w-4 h-4 rounded bg-neutral-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-neutral-900 font-mono block">
                    15% Hassan Omar (98,105 Votes)
                  </span>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    The protest and reform constituency, seeking alternative leadership outside traditional machinery.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-neutral-500 font-mono">
              Source: Official IEBC Gubernatorial Returns (August 29, 2022).
            </div>
          </div>

        </div>
      ) : (
        /* Accessible Data Table */
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-neutral-100 text-neutral-700 font-mono uppercase border-b border-neutral-200">
                <th className="p-3 font-bold">Voter Cohort</th>
                <th className="p-3 font-bold text-right">Electorate Share</th>
                <th className="p-3 font-bold text-right">Approximate Count</th>
                <th className="p-3 font-bold">Strategic Implication</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-800">
              <tr>
                <td className="p-3 font-bold text-amber-900">Registered Citizens Who Abstained</td>
                <td className="p-3 text-right font-mono font-bold tabular-nums">65.9%</td>
                <td className="p-3 text-right font-mono font-bold tabular-nums">424,725</td>
                <td className="p-3 text-neutral-600">Primary mobilisation target; conversion requires anti-apathy narrative</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Abdulswamad Nassir (Winner 2022)</td>
                <td className="p-3 text-right font-mono tabular-nums">18.5% of total</td>
                <td className="p-3 text-right font-mono tabular-nums">119,083</td>
                <td className="p-3 text-neutral-600">Won with 54.09% of ballots cast, but only 18.5% of gazetted electorate</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Hassan Omar (Runner-Up 2022)</td>
                <td className="p-3 text-right font-mono tabular-nums">15.3% of total</td>
                <td className="p-3 text-right font-mono tabular-nums">98,105</td>
                <td className="p-3 text-neutral-600">44.56% of ballots cast in 2022 contest</td>
              </tr>
              <tr className="bg-neutral-50 font-bold">
                <td className="p-3">Total Registered Electorate</td>
                <td className="p-3 text-right font-mono tabular-nums">100.0%</td>
                <td className="p-3 text-right font-mono tabular-nums">641,913</td>
                <td className="p-3 text-neutral-600">Gazetted IEBC Register 2022 (County 001)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
