/**
 * Decision instrument shell — dual domain, cockpit / briefing toggle.
 * All modules mount under the ModuleShell contract.
 */

import React, { useState } from 'react';
import { TurnoutPathModule } from './modules/TurnoutPathModule';
import { AbstentionModule } from './modules/electoral/AbstentionModule';
import { TraderPermitModule } from './modules/electoral/TraderPermitModule';
import { PortfolioCommandModule } from './modules/business/PortfolioCommandModule';
import { MacroMarketsModule } from './modules/business/MacroMarketsModule';
import { CorridorModule } from './modules/business/CorridorModule';
import { ProjectFinanceModule } from './modules/business/ProjectFinanceModule';
import { SectorEntryModule } from './modules/business/SectorEntryModule';
import { RealAssetsModule } from './modules/business/RealAssetsModule';

type Domain = 'business' | 'electoral';

const BUSINESS_MODULES = [
  { id: 'portfolio', label: 'Portfolio Command', Component: PortfolioCommandModule },
  { id: 'macro', label: 'Macro & Markets', Component: MacroMarketsModule },
  { id: 'corridor', label: 'Trade Corridor', Component: CorridorModule },
  { id: 'project', label: 'Project Finance', Component: ProjectFinanceModule },
  { id: 'sector', label: 'Sector Entry', Component: SectorEntryModule },
  { id: 'real', label: 'Real Assets', Component: RealAssetsModule },
] as const;

const ELECTORAL_MODULES = [
  { id: 'turnout', label: 'Turnout Path', Component: TurnoutPathModule },
  { id: 'abstention', label: 'Abstention Structure', Component: AbstentionModule },
  { id: 'trader', label: 'Trader Permit', Component: TraderPermitModule },
] as const;

export default function App() {
  const [domain, setDomain] = useState<Domain>('electoral');
  const [briefingMode, setBriefingMode] = useState(false);
  const [activeId, setActiveId] = useState<string>('turnout');

  const modules = domain === 'business' ? BUSINESS_MODULES : ELECTORAL_MODULES;
  const active = modules.find((m) => m.id === activeId) ?? modules[0];
  const ActiveComponent = active.Component;

  const switchDomain = (d: Domain) => {
    setDomain(d);
    setActiveId(d === 'business' ? BUSINESS_MODULES[0].id : ELECTORAL_MODULES[0].id);
  };

  return (
    <div className="min-h-screen bg-[var(--surface-paper)] text-[var(--text-primary)] antialiased">
      <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] truncate">
              Decision instrument
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[14px] sm:text-[16px] leading-tight truncate">
              Dual-domain cockpit
            </h1>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex border border-[var(--border-strong)]" role="group" aria-label="Domain">
              <button
                type="button"
                onClick={() => switchDomain('electoral')}
                className={`px-2.5 py-1.5 text-[11px] font-medium ${
                  domain === 'electoral'
                    ? 'bg-[var(--text-primary)] text-[var(--surface-elevated)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
                }`}
                aria-pressed={domain === 'electoral'}
              >
                Public &amp; Electoral
              </button>
              <button
                type="button"
                onClick={() => switchDomain('business')}
                className={`px-2.5 py-1.5 text-[11px] font-medium ${
                  domain === 'business'
                    ? 'bg-[var(--text-primary)] text-[var(--surface-elevated)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
                }`}
                aria-pressed={domain === 'business'}
              >
                Business &amp; Investment
              </button>
            </div>

            <div className="flex border border-[var(--border-strong)]" role="group" aria-label="Density">
              <button
                type="button"
                onClick={() => setBriefingMode(false)}
                className={`px-2.5 py-1.5 text-[11px] font-medium ${
                  !briefingMode
                    ? 'bg-[var(--text-primary)] text-[var(--surface-elevated)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
                }`}
                aria-pressed={!briefingMode}
              >
                Cockpit
              </button>
              <button
                type="button"
                onClick={() => setBriefingMode(true)}
                className={`px-2.5 py-1.5 text-[11px] font-medium ${
                  briefingMode
                    ? 'bg-[var(--text-primary)] text-[var(--surface-elevated)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
                }`}
                aria-pressed={briefingMode}
              >
                Briefing
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row gap-6">
        <nav
          className="lg:w-52 shrink-0 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
          aria-label="Modules"
        >
          {modules.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActiveId(m.id)}
              className={`text-left px-3 py-2 text-[12px] font-medium whitespace-nowrap border ${
                activeId === m.id
                  ? 'border-[var(--text-primary)] bg-[var(--surface-elevated)] text-[var(--text-primary)]'
                  : 'border-transparent text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
              }`}
              aria-current={activeId === m.id ? 'page' : undefined}
            >
              {m.label}
            </button>
          ))}
        </nav>

        <main className="flex-1 min-w-0">
          <ActiveComponent briefingMode={briefingMode} />
        </main>
      </div>

      <footer className="border-t border-[var(--border-subtle)] py-5 text-center text-[11px] text-[var(--text-tertiary)]">
        Data spine · figures trace to named source or carry PROVISIONAL badge · IEBC 2022 verified where stated
      </footer>
    </div>
  );
}
