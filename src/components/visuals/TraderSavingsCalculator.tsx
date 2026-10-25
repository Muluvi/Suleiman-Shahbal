import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, Table, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const TraderSavingsCalculator: React.FC = () => {
  const [marketType, setMarketType] = useState<string>('kongowea');
  const [dailyCess, setDailyCess] = useState<number>(100);
  const [annualFinesRisk, setAnnualFinesRisk] = useState<number>(6000);
  const [operatingDaysPerYear, setOperatingDaysPerYear] = useState<number>(300);
  const [showTable, setShowTable] = useState<boolean>(false);

  // Calculations:
  // Current burden = (daily cess * operating days) + garbage fee (KES 3,600) + loading/health permit (KES 3,000) + askari fines/hassle
  const currentAnnualCess = dailyCess * operatingDaysPerYear;
  const currentFixedPermits = 6600; // Waste + Health
  const currentTotalBurden = currentAnnualCess + currentFixedPermits + annualFinesRisk;

  // Shahbal Unified Single Digital Permit: flat KES 6,000/year (covers single permit, waste, loading, and zero daily cash collection)
  const shahbalUnifiedPermit = 6000;
  const annualSavings = Math.max(0, currentTotalBurden - shahbalUnifiedPermit);

  const handleCelebrate = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch {
      // safe fallback if not supported
    }
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
      
      {/* Header and Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider block">
            Explorable Explanation · Visual Guide §6.3 &amp; §14 (Interactive Policy Calculator)
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
            Single Digital Permit Delivers KSh 21,900 Direct Annual Savings to Micro-Traders
          </h3>
          <p className="text-xs text-neutral-600 mt-0.5">
            Comparative financial model demonstrating how eliminating overlapping daily market cess unlocks liquidity for coastal small enterprises.
          </p>
        </div>

        <button
          onClick={() => setShowTable(!showTable)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 px-3 py-1.5 rounded-md transition-colors shrink-0"
        >
          <Table className="w-3.5 h-3.5" />
          <span>{showTable ? 'Show Calculator' : 'View Assumptions Table'}</span>
        </button>
      </div>

      {!showTable ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Market Type Selector */}
            <div>
              <label className="text-xs font-bold text-neutral-700 uppercase block mb-1 font-mono">
                Select Your Market / Trading Zone:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'kongowea', label: 'Kongowea Wholesale', cess: 120 },
                  { id: 'marikiti', label: 'Marikiti / Mackinnon', cess: 100 },
                  { id: 'likoni', label: 'Likoni Open Market', cess: 80 },
                  { id: 'majengo', label: 'Majengo / Jua Kali', cess: 100 },
                  { id: 'bamburi', label: 'Bamburi / Kisauni Kiosk', cess: 60 }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setMarketType(m.id);
                      setDailyCess(m.cess);
                    }}
                    className={`p-2.5 rounded-lg border text-xs text-left transition-colors ${
                      marketType === m.id
                        ? 'bg-neutral-900 text-white border-neutral-900 font-semibold'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Daily Cess */}
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-neutral-900">
                <span>Daily County Askari Cess / Ticket Fee:</span>
                <span className="font-mono text-sm font-extrabold text-neutral-950">
                  KES {dailyCess} / day
                </span>
              </div>
              <input
                type="range"
                min={30}
                max={250}
                step={10}
                value={dailyCess}
                onChange={(e) => setDailyCess(Number(e.target.value))}
                className="w-full accent-neutral-900 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                aria-label="Daily cess fee slider"
              />
              <div className="flex justify-between text-xs text-neutral-500">
                <span>KES 30 (Small kiosk)</span>
                <span>KES 250 (Wholesale lorry/crate)</span>
              </div>
            </div>

            {/* Slider 2: Estimated Annual Fines & Harassment Losses */}
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-neutral-900">
                <span>Estimated Annual Lost Produce / Impound Fines / Bribes:</span>
                <span className="font-mono text-sm font-extrabold text-neutral-950">
                  KES {annualFinesRisk.toLocaleString()} / year
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={18000}
                step={1000}
                value={annualFinesRisk}
                onChange={(e) => setAnnualFinesRisk(Number(e.target.value))}
                className="w-full accent-neutral-900 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                aria-label="Annual impound and fines slider"
              />
              <div className="flex justify-between text-xs text-neutral-500">
                <span>KES 0 (Zero harassment)</span>
                <span>KES 18,000 (Recurrent impounds)</span>
              </div>
            </div>

          </div>

          {/* Right: Savings Impact Box (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 text-white rounded-xl p-6 flex flex-col justify-between space-y-6 shadow-md">
            
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider block">
                Direct Household Financial Impact
              </span>

              <div>
                <span className="text-xs text-neutral-400 block">Current Annual Extortion &amp; Fees:</span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-rose-300 tabular-nums">
                  KES {currentTotalBurden.toLocaleString()} / yr
                </span>
              </div>

              <div>
                <span className="text-xs text-neutral-400 block">Under Shahbal's Unified Digital License:</span>
                <span className="text-lg font-bold font-mono text-neutral-200 tabular-nums">
                  KES {shahbalUnifiedPermit.toLocaleString()} / yr (Flat fee)
                </span>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">
                  Net Annual Savings in Your Pocket
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-300 tabular-nums block mt-1">
                  KES {annualSavings.toLocaleString()}
                </span>
                <span className="text-xs text-neutral-300 block mt-1">
                  Enough to pay two school terms of secondary school fees or restock your stall.
                </span>
              </div>
            </div>

            <button
              onClick={handleCelebrate}
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Celebrate Enterprise Dignity</span>
            </button>

          </div>

        </div>
      ) : (
        /* Assumptions Table Fallback */
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-neutral-100 text-neutral-700 font-mono uppercase border-b border-neutral-200">
                <th className="p-3 font-bold">Cost Item</th>
                <th className="p-3 font-bold text-right">Current County Fee Regime</th>
                <th className="p-3 font-bold text-right">Shahbal Unified License</th>
                <th className="p-3 font-bold">Regulatory Reform Justification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-800">
              <tr>
                <td className="p-3 font-medium">Daily Market Cess (Average KES 100/day)</td>
                <td className="p-3 text-right font-mono tabular-nums">KES 30,000 / yr</td>
                <td className="p-3 text-right font-mono tabular-nums font-bold text-emerald-800">KES 0 (Abolished)</td>
                <td className="p-3 text-neutral-600">Replaced by single digitized QR-coded annual permit</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Solid Waste &amp; Sanitation Levy</td>
                <td className="p-3 text-right font-mono tabular-nums">KES 3,600 / yr</td>
                <td className="p-3 text-right font-mono tabular-nums font-bold text-emerald-800">Included in permit</td>
                <td className="p-3 text-neutral-600">Market waste collection guaranteed by county trucks</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Loading &amp; Offloading County Permits</td>
                <td className="p-3 text-right font-mono tabular-nums">KES 3,000 / yr</td>
                <td className="p-3 text-right font-mono tabular-nums font-bold text-emerald-800">Included in permit</td>
                <td className="p-3 text-neutral-600">Eliminates double-taxation on goods entering Kongowea</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Impound Bail, Produce Loss &amp; Harassment</td>
                <td className="p-3 text-right font-mono tabular-nums">KES 6,000+ / yr</td>
                <td className="p-3 text-right font-mono tabular-nums font-bold text-emerald-800">KES 0 (Zero Askari Shakedowns)</td>
                <td className="p-3 text-neutral-600">Strict enforcement code banning physical askari cash seizure</td>
              </tr>
              <tr className="bg-neutral-50 font-bold">
                <td className="p-3">Total Estimated Annual Trader Expense</td>
                <td className="p-3 text-right font-mono tabular-nums text-rose-800">KES 42,600 / yr</td>
                <td className="p-3 text-right font-mono tabular-nums text-emerald-800">KES 6,000 / yr</td>
                <td className="p-3 font-mono text-emerald-800">Net Savings: KES 36,600/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
