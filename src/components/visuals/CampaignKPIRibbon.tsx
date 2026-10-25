import React from 'react';
import { TrendingUp, Users, Vote, ShieldCheck, MapPin, Award } from 'lucide-react';

export const CampaignKPIRibbon: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
            Campaign Vital Signs · Executive KPI Strip
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
            Mombasa 2027 Strategic Balance Sheet
          </h3>
        </div>
        <span className="text-[11px] font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
          Bullet Charts &amp; Targets (Visual Guide §4.10)
        </span>
      </div>

      {/* KPI 6-Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* Metric 1 */}
        <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="text-[10px] font-mono uppercase font-bold">Gazetted Roll</span>
            <Users className="w-3.5 h-3.5 text-neutral-600" />
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-neutral-900 font-mono">
            641,913
          </div>
          <div className="text-[10px] font-mono text-neutral-500 truncate">
            County Code 001 Roll
          </div>
          {/* Bullet Bar */}
          <div className="h-1 w-full bg-neutral-200 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-neutral-900 rounded-full" style={{ width: '100%' }} />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="text-[10px] font-mono uppercase font-bold">2022 Turnout</span>
            <Vote className="w-3.5 h-3.5 text-amber-600" />
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-neutral-900 font-mono">
            34.1%
          </div>
          <div className="text-[10px] font-mono text-amber-700 truncate">
            424k Voters Stayed Home
          </div>
          {/* Bullet Bar */}
          <div className="h-1 w-full bg-neutral-200 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-amber-600 rounded-full" style={{ width: '34.1%' }} />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="text-[10px] font-mono uppercase font-bold">Target Turnout</span>
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-neutral-900 font-mono">
            55.0%
          </div>
          <div className="text-[10px] font-mono text-emerald-700 truncate">
            +20.9% Mobilisation Goal
          </div>
          {/* Bullet Bar with target threshold */}
          <div className="h-1 w-full bg-neutral-200 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-emerald-600 rounded-full" style={{ width: '55%' }} />
          </div>
        </div>

        {/* Metric 4 */}
        <div className="p-3.5 bg-neutral-900 text-white rounded-xl border border-neutral-900 space-y-1">
          <div className="flex items-center justify-between text-neutral-400">
            <span className="text-[10px] font-mono uppercase font-bold">Victory Mandate</span>
            <Award className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-white font-mono">
            243,000
          </div>
          <div className="text-[10px] font-mono text-neutral-300 truncate">
            Target Winning Votes
          </div>
          {/* Bullet Bar */}
          <div className="h-1 w-full bg-neutral-800 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full" style={{ width: '68%' }} />
          </div>
        </div>

        {/* Metric 5 */}
        <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="text-[10px] font-mono uppercase font-bold">Mega Hubs (&gt;5k)</span>
            <MapPin className="w-3.5 h-3.5 text-neutral-600" />
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-neutral-900 font-mono">
            37 Hubs
          </div>
          <div className="text-[10px] font-mono text-neutral-600 truncate">
            50.2% of County Vote
          </div>
          {/* Bullet Bar */}
          <div className="h-1 w-full bg-neutral-200 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-neutral-900 rounded-full" style={{ width: '50.2%' }} />
          </div>
        </div>

        {/* Metric 6 */}
        <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="text-[10px] font-mono uppercase font-bold">Station Defense</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-neutral-900 font-mono">
            2,080
          </div>
          <div className="text-[10px] font-mono text-neutral-600 truncate">
            2 Agents / 1,040 Stations
          </div>
          {/* Bullet Bar */}
          <div className="h-1 w-full bg-neutral-200 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-emerald-600 rounded-full" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
