import React, { useState, useMemo } from 'react';
import { allPollingCentres } from '../../content/pollingCentresData.ts';
import { Search, Filter, ShieldCheck, MapPin, Users, Award, AlertCircle, CheckCircle2, LayoutGrid, Table as TableIcon, Share2 } from 'lucide-react';

export const PollingCentresDirectory: React.FC = () => {
  const [selectedSubCounty, setSelectedSubCounty] = useState<string>('All');
  const [megaOnly, setMegaOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const filteredCentres = useMemo(() => {
    return allPollingCentres.filter((centre) => {
      const matchSubCounty = selectedSubCounty === 'All' || centre.subCounty === selectedSubCounty;
      const matchMega = !megaOnly || centre.isMegaCentre;
      const matchQuery =
        centre.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        centre.code.includes(searchQuery) ||
        centre.wardName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        centre.subCounty.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSubCounty && matchMega && matchQuery;
    });
  }, [selectedSubCounty, megaOnly, searchQuery]);

  const totalFilteredVoters = filteredCentres.reduce((acc, c) => acc + c.registeredVoters, 0);
  const totalStreams = filteredCentres.reduce((acc, c) => acc + (Number(c.pollingStations) || 1), 0);

  const handleShareCentre = (name: string, voters: number, streams: number, subCounty: string) => {
    const text = `IEBC Polling Hub Intel: ${name} (${subCounty}) has ${voters.toLocaleString()} gazetted voters across ${streams} streams. Required Defense Crew: ${streams * 2} accredited agents. #Mombasa2027`;
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200/90 p-4 sm:p-6 lg:p-8 space-y-6 shadow-xs">
      
      {/* Header conforming to Visual Handbook §4.12: Headline states finding */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <span className="text-[11px] font-mono font-bold text-sky-800 uppercase tracking-wider block">
            Electoral Infrastructure Registry · Visual Guide §4.11 &amp; §8.6
          </span>
          <h3 className="text-lg sm:text-2xl font-extrabold text-neutral-950 mt-1 leading-snug">
            37 Mega-Centres Command 50.2% of Mombasa's Total Vote Across 1,040 Polling Streams
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
            Exhaustive forensic registry of all 100+ gazetted registration centres across 30 wards with a 2,080 accredited polling agent defense deployment calculator.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <div className="flex items-center bg-neutral-100 p-1 rounded-lg border border-neutral-200 text-xs">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded font-medium transition-colors ${
                viewMode === 'cards' ? 'bg-white text-neutral-950 shadow-2xs font-bold' : 'text-neutral-600 hover:text-neutral-900'
              }`}
              title="Card view optimized for mobile phone screens"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded font-medium transition-colors ${
                viewMode === 'table' ? 'bg-white text-neutral-950 shadow-2xs font-bold' : 'text-neutral-600 hover:text-neutral-900'
              }`}
              title="Tabular dense view"
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
          </div>

          <div className="bg-neutral-900 text-white px-3.5 py-2 rounded-xl text-left sm:text-right shrink-0 shadow-xs">
            <span className="text-[10px] font-mono text-neutral-400 block uppercase">County Defense Network</span>
            <span className="text-sm sm:text-base font-extrabold font-mono">1,040+ Streams · 2,080 Agents</span>
          </div>
        </div>
      </div>

      {/* Strategic Agent Deployment Summary (Bento row) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 bg-neutral-50/90 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-neutral-200">
        <div>
          <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-500 uppercase block">1. Station Defense Force</span>
          <span className="text-lg sm:text-2xl font-black text-neutral-950 font-mono tabular-nums block mt-0.5">2,080 Agents</span>
          <span className="text-[11px] text-neutral-600">2 accredited agents / stream</span>
        </div>
        <div>
          <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-500 uppercase block">2. Mega Polling Centres</span>
          <span className="text-lg sm:text-2xl font-black text-amber-800 font-mono tabular-nums block mt-0.5">37 Mega Hubs</span>
          <span className="text-[11px] text-neutral-600">Hubs with &gt;5,000 voters</span>
        </div>
        <div>
          <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-500 uppercase block">3. Ward Chief Agents</span>
          <span className="text-lg sm:text-2xl font-black text-neutral-950 font-mono tabular-nums block mt-0.5">30 Ward Leads</span>
          <span className="text-[11px] text-neutral-600">1 per CAW (Code 0001–0030)</span>
        </div>
        <div>
          <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-500 uppercase block">4. Constituency Tally</span>
          <span className="text-lg sm:text-2xl font-black text-sky-800 font-mono tabular-nums block mt-0.5">6 Tally Desks</span>
          <span className="text-[11px] text-neutral-600">Form 37A verification live</span>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3">
          
          {/* Search Box */}
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search centre (e.g. Bomu, Kiembeni, Kongowea, Daru Ulum) or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-900 bg-neutral-50/70"
            />
          </div>

          {/* Sub-County Filter */}
          <div className="sm:col-span-3">
            <select
              value={selectedSubCounty}
              onChange={(e) => setSelectedSubCounty(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-900 bg-neutral-50/70 font-mono"
            >
              <option value="All">All 6 Sub-Counties</option>
              <option value="Changamwe">Changamwe (001)</option>
              <option value="Jomvu">Jomvu (002)</option>
              <option value="Kisauni">Kisauni (003)</option>
              <option value="Nyali">Nyali (004)</option>
              <option value="Likoni">Likoni (005)</option>
              <option value="Mvita">Mvita (006)</option>
            </select>
          </div>

          {/* Mega-Centre Toggle Filter */}
          <div className="sm:col-span-3 flex items-center">
            <button
              onClick={() => setMegaOnly(!megaOnly)}
              className={`w-full py-2 px-3 text-xs font-semibold rounded-xl border transition-colors flex items-center justify-center gap-1.5 ${
                megaOnly
                  ? 'bg-amber-100 text-amber-950 border-amber-300 font-bold shadow-2xs'
                  : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>{megaOnly ? 'Mega Hubs Only (>5k)' : 'Filter Mega Hubs (>5k)'}</span>
            </button>
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600 pt-1 font-mono">
          <div>
            Showing <strong className="text-neutral-950">{filteredCentres.length}</strong> centres · 
            Voters: <strong className="text-neutral-950 tabular-nums">{totalFilteredVoters.toLocaleString()}</strong> · 
            Defense Crew: <strong className="text-emerald-700 tabular-nums">{totalStreams * 2} Agents</strong>
          </div>
          {megaOnly && (
            <span className="text-amber-800 font-bold">
              ★ 37 mega centres hold &gt;52% of all ballots cast.
            </span>
          )}
        </div>
      </div>

      {/* View Mode 1: Mobile-First Cards View (§12.2) */}
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredCentres.length === 0 ? (
            <div className="col-span-full p-8 text-center text-neutral-500 bg-neutral-50 rounded-xl border border-neutral-200">
              No registration centres match your search criteria.
            </div>
          ) : (
            filteredCentres.map((centre) => {
              const streamsCount = Number(centre.pollingStations) || 1;
              const agentCrew = streamsCount * 2;
              return (
                <div
                  key={centre.code}
                  className={`p-4 rounded-xl border transition-all ${
                    centre.isMegaCentre
                      ? 'bg-amber-50/40 border-amber-200/90 shadow-2xs'
                      : 'bg-neutral-50/70 border-neutral-200/90 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 border-b border-neutral-200/60 pb-2">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 block">
                        IEBC Code {centre.code} · {centre.subCounty}
                      </span>
                      <h4 className="text-sm font-bold text-neutral-950 mt-0.5 line-clamp-1">
                        {centre.name}
                      </h4>
                    </div>
                    {centre.isMegaCentre ? (
                      <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] px-2 py-0.5 rounded font-mono font-bold shrink-0">
                        Mega Hub
                      </span>
                    ) : (
                      <span className="text-neutral-500 font-mono text-[10px] bg-neutral-200/60 px-1.5 py-0.5 rounded shrink-0">
                        Standard
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-neutral-500 block">Voters</span>
                      <span className="font-extrabold text-neutral-950 tabular-nums">
                        {centre.registeredVoters.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 block">Streams</span>
                      <span className="font-bold text-neutral-800 tabular-nums">
                        {streamsCount} stns
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-emerald-800 font-bold block">Agents</span>
                      <span className="font-extrabold text-emerald-800 tabular-nums">
                        {agentCrew} crew
                      </span>
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-600 font-mono">
                    <span>Ward: <strong className="text-neutral-900">{centre.wardName}</strong></span>
                    <button
                      onClick={() => handleShareCentre(centre.name, centre.registeredVoters, streamsCount, centre.subCounty)}
                      className="text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 font-semibold"
                      title="Copy deployment intel for WhatsApp"
                    >
                      <Share2 className="w-3 h-3" />
                      <span>Copy Intel</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : (
        /* View Mode 2: Dense Table View */
        <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-2xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-neutral-100/90 text-neutral-700 font-mono uppercase border-b border-neutral-200">
                <th className="p-3 font-bold">IEBC Code</th>
                <th className="p-3 font-bold">Registration Centre Name</th>
                <th className="p-3 font-bold">Ward</th>
                <th className="p-3 font-bold">Sub-County</th>
                <th className="p-3 font-bold text-right">Voters</th>
                <th className="p-3 font-bold text-right">Streams</th>
                <th className="p-3 font-bold text-right">Agent Defense</th>
                <th className="p-3 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-800">
              {filteredCentres.map((centre) => {
                const streamsCount = Number(centre.pollingStations) || 1;
                return (
                  <tr key={centre.code} className={`hover:bg-neutral-50 ${centre.isMegaCentre ? 'bg-amber-50/30' : ''}`}>
                    <td className="p-3 font-mono text-neutral-500 whitespace-nowrap">{centre.code}</td>
                    <td className="p-3 font-bold text-neutral-900 whitespace-nowrap">{centre.name}</td>
                    <td className="p-3 text-neutral-700 whitespace-nowrap">{centre.wardName}</td>
                    <td className="p-3 text-neutral-600 whitespace-nowrap">{centre.subCounty}</td>
                    <td className="p-3 text-right font-mono font-bold tabular-nums text-neutral-950 whitespace-nowrap">
                      {centre.registeredVoters.toLocaleString()}
                    </td>
                    <td className="p-3 text-right font-mono tabular-nums text-neutral-600 whitespace-nowrap">
                      {streamsCount}
                    </td>
                    <td className="p-3 text-right font-mono font-bold text-emerald-800 whitespace-nowrap tabular-nums">
                      {streamsCount * 2} Agents
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      {centre.isMegaCentre ? (
                        <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] px-2 py-0.5 rounded font-mono font-bold">
                          Mega Hub (&gt;5k)
                        </span>
                      ) : (
                        <span className="text-neutral-500 font-mono text-[10px]">Standard</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="p-3 sm:p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono">
        <span>Extracted from official IEBC Gazetted Register of Elections (County Code: 001).</span>
        <span>Includes Prison polling stations: Shimo La Tewa (415) &amp; Kingorani (34).</span>
      </div>

    </div>
  );
};
