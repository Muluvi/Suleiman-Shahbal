/**
 * ModuleShell — enforces the component contract.
 * Surface: question, model visual, optional subordinate controls.
 * Expandable: calculation layer + sensitivity strip.
 * Always: MODEL → INSIGHT → DECISION strip + provenance footer.
 * Briefing mode collapses controls and calculation layer.
 */

import React, { useState, type ReactNode } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import type { Provenance } from '../design/tokens';

export interface ModuleShellProps {
  /** Decision question the principal is answering */
  question: string;
  /** Named analytical model (shown on surface) */
  modelName: string;
  /** Surface-layer visual (chart / instrument) */
  visual: ReactNode;
  /** Parameter controls — visually subordinate; hidden in briefing mode */
  controls?: ReactNode;
  /** Calculation layer: formula, inputs, assumptions */
  calculation?: ReactNode;
  /** Sensitivity strip: threshold at which DECISION flips */
  sensitivity: ReactNode;
  /** MODEL line — short name of the model in use */
  modelLabel: string;
  /** INSIGHT — one or two sentences of derived insight */
  insight: string;
  /** DECISION — single imperative sentence the principal can act on */
  decision: string;
  /** Provenance footer */
  provenance: Provenance;
  /** When true, collapse controls + calculation (executive briefing density) */
  briefingMode?: boolean;
  /** Optional className for outer container */
  className?: string;
  /** Accessibility summary for the whole module */
  ariaSummary?: string;
}

export function ModuleShell({
  question,
  modelName,
  visual,
  controls,
  calculation,
  sensitivity,
  modelLabel,
  insight,
  decision,
  provenance,
  briefingMode = false,
  className = '',
  ariaSummary,
}: ModuleShellProps) {
  const [calcOpen, setCalcOpen] = useState(false);
  const isProvisional = provenance.status === 'PROVISIONAL';

  return (
    <article
      className={`module-shell border border-[var(--border-subtle)] bg-[var(--surface-elevated)] ${className}`}
      aria-label={ariaSummary ?? question}
    >
      {/* PROVISIONAL badge */}
      {isProvisional && (
        <div
          className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-signal-soft)] border-b border-[var(--border-subtle)]"
          role="status"
        >
          <AlertTriangle className="w-3.5 h-3.5 text-[var(--accent-signal)] shrink-0" aria-hidden />
          <span className="text-[11px] font-medium tracking-wide uppercase text-[var(--accent-signal)]">
            Provisional — replace with verified series at documented drop-in
          </span>
        </div>
      )}

      {/* Question header */}
      <header className="px-5 pt-5 pb-3 border-b border-[var(--border-subtle)]">
        <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--text-tertiary)] mb-1">
          {modelName}
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-[var(--text-xl)] leading-snug text-[var(--text-primary)]">
          {question}
        </h2>
      </header>

      {/* Model visual */}
      <div className="px-5 py-5">{visual}</div>

      {/* Parameter controls — subordinate; hidden in briefing */}
      {!briefingMode && controls && (
        <div className="px-5 pb-4">
          <div className="bg-[var(--surface-muted)] border border-[var(--border-subtle)] p-4">
            {controls}
          </div>
        </div>
      )}

      {/* Calculation layer — expandable; hidden in briefing */}
      {!briefingMode && calculation && (
        <div className="px-5 pb-3">
          <button
            type="button"
            onClick={() => setCalcOpen((o) => !o)}
            className="flex items-center gap-1.5 text-[12px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-expanded={calcOpen}
          >
            {calcOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            Calculation layer
          </button>
          {calcOpen && (
            <div className="mt-3 text-[13px] text-[var(--text-secondary)] border border-[var(--border-subtle)] bg-[var(--surface-paper)] p-4">
              {calculation}
            </div>
          )}
        </div>
      )}

      {/* Sensitivity strip — always visible */}
      <div className="px-5 pb-4">
        <div className="text-[12px] border-l-2 border-[var(--cat-1)] pl-3 py-1 text-[var(--text-secondary)]">
          {sensitivity}
        </div>
      </div>

      {/* MODEL → INSIGHT → DECISION */}
      <div className="mx-5 mb-5 border border-[var(--border-subtle)]">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]">
          <div className="p-3">
            <p className="text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] mb-1">Model</p>
            <p className="text-[13px] font-medium text-[var(--text-primary)]">{modelLabel}</p>
          </div>
          <div className="p-3">
            <p className="text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] mb-1">Insight</p>
            <p className="text-[13px] text-[var(--text-primary)] leading-snug">{insight}</p>
          </div>
          <div className="p-3 bg-[var(--accent-signal-soft)]">
            <p className="text-[10px] uppercase tracking-wider text-[var(--accent-signal)] mb-1">Decision</p>
            <p className="text-[13px] font-semibold text-[var(--accent-signal)] leading-snug">{decision}</p>
          </div>
        </div>
      </div>

      {/* Provenance footer */}
      <footer className="px-5 py-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[var(--text-tertiary)]">
        <span>
          <span className="font-medium text-[var(--text-secondary)]">Source:</span> {provenance.source}
        </span>
        <span>
          <span className="font-medium text-[var(--text-secondary)]">As of:</span> {provenance.vintage}
        </span>
        <span
          className={
            provenance.status === 'VERIFIED'
              ? 'font-medium text-[var(--semantic-positive)]'
              : 'font-medium text-[var(--accent-signal)]'
          }
        >
          {provenance.status}
        </span>
        {provenance.notes && <span className="w-full sm:w-auto">{provenance.notes}</span>}
      </footer>
    </article>
  );
}
