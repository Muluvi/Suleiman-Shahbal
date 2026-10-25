import React, { useState } from 'react';
import { umbrellaNarrative, narrativePillars } from '../../content/narrativeData.ts';
import { Building, ShieldCheck, ExternalLink } from 'lucide-react';

export const MessageHouseVisual: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<'roof' | 'foundation' | number>(0);
  const [viewMode, setViewMode] = useState<'blueprint' | 'table'>('blueprint');

  const currentPillarIndex = typeof selectedElement === 'number' ? selectedElement : 0;
  const currentPillar = narrativePillars[currentPillarIndex];

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Visual Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              Visual 02 · Strategic Architecture
            </span>
            <span className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
              Message House (Visual Guide §5.4 &amp; §2.3)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Campaign Narrative Architecture (The Message House)
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
            Load-bearing communication structure connecting the umbrella vision to 4 verifiable economic pillars.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg border border-neutral-200 shrink-0">
          <button
            onClick={() => setViewMode('blueprint')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              viewMode === 'blueprint' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Blueprint Graphic
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              viewMode === 'table' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Accessible Table
          </button>
        </div>
      </div>

      {viewMode === 'blueprint' ? (
        <div className="space-y-4">
          {/* 1. ROOF / PEDIMENT (Umbrella Narrative) */}
          <div
            onClick={() => setSelectedElement('roof')}
            className={`cursor-pointer transition-all border-2 rounded-xl p-5 text-center relative ${
              selectedElement === 'roof'
                ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-900'
            }`}
          >
            <div className="max-w-xl mx-auto space-y-2">
              <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded font-bold ${
                selectedElement === 'roof' ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-200 text-neutral-700'
              }`}>
                Pediment &amp; Roof · Overarching Vision
              </span>
              <h4 className="text-lg sm:text-xl font-extrabold tracking-tight">
                &ldquo;{umbrellaNarrative.headline}&rdquo;
              </h4>
              <p className={`text-xs max-w-lg mx-auto ${selectedElement === 'roof' ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {umbrellaNarrative.subheadline}
              </p>
            </div>
          </div>

          {/* 2. THE FOUR LOAD-BEARING PILLARS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {narrativePillars.map((pillar, idx) => {
              const isSelected = selectedElement === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedElement(idx)}
                  className={`cursor-pointer border rounded-xl p-4 flex flex-col justify-between transition-all min-h-[170px] ${
                    isSelected
                      ? 'border-neutral-900 bg-neutral-900 text-white shadow-sm ring-2 ring-neutral-900'
                      : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-300 text-neutral-900'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-200 text-neutral-700'
                      }`}>
                        Pillar 0{idx + 1}
                      </span>
                      <Building className={`w-3.5 h-3.5 ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`} />
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold leading-snug">
                      {pillar.title}
                    </h5>
                  </div>

                  <div className="pt-3 border-t border-neutral-200/40">
                    <span className={`text-[10px] font-mono block ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      Swahili Anchor:
                    </span>
                    <span className={`text-xs font-semibold truncate block ${isSelected ? 'text-neutral-100' : 'text-neutral-800'}`}>
                      {pillar.swahiliLead}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. FOUNDATIONAL BEDROCK */}
          <div
            onClick={() => setSelectedElement('foundation')}
            className={`cursor-pointer transition-all border rounded-xl p-4 text-center ${
              selectedElement === 'foundation'
                ? 'border-neutral-900 bg-neutral-900 text-white shadow-xs'
                : 'border-neutral-200 bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neutral-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Concrete Bedrock · Proven Executive Competence &amp; Private Sector Track Record
              </span>
            </div>
            <p className={`text-xs mt-1 max-w-2xl mx-auto ${selectedElement === 'foundation' ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Grounded in EALA legislative leadership, Northern Corridor trade facilitation (TradeMark Africa), 
              and commercial execution that creates bankable employment.
            </p>
          </div>
        </div>
      ) : (
        /* ACCESSIBLE DATA TABLE VIEW */
        <div className="overflow-x-auto border border-neutral-200 rounded-lg">
          <table className="w-full text-left text-xs text-neutral-700 divide-y divide-neutral-200">
            <thead className="bg-neutral-100 font-mono uppercase text-[11px] text-neutral-700">
              <tr>
                <th className="px-4 py-3">Architectural Element</th>
                <th className="px-4 py-3">Strategic Theme</th>
                <th className="px-4 py-3">Swahili Coastal Hook</th>
                <th className="px-4 py-3">Verified Proof Point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 bg-white">
              <tr className="bg-neutral-50/50">
                <td className="px-4 py-3 font-mono font-bold text-neutral-900">Roof (Umbrella)</td>
                <td className="px-4 py-3 font-semibold">{umbrellaNarrative.headline}</td>
                <td className="px-4 py-3 italic">Uchumi wa Mombasa: Kazi, Biashara na Maisha Bora</td>
                <td className="px-4 py-3 text-neutral-600">Cross-cutting economic transformation</td>
              </tr>
              {narrativePillars.map((p, i) => (
                <tr key={i} className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-mono text-neutral-600">Pillar 0{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-neutral-900">{p.title}</td>
                  <td className="px-4 py-3 italic text-neutral-600">{p.swahiliLead}</td>
                  <td className="px-4 py-3 font-mono text-[11px] text-neutral-700">
                    {p.verifiedProofPoints[0]?.point || 'Verified by IEBC and public audit.'}
                  </td>
                </tr>
              ))}
              <tr className="bg-neutral-50/50">
                <td className="px-4 py-3 font-mono font-bold text-neutral-900">Bedrock Foundation</td>
                <td className="px-4 py-3 font-semibold">Executive Competence</td>
                <td className="px-4 py-3 italic">Kiongozi Anayetekeleza, Si Maneno Matupu</td>
                <td className="px-4 py-3 text-neutral-600">EALA 2022-2027 &amp; TradeMark Africa</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* INSPECTOR CARD FOR CURRENTLY SELECTED ELEMENT */}
      <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 space-y-4">
        {selectedElement === 'roof' && (
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-neutral-500">Selected: Overarching Vision</span>
            <h4 className="text-base font-bold text-neutral-900">{umbrellaNarrative.title}</h4>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">{umbrellaNarrative.context}</p>
          </div>
        )}

        {selectedElement === 'foundation' && (
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-neutral-500">Selected: Foundation</span>
            <h4 className="text-base font-bold text-neutral-900">Executive Credibility &amp; Private Sector Rigor</h4>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Mombasa voters are fatigued by political rhetoric unbacked by management ability. Shahbal&apos;s bedrock 
              advantage is his verifiable track record of building major enterprises and executing complex infrastructure 
              without relying on county treasury allocations.
            </p>
          </div>
        )}

        {typeof selectedElement === 'number' && currentPillar && (
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-2">
              <span className="text-xs font-mono font-bold uppercase text-neutral-500">
                Selected: Pillar 0{selectedElement + 1} Deep Dive
              </span>
              <span className="text-xs font-mono bg-white px-2 py-0.5 rounded border border-neutral-200 text-neutral-700">
                {currentPillar.verifiedProofPoints.length} Verified Evidence Points
              </span>
            </div>

            <h4 className="text-base font-bold text-neutral-900">{currentPillar.title}</h4>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">{currentPillar.coreArgument}</p>

            {/* Proof Points Sub-Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {currentPillar.verifiedProofPoints.map((pp, i) => (
                <div key={i} className="bg-white p-3.5 rounded-lg border border-neutral-200 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-neutral-900">Evidence 0{i + 1}</span>
                    <span className="text-[10px] font-mono text-neutral-500">{pp.sourceId}</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">{pp.point}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
