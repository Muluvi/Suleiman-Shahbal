/**
 * The cover: where the electorate sits and where the last race was closest, the four cover figures, and
 * the spine of the argument.
 */
import { WARD_TILES } from "../../geo/wards.ts";
import { LAYERS } from "../tilemap.ts";
import type { FigureSpec, Row, TileLayerId } from "../types.ts";
import { F, fmt, src } from "./_util.ts";

/** One row per ward for a tile map's table view: the layer's label is the ward's value. */
export function tileRows(layers: TileLayerId[]): Row[] {
  return WARD_TILES.map((t) => ({
    cells: {
      ward: t.name,
      constituency: t.constituencyName,
      voters: t.voters,
      ...Object.fromEntries(layers.map((l) => [l, LAYERS[l].style(t).label || "—"])),
    },
    state: layers.length === 1 && LAYERS[layers[0]].state !== "sourced" ? LAYERS[layers[0]].state : undefined,
  }));
}

export function tileColumns(layers: TileLayerId[]) {
  return [
    { key: "ward", label: "Ward" },
    { key: "constituency", label: "Constituency" },
    { key: "voters", label: "Registered voters, 2022", numeric: true },
    ...layers.map((l) => ({ key: l, label: LAYERS[l].name })),
  ];
}

const FOOTPRINT_LABEL: Record<string, string> = { Pool: "The pool: decided by under 2,000 votes in 2022", "—": "Decided by more, outside the pool" };

export const FIG_COVER_MAP: FigureSpec = {
  id: "fig-cover-map",
  section: "Cover",
  title: `More than half the register, ${fmt("pool.share")}%, lives where the 2022 race was decided by under 2,000 votes`,
  question: "Where does the electorate sit, and where was the last race closest?",
  takeaway: `The ${fmt("pool")}-voter pool in Kisauni, Nyali and Changamwe is the ground the race is won or lost on; the Island, the incumbent's strongest ground, is ${fmt("con.mvita.share")}% of the register.`,
  sources: [src("register.2022"), src("result.2022.gov.kisauni.margin"), { name: "The pool: a sum of the three constituencies, derived", tier: "T1", state: "modelled" }],
  chart: {
    type: "composite",
    parts: [
      { heading: "Where the 2022 race was closest, ward by ward", chart: { type: "tilemap", layers: ["footprint"], initial: "footprint", showWardList: false } },
      {
        heading: "Four figures",
        chart: {
          type: "stats",
          items: [
            { value: fmt("register.2022"), label: "registered voters, 2022 (IEBC); the 2026 register is not yet published", state: "sourced", countTo: F("register.2022").value ?? undefined },
            { value: `≈${fmt("benchmark")}`, label: `votes to win: the 2022 winning total, rounded; ${fmt("benchmark.high")} won in 2017`, state: "modelled" },
            { value: `${fmt("pool.share")}%`, label: "of the register in Kisauni, Nyali and Changamwe, the close-contest belt", state: "modelled" },
            { value: fmt("register.polling-stations"), label: "polling stations across the 30 wards (IEBC 2022)", state: "sourced" },
          ],
        },
      },
    ],
  },
  columns: tileColumns(["footprint"]),
  rows: tileRows(["footprint"]).map((r) => ({ ...r, cells: { ...r.cells, footprint: FOOTPRINT_LABEL[String(r.cells.footprint)] ?? r.cells.footprint } })),
};

// The document's own table of contents, in the order the page runs: the evidence first, then
// the strategy it justifies, the plan, how it is proven and protected, and the decision.
// Each step is a part, and each row's job is the question that part answers.
export const SPINE_STEPS = [
  { label: "Mombasa today", href: "/mombasa" },
  { label: "His standing", href: "/record" },
  { label: "The strategy", href: "/goal" },
  { label: "The plan", href: "/engagement" },
  { label: "Proof", href: "/success" },
  { label: "The decision", href: "/platform" },
];

export const FIG_COVER_SPINE: FigureSpec = {
  id: "fig-cover-spine",
  section: "Cover",
  title: "The plan runs evidence first: what Mombasa is and needs, where he stands, the strategy, the plan, how it is proven and kept lawful, and the decision",
  question: "What is the shape of the argument?",
  takeaway: "Mombasa today and His standing are the evidence; The strategy and The plan are built on it; Proof and safeguards shows how it is measured and kept lawful; The decision closes with what Mr Shahbal is asked to decide. The evidence behind it follows, then the working platform.",
  sources: [{ name: "This plan's structure", tier: null, state: "target" }],
  chart: { type: "spine", steps: SPINE_STEPS },
  columns: [{ key: "step", label: "Part" }, { key: "job", label: "The question it answers" }],
  rows: [
    { cells: { step: "Mombasa today", job: "What is true about the county and its voters?" } },
    { cells: { step: "His standing", job: "Where does Mr Shahbal stand today?" } },
    { cells: { step: "The strategy", job: "What should the campaign do, and why?" } },
    { cells: { step: "The plan", job: "Who does the work, in what order, and how?" } },
    { cells: { step: "Proof and safeguards", job: "How would we know it worked, and that it stayed lawful?" } },
    { cells: { step: "The decision", job: "What is Mr Shahbal being asked to decide?" } },
  ],
};

export const S0: FigureSpec[] = [FIG_COVER_MAP, FIG_COVER_SPINE];
