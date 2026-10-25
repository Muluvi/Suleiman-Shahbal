/**
 * Design tokens — typed mirror of tokens.css
 * Use these in TS calculations; CSS variables for presentation.
 */

export const colours = {
  surfacePaper: '#F8F7F4',
  surfaceElevated: '#FFFFFF',
  surfaceMuted: '#F0EEE9',
  surfaceDark: '#0F1419',
  textPrimary: '#1A1A1A',
  textSecondary: '#4A4A4A',
  accentSignal: '#C8102E',
  accentSignalSoft: '#F5E6E9',
  cat: ['#3D5A80', '#5C6B73', '#2A9D8F', '#E9C46A', '#8B7355', '#6D6875'] as const,
  positive: '#2D6A4F',
  negative: '#9B2226',
  neutral: '#495057',
  borderSubtle: '#E5E2DC',
  borderStrong: '#C8C4BC',
} as const;

export const typography = {
  display: 'Georgia, "Times New Roman", "Liberation Serif", serif',
  body: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  data: 'Inter, ui-monospace, "SF Mono", Menlo, Consolas, monospace',
} as const;

export type Status = 'VERIFIED' | 'PROVISIONAL';

export interface Provenance {
  source: string;
  vintage: string;
  status: Status;
  notes?: string;
}
