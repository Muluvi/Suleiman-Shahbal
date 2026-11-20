import { ELECTORAL_HISTORY } from "../../data/electoral-history";
import { DISPUTED_FIGURES } from "../../data/disputed-figures";
import { COURT_OF_APPEAL_2018, HIGH_COURT_2013, MEDIA_2022_DECLARATION } from "../../data/sources";
import { TierBadge } from "./TierBadge";
import { DisputedFigure } from "./DisputedFigure";
import { ProvenanceLine } from "./ProvenanceLine";

const omarDispute = DISPUTED_FIGURES.find((d) => d.id === "omar-2022-governor-votes")!;
const shahbalDispute = DISPUTED_FIGURES.find((d) => d.id === "shahbal-2013-governor-votes")!;

/**
 * Electoral history across 2013 / 2017 / 2022 (§2.2). Server component — no chart
 * library, so this renders directly rather than behind a dynamic() boundary; the Phase 6c
 * timeline chart sits alongside it in ElectoralTimelineBlock.
 */
export function ElectoralHistoryPanel() {
  return (
    <div className="bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6 print-avoid-break">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-1.5 h-6 bg-accent rounded-full shrink-0" />
        <h4 className="font-serif text-sm font-bold text-ink">Mombasa Governor and Senator — Results by Cycle</h4>
      </div>
      <p className="t-small text-muted mb-4 leading-relaxed pl-4">
        Three cycles: Joho won twice, Nassir once, and Mr Shahbal was runner-up in 2013 and 2017. Where two
        published totals differ, both are shown below with the reason one is used.
      </p>

      <div className="space-y-4">
        {ELECTORAL_HISTORY.map((race, i) => (
          <div key={i} className="rounded-xl border border-line/60 bg-paper p-3">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="t-label font-black text-ink">
                {race.year} · {race.office}
              </span>
            </div>

            {race.results ? (
              <div className="not-prose fx-focus overflow-x-auto" tabIndex={0} role="group" aria-label="Electoral history table, scrollable">
                <table className="w-full text-left t-small">
                  <thead>
                    <tr className="t-micro font-bold text-muted">
                      <th className="py-1 pr-3">Candidate</th>
                      <th className="py-1 pr-3">Party</th>
                      <th className="py-1 pr-3">Votes</th>
                      <th className="py-1">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {race.results.map((r, j) => (
                      <tr key={j} className="border-t border-line/40">
                        <td className="py-2 pr-3 font-bold text-ink">
                          {r.candidate}
                          {r.disputedFigureId &&
                            (DISPUTED_FIGURES.find((d) => d.id === r.disputedFigureId)?.status === "resolved-preferred" ? (
                              <span className="ml-1 t-micro font-black text-muted">Source note ↓</span>
                            ) : (
                              <span className="ml-1 t-micro font-black text-danger">Disputed ↓</span>
                            ))}
                        </td>
                        <td className="py-2 pr-3 text-ink/70">{r.party ?? "—"}</td>
                        <td className="py-2 pr-3 font-black text-ink">{r.votes.toLocaleString()}</td>
                        <td className="py-2">
                          <TierBadge tier={r.source.tier} compact />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="t-label text-muted italic">{race.gapNote}</p>
            )}
          </div>
        ))}
      </div>

      <DisputedFigure entry={shahbalDispute} />
      <DisputedFigure entry={omarDispute} />

      <ProvenanceLine
        provenance={[
          { source: COURT_OF_APPEAL_2018, granularity: "county" },
          { source: HIGH_COURT_2013, granularity: "county" },
          { source: MEDIA_2022_DECLARATION, granularity: "county" },
        ]}
      />
    </div>
  );
}
