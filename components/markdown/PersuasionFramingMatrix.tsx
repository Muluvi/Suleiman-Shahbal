"use client";

import React, { useState } from "react";
import { Brain, CheckCircle2, Droplet, Coins, HeartHandshake, GraduationCap } from "lucide-react";
import { fmt } from "../../lib/data/read";

interface PersuasionTheme {
  id: string;
  themeTitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  principles: {
    name: string;
    description: string;
    scriptFraming: string;
  }[];
}

const PERSUASION_THEMES: PersuasionTheme[] = [
  {
    id: "water",
    themeTitle: "Water at the Tap",
    icon: Droplet,
    principles: [
      {
        name: "Loss Aversion",
        description: "Losses are felt more intensely than equivalent gains.",
        scriptFraming: `“A jerrican is KSh ${fmt("price.water.county")} at a county source and KSh ${fmt("price.water.vendor")} from a vendor. Every dry tap is money out of your pocket.”`
      },
      {
        name: "Social Proof",
        description: "People take cues from the verified actions of their peers.",
        scriptFraming: "“Residents across Junda and Bamburi are logging their water hours every week. Add your household's.”"
      },
      {
        name: "Verification Bias",
        description: "Claims that can be independently checked are trusted more.",
        scriptFraming: "“We will publish every ward's water hours and the price at every county kiosk, every quarter. Dial the campaign shortcode to check yours.”"
      }
    ]
  },
  {
    id: "fiscal",
    themeTitle: "A County that Pays its Bills",
    icon: Coins,
    principles: [
      {
        name: "Anchoring Effect",
        description: "The initial figure establishes the psychological baseline.",
        scriptFraming: `“Mombasa County ran a KSh ${fmt("budget.total", "bn")} billion budget last year, and still borrowed to pay June's salaries. Mr Shahbal will publish where every shilling goes.”`
      },
      {
        name: "Loss Aversion",
        description: "Frame unpaid bills as direct personal deprivation.",
        scriptFraming: `“${fmt("budget.pending-bills.aged")}% of the county's unpaid bills are more than three years old. Every one is a trader, a supplier or a contractor in Mombasa waiting to be paid.”`
      },
      {
        name: "Messenger Effect",
        description: "The authority of the messenger validates the policy claim.",
        scriptFraming: "“He founded a bank and chairs an investment group. He knows what an unpaid invoice does to a small firm.”"
      }
    ]
  },
  {
    id: "youth",
    themeTitle: "Jobs that Stay in Mombasa",
    icon: GraduationCap,
    principles: [
      {
        name: "Commitment Device",
        description: "Small public commitments increase voter turnout.",
        scriptFraming: "“Pledge to register to vote today, and Mr Shahbal pledges a quarterly county jobs report. Hold him to it.”"
      },
      {
        name: "Messenger Effect",
        description: "Direct peers resonate more than political speeches.",
        scriptFraming: "“A Technical University of Mombasa graduate from Mikindani on what port-linked jobs in Jomvu would mean for her estate.”"
      },
      {
        name: "Scarcity & Urgency",
        description: "Limited-time windows prompt immediate action.",
        scriptFraming: "“Voter registration closes before the election calendar runs out. Secure your voice before the deadline.”"
      }
    ]
  },
  {
    id: "household",
    themeTitle: "Poverty & Household Economics",
    icon: HeartHandshake,
    principles: [
      {
        name: "Loss Aversion",
        description: "Contrast local poverty against the county's wealth as a policy choice.",
        scriptFraming: `“${fmt("poverty.2021")}% of Mombasa lived in poverty in 2021 (KNBS), in the county that runs Kenya's main port. That is a policy choice, not a fact of nature.”`
      },
      {
        name: "Messenger Effect (Chama Leaders)",
        description: "Grassroots women's group chairs validating the household economy.",
        scriptFraming: "“A chama chair in Likoni on what the price of water and the ferry queue cost her members every week.”"
      },
      {
        name: "Verification Bias",
        description: "Proof that can be visited, not just read.",
        scriptFraming: `“The Jomvu SEZ: ${fmt("record.sez.acres")} acres, signed in September 2026. Go and see what is there now, and hold the ${fmt("record.sez.jobs")} projected jobs to account.”`
      }
    ]
  }
];

export function PersuasionFramingMatrix() {
  const [activeThemeId, setActiveThemeId] = useState<string>("water");
  const currentTheme = PERSUASION_THEMES.find(t => t.id === activeThemeId) || PERSUASION_THEMES[0];

  return (
    <div className="my-6 sm:my-8 bg-card border border-line rounded-2xl shadow-sm overflow-hidden not-prose">
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-line bg-paper/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold shrink-0">
            <Brain size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="t-label font-extrabold text-accent bg-accent/10 px-2 py-0.5 rounded">
                Persuasion architecture
              </span>
              <span className="t-label font-mono font-bold text-muted">
                Behavioural Economics
              </span>
            </div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-ink mt-0.5">
              Behavioural Science & Persuasion Framing Engine
            </h4>
          </div>
        </div>
      </div>

      {/* Theme Switcher Tabs */}
      <div className="p-3 bg-paper/70 border-b border-line grid grid-cols-2 sm:grid-cols-4 gap-2">
        {PERSUASION_THEMES.map((theme) => {
          const isSelected = theme.id === activeThemeId;
          const IconComp = theme.icon;
          return (
            <button
              key={theme.id}
              type="button"
              onClick={() => setActiveThemeId(theme.id)}
              aria-pressed={isSelected}
              className={`p-3 sm:p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2 ${
 isSelected 
                  ? "bg-card border-accent shadow-sm ring-2 ring-accent/15" 
                  : "bg-paper/40 border-line hover:border-accent/40 text-muted hover:text-ink"
              }`}
            >
              <IconComp size={16} className={isSelected ? "text-accent shrink-0" : "text-muted shrink-0"} />
              <span className="t-label font-bold truncate">{theme.themeTitle.split(" ")[0]} {theme.themeTitle.split(" ")[1]}</span>
            </button>
          );
        })}
      </div>

      {/* Persuasion Principle Cards */}
      <div className="p-4 sm:p-6 space-y-3">
        <div className="t-label font-bold text-muted mb-2">
          Applied Behavioral Framings for: <span className="text-ink font-serif font-bold text-sm capitalize">{currentTheme.themeTitle}</span>
        </div>

        <div className="space-y-3">
          {currentTheme.principles.map((p, idx) => (
            <div key={idx} className="p-4 sm:p-4 rounded-xl bg-paper border border-line space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center t-label font-bold">
                    {idx + 1}
                  </span>
                  <span className="t-label font-bold text-ink">{p.name}</span>
                </div>
                <span className="t-label text-muted font-medium">{p.description}</span>
              </div>

              <div className="p-3 bg-card rounded-lg border border-line t-label sm:t-small text-ink font-semibold italic leading-relaxed">
                {p.scriptFraming}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ethical Boundary Note */}
      <div className="p-3 bg-paper/60 border-t border-line t-small text-muted flex items-center justify-between px-4 font-semibold">
        <span className="flex items-center gap-1">
          <CheckCircle2 size={12} className="text-accent" />
          <span>Ethics Charter Boundary: Framing is applied strictly to verified empirical facts — zero psychographic micro-targeting or ethnic wedge operations.</span>
        </span>
      </div>
    </div>
  );
}
