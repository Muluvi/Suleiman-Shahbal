/**
 * Minimal SVG scatter — chart primitive.
 * Direct labels; tabular figures; keyboard-friendly via title/desc.
 */

import React from 'react';

export interface ScatterPoint {
  id: string;
  x: number;
  y: number;
  r?: number;
  label: string;
  tone?: 'base' | 'positive' | 'negative' | 'accent';
}

export interface ScatterPlotProps {
  points: ScatterPoint[];
  xLabel: string;
  yLabel: string;
  xDomain: [number, number];
  yDomain: [number, number];
  width?: number;
  height?: number;
  summary?: string;
  /** Optional quadrant lines */
  xMid?: number;
  yMid?: number;
}

const toneFill: Record<string, string> = {
  base: 'var(--cat-1)',
  positive: 'var(--semantic-positive)',
  negative: 'var(--semantic-negative)',
  accent: 'var(--accent-signal)',
};

export function ScatterPlot({
  points,
  xLabel,
  yLabel,
  xDomain,
  yDomain,
  width = 400,
  height = 280,
  summary,
  xMid,
  yMid,
}: ScatterPlotProps) {
  const pad = { top: 16, right: 16, bottom: 36, left: 44 };
  const iw = width - pad.left - pad.right;
  const ih = height - pad.top - pad.bottom;

  const sx = (v: number) => pad.left + ((v - xDomain[0]) / (xDomain[1] - xDomain[0])) * iw;
  const sy = (v: number) => pad.top + ih - ((v - yDomain[0]) / (yDomain[1] - yDomain[0])) * ih;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      role="img"
      aria-label={summary ?? 'Scatter plot'}
    >
      <title>{summary ?? 'Scatter plot'}</title>
      {/* Axes */}
      <line x1={pad.left} y1={pad.top + ih} x2={pad.left + iw} y2={pad.top + ih} stroke="var(--border-strong)" strokeWidth={1} />
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + ih} stroke="var(--border-strong)" strokeWidth={1} />
      {/* Mid lines */}
      {xMid !== undefined && (
        <line x1={sx(xMid)} y1={pad.top} x2={sx(xMid)} y2={pad.top + ih} stroke="var(--border-subtle)" strokeDasharray="4 3" />
      )}
      {yMid !== undefined && (
        <line x1={pad.left} y1={sy(yMid)} x2={pad.left + iw} y2={sy(yMid)} stroke="var(--border-subtle)" strokeDasharray="4 3" />
      )}
      {/* Points */}
      {points.map((p) => (
        <g key={p.id}>
          <circle
            cx={sx(p.x)}
            cy={sy(p.y)}
            r={p.r ?? 8}
            fill={toneFill[p.tone ?? 'base']}
            opacity={0.85}
          />
          <text
            x={sx(p.x)}
            y={sy(p.y) - (p.r ?? 8) - 4}
            textAnchor="middle"
            className="fill-[var(--text-secondary)]"
            style={{ fontSize: 10, fontFamily: 'var(--font-data)' }}
          >
            {p.label}
          </text>
        </g>
      ))}
      {/* Axis labels */}
      <text
        x={pad.left + iw / 2}
        y={height - 6}
        textAnchor="middle"
        style={{ fontSize: 11, fill: 'var(--text-tertiary)' }}
      >
        {xLabel}
      </text>
      <text
        x={12}
        y={pad.top + ih / 2}
        textAnchor="middle"
        transform={`rotate(-90, 12, ${pad.top + ih / 2})`}
        style={{ fontSize: 11, fill: 'var(--text-tertiary)' }}
      >
        {yLabel}
      </text>
    </svg>
  );
}
