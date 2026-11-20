"use client";

import { useState } from "react";
import type { FigureView } from "@/lib/tools/dataset";
import { Badge, Bar, Card, ksh, n0, Note, pct, Select, Stat, Stats, Table, tierText } from "./ui";
import { SaveImage } from "../../visual/SaveImage";

const prov = (f: FigureView) => `${f.source ?? "this plan"}${f.asOf ? `, ${f.asOf}` : ""} · ${f.state === "target" ? "target" : tierText(f.tier)}${f.state === "modelled" ? ", calculated" : ""}`;

/* ------------------------------------------------------------------ County Money Explainer */

export function CountyMoney({ f, population }: { f: Record<string, FigureView>; population: number }) {
  const [per, setPer] = useState<"total" | "resident">("total");
  const v = (id: string) => f[id].value ?? 0;
  const show = (x: number) => (per === "total" ? ksh(x) : `KSh ${n0(x / population)}`);
  const parts = [
    { id: "budget.equitable", label: "Equitable share from the national government" },
    { id: "budget.osr", label: "Own-source revenue (county taxes, fees, rents)" },
    { id: "budget.grants", label: "Conditional grants and loans" },
  ];
  const audits = [
    { id: "audit.uncollected", label: "Uncollected county rates and rents" },
    { id: "audit.cash", label: "Unconfirmed cash balances" },
    { id: "audit.ifmis", label: "IFMIS variance" },
    { id: "audit.transfers", label: "Unexplained transfers between accounts" },
  ];
  const total = v("budget.total");
  return (
    <div className="space-y-4">
      <div className="flex justify-end print:hidden"><SaveImage card={{ type: "receipt" }} title="County money per resident" /></div>
      <Card><Select label="Show money as" value={per} onChange={setPer} options={[{ value: "total", label: "Totals" }, { value: "resident", label: "Per resident (2019 census population)" }]} /></Card>
      <Stats>
        <Stat label="County budget, FY2025/26" value={show(total)} note={tierText(f["budget.total"].tier)} />
        <Stat label="Pending bills, 30 June 2026" value={show(v("budget.pending-bills.2026"))} tone="warn" note="Controller of Budget, as reported" />
        <Stat label="Pending bills older than three years" value={pct(v("budget.pending-bills.aged"), 0)} tone="warn" note="Highest share in Kenya" />
        <Stat label="Overdraft for June 2026 salaries" value={show(v("budget.overdraft.2026-06"))} note="Controller of Budget, as reported" />
      </Stats>
      <Card>
        <p className="font-semibold text-ink">Where the KSh {(total / 1e9).toFixed(2)} billion comes from</p>
        <div className="mt-3 flex h-6 w-full overflow-hidden rounded-md ring-1 ring-line" aria-hidden="true">
          {parts.map((p, i) => <span key={p.id} className={i === 0 ? "bg-accent-solid" : i === 1 ? "bg-gold-solid" : "bg-line"} style={{ width: `${(v(p.id) / total) * 100}%` }} />)}
        </div>
        <ul className="mt-3 space-y-2 text-[0.9rem]">{parts.map((p) => <li key={p.id}><span className="flex justify-between gap-3"><span className="text-ink">{p.label}</span><span className="font-mono">{show(v(p.id))} · {pct((v(p.id) / total) * 100)}</span></span><span className="text-[0.78rem] text-muted">{prov(f[p.id])}</span></li>)}</ul>
      </Card>
      <Table rows={audits} rowKey={(a) => a.id} caption="What the Auditor-General queried (itemised report to be retrieved)" cols={[
        { key: "l", label: "Query", render: (a) => a.label },
        { key: "v", label: "Amount", num: true, render: (a) => (f[a.id].value === null ? "Data needed" : show(v(a.id))) },
        { key: "b", label: "", render: (a) => (f[a.id].value === null ? <span className="text-[0.78rem] text-muted">{f[a.id].closesWith ?? "The Auditor-General's report"}</span> : <span className="block w-28"><Bar value={v(a.id)} max={Math.max(1, ...audits.map((x) => v(x.id)))} tone="gold" /></span>) },
      ]} />
      <Card>
        <p className="font-semibold text-ink">Talking points, with their limits</p>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-[0.9rem] text-ink">
          <li>Of every KSh 100 in the budget, about KSh {Math.round((v("budget.osr") / total) * 100)} is raised by the county itself, one of the highest shares in Kenya. <span className="text-muted">({prov(f["budget.osr"])})</span></li>
          <li>{pct(v("budget.pending-bills.aged"), 0)} of the county&rsquo;s pending bills are more than three years old. <Badge tone="gold">{tierText(f["budget.pending-bills.aged"].tier)}</Badge></li>
          <li>The {ksh(v("budget.pending-bills.2021"))} reported in 2024 and the {ksh(v("budget.pending-bills.2026"))} at June 2026 are from different reviews. <span className="text-muted">Quote either with its date, never both as one.</span></li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ Water Watch */

export function WaterWatch({ f, sections }: { f: Record<string, FigureView>; sections: { title: string; items: { id: string; label: string; unit?: string }[] }[] }) {
  const fmtV = (id: string, unit?: string) => `${unit === "KSh" ? "KSh " : ""}${f[id].display}${f[id].unit === "percent" ? "%" : ""}${unit && unit !== "KSh" ? ` ${unit}` : ""}`;
  return (
    <div className="space-y-4">
      <div className="flex justify-end print:hidden"><SaveImage card={{ type: "forecast" }} title="Water Watch" /></div>
      <Card>
        <p className="plat-kicker">Water reaching residents</p>
        <p className="mt-1 font-serif text-[1.8rem] text-ink">{f["water.delivered"].display} <span className="text-[1rem] text-muted">of {f["water.demand"].display} m³ needed a day</span></p>
        <Note>The governor&rsquo;s own figures (Tier 2). Mwache Dam adds supply in the next term; whether it reaches the estates is the last-mile question.</Note>
      </Card>
      {sections.map((s) => (
        <Card key={s.title}>
          <p className="font-semibold text-ink">{s.title}</p>
          <ul className="mt-2 space-y-2">{s.items.map((it) => <li key={it.id} className="text-[0.9rem]"><span className="flex justify-between gap-3"><span className="text-ink">{it.label}</span><strong className="font-mono">{fmtV(it.id, it.unit)}</strong></span><span className="text-[0.76rem] text-muted">{prov(f[it.id])}</span></li>)}</ul>
        </Card>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ 2017 to 2022 Swing Viewer */

export function SwingViewer({ races, turnout2022, valid2022 }: { races: { year: number; results: { candidate: string; votes: number }[] }[]; turnout2022: number; valid2022: number }) {
  const r17 = races.find((r) => r.year === 2017)!, r22 = races.find((r) => r.year === 2022)!;
  const names = [...new Set([...r17.results, ...r22.results].map((r) => r.candidate))];
  const t17 = r17.results.reduce((s, r) => s + r.votes, 0), t22 = r22.results.reduce((s, r) => s + r.votes, 0);
  const rows = names.map((n) => { const a = r17.results.find((r) => r.candidate === n)?.votes ?? null; const b = r22.results.find((r) => r.candidate === n)?.votes ?? null; return { n, a, b }; });
  const max = Math.max(...rows.flatMap((r) => [r.a ?? 0, r.b ?? 0]));
  return (
    <div className="space-y-4">
      <Stats>
        <Stat label="Listed votes, 2017" value={n0(t17)} note="The three candidates in the court-confirmed result" />
        <Stat label="Listed votes, 2022" value={n0(t22)} note={`Valid votes cast: ${n0(valid2022)}`} />
        <Stat label="Turnout, 2022" value={pct(turnout2022)} note="IEBC certified" />
        <Stat label="Change in listed votes" value={`${t22 >= t17 ? "+" : "−"}${n0(Math.abs(t22 - t17))}`} />
      </Stats>
      <Table rows={rows} rowKey={(r) => r.n} cols={[
        { key: "n", label: "Candidate", render: (r) => r.n },
        { key: "a", label: "2017", num: true, render: (r) => (r.a === null ? "did not stand" : n0(r.a)) },
        { key: "b", label: "2022", num: true, render: (r) => (r.b === null ? "did not stand" : n0(r.b)) },
        { key: "c", label: "Change", num: true, render: (r) => (r.a !== null && r.b !== null ? `${r.b >= r.a ? "+" : "−"}${n0(Math.abs(r.b - r.a))}` : "—") },
        { key: "s", label: "Share of listed, 2017 → 2022", num: true, render: (r) => `${r.a !== null ? pct((r.a / t17) * 100) : "—"} → ${r.b !== null ? pct((r.b / t22) * 100) : "—"}` },
        { key: "bar", label: "", render: (r) => <span className="block w-28 space-y-1"><Bar value={r.a ?? 0} max={max} tone="muted" /><Bar value={r.b ?? 0} max={max} /></span> },
      ]} />
      <Note>Countywide only: the 2017 ward tallies are not yet in hand, so the swing cannot be shown by ward or constituency. Shares are of the votes listed here, not of all valid votes, because the 2017 valid-vote total is not in the record. In each bar pair, grey is 2017 and blue is 2022.</Note>
    </div>
  );
}
