// Water supply and the new sources. Feeds §3.2. Every value is read from the figure registry.
import type { SourcedFigure } from "./types";
import { figure, val } from "../lib/data/read.ts";

const src = (id: string) => {
  const f = figure(id);
  return { name: f.source ?? "", publicationDate: f.asOf ?? "", tier: (f.tier === "T1" ? 1 : f.tier === "T2" ? 2 : 3) as 1 | 2 | 3 };
};
const item = (id: string, label: string, unit: string, note?: string): SourcedFigure => ({
  label,
  value: val(id),
  unit,
  provenance: { source: src(id), granularity: "county", ...(note ? { note } : {}) },
});

export const WATER_SUPPLY_ITEMS: SourcedFigure[] = [
  item("water.mwache", "Mwache Dam, added capacity", "m³ a day", `${val("water.mwache.complete")}% complete in June 2026; the reticulation into the estates is the next term's work.`),
  item("water.mzima2", "Mzima II pipeline, added capacity", "m³ a day"),
  item("water.coast.deficit", "Coast deficit, four counties", "m³ a day", "Mombasa, Kwale, Kilifi and Taita Taveta together, as the Water CS told the Senate."),
  item("water.mowasco.met", "MOWASCO, share of the regulator's standards met", "%", "FY2025/26 performance report, as reported."),
];
