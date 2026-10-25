import React, { useState } from 'react';
import { Sliders, CheckCircle2, AlertTriangle, ShieldCheck, ExternalLink, Table } from 'lucide-react';
import buxtonImage from '../../assets/images/buxton_urban_renewal_1792778749005.jpg';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [showTable, setShowTable] = useState<boolean>(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(prev - 5, 0));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(prev + 5, 100));
    }
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Header following Chart Craft §4.12: Headline states finding */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              Visual · Infrastructure Execution Proof
            </span>
            <span className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
              Before / After Slider (Visual Guide §5.6 &amp; §14)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Buxton Point: 1,800 Modern Titled Homes Replaced 1950s Colonial Squalor
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
            Demonstrating tangible private capital mobilization: moving Mombasa from municipal decay to dignified titled homeownership.
          </p>
        </div>

        {/* View Mode Toggle */}
        <button
          onClick={() => setShowTable(!showTable)}
          className="px-3 py-1.5 text-xs font-mono font-semibold rounded-md border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-700 transition-colors shrink-0"
        >
          {showTable ? 'Show Interactive Slider' : 'View as Data Table'}
        </button>
      </div>

      {!showTable ? (
        <div className="space-y-6">
          {/* Instructions and keyboard hint */}
          <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
            <span>Drag slider or use ← / → arrow keys to compare transformation:</span>
            <span className="font-bold text-neutral-900">Split: {sliderPosition}%</span>
          </div>

          {/* Interactive Comparison Container */}
          <div
            className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-neutral-300 select-none cursor-ew-resize bg-neutral-900"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            role="slider"
            aria-valuenow={sliderPosition}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Before and after transformation of Buxton urban renewal estate"
          >
            {/* Background Layer: AFTER (Modern Buxton Point) */}
            <div className="absolute inset-0">
              <img
                src={buxtonImage}
                alt="Delivered modern Buxton Point affordable housing apartments in Mombasa"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* After Label Badge */}
              <div className="absolute top-4 right-4 bg-emerald-950/90 text-emerald-200 border border-emerald-500/40 px-3 py-1.5 rounded-md text-xs font-mono font-bold shadow-md">
                AFTER: Shahbal Execution (1,800+ Modern Apartments)
              </div>
            </div>

            {/* Foreground Clipped Layer: BEFORE (Dilapidated Colonial Municipal Housing) */}
            <div
              className="absolute inset-0 overflow-hidden bg-neutral-800"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 flex flex-col justify-center p-6 sm:p-10 text-white w-full h-full">
                <div className="max-w-sm space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-500/30">
                    BEFORE: 1950s Colonial Decay (Historical Status Quo)
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-neutral-100">
                    50+ Years of Municipal Neglect
                  </h4>
                  <ul className="text-xs text-neutral-300 space-y-1.5 font-sans">
                    <li className="flex items-center gap-1.5">
                      <span className="text-red-400">✗</span> Asbestos roofing condemned by public health
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-red-400">✗</span> Chronic raw sewage leaks &amp; collapsed storm drains
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-red-400">✗</span> Zero homeownership equity; tenants trapped in squalor
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-red-400">✗</span> Only 180 crumbling units on 14 acres of prime land
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center text-white shadow-xl">
                <Sliders className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Slider Range Input (Overlay for effortless touch and mouse scrubbing) */}
            <input
              type="range"
              min={0}
              max={100}
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
              aria-hidden="true"
            />
          </div>

          {/* Comparative Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1.5">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase block">
                Colonial Council Housing (1950–2020)
              </span>
              <div className="text-lg font-bold text-neutral-800 font-mono">180 Municipal Squalor Units</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Decades of empty campaign promises left municipal tenants in asbestos housing without ownership papers.
              </p>
            </div>

            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 space-y-1.5">
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase block">
                Buxton Point Delivered (Shahbal Execution)
              </span>
              <div className="text-lg font-bold text-emerald-950 font-mono">1,800+ Modern Titled Homes</div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Delivered Phase 1 handover with commercial retail, primary school, sports grounds, and structured tenant mortgages.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Accessible Table Alternative */
        <div className="overflow-x-auto border border-neutral-200 rounded-xl">
          <table className="w-full text-left text-xs divide-y divide-neutral-200">
            <thead className="bg-neutral-100 font-mono uppercase text-[11px] text-neutral-700">
              <tr>
                <th className="px-4 py-3">Metric / Standard</th>
                <th className="px-4 py-3">Before (Colonial Estate 1950-2020)</th>
                <th className="px-4 py-3 font-bold bg-neutral-900 text-white">After (Buxton Point Delivery)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-bold text-neutral-900">Total Housing Density</td>
                <td className="px-4 py-3 text-neutral-600">180 crumbling single-story blocks</td>
                <td className="px-4 py-3 font-semibold text-emerald-800 font-mono">1,800+ Modern Master-Planned Units</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold text-neutral-900">Title Deed &amp; Homeownership</td>
                <td className="px-4 py-3 text-neutral-600">Zero ownership (Indefinite council tenancy)</td>
                <td className="px-4 py-3 font-semibold text-emerald-800">Sectional Title Deeds Issued to Buyers</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold text-neutral-900">Original Tenant Protection</td>
                <td className="px-4 py-3 text-neutral-600">Routine arbitrary eviction threats</td>
                <td className="px-4 py-3 font-semibold text-emerald-800">Relocation stipend + first-priority purchase option</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold text-neutral-900">Green &amp; Social Infrastructure</td>
                <td className="px-4 py-3 text-neutral-600">Open open trenches, uncollected garbage</td>
                <td className="px-4 py-3 font-semibold text-emerald-800">Underground drainage, swimming pool, kindergarten, CCTV</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Mandatory Source Citation & Date Bar (§4.12) */}
      <div className="pt-3 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-neutral-500">
        <span>Verified Public Record: Senate Committee on Devolution &amp; Buxton Point Phase 1 Handover Reports</span>
        <span>Independent Verification: State Department for Housing and Urban Development (2023)</span>
      </div>
    </div>
  );
};
