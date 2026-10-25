/**
 * Business domain schemas — all PROVISIONAL until real series are dropped in.
 * Single documented location per module for replacement data.
 */

export type ProvisionalStatus = 'PROVISIONAL';

export interface PortfolioPosition {
  id: string;
  name: string;
  /** Relative market share (0–2, 1 = parity) */
  relativeShare: number;
  /** Market growth % */
  growthPct: number;
  /** Capital at risk (currency units) */
  capital: number;
  /** Risk score 0–100 */
  riskScore: number;
}

export interface MacroScenario {
  id: string;
  label: string;
  /** Path points for the dominant exposure (index or level) */
  path: number[];
  probability?: number;
}

export interface MacroDriver {
  id: string;
  name: string;
  /** Impact on portfolio value if driver moves +1σ */
  impact: number;
}

export interface CorridorCostStep {
  id: string;
  label: string;
  costPerTeu: number;
}

export interface ProjectCashFlow {
  year: number;
  netCashFlow: number;
}

export interface SectorForce {
  id: string;
  name: string;
  /** 1 (favourable) – 5 (hostile) */
  score: number;
}

export interface RealAsset {
  id: string;
  name: string;
  yieldPct: number;
  capRatePct: number;
  noiGrowthPct: number;
  value: number;
}

/** Drop-in location: replace the arrays below with verified series. */
export const PLACEHOLDER_PORTFOLIO: PortfolioPosition[] = [
  { id: 'p1', name: 'Position A', relativeShare: 1.4, growthPct: 12, capital: 40, riskScore: 35 },
  { id: 'p2', name: 'Position B', relativeShare: 0.7, growthPct: 18, capital: 25, riskScore: 55 },
  { id: 'p3', name: 'Position C', relativeShare: 1.1, growthPct: 4, capital: 50, riskScore: 25 },
  { id: 'p4', name: 'Position D', relativeShare: 0.4, growthPct: 8, capital: 15, riskScore: 70 },
];

export const PLACEHOLDER_MACRO_SCENARIOS: MacroScenario[] = [
  { id: 'base', label: 'Base', path: [100, 102, 104, 105, 107, 108] },
  { id: 'down', label: 'Downside', path: [100, 97, 93, 90, 88, 86] },
  { id: 'up', label: 'Upside', path: [100, 105, 110, 116, 122, 128] },
];

export const PLACEHOLDER_MACRO_DRIVERS: MacroDriver[] = [
  { id: 'fx', name: 'FX (USD/KES)', impact: -12 },
  { id: 'rates', name: 'Policy rate', impact: -8 },
  { id: 'commodity', name: 'Bunker / energy', impact: -6 },
  { id: 'demand', name: 'Trade volume', impact: 10 },
];

export const PLACEHOLDER_CORRIDOR: CorridorCostStep[] = [
  { id: 'port', label: 'Port handling & dwell', costPerTeu: 280 },
  { id: 'customs', label: 'Customs & compliance', costPerTeu: 95 },
  { id: 'inland', label: 'Inland haul', costPerTeu: 420 },
  { id: 'lastmile', label: 'Last-mile / depot', costPerTeu: 110 },
];

export const PLACEHOLDER_PROJECT_CF: ProjectCashFlow[] = [
  { year: 0, netCashFlow: -100 },
  { year: 1, netCashFlow: -20 },
  { year: 2, netCashFlow: 15 },
  { year: 3, netCashFlow: 35 },
  { year: 4, netCashFlow: 45 },
  { year: 5, netCashFlow: 55 },
];

export const PLACEHOLDER_FORCES: SectorForce[] = [
  { id: 'rivalry', name: 'Rivalry', score: 3 },
  { id: 'entrants', name: 'New entrants', score: 2 },
  { id: 'suppliers', name: 'Supplier power', score: 3 },
  { id: 'buyers', name: 'Buyer power', score: 4 },
  { id: 'substitutes', name: 'Substitutes', score: 2 },
];

export const PLACEHOLDER_REAL_ASSETS: RealAsset[] = [
  { id: 'a1', name: 'Asset Alpha', yieldPct: 7.2, capRatePct: 6.5, noiGrowthPct: 3.0, value: 80 },
  { id: 'a2', name: 'Asset Beta', yieldPct: 5.8, capRatePct: 6.8, noiGrowthPct: 1.5, value: 45 },
  { id: 'a3', name: 'Asset Gamma', yieldPct: 8.1, capRatePct: 7.0, noiGrowthPct: 4.2, value: 30 },
];
