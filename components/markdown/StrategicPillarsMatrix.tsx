"use client";

import React, { useState } from "react";
import { Building2, BarChart3, Droplets, Languages, CheckSquare, ShieldCheck, ArrowRight, Sparkles, FileCheck2 } from "lucide-react";
import { fmt } from "../../lib/data/read";

interface StrategicPillar {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  corePremise: string;
  tangibleProofPoint: string;
  deliveryFormat: string;
  verificationAudit: string;
}

const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    id: "pillar1",
    num: "01",
    title: "Water at the Tap",
    subtitle: "The Last Mile, a Price Ceiling and Published Losses",
    icon: Droplets,
    corePremise: `Mombasa receives about ${fmt("water.supply.share")}% of the water it needs and loses ${fmt("water.nrw")}% of what it buys. Mwache Dam arrives in the next term whoever governs; the pillar is getting it into the estates.`,
    tangibleProofPoint: `A jerrican is KSh ${fmt("price.water.vendor")} from a vendor against KSh ${fmt("price.water.county")} at a county source (Tier 2): a public price ceiling at county kiosks.`,
    deliveryFormat: "Ward-by-ward water hours, Kiswahili voice notes, and residents' reports on the consented line.",
    verificationAudit: "Hours of supply and the share of water lost, published every quarter against the utility's own records."
  },
  {
    id: "pillar2",
    num: "02",
    title: "Jobs that Stay in Mombasa",
    subtitle: "The Port's Value, Kept in the County",
    icon: BarChart3,
    corePremise: "The port moves the country's cargo; more of its value should stay in Mombasa as jobs for the young people who live beside it.",
    tangibleProofPoint: `The Jomvu SEZ: KSh ${fmt("record.sez.ksh", "bn")}bn, ${fmt("record.sez.acres")} acres, ${fmt("record.sez.jobs")} direct jobs projected by the promoters (Tier 2, a projection).`,
    deliveryFormat: "Site visits filmed on the ground, short vertical video in Kiswahili and Sheng, and the stages.",
    verificationAudit: "Jobs that exist, reported quarter by quarter against the projection."
  },
  {
    id: "pillar3",
    num: "03",
    title: "A County that Pays its Bills",
    subtitle: "Fiscal Accountability and the Ward Development Share",
    icon: Building2,
    corePremise: `A county that owes KSh ${fmt("budget.pending-bills.2026", "bn")}bn, ${fmt("budget.pending-bills.aged")}% of its bills older than three years, and borrows to pay salaries. The pillar pays the oldest bills first and publishes the list.`,
    tangibleProofPoint: `A ward development share of KSh ${fmt("policy.ward-fund", "m")}m per ward, every year, across the 30 wards.`,
    deliveryFormat: "A published pending-bills schedule, ward development sheets, and explainers for traders owed by the county.",
    verificationAudit: "The schedule matched against the Controller of Budget and Auditor-General reports."
  },
  {
    id: "pillar4",
    num: "04",
    title: "Verification & Follow-Through",
    subtitle: "The Builder's Signature",
    icon: CheckSquare,
    corePremise: "What sets a builder apart: publishing what was promised, then publishing whether it happened. Every commitment carries a date and a place a voter can visit.",
    tangibleProofPoint: "Public Service-Delivery Tracker (Chapter 15) operational on USSD, SMS, WhatsApp, and Web.",
    deliveryFormat: "Quarterly evidence scorecards, live issue resolution registers, and transparent ad-spend ledger.",
    verificationAudit: "Each commitment revisited twelve weeks on: delivered, delayed or not done."
  }
];

export function StrategicPillarsMatrix() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("pillar1");
  const currentPillar = STRATEGIC_PILLARS.find(p => p.id === selectedPillarId) || STRATEGIC_PILLARS[0];

  return (
    <div className="my-6 sm:my-8 bg-card border border-line rounded-2xl shadow-sm overflow-hidden not-prose">
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-line bg-paper/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="t-label font-extrabold text-accent bg-accent/10 px-2 py-0.5 rounded">
                Campaign pillars
              </span>
              <span className="t-label font-mono font-bold text-muted">
                Core Policy Architecture
              </span>
            </div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-ink mt-0.5">
              Four Strategic Communication Pillars
            </h4>
          </div>
        </div>
      </div>

      {/* Pillar Switcher Tabs */}
      <div className="p-3 bg-paper/70 border-b border-line grid grid-cols-2 sm:grid-cols-4 gap-2">
        {STRATEGIC_PILLARS.map((pillar) => {
          const isSelected = pillar.id === selectedPillarId;
          const IconComponent = pillar.icon;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setSelectedPillarId(pillar.id)}
              aria-pressed={isSelected}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
 isSelected 
                  ? "bg-card border-accent shadow-sm ring-2 ring-accent/15"
                  : "bg-paper/40 border-line hover:border-accent/40 text-muted hover:text-ink"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`t-label font-mono font-black ${isSelected ? "text-accent" : "text-muted"}`}>
                  PILLAR {pillar.num}
                </span>
                <IconComponent size={14} className={isSelected ? "text-accent" : "text-muted"} />
              </div>
              <div className="t-label font-bold text-ink mt-1 line-clamp-1">
                {pillar.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Pillar Content View */}
      <div className="p-4 sm:p-6 space-y-4">
        <div className="border-b border-line/60 pb-3">
          <div className="t-label font-bold text-accent">
            Pillar {currentPillar.num} &bull; Strategic Mandate
          </div>
          <h5 className="font-serif text-base sm:text-lg font-bold text-ink mt-0.5">
            {currentPillar.title}
          </h5>
          <p className="t-label text-muted font-medium mt-1">
            {currentPillar.subtitle}
          </p>
        </div>

        {/* Core Premise */}
        <div className="p-4 sm:p-4 rounded-xl bg-paper border border-line t-label sm:t-small text-ink leading-relaxed font-medium">
          {currentPillar.corePremise}
        </div>

        {/* Breakdown Table */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-paper/60 border border-line space-y-1">
            <div className="t-label font-black text-muted flex items-center gap-1">
              <Sparkles size={12} className="text-accent" />
              Tangible Evidence
            </div>
            <p className="t-label text-ink font-semibold leading-relaxed">
              {currentPillar.tangibleProofPoint}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-paper/60 border border-line space-y-1">
            <div className="t-label font-black text-muted flex items-center gap-1">
              <Languages size={12} className="text-accent" />
              Operational Delivery
            </div>
            <p className="t-label text-muted font-medium leading-relaxed">
              {currentPillar.deliveryFormat}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 space-y-1">
            <div className="t-label font-black text-accent flex items-center gap-1">
              <FileCheck2 size={12} />
              M&E Verification Audit
            </div>
            <p className="t-label text-ink font-semibold leading-relaxed">
              {currentPillar.verificationAudit}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Rule */}
      <div className="p-3 bg-paper/60 border-t border-line t-small text-muted flex items-center justify-between px-4 font-semibold">
        <span className="flex items-center gap-1">
          <ArrowRight size={12} className="text-accent" />
          <span>Underlying Campaign Doctrine: &ldquo;Mombasa does not lack plans. What it has lacked is a governor who finishes what he starts, and shows the work.&rdquo;</span>
        </span>
      </div>
    </div>
  );
}
