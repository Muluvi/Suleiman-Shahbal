import React, { useState } from 'react';
import { Clock, ShieldAlert, CheckCircle2, AlertTriangle, FileText, Share2, Radio } from 'lucide-react';

interface ResponseStep {
  minuteRange: string;
  phase: string;
  actionTitle: string;
  leadOfficer: string;
  deliverable: string;
  slaLimit: string;
  verificationRule: string;
}

interface ThreatVector {
  id: string;
  title: string;
  severity: 'High' | 'Critical' | 'Medium';
  frequency: string;
  attackNarrative: string;
  counterProof: string;
  inoculationChannel: string;
}

export const RapidResponseTimeline: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const [selectedThreatId, setSelectedThreatId] = useState('threat-buxton');

  const slaSteps: ResponseStep[] = [
    {
      minuteRange: '00 – 15 Min',
      phase: 'Step 1: Detection & Ingestion',
      actionTitle: 'Automated Listening & Digital Forensics',
      leadOfficer: 'Digital Intelligence Desk',
      deliverable: 'Authenticity Verification Dossier',
      slaLimit: 'Max 15 Minutes',
      verificationRule: 'Verify audio spectrograms, reverse search claim images, and check official county gazettes.',
    },
    {
      minuteRange: '15 – 30 Min',
      phase: 'Step 2: Fact-Check & Evidence Assembly',
      actionTitle: 'Primary Source Grounding & Hansard Retrieval',
      leadOfficer: 'Policy & Legal Counsel',
      deliverable: 'Fact-Check Card with Statutory Citation',
      slaLimit: 'Max 30 Minutes',
      verificationRule: 'Must link to a primary statute, court judgment, OCOB audit, or signed project contract. No unbacked assertions.',
    },
    {
      minuteRange: '30 – 45 Min',
      phase: 'Step 3: Campaign Clearance',
      actionTitle: 'Candidate & Strategy Director Sign-off',
      leadOfficer: 'Communications Director',
      deliverable: 'Approved Rebuttal Pack (Text, Video, Audio)',
      slaLimit: 'Max 45 Minutes',
      verificationRule: 'Never repeat the lie in the rebuttal headline; state the truth first, expose the motive, link to evidence.',
    },
    {
      minuteRange: '45 – 60 Min',
      phase: 'Step 4: Multi-Channel Inoculation',
      actionTitle: 'Ward-Wide Saturation & Rapid Broadcast',
      leadOfficer: 'Ground & Digital Captains',
      deliverable: 'Ward WhatsApp Blast + Radio Call-In',
      slaLimit: 'Under 60 Minutes',
      verificationRule: 'Deploy to 30 ward broadcast channels, activate vernacular radio spokespersons, and pin TikTok rebuttal.',
    },
  ];

  const threatVectors: ThreatVector[] = [
    {
      id: 'threat-buxton',
      title: 'Affordable Housing Eviction Misinformation',
      severity: 'Critical',
      frequency: 'High in Mvita & Nyali',
      attackNarrative: 'Opponents allege Buxton Point evicted indigenous coastal tenants without compensation or re-allocation.',
      counterProof: 'Official Senate Committee on Devolution report confirming 100% tenant compensation, relocation allowances, and tenant purchase agreements.',
      inoculationChannel: 'Tenant testimonial mini-documentaries + Senate Hansard excerpt PDF.',
    },
    {
      id: 'threat-cess',
      title: 'Trader Tax & Market Cess Fabrication',
      severity: 'High',
      frequency: 'High in Kongowea & Likoni',
      attackNarrative: 'Rumors claiming Shahbal will introduce private contractor tax enforcement on informal mama mboga traders.',
      counterProof: 'Shahbal Manifesto Article 3: Statutory replacement of daily extortion with a unified digital annual sticker saving traders KSh 21,900.',
      inoculationChannel: 'Interactive trader cess savings calculator shared in market WhatsApp groups.',
    },
    {
      id: 'threat-party',
      title: 'Party Vehicle & National Coalition Rumors',
      severity: 'Medium',
      frequency: 'Cyclical / Pre-Nomination',
      attackNarrative: 'Opponents claim Shahbal is secretly negotiating ticket deals that compromise devolution autonomy.',
      counterProof: 'Clear candidate policy position: Mombasa Gubernatorial mandate is focused on local economic self-determination and jobs, not national factionalism.',
      inoculationChannel: 'Official press release signed by campaign manager + spokesperson morning talkshow tour.',
    },
    {
      id: 'threat-deepfake',
      title: 'AI Synthetic Audio / Deepfake Rallies',
      severity: 'Critical',
      frequency: 'Surging in 2026-2027',
      attackNarrative: 'Fabricated audio clips impersonating Shahbal making derogatory remarks about coastal minority communities.',
      counterProof: 'Digital watermarking hash on all authentic speeches + simultaneous publication of continuous unedited livestream archives.',
      inoculationChannel: 'Emergency verified broadcast clip debunking the audio waveform with side-by-side analysis.',
    },
  ];

  const currentStep = slaSteps[selectedStepIndex];
  const currentThreat = threatVectors.find(t => t.id === selectedThreatId) || threatVectors[0];

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-8 shadow-xs">
      {/* Header conforming to Visual Handbook §4.12: Headline states finding */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800">
              Rapid Response SLA Protocol · Vector Heatmap
            </span>
            <span className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded border border-neutral-200">
              Visual Guide §5.1 &amp; §5.6
            </span>
          </div>
          <h3 className="text-lg sm:text-2xl font-extrabold text-neutral-950 mt-1 leading-snug">
            60-Minute Turnaround Chronometer Enforces Zero Disinformation Permeation Across 30 Wards
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
            Strict turn-around protocol ensuring false narratives are neutralized before establishing public root.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 px-4 py-2.5 rounded-lg shrink-0">
          <Clock className="w-5 h-5 text-neutral-800" />
          <div>
            <span className="text-[10px] font-mono uppercase text-neutral-500 block">Maximum Turnaround SLA</span>
            <span className="text-sm font-extrabold text-neutral-900 font-mono">60 Minutes Zero-Tolerance</span>
          </div>
        </div>
      </div>

      {/* 4-Step Interactive Stepper (Visual Guide §5.1) */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-neutral-800 uppercase block">
          Chronological Inoculation Pipeline
        </span>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {slaSteps.map((step, idx) => {
            const isSelected = selectedStepIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedStepIndex(idx)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-md ring-2 ring-neutral-900'
                    : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                    isSelected ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-200 text-neutral-700'
                  }`}>
                    {step.minuteRange}
                  </span>
                  <span className={`text-[10px] font-mono ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    Step 0{idx + 1}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold leading-snug truncate">
                  {step.actionTitle}
                </h4>
                <p className={`text-[11px] mt-1 truncate ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  {step.leadOfficer}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Inspector */}
        <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
            <span className="text-xs font-mono font-bold uppercase text-neutral-700">
              Protocol: {currentStep.phase} · {currentStep.actionTitle}
            </span>
            <span className="text-xs font-mono bg-white px-2.5 py-0.5 rounded border border-neutral-200 text-neutral-800">
              SLA Window: {currentStep.slaLimit}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-3.5 rounded-lg border border-neutral-200 space-y-1">
              <span className="font-bold text-neutral-900 font-mono block">Required Operational Deliverable</span>
              <p className="text-neutral-700 leading-relaxed">{currentStep.deliverable}</p>
            </div>
            <div className="bg-white p-3.5 rounded-lg border border-neutral-200 space-y-1">
              <span className="font-bold text-neutral-900 font-mono block">Ironclad Verification Rule</span>
              <p className="text-neutral-700 leading-relaxed">{currentStep.verificationRule}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disinformation Threat Vector Matrix (Visual Guide §5.6) */}
      <div className="border-t border-neutral-200 pt-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-neutral-900">
              Coastal Misinformation Threat Matrix
            </h4>
            <p className="text-xs text-neutral-600">
              Pre-calculated rebuttals and primary evidence dossiers ready for immediate deployment.
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-500">4 Monitored Attack Vectors</span>
        </div>

        {/* Threat Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {threatVectors.map((tv) => {
            const isSelected = tv.id === selectedThreatId;
            return (
              <button
                key={tv.id}
                onClick={() => setSelectedThreatId(tv.id)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                    : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                    tv.severity === 'Critical'
                      ? 'bg-red-100 text-red-800'
                      : tv.severity === 'High'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-neutral-200 text-neutral-700'
                  }`}>
                    {tv.severity}
                  </span>
                </div>
                <span className="text-xs font-bold block truncate">{tv.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Threat Playbook Card */}
        <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
            <span className="text-xs font-bold text-neutral-900">{currentThreat.title}</span>
            <span className="text-[11px] font-mono text-neutral-500">{currentThreat.frequency}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded-lg border border-neutral-200 space-y-1">
              <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase block">Hostile Claim</span>
              <p className="text-neutral-700">{currentThreat.attackNarrative}</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-neutral-200 space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block">Verified Counter-Proof</span>
              <p className="text-neutral-700">{currentThreat.counterProof}</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-neutral-200 space-y-1">
              <span className="text-[10px] font-mono font-bold text-neutral-700 uppercase block">Primary Channel</span>
              <p className="text-neutral-700">{currentThreat.inoculationChannel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
