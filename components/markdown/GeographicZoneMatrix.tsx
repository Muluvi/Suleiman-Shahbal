"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Radio, Compass, TrendingUp, Percent, AlertTriangle } from "lucide-react";

import { CONSTITUENCIES, COUNTY_TOTAL_WARDS } from "../../data/ward-register";
import { TierBadge } from "./TierBadge";
import { DURATION } from "../../lib/motion";
import { fmt as reg, val } from "../../lib/data/read";

/**
 * §1.2 zone model, bound to the verified IEBC register.
 *
 * Every registered-voter figure below is DERIVED from data/ward-register.json at module load,
 * never typed in. Population, density and household figures are read from the registry (KNBS 2019
 * census); phase weightings are read from the effort figures (Section 12.1).
 *
 * In Mombasa the census sub-counties and the IEBC constituencies are the same six areas, so the
 * zones nest exactly. Likoni, across the ferry, is in none of the three zones: it takes a rotating
 * share of effort and is surfaced as such rather than folded into a neighbour.
 */

const byId = (id: string) => CONSTITUENCIES.find((c) => c.id === id);

function zoneRegister(ids: string[]) {
  const parts = ids.map(byId).filter((c): c is NonNullable<typeof c> => Boolean(c));
  return {
    voters: parts.reduce((sum, c) => sum + c.voters, 0),
    constituencies: parts,
    wards: parts
      .flatMap((c) => c.wards.map((w) => ({ ...w, constituency: c.name })))
      .sort((a, b) => b.voters - a.voters),
  };
}

interface GeographicZone {
  id: string;
  name: string;
  /** Sub-counties, exactly as §3.5 lists them. */
  subCounties: string;
  /** Constituencies the register figures are summed over. */
  constituencyIds: string[];
  population: string;
  popShare: string;
  density: string;
  households: string;
  nominationWeight: number;
  generalWeight: number;
  connectivityProfile: string;
  primaryStrategicImperative: string;
}

const density = (ids: string[]) => {
  const pop = ids.reduce((n, id) => n + val(`sub.${id}.population`), 0);
  const area = ids.reduce((n, id) => n + val(`sub.${id}.population`) / val(`sub.${id}.density`), 0);
  return `~${Math.round(pop / area).toLocaleString("en-KE")} persons / km²`;
};

const GEOGRAPHIC_ZONES: GeographicZone[] = [
  {
    id: "anchor",
    name: "The Island",
    subCounties: "Mvita",
    constituencyIds: ["mvita"],
    population: reg("zone.anchor.population"),
    popShare: `${reg("zone.anchor.share")}%`,
    density: density(["mvita"]),
    households: reg("zone.anchor.households"),
    nominationWeight: val("effort.p-1.anchor"),
    generalWeight: val("effort.p3.anchor"),
    connectivityProfile: "The CBD, Old Town and the public service: the best connected and the most networked part of the county.",
    primaryStrategicImperative:
      "The incumbent's widest 2022 lead. Contested to hold that lead down, not to carry it: traders owed by the county, the public service paid late, and a candidate whose own roots are on the Island.",
  },
  {
    id: "north",
    name: "The North Mainland",
    subCounties: "Kisauni · Nyali",
    constituencyIds: ["kisauni", "nyali"],
    population: reg("zone.north.population"),
    popShare: `${reg("zone.north.share")}%`,
    density: density(["kisauni", "nyali"]),
    households: reg("zone.north.households"),
    nominationWeight: val("effort.p-1.north"),
    generalWeight: val("effort.p3.north"),
    connectivityProfile: "Mixed: young and online in the estates, with WhatsApp and the stages carrying more than paid digital.",
    primaryStrategicImperative:
      "The largest block in the county, and each constituency decided by about a thousand votes in 2022. Water at the tap and jobs for the young lead here; the ward captains and the turnout operation concentrate here.",
  },
  {
    id: "west",
    name: "The West Mainland",
    subCounties: "Changamwe · Jomvu",
    constituencyIds: ["changamwe", "jomvu"],
    population: reg("zone.west.population"),
    popShare: `${reg("zone.west.share")}%`,
    density: density(["changamwe", "jomvu"]),
    households: reg("zone.west.households"),
    nominationWeight: val("effort.p-1.west"),
    generalWeight: val("effort.p3.west"),
    connectivityProfile: "The port's workforce: long shifts, drive-time radio and WhatsApp groups.",
    primaryStrategicImperative:
      "The port, the container depots and the Jomvu SEZ site. Changamwe was decided by under 2,000 votes in 2022, and turnout was lowest here: the SEZ is shown as proof, its jobs reported as a projection until they exist.",
  },
];

/** The fourth row of the effort weighting: Likoni and rotating ward tests. */
const ROTATING_WEIGHT = { nomination: val("effort.p-1.rotating"), general: val("effort.p3.rotating") };

const ZONE_REGISTERS = Object.fromEntries(
  GEOGRAPHIC_ZONES.map((z) => [z.id, zoneRegister(z.constituencyIds)])
) as Record<string, ReturnType<typeof zoneRegister>>;

const ASSIGNED = GEOGRAPHIC_ZONES.flatMap((z) => z.constituencyIds);
const UNASSIGNED = CONSTITUENCIES.filter((c) => !ASSIGNED.includes(c.id));

const fmt = (n: number) => n.toLocaleString("en-KE");

export function GeographicZoneMatrix() {
  const [selectedZoneId, setSelectedZoneId] = useState<string>("north");
  const currentZone = GEOGRAPHIC_ZONES.find((z) => z.id === selectedZoneId) ?? GEOGRAPHIC_ZONES[0];
  const register = ZONE_REGISTERS[currentZone.id];
  const shareOfRegister = (register.voters / COUNTY_TOTAL_WARDS) * 100;

  return (
    <div className="my-6 sm:my-8 bg-card border border-line rounded-2xl shadow-sm overflow-hidden not-prose">
      <div className="p-4 sm:p-5 border-b border-line bg-paper/50 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <Compass size={20} aria-hidden="true" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="t-label font-extrabold text-accent bg-accent/10 px-2 py-0.5 rounded">
                Regional dynamics
              </span>
              <TierBadge tier={1} compact />
            </div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-ink mt-1">
              Zone weighting against the 2022 register
            </h4>
          </div>
        </div>
      </div>

      <div
        className="p-3 bg-paper/70 border-b border-line grid grid-cols-1 sm:grid-cols-3 gap-2"
        role="tablist"
        aria-label="Geographic zones"
      >
        {GEOGRAPHIC_ZONES.map((zone) => {
          const isSelected = zone.id === selectedZoneId;
          const zr = ZONE_REGISTERS[zone.id];
          return (
            <button
              key={zone.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedZoneId(zone.id)}
              className={`p-3 rounded-xl border text-left transition-colors cursor-pointer flex flex-col gap-1 ${
 isSelected
                  ? "bg-card border-accent ring-2 ring-accent/15"
                  : "bg-paper/40 border-line hover:border-accent/40 text-muted hover:text-ink"
              }`}
            >
              <div className="flex items-center justify-between w-full gap-2">
                <span className={`t-label font-black ${isSelected ? "text-accent" : "text-muted"}`}>
                  {zone.popShare} of population
                </span>
                <span className="t-label font-mono font-bold px-2 py-0.5 rounded bg-accent/10 text-accent shrink-0">
                  Phase −1: {zone.nominationWeight}%
                </span>
              </div>
              <div className="t-label font-bold text-ink truncate">{zone.name}</div>
              <div className="t-small font-mono text-muted tabular-nums">
                {fmt(zr.voters)} registered
              </div>
            </button>
          );
        })}
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentZone.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.instant, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-3 bg-paper rounded-xl border border-line">
                <div className="t-label uppercase font-bold text-muted">Population</div>
                <div className="text-sm font-bold text-ink mt-0.5 font-mono tabular-nums">{currentZone.population}</div>
                <div className="t-label text-accent font-semibold">{currentZone.popShare} of county</div>
              </div>

              <div className="p-3 bg-paper rounded-xl border border-line">
                <div className="t-label uppercase font-bold text-muted">Registered voters</div>
                <div className="text-sm font-bold text-ink mt-0.5 font-mono tabular-nums">{fmt(register.voters)}</div>
                <div className="t-label text-muted">{shareOfRegister.toFixed(1)}% of the register</div>
              </div>

              <div className="p-3 bg-paper rounded-xl border border-line">
                <div className="t-label uppercase font-bold text-muted">Density</div>
                <div className="text-sm font-bold text-ink mt-0.5 font-mono">{currentZone.density}</div>
                <div className="t-label text-muted tabular-nums">{currentZone.households} households</div>
              </div>

              <div className="p-3 bg-accent/5 rounded-xl border border-accent/20">
                <div className="t-label uppercase font-bold text-accent">Phase −1 weighting</div>
                <div className="text-sm font-black text-accent mt-0.5 font-mono tabular-nums">
                  {currentZone.nominationWeight}%
                </div>
                <div className="t-label text-muted font-medium">Phase 3: {currentZone.generalWeight}%</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-paper border border-line space-y-1">
              <div className="t-label font-black text-accent flex items-center gap-1">
                <TrendingUp size={13} aria-hidden="true" />
                Zone strategic imperative
              </div>
              <p className="t-label text-ink leading-relaxed font-medium">{currentZone.primaryStrategicImperative}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-paper/60 border border-line space-y-1">
                <div className="t-label font-black text-muted flex items-center gap-1">
                  <Radio size={12} className="text-accent" aria-hidden="true" />
                  Connectivity &amp; delivery channels
                </div>
                <p className="t-label text-ink font-medium leading-relaxed">{currentZone.connectivityProfile}</p>
                <p className="t-label text-muted pt-1">
                  Sub-counties in this zone: {currentZone.subCounties}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-paper/60 border border-line space-y-1">
                <div className="t-label font-black text-muted flex items-center gap-1">
                  <MapPin size={12} className="text-accent" aria-hidden="true" />
                  Largest wards by register
                </div>
                <ul className="flex flex-col gap-1 mt-1">
                  {register.wards.slice(0, 5).map((w) => (
                    <li key={`${w.constituency}-${w.name}`} className="flex items-baseline justify-between gap-2 t-small">
                      <span className="text-ink font-semibold truncate">{w.name}</span>
                      <span className="font-mono text-muted tabular-nums shrink-0">{fmt(w.voters)}</span>
                    </li>
                  ))}
                </ul>
                <p className="t-label text-muted pt-1">
                  {register.constituencies.map((c) => c.name).join(" · ")} — {register.wards.length} wards
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-4 py-3 bg-paper/60 border-t border-line space-y-2">
        <p className="t-small text-muted font-medium flex items-start gap-1">
          <Percent size={12} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Phase −1 deliberately over-indexes on the north and west mainland relative to population share, because the
            close-contest belt is where turnout decides the race. A further{" "}
            {ROTATING_WEIGHT.nomination}% goes to Likoni and rotating ward tests. Weightings are reviewed monthly and
            reallocated.
          </span>
        </p>
        {UNASSIGNED.length > 0 && (
          <p className="t-small text-muted flex items-start gap-1">
            <AlertTriangle size={12} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              Mombasa&rsquo;s sub-counties and constituencies are the same six areas, so the zones nest exactly.{" "}
              {UNASSIGNED.map((c) => `${c.name} (${fmt(c.voters)})`).join(", ")}{" "}
              {UNASSIGNED.length === 1 ? "is" : "are"} in none of the three zones and{" "}
              {UNASSIGNED.length === 1 ? "takes" : "take"} the rotating share of effort.
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
