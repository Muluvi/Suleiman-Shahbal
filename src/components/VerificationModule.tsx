import React, { useState } from 'react';
import { verificationChecklist, dataPlaceholders } from '../content/verificationData.ts';
import { sourcesList } from '../content/sourcesData.ts';
import { CheckSquare, ExternalLink, AlertCircle, HelpCircle, ShieldCheck, Filter } from 'lucide-react';
import { VerificationDashboardVisual } from './visuals/VerificationDashboardVisual.tsx';

export const VerificationModule: React.FC = () => {
  const [sourceCategoryFilter, setSourceCategoryFilter] = useState<string>('All');

  const filteredSources = sourcesList.filter((src) => {
    if (sourceCategoryFilter === 'All') return true;
    return src.category === sourceCategoryFilter;
  });

  return (
    <section id="verification" className="py-10 sm:py-14 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800">
            Data Integrity &amp; Factual Grounding Standards
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Verification Checklist &amp; Primary Sources Directory
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            In accordance with Firefly Management’s research integrity rules, every claim is anchored in verified 
            public authority records. All unconfirmed political variables are flagged with explicit 
            <strong className="text-neutral-900 font-mono"> [VERIFY]</strong> markers for candidate and advisory board clearance.
          </p>
        </div>

        {/* Visual Integrity Dashboard & Audit Pipeline (Visual Guide §4.10 & §5.1) */}
        <VerificationDashboardVisual />

        {/* 1. VERIFICATION CHECKLIST (Items needing campaign confirmation) */}
        <div className="space-y-4">
          <div className="border-b border-neutral-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">
                Part 1 of 3 · Action Items
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                Campaign Verification Checklist [VERIFY Items]
              </h3>
            </div>
            <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs px-2.5 py-1 rounded font-mono font-medium">
              Must confirm with candidate prior to deployment
            </span>
          </div>

          <div className="space-y-4">
            {verificationChecklist.map((item) => (
              <div key={item.id} className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 sm:p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-neutral-900 text-white text-xs font-mono font-bold px-2 py-0.5 rounded">
                      [VERIFY]
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                      {item.claim}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-neutral-500">Deadline:</span>
                    <span className="font-semibold text-neutral-800">{item.targetDeadline}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  <strong className="text-neutral-900">Context:</strong> {item.context}
                </p>

                <div className="bg-white p-3.5 rounded-lg border border-neutral-200 text-xs text-neutral-800 space-y-1">
                  <span className="font-bold text-neutral-900 uppercase font-mono block">Action Required</span>
                  <p className="leading-relaxed">{item.actionRequired}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. PLACEHOLDER DATA DISCLOSURES */}
        <div className="space-y-4">
          <div className="border-b border-neutral-200 pb-3">
            <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">
              Part 2 of 3 · Data Modeling Disclosures
            </span>
            <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
              Data Placeholders &amp; Projections Status
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataPlaceholders.map((dp, idx) => (
              <div key={idx} className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-neutral-900">{dp.metric}</h4>
                  <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs px-2 py-0.5 rounded font-mono font-medium">
                    {dp.label}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {dp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. AUTHORITATIVE PRIMARY SOURCES DIRECTORY */}
        <div className="space-y-6">
          <div className="border-b border-neutral-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">
                Part 3 of 3 · Citations Registry
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                Primary &amp; Authoritative Sources Directory
              </h3>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              {['All', 'IEBC', 'KNBS', 'Controller of Budget', 'Public Record', 'Official Gazette'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSourceCategoryFilter(cat)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    sourceCategoryFilter === cat
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSources.map((source) => (
              <div key={source.id} className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-neutral-500">
                      [{source.id}]
                    </span>
                    <span className="text-xs font-mono font-semibold text-neutral-700 bg-white px-2 py-0.5 rounded border border-neutral-200">
                      {source.category}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                    {source.title}
                  </h4>

                  <div className="text-xs text-neutral-600">
                    <span className="font-semibold text-neutral-800">Publisher:</span> {source.publisher} ({source.year})
                  </div>

                  {source.notes && (
                    <p className="text-xs text-neutral-600 leading-relaxed bg-white p-2.5 rounded border border-neutral-200">
                      {source.notes}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-neutral-200">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-neutral-700 underline"
                  >
                    <span>View Authoritative Source Publication</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
