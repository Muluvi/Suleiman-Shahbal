import React, { useState } from 'react';
import { AlertTriangle, Clock, CheckCircle, ShieldAlert, ArrowRight, CornerDownRight, FileText } from 'lucide-react';

interface DecisionNode {
  id: string;
  category: string;
  trigger: string;
  sla: string;
  step1: string;
  step2: string;
  step3: string;
  spokesperson: string;
  channels: string[];
}

export const CrisisDecisionTree: React.FC = () => {
  const [selectedThreatId, setSelectedThreatId] = useState<string>('deepfake');
  const [showMermaidFallback, setShowMermaidFallback] = useState<boolean>(false);

  const threatScenarios: DecisionNode[] = [
    {
      id: 'deepfake',
      category: 'Emergency: AI Voice Clone / Synthetic Media',
      trigger: 'Fabricated audio recording appearing to have candidate disparaging a coastal community or religious group.',
      sla: '15 Minutes Maximum',
      step1: 'War room tech desk generates cryptographic waveform & metadata proof of synthetic audio.',
      step2: 'Emergency takedown filings via expedited political threat desks at Meta, TikTok & X.',
      step3: 'Candidate records live physical video from campaign HQ with multi-faith leaders beside him.',
      spokesperson: 'Candidate (Hon. Suleiman Shahbal) + Interfaith Council Chair',
      channels: ['Emergency Television Bulletins', 'WhatsApp Broadcasts', 'Verified Blue-Check Handles']
    },
    {
      id: 'forged_letter',
      category: 'Critical: Forged Withdrawal Letter or Fake Gazette',
      trigger: 'Counterfeit letterhead circulated claiming candidate has stepped down in favor of a competitor.',
      sla: '20 Minutes Maximum',
      step1: 'Apply high-contrast red "UONGO / FORGED" stamp across image with timestamp.',
      step2: 'File criminal cybercrime notice with DCI Cyber Directorate and IEBC Secretariat.',
      step3: 'Deploy synchronized 30-ward WhatsApp captain cascade: "Shahbal is 100% on the ballot."',
      spokesperson: 'Campaign Director + Lead Legal Counsel',
      channels: ['Ward WhatsApp Networks', 'SMS Push Broadcast', 'Radio Station Call-ins']
    },
    {
      id: 'land_rumor',
      category: 'High: Land Alienation / Housing Smear',
      trigger: 'Rivals claiming Buxton Point displaced coastal residents without titled compensation.',
      sla: '45 Minutes Maximum',
      step1: 'Retrieve verified public deed registries and Phase 1 tenant handover records.',
      step2: 'Deploy 60-second video of original municipal tenants holding modern title deeds.',
      step3: 'Release 1-page visual fact-check card comparing 1950s squalor vs titled homeownership.',
      spokesperson: 'Campaign Communications Spokesperson + Buxton Resident Welfare Rep',
      channels: ['Facebook Community Groups', 'TikTok Video Explainers', 'Local Swahili Radio']
    }
  ];

  const currentThreat = threatScenarios.find((t) => t.id === selectedThreatId) || threatScenarios[0];

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
      
      {/* Header and Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <div>
          <span className="text-[11px] font-mono font-bold text-amber-800 uppercase tracking-wider block">
            Incident Triage Protocol · Playbook Architecture
          </span>
          <h3 className="text-base sm:text-xl font-extrabold text-neutral-950 mt-0.5 leading-snug">
            Strict Escalation Tree Neutralises Synthetic Audio and Disinformation in Under 20 Minutes
          </h3>
          <p className="text-xs text-neutral-600 mt-0.5">
            Interactive incident evaluation protocol routing digital attacks to verified statutory fact-checking cards.
          </p>
        </div>

        <button
          onClick={() => setShowMermaidFallback(!showMermaidFallback)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 px-3 py-1.5 rounded-md transition-colors shrink-0"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{showMermaidFallback ? 'Show Interactive Tree' : 'View as Text / Mermaid'}</span>
        </button>
      </div>

      {!showMermaidFallback ? (
        <div className="space-y-6">
          
          {/* Threat Scenario Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {threatScenarios.map((threat) => (
              <button
                key={threat.id}
                onClick={() => setSelectedThreatId(threat.id)}
                className={`p-3.5 rounded-lg border text-left transition-colors flex flex-col justify-between ${
                  selectedThreatId === threat.id
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                    : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div>
                  <span className={`text-xs font-mono font-bold block ${selectedThreatId === threat.id ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    SLA: {threat.sla}
                  </span>
                  <span className="text-xs font-bold block mt-1 line-clamp-1">{threat.category.split(':')[0]}</span>
                </div>
                <span className={`text-xs mt-2 block truncate ${selectedThreatId === threat.id ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {threat.category.split(':')[1]}
                </span>
              </button>
            ))}
          </div>

          {/* Stepper Decision Pathway Flowchart Graphic */}
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 sm:p-6 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">Trigger Event</span>
                <h4 className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">
                  {currentThreat.trigger}
                </h4>
              </div>
              <div className="bg-white px-3 py-1.5 rounded border border-neutral-200 text-xs font-mono font-bold text-rose-800 shrink-0">
                SLA: {currentThreat.sla}
              </div>
            </div>

            {/* Stepper Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              
              {/* Step 1 Node */}
              <div className="bg-white p-4 rounded-lg border border-neutral-200 space-y-2 relative shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-500">STAGE 1: FORENSIC TRIAGE</span>
                  <span className="text-xs font-mono text-neutral-400">Min 0–10</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  {currentThreat.step1}
                </p>
              </div>

              {/* Step 2 Node */}
              <div className="bg-white p-4 rounded-lg border border-neutral-200 space-y-2 relative shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-500">STAGE 2: LEGAL &amp; ASSET CREATION</span>
                  <span className="text-xs font-mono text-neutral-400">Min 10–25</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  {currentThreat.step2}
                </p>
              </div>

              {/* Step 3 Node */}
              <div className="bg-white p-4 rounded-lg border border-neutral-200 space-y-2 relative shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-500">STAGE 3: MULTI-CHANNEL DEPLOY</span>
                  <span className="text-xs font-mono text-neutral-400">Min 25–45</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  {currentThreat.step3}
                </p>
              </div>
            </div>

            {/* Authorization & Channels Footer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200 text-xs">
              <div>
                <span className="font-mono font-bold text-neutral-500 uppercase block mb-1">
                  Approved Sign-Off Authority
                </span>
                <span className="font-semibold text-neutral-900 bg-white px-2.5 py-1.5 rounded border border-neutral-200 block">
                  {currentThreat.spokesperson}
                </span>
              </div>

              <div>
                <span className="font-mono font-bold text-neutral-500 uppercase block mb-1">
                  Simultaneous Distribution Mesh
                </span>
                <div className="flex flex-wrap gap-1">
                  {currentThreat.channels.map((ch, idx) => (
                    <span key={idx} className="bg-white px-2 py-1 rounded border border-neutral-200 font-medium text-neutral-800">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* Accessible Text / Mermaid Representation Fallback */
        <div className="bg-neutral-900 text-neutral-100 p-5 rounded-lg font-mono text-xs overflow-x-auto space-y-4">
          <div className="text-neutral-400">// Mermaid Flowchart representation (Visuals Guide Section 5.11):</div>
          <pre className="text-neutral-200 leading-relaxed">
{`flowchart TD
    A[Disinformation Incident Flagged] --> B{Threat Classification}
    B -- Synthetic Media / Voice Clone --> C[Waveform Metadata Analysis (Min 0-10)]
    B -- Forged Withdrawal Letter --> D[Apply 'UONGO' Stamp & Legal Filing (Min 0-10)]
    B -- Policy / Land Smear --> E[Retrieve Public Deed & CIDP Records (Min 0-10)]
    C --> F[Emergency Takedown at Meta/TikTok/X + Live Candidate Video]
    D --> G[Cascade Alert to 30 Ward WhatsApp Captains + DCI Cybercrime]
    E --> H[Publish 1-Page Fact Card + Video from Buxton Tenant Homeowners]
    F --> I[Final SLA Verification: Inoculated < 15-45 Minutes]
    G --> I
    H --> I`}
          </pre>
          <div className="text-neutral-400 text-xs pt-2 border-t border-neutral-800">
            Source: Firefly Rapid Response Standard Operating Procedures 2026.
          </div>
        </div>
      )}

    </div>
  );
};
