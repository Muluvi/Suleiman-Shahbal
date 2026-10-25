import React, { useState } from 'react';
import { escalationLadder, factCheckWorkflow, spokespersonProtocol, crisisPlaybook } from '../content/rapidResponseData.ts';
import { AlertTriangle, ShieldCheck, Clock, FileWarning, CheckCircle, Radio } from 'lucide-react';
import { CrisisDecisionTree } from './visuals/CrisisDecisionTree.tsx';
import { RapidResponseTimeline } from './visuals/RapidResponseTimeline.tsx';
import warRoomImage from '../assets/images/digital_campaign_war_room_1792778748940.jpg';

export const RapidResponseModule: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(3);

  const currentLevel = escalationLadder.find((l) => l.level === selectedLevel) || escalationLadder[2];

  return (
    <section id="rapid-response" className="py-14 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Module Header */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <span>Module 05</span>
            <span aria-hidden="true">·</span>
            <span>Reputational Shield &amp; Crisis Management</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Rapid Response &amp; Misinformation Management
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            In modern coastal campaigns, malicious rumors spread across WhatsApp groups within minutes. 
            This protocol outlines an unyielding 5-level escalation ladder, SLA response times, deepfake mitigation 
            workflows, and spokesperson authorization rules.
          </p>
        </div>

        {/* War Room Visual Banner */}
        <div className="rounded-xl overflow-hidden border border-neutral-200 bg-neutral-900 relative">
          <img
            src={warRoomImage}
            alt="Strategic political campaign operations war room"
            className="w-full h-56 sm:h-72 object-cover object-center opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
              Operations Center Protocol
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">
              24/7 Digital Command &amp; Fact-Checking Desk
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mt-1 leading-relaxed">
              Operating synchronized verification desks in Nairobi and Mombasa. Every piece of rival disinformation 
              is triaged against legal, communications, and field-evidence standards within a guaranteed 60-minute SLA.
            </p>
          </div>
        </div>

        {/* Escalation Ladder Selector */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
            <h3 className="text-base font-bold text-neutral-900 font-mono uppercase">
              The 5-Level Escalation Ladder
            </h3>
            <span className="text-xs text-neutral-500">Select level to review protocol</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {escalationLadder.map((lvl) => {
              const isSelected = selectedLevel === lvl.level;
              return (
                <button
                  key={lvl.level}
                  onClick={() => setSelectedLevel(lvl.level)}
                  className={`p-3.5 rounded-lg border text-left transition-colors flex flex-col justify-between ${
                    isSelected
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                      : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold block ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    LEVEL 0{lvl.level}
                  </span>
                  <span className="text-xs font-bold block mt-1 line-clamp-1">{lvl.label.split('/')[0]}</span>
                  <span className={`text-xs font-mono block mt-2 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    SLA: {lvl.responseTimeSLA}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Level Deep Dive Card */}
        <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-neutral-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase">
                Escalation Level 0{currentLevel.level} Deep Dive
              </span>
              <h4 className="text-xl font-bold text-neutral-950 mt-1">
                {currentLevel.label}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 mt-1">
                <span className="font-semibold text-neutral-900">Trigger Condition:</span> {currentLevel.triggerCondition}
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-neutral-200 text-left sm:text-right shrink-0">
              <span className="text-xs font-mono text-neutral-500 block uppercase">Response SLA Target</span>
              <span className="text-sm font-bold text-neutral-900 font-mono">{currentLevel.responseTimeSLA}</span>
              <span className="text-xs text-neutral-600 block mt-1">Auth: {currentLevel.decisionAuthority}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-neutral-900 uppercase block">
                Standard Operating Procedure Actions
              </span>
              <div className="space-y-2">
                {currentLevel.actions.map((act, aIdx) => (
                  <div key={aIdx} className="bg-white p-3 rounded-lg border border-neutral-200 text-xs text-neutral-700 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-neutral-900 uppercase block">
                Deployment Channels
              </span>
              <div className="flex flex-wrap gap-2">
                {currentLevel.channelDeployment.map((ch, cIdx) => (
                  <span key={cIdx} className="bg-white border border-neutral-200 text-neutral-800 text-xs px-3 py-1.5 rounded-md font-medium">
                    {ch}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual System Feature 6: Interactive Crisis Decision Tree & Playbook */}
        <CrisisDecisionTree />

        {/* Visual 60-Minute SLA Chronometer & Threat Vector Heatmap (Visual Guide §5.1 & §5.6) */}
        <RapidResponseTimeline />

        {/* Fact-Check Workflow & Crisis Playbook Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 6 cols: 60-Minute Workflow */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-base font-bold text-neutral-900 font-mono uppercase">
              The 60-Minute Fact-Check SLA Workflow
            </h3>
            <div className="space-y-3">
              {factCheckWorkflow.map((wf, idx) => (
                <div key={idx} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-neutral-900 font-mono">
                    <span>{wf.step}</span>
                    <span className="text-neutral-500">{wf.timing}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                    {wf.action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right 6 cols: Crisis Playbook Scenarios */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-base font-bold text-neutral-900 font-mono uppercase">
              Pre-Scripted Coastal Crisis Playbook
            </h3>
            <div className="space-y-3">
              {crisisPlaybook.map((cp, idx) => (
                <div key={idx} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-neutral-900">{cp.scenario}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    <span className="font-semibold text-neutral-800">Counter-Strategy:</span> {cp.counterStrategy}
                  </p>
                  <div className="bg-white p-2.5 rounded border border-neutral-200 text-xs font-medium text-neutral-900 italic">
                    "{cp.preparedTagline}"
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Spokesperson Protocol Notice */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-4">
          <div className="border-b border-neutral-200 pb-3">
            <h4 className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
              Approved Spokesperson &amp; Legal Authorization Protocol
            </h4>
            <p className="text-xs text-neutral-500 mt-0.5">
              Strict governance preventing unauthorized campaign leaks or premature coalition statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase block">Authorized Principals</span>
              {spokespersonProtocol.authorizedSpokespersons.map((sp, idx) => (
                <div key={idx} className="text-xs text-neutral-700 bg-neutral-50 p-2.5 rounded border border-neutral-200">
                  {sp}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase block">Operational Rules</span>
              {spokespersonProtocol.strictRules.map((rule, idx) => (
                <div key={idx} className="text-xs text-neutral-700 bg-neutral-50 p-2.5 rounded border border-neutral-200">
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
