import { figure } from "../../lib/data/read";
import { asOfText, resolveFigure } from "../../lib/card/spec";
import { PICTOGRAM_PATHS } from "../icons/mombasa";
import { ExportableVisual } from "../visual/ExportableVisual";

/* ------------------------------------------------------------------------------- water prices */

/**
 * The price of a 20-litre jerrican from a vendor against the price at a county source, drawn to
 * scale by AREA: each jerrican's side grows with the square root of its price, so a jerrican that
 * costs six times more covers six times the ground. Two points, as the governor stated them (2025).
 */
export function WaterPrices() {
  const county = resolveFigure({ id: "price.water.county", label: "at a county source", prefix: "KSh " });
  const vendor = resolveFigure({ id: "price.water.vendor", label: "from a vendor", prefix: "KSh " });
  const big = Math.max(county.value ?? 0, vendor.value ?? 0);
  const side = (v: number) => Math.sqrt(v / big);
  const MAX = 120;
  const times = county.value && vendor.value ? Math.round(vendor.value / county.value) : null;
  const cell = (f: typeof county, i: number) => (
    <figure className="pp__item" style={{ "--i": i } as React.CSSProperties}>
      <span className="pp__stage" style={{ width: MAX, height: MAX }}>
        <svg viewBox="0 0 24 24" width={MAX * side(f.value ?? 0)} height={MAX * side(f.value ?? 0)} className="pp__glyph xv-mark" aria-hidden="true" style={{ "--i": i * 20 } as React.CSSProperties}>
          <path d={PICTOGRAM_PATHS.jerrycan} />
        </svg>
      </span>
      <figcaption>
        <span className="pp__v">{f.display}</span>
        <span className="pp__l">{f.label}</span>
      </figcaption>
    </figure>
  );
  return (
    <ExportableVisual
      id="water-prices"
      title={`A jerrican of water costs ${times ?? "several"} times more from a vendor than at a county source`}
      note="Each jerrican is drawn to scale by area. Vendor prices run KSh 30–40; the lower end is shown."
      figures={[vendor, county]}
      card={{ type: "pictogram", params: { set: "prices" } }}
    >
      <div className="pp-pair">
        <div className="pp">
          <p className="pp__title">
            One 20-litre jerrican
            <span className="pp__unit"> · KSh</span>
          </p>
          <div className="pp__row">
            {cell(county, 0)}
            {cell(vendor, 1)}
          </div>
        </div>
      </div>
    </ExportableVisual>
  );
}

/* ------------------------------------------------------------------------------- water gap */

/**
 * Water Watch as a supply gauge: what Mombasa needs, what it receives, what reaches residents, and
 * what Mwache Dam will add. County-wide only, because the published figures are.
 */
export function WaterGap() {
  const rows = [
    resolveFigure({ id: "water.demand", label: "Needed each day" }),
    resolveFigure({ id: "water.supply", label: "Received each day" }),
    resolveFigure({ id: "water.delivered", label: "Reaching residents each day" }),
    resolveFigure({ id: "water.mwache", label: "Mwache Dam will add each day" }),
  ];
  const max = Math.max(...rows.map((r) => r.value ?? 0));
  const nrw = resolveFigure({ id: "water.nrw", label: "of water lost before it is paid for" });
  const done = resolveFigure({ id: "water.mwache.complete", label: "complete" });
  return (
    <ExportableVisual
      id="water-gap"
      title={`Mombasa receives about ${figure("water.supply.share").value}% of the water it needs, and half of that is lost`}
      note="Cubic metres a day. Mwache Dam's capacity is added supply, not yet delivered."
      figures={[...rows, nrw, done]}
      card={{ type: "forecast" }}
    >
      <div className="space-y-3">
        {rows.map((r, i) => (
          <div key={r.label} className="xv-rise" style={{ "--i": i } as React.CSSProperties}>
            <div className="flex justify-between gap-3 text-[0.9rem]">
              <span className="text-ink">{r.label}</span>
              <strong className="font-mono">{r.display} m³</strong>
            </div>
            <div className="mt-1 h-3 w-full rounded bg-paper ring-1 ring-line">
              <div className={`h-3 rounded ${i === 3 ? "bg-gold-solid" : i === 2 ? "bg-accent" : "bg-ink/60"}`} style={{ width: `${((r.value ?? 0) / max) * 100}%` }} />
            </div>
          </div>
        ))}
        <p className="text-[0.85rem] text-muted">
          <strong className="text-ink">{nrw.display}%</strong> {nrw.label}
          {asOfText(figure("water.nrw").asOf) ? ` (${asOfText(figure("water.nrw").asOf)})` : ""}; Mwache Dam <strong className="text-ink">{done.display}%</strong> {done.label}.
        </p>
      </div>
    </ExportableVisual>
  );
}
