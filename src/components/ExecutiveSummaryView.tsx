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
    <section id="overview" className="py-12 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span>Executive Briefing</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-neutral-700">
                <Clock className="w-3.5 h-3.5" /> 2-Minute Candidate Read
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
              The Path to a Decisive 2027 Victory
            </h2>
          </div>
          <div className="text-xs text-neutral-500 sm:text-right">
            <span>Prepared for: </span>
            <span className="font-semibold text-neutral-900">{executiveSummary.candidate}</span>
            <span className="block">{executiveSummary.preparedBy}</span>
          </div>
        </div>

        {/* Executive KPI Balance Sheet Ribbon (Visual Guide §4.10) */}
        <CampaignKPIRibbon />

        {/* The Core Strategic Thesis Callout */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 shadow-xs">
          <div className="max-w-4xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              The Core Strategic Thesis
            </span>
            <p className="text-lg sm:text-xl font-medium text-neutral-900 leading-relaxed">
              "{executiveSummary.coreThesis}"
            </p>
            <div className="pt-2 text-xs text-neutral-500">
              Based on official IEBC 2022 voter audit and KNBS demographic data · Zero individual personal data profiling.
            </div>
          </div>
        </div>

        {/* 4 Quantitative Anchor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {executiveSummary.keyPillarsSummary.map((pillar, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-6 flex flex-col justify-between space-y-4 hover:border-neutral-300 transition-colors">
              <div>
                <span className="text-3xl font-extrabold text-neutral-900 font-mono tabular-nums block">
                  {pillar.metric}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 block mt-1">
                  {pillar.sublabel}
                </span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed pt-2 border-t border-neutral-100">
                {pillar.insight}
              </p>
            </div>
          ))}
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
