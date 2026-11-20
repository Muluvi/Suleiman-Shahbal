"use client";

import { motion } from "motion/react";
import { DURATION } from "../lib/motion";
import { useState } from "react";

import { Play, Pause, ArrowRight, Radio, RefreshCw } from "lucide-react";
import { IllustrativeTag } from "./premium/IllustrativeTag";

// ==========================================
// 3. OPERATIONS & ARCHITECTURE VISUAL AIDS
// ==========================================

// 2. Operational Flywheel Schematic (Animated SVG flow diagram)
export function FlywheelSchematic() {
  return (
    <div className="bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6">
      <h4 className="font-serif text-sm font-bold text-ink mb-4">Integrated Feedback Flow Circuit</h4>
      <div className="w-full h-32 flex items-center justify-center bg-paper border border-line rounded-xl relative overflow-hidden">
        <svg className="w-full h-full max-w-xs overflow-visible" viewBox="0 0 300 120">
          {/* Box 1 */}
          <rect x="10" y="40" width="70" height="40" rx="6" className="fill-card stroke-accent stroke-[1.5]" />
          <text x="45" y="64" textAnchor="middle" className="fill-ink font-serif t-micro font-black">OFFLINE SMS</text>
          
          {/* Flow Arrow 1 */}
          <path d="M 80 60 L 110 60" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="3 3" />
          
          {/* Box 2 */}
          <rect x="115" y="40" width="70" height="40" rx="6" className="fill-card stroke-gold stroke-[1.5]" />
          <text x="150" y="64" textAnchor="middle" className="fill-ink font-serif t-micro font-black">CLOUD SYNC</text>
          
          {/* Flow Arrow 2 */}
          <path d="M 185 60 L 215 60" stroke="var(--color-gold)" strokeWidth="2" strokeDasharray="3 3" />
          
          {/* Box 3 */}
          <rect x="220" y="40" width="70" height="40" rx="6" className="fill-card stroke-accent stroke-[1.5]" />
          <text x="255" y="64" textAnchor="middle" className="fill-ink font-serif t-micro font-black">SECRETARIAT</text>
        </svg>
        <span className="absolute bottom-2 right-3 t-micro font-extrabold text-muted flex items-center gap-1">
          <RefreshCw size={10} aria-hidden="true" /> Proposed synchronisation loop
        </span>
      </div>
    </div>
  );
}

// ==========================================
// 4. TACTICS & THEMES VISUAL AIDS
// ==========================================

// 1. Interactive Messaging Playground (Language Tabs)
export function MessagingPlayground() {
  const [lang, setLang] = useState<"en" | "sw" | "sh">("en");
  const messages = {
    en: { slogan: "The Builder. He Finishes What He Starts.", copy: "Water at the tap, jobs that stay in Mombasa, and a county that pays its bills." },
    sw: { slogan: "Mjenzi. Anayemaliza Anachoanza.", copy: "Maji mferejini, kazi zibaki Mombasa, na kaunti inayolipa madeni yake." },
    sh: { slogan: "Mjenzi, si Maneno", copy: "Ameshajenga, check mwenyewe. Sasa ni time ya mtaa wako." }
  };

  return (
    <div className="bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6">
      <IllustrativeTag />
      <h4 className="font-serif text-sm font-bold text-ink mb-3">Multilingual Campaign Slogan Selector</h4>
      <div className="flex gap-1 mb-4">
        {Object.keys(messages).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l as "en" | "sw" | "sh")}
            className={`flex-1 min-h-[2.75rem] t-label font-black py-2 rounded-lg border transition-all cursor-pointer ${
 lang === l ? "bg-accent-solid border-accent-solid text-on-accent" : "bg-paper border-line text-muted"
            }`}
          >
            {l === "en" ? "English" : l === "sw" ? "Kiswahili" : "Sheng"}
          </button>
        ))}
      </div>

      <div className="p-4 bg-paper border border-line rounded-xl">
        <span className="t-micro font-black text-accent leading-none">Aligned Brand Slogan</span>
        <h5 className="font-serif text-sm font-black text-ink mt-0.5">{messages[lang].slogan}</h5>
        <p className="t-label text-muted/90 mt-1 leading-relaxed">{messages[lang].copy}</p>
      </div>
    </div>
  );
}

// 2. Kiswahili Radio Aircover Dial (Animated SVG wavelength)
export function RadioAircoverDial() {
  return (
    <div className="bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6 flex items-center gap-5">
      <div className="relative w-16 h-16 shrink-0 flex items-center justify-center bg-accent/5 border border-accent/20 rounded-full text-accent">
        <Radio size={24} aria-hidden="true" />
      </div>
      <div>
        <h4 className="t-label font-bold text-ink leading-tight">Interactive FM Broadcasters Sync</h4>
        <p className="t-label text-muted mt-1 leading-snug">
          Syndicated audio broadcast network schedules cover 85% of Mombasa&apos;s offline districts.
        </p>
      </div>
    </div>
  );
}

// 5. Media Asset Playback (Campaign Audio Spot)
export function MediaPlaybackMockup() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm max-w-sm my-6 select-none">
      <IllustrativeTag />
      <div className="bg-paper border border-line rounded-xl aspect-video relative overflow-hidden flex items-center justify-center">
        {/* Soft background visual glow pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-gold/10" />
        <button
          type="button"
          aria-label={playing ? "Pause the Kiswahili radio commercial spot" : "Play the Kiswahili radio commercial spot"}
          aria-pressed={playing}
          onClick={() => setPlaying(!playing)}
          className="p-4 rounded-full bg-accent-solid text-on-accent hover:bg-accent/90 transition-all shadow-md relative z-10 cursor-pointer"
        >
          {playing ? <Pause size={20} aria-hidden="true" /> : <Play size={20} aria-hidden="true" className="ml-0.5" />}
        </button>
        <span className="absolute bottom-2 left-3 t-micro font-black uppercase text-accent bg-card px-2 py-0.5 rounded border border-line">
          Kiswahili Radio Broadcast Player
        </span>
      </div>
      <div className="mt-3 flex justify-between items-center t-label font-bold text-ink">
        <span>Kiswahili Radio Commercial Spot</span>
        <span className="text-accent t-label font-black">0:45 Sec Broadcast</span>
      </div>
    </div>
  );
}

// 6. Interactive Tone-of-Voice Slider
export function ToneVoiceSlider() {
  const [sliderVal, setSliderVal] = useState<number>(60); // 0 = Technical, 100 = Grassroots

  const getToneDetails = (val: number) => {
    if (val < 35) {
      return {
        type: "Authoritative & Technical",
        accent: "text-accent",
        sloganEnglish: "Every county shilling published, and every pending bill paid, oldest first.",
        sloganKiswahili: "Kila shilingi ya kaunti itachapishwa, na kila deni litalipwa kuanzia la zamani zaidi.",
        focus: "Pending-bills schedule, own-source revenue, the Auditor-General's record, the single business permit."
      };
    } else if (val < 70) {
      return {
        type: "Balanced Competence",
        accent: "text-gold",
        sloganEnglish: "Water at the tap, jobs that stay in Mombasa, and a county that pays its bills.",
        sloganKiswahili: "Maji mferejini, kazi zibaki Mombasa, na kaunti inayolipa madeni yake.",
        focus: "The three pillars together: the SEZ as proof, the water record as the test, the tracker as the follow-through."
      };
    } else {
      return {
        type: "Empathetic & Grassroots",
        accent: "text-emerald-500",
        sloganEnglish: "He built it; come and see. Next, he builds for your estate.",
        sloganKiswahili: "Amejenga; njoo uone. Sasa atajenga kwa mtaa wako.",
        focus: "Stage and market visits, radio call-ins, WhatsApp voice notes, chamas and residents' associations."
      };
    }
  };

  const tone = getToneDetails(sliderVal);

  return (
    <div className="bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-6 bg-accent rounded-full" />
        <h4 className="font-serif text-sm font-bold text-ink">Interactive Communication Tone Guideline</h4>
      </div>
      <p className="t-label text-muted mb-4">
        Slide to dynamically adjust the campaign voice balance between technical policy and grassroots reach.
      </p>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center text-muted t-label uppercase font-black mb-2">
            <span>Authoritative Technical</span>
            <span>Empathetic Grassroots</span>
          </div>
          <div className="relative w-full flex items-center">
            <input
              id="tone-voice-slider"
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              // The two headings above the track are the visible label, but they are two separate
              // spans at either end of a flex row — there is no single element a <label for> could
              // point at that reads as one name. aria-valuetext replaces the bare percentage the
              // screen reader would otherwise announce with the thing the number means.
              aria-label="Campaign voice balance, from authoritative technical to empathetic grassroots"
              aria-valuetext={`${sliderVal} percent grassroots weight — ${tone.type}`}
              onChange={(e) => setSliderVal(parseInt(e.target.value))}
              className="w-full accent-accent h-2 bg-line/60 rounded-full cursor-pointer appearance-none"
            />
          </div>
          <div className="flex justify-between t-micro font-bold text-muted/80 mt-1">
            <span>0% Technical</span>
            <span className="font-black text-accent">{sliderVal}% Grassroots Weight</span>
            <span>100% Grassroots</span>
          </div>
        </div>

        <motion.div 
          key={tone.type}
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.quick }}
          className="p-4 bg-paper border border-line rounded-xl space-y-3"
        >
          <div>
            <span className="t-micro font-black text-muted">Active Slogan Archetype</span>
            <h5 className={`font-serif t-label font-black ${tone.accent} mt-0.5`}>{tone.type}</h5>
          </div>

          <div className="space-y-2">
            <div>
              <span className="t-micro font-extrabold text-muted">English Guideline</span>
              <p className="t-label text-ink font-medium leading-relaxed italic">&ldquo;{tone.sloganEnglish}&rdquo;</p>
            </div>
            <div>
              <span className="t-micro font-extrabold text-muted">Kiswahili Slogan Variant</span>
              <p className="t-label text-ink/90 font-medium leading-relaxed italic">&ldquo;{tone.sloganKiswahili}&rdquo;</p>
            </div>
            <div className="pt-2 border-t border-line/40">
              <span className="t-micro font-extrabold text-muted block mb-0.5">Campaign Focus Elements</span>
              <p className="t-label text-muted leading-relaxed font-bold">{tone.focus}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// 7. Interactive Slogan Builder
export function SloganBuilder() {
  const pillars = ["Mjenzi", "Maji Mferejini", "Kazi Zibaki Mombasa", "Transparency", "Equity"];
  const [selectedPillars, setSelectedPillars] = useState<string[]>(["Mjenzi", "Maji Mferejini"]);

  const handleToggle = (pill: string) => {
    if (selectedPillars.includes(pill)) {
      setSelectedPillars(selectedPillars.filter((p) => p !== pill));
    } else {
      setSelectedPillars([...selectedPillars, pill]);
    }
  };

  return (
    <div className="bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6">
      <IllustrativeTag />
      <h4 className="font-serif text-sm font-bold text-ink mb-3">Modular Slogan Sandbox</h4>
      <div className="flex flex-wrap gap-2 mb-4">
        {pillars.map((pill) => {
          const isSelected = selectedPillars.includes(pill);
          return (
            <button
              key={pill}
              onClick={() => handleToggle(pill)}
              className={`t-label font-extrabold uppercase py-1 px-3 rounded-full border transition-all cursor-pointer ${
 isSelected ? "bg-gold-solid border-gold-solid text-on-gold" : "bg-paper border-line text-muted hover:border-gold/30"
              }`}
            >
              {pill}
            </button>
          );
        })}
      </div>

      <div className="p-4 bg-paper border border-line rounded-xl flex items-center justify-between">
        <div>
          <span className="t-micro font-extrabold text-muted">Generated Tagline</span>
          <p className="font-serif text-sm font-black text-ink mt-0.5 leading-none">
            {selectedPillars.length > 0 ? selectedPillars.join(" · ") : "Select Campaign Pillars"}
          </p>
        </div>
        <ArrowRight size={16} className="text-gold" />
      </div>
    </div>
  );
}

// ChartComponent used to be re-exported from here. Nothing imported it through this module — but
// the re-export pulled the charting runtime into StrategicAids, which MarkdownViewer imports
// statically, which put ~90 KB of recharts into the first load of a page that may never draw a
// recharts chart. Every chart that does need it already sits behind its own next/dynamic
// boundary; import it from ./ChartComponent directly if it is ever wanted again.
