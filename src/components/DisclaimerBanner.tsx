import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-neutral-300 border-b border-neutral-800 text-xs py-2 px-4 no-print">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="font-medium text-neutral-200">CONFIDENTIAL STRATEGY PROPOSAL</span>
          <span className="text-neutral-500 hidden sm:inline">|</span>
          <span className="text-neutral-400">Prepared by Firefly Management for Hon. Suleiman Shahbal &amp; Campaign Leadership</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-neutral-400">Independent strategy proposal. Not an official campaign site.</span>
        </div>
      </div>
    </div>
  );
};
