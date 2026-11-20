"use client";

import { Droplets, LineChart, Users } from "lucide-react";

import { NOMINATION_KPIS } from "@/data/kpis";
import { type WardPulseData } from "@/data/terminal-showcase";
import { fmt } from "../../../lib/data/read";

/**
 * Three county-wide terminal screens (visual upgrade, B9). Unlike the ward screens beside them,
 * every value here is a registry figure or a record the site already holds; where there is no
 * reading yet, the screen says so.
 */

function Head({ code, name, right }: { code: string; name: string; right?: string }) {
  return (
    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
      <span className="font-mono text-cyan-400 font-semibold" style={{ fontSize: "0.6875em" }}>{code} • {name}</span>
      {right ? <span className="font-mono text-slate-400" style={{ fontSize: "0.625em" }}>{right}</span> : null}
    </div>
  );
}

function Tile({ k, v, note, tone = "text-white" }: { k: string; v: string; note?: string; tone?: string }) {
  return (
    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
      <div className="font-mono uppercase text-slate-400" style={{ fontSize: "0.5625em" }}>{k}</div>
      <div className={`font-bold font-mono ${tone}`} style={{ fontSize: "1.125em" }}>{v}</div>
      {note ? <div className="text-slate-400 mt-0.5" style={{ fontSize: "0.5625em" }}>{note}</div> : null}
    </div>
  );
}

export function WaterWatchScreen(_: { data: WardPulseData }) {
  return (
    <div className="flex flex-col h-full bg-[#0d121b] text-slate-100 p-4 font-sans select-none overflow-hidden">
      <Head code="WTR" name="Water Watch" right="Mombasa County" />
      <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 mb-3 flex items-center gap-3">
        <Droplets className="h-5 w-5 text-cyan-400" aria-hidden="true" />
        <div>
          <div className="font-mono text-slate-400 uppercase" style={{ fontSize: "0.5625em" }}>Reaching residents, m³ a day (Tier 2)</div>
          <div className="font-bold font-mono text-white" style={{ fontSize: "1.375em" }}>{fmt("water.delivered")} <span className="text-slate-400" style={{ fontSize: "0.5em" }}>of {fmt("water.demand")} needed</span></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Tile k="Supplied" v={`${fmt("water.supply.share")}%`} note="of daily demand · Tier 2" tone="text-amber-400" />
        <Tile k="Lost (NRW)" v={`${fmt("water.nrw")}%`} note="before it is paid for · Tier 2" tone="text-amber-400" />
        <Tile k="Jerrican, vendor" v={`KSh ${fmt("price.water.vendor")}`} note={`county source KSh ${fmt("price.water.county")} · Tier 2`} />
        <Tile k="Mwache Dam" v={`${fmt("water.mwache.complete")}%`} note={`complete · adds ${fmt("water.mwache")} m³ a day · Tier 1`} tone="text-emerald-400" />
      </div>
    </div>
  );
}

export function RegisterGrowthScreen(_: { data: WardPulseData }) {
  return (
    <div className="flex flex-col h-full bg-[#0d121b] text-slate-100 p-4 font-sans select-none overflow-hidden">
      <Head code="REG" name="Register Growth" right="IEBC" />
      <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 mb-3 flex items-center gap-3">
        <Users className="h-5 w-5 text-cyan-400" aria-hidden="true" />
        <div>
          <div className="font-mono text-slate-400 uppercase" style={{ fontSize: "0.5625em" }}>Registered, 2022 (Tier 1)</div>
          <div className="font-bold font-mono text-white" style={{ fontSize: "1.375em" }}>{fmt("register.2022")}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Tile k="Polling stations" v={fmt("register.polling-stations")} note="2022 · Tier 1" />
        <Tile k="Growth since 2022" v={fmt("register.2026.growth")} note="New voters since 2022 · Tier 3" />
        <Tile k="2026 registration drive" v={fmt("register.2026.ecvr-drive")} note="ECVR Phase 1, Apr 2026 · Tier 3" />
        <Tile k="2022 turnout" v={`${fmt("turnout.2022")}%`} note="Governor race · Tier 2" tone="text-amber-400" />
      </div>
      <p className="mt-3 text-slate-400" style={{ fontSize: "0.5625em" }}>The certified 2026 register is not published yet; new registrations are as IEBC reported them.</p>
    </div>
  );
}

export function ContentPerformanceScreen(_: { data: WardPulseData }) {
  return (
    <div className="flex flex-col h-full bg-[#0d121b] text-slate-100 p-4 font-sans select-none overflow-hidden">
      <Head code="CPF" name="Content Performance" right="Nomination stage" />
      <ul className="flex-1 space-y-1.5 overflow-hidden">
        {NOMINATION_KPIS.slice(0, 5).map((k) => (
          <li key={k.code} className="rounded-lg border border-slate-800 bg-slate-900/80 p-2">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-cyan-400 font-semibold" style={{ fontSize: "0.625em" }}>{k.code}</span>
              <span className="font-mono text-slate-400" style={{ fontSize: "0.5625em" }}>{k.baseline.kind === "measured" ? k.baseline.display : "Awaiting first export"}</span>
            </div>
            <div className="text-white" style={{ fontSize: "0.6875em" }}>{k.title}</div>
            <div className="text-slate-400" style={{ fontSize: "0.5625em" }}>Target: {k.target}</div>
          </li>
        ))}
      </ul>
      <p className="mt-2 flex items-center gap-1 text-slate-400" style={{ fontSize: "0.5625em" }}>
        <LineChart className="h-3 w-3" aria-hidden="true" /> No reading is shown until the team enters one in the KPI tracker.
      </p>
    </div>
  );
}
