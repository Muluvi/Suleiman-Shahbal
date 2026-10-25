import React, { useState } from 'react';
import { Users, UserCheck, CheckCircle2, Vote, ArrowDown, ChevronRight, HelpCircle, ShieldAlert } from 'lucide-react';

interface FunnelStage {
  id: string;
  name: string;
  percentage: number;
  estCount: string;
  swahiliLabel: string;
  leakageRisk: string;
  mitigationTactic: string;
  primaryChannels: string[];
  icon: React.ReactNode;
}

export const VoterConversionFunnel: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('stage-turnout');

  const funnelStages: FunnelStage[] = [
    {
      id: 'stage-awareness',
      name: 'Stage 1: Demographic Reach & Awareness',
      percentage: 100,
      estCount: '641,913 Target Electors',
      swahiliLabel: 'Kutambua na Kusikia Sera za Shahbal',
      leakageRisk: 'Passive social scrolling without retention or localized ward relevance.',
      mitigationTactic: 'Hyper-localized TikTok explainers, vernacular Coastal radio, and ward WhatsApp channel broadcasts.',
      primaryChannels: ['TikTok Coastal Creators', 'Baraza Radio', 'Ward Community WhatsApp', 'Outdoor Billboards'],
      icon: <Users className="w-4 h-4 text-neutral-700" />,
    },
    {
      id: 'stage-registration',
      name: 'Stage 2: Active Registration & Roll Verification',
      percentage: 78,
      estCount: '500,000+ Verified on Roll',
      swahiliLabel: 'Kuhakiki Daftari la IEBC na Kituo cha Kupigia Kura',
      leakageRisk: 'Transferred residence or missing ID without updating polling station before ECVR deadline.',
      mitigationTactic: 'USSD / SMS Polling Station Verification Bot and ward-level digital registration clinics.',
      primaryChannels: ['SMS Verification Portal', 'Ward Youth Helpdesks', 'Huduma Centre Mobilisation'],
      icon: <UserCheck className="w-4 h-4 text-neutral-700" />,
    },
    {
      id: 'stage-persuasion',
      name: 'Stage 3: Policy Commitment & Ground Activation',
      percentage: 54,
      estCount: '345,000 Pledged Supporters',
      swahiliLabel: 'Kukubali Ajenda ya Uchumi na Kujiunga na Jeshi la Shahbal',
      leakageRisk: 'Opponent tribal/partisan wedge attacks, voter apathy, and unverified rumors.',
      mitigationTactic: 'Direct engagement around Buxton housing model, Jomvu SEZ industrial jobs, and single business permit relief.',
      primaryChannels: ['Ward Townhalls', 'Trader Market Caucuses', 'Spokesperson Rebuttals', 'WhatsApp Groups'],
      icon: <CheckCircle2 className="w-4 h-4 text-neutral-700" />,
    },
    {
      id: 'stage-turnout',
      name: 'Stage 4: Polling-Day Turnout (GOTV Victory Target)',
      percentage: 38,
      estCount: '243,000 Confirmed Ballots',
      swahiliLabel: 'Kupiga Kura Asubuhi na Kulinda Kura Vituoni',
      leakageRisk: 'Afternoon queue fatigue, Likoni ferry transit delays, bad weather, or voter intimidation.',
      mitigationTactic: 'Dawn caravan alarm ("Pambazuko ya Shahbal"), ferry passenger transport shuttles, and 2,080 accredited polling agents.',
      primaryChannels: ['Polling Station Captains', 'Morning SMS Wake-up Blitz', 'Ferry Rapid Shuttles', 'War Room Station Tracker'],
      icon: <Vote className="w-4 h-4 text-neutral-700" />,
    },
  ];

  const activeStage = funnelStages.find((s) => s.id === activeStageId) || funnelStages[3];

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              Visual 01 · Conversion Architecture
            </span>
            <span className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
              Funnel Flow (Visual Guide §4.9 &amp; §5.1)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Voter Mobilisation Conversion Funnel
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
            Transforming general coastal awareness into 240,000+ defended ballots across Mombasa&apos;s 1,040+ stations.
          </p>
        </div>

        <div className="bg-neutral-50 border border-neutral-200 px-4 py-2.5 rounded-lg shrink-0">
          <span className="text-[11px] font-mono uppercase text-neutral-500 block">GOTV Target Mandate</span>
          <span className="text-base font-extrabold text-neutral-900 font-mono">243,000 Votes (38%)</span>
        </div>
      </div>

      {/* Visual Funnel Graphic */}
      <div className="space-y-3 pt-2">
        {funnelStages.map((stage, idx) => {
          const isSelected = stage.id === activeStageId;
          const widthPercent = Math.max(stage.percentage, 28);

          return (
            <div key={stage.id} className="group cursor-pointer" onClick={() => setActiveStageId(stage.id)}>
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="font-semibold text-neutral-800 flex items-center gap-2">
                  {stage.icon}
                  {stage.name}
                </span>
                <span className="text-neutral-500">
                  {stage.estCount} ({stage.percentage}%)
                </span>
              </div>

              {/* Funnel Bar Container */}
              <div className="w-full bg-neutral-100 rounded-lg p-1 border border-neutral-200 transition-all hover:border-neutral-400">
                <div
                  className={`h-9 rounded-md transition-all flex items-center justify-between px-3 text-xs font-medium ${
                    isSelected
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300'
                  }`}
                  style={{ width: `${widthPercent}%` }}
                >
                  <span className="truncate pr-2 font-mono text-[11px]">
                    {stage.swahiliLabel}
                  </span>
                  <span className="font-mono text-[10px] shrink-0 font-bold opacity-80">
                    {stage.percentage}%
                  </span>
                </div>
              </div>

              {/* Funnel Stage Connector */}
              {idx < funnelStages.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-3.5 h-3.5 text-neutral-300" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Stage Deep Dive Inspector */}
      <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-neutral-500">Selected Stage Protocol:</span>
            <span className="text-xs font-bold text-neutral-900">{activeStage.name}</span>
          </div>
          <span className="text-xs font-mono text-neutral-600 bg-white px-2.5 py-1 rounded border border-neutral-200">
            Estimated Target Pool: {activeStage.estCount}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-3.5 rounded-lg border border-neutral-200 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-red-700">
              <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
              <span>Critical Leakage Risk</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              {activeStage.leakageRisk}
            </p>
          </div>

          <div className="bg-white p-3.5 rounded-lg border border-neutral-200 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Campaign Strategic Mitigation</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              {activeStage.mitigationTactic}
            </p>
          </div>
        </div>

        {/* Priority Tactical Channels */}
        <div className="pt-2">
          <span className="text-[11px] font-mono uppercase text-neutral-500 block mb-2 font-bold">
            Execution Channels for this Stage:
          </span>
          <div className="flex flex-wrap gap-2">
            {activeStage.primaryChannels.map((channel, i) => (
              <span
                key={i}
                className="bg-white border border-neutral-200 px-3 py-1 rounded-md text-xs font-medium text-neutral-800 shadow-2xs"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Pictogram Electorate Representation (Visual Guide §4.6) */}
      <div className="border-t border-neutral-200 pt-5 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-600">
          <span className="font-semibold text-neutral-800 uppercase">
            Electorate Magnitude Representation (1 Unit = 10,000 Voters)
          </span>
          <span>County Total: 641,913</span>
        </div>

        {/* Grid of 64 units */}
        <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
          {Array.from({ length: 64 }).map((_, i) => {
            // First 24 are Shahbal Victory Target (~240,000)
            const isShahbalTarget = i < 24;
            // 25 to 36 were 2022 winning votes (~119,000)
            const is2022Winner = i >= 24 && i < 36;
            return (
              <div
                key={i}
                title={
                  isShahbalTarget
                    ? `Shahbal 2027 Mobilisation Target (Units 1-24: 240k)`
                    : is2022Winner
                    ? `2022 Incumbent Vote Level (Units 25-36: ~119k)`
                    : `2022 Unvoted Reservoir (Units 37-64: ~280k)`
                }
                className={`h-5 rounded-xs flex items-center justify-center text-[9px] font-mono font-bold transition-all ${
                  isShahbalTarget
                    ? 'bg-neutral-900 text-white'
                    : is2022Winner
                    ? 'bg-neutral-400 text-white'
                    : 'bg-neutral-200 text-neutral-500'
                }`}
              >
                {i + 1}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-neutral-600 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-neutral-900 rounded-xs inline-block"></span>
            <span>Target 2027 Shahbal Mandate (24 units = 240,000 votes)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-neutral-400 rounded-xs inline-block"></span>
            <span>2022 Winning Vote (12 units = 119,083 votes)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-neutral-200 rounded-xs inline-block"></span>
            <span>Unvoted 2022 Reservoir (28 units = 282,000+ voters)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
