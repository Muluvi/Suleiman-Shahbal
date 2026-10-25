import React, { useState, useMemo } from 'react';
import { wardsList, subCountiesList } from '../content/wardsData.ts';
import { Search, Filter, ShieldAlert, BarChart3, TrendingUp, Layers, CheckCircle2, Building2 } from 'lucide-react';
import { InteractiveMombasaMap } from './visuals/InteractiveMombasaMap.tsx';
import { StrategicQuadrant } from './visuals/StrategicQuadrant.tsx';
import { PollingCentresDirectory } from './visuals/PollingCentresDirectory.tsx';
import { WardLeagueTable } from './visuals/WardLeagueTable.tsx';

export const DataAnalyticsModule: React.FC = () => {
  const [selectedSubCounty, setSelectedSubCounty] = useState<string>('All');
  const [selectedPriority, setSelectedPriority] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredWards = useMemo(() => {
    return wardsList.filter((ward) => {
      const matchSubCounty = selectedSubCounty === 'All' || ward.subCounty === selectedSubCounty;
      const matchPriority = selectedPriority === 'All' || ward.strategicPriority === selectedPriority;
      const matchSearch =
        ward.wardName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ward.subCounty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ward.keyDemographics.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSubCounty && matchPriority && matchSearch;
    });
  }, [selectedSubCounty, selectedPriority, searchQuery]);

  // Aggregate stats
  const totalFilteredVoters = filteredWards.reduce((acc, curr) => acc + curr.registeredVoters2022, 0);
  const totalTarget2027 = filteredWards.reduce((acc, curr) => acc + curr.estimated2027Target, 0);
  const avgTurnout = (
    filteredWards.reduce((acc, curr) => acc + curr.turnout2022Pct, 0) / (filteredWards.length || 1)
  ).toFixed(1);

  return (
    <section id="wards" className="py-14 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Module Header */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <span>Module 04</span>
            <span aria-hidden="true">·</span>
            <span>Targeting &amp; Sentiment Listening Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Data, Analytics &amp; 30-Ward Targeting Framework
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Mombasa County comprises 6 sub-counties and 30 electoral wards. This analytical framework models 
            official IEBC 2022 voter registration numbers, turnout differentials, and hyper-local priority issues 
            without collecting or profiling individual voters' personal data.
          </p>
        </div>

        {/* Data Protection Act 2019 Compliance Badge */}
        <div className="bg-white rounded-xl border border-neutral-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-600">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-neutral-900 block font-mono uppercase">
                Statutory Compliance: Kenya Data Protection Act, 2019
              </span>
              <p className="text-neutral-600 mt-0.5 leading-relaxed">
                All metrics utilize strictly anonymised, aggregate public records (IEBC gazetted voter rolls, KNBS census data). 
                The strategy explicitly rejects non-consensual harvesting of private citizen phone numbers or behavioral profiling.
              </p>
            </div>
          </div>
          <div className="shrink-0 bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded text-xs font-mono font-semibold">
            Section 26 &amp; 31 Compliant
          </div>
        </div>

        {/* Sub-County Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {subCountiesList.map((sc) => {
            const isSelected = selectedSubCounty === sc.name;
            return (
              <button
                key={sc.name}
                onClick={() => setSelectedSubCounty(isSelected ? 'All' : sc.name)}
                className={`p-3.5 rounded-lg border text-left transition-colors flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                    : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div>
                  <span className={`text-xs font-mono font-bold block ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {sc.wardsCount} WARDS
                  </span>
                  <span className="text-sm font-bold block mt-0.5">{sc.name}</span>
                </div>
                <div className="mt-3 pt-2 border-t border-neutral-100/30">
                  <span className="text-xs font-mono font-semibold block tabular-nums">
                    {sc.totalVoters2022.toLocaleString()}
                  </span>
                  <span className={`text-xs block ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {sc.turnout2022Average}% Turnout
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Visual System Feature 3: Interactive Spatial Geographic Map */}
        <InteractiveMombasaMap />

        {/* Visual System Feature 4: Strategic 2x2 Positioning Matrix */}
        <StrategicQuadrant />

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-5 space-y-4 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search ward name, sub-county, issue or demographic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-900 bg-neutral-50/50"
              />
            </div>

            {/* Sub-County Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedSubCounty}
                onChange={(e) => setSelectedSubCounty(e.target.value)}
                className="w-full py-2 px-3 text-xs rounded-lg border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-900 bg-neutral-50/50"
              >
                <option value="All">All Sub-Counties (6)</option>
                <option value="Kisauni">Kisauni (7 Wards)</option>
                <option value="Nyali">Nyali (5 Wards)</option>
                <option value="Mvita">Mvita (5 Wards)</option>
                <option value="Likoni">Likoni (5 Wards)</option>
                <option value="Changamwe">Changamwe (5 Wards)</option>
                <option value="Jomvu">Jomvu (3 Wards)</option>
              </select>
            </div>

            {/* Priority Filter */}
            <div className="md:col-span-4">
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="w-full py-2 px-3 text-xs rounded-lg border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-900 bg-neutral-50/50"
              >
                <option value="All">All Strategic Priorities</option>
                <option value="Critical Fortress">Critical Fortress</option>
                <option value="High-Opportunity Growth">High-Opportunity Growth</option>
                <option value="Swing Ground">Swing Ground</option>
                <option value="Consolidation">Consolidation</option>
              </select>
            </div>
          </div>

          {/* Aggregates Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-neutral-100 text-xs text-neutral-600">
            <div className="flex items-center gap-4">
              <span>Showing: <strong className="text-neutral-900">{filteredWards.length} of 30</strong> wards</span>
              <span aria-hidden="true">·</span>
              <span>2022 Registered: <strong className="text-neutral-900 font-mono tabular-nums">{totalFilteredVoters.toLocaleString()}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Turnout Baseline: <strong className="text-neutral-900 font-mono tabular-nums">{avgTurnout}%</strong></span>
            </div>

            {/* Mandatory Placeholder Badge */}
            <div className="flex items-center gap-2">
              <span className="text-neutral-400">2027 Projections:</span>
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs px-2 py-0.5 rounded font-mono font-medium">
                Illustrative placeholder, replace with real data
              </span>
            </div>
          </div>
        </div>

        {/* 30 Wards Data Table */}
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-neutral-100/70 border-b border-neutral-200 text-neutral-600 font-mono uppercase">
                  <th className="py-3 px-4 font-bold">CAW Code &amp; Ward</th>
                  <th className="py-3 px-4 font-bold">Sub-County</th>
                  <th className="py-3 px-4 font-bold text-right">2022 Voters</th>
                  <th className="py-3 px-4 font-bold text-right">Stations</th>
                  <th className="py-3 px-4 font-bold text-right">2022 Turnout</th>
                  <th className="py-3 px-4 font-bold text-right">2027 Est. Target*</th>
                  <th className="py-3 px-4 font-bold">Priority Status</th>
                  <th className="py-3 px-4 font-bold">Top Polling Hubs</th>
                  <th className="py-3 px-4 font-bold">Mobilisation Anchor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                {filteredWards.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-neutral-500">
                      No wards match the selected filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredWards.map((ward) => (
                    <tr key={ward.wardName} className="hover:bg-neutral-50/80 transition-colors">
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="font-mono text-neutral-400 block text-xs">CAW {ward.cawCode}</span>
                        <span className="font-bold text-neutral-900">{ward.wardName}</span>
                      </td>
                      <td className="py-3 px-4 text-neutral-600 whitespace-nowrap">
                        {ward.subCounty}
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-neutral-900 tabular-nums whitespace-nowrap">
                        {ward.registeredVoters2022.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-neutral-600 tabular-nums whitespace-nowrap">
                        {ward.pollingStationsCount}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-neutral-700 tabular-nums whitespace-nowrap">
                        {ward.turnout2022Pct}%
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-neutral-500 tabular-nums whitespace-nowrap">
                        {ward.estimated2027Target.toLocaleString()}*
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="font-semibold text-xs text-neutral-900">
                          {ward.strategicPriority}
                        </span>
                      </td>
                      <td className="py-3 px-4 max-w-xs truncate text-neutral-700" title={ward.topCentres?.map(c => `${c.name} (${c.voters.toLocaleString()})`).join(', ')}>
                        {ward.topCentres?.map(c => c.name).join(' · ')}
                      </td>
                      <td className="py-3 px-4 text-neutral-600 max-w-xs truncate" title={ward.groundMobilisationAnchor}>
                        {ward.groundMobilisationAnchor}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-neutral-50 border-t border-neutral-200 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>*2027 estimated targets represent a modelled 12.5% registration increment baseline.</span>
            <span className="font-mono">Primary Source: Official IEBC Gazetted Register (County Code: 001)</span>
          </div>
        </div>

        {/* Visual League Table with Inline Density Bars (Visual Guide §4.3 & §4.11) */}
        <WardLeagueTable />

        {/* Official IEBC Polling Centres Directory & Station Defense System */}
        <PollingCentresDirectory />

        {/* Listening Plan & Sentiment Methodology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-3">
            <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider block">
              Methodology 01
            </span>
            <h3 className="text-base font-bold text-neutral-900">
              Aggregated Social Sentiment &amp; Issue Tracking
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Monitoring public narrative shifts across X, public Facebook posts, TikTok comments, and local coastal call-in radio shows (Baraka FM, Radio Rahma). 
              Natural language grouping categorizes weekly concerns into five buckets: Jobs &amp; Business, Water &amp; Sanitation, Health &amp; Hospitals, Land &amp; Housing, and Port Rights.
            </p>
            <div className="text-xs text-neutral-500 pt-2 border-t border-neutral-100 font-mono">
              Delivery: Weekly Sentiment Briefing every Monday at 07:00 EAT to candidate advisory desk.
            </div>
          </div>

          <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-3">
            <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider block">
              Methodology 02
            </span>
            <h3 className="text-base font-bold text-neutral-900">
              KPI Dashboard &amp; Mobilisation Telemetry
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Tracking objective operational performance metrics: 
              (1) Verified WhatsApp Community Member Count across 30 wards, 
              (2) Polling Station Inoculation Rate (% of polling centers with at least 5 registered Shahbal advocates), 
              (3) Misinformation Debunk Velocity (Average minutes from rumor emergence to published fact-check card).
            </p>
            <div className="text-xs text-neutral-500 pt-2 border-t border-neutral-100 font-mono">
              Target: 100% polling station digital mesh coverage by Q1 2027.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
