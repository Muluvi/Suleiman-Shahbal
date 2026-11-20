"use client";

import React, { useState } from "react";
import { Target, MapPin, TrendingDown, AlertTriangle, Radio } from "lucide-react";

import { ALL_WARDS, COUNTY_TOTAL_WARDS, POOL_CONSTITUENCY_IDS, POOL_TOTAL } from "../../data/ward-register";
import { val } from "../../lib/data/read";
import { TierBadge } from "./TierBadge";

/**
 * §6.2 — where the 2022 race was closest, mapped against voter concentration.
 *
 * WHAT THIS DELIBERATELY DOES NOT SHOW: any measure of opinion. Firefly works from existing
 * records only, and ward-level preference is unmeasured. What it shows is STRUCTURAL: the 2022
 * governor margin in each constituency (as reported, Tier 2), and the register. The ward list is
 * the top 12 by register, computed from data/ward-register.json rather than typed in.
 */

type ContestStatus = "belt" | "west" | "south" | "island";

const STATUS_META: Record<ContestStatus, { label: string; note: string; className: string; dot: string }> = {
  belt: {
    label: "Close contest",
    note: "Decided by fewer than 2,000 votes in 2022.",
    className: "border-rose-500/25 bg-rose-500/[0.04]",
    dot: "bg-rose-500",
  },
  west: {
    label: "West mainland",
    note: "A wider 2022 lead; the SEZ and the port's workforce.",
    className: "border-amber-500/25 bg-amber-500/[0.04]",
    dot: "bg-amber-500",
  },
  south: {
    label: "Rotating",
    note: "Likoni, across the ferry: a rotating share of effort and the ward tests.",
    className: "border-lime-600/25 bg-lime-600/[0.04]",
    dot: "bg-lime-600",
  },
  island: {
    label: "Incumbent's strongest",
    note: "The widest 2022 lead; contested to hold the lead down, not to carry it.",
    className: "border-emerald-500/25 bg-emerald-500/[0.04]",
    dot: "bg-emerald-500",
  },
};

const STATUS_BY_CONSTITUENCY: Record<string, ContestStatus> = {
  kisauni: "belt",
  nyali: "belt",
  changamwe: "belt",
  jomvu: "west",
  likoni: "south",
  mvita: "island",
};

/** The 2022 governor margin in each constituency (Tier 2), read from the registry. */
const MARGIN = (id: string) => val(`result.2022.gov.${id}.margin`);

const POOL_SHARE = (POOL_TOTAL / COUNTY_TOTAL_WARDS) * 100;
const POOL_WARD_COUNT = ALL_WARDS.filter((w) => POOL_CONSTITUENCY_IDS.has(w.constituencyId)).length;
const DIGITAL_POOL = val("effort.digital.pool");

const DECISIVE_WARDS = [...ALL_WARDS]
  .sort((a, b) => b.voters - a.voters)
  .slice(0, 12)
  .map((w, i) => ({ ...w, rank: i + 1, status: STATUS_BY_CONSTITUENCY[w.constituencyId] ?? "south" }));

const BELT_IN_TOP_8 = DECISIVE_WARDS.filter((w) => w.rank <= 8 && w.status === "belt");
const BELT_IN_TOP_8_VOTERS = BELT_IN_TOP_8.reduce((sum, w) => sum + w.voters, 0);
const BELT_IN_TOP_12 = DECISIVE_WARDS.filter((w) => w.status === "belt");
const BELT_IN_TOP_12_VOTERS = BELT_IN_TOP_12.reduce((sum, w) => sum + w.voters, 0);

const fmt = (n: number) => n.toLocaleString("en-KE");

export function RecognitionDeficitOverlay() {
  const [filterMode, setFilterMode] = useState<"all" | "beltOnly">("all");
  const displayed = filterMode === "all" ? DECISIVE_WARDS : DECISIVE_WARDS.filter((w) => w.status === "belt");
  const beltCount = BELT_IN_TOP_12.length;

  return (
    <div className="my-6 sm:my-8 bg-card border border-line rounded-2xl shadow-sm overflow-hidden not-prose">
      <div className="p-4 sm:p-5 border-b border-line bg-paper/50 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <Target size={20} aria-hidden="true" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="t-label font-extrabold text-accent bg-accent/10 px-2 py-0.5 rounded">
                Close contest
              </span>
              <TierBadge tier={2} compact />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-ink mt-1">
              The largest wards are where the last race was closest
            </h3>
          </div>
        </div>

        <div className="flex items-center p-1 bg-paper border border-line rounded-xl shrink-0" role="group" aria-label="Filter wards">
          <button
            onClick={() => setFilterMode("all")}
            aria-pressed={filterMode === "all"}
            className={`px-3 py-2 min-h-[2.75rem] min-w-[2.75rem] inline-flex items-center justify-center rounded-lg t-small font-bold transition-colors cursor-pointer ${
 filterMode === "all" ? "bg-accent-solid text-on-accent" : "text-muted hover:text-ink"
            }`}
          >
            Top 12
          </button>
          <button
            onClick={() => setFilterMode("beltOnly")}
            aria-pressed={filterMode === "beltOnly"}
            className={`px-3 py-2 min-h-[2.75rem] min-w-[2.75rem] inline-flex items-center justify-center rounded-lg t-small font-bold transition-colors cursor-pointer ${
 filterMode === "beltOnly" ? "bg-accent-solid text-on-accent" : "text-muted hover:text-ink"
            }`}
          >
            Close contest ({beltCount})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line border-b border-line bg-card">
        <div className="p-4 sm:p-4">
          <div className="t-label font-black text-muted">Close-contest belt</div>
          <div className="font-serif text-xl sm:text-2xl font-bold text-ink mt-0.5 tabular-nums">
            {fmt(POOL_TOTAL)}
          </div>
          <div className="t-small text-muted mt-0.5 tabular-nums">
            {POOL_SHARE.toFixed(2)}% of the county register
          </div>
        </div>
        <div className="p-4 sm:p-4">
          <div className="t-label font-black text-muted">Pool wards</div>
          <div className="font-serif text-xl sm:text-2xl font-bold text-ink mt-0.5 tabular-nums">
            {POOL_WARD_COUNT} of {ALL_WARDS.length}
          </div>
          <div className="t-small text-muted mt-0.5">Wards in Kisauni, Nyali and Changamwe</div>
        </div>
        <div className="p-4 sm:p-4">
          <div className="t-label font-black text-muted">Phase −1 geofenced spend</div>
          <div className="font-serif text-xl sm:text-2xl font-bold text-accent mt-0.5 tabular-nums">{DIGITAL_POOL}%</div>
          <div className="t-small text-muted mt-0.5">of digital reach effort, to the belt</div>
        </div>
      </div>

      <div className="p-3 sm:p-4 space-y-2">
        {displayed.map((w) => {
          const meta = STATUS_META[w.status];
          const share = (w.voters / COUNTY_TOTAL_WARDS) * 100;
          return (
            <div key={`${w.constituencyId}-${w.name}`} className={`p-3 sm:p-4 rounded-xl border ${meta.className}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2 min-w-0">
                  <span className="font-mono t-small font-bold text-muted tabular-nums pt-0.5 shrink-0 w-5">
                    {w.rank}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-ink truncate">{w.name}</div>
                    <div className="t-small text-muted flex items-center gap-1 mt-0.5">
                      <MapPin size={10} className="shrink-0" aria-hidden="true" />
                      <span className="truncate">{w.constituencyName}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-mono text-sm font-bold text-ink tabular-nums">{fmt(w.voters)}</div>
                  <div className="t-label text-muted tabular-nums">{share.toFixed(2)}% of register</div>
                </div>
              </div>
              <div className="flex items-start gap-1 mt-2 pt-3 border-t border-line/40">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1 ${meta.dot}`} aria-hidden="true" />
                <span className="t-label font-black text-ink shrink-0">{meta.label}</span>
                <span className="t-label text-muted">
                  — {meta.note} 2022 lead in {w.constituencyName}: {fmt(MARGIN(w.constituencyId))} votes.
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-4 py-3 bg-paper/60 border-t border-line space-y-2">
        <p className="t-small text-muted font-medium flex items-start gap-1">
          <TrendingDown size={12} className="text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            {BELT_IN_TOP_8.length} of the top 8 wards countywide —{" "}
            {BELT_IN_TOP_8.map((w) => w.name).join(", ")} — sit in the close-contest belt,{" "}
            <span className="tabular-nums">{fmt(BELT_IN_TOP_8_VOTERS)}</span> voters between them. Across the top 12 it is{" "}
            <strong className="font-semibold text-ink">
              {BELT_IN_TOP_12.length} of 12 — {BELT_IN_TOP_12.map((w) => w.name).join(", ")}
            </strong>
            , <span className="tabular-nums">{fmt(BELT_IN_TOP_12_VOTERS)}</span> voters.
          </span>
        </p>
        <p className="t-small text-muted font-medium pl-[1.125rem]">
          Either way, the wards that decide the election are the wards where the last race was closest, and where turnout will decide the next one.
        </p>
        <p className="t-small text-muted flex items-start gap-1">
          <AlertTriangle size={12} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            The status here is <strong>structural</strong> — derived from the 2022 constituency margins as reported, not
            from any measure of opinion. Ward-level preference is unmeasured; the IEBC&rsquo;s Forms 37A and 37B are the
            official record the analysis reads next.
          </span>
        </p>
        <p className="t-small text-muted flex items-start gap-1">
          <Radio size={12} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Ward figures: IEBC 2022 register, all 30 wards. Ranking computed from that register, not asserted.
          </span>
        </p>
      </div>
    </div>
  );
}
