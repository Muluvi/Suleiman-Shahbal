import React, { useState, useMemo } from 'react';
import { allPollingCentres, megaPollingCentres } from '../../content/pollingCentresData.ts';
import { Search, Filter, ShieldCheck, MapPin, Users, Award, AlertCircle, CheckCircle2 } from 'lucide-react';

export const PollingCentresDirectory: React.FC = () => {
  const [selectedSubCounty, setSelectedSubCounty] = useState<string>('All');
  const [megaOnly, setMegaOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-neutral-200 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider block">
            Official IEBC Gazette Registry · Mombasa County (Code: 001)
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-0.5">
            Registration Centres &amp; Polling Station Defense Plan
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
            Forensic breakdown of all registration centres, official IEBC codes, and voter concentrations across 
            the 6 constituencies and 30 wards extracted directly from official IEBC returns.
          </p>
        </div>

        <div className="bg-neutral-900 text-white p-3 rounded-lg text-left sm:text-right shrink-0">
          <span className="text-xs font-mono text-neutral-400 block uppercase">Total County Polling Network</span>
          <span className="text-base sm:text-lg font-bold font-mono">1,040+ Polling Stations</span>
          <span className="text-xs text-neutral-300 block font-mono">641,913 Gazetted Voters</span>
        </div>
      </div>

      {/* Strategic Agent Deployment Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase block">1. Station Defense Force</span>
          <span className="text-xl font-bold text-neutral-900 font-mono tabular-nums block mt-0.5">2,080 Agents</span>
          <span className="text-xs text-neutral-600">2 trained accredited agents per stream</span>
        </div>
        <div>
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase block">2. Mega Polling Centres</span>
          <span className="text-xl font-bold text-amber-800 font-mono tabular-nums block mt-0.5">37 Mega Hubs</span>
          <span className="text-xs text-neutral-600">Centres with &gt;5,000 registered voters</span>
        </div>
        <div>
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase block">3. Ward Chief Agents</span>
          <span className="text-xl font-bold text-neutral-900 font-mono tabular-nums block mt-0.5">30 Ward Leads</span>
          <span className="text-xs text-neutral-600">1 per CAW (Code 0001 to 0030)</span>
        </div>
        <div>
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase block">4. Constituency HQs</span>
          <span className="text-xl font-bold text-neutral-900 font-mono tabular-nums block mt-0.5">6 Tallying Desks</span>
          <span className="text-xs text-neutral-600">Real-time Form 37A verification</span>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search Box */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search centre name (e.g. Bomu, Kiembeni, Kongowea, Daru Ulum) or IEBC code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-900 bg-neutral-50/50"
            />
          </div>

          {/* Sub-County Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedSubCounty}
              onChange={(e) => setSelectedSubCounty(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-lg border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-900 bg-neutral-50/50"
            >
              <option value="All">All 6 Constituencies</option>
              <option value="Changamwe">Changamwe (001)</option>
              <option value="Jomvu">Jomvu (002)</option>
              <option value="Kisauni">Kisauni (003)</option>
              <option value="Nyali">Nyali (004)</option>
              <option value="Likoni">Likoni (005)</option>
              <option value="Mvita">Mvita (006)</option>
            </select>
          </div>

          {/* Mega-Centre Toggle Filter */}
          <div className="md:col-span-3 flex items-center">
            <button
              onClick={() => setMegaOnly(!megaOnly)}
              className={`w-full py-2 px-3 text-xs font-semibold rounded-lg border transition-colors flex items-center justify-center gap-1.5 ${
                megaOnly
                  ? 'bg-amber-100 text-amber-950 border-amber-300 font-bold'
                  : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>{megaOnly ? 'Showing Mega Hubs (>5k) Only' : 'Filter Mega Hubs (>5k)'}</span>
            </button>
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600 pt-2 border-t border-neutral-100 font-mono">
          <div>
            Showing <strong className="text-neutral-900">{filteredCentres.length}</strong> registration centres · 
            Voters in view: <strong className="text-neutral-900">{totalFilteredVoters.toLocaleString()}</strong>
          </div>
          {megaOnly && (
            <span className="text-amber-800 font-bold">
              Target Priority: Mega polling centres account for over 52% of all ballots cast in Mombasa.
            </span>
          )}
        </div>
      </div>

      {/* Directory Table */}
      <div className="overflow-x-auto rounded-lg border border-neutral-200">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-neutral-100/80 text-neutral-700 font-mono uppercase border-b border-neutral-200">
              <th className="p-3 font-bold">IEBC Centre Code</th>
              <th className="p-3 font-bold">Registration Centre Name</th>
              <th className="p-3 font-bold">Ward</th>
              <th className="p-3 font-bold">Constituency</th>
              <th className="p-3 font-bold text-right">Registered Voters</th>
              <th className="p-3 font-bold text-right">Streams / Stations</th>
              <th className="p-3 font-bold">Priority Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 text-neutral-800">
            {filteredCentres.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-8 text-center text-neutral-500">
                  No registration centres match your search criteria.
                </td>
              </tr>
            ) : (
              filteredCentres.map((centre) => (
                <tr key={centre.code} className={`hover:bg-neutral-50 ${centre.isMegaCentre ? 'bg-amber-50/30' : ''}`}>
                  <td className="p-3 font-mono text-neutral-500 whitespace-nowrap">
                    {centre.code}
                  </td>
                  <td className="p-3 font-bold text-neutral-900 whitespace-nowrap">
                    {centre.name}
                  </td>
                  <td className="p-3 text-neutral-700 whitespace-nowrap">
                    {centre.wardName}
                  </td>
                  <td className="p-3 text-neutral-600 whitespace-nowrap">
                    {centre.subCounty}
                  </td>
                  <td className="p-3 text-right font-mono font-bold tabular-nums text-neutral-950 whitespace-nowrap">
                    {centre.registeredVoters.toLocaleString()}
                  </td>
                  <td className="p-3 text-right font-mono tabular-nums text-neutral-600 whitespace-nowrap">
                    {centre.pollingStations}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    {centre.isMegaCentre ? (
                      <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs px-2 py-0.5 rounded font-mono font-bold">
                        Mega Hub (&gt;5k)
                      </span>
                    ) : (
                      <span className="text-neutral-500 font-mono text-xs">
                        Standard
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>Extracted from official IEBC Gazetted Register of Elections (County Code: 001).</span>
        <span className="font-mono">Includes Prison polling stations: Shimo La Tewa (415) &amp; Kingorani (34).</span>
      </div>

    </div>
  );
};
