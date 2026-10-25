/**
 * Reusable waterfall step bars — chart primitive.
 * Direct labels; no chartjunk; tabular figures.
 */

import React from 'react';

export interface WaterfallStep {
  id: string;
  label: string;
  value: number;
  /** 0–100 relative width */
  widthPct: number;
  tone?: 'base' | 'positive' | 'negative' | 'accent' | 'muted';
  sublabel?: string;
}

const toneClass: Record<NonNullable<WaterfallStep['tone']>, string> = {
  base: 'bg-[var(--cat-1)]',
  positive: 'bg-[var(--semantic-positive)]',
  negative: 'bg-[var(--semantic-negative)]',
  accent: 'bg-[var(--accent-signal)]',
  muted: 'bg-[var(--cat-2)]',
};

export interface WaterfallStepsProps {
  steps: WaterfallStep[];
  /** Accessible summary of the sequence */
  summary?: string;
}

export function WaterfallSteps({ steps, summary }: WaterfallStepsProps) {
  return (
    <div
      className="space-y-3"
      role="img"
      aria-label={summary ?? 'Waterfall decomposition'}
    >
      {steps.map((step) => (
        <div key={step.id} className="space-y-1">
          <div className="flex justify-between items-baseline gap-2 text-[12px]">
            <span className="text-[var(--text-secondary)] font-medium">{step.label}</span>
            <span className="font-data tabular-nums text-[var(--text-primary)] font-semibold shrink-0">
              {step.value.toLocaleString()}
              {step.sublabel ? (
                <span className="text-[var(--text-tertiary)] font-normal ml-1">{step.sublabel}</span>
              ) : null}
            </span>
          </div>
          <div className="w-full h-7 bg-[var(--surface-muted)] overflow-hidden">
            <div
              className={`h-full ${toneClass[step.tone ?? 'base']} flex items-center px-2 transition-[width] duration-200`}
              style={{ width: `${Math.max(4, Math.min(100, step.widthPct))}%` }}
            >
              <span className="text-[10px] font-data text-white/90 truncate">
                {step.widthPct >= 12 ? `${Math.round(step.widthPct)}%` : ''}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
