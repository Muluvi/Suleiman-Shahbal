```lead
Six voter segments, each with its own language, channel and content type, and six universes that say what success looks like. Only the sizes official records support are stated.
```

Six voter segments, each with its own language, channel and content type, and six universes that say what success looks like. Only the sizes official records support are stated. The three zones differ in economy, connectivity and grievance (Section 1.2), so one countywide message fails.

```figure
id: audience-overview
```

## 11.1 The base, persuasion and turnout universes

```lead
Segments say where to speak and in what language; universes say what success looks like there.
```

The segments in Section 11.2 describe **who** the voters are. The universes describe **what the campaign needs each group to do**, which is a different question and the one the objectives in Section 8.2 are written against. In Mombasa the largest universe is not the persuadable voter; it is the registered voter who stayed home.

```visual
kind: nested
note: "**Two of these sizes are deliberately not stated.**"
items:
  - label: "Voter universe"
    text: "**{{register.2022}}**"
    items:
      - label: "Expected turnout universe"
        text: "**{{ballots.2022}}** (2022 governor election)"
        items:
          - { label: "Victory universe", text: "**~{{benchmark}}**" }
  - { label: "Base-hold universe", text: "Not stated" }
  - { label: "Persuasion universe", text: "Not stated" }
  - { label: "Mobilisation universe", text: "Target **{{target.supporters}}** verified supporters" }
body: "| Universe | Definition | Size | Basis | What it owns |\n|---|---|---|---|---|\n| Voter universe | Every registered voter in Mombasa County | **{{register.2022}}** | IEBC ward register (Tier 1) | — |\n| Expected turnout universe | Ballots cast at the {{turnout.constant}}% turnout rate (the 2022 governor election) | **{{ballots.2022}}** | Declared result (Tier 2), Section 2.5 | — |\n| **Victory universe** | Votes required to win the general election | **~{{benchmark}}** | Section 2.5; {{result.2022.gov.nassir}} won in 2022 (Tier 2) | GOTV |\n| **Base-hold universe** | Voters who have backed him before | Not stated — he received **{{result.2013.gov.shahbal}}** in 2013 and **{{result.2017.gov.shahbal}}** in 2017 (Tier 1), but a past tally is not a support estimate | Section 6.2 | Mobilisation |\n| **Persuasion universe** | Voters in the close-contest belt who voted in 2022 | Not stated — the belt holds **{{pool}}** registered voters (Tier 1), which is the ceiling on this universe and not its size | Section 6.2 | Persuasion |\n| **Mobilisation universe** | Identified supporters and 2022 abstainers needing a turnout contact | Target **{{target.supporters}}** verified supporters, from {{abstained.2022}} abstainers | Section 8.2.4 (target) | Field + SMS |"
```

**Why two sizes are not stated.** No official source reports ward-level support (Section 7.3). This plan works from existing records only: Week 1 measures what his own channels reach (Section 18.5), which is evidence about reach, not support, and the IEBC's ward-level results (Section 2.2) show how each ward has actually voted. A register count is the most a universe can contain, never what it does contain.

## 11.2 The six voter segments

```lead
**Each segment carries the content type that commissions for it** (Section 10.1), so the segmentation has an output rather than only a description.
```

**Each segment carries the content type that commissions for it** (Section 10.1), so the segmentation has an output rather than only a description. P4, *He came, and this is what he said he would do*, is not in the table because it is not segment-led: it is ward-led, run in the channels of whichever ward Mr Shahbal visited that day, and it feeds P1 twelve weeks later.

Where an official indicator bears on a segment — water (Section 3.1), poverty (Section 1.3), the county's finances (Section 3.7) — its message cites that indicator. The rest is tested only by how content performs on reach and engagement, and a hypothesis the weekly brief cannot support is dropped rather than asserted.

**A segment that runs across the six: women and the household purse.** Women are {{census.female.share}}% of Mombasa's residents (Tier 1, KNBS 2019 Census); their share of the register is a named data gap ({{register.women.share}}). In a city that buys its water, the household purse is where the water price, school costs and health care meet. Lead content type: **P1**, where the water and the money went. Lead channels: WhatsApp voice notes, SMS, women's groups and chamas, mosque and church networks. Proof: the water commitments.

```visual
kind: tabs
preset: segment
note: "**The \"core anxiety\" under each segment is a working hypothesis, not a measured opinion.**"
items:
  - title: "The Young Mainland Voter"
    fields:
      - { label: "Lead content type", text: "**P3** — the builder explains" }
      - { label: "Language", text: "Kiswahili and Sheng; English online" }
      - { label: "Size", text: "**~{{segment.youth.voters}}** registered voters aged 18–34, a derived ceiling: the census share of adults aged 18–34 ({{census.adults.18-34.share}}%, Tier 1) applied to the 2022 register. Young people register less than older ones, so the real number is lower." }
      - { label: "Where they are", text: "The dense mainland estates of Kisauni (Junda, Mjambere, Bamburi, Shanzu), Likoni (Timbwani, Bofu) and Jomvu (Mikindani, Miritini)." }
      - { label: "Connectivity and media", text: "{{ict.mombasa.youth}}% of Mombasa's young people use the internet (CA/KNBS 2023/24, Tier 1); TikTok, Instagram and WhatsApp; the stages, football and the barber shop." }
      - { label: "Channels that reach them", text: "- **Primary Digital:** TikTok and Instagram short video; WhatsApp forwards.\n- **Primary Physical:** boda-boda and tuk-tuk stages, football tournaments, the Technical University of Mombasa and TVET colleges.\n- **Direct:** consented SMS on registration and youth programmes." }
      - { label: "What it takes to move them", text: "- *Core Anxiety:* no work, insecurity and drugs in the estates, harassment by county enforcement.\n- *Candidate Value Proposition:* jobs with an employer's name on them (the SEZ, port-linked industry), TVET places, and a quarterly jobs report he can be held to.\n- *Why they did not vote in 2022 (hypothesis):* nothing on offer looked like it would change." }
  - title: "Port, Transport & Logistics Workers"
    fields:
      - { label: "Lead content type", text: "**P2** — he built it, go and see" }
      - { label: "Language", text: "Kiswahili" }
      - { label: "Size", text: "not published as a voter count; no size is estimated." }
      - { label: "Where they are", text: "Changamwe (Port Reitz, Kipevu, Airport, Chaani) and Jomvu, along the port, the container depots and the Nairobi road." }
      - { label: "Channels that reach them", text: "- **Primary:** Kiswahili radio at drive time; workplace and stage visits.\n- **Secondary:** WhatsApp groups and consented SMS." }
      - { label: "What it takes to move them", text: "- *Core Anxiety:* cargo and jobs moved inland with the SGR; casual work without security.\n- *Candidate Value Proposition:* the port's value kept in Mombasa: the Jomvu SEZ, reported as a projection until the jobs exist." }
  - title: "Traders & Small Businesses"
    fields:
      - { label: "Lead content type", text: "**P1** — where the water and the money went" }
      - { label: "Language", text: "Kiswahili; English for business associations" }
      - { label: "Size", text: "not published as a voter count; no size is estimated." }
      - { label: "Where they are", text: "Kongowea (Nyali), Marikiti, Majengo and the CBD (Mvita), and the trading strips of every estate." }
      - { label: "Channels that reach them", text: "- **Physical:** market walk-throughs, traders' associations, the KNCCI Mombasa chapter.\n- **Digital:** geofenced ads at the markets; WhatsApp business chains.\n- **Radio:** midday business programming." }
      - { label: "What it takes to move them", text: "- *Core Anxiety:* fees without services, the county's unpaid bills to suppliers, market sanitation and fire safety.\n- *Candidate Value Proposition:* a single business permit, a public pending-bills schedule paid oldest first, and a builder who has run businesses himself." }
  - title: "Women & Household Managers"
    fields:
      - { label: "Lead content type", text: "**P1** — where the water and the money went" }
      - { label: "Language", text: "Kiswahili" }
      - { label: "Size", text: "**{{census.female}}** women residents (Tier 1); share of the register a named data gap." }
      - { label: "Where they are", text: "Every ward; most active in chamas, women's groups and faith networks." }
      - { label: "Channels that reach them", text: "- **Primary:** WhatsApp voice notes, women's groups and chamas.\n- **Secondary:** consented SMS; faith-based radio programming on water and health." }
      - { label: "What it takes to move them", text: "- *Core Anxiety:* the price of water and the hours it runs; health care; school costs.\n- *Candidate Value Proposition:* water at the county's price at county kiosks, hours of supply published ward by ward." }
  - title: "Professionals & the Public Service"
    fields:
      - { label: "Lead content type", text: "**P3** — the builder explains" }
      - { label: "Language", text: "English and Kiswahili" }
      - { label: "Size", text: "not published: teachers, health workers, county and national civil servants, bank and port staff. No size is estimated." }
      - { label: "Where they are", text: "The Island, Nyali and Tudor; county and national offices; Coast General." }
      - { label: "Channels that reach them", text: "- **Direct & Digital:** policy briefs, LinkedIn and X, national and regional television and talk radio.\n- **Institutional:** union branches, professional associations." }
      - { label: "What it takes to move them", text: "- *Core Anxiety:* late salaries (the county borrowed to pay June 2026 salaries), stalled promotions, drug shortages.\n- *Candidate Value Proposition:* salaries and statutory deductions paid on time, a professional public service board." }
  - title: "The 2022 Abstainers"
    fields:
      - { label: "Lead content type", text: "**P4 into P1** — the visit, then the verification" }
      - { label: "Language", text: "Kiswahili" }
      - { label: "Size", text: "**{{abstained.2022}}** registered voters cast no valid governor vote in 2022 (calculated, Tier 2). Not all are reachable or eligible in 2027; the figure is a ceiling." }
      - { label: "Where they are", text: "Everywhere; turnout was lowest in Jomvu and Changamwe on the day (Tier 2, The Star)." }
      - { label: "Channels that reach them", text: "- **Primary:** ward captains and door-to-door contact; consented SMS and USSD.\n- **Secondary:** radio and the stages." }
      - { label: "What it takes to move them", text: "- *Core Anxiety:* voting changes nothing.\n- *Candidate Value Proposition:* every promise with a date and a way to check it, and a reason to vote on general-election day, when the governor's race is on the same ballot as the president's." }
```

## 11.3 How large each segment is

```lead
**These six segments overlap, and the figures below are not additive.** **Check the base before quoting any percentage here.**
```

**These six segments overlap, and the figures below are not additive.** A 26-year-old trader in Kisauni who did not vote in 2022 sits in three segments. Where a size is stated it is a census figure or a derived estimate labelled as one; where no source exists, no size is given. None is a share of a partition.

**Check the base before quoting any percentage here.** Two denominators are in play: the **register** ({{register.2022}} voters) and the **county population** ({{census.population}} residents). "{{census.female.share}}% women" is a population share; "~{{segment.youth.share}}% youth" is a share of the register. The figure states which applies to each row.

```figure
id: fig-4-3-segments
```
