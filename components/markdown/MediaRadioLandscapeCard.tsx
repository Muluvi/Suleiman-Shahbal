"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { disclosure } from "../../lib/motion";
import { Radio, Volume2, ShieldAlert, Play, Pause, Info } from "lucide-react";
import { RADIO_STATIONS as MEDIA_STATIONS } from "../../data/media-ownership";

type Allegiance = "Commercial" | "Faith / Community" | "Public / State";

interface RadioStation {
  name: string;
  frequency: string;
  ownership: string;
  politicalAllegiance: Allegiance;
  campaignPosture: string;
  isPriority: boolean;
  reachEstimate: string;
  recommendedSlot: string;
}

const allegianceOf = (alignment: string): Allegiance =>
  /State-owned/.test(alignment) ? "Public / State" : /Royal Media|Standard Group/.test(alignment) ? "Commercial" : "Faith / Community";

const SLOT: Record<string, string> = {
  "Bahari FM": "Morning drive and evening talk",
  "Radio Citizen": "Morning drive and county news",
  "Radio Maisha": "Morning drive and call-in shows",
  "Radio Rahma": "Community programming on water, health and jobs",
  "Radio Salaam": "Community programming on water, health and jobs",
  "Baraka FM": "Community programming on water, health and jobs",
  "Radio Kaya": "Mainland community features",
  "Pwani FM": "Civic education and debates",
};

/** Read from data/media-ownership.ts: no frequency or audience share is printed until a source gives one. */
const RADIO_STATIONS: RadioStation[] = MEDIA_STATIONS.map((s) => ({
  name: s.name,
  frequency: s.frequency ?? "Frequency: CA register",
  ownership: s.alignment,
  politicalAllegiance: allegianceOf(s.alignment),
  campaignPosture: s.posture,
  isPriority: /^Priority/.test(s.posture),
  reachEstimate: s.reachLabel,
  recommendedSlot: SLOT[s.name] ?? "To be set with the station",
}));
const PRIORITY = RADIO_STATIONS.filter((s) => s.isPriority);

export function MediaRadioLandscapeCard() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "priorityOnly">("all");
  const [playingSnippet, setPlayingSnippet] = useState<string | null>(null);

  const displayedStations = selectedFilter === "all"
    ? RADIO_STATIONS
    : RADIO_STATIONS.filter(s => s.isPriority);

  const toggleSnippet = (stationName: string) => {
    if (playingSnippet === stationName) {
      setPlayingSnippet(null);
    } else {
      setPlayingSnippet(stationName);
    }
  };

  return (
    <div className="my-6 sm:my-8 bg-card border border-line rounded-2xl shadow-sm overflow-hidden not-prose">
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-line bg-paper/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold shrink-0">
            <Radio size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="t-label font-extrabold text-accent bg-accent/10 px-2 py-0.5 rounded">
                Radio landscape
              </span>
              <span className="t-label font-mono font-bold text-muted">
                Kiswahili Radio Table
              </span>
            </div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-ink mt-0.5">
              Coast Radio: Ownership and Placement Map
            </h4>
          </div>
        </div>

        {/* Filter Switch */}
        <div
          role="group"
          aria-label="Network filter"
          className="flex items-center p-1 bg-paper border border-line rounded-xl"
        >
          <button
            type="button"
            onClick={() => setSelectedFilter("all")}
            aria-pressed={selectedFilter === "all"}
            className={`px-3 py-2 rounded-lg t-label font-bold transition-all cursor-pointer ${
 selectedFilter === "all" ? "bg-accent-solid text-on-accent shadow-sm" : "text-muted hover:text-ink"
            }`}
          >
            All {RADIO_STATIONS.length} Stations
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter("priorityOnly")}
            aria-pressed={selectedFilter === "priorityOnly"}
            className={`px-3 py-2 rounded-lg t-label font-bold transition-all cursor-pointer ${
 selectedFilter === "priorityOnly" ? "bg-accent-solid text-on-accent shadow-sm" : "text-muted hover:text-ink"
            }`}
          >
            Priority Placement ({PRIORITY.length})
          </button>
        </div>
      </div>

      {/* Strategic Takeaway Bar */}
      <div className="p-4 bg-amber-500/10 border-b border-amber-500/20 t-label text-amber-900 dark:text-amber-300 flex items-start gap-2">
        <ShieldAlert size={16} className="shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold">Placement rule:</strong> Paid placement goes to the commercial stations: <strong>{PRIORITY.map((s) => s.name).join(", ")}</strong>. The faith and community stations carry programming on water, health and jobs, never paid political adverts.
        </div>
      </div>

      {/* Station List */}
      <div className="p-4 sm:p-6 space-y-3">
        {displayedStations.map((station) => (
          <div
            key={station.name}
            className={`p-4 rounded-xl border transition-all ${
 station.isPriority
                ? "bg-paper/80 border-accent/30 hover:border-accent"
                : station.politicalAllegiance === "Faith / Community"
                ? "bg-amber-500/5 border-amber-500/20"
                : "bg-paper/40 border-line"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold shrink-0 ${
 station.isPriority 
                    ? "bg-accent-solid text-on-accent" 
                    : station.politicalAllegiance === "Faith / Community"
                    ? "bg-amber-500/20 text-amber-700"
                    : "bg-paper border border-line text-muted"
                }`}>
                  <Radio size={18} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-ink">{station.name}</h5>
                    <span className="t-small font-mono font-bold text-accent bg-card px-2 py-0.5 rounded border border-line">
                      {station.frequency}
                    </span>
                    {station.isPriority && (
                      <span className="t-micro font-black uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Priority Placement
                      </span>
                    )}
                  </div>
                  <div className="t-label text-muted font-medium mt-0.5">
                    Ownership: <span className="text-ink font-semibold">{station.ownership}</span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="self-start sm:self-auto">
                <span className={`t-label font-bold px-3 py-1 rounded-lg border ${
 station.politicalAllegiance === "Commercial"
                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20"
                    : station.politicalAllegiance === "Faith / Community"
                    ? "bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20"
                    : "bg-paper text-ink border-line"
                }`}>
                  {station.politicalAllegiance}
                </span>
              </div>
            </div>

            <p className="t-label text-ink font-medium mt-2 leading-relaxed">
              {station.campaignPosture}
            </p>

            <div className="mt-2 pt-2 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1 t-small">
              <span className="text-muted">
                <strong>Reach:</strong> {station.reachEstimate} &bull; <strong>Recommended Slot:</strong> {station.recommendedSlot}
              </span>

              <button
                type="button"
                onClick={() => toggleSnippet(station.name)}
                aria-pressed={playingSnippet === station.name}
                aria-label={`Play sample script for ${station.name}`}
                className="t-label font-bold text-accent hover:text-accent/80 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
              >
                {playingSnippet === station.name ? (
                  <>
                    <Pause size={12} />
                    <span>Stop Preview</span>
                  </>
                ) : (
                  <>
                    <Play size={12} />
                    <span>Preview On-Air Brief</span>
                  </>
                )}
              </button>
            </div>

            {playingSnippet === station.name && (
              <motion.div
                initial={{ opacity: 0, gridTemplateRows: "0fr" }}
                animate={{ opacity: 1, gridTemplateRows: "1fr" }}
                exit={{ opacity: 0, gridTemplateRows: "0fr" }}
                transition={disclosure}
                className="grid mt-2"
              >
              <div className="overflow-hidden min-h-0">
              <div className="p-3 bg-card rounded-lg border border-accent/20 t-label space-y-1">
                <div className="font-bold text-accent flex items-center gap-1">
                  <Volume2 size={13} />
                  <span>Sample On-Air Talking Point ({station.name}):</span>
                </div>
                <p className="italic text-ink">
                  {station.politicalAllegiance === "Commercial"
                    ? <>&ldquo;Mjenzi. Anayemaliza anachoanza. Suleiman Shahbal: water at the tap, jobs that stay in Mombasa, and a county that pays its bills.&rdquo; <span className="not-italic text-muted">(The builder. He finishes what he starts.)</span></>
                    : <>Programming only: a residents&rsquo; call-in on water hours and prices in their ward, with no candidate named and no paid political message.</>}
                </p>
              </div>
              </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Rule */}
      <div className="p-3 bg-paper/60 border-t border-line t-small text-muted flex items-center justify-between px-4 font-semibold">
        <span className="flex items-center gap-1">
          <Info size={12} className="text-accent" />
          <span>No Coast audience share is in hand: a KARF or GeoPoll report closes that gap before money is committed.</span>
        </span>
      </div>
    </div>
  );
}
