import React, { useState } from 'react';
import { platformStrategies, contentPillars, swahiliSlogans, calendarWeeks, creatorStrategy } from '../content/contentPlanData.ts';
import { Calendar, Hash, Share2, Copy, Check, Users, Sparkles, Filter, Image } from 'lucide-react';
import { ShareableCardGenerator } from './visuals/ShareableCardGenerator.tsx';
import { CampaignTimelineGantt } from './visuals/CampaignTimelineGantt.tsx';
import fisheriesImage from '../assets/images/coastal_blue_economy_fisheries_1792778750283.jpg';

export const ContentPlanModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'platforms' | 'slogans' | 'creators' | 'shareables'>('calendar');
  const [filterPhase, setFilterPhase] = useState<string>('All');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopySlogan = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const filteredWeeks = calendarWeeks.filter((item) => {
    if (filterPhase === 'All') return true;
    return item.phase.includes(filterPhase);
  });

  return (
    <section id="content" className="py-10 sm:py-14 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <span>Module 03</span>
            <span aria-hidden="true">·</span>
            <span>Digital Distribution &amp; Editorial Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Social Media &amp; 12-Week Content Calendar
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            A comprehensive, multi-platform communication plan synchronising WhatsApp community broadcasts, 
            TikTok short-form storytelling, executive X policy debates, and an interactive 12-week pre-campaign sprint.
          </p>
        </div>

        {/* Sub-Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 border-b border-neutral-200 pb-2 overflow-x-auto no-scrollbar touch-pan-x">
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'calendar'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200'
            }`}
          >
            <span className="sm:hidden">12-Week Sprint</span>
            <span className="hidden sm:inline">Interactive 12-Week Sprint Calendar</span>
          </button>
          <button
            onClick={() => setActiveTab('shareables')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'shareables'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200'
            }`}
          >
            <span className="sm:hidden">WhatsApp Cards</span>
            <span className="hidden sm:inline">Shareable WhatsApp Cards</span>
          </button>
          <button
            onClick={() => setActiveTab('platforms')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'platforms'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200'
            }`}
          >
            <span className="sm:hidden">Platforms</span>
            <span className="hidden sm:inline">Platform Strategy Matrix</span>
          </button>
          <button
            onClick={() => setActiveTab('slogans')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'slogans'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200'
            }`}
          >
            <span className="sm:hidden">Slogans</span>
            <span className="hidden sm:inline">Swahili Slogans &amp; Hashtags</span>
          </button>
          <button
            onClick={() => setActiveTab('creators')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'creators'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200'
            }`}
          >
            <span className="sm:hidden">Creators</span>
            <span className="hidden sm:inline">Creator Collaboration Framework</span>
          </button>
        </div>

        {/* TAB 1: 12-Week Calendar */}
        {activeTab === 'calendar' && (
          <div className="space-y-8">
            
            {/* Visual Campaign Execution Gantt & Share-of-Voice (Visual Guide §5.3 & §4.7) */}
            <CampaignTimelineGantt />
            
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter by Phase:</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {['All', 'Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setFilterPhase(p)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      filterPhase === p
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'bg-white text-neutral-600 hover:bg-neutral-200 border border-neutral-200'
                    }`}
                  >
                    {p === 'All' ? 'All 12 Weeks' : p}
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar Weeks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWeeks.map((week) => (
                <div
                  key={week.week}
                  className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 flex flex-col justify-between space-y-4 hover:border-neutral-300 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-neutral-900 font-mono">
                        WEEK {week.week.toString().padStart(2, '0')}
                      </span>
                      <span className="text-xs font-medium text-neutral-500">
                        {week.phase.split(':')[0]}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-neutral-950 leading-snug">
                      {week.theme}
                    </h4>

                    {/* Deliverables */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-mono font-bold text-neutral-400 block uppercase">
                        Core Deliverables
                      </span>
                      {week.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="text-xs text-neutral-700 flex items-start gap-1.5 leading-relaxed">
                          <span className="text-neutral-400 font-mono mt-0.5">·</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-200 space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {week.platforms.map((plat, pIdx) => (
                        <span key={pIdx} className="bg-white border border-neutral-200 text-neutral-700 text-xs px-2 py-0.5 rounded font-medium">
                          {plat}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-neutral-500 font-mono">
                      <span className="font-semibold text-neutral-700">KPI:</span> {week.kpiGoal}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: Shareable WhatsApp Cards (Visual System Section 6.5) */}
        {activeTab === 'shareables' && (
          <ShareableCardGenerator />
        )}

        {/* TAB 2: Platform Strategy Matrix */}
        {activeTab === 'platforms' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformStrategies.map((p, idx) => (
              <div key={idx} className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                    <h3 className="text-base font-bold text-neutral-900">
                      {p.platform}
                    </h3>
                    <span className="text-xs font-mono text-neutral-500">
                      {p.cadence}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block uppercase">Target Audience</span>
                    <p className="text-xs text-neutral-700 mt-0.5 leading-relaxed">{p.audienceFocus}</p>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block uppercase">Mombasa Tone &amp; Style</span>
                    <p className="text-xs text-neutral-700 mt-0.5 leading-relaxed">{p.mombasaTone}</p>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block uppercase">Key Formats</span>
                    <ul className="mt-1 space-y-1">
                      {p.contentFormats.map((fmt, fIdx) => (
                        <li key={fIdx} className="text-xs text-neutral-600 flex items-start gap-1.5">
                          <span className="text-neutral-400 font-mono">·</span>
                          <span>{fmt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200 text-xs text-neutral-500 space-y-1 font-mono">
                  <div><span className="font-semibold text-neutral-800">Objective:</span> {p.strategicObjective}</div>
                  <div className="text-rose-900"><span className="font-semibold">Guardrail:</span> {p.riskMitigation}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: Swahili Slogans */}
        {activeTab === 'slogans' && (
          <div className="space-y-6">
            <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  Content Language Policy
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Swahili Slogans with High Coastal Cultural Resonance
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  While strategic planning and technical campaign coordination remain in British English, 
                  all public messaging, video hooks, and crowd chants must be grounded in dignified Coastal Swahili 
                  (Kimvita / Sanifu), avoiding alien political jargon.
                </p>
              </div>

              <div className="shrink-0 bg-neutral-800 p-4 rounded-lg border border-neutral-700 text-xs text-neutral-300">
                <span className="font-semibold block text-white mb-1">Top Campaign Hashtags:</span>
                <div className="font-mono space-y-0.5">
                  <div>#MombasaMpya</div>
                  <div>#KaziHalisi</div>
                  <div>#BandariYetuFaidaYetu</div>
                  <div>#Shahbal2027</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {swahiliSlogans.map((s, idx) => (
                <div key={idx} className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                        {s.tone}
                      </span>
                      <h4 className="text-lg font-bold text-neutral-900 mt-1">
                        "{s.slogan}"
                      </h4>
                      <p className="text-xs text-neutral-600 italic mt-0.5">
                        Translation: "{s.englishTranslation}"
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopySlogan(`${s.slogan} - ${s.suggestedHashtags.join(' ')}`, idx)}
                      className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-white rounded-md border border-neutral-200 transition-colors shrink-0"
                      title="Copy slogan and hashtags"
                    >
                      {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-xs text-neutral-700 leading-relaxed bg-white p-3 rounded-lg border border-neutral-200">
                    <span className="font-semibold text-neutral-900">Context:</span> {s.context}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {s.suggestedHashtags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono text-neutral-600 bg-white border border-neutral-200 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Creator Collaboration */}
        {activeTab === 'creators' && (
          <div className="space-y-8">
            <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-4">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">
                Influencer &amp; Creator Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                {creatorStrategy.philosophy}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Voters in Mombasa instantly recognize manufactured celebrity endorsements from Nairobi. 
                Instead, our strategy activates three distinct tiers of local creators who possess verified trust 
                within specific Mombasa wards and economic sub-sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {creatorStrategy.creatorTiers.map((tier, idx) => (
                <div key={idx} className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="border-b border-neutral-200 pb-3">
                      <span className="text-xs font-mono font-bold text-neutral-400 block uppercase">
                        {tier.reach}
                      </span>
                      <h4 className="text-base font-bold text-neutral-900 mt-1">
                        {tier.tier}
                      </h4>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-neutral-500 block uppercase">Strategic Role</span>
                      <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                        {tier.role}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-neutral-500 block uppercase">Deliverable</span>
                      <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                        {tier.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Safeguards Card */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-3">
              <h4 className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                Strict Creator Guardrails &amp; Compliance Standards
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {creatorStrategy.guardrails.map((g, idx) => (
                  <div key={idx} className="text-xs text-neutral-700 bg-neutral-50 p-3 rounded-lg border border-neutral-200 leading-relaxed">
                    {g}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
