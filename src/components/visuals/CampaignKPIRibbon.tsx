import React from 'react';
import { Users, Vote, TrendingUp, Award, MapPin, ShieldCheck, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const CampaignKPIRibbon: React.FC = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200/90 p-4 sm:p-6 lg:p-8 space-y-5 shadow-xs">
      {/* Header conforming to Visual Handbook §4.12: Headline states empirical finding */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-4">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-800 block">
            Campaign Vital Signs · Executive KPI Strip
          </span>
          <h3 className="text-base sm:text-xl font-extrabold text-neutral-950 mt-0.5 leading-snug">
            Mombasa 2027 Balance Sheet: 243,000 Target Votes from 424,725 Unmobilised Electorate
          </h3>
          <p className="text-xs text-neutral-600 mt-0.5">
            Core performance indicators with historical trajectories, comparative target thresholds, and directional shift metrics.
          </p>
        </div>
        <span className="text-[10px] sm:text-[11px] font-mono bg-neutral-100 text-neutral-700 border border-neutral-200 px-2.5 py-1 rounded-md self-start sm:self-auto font-medium">
          Bullet Charts &amp; Sparklines (§4.10)
        </span>
      </div>

      {/* KPI 6-Grid with Sparklines & Comparative Threshold Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
        
        {/* Metric 1: Gazetted Roll */}
        <div className="p-3 sm:p-3.5 bg-neutral-50/90 rounded-xl border border-neutral-200/80 flex flex-col justify-between space-y-2">
          <div>
            <div className="flex items-center justify-between text-neutral-500">
              <span className="text-[10px] font-mono uppercase font-bold text-neutral-600">Gazetted Roll</span>
              <Users className="w-3.5 h-3.5 text-neutral-700" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-neutral-950 font-mono tabular-nums mt-1">
              641,913
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-semibold mt-0.5">
              <span>▲ +10.9%</span>
              <span className="text-neutral-500 font-normal">vs 2017</span>
            </div>
          </div>

          {/* SVG Sparkline: 2013 (434k) -> 2017 (580k) -> 2022 (642k) -> 2027 (813k) */}
          <div className="space-y-1 pt-1">
            <div className="h-6 w-full flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 24">
                <path d="M 0,20 L 33,14 L 66,10 L 100,2" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
                <circle cx="0" cy="20" r="2" fill="#0284c7" />
                <circle cx="33" cy="14" r="2" fill="#0284c7" />
                <circle cx="66" cy="10" r="2" fill="#0284c7" />
                <circle cx="100" cy="2" r="2.5" fill="#0369a1" />
              </svg>
            </div>
            {/* Bullet bar with full roll baseline */}
            <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-sky-700 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        {/* Metric 2: 2022 Turnout Baseline */}
        <div className="p-3 sm:p-3.5 bg-neutral-50/90 rounded-xl border border-neutral-200/80 flex flex-col justify-between space-y-2">
          <div>
            <div className="flex items-center justify-between text-neutral-500">
              <span className="text-[10px] font-mono uppercase font-bold text-neutral-600">2022 Turnout</span>
              <Vote className="w-3.5 h-3.5 text-amber-600" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-amber-700 font-mono tabular-nums mt-1">
              34.1%
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-rose-700 font-semibold mt-0.5">
              <span>▼ -32.8%</span>
              <span className="text-neutral-500 font-normal">vs 2017 (67%)</span>
            </div>
          </div>

          {/* SVG Sparkline: 2013 (66%) -> 2017 (67%) -> 2022 (34%) */}
          <div className="space-y-1 pt-1">
            <div className="h-6 w-full flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 24">
                <path d="M 0,4 L 40,3 L 100,22" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                <circle cx="0" cy="4" r="2" fill="#d97706" />
                <circle cx="40" cy="3" r="2" fill="#d97706" />
                <circle cx="100" cy="22" r="2.5" fill="#b45309" />
              </svg>
            </div>
            {/* Bullet bar with 34.1% fill */}
            <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-amber-600 rounded-full" style={{ width: '34.1%' }} />
            </div>
          </div>
        </div>

        {/* Metric 3: Target Turnout */}
        <div className="p-3 sm:p-3.5 bg-neutral-50/90 rounded-xl border border-neutral-200/80 flex flex-col justify-between space-y-2">
          <div>
            <div className="flex items-center justify-between text-neutral-500">
              <span className="text-[10px] font-mono uppercase font-bold text-neutral-600">Target Turnout</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-800 font-mono tabular-nums mt-1">
              55.0%
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-semibold mt-0.5">
              <span>▲ +20.9%</span>
              <span className="text-neutral-500 font-normal">Mobilisation Lift</span>
            </div>
          </div>

          {/* Bullet Bar with Comparative Target Threshold Tick (§4.10) */}
          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[10px] font-mono text-neutral-500">
              <span>34.1% Base</span>
              <span className="font-bold text-emerald-800">55% Target</span>
            </div>
            <div className="relative h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600 rounded-full" style={{ width: '55%' }} />
              {/* Target tick marker */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-neutral-900 z-10" style={{ left: '55%' }} />
            </div>
          </div>
        </div>

        {/* Metric 4: Victory Mandate (Dark Accent Hero Card) */}
        <div className="p-3 sm:p-3.5 bg-slate-950 text-white rounded-xl border border-slate-800 flex flex-col justify-between space-y-2 shadow-sm">
          <div>
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[10px] font-mono uppercase font-bold text-amber-400">Winning Votes</span>
              <Award className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums mt-1">
              243,000
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-amber-300 font-semibold mt-0.5">
              <span>55% of Cast Ballots</span>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>Threshold</span>
              <span className="text-amber-300 font-bold">50% + 1</span>
            </div>
            <div className="relative h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: '55%' }} />
              <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10" style={{ left: '50%' }} />
            </div>
          </div>
        </div>

        {/* Metric 5: Mega Polling Hubs */}
        <div className="p-3 sm:p-3.5 bg-neutral-50/90 rounded-xl border border-neutral-200/80 flex flex-col justify-between space-y-2">
          <div>
            <div className="flex items-center justify-between text-neutral-500">
              <span className="text-[10px] font-mono uppercase font-bold text-neutral-600">Mega Hubs (&gt;5k)</span>
              <MapPin className="w-3.5 h-3.5 text-neutral-700" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-neutral-950 font-mono tabular-nums mt-1">
              37 Hubs
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-sky-800 font-semibold mt-0.5">
              <span>50.2%</span>
              <span className="text-neutral-500 font-normal">of County Total</span>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[10px] font-mono text-neutral-500">
              <span>37 of 1,040 Stns</span>
              <span className="font-bold">50.2% Vol</span>
            </div>
            <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-sky-800 rounded-full" style={{ width: '50.2%' }} />
            </div>
          </div>
        </div>

        {/* Metric 6: Station Defense Protection */}
        <div className="p-3 sm:p-3.5 bg-neutral-50/90 rounded-xl border border-neutral-200/80 flex flex-col justify-between space-y-2">
          <div>
            <div className="flex items-center justify-between text-neutral-500">
              <span className="text-[10px] font-mono uppercase font-bold text-neutral-600">Station Defense</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-neutral-950 font-mono tabular-nums mt-1">
              2,080
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-semibold mt-0.5">
              <span>100% Coverage</span>
              <span className="text-neutral-500 font-normal">2 / Stream</span>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[10px] font-mono text-neutral-500">
              <span>1,040 Streams</span>
              <span className="font-bold text-emerald-800">2,080 Agents</span>
            </div>
            <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
