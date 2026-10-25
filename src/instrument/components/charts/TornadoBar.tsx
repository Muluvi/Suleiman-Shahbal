/**
 * Tornado / horizontal sensitivity bars — chart primitive.
 */

import React from 'react';

export interface TornadoItem {
  id: string;
  label: string;
  /** Signed impact */
  value: number;
}

export interface TornadoBarProps {
  items: TornadoItem[];
  summary?: string;
}

export function TornadoBar({ items, summary }: TornadoBarProps) {
  const maxAbs = Math.max(...items.map((i) => Math.abs(i.value)), 1);
  const sorted = [...items].sort((a, b) => Math.abs(b.value) - Math.abs(a.value));

  return (
    <div className="space-y-2" role="img" aria-label={summary ?? 'Sensitivity tornado'}>
      {sorted.map((item) => {
        const pct = (Math.abs(item.value) / maxAbs) * 50;
        const isNeg = item.value < 0;
        return (
          <div key={item.id} className="flex items-center gap-2 text-[12px]">
            <span className="w-28 shrink-0 text-[var(--text-secondary)] truncate text-right">
              {item.label}
            </span>
            <div className="flex-1 flex h-5 relative">
              <div className="w-1/2 flex justify-end">
                {isNeg && (
                  <div
                    className="h-full bg-[var(--semantic-negative)] opacity-80"
                    style={{ width: `${pct * 2}%` }}
                  />
                )}
              </div>
              <div className="w-1/2">
                {!isNeg && (
                  <div
                    className="h-full bg-[var(--semantic-positive)] opacity-80"
                    style={{ width: `${pct * 2}%` }}
                  />
                )}
              </div>
            </div>
            <span className="w-10 shrink-0 font-data tabular-nums text-[var(--text-primary)]">
              {item.value > 0 ? '+' : ''}
              {item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
