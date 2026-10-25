import React, { useState, useMemo } from 'react';
import { wardsList } from '../../content/wardsData.ts';
import { Search, ArrowUpDown, ChevronUp, ChevronDown, Filter, Info } from 'lucide-react';

type SortField = 'voters' | 'turnout' | 'stations' | 'name';
type SortOrder = 'asc' | 'desc';

export const WardLeagueTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubCounty, setSelectedSubCounty] = useState('All');
  const [sortField, setSortField] = useState<SortField>('voters');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const subCounties = ['All', 'Changamwe', 'Jomvu', 'Kisauni', 'Nyali', 'Likoni', 'Mvita'];

  const maxVoters = Math.max(...wardsList.map((w) => w.registeredVoters2022));

  const filteredAndSortedWards = useMemo(() => {
    return wardsList
      .filter((w) => {
        const matchesSearch =
          w.wardName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          w.cawCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
          w.subCounty.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSubCounty =
          selectedSubCounty === 'All' || w.subCounty === selectedSubCounty;
        return matchesSearch && matchesSubCounty;
      })
      .sort((a, b) => {
        let comparison = 0;
        if (sortField === 'voters') {
          comparison = a.registeredVoters2022 - b.registeredVoters2022;
        } else if (sortField === 'turnout') {
          comparison = a.turnout2022Pct - b.turnout2022Pct;
        } else if (sortField === 'stations') {
          comparison = (a.pollingStationsCount || 0) - (b.pollingStationsCount || 0);
        } else if (sortField === 'name') {
          comparison = a.wardName.localeCompare(b.wardName);
        }
        return sortOrder === 'desc' ? -comparison : comparison;
      });
  }, [searchTerm, selectedSubCounty, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              Visual 04 · Ward Performance Intelligence
            </span>
            <span className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
              League Table with Inline Bars (Visual Guide §4.3 &amp; §4.11)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            30-Ward League Table &amp; Mobilisation Priority Matrix
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
            Ranked comparative directory across all 30 County Assembly Wards with inline density bars.
          </p>
        </div>

        {/* Total Summary */}
        <div className="bg-neutral-50 border border-neutral-200 px-4 py-2 rounded-lg text-right shrink-0">
          <span className="text-[11px] font-mono uppercase text-neutral-500 block">Total Electorate</span>
          <span className="text-base font-extrabold text-neutral-900 font-mono">641,913 Voters</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search ward or code (e.g. Bamburi, CAW 0014)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
          />
        </div>

        {/* Sub-County Filter Chips */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1">
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
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto border border-neutral-200 rounded-xl bg-white">
        <table className="w-full text-left text-xs text-neutral-700 divide-y divide-neutral-200">
          <thead className="bg-neutral-100 font-mono uppercase text-[11px] text-neutral-700">
            <tr>
              <th className="px-3.5 py-3 w-12 text-center">Rank</th>
              <th
                className="px-4 py-3 cursor-pointer hover:bg-neutral-200/60"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center gap-1.5">
                  <span>Ward Name &amp; Code</span>
                  <ArrowUpDown className="w-3 h-3 text-neutral-400" />
                </div>
              </th>
              <th className="px-4 py-3">Sub-County</th>
              <th
                className="px-4 py-3 cursor-pointer hover:bg-neutral-200/60"
                onClick={() => handleSort('voters')}
              >
                <div className="flex items-center gap-1.5">
                  <span>Registered Voters (2022)</span>
                  <ArrowUpDown className="w-3 h-3 text-neutral-400" />
                </div>
              </th>
              <th
                className="px-4 py-3 text-center cursor-pointer hover:bg-neutral-200/60"
                onClick={() => handleSort('stations')}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span>Stations</span>
                  <ArrowUpDown className="w-3 h-3 text-neutral-400" />
                </div>
              </th>
              <th
                className="px-4 py-3 cursor-pointer hover:bg-neutral-200/60"
                onClick={() => handleSort('turnout')}
              >
                <div className="flex items-center gap-1.5">
                  <span>2022 Turnout</span>
                  <ArrowUpDown className="w-3 h-3 text-neutral-400" />
                </div>
              </th>
              <th className="px-4 py-3">Strategy Priority</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {filteredAndSortedWards.map((ward, idx) => {
              const voterWidthPercent = (ward.registeredVoters2022 / maxVoters) * 100;
              const isHighDensity = ward.registeredVoters2022 >= 25000;
              const isLowTurnout = ward.turnout2022Pct <= 33;

              return (
                <tr key={ward.cawCode} className="hover:bg-neutral-50/80 transition-colors">
                  <td className="px-3.5 py-3 text-center font-mono font-bold text-neutral-400 text-[11px]">
                    0{idx + 1}
                  </td>
                  <td className="px-4 py-3 font-semibold text-neutral-900">
                    <div>{ward.wardName}</div>
                    <span className="text-[10px] font-mono text-neutral-500 font-normal">
                      CAW {ward.cawCode}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-[11px] text-neutral-600">
                    {ward.subCounty}
                  </td>
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span className="font-bold text-neutral-900">
                          {ward.registeredVoters2022.toLocaleString()}
                        </span>
                        <span className="text-neutral-500 text-[10px]">
                          {((ward.registeredVoters2022 / 641913) * 100).toFixed(1)}%
                        </span>
                      </div>
                      {/* Inline Horizontal Bar */}
                      <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neutral-900 rounded-full"
                          style={{ width: `${voterWidthPercent}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center font-mono text-[11px] font-semibold text-neutral-800">
                    {ward.pollingStationsCount || 28}
                  </td>
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span className="font-semibold text-neutral-900">
                          {ward.turnout2022Pct}%
                        </span>
                        <span className="text-[10px] text-neutral-500">
                          {isLowTurnout ? 'Depressed' : 'Average'}
                        </span>
                      </div>
                      {/* Inline Turnout Bar */}
                      <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            ward.turnout2022Pct > 36
                              ? 'bg-emerald-600'
                              : ward.turnout2022Pct < 32
                              ? 'bg-amber-600'
                              : 'bg-neutral-600'
                          }`}
                          style={{ width: `${ward.turnout2022Pct * 2}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                        ward.strategicPriority === 'Critical Fortress'
                          ? 'bg-neutral-900 text-white'
                          : ward.strategicPriority === 'High-Opportunity Growth'
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {ward.strategicPriority}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Guidance Note */}
      <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono bg-neutral-50 p-3 rounded-lg border border-neutral-200">
        <Info className="w-4 h-4 shrink-0 text-neutral-400" />
        <span>
          Tier 1 Mobilisation wards combine &gt;25,000 voters with depressed 2022 turnout (&lt;33%). 
          A 15% turnout surge in these wards alone generates 42,000+ incremental votes.
        </span>
      </div>
    </div>
  );
};
