import React from 'react';
import { ShieldCheck, MapPin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Strategy Lead */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-base font-bold text-white tracking-tight">
              Firefly Management
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              Strategic brand activation, research-grounded content production, and digital campaign advisory 
              for transformative East African political and institutional campaigns.
            </p>
            <div className="flex items-center gap-2 text-neutral-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>Nairobi &amp; Mombasa, Kenya</span>
            </div>
          </div>

          {/* Quick Module Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-mono font-bold text-neutral-200 uppercase tracking-wider block">
              Strategy Modules
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button onClick={() => onNavigate('overview')} className="text-left text-neutral-400 hover:text-white transition-colors">
                Candidate Brief
              </button>
              <button onClick={() => onNavigate('persuasion')} className="text-left text-neutral-400 hover:text-white transition-colors">
                Voter Segments
              </button>
              <button onClick={() => onNavigate('narrative')} className="text-left text-neutral-400 hover:text-white transition-colors">
                Message House
              </button>
              <button onClick={() => onNavigate('content')} className="text-left text-neutral-400 hover:text-white transition-colors">
                Content Calendar
              </button>
              <button onClick={() => onNavigate('wards')} className="text-left text-neutral-400 hover:text-white transition-colors">
                30 Wards Data
              </button>
              <button onClick={() => onNavigate('rapid-response')} className="text-left text-neutral-400 hover:text-white transition-colors">
                Rapid Response
              </button>
              <button onClick={() => onNavigate('rivals')} className="text-left text-neutral-400 hover:text-white transition-colors">
                Rivals Contrast
              </button>
              <button onClick={() => onNavigate('verification')} className="text-left text-neutral-400 hover:text-white transition-colors">
                Sources &amp; Verify
              </button>
            </div>
          </div>

          {/* Disclaimer & Back to Top */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold text-neutral-200 uppercase tracking-wider block">
              Document Governance
            </span>
            <p className="text-neutral-400 leading-relaxed text-xs">
              Independent strategy proposal prepared solely for review by Hon. Suleiman Shahbal and the campaign secretariat. 
              Not an official campaign site.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white font-medium transition-colors pt-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Hairline & Copyright */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; 2026 Firefly Management. All rights reserved. Confidential strategic work product.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Kenya Data Protection Act 2019 Compliant</span>
            <span aria-hidden="true">·</span>
            <span>Elections Act 2011 Aligned</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
