import React from 'react';
import { executiveSummary } from '../content/executiveSummaryData.ts';
import { Clock, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { TurnoutWaffleChart } from './visuals/TurnoutWaffleChart.tsx';
import { ElectoralWaterfall } from './visuals/ElectoralWaterfall.tsx';
import { CampaignKPIRibbon } from './visuals/CampaignKPIRibbon.tsx';

interface ExecutiveSummaryViewProps {
  onNavigate: (sectionId: string) => void;
}

export const ExecutiveSummaryView: React.FC<ExecutiveSummaryViewProps> = ({ onNavigate }) => {
  return (
    <section id="overview" className="py-10 sm:py-14 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-200 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
              <span>Executive Briefing</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-sky-800 font-bold">
                <Clock className="w-3.5 h-3.5" /> 2-Minute Candidate Read
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight mt-1 leading-tight">
              The Path to a Decisive 2027 Victory
            </h2>
          </div>
          <div className="text-xs text-neutral-600 sm:text-right">
            <span>Prepared for: </span>
            <span className="font-bold text-neutral-950">{executiveSummary.candidate}</span>
            <span className="block text-neutral-500">{executiveSummary.preparedBy}</span>
          </div>
        </div>

        {/* Executive KPI Balance Sheet Ribbon (Visual Guide §4.10) */}
        <CampaignKPIRibbon />

        {/* The Core Strategic Thesis Callout */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200/90 p-5 sm:p-8 shadow-xs">
          <div className="max-w-4xl space-y-3">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-sky-800 font-mono">
              The Core Strategic Thesis
            </span>
            <p className="text-base sm:text-xl font-bold text-neutral-950 leading-relaxed">
              "{executiveSummary.coreThesis}"
            </p>
            <div className="pt-2 text-xs text-neutral-600">
              Based on official IEBC 2022 voter audit and KNBS demographic data · Zero individual personal data profiling.
            </div>
          </div>
        </div>

        {/* Quantitative Bento Grid (Visual Handbook §2.2 & §9 - Varied tile sizes on strict grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-5">
          {/* Tile 1: Dominant Anchor (spans 6 cols on lg) */}
          <div className="lg:col-span-6 bg-slate-950 text-white rounded-xl sm:rounded-2xl p-5 sm:p-7 flex flex-col justify-between space-y-4 border border-slate-800 shadow-md">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Primary Electorate Opportunity
                </span>
                <span className="text-[10px] font-mono bg-slate-900 border border-slate-700 px-2 py-0.5 rounded text-slate-300">
                  IEBC 2022 Official Audit
                </span>
              </div>
              <div className="mt-3">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tabular-nums text-white block">
                  641,913
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 block mt-1 font-mono">
                  Official Registered Electorate · 65.9% Abstained
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Over 424,000 registered voters stayed home in 2022 due to economic exhaustion and political fatigue. 
              A disciplined, segment-specific mobilisation engine that lifts county turnout to 55% adds over 130,000 fresh votes into play.
            </p>

            {/* Visual ratio strip inside the tile */}
            <div className="pt-2 border-t border-slate-800 space-y-1.5">
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>Voted 2022: 217k (34.1%)</span>
                <span className="text-amber-300 font-bold">Unmobilised: 424k (65.9%)</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-slate-600" style={{ width: '34.1%' }} />
                <div className="h-full bg-amber-400" style={{ width: '65.9%' }} />
              </div>
            </div>
          </div>

          {/* Tile 2: Geographic Vote Engine (spans 6 cols on lg) */}
          <div className="lg:col-span-6 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 flex flex-col justify-between space-y-4 border border-neutral-200/90 shadow-2xs">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-neutral-200 pb-3">
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
                  Geographic Concentration
                </span>
                <span className="text-[10px] font-mono bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 rounded font-semibold">
                  67% County Weight
                </span>
              </div>
              <div className="mt-3">
                <span className="text-3xl sm:text-4xl font-black font-mono tabular-nums text-neutral-950 block">
                  3 Sub-Counties
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-700 block mt-1 font-mono">
                  The Decisive 427,000-Vote Axis
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              Kisauni (135k), Nyali (124k), and Changamwe/Jomvu (168k) contain over two-thirds of the county's voting power. 
              Organising transport logistics workers, small traders, and youth across these corridors guarantees decisive victory.
            </p>

            <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-mono text-neutral-600">
              <span className="font-bold text-sky-800">Key Focus:</span> Kongowea, Bamburi, Magogoni, Airport, Port Basin.
            </div>
          </div>

          {/* Tile 3: Economic Policy Anchor (spans 6 cols on lg) */}
          <div className="lg:col-span-6 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-3 border border-neutral-200/90 shadow-2xs">
            <div>
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 block">
                Grassroots Liquidity Commitment
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-mono tabular-nums block mt-1">
                KES 500M Guarantee
              </span>
              <span className="text-[11px] font-mono font-bold text-neutral-700 uppercase block mt-0.5">
                Single Permit &amp; Micro-Enterprise Fund
              </span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Replacing 5 overlapping daily county permits with a single digital annual cess sticker saves traders KES 21,900 yearly, 
              securing unassailable loyalty across Kongowea, Marikiti, and Likoni open markets.
            </p>
          </div>

          {/* Tile 4: Job Execution Credibility (spans 6 cols on lg) */}
          <div className="lg:col-span-6 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-3 border border-neutral-200/90 shadow-2xs">
            <div>
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-indigo-800 block">
                Industrial Revival &amp; Value Addition
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-mono tabular-nums block mt-1">
                100,000 Direct Jobs
              </span>
              <span className="text-[11px] font-mono font-bold text-neutral-700 uppercase block mt-0.5">
                Dongo Kundu SEZ &amp; Maritime Revival
              </span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Leveraging Suleiman Shahbal's track record with TradeMark Africa and Buxton Point to restore local port clearing value, 
              cold storage infrastructure, and free-port industrial enterprise.
            </p>
          </div>
        </div>

        {/* Visual System Feature 1: 10x10 Waffle Grid (Part-to-Whole Electorate) */}
        <TurnoutWaffleChart />

        {/* Visual System Feature 2: Explanatory Arithmetic Waterfall (Turnout x Target = Victory) */}
        <ElectoralWaterfall />

        {/* Five Strategic Imperatives: Natural Human Editorial Numbering */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
          <div className="border-b border-neutral-200 pb-4">
            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
              Five Immediate Strategic Imperatives
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Prioritised execution sequence for the campaign secretariat over the 12-week sprint and pre-election period.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveSummary.fiveStrategicImperatives.map((imp, idx) => (
              <div key={idx} className="space-y-2 p-4 rounded-lg bg-neutral-50/70 border border-neutral-200/80">
                <span className="text-xs font-bold text-neutral-900 block font-mono">
                  {imp.step}
                </span>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {imp.summary}
                </p>
              </div>
            ))}

            {/* Quick Action Navigation Card */}
            <div className="p-4 rounded-lg bg-neutral-900 text-white flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block font-mono">
                  Operational Next Steps
                </span>
                <p className="text-xs text-neutral-300 mt-1">
                  Dive into the ward-by-ward data or review the platform content calendar.
                </p>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => onNavigate('wards')}
                  className="w-full flex items-center justify-between text-xs font-semibold py-2 px-3 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-100 transition-colors"
                >
                  <span>Review 30 Wards Data</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('persuasion')}
                  className="w-full flex items-center justify-between text-xs font-semibold py-2 px-3 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-100 transition-colors"
                >
                  <span>Voter Segment Funnels</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
