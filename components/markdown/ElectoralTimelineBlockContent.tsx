"use client";

import { LazyMount } from "../LazyMount";
import { ProvenanceLine } from "./ProvenanceLine";
import { COURT_OF_APPEAL_2018, HIGH_COURT_2013, MEDIA_2022_DECLARATION } from "../../data/sources";
import type { Provenance } from "../../data/types";
import ElectoralTimelineChart, { type TimelinePoint } from "../charts/ElectoralTimelineChart";
import { val } from "../../lib/data/read";

const DATA: TimelinePoint[] = [
  { year: "2013", winner: "Joho", votes: val("result.2013.gov.joho"), color: "#e31d2b" },
  { year: "2017", winner: "Joho", votes: val("result.2017.gov.joho"), color: "#e31d2b" },
  { year: "2022", winner: "Nassir", votes: val("result.2022.gov.nassir"), color: "#0056a8" },
];

const PROVENANCE: Provenance[] = [
  { source: HIGH_COURT_2013, granularity: "county" },
  { source: COURT_OF_APPEAL_2018, granularity: "county" },
  { source: MEDIA_2022_DECLARATION, granularity: "county" },
];

export function ElectoralTimelineBlockContent() {
  return (
    <div className="not-prose bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6 print-avoid-break">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-1.5 h-6 bg-accent rounded-full shrink-0" />
        <h4 className="font-serif text-sm font-bold text-ink">Governor-Race Winner by Cycle</h4>
      </div>
      <p className="t-small text-muted mb-3 leading-relaxed pl-4">
        Three cycles, two winners, both ODM. The winning total rose from 2013 to 2017 and fell by almost half in
        2022, when turnout fell to about a third of the register.
      </p>

      <div className="w-full t-micro mb-4">
        <LazyMount minHeight={180}>
          <ElectoralTimelineChart data={DATA} />
        </LazyMount>
      </div>

      {/* Accessible table equivalent */}
      <div className="not-prose fx-focus overflow-x-auto" tabIndex={0} role="group" aria-label="Electoral timeline table, scrollable">
        <table className="data-table text-left t-small">
          <thead>
            <tr className="t-micro font-bold text-muted">
              <th className="py-1 pr-3">Year</th>
              <th className="py-1 pr-3">Winner</th>
              <th className="py-1">Votes</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((d) => (
              <tr key={d.year} className="border-t border-line/40">
                <td className="py-2 pr-3 font-bold text-ink">{d.year}</td>
                <td className="py-2 pr-3 text-ink/80">{d.winner ?? <span className="italic text-muted">No sourced result</span>}</td>
                <td className="py-2 text-ink/80">{d.votes !== null ? d.votes.toLocaleString() : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ProvenanceLine provenance={PROVENANCE} />
    </div>
  );
}
