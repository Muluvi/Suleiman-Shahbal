import React from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import heroPortImage from '../assets/images/hero_mombasa_port_skyline_1792778749230.jpg';

interface HeroSectionProps {
  onExploreSection: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreSection }) => {
  return (
    <section className="relative bg-white border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Editorial Strategy Brief (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Unboxed clean metadata line */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                <span>County 001: Mombasa</span>
                <span aria-hidden="true">·</span>
                <span>August 2027 General Election</span>
                <span aria-hidden="true">·</span>
                <span>Gubernatorial Strategy Proposal</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Mobilising the Decisive Electorate for Suleiman Shahbal
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                A data-grounded, segment-by-segment digital campaign strategy designed to activate Mombasa’s 
                unheard majority—turning 424,000 non-voters and emerging Gen-Z registrants into a disciplined, 
                unstoppable turnout engine behind proven economic leadership.
              </p>
            </div>

            {/* Quick Strategic Key Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-neutral-200">
              <div>
                <span className="block text-2xl font-bold text-neutral-900 font-mono tabular-nums">641,913</span>
                <span className="text-xs text-neutral-500">Official IEBC 2022 Voters</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-neutral-900 font-mono tabular-nums">34.1%</span>
                <span className="text-xs text-neutral-500">2022 Turnout Baseline</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-neutral-900 font-mono tabular-nums">30 Wards</span>
                <span className="text-xs text-neutral-500">Across 6 Sub-Counties</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-neutral-900 font-mono tabular-nums">KES 500M</span>
                <span className="text-xs text-neutral-500">Trader Credit Guarantee</span>
              </div>
            </div>

            {/* CTA and Context Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onExploreSection('overview')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <span>Read 2-Minute Candidate Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onExploreSection('wards')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-700 bg-neutral-100 rounded-lg hover:bg-neutral-200 hover:text-neutral-950 transition-colors"
              >
                <Compass className="w-4 h-4 text-neutral-500" />
                <span>Explore 30-Ward Framework</span>
              </button>
            </div>

            {/* Authoritative Citation Footnote */}
            <div className="text-xs text-neutral-500 pt-1">
              <span>Prepared by </span>
              <span className="font-semibold text-neutral-800">Firefly Management</span>
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
