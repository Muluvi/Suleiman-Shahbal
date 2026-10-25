import React, { useState } from 'react';
import { Check, X, Minus, Scale, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

interface MetricComparison {
  category: string;
  shahbalRating: 'Superior' | 'Strong';
  shahbalRecord: string;
  nassirRating: 'Deficit' | 'Average';
  nassirRecord: string;
  omarRating: 'Deficit' | 'Average';
  omarRecord: string;
}

export const RivalsComparisonMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'mandate'>('matrix');

  const comparisons: MetricComparison[] = [
    {
      category: 'Private Sector Jobs & SEZ Investment',
      shahbalRating: 'Superior',
      shahbalRecord: 'Direct investor attraction: Jomvu SEZ agreement with DP World and northern corridor logistics networks.',
      nassirRating: 'Deficit',
      nassirRecord: 'Heavy reliance on county civil service payroll; minimal new industrial manufacturing FDI attracted.',
      omarRating: 'Average',
      omarRecord: 'National government rhetoric on affordable credit without direct coastal factory commissioning.',
    },
    {
      category: 'Urban Housing Regeneration Execution',
      shahbalRating: 'Superior',
      shahbalRecord: 'Executed Buxton Point Phase 1 (1,800 units delivered); proven ability to mobilize private equity for urban renewal.',
      nassirRating: 'Deficit',
      nassirRecord: 'Litigation and delays surrounding municipal estate upgrades; public housing stock remains dilapidated.',
      omarRating: 'Average',
      omarRecord: 'Advocated national Boma Yangu framework, but lacks direct project execution track record.',
    },
    {
      category: 'Fiscal Management & Pending Bills',
      shahbalRating: 'Strong',
      shahbalRecord: 'Zero public debt liabilities; private commercial discipline and accountable budget allocation.',
      nassirRating: 'Deficit',
      nassirRecord: 'OCOB FY23/24 audit flags chronic pending bills (>KSh 4B), delayed health worker salaries, and low development absorption.',
      omarRating: 'Average',
      omarRecord: 'Senate oversight record, but zero executive management or municipal budget balancing experience.',
    },
    {
      category: 'Micro-Trader & Informal Market Protection',
      shahbalRating: 'Superior',
      shahbalRecord: 'Statutory policy: Single digital annual license ending multiple daily cess extortions (saves traders KSh 21,900/yr).',
      nassirRating: 'Deficit',
      nassirRecord: 'Enforcement through daily physical cess collection at Kongowea and Marikiti; periodic trader crackdowns.',
      omarRating: 'Average',
      omarRecord: 'Hustler Fund disbursement advocacy; lacks concrete municipal tariff restructuring plan.',
    },
    {
      category: 'Devolution Autonomy & Coastal Standing',
      shahbalRating: 'Strong',
      shahbalRecord: 'EALA legislative independence; cross-party coalition building focused strictly on coastal economic prosperity.',
      nassirRating: 'Average',
      nassirRecord: 'Constrained by ODM party machinery; vulnerable to national coalition political trade-offs.',
      omarRating: 'Deficit',
      omarRecord: 'Tied to national executive policies unpopular at the coast, including controversial port privatization debates.',
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              Visual 06 · Comparative Governance Matrix
            </span>
            <span className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
              3-Way Policy Scorecard &amp; Mandate Breakdown (Visual Guide §5.6 &amp; §5.8)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Empirical Rival Comparison &amp; Incumbent Mandate Analysis
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
            Strictly issue-based evaluation grounded in OCOB audits, Senate reports, and verifiable capital delivery.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg border border-neutral-200 shrink-0">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === 'matrix' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Policy Comparison
          </button>
          <button
            onClick={() => setActiveTab('mandate')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === 'mandate' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            2022 Mandate Vulnerability
          </button>
        </div>
      </div>

      {activeTab === 'matrix' ? (
        /* 3-WAY COMPARISON TABLE */
        <div className="overflow-x-auto border border-neutral-200 rounded-xl bg-white">
          <table className="w-full text-left text-xs divide-y divide-neutral-200">
            <thead className="bg-neutral-100 font-mono uppercase text-[11px] text-neutral-700">
              <tr>
                <th className="px-4 py-3 w-1/4">Policy Dimension</th>
                <th className="px-4 py-3 w-1/4 bg-neutral-900 text-white">
                  Suleiman Shahbal (Challenger)
                </th>
                <th className="px-4 py-3 w-1/4">
                  Abdulswamad Nassir (Incumbent)
                </th>
                <th className="px-4 py-3 w-1/4">
                  Hassan Omar (UDA Contender)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-neutral-50/50">
                  <td className="px-4 py-3.5 font-bold text-neutral-900 align-top">
                    {row.category}
                  </td>
                  <td className="px-4 py-3.5 bg-neutral-50/80 align-top border-x border-neutral-200">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-neutral-900 text-white px-2 py-0.5 rounded">
                        <Check className="w-3 h-3" /> {row.shahbalRating}
                      </span>
                      <p className="text-xs text-neutral-800 leading-relaxed font-medium">
                        {row.shahbalRecord}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 align-top">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                        <AlertCircle className="w-3 h-3 text-amber-700" /> {row.nassirRating}
                      </span>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {row.nassirRecord}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 align-top">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-neutral-200 text-neutral-700 px-2 py-0.5 rounded">
                        <Minus className="w-3 h-3" /> {row.omarRating}
                      </span>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {row.omarRecord}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* MANDATE VULNERABILITY BREAKDOWN (VISUAL ARITHMETIC) */
        <div className="space-y-6">
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 space-y-4">
            <h4 className="text-sm font-bold text-neutral-900 font-mono uppercase">
              The Electoral Mathematics: The 18.5% Incumbent Mandate
            </h4>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Governor Abdulswamad won the August 29, 2022 election with <strong>119,083 votes</strong>. 
              While this represented 54.1% of the ballots cast on the day, it represented merely 
              <strong> 18.5% of the total gazetted electorate (641,913 voters)</strong>.
              A massive <strong>424,725 registered electors (66.2%)</strong> did not cast a ballot.
            </p>

            {/* Visual Electorate Share Bar */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">2022 County Electorate Share Breakdown</span>
                <span className="font-bold text-neutral-900">Total: 641,913 Registered</span>
              </div>

              {/* Stacked Proportional Bar */}
              <div className="h-8 w-full rounded-lg flex overflow-hidden border border-neutral-300 text-xs font-mono font-bold text-white">
                <div
                  className="bg-amber-600 h-full flex items-center justify-center"
                  style={{ width: '18.5%' }}
                  title="Abdulswamad Nassir: 119,083 (18.5%)"
                >
                  Nassir 18.5%
                </div>
                <div
                  className="bg-blue-600 h-full flex items-center justify-center"
                  style={{ width: '15.3%' }}
                  title="Hassan Omar: 98,105 (15.3%)"
                >
                  Omar 15.3%
                </div>
                <div
                  className="bg-neutral-800 h-full flex items-center justify-center"
                  style={{ width: '66.2%' }}
                  title="Non-Voters (Did not vote): 424,725 (66.2%)"
                >
                  Unmobilised Non-Voter Reservoir: 424,725 Electors (66.2%)
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 bg-white rounded border border-neutral-200">
                  <span className="text-amber-800 font-bold block">Abdulswamad Nassir</span>
                  <span className="text-base font-extrabold text-neutral-900">119,083 votes</span>
                  <span className="text-[10px] text-neutral-500 block">54.1% of votes cast · 18.5% of roll</span>
                </div>
                <div className="p-3 bg-white rounded border border-neutral-200">
                  <span className="text-blue-800 font-bold block">Hassan Omar Sarai</span>
                  <span className="text-base font-extrabold text-neutral-900">98,105 votes</span>
                  <span className="text-[10px] text-neutral-500 block">44.6% of votes cast · 15.3% of roll</span>
                </div>
                <div className="p-3 bg-neutral-900 text-white rounded border border-neutral-900">
                  <span className="text-neutral-300 font-bold block">Shahbal&apos;s 2027 Mobilisation Pool</span>
                  <span className="text-base font-extrabold text-white">424,725 non-voters</span>
                  <span className="text-[10px] text-neutral-300 block">Target: Convert 35% to vote = 148k + base</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
