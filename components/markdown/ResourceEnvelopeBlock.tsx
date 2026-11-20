"use client";

import dynamic from "next/dynamic";

import { ChartFallback } from "../ChartFallback";
import { LazyMount } from "../LazyMount";
import { SourceLine } from "./SourceLine";
import type { WaterfallStep } from "../charts/ResourceEnvelopeChart";
import { FIGURES } from "../../lib/data/figures";
import { formatFigure } from "../../lib/data/format";

// Dynamic boundary: the charting runtime stays out of the first load. LazyMount below
// still gates when it mounts; this gates when it downloads.
const ResourceEnvelopeChart = dynamic(() => import("../charts/ResourceEnvelopeChart"), {
  ssr: false,
  loading: () => <ChartFallback shape="bars" />,
});

// Section 1.5, from the data layer: the FY2025/26 budget and its three parts. The third part is the
// remainder (grants, loans and balances brought forward), so the parts sum to the total by construction.
const bn = (id: string) => (FIGURES[id].value ?? 0) / 1e9;
const EQUITABLE = bn("budget.equitable");
const OWN_SOURCE = bn("budget.osr");
const GRANTS = bn("budget.grants");
const COMPONENT_SUM = EQUITABLE + OWN_SOURCE + GRANTS;
const STATED_TOTAL = bn("budget.total");

const DATA: WaterfallStep[] = [
  { name: "Equitable share", base: 0, value: EQUITABLE, display: `KSh${formatFigure(FIGURES["budget.equitable"], "bn")}bn (${formatFigure(FIGURES["budget.equitable.share"])}%)`, color: "var(--accent-solid)" },
  { name: "Own-source revenue", base: EQUITABLE, value: OWN_SOURCE, display: `KSh${formatFigure(FIGURES["budget.osr"], "bn")}bn (${formatFigure(FIGURES["budget.osr.share"])}%)`, color: "var(--color-accent, var(--accent))" },
  { name: "Grants, loans and balances", base: EQUITABLE + OWN_SOURCE, value: GRANTS, display: `KSh${formatFigure(FIGURES["budget.grants"], "bn")}bn (${formatFigure(FIGURES["budget.grants.share"])}%)`, color: "var(--rival-solid)" },
  { name: "Published total", base: 0, value: STATED_TOTAL, display: `KSh${formatFigure(FIGURES["budget.total"], "bn")}bn, as reported`, color: "var(--color-ink)", isTotal: true },
];

export function ResourceEnvelopeBlock() {
  return (
    <div className="not-prose bg-card border border-line rounded-2xl p-4 sm:p-5 shadow-sm my-6 print-avoid-break">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-1.5 h-6 bg-accent rounded-full shrink-0" />
        <h4 className="font-serif text-sm font-bold text-ink">FY2025/26 County Budget — KSh{formatFigure(FIGURES["budget.total"], "bn")}bn</h4>
      </div>
      <p className="t-small text-muted mb-3 leading-relaxed pl-4">
        Split into its three parts, as the Controller of Budget&rsquo;s review is reported (Tier 3). The third part is the remainder, so it is calculated.
      </p>
      <div className="h-64 w-full t-micro">
        <LazyMount minHeight={256} className="h-full">
          <ResourceEnvelopeChart data={DATA} />
        </LazyMount>
      </div>
      <p className="t-label text-muted/80 leading-normal mt-3 italic border-t border-line/40 pt-2 font-medium">
        The three parts sum to KSh{COMPONENT_SUM.toFixed(2)}bn against a reported total of KSh{STATED_TOTAL.toFixed(2)}bn. Own-source
        revenue is a larger share of the budget in Mombasa than in almost any other county.
      </p>
      <SourceLine sources={["Controller of Budget, FY2025/26 county budget implementation review (Mombasa), as reported"]} />
    </div>
  );
}
