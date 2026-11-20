"use client";

import { useId, useState, type ReactNode } from "react";

import { useInView } from "../../hooks/use-in-view";

/* ------------------------------------------------------------------ numbers */

/** Tabular, abbreviated, and the same everywhere — dashboards read wrong when they disagree. */
export function fmt(n: number, pct = false): string {
  if (!Number.isFinite(n)) return "—";
  if (pct) return `${Number.isInteger(n) ? n : n.toFixed(1)}%`;
  const abs = Math.abs(n);
  if (abs >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(abs >= 10_000_000_000 ? 0 : 1)}bn`;
  if (abs >= 1_000_000) return `${(n / 1_000_000).toFixed(abs >= 10_000_000 ? 0 : 2)}m`;
  if (abs >= 10_000) return `${Math.round(n / 1_000)}k`;
  return n.toLocaleString("en-KE", { maximumFractionDigits: Number.isInteger(n) ? 0 : 1 });
}

/* -------------------------------------------------------------------- frame */

/**
 * The frame every derived figure sits in.
 *
 * Deliberately almost nothing: a hairline, a caption line and the figure. 272 of these run down
 * one page, so anything the frame spends — a border, a shadow, a fill — is spent 272 times, and
 * the handbook's squint test fails the moment the frames start competing with the figures.
 *
 * `content-visibility` is set on the frame rather than on the section, because these are the
 * elements that are cheap to skip and expensive to lay out.
 */
export function VizFrame({
  caption,
  note,
  children,
  wide = false,
}: {
  caption: string;
  note?: string;
  children: ReactNode;
  wide?: boolean;
}) {
  const [ref, inView] = useInView<HTMLElement>({ amount: 0.12, margin: "120px 0px" }); // verify-figures-ignore — viewport fraction, not a campaign figure
  return (
    <figure
      ref={ref}
      data-viz
      data-in-view={inView ? "true" : "false"}
      className={`pv not-prose my-5 sm:my-6 ${wide ? "pv--wide" : ""}`}
    >
      <figcaption className="pv__cap">
        <span className="pv__cap-rule" aria-hidden="true" />
        <span className="pv__cap-text">{caption}</span>
      </figcaption>
      <div className="pv__body">{children}</div>
      {note ? <p className="pv__note">{note}</p> : null}
    </figure>
  );
}

/* ------------------------------------------------------------- bar geometry */

/** A width as a percentage of the largest value, floored so the smallest bar is still a bar. */
export function share(value: number, max: number): number {
  if (!max || !Number.isFinite(value)) return 0;
  return Math.max(2.5, Math.min(100, (Math.abs(value) / Math.abs(max)) * 100));
}

/* ----------------------------------------------------------------- disclose */

/**
 * Tap to read the rest.
 *
 * Every derived figure is built from a clause of the document, and a clause truncated to fit a
 * bar label is not evidence. The full text is always one tap away and always in the DOM, so the
 * printed page and a screen reader get it whether or not anyone opened it.
 */
export function Disclose({ summary, children }: { summary: ReactNode; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="pv-disclose">
      <button
        type="button"
        className="pv-disclose__btn"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {summary}
        <span className="pv-disclose__chev" aria-hidden="true" data-open={open} />
      </button>
      <div id={id} className="pv-disclose__body" data-open={open}>
        {children}
      </div>
    </div>
  );
}
