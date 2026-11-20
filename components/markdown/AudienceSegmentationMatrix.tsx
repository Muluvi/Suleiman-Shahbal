"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Radio, MessageSquare, AlertTriangle, Layers } from "lucide-react";

import { ClaimBadge } from "./ClaimBadge";
import { TierBadge } from "./TierBadge";
import { DURATION } from "../../lib/motion";
import { figure } from "../../lib/data/figures";
import { fmt } from "../../lib/data/read";
import { CountWord } from "../../lib/count-word";
import { segment, shareText, sizeText, type Segment } from "../../data/segments";

/**
 * §5.1–2.4.2 — the six structural segments.
 *
 * Sizes are read from data/segments.ts, which reads the registry (segment.*), so this matrix and
 * fig-4-3 cannot size a segment two ways. Three segments have no published registered-voter count;
 * they render as "Not sized", with what is known instead and the document that would size them.
 * The unsourced ranges earlier versions printed for them are retired (consolidation pass, D1.7).
 */

type Sizing =
  | { kind: "sized"; voters: string; share: string; tier: 1 | 2 | 3 }
  | { kind: "gap"; estimate: string; note: string };

const TIER_NUMBER = { T1: 1, T2: 2, T3: 3 } as const;

/** The matrix's sizing line, from the one segment record. */
function sizingOf(id: Segment["id"]): Sizing {
  const s = segment(id);
  if (!s.size) return { kind: "gap", estimate: sizeText(s), note: `${s.notSized?.context() ?? ""}. Would be sized by: ${s.notSized?.closesWith ?? "a published count"}.` };
  return { kind: "sized", voters: sizeText(s), share: shareText(s) ?? "", tier: TIER_NUMBER[figure(s.size).tier ?? "T1"] };
}

interface AudienceSegment {
  id: string;
  index: number;
  name: string;
  /** Tab label. Set explicitly: chopping `name` to N words left tabs reading "Rural agrarian &". */
  shortName: string;
  sizing: Sizing;
  connectivity: string;
  geographicBase: string;
  coreAnxiety: string;
  valueProposition: string;
  channels: string[];
}

const AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    id: "youth",
    index: 1,
    name: "The young mainland voter, ages 18–34",
    shortName: "Youth 18–34",
    sizing: sizingOf("youth"),
    connectivity: `${fmt("ict.mombasa.youth")}% of Mombasa's young people use the internet (CA/KNBS 2023/24). TikTok, Instagram and WhatsApp.`,
    geographicBase: "The dense mainland estates of Kisauni (Junda, Mjambere, Bamburi, Shanzu), Likoni (Timbwani, Bofu) and Jomvu (Mikindani, Miritini).",
    coreAnxiety: "No work, insecurity and drugs in the estates, harassment by county enforcement.",
    valueProposition: "Jobs with an employer's name on them (the SEZ, port-linked industry), TVET places, and a quarterly jobs report he can be held to.",
    channels: ["TikTok and Instagram short video", "WhatsApp forwards", "Boda-boda and tuk-tuk stages", "Football tournaments, TUM and TVET colleges"],
  },
  {
    id: "agrarian",
    index: 2,
    name: "Port, transport & logistics workers",
    shortName: "Port and transport",
    sizing: sizingOf("agrarian"),
    connectivity: "Smartphones common; long shifts, so drive-time radio and WhatsApp groups carry more than long video.",
    geographicBase: "Changamwe (Port Reitz, Kipevu, Airport, Chaani) and Jomvu, along the port, the container depots and the Nairobi road.",
    coreAnxiety: "Cargo and jobs moved inland with the SGR; casual work without security.",
    valueProposition: "The port's value kept in Mombasa: the Jomvu SEZ, reported as a projection until the jobs exist.",
    channels: ["Kiswahili radio at drive time", "Workplace and stage visits", "WhatsApp groups", "Consented SMS"],
  },
  {
    id: "msme",
    index: 3,
    name: "Traders & small businesses",
    shortName: "Traders",
    sizing: sizingOf("msme"),
    connectivity: "Constant WhatsApp business use and daily contact with county revenue officers.",
    geographicBase: "Kongowea (Nyali), Marikiti, Majengo and the CBD (Mvita), and the trading strips of every estate.",
    coreAnxiety: "Fees without services, the county's unpaid bills to suppliers, market sanitation and fire safety.",
    valueProposition: "A single business permit, a public pending-bills schedule paid oldest first, and a builder who has run businesses himself.",
    channels: ["Market walk-throughs", "Traders' associations and the KNCCI Mombasa chapter", "Geofenced ads at the markets", "Midday business radio"],
  },
  {
    id: "pastoralist",
    index: 4,
    name: "Women & household managers",
    shortName: "Women",
    sizing: sizingOf("pastoralist"),
    connectivity: "WhatsApp voice notes travel furthest; chamas and faith networks carry the rest.",
    geographicBase: "Every ward; most active in chamas, women's groups and faith networks.",
    coreAnxiety: "The price of water and the hours it runs; health care; school costs.",
    valueProposition: "Water at the county's price at county kiosks, hours of supply published ward by ward.",
    channels: ["WhatsApp voice notes", "Women's groups and chamas", "Consented SMS", "Faith-based radio programming on water and health"],
  },
  {
    id: "professionals",
    index: 5,
    name: "Professionals & the public service",
    shortName: "Professionals",
    sizing: sizingOf("professionals"),
    connectivity: "Smartphone and laptop connected. Active on X, LinkedIn and professional WhatsApp groups.",
    geographicBase: "The Island, Nyali and Tudor; county and national offices; Coast General.",
    coreAnxiety: "Late salaries (the county borrowed to pay June 2026 salaries), stalled promotions, drug shortages.",
    valueProposition: "Salaries and statutory deductions paid on time, and a professional County Public Service Board.",
    channels: ["Policy briefs", "LinkedIn and X", "Television and talk radio", "Union branches and professional associations"],
  },
  {
    id: "diaspora",
    index: 6,
    name: "The 2022 abstainers",
    shortName: "2022 abstainers",
    sizing: sizingOf("diaspora"),
    connectivity: "Everywhere and every kind of phone: reached by people they know before any channel.",
    geographicBase: "Every ward; turnout was lowest in Jomvu and Changamwe on the day (Tier 2, The Star).",
    coreAnxiety: "Voting changes nothing.",
    valueProposition: "Every promise with a date and a way to check it, and a reason to vote on general-election day, when the governor's race is on the same ballot as the president's.",
    channels: ["Ward captains, door to door", "Consented SMS and USSD", "Radio", "The stages"],
  },
];

export function AudienceSegmentationMatrix() {
  const [activeId, setActiveId] = useState(AUDIENCE_SEGMENTS[0].id);
  const active = AUDIENCE_SEGMENTS.find((s) => s.id === activeId) ?? AUDIENCE_SEGMENTS[0];
  const gapCount = AUDIENCE_SEGMENTS.filter((s) => s.sizing.kind === "gap").length;

  return (
    <div className="my-6 sm:my-8 bg-card border border-line rounded-2xl shadow-sm overflow-hidden not-prose">
      <div className="p-4 sm:p-5 border-b border-line bg-paper/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <Layers size={20} aria-hidden="true" />
          </div>
          <div>
            <span className="t-label font-extrabold text-accent bg-accent/10 px-2 py-0.5 rounded">
              Audience architecture
            </span>
            <h4 className="font-serif text-base sm:text-lg font-bold text-ink mt-1">Six structural segments</h4>
          </div>
        </div>
      </div>

      <div
        className="scroll-x snap-x snap-mandatory flex md:flex-wrap md:overflow-visible gap-1 p-2 bg-paper/70 border-b border-line"
        role="tablist"
        aria-label="Audience segments"
      >
        {AUDIENCE_SEGMENTS.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(s.id)}
              className={`snap-start tap-chip px-3 py-2 rounded-lg t-small font-bold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
 isActive ? "bg-accent-solid text-on-accent" : "text-muted hover:text-ink hover:bg-ink/5"
              }`}
            >
              <span className="font-mono mr-1">{s.index}</span>
              {s.shortName}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION.instant, ease: "easeOut" }}
          className="p-4 sm:p-6 space-y-4"
        >
          <div>
            <h5 className="font-serif text-lg font-bold text-ink leading-tight">{active.name}</h5>
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              {active.sizing.kind === "sized" ? (
                <>
                  <span className="font-mono text-sm font-black text-accent tabular-nums">{active.sizing.voters}</span>
                  <span className="t-label text-muted">{active.sizing.share}</span>
                  <TierBadge tier={active.sizing.tier} compact />
                </>
              ) : (
                <>
                  <span className="font-mono text-sm font-black text-muted tabular-nums">{active.sizing.estimate}</span>
                  <ClaimBadge status="estimate" compact />
                </>
              )}
            </div>
            {active.sizing.kind === "gap" && (
              <p className="t-small text-muted mt-2 flex items-start gap-1">
                <AlertTriangle size={11} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Named data gap.</strong> {active.sizing.note} It is not sized here because no
                  published source sizes it.
                </span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-paper/60 border border-line">
              <div className="t-label font-black text-muted flex items-center gap-1 mb-1">
                <Radio size={12} className="text-accent" aria-hidden="true" />
                Connectivity &amp; media
              </div>
              <p className="t-label text-ink leading-relaxed">{active.connectivity}</p>
            </div>
            <div className="p-4 rounded-xl bg-paper/60 border border-line">
              <div className="t-label font-black text-muted flex items-center gap-1 mb-1">
                <Users size={12} className="text-accent" aria-hidden="true" />
                Geographic base
              </div>
              <p className="t-label text-ink leading-relaxed">{active.geographicBase}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-paper border border-line space-y-3">
            <div>
              <div className="t-label font-black text-rose-600 dark:text-rose-400 mb-1">
                Core anxiety
              </div>
              <p className="t-label text-ink leading-relaxed">{active.coreAnxiety}</p>
            </div>
            <div className="pt-3 border-t border-line/50">
              <div className="t-label font-black text-accent mb-1">
                Candidate value proposition
              </div>
              <p className="t-label text-ink leading-relaxed">{active.valueProposition}</p>
            </div>
          </div>

          <div>
            <div className="t-label font-black text-muted flex items-center gap-1 mb-2">
              <MessageSquare size={12} className="text-accent" aria-hidden="true" />
              Reachable channels
            </div>
            <ul className="flex flex-wrap gap-1">
              {active.channels.map((c) => (
                <li key={c} className="t-small px-3 py-1 rounded-lg bg-card border border-line text-ink">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="px-4 py-3 bg-paper/60 border-t border-line">
        <p className="t-small text-muted leading-relaxed">
          {CountWord(gapCount)} segments are unsized in the source and are shown as such. Each stays unsized until an
          official source publishes it — this document does not estimate past its own evidence.
        </p>
      </div>
    </div>
  );
}
