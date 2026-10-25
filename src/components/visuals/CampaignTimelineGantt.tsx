import React, { useState } from 'react';
import { Calendar, Clock, Filter, CheckCircle2, ChevronRight, BarChart2, Layers } from 'lucide-react';

interface TimelineTrack {
  id: string;
  name: string;
  color: string;
  tasks: {
    title: string;
    startWeek: number;
    endWeek: number;
    deliverable: string;
  }[];
}

export const CampaignTimelineGantt: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [activeChannelFilter, setActiveChannelFilter] = useState<string>('all');

  const tracks: TimelineTrack[] = [
    {
      id: 'digital',
      name: 'Digital & Video Creation',
      color: 'bg-neutral-900',
      tasks: [
        { title: 'Listening Podcasts & Street Interviews', startWeek: 1, endWeek: 4, deliverable: '30 Ward mini-voxpops on local grievances' },
        { title: 'Buxton Housing & Jomvu SEZ Documentaries', startWeek: 4, endWeek: 8, deliverable: 'High-res policy explainers in Swahili' },
        { title: 'Rapid Rebuttal & Fact-Check Clips', startWeek: 7, endWeek: 12, deliverable: '60-min SLA video rebuttals to rumors' },
        { title: 'GOTV Dawn Wake-up Blitz Videos', startWeek: 11, endWeek: 12, deliverable: 'Candidate direct-to-camera voter appeal' },
      ],
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp & SMS Mobilisation',
      color: 'bg-emerald-700',
      tasks: [
        { title: 'Ward Community Channel Architecture', startWeek: 1, endWeek: 3, deliverable: '30 broadcast channels + 120 admin captains' },
        { title: 'Market Trader Daily Info Bulletins', startWeek: 4, endWeek: 9, deliverable: 'Audio notes on single permit savings' },
        { title: 'Polling Station Defense Network', startWeek: 9, endWeek: 12, deliverable: '2,080 agent verification & alert chain' },
      ],
    },
    {
      id: 'ground',
      name: 'Ground Townhalls & Barazas',
      color: 'bg-amber-700',
      tasks: [
        { title: 'Listening Tours (Changamwe & Likoni)', startWeek: 1, endWeek: 4, deliverable: 'Townhall grievances logged to policy desk' },
        { title: 'Mombasa Business & Port Roundtables', startWeek: 5, endWeek: 8, deliverable: 'Logistics sector compact & investor forum' },
        { title: 'Ward-by-Ward Mega Rallies & Caravans', startWeek: 9, endWeek: 12, deliverable: 'High-density turnouts at 37 mega-centres' },
      ],
    },
    {
      id: 'radio',
      name: 'Coastal Vernacular Radio',
      color: 'bg-blue-700',
      tasks: [
        { title: 'Morning Breakfast Interviews (Rahma, Baraka)', startWeek: 2, endWeek: 6, deliverable: 'Economic agenda anchoring & caller Q&A' },
        { title: 'Swahili Talkshows & Youth Panels', startWeek: 6, endWeek: 10, deliverable: 'Blue economy & tourism revival talks' },
        { title: 'Continuous Voter Mobilisation J愿gles', startWeek: 10, endWeek: 12, deliverable: 'Daily saturation before voting day' },
      ],
    },
  ];

  const weeks = Array.from({ length: 12 }, (_, i) => i + 1);

  const getWeekPhase = (w: number) => {
    if (w <= 4) return { name: 'Phase 1: Ground Listening & Ingestion', badge: 'Weeks 01–04' };
    if (w <= 8) return { name: 'Phase 2: Economic Manifesto & Proof Blitz', badge: 'Weeks 05–08' };
    return { name: 'Phase 3: Station Defense & GOTV Surge', badge: 'Weeks 09–12' };
  };

  const currentPhase = getWeekPhase(selectedWeek);

  const filteredTracks = activeChannelFilter === 'all'
    ? tracks
    : tracks.filter(t => t.id === activeChannelFilter);

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Visual Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              Visual 03 · Campaign Operations Roadmap
            </span>
            <span className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
              Gantt / Timeline (Visual Guide §5.3)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            12-Week Interactive Campaign Execution Gantt
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
            Synchronised cross-channel timeline balancing digital reach with ward-level voter mobilisation.
          </p>
        </div>

        {/* Channel Filter */}
        <div className="flex flex-wrap items-center gap-1.5 shrink-0">
          <button
            onClick={() => setActiveChannelFilter('all')}
            className={`px-2.5 py-1 text-xs font-mono font-semibold rounded-md transition-all ${
              activeChannelFilter === 'all'
                ? 'bg-neutral-900 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            All Tracks
          </button>
          {tracks.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveChannelFilter(t.id)}
              className={`px-2.5 py-1 text-xs font-mono font-semibold rounded-md transition-all ${
                activeChannelFilter === t.id
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {t.name.split('&')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Week Selector Ribbon */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-neutral-500">Click a week to view scheduled operational priorities:</span>
          <span className="font-bold text-neutral-900">
            Current Focus: Week {selectedWeek} ({currentPhase.badge})
          </span>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5">
          {weeks.map((w) => {
            const isSelected = w === selectedWeek;
            const phase = getWeekPhase(w);
            return (
              <button
                key={w}
                onClick={() => setSelectedWeek(w)}
                className={`py-2 px-1 text-center rounded-lg border text-xs font-mono transition-all ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs font-bold ring-2 ring-neutral-400'
                    : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-700'
                }`}
              >
                <span className="block text-[10px] text-neutral-400 font-normal">Wk</span>
                <span className="text-sm font-bold">{w}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gantt Timeline Grid */}
      <div className="overflow-x-auto border border-neutral-200 rounded-xl bg-neutral-50/50 p-4 space-y-4">
        {/* Phase Header Bands */}
        <div className="grid grid-cols-12 gap-1 text-[10px] font-mono text-center pb-2 border-b border-neutral-200">
          <div className="col-span-4 bg-neutral-200/60 p-1.5 rounded font-semibold text-neutral-700">
            Phase 1: Listening &amp; Ingestion (W1-4)
          </div>
          <div className="col-span-4 bg-neutral-200/60 p-1.5 rounded font-semibold text-neutral-700">
            Phase 2: Manifesto &amp; Proof Blitz (W5-8)
          </div>
          <div className="col-span-4 bg-neutral-200/60 p-1.5 rounded font-semibold text-neutral-700">
            Phase 3: Station Defense &amp; GOTV (W9-12)
          </div>
        </div>

        {/* Tracks */}
        <div className="space-y-4">
          {filteredTracks.map((track) => (
            <div key={track.id} className="space-y-1.5">
              <span className="text-xs font-mono font-bold text-neutral-900 block">
                {track.name}
              </span>

              <div className="space-y-1.5">
                {track.tasks.map((task, idx) => {
                  const leftCol = task.startWeek - 1;
                  const spanCols = task.endWeek - task.startWeek + 1;
                  const isActiveNow = selectedWeek >= task.startWeek && selectedWeek <= task.endWeek;

                  return (
                    <div key={idx} className="grid grid-cols-12 gap-1 items-center">
                      <div
                        className={`col-span-12 rounded-lg p-2.5 text-xs transition-all border ${
                          isActiveNow
                            ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                            : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300'
                        }`}
                        style={{
                          gridColumnStart: leftCol + 1,
                          gridColumnEnd: `span ${spanCols}`,
                        }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <span className="font-semibold truncate text-[11px] sm:text-xs">
                            {task.title}
                          </span>
                          <span className={`text-[10px] font-mono shrink-0 ${isActiveNow ? 'text-neutral-300' : 'text-neutral-500'}`}>
                            W{task.startWeek}–W{task.endWeek}
                          </span>
                        </div>
                        <p className={`text-[10px] mt-0.5 truncate ${isActiveNow ? 'text-neutral-300' : 'text-neutral-500'}`}>
                          Deliverable: {task.deliverable}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Share of Voice Stacked Bar (Visual Guide §4.7) */}
      <div className="border-t border-neutral-200 pt-5 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="font-semibold text-neutral-800 uppercase">
            Resource &amp; Share of Voice Distribution
          </span>
          <span className="text-neutral-500">100% Calibrated Multi-Channel Mix</span>
        </div>

        {/* 100% Stacked Bar */}
        <div className="h-6 w-full rounded-lg flex overflow-hidden border border-neutral-300 text-[10px] font-mono text-white font-bold">
          <div className="bg-neutral-900 h-full flex items-center justify-center" style={{ width: '35%' }} title="TikTok (35%)">
            TikTok (35%)
          </div>
          <div className="bg-emerald-700 h-full flex items-center justify-center" style={{ width: '30%' }} title="WhatsApp (30%)">
            WhatsApp (30%)
          </div>
          <div className="bg-neutral-600 h-full flex items-center justify-center" style={{ width: '20%' }} title="Facebook (20%)">
            FB (20%)
          </div>
          <div className="bg-blue-700 h-full flex items-center justify-center" style={{ width: '10%' }} title="Vernacular Radio (10%)">
            Radio (10%)
          </div>
          <div className="bg-neutral-400 h-full flex items-center justify-center" style={{ width: '5%' }} title="X & Press (5%)">
            X (5%)
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px] text-neutral-600 font-mono">
          <div><span className="font-bold text-neutral-900">TikTok:</span> Youth (18-29)</div>
          <div><span className="font-bold text-emerald-800">WhatsApp:</span> Traders &amp; GOTV</div>
          <div><span className="font-bold text-neutral-700">Facebook:</span> Diaspora &amp; Civic</div>
          <div><span className="font-bold text-blue-800">Radio:</span> Swahili Fisherfolk</div>
          <div><span className="font-bold text-neutral-600">X:</span> Journalists &amp; Elite</div>
        </div>
      </div>
    </div>
  );
};
