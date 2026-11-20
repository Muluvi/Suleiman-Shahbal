# Prompt: make the Mombasa 2027 platform comprehensive

You are working on the Next.js site for Hon. Suleiman Shahbal's 2027 Mombasa governor bid (repo `Muluvi/Suleiman-Shahbal`, live at https://suleiman-shahbal.vercel.app). The site is a strategy and data platform:
- 28 chapters
- about 25 tools
- 30 ward dossiers
- a figure registry of about 500 figures, where every number carries a source, a tier and a date

Your job: make the site complete, correct and consistent for a campaign team that will act on it. Work through the workstreams below in order. **Ship nothing that fails `npm run verify`, `tsc`, the tests or `next build`.**

## Baseline (audit, 21 November 2026)
Crawled every page of a production build: 114 pages.

| Finding | Count | Where |
|---|---|---|
| Pages returning a server error | **18** | Ward dossiers 0002–0005, 0016–0019, 0021–0030 (live site too) |
| Visible "Data needed" markers | 17 | /spend 4, /tools 3, /record 3, /tools/county-money 3, /workstreams 2, /tools/ward-equity 2 |
| "Not yet in hand / to be confirmed" lines | 15 | /, /tools, /dashboards, /news, /votes, /winning, /diagnosis, /lawful, /tools/swing-viewer |
| Open registry gaps | 29 | `lib/register/generated/open-items.json` |
| Console errors on other pages | 0 | — |
| Images without alt text | 0 | — |

## Rules (non-negotiable)
1. **No invented numbers.** Every figure goes into `lib/data/figures.ts` with:
   - its source and its tier: T1 official, T2 reported, T3 single-source
   - its date
   - `modelled()` only for arithmetic on sourced figures, with the method stated.
2. **Copy never hard-codes a figure.** Use `{{figure.id}}` tokens; `check-figures` and `verify-figures` enforce this.
3. **A gap stays a named gap** (`needed()`) until a source closes it. Never estimate to fill a gap.
4. **Label exactly what a figure measures.** Households are not adults; ages 15–49 are not ages 6+; a claim is not a count.
5. **Audit queries are queries.** Never describe them as theft or wrongdoing.
6. **Neutral, verifiable language** about opponents. Quote their own figures where possible.
7. **No placeholders or unsolicited features** (`AGENTS.md`).
8. **Keep the wording unless a visual must replace it.** Replace text with a chart only where the text is a list of numbers that reads better as a chart.

## Workstream 1: defects (P0)
1. **Ward dossier crash.** `data/public-2026-11/mombasa-wards-2022-and-2027-limits.csv` lacks Gazette population, area and MCA spending limit for 18 wards.
   - Fill all 30 from **Gazette Notice 12251 (7 August 2026), Fourth Schedule** (https://www.iebc.or.ke/uploads/resources/QUTuQXad27.pdf).
   - Rebuild the pack with `scripts/build-public-data.mjs`.
   - Make the dossier page safe on any missing value, so a missing value shows a named gap, never a 500.
2. **Phone ownership mislabelled.** 97.1% is the share of Mombasa *households* owning a mobile phone (KDHS 2022 county table), not adults.
   - Re-label the figure as households.
   - Return the adult figure to a named gap.
   - Fix every sentence and calculation that uses it (`ReachSplit`, `reach.phone.adult`).
3. **Re-crawl** and confirm zero non-200 pages.

## Workstream 2: ward depth
For each of the 30 wards, the dossier should answer three questions: who holds it, how it voted and what it wants.
1. **2022 MCA result per ward:** winner, party and votes (Mzalendo, from the IEBC declarations). Show it on each dossier.
2. **2022 MP result per constituency:** winner, party and votes. Show it on each dossier's constituency line.
3. **Party map of the county assembly:** count of MCA seats by party, a sourced fact for the votes chapter. Show it as a short table.
4. **Ward priorities:** the ADP 2026/27 ranked list leaves out Mkomani and Kadzandani.
   - Read their proposals from ADP Section 3.15.
   - Mark them as from 3.15, unranked.
5. **Gazette population and area** on every dossier (from Workstream 1).

## Workstream 3: stale and inconsistent text
Every sentence that says "not yet in hand", "to be confirmed" or "data needed" must be checked against the registry.
- **Where the figure now exists:** rewrite the sentence to use it.
- **Where it is still missing:** keep the gap and name the document that closes it.

Known cases:
- /dashboards uses the 2019 census phone rate "because the 2023/24 county phone row is not yet in hand". Use the KDHS 2022 household figure, or say exactly why not.
- /news: "frequencies to be confirmed against the CA register". Frequencies are now listed from public station listings (T2); say so.
- Any copy still describing the register as "not in hand".

## Workstream 4: public data still to find (try each; record what you find, or why not)
| Gap | Where to look | If not found |
|---|---|---|
| 2017 governor results by ward or constituency | IEBC forms portal, Kenya Law election petitions 2017 | Keep the gap; the swing tool stays countywide |
| Women's share of the register | IEBC register-by-sex release | Keep the gap |
| Adult phone ownership by sex | CA analytical report on ICT in KDHS 2022, §2.1.7 | Keep the gap |
| Disability (men, women) | KDHS 2022 full report; 2019 census Vol. IV | Keep the gap |
| 2030 population | KNBS Analytical Report on Population Projections (Vol. XVI) | Keep the gap |
| Literacy | 2019 census Vol. IV (not the old 85.8% of earlier surveys) | Keep the gap |
| Audit: IFMIS, transfers, contested bills | Auditor-General FY2024/25 report on the County Executive | Keep the gap |
| Coast radio shares | GeoPoll / KARF (paid) | Keep the gap; flag for purchase |

## Workstream 5: needs the client (do not guess; list for the team)
- His social media counts (Facebook, X): from his own exports.
- Data controller for SMS, USSD and WhatsApp: needed for the privacy notice.
- The New Democrats' nomination rules and timetable: from the party secretariat.
- Pwani Golden Awards 2024: confirm with a certificate or report.
- Who runs suleimanshahbl2027.com.
- Whether to replace the Kamba kiondo weave motif with a Coast motif.
- Domain, and whether the site is public or private.

## Acceptance
- `npm run verify`, `tsc`, the tests and `next build` pass.
- A full crawl shows **0 non-200 pages and 0 console errors**.
- Every ward dossier shows:
  - population
  - area
  - 2022 MCA result
  - MP result
  - a ward priority or a named gap
- The "Data needed" count falls only where a real source closed a gap. A gap with no public source stays visible.
- The change list says, for every gap, whether it was closed (with source) or why not.

---

## Results of applying this prompt (21 November 2026)

| Check | Before | After |
|---|---|---|
| Pages crawled | 114 | 114 |
| Non-200 pages | **18** | **0** |
| Pages with console errors | 18 | 0 |
| Ward dossiers with Gazette population, area and limit | 12 of 30 | 30 of 30 |
| Ward dossiers showing who holds the seat (MCA and MP, 2022) | 0 | 30 |
| Ward dossiers with a ward request from the ADP | 28 | 30 |
| "Data needed" markers | 17 | 17 (each one still lacks a public source; see Workstream 4) |

**Done:**
- **Workstream 1:**
  - Gazette Notice 12251 values were filled for 18 wards.
  - The dossier page now shows "Data needed" instead of crashing.
  - The tools fail the build, naming the ward, if a value is ever missing.
  - The ward type now admits a missing value.
  - The 97.1% phone figure is relabelled as households (`ict.phone.household`); adult ownership is back to a named gap.
- **Workstream 2:**
  - 2022 MCA and MP results are on every dossier (`data/ward-results-2022.ts`).
  - The party make-up of the assembly is in chapter 2.2, with ODM 23, UDA 4, independents 2 and WDM 1.
  - Mkomani's and Kadzandani's requests come from the plan's public-hearing record and are marked unranked.
- **Workstream 3:**
  - The Woman Representative result replaces a stale "data gap" line.
  - The radio frequency note now says where the frequencies come from.
  - The project-register gap now names the document that is actually missing: the Annual Progress Report.
- **Workstream 4:** these were searched and are not public in usable form, so each stays a named gap:
  - 2017 results by ward or constituency: the 2018 judgment gives county totals only
  - the register by sex
  - adult phone ownership by sex
  - disability
  - the 2030 projection
  - literacy: only an older 85.8% figure was found
  - the remaining audit items
  - radio shares
- **Workstream 5:** unchanged; it needs the client.
