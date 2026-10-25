import React, { useState } from 'react';
import { BarChart3, HelpCircle, Check, Info } from 'lucide-react';

interface SentimentItem {
  id: string;
  issue: string;
  category: string;
  stronglyDisagree: number;
  somewhatDisagree: number;
  neutral: number;
  somewhatAgree: number;
  stronglyAgree: number;
  netAgreement: number; // calculated: agree - disagree
  takeaway: string;
}

export const VoterSentimentDivergingBar: React.FC = () => {
  const [selectedIssueId, setSelectedIssueId] = useState<string>('port-jobs');
  const [showTable, setShowTable] = useState<boolean>(false);

  const sentimentData: SentimentItem[] = [
    {
      id: 'market-cess',
      issue: 'Replacing daily market cess with a single annual digital license will relieve small traders',
      category: 'Trader Economy',
      stronglyDisagree: 2,
      somewhatDisagree: 4,
      neutral: 4,
      somewhatAgree: 28,
      stronglyAgree: 62,
      netAgreement: 84,
      takeaway: 'Overwhelming 90% gross consensus among Kongowea and Marikiti mama mboga traders against daily cess extortion.',
    },
    {
      id: 'port-jobs',
      issue: 'Mombasa Port logistics & Jomvu SEZ must guarantee a mandatory 70% coastal youth hiring quota',
      category: 'Blue Economy & Jobs',
      stronglyDisagree: 3,
      somewhatDisagree: 5,
      neutral: 6,
      somewhatAgree: 22,
      stronglyAgree: 64,
      netAgreement: 78,
      takeaway: 'Youth in Kisauni, Changamwe and Jomvu view port job reservation as non-negotiable for their vote.',
    },
    {
      id: 'housing-model',
      issue: 'The Buxton Point PPP urban renewal model should be replicated across Changamwe and Likoni estates',
      category: 'Housing Dignity',
      stronglyDisagree: 6,
      somewhatDisagree: 9,
      neutral: 10,
      somewhatAgree: 31,
      stronglyAgree: 44,
      netAgreement: 60,
      takeaway: '75% favor urban renewal when tenant purchase rights and relocation guarantees are legally protected.',
    },
    {
      id: 'water-crisis',
      issue: 'The current county administration has failed to solve chronic water shortages and rationing',
      category: 'County Governance',
      stronglyDisagree: 8,
      somewhatDisagree: 11,
      neutral: 7,
      somewhatAgree: 26,
      stronglyAgree: 48,
      netAgreement: 55,
      takeaway: '74% agreement that water delivery is Mombasa\'s most glaring county government service breakdown.',
    },
    {
      id: 'private-exec',
      issue: 'A proven private sector executive can manage Mombasa\'s KSh 14B budget better than career politicians',
      category: 'Leadership Competence',
      stronglyDisagree: 5,
      somewhatDisagree: 8,
      neutral: 12,
      somewhatAgree: 33,
      stronglyAgree: 42,
      netAgreement: 62,
      takeaway: '75% of voters across middle and informal classes seek commercial management over political rhetoric.',
    },
  ];

  const currentItem = sentimentData.find((s) => s.id === selectedIssueId) || sentimentData[0];

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Header following Chart Craft §4.12: Headline states finding */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              Visual · Sentiment Architecture
            </span>
            <span className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
              Diverging Stacked Bar (Visual Guide §4.1 &amp; §14)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Over 80% of Electorate Demands Economic Overhaul &amp; Single Trader Permit
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
            Diverging sentiment baseline across Mombasa wards showing disagreement (left) versus agreement (right) centered at neutral.
          </p>
        </div>

        {/* View Toggle */}
        <button
          onClick={() => setShowTable(!showTable)}
          className="px-3 py-1.5 text-xs font-mono font-semibold rounded-md border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-700 transition-colors shrink-0"
        >
          {showTable ? 'Show Diverging Chart' : 'View as Data Table'}
        </button>
      </div>

      {!showTable ? (
        <div className="space-y-6">
          {/* Legend */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono border-b border-neutral-100 pb-3">
            <div className="flex items-center gap-2 text-rose-700 font-semibold">
              <span className="w-3 h-3 bg-rose-500 rounded-xs inline-block" />
              <span>Strongly Disagree</span>
              <span className="w-3 h-3 bg-rose-300 rounded-xs inline-block ml-2" />
              <span>Somewhat Disagree</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-500">
              <span className="w-3 h-3 bg-neutral-200 rounded-xs inline-block" />
              <span>Neutral Midpoint (0%)</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-800 font-semibold">
              <span className="w-3 h-3 bg-emerald-400 rounded-xs inline-block" />
              <span>Somewhat Agree</span>
              <span className="w-3 h-3 bg-emerald-600 rounded-xs inline-block ml-2" />
              <span>Strongly Agree</span>
            </div>
          </div>

          {/* Diverging Bars Stack */}
          <div className="space-y-5">
            {sentimentData.map((item) => {
              const isSelected = item.id === selectedIssueId;
              const disagreeTotal = item.stronglyDisagree + item.somewhatDisagree;
              const agreeTotal = item.stronglyAgree + item.somewhatAgree;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIssueId(item.id)}
                  className={`cursor-pointer p-3.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-neutral-900 bg-neutral-50 shadow-xs'
                      : 'border-neutral-200 hover:border-neutral-300 bg-white'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 text-xs">
                    <span className="font-bold text-neutral-900 leading-snug">
                      {item.issue}
                    </span>
                    <span className="font-mono text-[11px] text-emerald-800 font-bold shrink-0">
                      Net +{item.netAgreement}% Agree
                    </span>
                  </div>

                  {/* 100% Diverging Bar Representation */}
                  <div className="h-6 w-full rounded-md flex overflow-hidden text-[10px] font-mono text-white font-bold">
                    {/* Disagree (Rose) */}
                    <div
                      className="bg-rose-500 h-full flex items-center justify-center"
                      style={{ width: `${item.stronglyDisagree}%` }}
                      title={`Strongly Disagree: ${item.stronglyDisagree}%`}
                    >
                      {item.stronglyDisagree > 4 ? `${item.stronglyDisagree}%` : ''}
                    </div>
                    <div
                      className="bg-rose-300 text-rose-950 h-full flex items-center justify-center"
                      style={{ width: `${item.somewhatDisagree}%` }}
                      title={`Somewhat Disagree: ${item.somewhatDisagree}%`}
                    >
                      {item.somewhatDisagree > 4 ? `${item.somewhatDisagree}%` : ''}
                    </div>

                    {/* Neutral */}
                    <div
                      className="bg-neutral-200 text-neutral-700 h-full flex items-center justify-center"
                      style={{ width: `${item.neutral}%` }}
                      title={`Neutral: ${item.neutral}%`}
                    >
                      {item.neutral}%
                    </div>

                    {/* Agree (Emerald) */}
                    <div
                      className="bg-emerald-400 text-emerald-950 h-full flex items-center justify-center"
                      style={{ width: `${item.somewhatAgree}%` }}
                      title={`Somewhat Agree: ${item.somewhatAgree}%`}
                    >
                      {item.somewhatAgree}%
                    </div>
                    <div
                      className="bg-emerald-600 h-full flex items-center justify-center"
                      style={{ width: `${item.stronglyAgree}%` }}
                      title={`Strongly Agree: ${item.stronglyAgree}%`}
                    >
                      {item.stronglyAgree}%
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 mt-1.5">
                    <span>Disagreement: {disagreeTotal}%</span>
                    <span className="text-neutral-400">Category: {item.category}</span>
                    <span>Agreement: {agreeTotal}%</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Strategic Insight Inspector */}
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 uppercase">
              <Check className="w-3.5 h-3.5 text-emerald-700" />
              <span>Campaign Mobilisation Application ({currentItem.category})</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {currentItem.takeaway}
            </p>
          </div>
        </div>
      ) : (
        /* Accessible Data Table Fallback */
        <div className="overflow-x-auto border border-neutral-200 rounded-xl">
          <table className="w-full text-left text-xs divide-y divide-neutral-200">
            <thead className="bg-neutral-100 font-mono uppercase text-[11px] text-neutral-700">
              <tr>
                <th className="px-4 py-3">Policy &amp; Grievance Issue</th>
                <th className="px-4 py-3 text-right">Disagree</th>
                <th className="px-4 py-3 text-right">Neutral</th>
                <th className="px-4 py-3 text-right">Agree</th>
                <th className="px-4 py-3 text-right">Net Agreement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 bg-white">
              {sentimentData.map((row) => (
                <tr key={row.id} className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium text-neutral-900">{row.issue}</td>
                  <td className="px-4 py-3 text-right font-mono text-rose-700 font-semibold tabular-nums">
                    {row.stronglyDisagree + row.somewhatDisagree}%
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-neutral-600 tabular-nums">{row.neutral}%</td>
                  <td className="px-4 py-3 text-right font-mono text-emerald-800 font-semibold tabular-nums">
                    {row.stronglyAgree + row.somewhatAgree}%
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-extrabold text-neutral-900 tabular-nums">
                    +{row.netAgreement}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mandatory Source Citation & Date Bar (§4.12) */}
      <div className="pt-3 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-neutral-500">
        <span>Baseline Source: Firefly Management Coastal Ward Focus Group Audits &amp; Community Listening</span>
        <span>Survey Sample: N=1,200 Registered Electors across all 6 Mombasa Sub-Counties (Sept 2026)</span>
      </div>
    </div>
  );
};
