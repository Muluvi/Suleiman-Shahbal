"use client";

import { LazyMount } from "../LazyMount";
import { ProvenanceLine } from "./ProvenanceLine";
import { ALL_WARDS, POOL_TOTAL, CONSTITUENCIES } from "../../data/ward-register";
import { IEBC_WARD_REGISTER } from "../../data/sources";
import type { Provenance } from "../../data/types";
import PathTo200kChart, { type PathPoint } from "../charts/PathTo200kChart";
import { fmt, val } from "../../lib/data/read";

const WIN_THRESHOLD = val("benchmark"); // the 2022 winning total, rounded for KPI-setting (registry: benchmark)
const PROVENANCE: Provenance = { source: IEBC_WARD_REGISTER, granularity: "ward" };
const POOL_BALLOTS = Math.round((POOL_TOTAL * val("turnout.constant")) / 100);

const CONSTITUENCY_COLORS: Record<string, string> = {
  kisauni: "#e31d2b",
  nyali: "#0891b2",
  changamwe: "#b45309",
  mvita: "#0056a8",
  jomvu: "#15803d",
  likoni: "#6d28d9",
};

const SORTED = [...ALL_WARDS].sort((a, b) => b.voters - a.voters);
let running = 0;
const CHART_DATA: PathPoint[] = SORTED.map((w, i) => {
  running += w.voters;
  return {
    rank: i + 1,
    ward: w.name,
    constituencyName: w.constituencyName,
    voters: w.voters,
    cumulative: running,
    color: CONSTITUENCY_COLORS[w.constituencyId] ?? "#8295a9",
  };
});

export function PathTo200kBlockContent() {
  return (
    <div className="bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6 print-avoid-break">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-1.5 h-6 bg-accent rounded-full shrink-0" />
        <h4 className="font-serif text-sm font-bold text-ink">Path to {fmt("benchmark")} — Wards Ranked by Register</h4>
      </div>
      <p className="t-small text-muted mb-3 leading-relaxed pl-4">
        All 30 wards, ranked descending by register size (bars, coloured by constituency) with the cumulative running
        total (line) against the ~{fmt("benchmark")}-vote benchmark. <strong className="text-ink">The close-contest belt
        (Kisauni, Nyali, Changamwe) holds {POOL_TOTAL.toLocaleString()} registered voters</strong>, but at the 2022
        turnout of {fmt("turnout.constant")}% that is only about {POOL_BALLOTS.toLocaleString()} ballots: the register is
        not the vote, and turnout decides whether the belt can carry the number.
      </p>

      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3 pl-4">
        {CONSTITUENCIES.map((c) => (
          <span key={c.id} className="flex items-center gap-1 t-micro font-black text-muted">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: CONSTITUENCY_COLORS[c.id] }} />
            {c.name}
          </span>
        ))}
      </div>

      <div className="h-72 w-full t-micro mb-4">
        <LazyMount minHeight={288} className="h-full">
          <PathTo200kChart data={CHART_DATA} threshold={WIN_THRESHOLD} />
        </LazyMount>
      </div>

      {/* Accessible table equivalent — all 30 wards */}
      <div
        tabIndex={0}
        role="region"
        aria-label="All 30 wards ranked by register size"
        className="not-prose fx-focus overflow-x-auto max-h-72 overflow-y-auto border border-line/40 rounded-xl"
      >
        <table className="w-full text-left t-small">
          <caption className="sr-only">All 30 wards ranked by 2022 register size with cumulative running total</caption>
          <thead className="sticky top-0 bg-paper">
            <tr className="t-micro font-bold text-muted">
              <th className="py-2 px-2">#</th>
              <th className="py-2 px-2">Ward</th>
              <th className="py-2 px-2">Constituency</th>
              <th className="py-2 px-2">Voters</th>
              <th className="py-2 px-2">Cumulative</th>
            </tr>
          </thead>
          <tbody>
            {CHART_DATA.map((d) => (
              <tr key={d.rank} className={`border-t border-line/30 ${d.cumulative >= WIN_THRESHOLD && d.cumulative - d.voters < WIN_THRESHOLD ? "bg-danger/5" : ""}`}>
                <td className="py-1 px-2 text-muted">{d.rank}</td>
                <td className="py-1 px-2 font-bold text-ink">{d.ward}</td>
                <td className="py-1 px-2 text-ink/70">{d.constituencyName}</td>
                <td className="py-1 px-2 text-ink/80">{d.voters.toLocaleString()}</td>
                <td className="py-1 px-2 font-black text-ink">{d.cumulative.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ProvenanceLine provenance={PROVENANCE} />
    </div>
  );
}
