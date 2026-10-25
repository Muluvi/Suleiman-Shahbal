import React, { useState } from 'react';
import { Play, Pause, Zap, ShieldCheck, Compass, TrendingUp, Anchor, CheckCircle2 } from 'lucide-react';

export const LiveCampaignMarquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speed, setSpeed] = useState<'normal' | 'fast'>('normal');

  const metricItems = [
    { label: 'County 001', val: 'Mombasa Gubernatorial 2027', icon: Anchor, highlight: false },
    { label: 'Gazetted Voters', val: '813,435 IEBC Registered', icon: CheckCircle2, highlight: true },
    { label: 'Mobilisation Target', val: '424,000 Unmobilised Electorate', icon: TrendingUp, highlight: true },
    { label: 'Turnout Objective', val: '34.1% Baseline → 50.0% Target', icon: Compass, highlight: false },
    { label: 'Station Defense', val: '2,080 Polling Stream Agents', icon: ShieldCheck, highlight: true },
    { label: 'Trader Relief', val: 'KES 12,000 Single Permit Cess Cut', icon: Zap, highlight: true },
    { label: 'Capital Access', val: 'KES 500M SME Credit Guarantee', icon: CheckCircle2, highlight: false },
    { label: 'Urban Renewal', val: '1,842 Homes Delivered at Buxton Point', icon: Anchor, highlight: true },
    { label: 'Job Creation', val: '100,000 Port & Dongo Kundu SEZ Jobs', icon: TrendingUp, highlight: true },
    { label: 'Territory Reach', val: '30 Wards across 6 Sub-Counties', icon: Compass, highlight: false },
  ];

  const swahiliSlogans = [
    'Uchumi wa Mombasa Kwanza: Kazi, Haki na Maendeleo',
    'Uongozi wa vitendo, si maneno matupu',
    'Bandari yetu, ajira na fursa za vijana wa Mombasa',
    'Mama Mboga na madereva wa Tuk-Tuk kupata heshima, usalama na leseni nafuu',
    'Mombasa ya Kisasa: Makazi bora, maji safi na usafi wa mazingira',
    'Kura ya Maendeleo 2027: Kisauni, Nyali, Mvita, Likoni, Changamwe, Jomvu',
    'Huduma kwa Wote: Umoja na ustawi wa kiuchumi kwa wakazi wote',
  ];

  return (
    <section 
      aria-label="Live Campaign Metrics & Coastal Slogans Ticker"
      className="relative bg-slate-950 text-white border-y border-slate-800 overflow-hidden select-none"
    >
      {/* 4K Subtle Accent Top Bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-sky-500 via-amber-400 to-emerald-400 opacity-80" />

      {/* Control Bar: Accessibility & WCAG 2.2.2 Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-4 border-b border-slate-900 text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-400'} opacity-75`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isPaused ? 'bg-amber-500' : 'bg-emerald-500'}`} />
          </span>
          <span className="font-mono uppercase tracking-wider text-[11px] font-semibold text-slate-300">
            {isPaused ? 'Live Ticker Paused' : 'Live Campaign Intel Feed'}
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-400 text-[11px]">
            Official IEBC 2022 &amp; Firefly Strategy Data
          </span>
        </div>

        {/* User Motion Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSpeed(speed === 'normal' ? 'fast' : 'normal')}
            className="px-2 py-0.5 rounded text-[10px] font-mono font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            title="Toggle marquee animation speed"
          >
            Speed: {speed === 'normal' ? '1x' : '2x'}
          </button>
          
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-700 transition-colors"
            aria-label={isPaused ? 'Resume moving ticker' : 'Pause moving ticker for easier reading'}
          >
            {isPaused ? (
              <>
                <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                <span>Resume</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 text-amber-400" />
                <span>Pause</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Track 1: Quantitative Benchmarks & IEBC Targets (Moves Left) */}
      <div 
        className="py-2.5 overflow-hidden border-b border-slate-900/80 bg-slate-950/70"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div 
          className={`${speed === 'fast' ? 'animate-marquee-continuous-fast' : 'animate-marquee-continuous'} ${isPaused ? 'marquee-is-paused' : ''}`}
        >
          {/* Double items for seamless infinite scroll */}
          {[...metricItems, ...metricItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 px-4 sm:px-6 whitespace-nowrap text-xs shrink-0"
              >
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-sky-400">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block leading-tight">
                    {item.label}
                  </span>
                  <span className={`font-semibold font-mono tabular-nums text-xs sm:text-sm ${item.highlight ? 'text-amber-300' : 'text-slate-100'}`}>
                    {item.val}
                  </span>
                </div>
                <span className="text-slate-700 ml-3" aria-hidden="true">/</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Track 2: Coastal Swahili Slogans & Grassroots Messages (Moves Right) */}
      <div 
        className="py-2 overflow-hidden bg-slate-900/60"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div 
          className={`animate-marquee-continuous-reverse ${isPaused ? 'marquee-is-paused' : ''}`}
        >
          {/* Double items for seamless infinite reverse scroll */}
          {[...swahiliSlogans, ...swahiliSlogans].map((slogan, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 px-4 sm:px-6 whitespace-nowrap text-[11px] sm:text-xs text-slate-300 shrink-0 font-medium tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shrink-0" />
              <span>"{slogan}"</span>
              <span className="text-slate-700 ml-3" aria-hidden="true">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Subtle Gradient Border */}
      <div className="h-px w-full bg-slate-800" />
    </section>
  );
};
