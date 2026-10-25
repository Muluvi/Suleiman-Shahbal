import React, { useState } from 'react';
import { subCountiesList, wardsList } from '../../content/wardsData.ts';
import { MapPin, Table, Info, Check, ArrowRight } from 'lucide-react';

export const InteractiveMombasaMap: React.FC = () => {
  const [activeSubCounty, setActiveSubCounty] = useState<string>('Kisauni');
  const [showTableMode, setShowTableMode] = useState<boolean>(false);

  const selectedData = subCountiesList.find((s) => s.name === activeSubCounty) || subCountiesList[0];
  const selectedWards = wardsList.filter((w) => w.subCounty === activeSubCounty);

  // Sub-county SVG coordinates & paths tailored to Mombasa's geography:
  // - Kisauni (top-right/north)
  // - Nyali (east coastal band below Kisauni)
  // - Mvita (central island between Tudor Creek and Kilindini Harbour)
  // - Changamwe (west mainland above harbor)
  // - Jomvu (north-west hinterland along SGR / Northern corridor)
  // - Likoni (south across Likoni ferry channel)
  const regions = [
    {
      name: 'Jomvu',
      path: 'M 40,80 L 150,60 L 170,120 L 100,160 L 30,120 Z',
      labelX: 95,
      labelY: 105,
      voters: '75,082',
      color: activeSubCounty === 'Jomvu' ? '#0f172a' : '#cbd5e1',
      textColor: activeSubCounty === 'Jomvu' ? '#ffffff' : '#1e293b'
    },
    {
      name: 'Changamwe',
      path: 'M 100,160 L 180,120 L 220,160 L 170,220 L 110,210 Z',
      labelX: 160,
      labelY: 175,
      voters: '93,572',
      color: activeSubCounty === 'Changamwe' ? '#0f172a' : '#cbd5e1',
      textColor: activeSubCounty === 'Changamwe' ? '#ffffff' : '#1e293b'
    },
    {
      name: 'Kisauni',
      path: 'M 180,40 L 320,30 L 350,110 L 250,130 L 180,80 Z',
      labelX: 250,
      labelY: 75,
      voters: '135,263',
      color: activeSubCounty === 'Kisauni' ? '#0f172a' : '#cbd5e1',
      textColor: activeSubCounty === 'Kisauni' ? '#ffffff' : '#1e293b'
    },
    {
      name: 'Nyali',
      path: 'M 250,130 L 350,110 L 330,220 L 240,200 L 220,160 Z',
      labelX: 280,
      labelY: 165,
      voters: '124,510',
      color: activeSubCounty === 'Nyali' ? '#0f172a' : '#cbd5e1',
      textColor: activeSubCounty === 'Nyali' ? '#ffffff' : '#1e293b'
    },
    {
      name: 'Mvita',
      // The Island!
      path: 'M 180,220 L 230,195 L 240,240 L 195,265 Z',
      labelX: 212,
      labelY: 232,
      voters: '118,699',
      color: activeSubCounty === 'Mvita' ? '#0f172a' : '#94a3b8',
      textColor: activeSubCounty === 'Mvita' ? '#ffffff' : '#0f172a'
    },
    {
      name: 'Likoni',
      path: 'M 140,265 L 250,260 L 280,340 L 160,350 Z',
      labelX: 210,
      labelY: 305,
      voters: '94,787',
      color: activeSubCounty === 'Likoni' ? '#0f172a' : '#cbd5e1',
      textColor: activeSubCounty === 'Likoni' ? '#ffffff' : '#1e293b'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
      
      {/* Header and Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider block">
            Spatial Geographic Architecture · Visual Guide §4.8 &amp; §12.2
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
            Kisauni and Nyali Anchor 40.5% of the County's 641,913 Gazetted Voters
          </h3>
          <p className="text-xs text-neutral-600 mt-0.5">
            Spatial GIS model displaying sub-county voter weights, average turnout, and top registration hubs. Tap any region to inspect.
          </p>
        </div>

        <button
          onClick={() => setShowTableMode(!showTableMode)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 px-3 py-1.5 rounded-md transition-colors shrink-0"
        >
          <Table className="w-3.5 h-3.5" />
          <span>{showTableMode ? 'Show Interactive Map' : 'View as Accessible Table'}</span>
        </button>
      </div>

      {!showTableMode ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: SVG Map Visual (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-4 bg-neutral-50 rounded-xl border border-neutral-200">
            <div className="w-full max-w-sm aspect-4/3 relative">
              <svg
                viewBox="0 0 380 370"
                className="w-full h-full drop-shadow-xs"
                role="img"
                aria-label="Map of Mombasa County showing 6 sub-counties"
              >
                {/* Water channel / Indian Ocean background lines */}
                <path
                  d="M 170,120 Q 200,180 185,220 Q 170,250 190,265"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="8"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
                <text x="130" y="240" fill="#0284c7" fontSize="8" fontFamily="sans-serif" fontStyle="italic">
                  Kilindini Channel
                </text>
                <text x="210" y="150" fill="#0284c7" fontSize="8" fontFamily="sans-serif" fontStyle="italic">
                  Tudor Creek
                </text>
                <text x="310" y="290" fill="#0284c7" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
                  Indian Ocean
                </text>

                {/* Sub-County Polygons */}
                {regions.map((reg) => (
                  <g
                    key={reg.name}
                    onClick={() => setActiveSubCounty(reg.name)}
                    className="cursor-pointer transition-all duration-200 group"
                  >
                    <path
                      d={reg.path}
                      fill={reg.color}
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="group-hover:opacity-90"
                    />
                    <text
                      x={reg.labelX}
                      y={reg.labelY}
                      fill={reg.textColor}
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                      textAnchor="middle"
                      className="pointer-events-none"
                    >
                      {reg.name}
                    </text>
                    <text
                      x={reg.labelX}
                      y={reg.labelY + 11}
                      fill={reg.textColor}
                      fontSize="8"
                      fontFamily="monospace"
                      textAnchor="middle"
                      className="pointer-events-none opacity-85"
                    >
                      {reg.voters}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Sub-County Quick Buttons for Mobile Tap Reliability */}
            <div className="flex flex-wrap gap-1.5 justify-center mt-3 pt-3 border-t border-neutral-200 w-full">
              {subCountiesList.map((sc) => (
                <button
                  key={sc.name}
                  onClick={() => setActiveSubCounty(sc.name)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    activeSubCounty === sc.name
                      ? 'bg-neutral-900 text-white'
                      : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {sc.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Sub-County Inspector & Wards (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="border-b border-neutral-200 pb-3">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                Selected Sub-County Profile
              </span>
              <div className="flex items-center justify-between mt-0.5">
                <h4 className="text-2xl font-bold text-neutral-900">
                  {selectedData.name} Constituency
                </h4>
                <span className="text-xs font-mono font-bold bg-neutral-100 px-2.5 py-1 rounded">
                  {selectedData.wardsCount} Wards
                </span>
              </div>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                {selectedData.economicBackbone}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-xs font-mono text-neutral-500 uppercase block">2022 Registered Voters</span>
                <span className="text-lg font-bold text-neutral-900 font-mono tabular-nums">
                  {selectedData.totalVoters2022.toLocaleString()}
                </span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-xs font-mono text-neutral-500 uppercase block">2022 Turnout Baseline</span>
                <span className="text-lg font-bold text-neutral-900 font-mono tabular-nums">
                  {selectedData.turnout2022Average}%
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-neutral-700 uppercase block">
                Constituent Wards &amp; Priorities in {selectedData.name}:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                {selectedWards.map((w) => (
                  <div key={w.wardName} className="p-2.5 bg-neutral-50 rounded border border-neutral-200 text-xs">
                    <div className="flex justify-between font-bold text-neutral-900">
                      <span>{w.wardName}</span>
                      <span className="font-mono text-neutral-500">{w.registeredVoters2022.toLocaleString()}</span>
                    </div>
                    <span className="text-xs text-neutral-500 block truncate mt-0.5">
                      {w.priorityLocalIssues[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-xs text-neutral-500 bg-neutral-50 p-3 rounded-lg border border-neutral-200">
              <strong className="text-neutral-800">Strategic Weight:</strong> {selectedData.strategicWeight}
            </div>
          </div>

        </div>
      ) : (
        /* Accessible Table Fallback (Guide Section 12.2) */
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-neutral-100 text-neutral-700 font-mono uppercase border-b border-neutral-200">
                <th className="p-3 font-bold">Sub-County</th>
                <th className="p-3 font-bold text-right">2022 Voters</th>
                <th className="p-3 font-bold text-right">Wards</th>
                <th className="p-3 font-bold text-right">2022 Turnout</th>
                <th className="p-3 font-bold">Economic Character</th>
                <th className="p-3 font-bold">Core Vulnerability to Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-800">
              {subCountiesList.map((sc) => (
                <tr key={sc.name} className="hover:bg-neutral-50">
                  <td className="p-3 font-bold text-neutral-900">{sc.name}</td>
                  <td className="p-3 text-right font-mono tabular-nums font-bold">{sc.totalVoters2022.toLocaleString()}</td>
                  <td className="p-3 text-right font-mono tabular-nums">{sc.wardsCount}</td>
                  <td className="p-3 text-right font-mono tabular-nums">{sc.turnout2022Average}%</td>
                  <td className="p-3 text-neutral-600 max-w-xs">{sc.economicBackbone}</td>
                  <td className="p-3 text-neutral-600 max-w-xs">{sc.coreVulnerabilityToAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
