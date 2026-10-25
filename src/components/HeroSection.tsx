import React from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import heroPortImage from '../assets/images/hero_mombasa_port_skyline_1792778749230.jpg';

interface HeroSectionProps {
  onExploreSection: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreSection }) => {
  return (
    <section className="relative bg-white border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Editorial Strategy Brief (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              {/* Unboxed clean metadata line */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-neutral-600 uppercase tracking-wider font-mono">
                <span className="text-sky-800 font-bold">County 001: Mombasa</span>
                <span aria-hidden="true">·</span>
                <span>August 2027 General Election</span>
                <span aria-hidden="true">·</span>
                <span>Gubernatorial Strategy Proposal</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.12]" style={{ textWrap: 'balance' }}>
                Mobilising the Decisive Electorate for Suleiman Shahbal
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed font-normal">
                A data-grounded, segment-by-segment digital campaign strategy designed to activate Mombasa’s 
                unheard majority—turning 424,000 non-voters and emerging Gen-Z registrants into a disciplined, 
                unstoppable turnout engine behind proven economic leadership.
              </p>
            </div>

            {/* Quick Strategic Key Metrics Strip (Mobile 2x2 Grid with 4K Micro-Borders) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 py-3 sm:py-4 border-y border-neutral-200">
              <div className="bg-neutral-50/80 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border border-neutral-200/60 sm:border-0">
                <span className="block text-xl sm:text-2xl font-extrabold text-neutral-950 font-mono tabular-nums">641,913</span>
                <span className="text-[11px] sm:text-xs text-neutral-600 font-medium">IEBC 2022 Voters</span>
              </div>
              <div className="bg-neutral-50/80 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border border-neutral-200/60 sm:border-0">
                <span className="block text-xl sm:text-2xl font-extrabold text-amber-700 font-mono tabular-nums">34.1%</span>
                <span className="text-[11px] sm:text-xs text-neutral-600 font-medium">Turnout Baseline</span>
              </div>
              <div className="bg-neutral-50/80 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border border-neutral-200/60 sm:border-0">
                <span className="block text-xl sm:text-2xl font-extrabold text-neutral-950 font-mono tabular-nums">30 Wards</span>
                <span className="text-[11px] sm:text-xs text-neutral-600 font-medium">6 Sub-Counties</span>
              </div>
              <div className="bg-neutral-50/80 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border border-neutral-200/60 sm:border-0">
                <span className="block text-xl sm:text-2xl font-extrabold text-emerald-700 font-mono tabular-nums">KES 500M</span>
                <span className="text-[11px] sm:text-xs text-neutral-600 font-medium">Trader Guarantee</span>
              </div>
            </div>

            {/* CTA and Context Row - Thumb-Friendly Touch Targets */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={() => onExploreSection('overview')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-neutral-950 rounded-xl hover:bg-neutral-800 active:bg-neutral-900 transition-colors shadow-sm min-h-[44px]"
              >
                <span>Read 2-Minute Candidate Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onExploreSection('wards')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 rounded-xl hover:text-neutral-950 transition-colors border border-neutral-200/80 min-h-[44px]"
              >
                <Compass className="w-4 h-4 text-neutral-600" />
                <span>Explore 30-Ward Framework</span>
              </button>
            </div>

            {/* Authoritative Citation Footnote */}
            <div className="text-[11px] sm:text-xs text-neutral-600 pt-1">
              <span>Prepared by </span>
              <span className="font-semibold text-neutral-900">Firefly Management</span>
              <span> · Confidential strategy presentation for candidate &amp; campaign advisory board.</span>
            </div>
          </div>

          {/* Column 2: High-Resolution Maritime Imagery (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-full min-h-[340px] lg:min-h-full rounded-xl overflow-hidden border border-neutral-200 shadow-sm relative group bg-neutral-900">
              <img
                src={heroPortImage}
                alt="Port of Mombasa and Kilindini Harbour maritime channel at dusk"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  The Coastal Gateway
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Kilindini Harbour &amp; Port of Mombasa
                </h3>
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  The catalyst of coastal prosperity: restoring local value-addition, manufacturing jobs, 
                  and maritime enterprise to Mombasa’s six sub-counties.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
