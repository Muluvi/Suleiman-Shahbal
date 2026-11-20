/**
 * The 30 wards as tiles. Schematic, not to scale.
 *
 * The map is a tile map by choice: every ward the same size, because Mwakirunge (42.4 km²) and Magogoni (1.0 km²) differ
 * in area by many times and a choropleth would let the open north of Kisauni outshout
 * the dense Island. Real ward polygons do exist (public/geo/mombasa-wards.topo.json); they are used
 * only where geography itself is the point, in CountyStatic.
 *
 * Constituency blocks are placed roughly as the county sits: Kisauni across the north, Nyali below
 * it on the north mainland, Jomvu and Changamwe on the west mainland, Mvita (the Island) in the
 * centre, Likoni across the channel in the south. Ward position inside a block carries no
 * geographic meaning: wards are laid out largest first, left to right, top to bottom.
 */
import register from "../../data/ward-register.json" with { type: "json" };
import { slugOf } from "../data/figures.ts";

/** Internal zone ids: anchor = the Island, north = the north mainland,
 * west = the west mainland, none = Likoni (rotating). */
export type ZoneId = "anchor" | "north" | "west" | "none";

export interface WardTile {
  id: string;
  name: string;
  constituency: string;
  constituencyName: string;
  row: number;
  col: number;
  zone: ZoneId;
  voters: number;
}

/** Block origin (row, col) and width in tiles, per constituency. The grid is 6 columns by 8 rows. */
const BLOCKS: Record<string, { row: number; col: number; width: number; zone: ZoneId }> = {
  kisauni: { row: 0, col: 2, width: 4, zone: "north" },
  nyali: { row: 2, col: 3, width: 3, zone: "north" },
  jomvu: { row: 2, col: 0, width: 2, zone: "west" },
  changamwe: { row: 4, col: 0, width: 2, zone: "west" },
  mvita: { row: 4, col: 2, width: 3, zone: "anchor" },
  likoni: { row: 6, col: 2, width: 3, zone: "none" },
};

export const GRID = { cols: 6, rows: 8 };

type Constituency = { id: string; name: string; voters: number; wards: { name: string; voters: number }[] };

export const WARD_TILES: WardTile[] = (register.constituencies as Constituency[]).flatMap((c) => {
  const b = BLOCKS[c.id];
  if (!b) throw new Error(`wards: no tile block for ${c.id}`);
  return [...c.wards]
    .sort((x, y) => y.voters - x.voters)
    .map((w, i) => ({
      id: `ward.${slugOf(w.name)}`,
      name: w.name,
      constituency: c.id,
      constituencyName: c.name,
      row: b.row + Math.floor(i / b.width),
      col: b.col + (i % b.width),
      zone: b.zone,
      voters: w.voters,
    }));
});

export const CONSTITUENCY_BLOCKS = BLOCKS;

// Every tile has its own cell: a collision would hide a ward.
{
  const seen = new Set<string>();
  for (const t of WARD_TILES) {
    const key = `${t.row},${t.col}`;
    if (seen.has(key)) throw new Error(`wards: two tiles at ${key}`);
    seen.add(key);
  }
  if (WARD_TILES.length !== 30) throw new Error(`wards: expected 30 tiles, have ${WARD_TILES.length}`);
}
