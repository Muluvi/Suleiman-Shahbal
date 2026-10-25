import React, { useState } from 'react';
import { umbrellaNarrative, narrativePillars, messageVariants, dosAndDonts } from '../content/narrativeData.ts';
import { sourcesList } from '../content/sourcesData.ts';
import { Check, X, Shield, ExternalLink, Sparkles, Building, Briefcase, Award } from 'lucide-react';
import buxtonImage from '../assets/images/buxton_urban_renewal_1792778749005.jpg';
import { MessageHouseVisual } from './visuals/MessageHouseVisual.tsx';

export const NarrativeModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pillars' | 'variants' | 'guidelines'>('pillars');
  const [selectedPillarIndex, setSelectedPillarIndex] = useState(0);

  const currentPillar = narrativePillars[selectedPillarIndex];

  return (
    <section id="narrative" className="py-14 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <span>Module 02</span>
            <span aria-hidden="true">·</span>
            <span>Strategic Narrative Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Issue &amp; Narrative Framework (Message House)
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            A cohesive, evidence-backed narrative system that sets the campaign agenda. Instead of responding 
            to political distractions, the campaign consistently anchors public discourse around economic competence, 
            modern housing, port value retention, and trader dignity.
          </p>
        </div>

        {/* Visual Message House Architecture (Visual Guide §5.4 & §2.3) */}
        <MessageHouseVisual />

        {/* The Umbrella Message House Roof */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
                Overarching Campaign Roof Narrative
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mt-1">
                {umbrellaNarrative.title}
              </h3>
            </div>
            <span className="text-xs font-medium text-neutral-600 bg-neutral-100 px-3 py-1 rounded-md hidden sm:inline">
              Core Campaign Thesis
            </span>
          </div>

          <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed">
            {umbrellaNarrative.headline}: {umbrellaNarrative.subheadline}
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-2 border-t border-neutral-100">
            {umbrellaNarrative.context}
          </p>
        </div>

        {/* Narrative Sub-Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-neutral-200 pb-2">
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'pillars'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
            }`}
          >
            Four Core Policy Pillars &amp; Proof Points
          </button>
          <button
            onClick={() => setActiveTab('variants')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'variants'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
            }`}
          >
            Audience-Specific Message Variants
          </button>
          <button
            onClick={() => setActiveTab('guidelines')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'guidelines'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
            }`}
          >
            Message Do's &amp; Don'ts
          </button>
        </div>

        {/* TAB 1: Four Pillars */}
        {activeTab === 'pillars' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {narrativePillars.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPillarIndex(idx)}
                  className={`p-4 text-left rounded-lg border transition-colors ${
                    selectedPillarIndex === idx
                      ? 'bg-white border-neutral-900 ring-1 ring-neutral-900 shadow-xs'
                      : 'bg-white/80 border-neutral-200 hover:border-neutral-300 text-neutral-600'
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-neutral-400 block">PILLAR 0{idx + 1}</span>
                  <span className="text-xs font-bold text-neutral-900 block mt-1 line-clamp-1">{p.title.split(':')[1] || p.title}</span>
                  <span className="text-xs text-neutral-500 block mt-0.5 line-clamp-1">{p.swahiliLead}</span>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-neutral-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  {currentPillar.swahiliLead}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                  {currentPillar.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed mt-2 font-medium">
                  "{currentPillar.coreArgument}"
                </p>
              </div>

              {/* Verified Proof Points */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 font-mono">
                    Verified Empirical Proof Points (Primary Public Sources)
                  </h4>
                  <div className="space-y-3">
                    {currentPillar.verifiedProofPoints.map((proof, idx) => {
                      const matchedSource = sourcesList.find(s => s.id === proof.sourceId);
                      return (
                        <div key={idx} className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-2">
                          <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                            {proof.point}
                          </p>
                          {matchedSource && (
                            <div className="flex items-center gap-1.5 text-xs text-neutral-500 pt-1">
                              <span className="font-semibold text-neutral-700">Source:</span>
                              <span className="truncate">{matchedSource.title}</span>
                              <span className="text-neutral-400 font-mono">({matchedSource.publisher}, {matchedSource.year})</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono block mb-2">
                      Key Audience Receptivity
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentPillar.targetAudiences.map((aud, idx) => (
                        <span key={idx} className="bg-neutral-100 text-neutral-800 text-xs px-2.5 py-1 rounded font-medium">
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side: Visual Track Record Anchor (Buxton Point) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="rounded-lg overflow-hidden border border-neutral-200 bg-neutral-900 relative">
                    <img
                      src={buxtonImage}
                      alt="Modern urban renewal and affordable housing at Buxton Point Mombasa"
                      className="w-full h-52 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-white border-t border-neutral-200">
                      <span className="text-xs font-bold text-neutral-900 block font-mono uppercase">
                        Tangible Proof: Buxton Point Urban Renewal
                      </span>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Replacing colonial-era municipal squalor with 1,800+ modern titled apartments, 
                        preschool, sports, and green parks. Evidence of execution capacity over political promises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Audience Variants */}
        {activeTab === 'variants' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {messageVariants.map((v, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono block">
                  Target: {v.audience}
                </span>
                <div className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-200">
                  <span className="text-xs font-bold text-neutral-500 block font-mono">THE HOOK</span>
                  <p className="text-sm font-semibold text-neutral-900 mt-1">
                    "{v.hook}"
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-neutral-500 block font-mono">ELEVATOR PITCH</span>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {v.elevatorPitch}
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-100 text-xs text-neutral-600">
                  <span className="font-semibold text-neutral-900">Empirical Proof:</span> {v.keyProof}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: Do's and Don'ts */}
        {activeTab === 'guidelines' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* DO's */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm tracking-wide font-mono uppercase border-b border-neutral-200 pb-3">
                <Check className="w-4 h-4 text-emerald-700" />
                <span>Campaign Message DO's</span>
              </div>
              <ul className="space-y-3">
                {dosAndDonts.dos.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DON'Ts */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-sm tracking-wide font-mono uppercase border-b border-neutral-200 pb-3">
                <X className="w-4 h-4 text-rose-700" />
                <span>Campaign Message DON'Ts</span>
              </div>
              <ul className="space-y-3">
                {dosAndDonts.donts.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
