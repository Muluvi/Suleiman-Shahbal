import React, { useState, useRef } from 'react';
import { voterSegmentsList } from '../content/segmentsData.ts';
import { ArrowRight, CheckCircle2, Users, Radio, MessageSquare, AlertCircle, ChevronLeft, ChevronRight, Copy, Check, Quote } from 'lucide-react';
import { TraderSavingsCalculator } from './visuals/TraderSavingsCalculator.tsx';
import { VoterConversionFunnel } from './visuals/VoterConversionFunnel.tsx';
import { VoterSentimentDivergingBar } from './visuals/VoterSentimentDivergingBar.tsx';

export const PersuasionModule: React.FC = () => {
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>(voterSegmentsList[0].id);
  const [copiedQuote, setCopiedQuote] = useState<boolean>(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const currentIndex = voterSegmentsList.findIndex((s) => s.id === selectedSegmentId);
  const currentSegment = voterSegmentsList[currentIndex] || voterSegmentsList[0];

  const handleSelectSegment = (id: string, index: number) => {
    setSelectedSegmentId(id);
    if (tabsContainerRef.current) {
      const buttons = tabsContainerRef.current.querySelectorAll('button');
      if (buttons[index]) {
        buttons[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % voterSegmentsList.length;
    handleSelectSegment(voterSegmentsList[nextIndex].id, nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + voterSegmentsList.length) % voterSegmentsList.length;
    handleSelectSegment(voterSegmentsList[prevIndex].id, prevIndex);
  };

  const handleCopyQuote = (quote: string) => {
    navigator.clipboard.writeText(quote);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  return (
    <section id="persuasion" className="py-10 sm:py-14 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 space-y-8 sm:space-y-10">
        
        {/* Module Header with 4K Typographic Scale */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <span>Module 01</span>
            <span aria-hidden="true">·</span>
            <span>Electoral Mobilisation Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Voter Persuasion &amp; Mobilisation Strategy
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            Mombasa is not a monolithic voting bloc. Winning requires distinct, culturally attuned, 
            and economically grounded messages tailored to eight core demographic constituencies, moving each voter 
            through a structured conversion funnel from awareness to polling-day turnout.
          </p>
        </div>

        {/* Visual Conversion Funnel & Pictogram Magnitude (Visual Guide §4.9, §4.6 & §5.1) */}
        <VoterConversionFunnel />

        {/* Segment Carousel Header & Navigation Controls */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-500">
                Segment Navigator
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold font-mono bg-sky-100 text-sky-800 border border-sky-200">
                {currentIndex + 1} of {voterSegmentsList.length}
              </span>
            </div>

            {/* Mobile/Desktop Carousel Chevrons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous voter segment"
                className="p-1.5 sm:p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-800 transition-colors border border-neutral-200 flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next voter segment"
                className="p-1.5 sm:p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-800 transition-colors border border-neutral-200 flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontally Scrollable Segment Pills */}
          <div 
            ref={tabsContainerRef}
            className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-neutral-200 no-scrollbar touch-pan-x"
          >
            {voterSegmentsList.map((seg, idx) => (
              <button
                key={seg.id}
                onClick={() => handleSelectSegment(seg.id, idx)}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all ${
                  selectedSegmentId === seg.id
                    ? 'bg-neutral-900 text-white shadow-xs scale-[1.02]'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-950 border border-neutral-200/60'
                }`}
              >
                <span className="font-mono text-[10px] text-neutral-400 mr-1.5">0{idx + 1}</span>
                {seg.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Segment Deep Dive Card (4K High Density & Mobile Optimized) */}
        <div className="bg-neutral-50/90 rounded-xl sm:rounded-2xl border border-neutral-200 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 shadow-xs">
          
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-neutral-200/80 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block font-mono">
                  Constituency Profile · 0{currentIndex + 1}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold text-neutral-950 mt-1 leading-snug">
                {currentSegment.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 mt-1 font-medium">
                {currentSegment.subTitle}
              </p>
            </div>
            
            <div className="bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-neutral-200 shadow-2xs text-left sm:text-right shrink-0">
              <span className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider block font-mono">
                Electorate Weight
              </span>
              <span className="text-xs sm:text-base font-extrabold text-amber-700 font-mono">
                {currentSegment.estimatedVoterShare}
              </span>
            </div>
          </div>

          {/* Grid: Context & Core Message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left 6 cols: Insights and Key Frustrations */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div>
                <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-sky-600" />
                  Ground Demographics &amp; Electoral Psychology
                </h4>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed bg-white p-3.5 sm:p-4 rounded-xl border border-neutral-200 shadow-2xs">
                  {currentSegment.demographicInsight}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  Primary Pain Points &amp; Everyday Frustrations
                </h4>
                <div className="space-y-2">
                  {currentSegment.keyFrustrations.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-neutral-200/90 text-xs text-neutral-800 shadow-2xs">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-emerald-600" />
                  Priority Communication Channels
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {currentSegment.primaryChannels.map((ch, idx) => (
                    <span key={idx} className="bg-white border border-neutral-200 text-neutral-800 text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg font-medium shadow-2xs">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 6 cols: Core Message & Conversion Funnel */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              
              {/* Core Message Box - 4K High Contrast Callout with Copy Action */}
              <div className="bg-slate-950 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl space-y-3 relative overflow-hidden border border-slate-800 shadow-md">
                <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-400 font-mono flex items-center gap-1.5">
                    <Quote className="w-3 h-3 text-sky-400" />
                    Core Persuasion Message
                  </span>
                  <button
                    onClick={() => handleCopyQuote(currentSegment.coreMessage)}
                    className="flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors"
                    title="Copy core message to clipboard for WhatsApp distribution"
                  >
                    {copiedQuote ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-300">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs sm:text-base font-semibold leading-relaxed text-slate-100">
                  "{currentSegment.coreMessage}"
                </p>
                <div className="text-[11px] text-slate-400 font-mono pt-1">
                  Validated against coastal economic survey data &amp; ward sentiment.
                </div>
              </div>

              {/* Conversion Funnel */}
              <div>
                <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider mb-2.5 font-mono">
                  Conversion Funnel: Awareness to Polling-Day Turnout
                </h4>
                
                <div className="space-y-2.5">
                  <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-neutral-200 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1">
                      <span className="font-mono text-sky-700 text-[11px]">STAGE 1: AWARENESS</span>
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      {currentSegment.conversionFunnel.awareness}
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-neutral-200 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1">
                      <span className="font-mono text-emerald-700 text-[11px]">STAGE 2: VOTER REGISTRATION</span>
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      {currentSegment.conversionFunnel.registration}
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-neutral-200 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1">
                      <span className="font-mono text-amber-700 text-[11px]">STAGE 3: PERSUASION &amp; RECEPTIVITY</span>
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      {currentSegment.conversionFunnel.persuasion}
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-neutral-200 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1">
                      <span className="font-mono text-indigo-700 text-[11px]">STAGE 4: GOTV &amp; TURNOUT PROTECTION</span>
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      {currentSegment.conversionFunnel.turnout}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mobilisation Tactics Footer */}
          <div className="pt-4 border-t border-neutral-200">
            <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider mb-3 font-mono">
              Actionable Ground Mobilisation Tactics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
              {currentSegment.mobilisationTactics.map((tac, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-neutral-200 text-xs text-neutral-800 flex items-start gap-2 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{tac}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-[11px] sm:text-xs text-neutral-500 flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-700">Verified Citations:</span>
              {currentSegment.sources.map((srcId, idx) => (
                <span key={idx} className="font-mono font-medium text-neutral-800 bg-neutral-200/80 px-1.5 py-0.5 rounded text-[10px]">
                  [{srcId}]
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Visual Diverging Stacked Bar: Electorate Grievance & Stance (Visual Guide §4.1 & §14) */}
        <VoterSentimentDivergingBar />

        {/* Visual System Feature 5: Interactive Trader Policy Savings Calculator */}
        <TraderSavingsCalculator />

      </div>
    </section>
  );
};
