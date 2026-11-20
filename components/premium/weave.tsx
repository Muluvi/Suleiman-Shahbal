/**
 * The kiondo weave: the site's one texture.
 *
 * The Akamba kiondo is twined sisal, and its surface reads as short strands alternating
 * direction on a diagonal. That is drawn here as a twill of two strand directions in a cell
 * rotated 45 degrees, generated in code, never an image. It does two jobs:
 *
 *   texture   3-6% opacity behind act openers and on the progress spine;
 *   meaning   the fill of "the pool" wherever the old hatch stood. It must survive greyscale,
 *             so it is a pattern of strokes, not a tint.
 */
export function WeaveDefs({ id, color = "currentColor", opacity = 1, size = 7 }: { id: string; color?: string; opacity?: number; size?: number }) {
  const s = size;
  const h = s / 2;
  const t = s * 0.36;
  return (
    <pattern id={id} patternUnits="userSpaceOnUse" width={s} height={s} patternTransform="rotate(45)">
      <g fill={color} fillOpacity={opacity}>
        {/* Vertical strands in two cells, horizontal in the other two: the over-under of a twine. */}
        <rect x={h / 2 - t / 2} y={0.4} width={t} height={h - 0.8} rx={t / 2} />
        <rect x={h + h / 2 - t / 2} y={h + 0.4} width={t} height={h - 0.8} rx={t / 2} />
        <rect x={h + 0.4} y={h / 2 - t / 2} width={h - 0.8} height={t} rx={t / 2} fillOpacity={0.6} />
        <rect x={0.4} y={h + h / 2 - t / 2} width={h - 0.8} height={t} rx={t / 2} fillOpacity={0.6} />
      </g>
    </pattern>
  );
}
