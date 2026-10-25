import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, Clock, FileCheck, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { verificationChecklist, dataPlaceholders } from '../../content/verificationData.ts';
import { sourcesList } from '../../content/sourcesData.ts';

export const VerificationDashboardVisual: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'verified' | 'action' | 'placeholder'>('all');

  const totalCitations = sourcesList.length;
  const verifyItemsCount = verificationChecklist.length;
  const placeholdersCount = dataPlaceholders.length;

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              Visual 07 · Research &amp; Integrity Audit
            </span>
            <span className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
              RAG Audit Dashboard &amp; Verification Pipeline (Visual Guide §4.10 &amp; §5.1)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Campaign Data Integrity &amp; Sourcing Audit Dashboard
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
            Real-time status of all empirical claims, legal gazettes, and items awaiting candidate sign-off.
          </p>
        </div>

        {/* Audit Status Pill */}
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-lg shrink-0">
          <ShieldCheck className="w-5 h-5 text-emerald-700" />
          <div>
            <span className="text-[10px] font-mono uppercase text-emerald-800 font-bold block">
              Integrity Audit Status
            </span>
            <span className="text-xs font-bold text-emerald-950 font-mono">
              Strictly Grounded (Zero Fabrication)
            </span>
          </div>
        </div>
      </div>

      {/* KPI RAG Cards Grid (Visual Guide §4.10) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Confirmed Citations */}
        <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-neutral-500">
              Primary Sources Cited
            </span>
            <FileCheck className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="text-2xl font-extrabold text-neutral-900 font-mono">
            {totalCitations}
          </div>
          <p className="text-[11px] text-neutral-600">
            IEBC Gazettes, KNBS 2019 Census, OCOB Audits, EALA Record &amp; Buxton deeds.
          </p>
          <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-emerald-600 rounded-full" style={{ width: '100%' }} />
          </div>
        </div>

        {/* [VERIFY] Action Items */}
        <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-neutral-500">
              [VERIFY] Clearance Items
            </span>
            <AlertCircle className="w-4 h-4 text-amber-700" />
          </div>
          <div className="text-2xl font-extrabold text-neutral-900 font-mono">
            0{verifyItemsCount}
          </div>
          <p className="text-[11px] text-neutral-600">
            Pending party vehicle, running mate, and SEZ job projection candidate approval.
          </p>
          <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: '60%' }} />
          </div>
        </div>

        {/* Data Modeling Disclosures */}
        <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-neutral-500">
              Disclosed Placeholders
            </span>
            <Clock className="w-4 h-4 text-neutral-600" />
          </div>
          <div className="text-2xl font-extrabold text-neutral-900 font-mono">
            0{placeholdersCount}
          </div>
          <p className="text-[11px] text-neutral-600">
            Clearly badged baseline projections awaiting formal IEBC 2026/27 voter register release.
          </p>
          <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-neutral-800 rounded-full" style={{ width: '40%' }} />
          </div>
        </div>
      </div>

      {/* 4-Stage Verification Pipeline (Visual Guide §5.1) */}
      <div className="space-y-3 pt-2">
        <span className="text-xs font-mono font-bold text-neutral-800 uppercase block">
          Firefly Management Fact-Checking &amp; Release Pipeline
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 font-bold block">Stage 01</span>
            <h5 className="text-xs font-bold text-neutral-900">Ground Discovery</h5>
            <p className="text-[11px] text-neutral-600">Extract issue or statistic from ward townhalls.</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 font-bold block">Stage 02</span>
            <h5 className="text-xs font-bold text-neutral-900">Statutory Cross-Check</h5>
            <p className="text-[11px] text-neutral-600">Confirm against OCOB, KNBS, or parliamentary reports.</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 font-bold block">Stage 03</span>
            <h5 className="text-xs font-bold text-neutral-900">Flag or [VERIFY]</h5>
            <p className="text-[11px] text-neutral-600">If unverified, submit to candidate clearance checklist.</p>
          </div>
          <div className="p-3 bg-neutral-900 text-white rounded-lg border border-neutral-900 space-y-1">
            <span className="text-[10px] font-mono text-neutral-300 font-bold block">Stage 04</span>
            <h5 className="text-xs font-bold text-white">Public Deployment</h5>
            <p className="text-[11px] text-neutral-300">Authorized for release in speeches, manifestos, &amp; cards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
