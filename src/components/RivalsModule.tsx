import React from 'react';
import { rivalComparisons, contrastSafeguards } from '../content/rivalsData.ts';
import { sourcesList } from '../content/sourcesData.ts';
import { ShieldCheck, Scale, ExternalLink, AlertCircle } from 'lucide-react';
import { RivalsComparisonMatrix } from './visuals/RivalsComparisonMatrix.tsx';

export const RivalsModule: React.FC = () => {
  return (
    <section id="rivals" className="py-10 sm:py-14 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-800">
            Comparative Electoral Strategy &amp; Governance Audits
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Rivals: Issue-Based Contrast Only
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            A strictly policy-centered, delivery-focused contrast matrix based exclusively on verified public records, 
            Controller of Budget financial audits, and official legislative tenure. 
            Zero personal attacks, zero rumors, zero religious or ethnic commentary.
          </p>
        </div>

        {/* Safeguard Notice */}
        <div className="bg-white rounded-xl border border-neutral-200 p-5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-neutral-900">
            <Scale className="w-4 h-4 text-neutral-800" />
            <span>Ethical Campaign Contrast Protocol</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            {contrastSafeguards.map((item, idx) => (
              <div key={idx} className="text-xs text-neutral-600 bg-neutral-50 p-3 rounded-lg border border-neutral-200 leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Visual 3-Way Policy Scorecard & Mandate Arithmetic (Visual Guide §5.6 & §5.8) */}
        <RivalsComparisonMatrix />

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {rivalComparisons.map((rival, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs">
              
              <div className="space-y-4">
                <div className="border-b border-neutral-200 pb-4">
                  <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                    Competitor Analysis 0{idx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-0.5">
                    {rival.competitor}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    {rival.currentOfficeOrRecord}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block uppercase">
                      Known Political Base
                    </span>
                    <p className="text-xs text-neutral-700 mt-0.5 leading-relaxed bg-neutral-50 p-2.5 rounded border border-neutral-200">
                      {rival.knownPoliticalBase}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block uppercase">
                      Stated Competitor Strength
                    </span>
                    <p className="text-xs text-neutral-700 mt-0.5 leading-relaxed bg-neutral-50 p-2.5 rounded border border-neutral-200">
                      {rival.statedStrength}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block uppercase">
                      Demonstrated Delivery Vulnerability (Public Audit Grounding)
                    </span>
                    <p className="text-xs text-neutral-700 mt-0.5 leading-relaxed bg-neutral-50 p-2.5 rounded border border-neutral-200">
                      {rival.demonstratedVulnerability}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-neutral-900 text-white space-y-1.5">
                    <span className="text-xs font-mono font-bold uppercase text-neutral-400">
                      Shahbal Strategic Differentiator
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-100 leading-relaxed font-medium">
                      {rival.shahbalDifferentiator}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <div className="text-xs font-medium text-neutral-900 font-mono">
                  Contrast Rule: {rival.contrastGuideline}
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-700">Verified Citations:</span>
                  {rival.verifiedCitations.map((cit, cIdx) => (
                    <span key={cIdx} className="font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                      [{cit}]
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
