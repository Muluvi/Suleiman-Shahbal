import React, { useState } from 'react';
import { voterSegmentsList } from '../content/segmentsData.ts';
import { ArrowRight, CheckCircle2, Users, Radio, MessageSquare, AlertCircle } from 'lucide-react';
import { TraderSavingsCalculator } from './visuals/TraderSavingsCalculator.tsx';
import { VoterConversionFunnel } from './visuals/VoterConversionFunnel.tsx';

export const PersuasionModule: React.FC = () => {
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>(voterSegmentsList[0].id);

  const currentSegment = voterSegmentsList.find((s) => s.id === selectedSegmentId) || voterSegmentsList[0];

  return (
    <section id="persuasion" className="py-14 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Module Header */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <span>Module 01</span>
            <span aria-hidden="true">·</span>
            <span>Electoral Mobilisation Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Voter Persuasion &amp; Mobilisation Strategy
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Mombasa is not a monolithic voting bloc. Winning requires distinct, culturally attuned, 
            and economically grounded messages tailored to eight core demographic constituencies, moving each voter 
            through a structured conversion funnel from awareness to polling-day turnout.
          </p>
        </div>

        {/* Visual Conversion Funnel & Pictogram Magnitude (Visual Guide §4.9, §4.6 & §5.1) */}
        <VoterConversionFunnel />

        {/* Segment Selector Tabs (Interactive Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-neutral-200 no-scrollbar">
          {voterSegmentsList.map((seg) => (
            <button
              key={seg.id}
              onClick={() => setSelectedSegmentId(seg.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                selectedSegmentId === seg.id
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              {seg.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Selected Segment Deep Dive Card */}
        <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-8">
          
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block font-mono">
                Segment Demographic Profile
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mt-1">
                {currentSegment.title}
              </h3>
              <p className="text-sm text-neutral-600 mt-1">
                {currentSegment.subTitle}
              </p>
            </div>
            <div className="bg-white px-4 py-3 rounded-lg border border-neutral-200/80 text-left md:text-right shrink-0">
              <span className="text-xs text-neutral-500 uppercase tracking-wider block font-mono">
                Electorate Weight
              </span>
              <span className="text-sm sm:text-base font-bold text-neutral-900">
                {currentSegment.estimatedVoterShare}
              </span>
            </div>
          </div>

          {/* Grid: Context & Core Message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 6 cols: Insights and Key Frustrations */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 font-mono">
                  Ground Demographics &amp; Electoral Psychology
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed bg-white p-4 rounded-lg border border-neutral-200">
                  {currentSegment.demographicInsight}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-neutral-600" />
                  Primary Pain Points &amp; Everyday Frustrations
                </h4>
                <div className="space-y-2">
                  {currentSegment.keyFrustrations.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-neutral-200 text-xs text-neutral-700">
                      <span className="text-neutral-400 font-mono mt-0.5">·</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-neutral-600" />
                  Priority Communication Channels
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentSegment.primaryChannels.map((ch, idx) => (
                    <span key={idx} className="bg-white border border-neutral-200 text-neutral-800 text-xs px-3 py-1.5 rounded-md font-medium">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 6 cols: Core Message & Conversion Funnel */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Core Message Box */}
              <div className="bg-neutral-900 text-white p-5 rounded-lg space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  Core Persuasion Message
                </span>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  "{currentSegment.coreMessage}"
                </p>
              </div>

              {/* Conversion Funnel */}
              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3 font-mono">
                  Conversion Funnel: Awareness to Polling-Day Turnout
                </h4>
                
                <div className="space-y-3">
                  <div className="bg-white p-3.5 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1">
                      <span className="font-mono text-neutral-500">STAGE 1: AWARENESS</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {currentSegment.conversionFunnel.awareness}
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1">
                      <span className="font-mono text-neutral-500">STAGE 2: VOTER REGISTRATION</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {currentSegment.conversionFunnel.registration}
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1">
                      <span className="font-mono text-neutral-500">STAGE 3: PERSUASION &amp; RECEPTIVITY</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {currentSegment.conversionFunnel.persuasion}
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1">
                      <span className="font-mono text-neutral-500">STAGE 4: GOTV &amp; TURNOUT PROTECTION</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {currentSegment.conversionFunnel.turnout}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mobilisation Tactics Footer */}
          <div className="pt-4 border-t border-neutral-200">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3 font-mono">
              Actionable Mobilisation Tactics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentSegment.mobilisationTactics.map((tac, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg border border-neutral-200 text-xs text-neutral-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{tac}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-xs text-neutral-500 flex items-center gap-2">
              <span>Verified Data Sources:</span>
              {currentSegment.sources.map((srcId, idx) => (
                <span key={idx} className="font-mono font-medium text-neutral-700 underline">
                  [{srcId}]
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Visual System Feature 5: Interactive Trader Policy Savings Calculator */}
        <TraderSavingsCalculator />

      </div>
    </section>
  );
};
