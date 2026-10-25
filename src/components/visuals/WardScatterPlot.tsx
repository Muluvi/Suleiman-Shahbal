import React, { useState } from 'react';
import { wardsList } from '../../content/wardsData.ts';
import { ScatterChart, Info, Search, Filter, Layers } from 'lucide-react';

export const WardScatterPlot: React.FC = () => {
  const [selectedWardName, setSelectedWardName] = useState<string>('Kiembeni');
  const [selectedSubCounty, setSelectedSubCounty] = useState<string>('All');
  const [showTable, setShowTable] = useState<boolean>(false);

  const subCounties = ['All', 'Kisauni', 'Nyali', 'Mvita', 'Likoni', 'Changamwe', 'Jomvu'];

  // Color mapping per sub-county using accessible contrast hues
  const getSubCountyColor = (subCounty: string) => {
    switch (subCounty) {
      case 'Kisauni':
        return '#0f172a'; // slate-900
      case 'Nyali':
        return '#047857'; // emerald-700
      case 'Mvita':
        return '#b45309'; // amber-700
      case 'Likoni':
        return '#1d4ed8'; // blue-700
      case 'Changamwe':
        return '#7e22ce'; // purple-700
      case 'Jomvu':
        return '#c026d3'; // fuchsia-700
      default:
        return '#475569';
    }
  };

  const filteredWards = wardsList.filter((w) => {
    if (selectedSubCounty === 'All') return true;
    return w.subCounty === selectedSubCounty;
  });

  const selectedWard = wardsList.find((w) => w.wardName === selectedWardName) || wardsList[0];

  // Axis ranges
  const minTurnout = 28;
  const maxTurnout = 42;
  const minVoters = 12000;
  const maxVoters = 36000;

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Header following Chart Craft §4.12: Headline states finding */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-800">
              Electoral Density Correlation · Turnout vs Registration Volume
            </span>
            <span className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded border border-neutral-200">
              Visual Guide §4.2 &amp; §14
            </span>
          </div>
          <h3 className="text-lg sm:text-2xl font-extrabold text-neutral-950 mt-1 leading-snug">
            Turnout vs Density: Kisauni &amp; Nyali Mega-Wards Hold the Balance of Power
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
            Plotting 2022 voter turnout (horizontal) against registered voters (vertical) across all 30 wards. Circle size indicates polling station count.
          </p>
        </div>

        {/* View Toggle */}
        <button
          onClick={() => setShowTable(!showTable)}
          className="px-3 py-1.5 text-xs font-mono font-semibold rounded-md border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-700 transition-colors shrink-0"
        >
          {showTable ? 'Show Scatter Chart' : 'View as Data Table'}
        </button>
      </div>

      {!showTable ? (
        <div className="space-y-6">
          {/* Sub-County Filter Chips */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {subCounties.map((sc) => (
                <button
                  key={sc}
                  onClick={() => setSelectedSubCounty(sc)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md whitespace-nowrap transition-colors ${
                    selectedSubCounty === sc
                      ? 'bg-neutral-900 text-white font-bold'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {sc}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-neutral-500">
              Showing {filteredWards.length} of 30 Wards
            </span>
          </div>

          {/* Scatter Plot SVG Graphic */}
          <div className="relative border border-neutral-200 rounded-xl bg-neutral-50/50 p-4 sm:p-6 overflow-hidden">
            {/* Quadrant Guide Labels */}
            <div className="absolute top-3 left-4 text-[10px] font-mono font-bold text-neutral-400 uppercase">
              HIGH VOTERS · DEPRESSED TURNOUT (MAX REVENUE)
            </div>
            <div className="absolute top-3 right-4 text-[10px] font-mono font-bold text-neutral-400 uppercase text-right">
              HIGH VOTERS · HIGH TURNOUT (FORTRESS)
            </div>
            <div className="absolute bottom-6 left-4 text-[10px] font-mono font-bold text-neutral-400 uppercase">
              LOWER VOTERS · DEPRESSED TURNOUT
            </div>
            <div className="absolute bottom-6 right-4 text-[10px] font-mono font-bold text-neutral-400 uppercase text-right">
              LOWER VOTERS · HIGH TURNOUT
            </div>

            {/* SVG Plot */}
            <div className="w-full h-80 sm:h-96">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                {/* Horizontal & Vertical Median Reference Lines (§4.1) */}
                <line
                  x1="60"
                  y1="200"
                  x2="780"
                  y2="200"
                  stroke="#cbd5e1"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                />
                <line
                  x1="420"
                  y1="20"
                  x2="420"
                  y2="360"
                  stroke="#cbd5e1"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                />

                {/* Axes */}
                <line x1="60" y1="360" x2="780" y2="360" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="60" y1="20" x2="60" y2="360" stroke="#94a3b8" strokeWidth="1.5" />

                {/* X-Axis Ticks & Labels (Turnout) */}
                {[28, 30, 32, 34, 36, 38, 40, 42].map((val) => {
                  const x = 60 + ((val - minTurnout) / (maxTurnout - minTurnout)) * 720;
                  return (
                    <g key={val}>
                      <line x1={x} y1="360" x2={x} y2="366" stroke="#64748b" />
                      <text x={x} y="380" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="monospace">
                        {val}%
                      </text>
                    </g>
                  );
                })}

                {/* Y-Axis Ticks & Labels (Registered Voters) */}
                {[15000, 20000, 25000, 30000, 35000].map((val) => {
                  const y = 360 - ((val - minVoters) / (maxVoters - minVoters)) * 340;
                  return (
                    <g key={val}>
                      <line x1="54" y1={y} x2="60" y2={y} stroke="#64748b" />
                      <text x="48" y={y + 3} textAnchor="end" fontSize="10" fill="#64748b" fontFamily="monospace">
                        {(val / 1000).toFixed(0)}k
                      </text>
                    </g>
                  );
                })}

                {/* Render Ward Bubbles */}
                {filteredWards.map((w) => {
                  const cx = 60 + ((w.turnout2022Pct - minTurnout) / (maxTurnout - minTurnout)) * 720;
                  const cy = 360 - ((w.registeredVoters2022 - minVoters) / (maxVoters - minVoters)) * 340;
                  const r = Math.max(5, (w.pollingStationsCount || 20) * 0.4);
                  const isSelected = w.wardName === selectedWardName;
                  const color = getSubCountyColor(w.subCounty);

                  return (
                    <g
                      key={w.cawCode}
                      className="cursor-pointer transition-all duration-150"
                      onClick={() => setSelectedWardName(w.wardName)}
                    >
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? r + 5 : r}
                        fill={color}
                        fillOpacity={isSelected ? 0.95 : 0.65}
                        stroke={isSelected ? '#ffffff' : color}
                        strokeWidth={isSelected ? 3 : 1}
                      />
                      {/* Label top mega wards */}
                      {w.registeredVoters2022 >= 24000 && (
                        <text
                          x={cx}
                          y={cy - r - 4}
                          textAnchor="middle"
                          fontSize="9"
                          fontWeight="bold"
                          fill="#0f172a"
                          fontFamily="sans-serif"
                        >
                          {w.wardName}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-500 font-mono pt-2 border-t border-neutral-200">
              <span>← Horizontal Axis: 2022 Postponed Turnout (%) →</span>
              <span>↑ Vertical Axis: Gazetted Voters Roll (Count)</span>
            </div>
          </div>

          {/* Selected Ward Deep Dive Card */}
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-neutral-500 block">
                  Selected Scatter Point: CAW {selectedWard.cawCode}
                </span>
                <h4 className="text-lg font-bold text-neutral-900 mt-0.5">
                  {selectedWard.wardName} Ward ({selectedWard.subCounty})
                </h4>
              </div>
              <span className="text-xs font-mono font-bold bg-neutral-900 text-white px-3 py-1 rounded">
                Priority: {selectedWard.strategicPriority}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-neutral-200">
                <span className="text-[10px] font-mono text-neutral-500 block">Registered Voters</span>
                <span className="text-base font-extrabold text-neutral-900 font-mono">
                  {selectedWard.registeredVoters2022.toLocaleString()}
                </span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-neutral-200">
                <span className="text-[10px] font-mono text-neutral-500 block">2022 Turnout</span>
                <span className="text-base font-extrabold text-neutral-900 font-mono">
                  {selectedWard.turnout2022Pct}%
                </span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-neutral-200">
                <span className="text-[10px] font-mono text-neutral-500 block">Polling Stations</span>
                <span className="text-base font-extrabold text-neutral-900 font-mono">
                  {selectedWard.pollingStationsCount} Stations
                </span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-neutral-200">
                <span className="text-[10px] font-mono text-neutral-500 block">2027 Projected Pool</span>
                <span className="text-base font-extrabold text-neutral-900 font-mono">
                  {selectedWard.estimated2027Target.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="text-xs text-neutral-700 bg-white p-3.5 rounded-lg border border-neutral-200 space-y-1">
              <span className="font-bold text-neutral-900 font-mono block">Top Polling Hubs &amp; Ground Anchor</span>
              <p className="leading-relaxed">
                {selectedWard.topCentres?.map((c) => `${c.name} (${c.voters.toLocaleString()} voters)`).join(' · ')}
              </p>
              <p className="text-neutral-500 text-[11px] pt-1">
                Mobilisation focus: {selectedWard.groundMobilisationAnchor}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Accessible Data Table */
        <div className="overflow-x-auto border border-neutral-200 rounded-xl">
          <table className="w-full text-left text-xs divide-y divide-neutral-200">
            <thead className="bg-neutral-100 font-mono uppercase text-[11px] text-neutral-700">
              <tr>
                <th className="px-4 py-3">Ward &amp; Sub-County</th>
                <th className="px-4 py-3 text-right">Voters</th>
                <th className="px-4 py-3 text-right">Turnout %</th>
                <th className="px-4 py-3 text-right">Stations</th>
                <th className="px-4 py-3">Strategic Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 bg-white">
              {filteredWards.map((w) => (
                <tr key={w.cawCode} className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium text-neutral-900">
                    {w.wardName} ({w.subCounty})
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-bold tabular-nums">
                    {w.registeredVoters2022.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right font-mono tabular-nums">{w.turnout2022Pct}%</td>
                  <td className="px-4 py-3 text-right font-mono tabular-nums">{w.pollingStationsCount}</td>
                  <td className="px-4 py-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase bg-neutral-100 text-neutral-800">
                      {w.strategicPriority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mandatory Source Citation & Date Bar (§4.12) */}
      <div className="pt-3 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-neutral-500">
        <span>Primary Source: Official IEBC Gazetted Register &amp; Returns 2022 (County Code 001)</span>
        <span>Data Architecture: Anonymised 30-Ward Aggregate Density Model</span>
      </div>
    </div>
  );
};
