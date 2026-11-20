/**
 * The tile map's six layers, as data (brief §E.7). One map, learned once, re-read six times.
 *
 * Each layer gives every tile a fill (a CSS custom property, so light and dark swap cleanly), a
 * short label, and whether it is hatched (modelled) or dashed (needed). The legend and a one-line
 * description go with it. Values come from lib/data/figures.ts and the ward register.
 */
import { FIGURES } from "../data/figures.ts";
import { formatFigure } from "../data/format.ts";
import { WARD_TILES, type WardTile } from "../geo/wards.ts";
import type { TileLayerId } from "./types.ts";

export interface TileStyle {
  fill: string;
  /** Text colour on this fill. */
  ink: string;
  label: string;
  hatch?: boolean;
  dashed?: boolean;
  /** The kiondo weave: reserved for "the pool", in laterite. */
  weave?: boolean;
}

export interface TileLayer {
  id: TileLayerId;
  name: string;
  description: string;
  source: string;
  tier: "T1" | "T2" | "T3" | null;
  state: "sourced" | "modelled" | "needed" | "target";
  legend: { label: string; fill: string; hatch?: boolean; dashed?: boolean; weave?: boolean }[];
  style: (t: WardTile) => TileStyle;
}

const k = (n: number) => `${(n / 1000).toFixed(1)}k`;
const INK = "var(--ink)";

// Register size: five ordinal steps. The breaks are binning, not data: they split the 30 wards
// into bands a reader can compare at a glance, and every tile prints its own value regardless.
const BREAKS = [16_000, 19_000, 23_000, 26_000];
const bin = (v: number) => 1 + BREAKS.filter((b) => v >= b).length;
const seqInk = (s: number) => (s >= 3 ? "var(--seq-ink-dark)" : "var(--seq-ink-light)");

const POOL = new Set(["kisauni", "nyali", "changamwe"]);
// The 2022 governor margins by constituency (Section 2.4), in votes: the closest three are the pool.
const MARGIN: Record<string, string> = Object.fromEntries(["changamwe", "jomvu", "kisauni", "nyali", "mvita", "likoni"].map((c) => [c, formatFigure(FIGURES[`result.2022.gov.${c}.margin`])]));
const ZONE_FILL = { anchor: "var(--zone-a)", north: "var(--zone-b)", west: "var(--zone-c)" } as const;
const ZONE_NAME = { anchor: "The Island (Mvita)", north: "The north mainland (Kisauni, Nyali)", west: "The west mainland (Changamwe, Jomvu)", none: "Likoni, rotating" };

const EFFORT: Record<string, number> = {
  anchor: FIGURES["effort.p-1.anchor"].value ?? 0,
  north: FIGURES["effort.p-1.north"].value ?? 0,
  west: FIGURES["effort.p-1.west"].value ?? 0,
};
const effortStep = (v: number) => (v >= 35 ? 5 : v >= 30 ? 4 : v >= 25 ? 3 : 2);

// The twelve largest wards by 2022 register: the "where the votes are" layer of the ward map.
const LARGEST = new Set([...WARD_TILES].sort((a, b) => b.voters - a.voters).slice(0, 12).map((t) => t.id));

export const LAYERS: Record<TileLayerId, TileLayer> = {
  register: {
    id: "register",
    name: "Register size",
    description: `Registered voters per ward, 2022. ${formatFigure(FIGURES["register.2022"])} in all; the 2026 register is not yet published by ward.`,
    source: "IEBC, Registered Voters per County Assembly Ward (2022)",
    tier: "T1",
    state: "sourced",
    legend: [
      { label: "under 16,000", fill: "var(--seq-1)" },
      { label: "16,000–18,999", fill: "var(--seq-2)" },
      { label: "19,000–22,999", fill: "var(--seq-3)" },
      { label: "23,000–25,999", fill: "var(--seq-4)" },
      { label: "26,000 and over", fill: "var(--seq-5)" },
    ],
    style: (t) => {
      const s = bin(t.voters);
      return { fill: `var(--seq-${s})`, ink: seqInk(s), label: k(t.voters) };
    },
  },
  footprint: {
    id: "footprint",
    name: "Where the 2022 race was closest",
    description: `The pool, ${formatFigure(FIGURES["pool"])} voters and ${formatFigure(FIGURES["pool.share"])}% of the register, is Kisauni, Nyali and Changamwe: the three constituencies the 2022 governor's race was decided by fewer than 2,000 votes. Derived from the declared result and the register, not from any measure of opinion.`,
    source: "Declared 2022 governor result by constituency (as reported); IEBC ward register (2022)",
    tier: "T2",
    state: "sourced",
    legend: [
      { label: "The pool: decided by under 2,000 votes", fill: "var(--gold-solid)", weave: true },
      { label: "Decided by more", fill: "var(--neutral-fill)" },
    ],
    style: (t) =>
      POOL.has(t.constituency)
        ? { fill: "var(--gold-solid)", ink: "#ffffff", label: "Pool", weave: true }
        : { fill: "var(--neutral-fill)", ink: INK, label: "—" },
  },
  "party-flow": {
    id: "party-flow",
    name: "The 2022 margin, by constituency",
    description: "The 2022 governor winner's lead over the runner-up in each constituency, in votes (Likoni calculated). He contests 2027 outside ODM and UDA, so no party vote carries to him anywhere; this layer shows where the last race was close enough to turn.",
    source: "Constituency tallies as reported by The Standard and KNA, 30 August 2022",
    tier: "T2",
    state: "sourced",
    legend: [
      { label: "Lead under 2,000", fill: "var(--div-neg)", hatch: true },
      { label: "Lead of 2,000 or more", fill: "var(--neutral-fill)" },
    ],
    style: (t) =>
      POOL.has(t.constituency)
        ? { fill: "var(--div-neg)", ink: "#ffffff", label: MARGIN[t.constituency], hatch: true }
        : { fill: "var(--neutral-fill)", ink: INK, label: MARGIN[t.constituency] },
  },
  zones: {
    id: "zones",
    name: "The three regions",
    description: `The three zones cover ${formatFigure(FIGURES["zones.share"])}% of residents. Likoni sits across the ferry in none of them and takes a rotating share of effort.`,
    source: "KNBS 2019 Census, by sub-county; this plan's zoning",
    tier: "T1",
    state: "sourced",
    legend: [
      { label: ZONE_NAME.anchor, fill: ZONE_FILL.anchor },
      { label: ZONE_NAME.north, fill: ZONE_FILL.north },
      { label: ZONE_NAME.west, fill: ZONE_FILL.west },
      { label: "Likoni: rotating", fill: "transparent", dashed: true },
    ],
    style: (t) =>
      t.zone === "none"
        ? { fill: "transparent", ink: "var(--muted)", label: "none", dashed: true }
        : { fill: ZONE_FILL[t.zone], ink: "#ffffff", label: t.zone === "anchor" ? "I" : t.zone === "north" ? "N" : "W" },
  },
  effort: {
    id: "effort",
    name: "Where the effort goes in Phase −1",
    description: "Share of Phase −1 communications effort by zone: Firefly's weighting, not a measurement. The remainder goes to Likoni and to rotating ward tests.",
    source: "This plan, Section 3.3.1",
    tier: null,
    state: "target",
    legend: [
      { label: `${EFFORT.north}% north mainland`, fill: `var(--seq-${effortStep(EFFORT.north)})`, hatch: true },
      { label: `${EFFORT.west}% west mainland`, fill: `var(--seq-${effortStep(EFFORT.west)})`, hatch: true },
      { label: `${EFFORT.anchor}% Island`, fill: `var(--seq-${effortStep(EFFORT.anchor)})`, hatch: true },
      { label: "Likoni and rotating", fill: "transparent", dashed: true },
    ],
    style: (t) => {
      if (t.zone === "none") return { fill: "transparent", ink: "var(--muted)", label: "rot.", dashed: true };
      const v = EFFORT[t.zone];
      const s = effortStep(v);
      return { fill: `var(--seq-${s})`, ink: seqInk(s), label: `${v}%`, hatch: true };
    },
  },
  largest: {
    id: "largest",
    name: "The twelve largest wards",
    description: `The twelve wards with the most registered voters, which together hold ${formatFigure(FIGURES["pareto.top12.share"])}% of the 2022 register; ${formatFigure(FIGURES["pareto.top12.in-pool"])} of them are in the pool where the 2022 race was closest.`,
    source: "IEBC, Registered Voters per County Assembly Ward (2022)",
    tier: "T1",
    state: "sourced",
    legend: [
      { label: "One of the twelve largest", fill: "var(--accent-solid)" },
      { label: "The other 18 wards", fill: "var(--neutral-fill)" },
    ],
    style: (t) => (LARGEST.has(t.id) ? { fill: "var(--accent-solid)", ink: "var(--on-accent)", label: k(t.voters) } : { fill: "var(--neutral-fill)", ink: INK, label: k(t.voters) }),
  },
  "reach-targets": {
    id: "reach-targets",
    name: "Reach share, against target",
    description: "Reach share by ward, from his Meta Insights export, against the pool's own share of the register. Every tile is set from the Week 1 export.",
    source: "Set in Week 1 from his Meta Insights export",
    tier: null,
    state: "target",
    legend: [{ label: "Set in Week 1", fill: "transparent", dashed: true }],
    // A named gap, not a blank: every tile says when its value arrives (D-12). A map of thirty
    // dashes read as broken rather than as data that does not exist yet.
    style: () => ({ fill: "transparent", ink: "var(--muted)", label: "Week 1", dashed: true }),
  },
};

export const TILES = WARD_TILES;
