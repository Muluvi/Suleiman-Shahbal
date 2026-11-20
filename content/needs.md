```lead
Mombasa's most urgent need is water: the county needs about **{{water.demand}}** cubic metres a day and receives about **{{water.supply}}**, and only about **{{water.delivered}}** reaches a tap (Tier 2, the governor's own figures).
```

Mombasa's most urgent need is water: the county needs about **{{water.demand}}** cubic metres a day and receives about **{{water.supply}}**, and only about **{{water.delivered}}** reaches residents after leaks and theft (Tier 2, Governor Nassir as reported, 2025). Behind it come jobs and the port, health, housing and access, the cost of living, how county money is spent, and what the Jomvu Special Economic Zone could change. Each concern below carries its evidence against the national figure where one is published, its source and year, and what it means for the campaign. The themes the campaign argues from this evidence are in Section 10.1.

## 1.3 How households live

Mombasa is richer and better connected than most of Kenya, and still a city where a third of residents were poor in 2021 and most households buy water by the jerrican.

```visual
kind: stats
preset: people
items:
  - value: "{{poverty.2021}}%"
    label: "in poverty, 2021"
    tier: 2
    body: "About **{{poverty.2021.people}}** people, against **{{poverty.2021.national}}%** nationally (Tier 2, KNBS Kenya Poverty Report 2021 via Stats Kenya). The 2022 rate was **{{poverty.2022}}%**."
  - value: "{{water.supply.share}}%"
    label: "of daily water demand supplied"
    tier: 2
    body: "About {{water.supply}} m³ a day against a need of {{water.demand}} m³ (Tier 2, the governor's figures, 2025)."
  - value: "{{electricity.mains.2019}}%"
    label: "of households lit by mains electricity, 2019"
    tier: 1
    body: "Against **{{electricity.national}}%** nationally (Tier 1, KNBS 2019 Census Volume IV)."
  - value: "{{ict.internet}}%"
    label: "of residents online"
    tier: 1
    body: "**{{ict.internet}}%** use the internet, the fourth-highest county in Kenya (Tier 1, CA/KNBS 2023/24), so **{{ict.offline}}%** are not online."
```

**Poverty.** The KNBS poverty estimate puts **{{poverty.2021}}%** of Mombasa residents, about {{poverty.2021.people}} people, in poverty in 2021, against {{poverty.2021.national}}% nationally; food poverty was {{poverty.food.2021}}% and hardcore poverty {{poverty.hardcore.2021}}% (Tier 2, KNBS via Stats Kenya). The rate fell to {{poverty.2022}}% in 2022 (Tier 2). The KNBS report's own county annex is the Tier 1 record to hold.

**Water.** The city buys most of its water. Vendors sell a 20-litre jerrican at **KSh {{price.water.vendor}}–40**; the county sells the same water at source for **KSh {{price.water.county}}** (Tier 2, the governor as reported, 2025). Section 3.1 sets out the deficit.

**Electricity.** **{{electricity.mains.2019}}%** of Mombasa's conventional households were lit by mains electricity in 2019, against {{electricity.national}}% nationally (Tier 1, KNBS 2019 Census Volume IV).

**Phones and internet.** **{{ict.internet}}%** of residents use the internet (Tier 1, CA/KNBS 2023/24) and **{{ict.phone}}%** owned a mobile phone in 2019 (Tier 1, KNBS 2019 Census), so **{{ict.offline}}%** are not online. Chapter 4 sets out what each channel can reach.

**What it means for the campaign.** Voters here are urban and half online, but the daily experience is the jerrican, the vendor and the bill. The campaign is fought on services, and digital reaches more voters than in any rural county.

## 3.1 Water

```lead
Mombasa needs about **{{water.demand}} m³** of water a day. It receives about **{{water.supply}} m³**, and **{{water.nrw}}%** of what it buys is lost before it is paid for (Tier 2).
```

```visual
kind: stats
items:
  - value: "{{water.demand}} m³"
    label: "needed each day"
    tier: 2
    body: "The governor's figure for daily demand (Tier 2, 2025). Mombasa produces almost no water of its own: it buys from Baricho in Kilifi, Marere in Kwale and Mzima in Taita Taveta."
  - value: "{{water.supply}} m³"
    label: "received each day"
    tier: 2
    body: "**{{water.supply.share}}%** of demand, of which only about **{{water.delivered}} m³** reaches residents (Tier 2)."
  - value: "{{water.nrw}}%"
    label: "non-revenue water"
    tier: 2
    body: "Lost to leaks and illegal connections: about KSh 100 million a month (Tier 2, KNA, October 2026). The county's own target is 30% within two years."
  - value: "{{water.mowasco.met}}%"
    label: "of demand met by Mombasa Water, FY2025/26"
    tier: 2
    body: "10 million m³ supplied against 85.9 million m³ demanded; the utility carries **KSh {{water.mowasco.debt|bn}} billion** in historical debts (Tier 2, Nation, reporting the regulator's review)."
```

**Two measures, one picture.** The governor's daily figures and the regulator's annual figures count different things: daily supply into the system, and water billed to customers over a year. They agree on the shape: Mombasa gets about a fifth of the water it needs, and loses about half of that.

**What it means for the campaign.** Water is the issue every ward shares and the one the county can be measured on. A promise here must be dated and checkable: the price at the kiosk, the share of water lost, and the hours a ward has water.

## 3.2 The deficit, the dam and the pipeline

```lead
Mwache Dam is to add **{{water.mwache}} m³** a day for Mombasa and Kwale. It was **{{water.mwache.complete}}%** complete in June 2026 (Tier 1, the Water CS to the Senate).
```

The Coast's four counties need about **{{water.coast.demand}} m³** of water a day and receive about **{{water.coast.supply}} m³**, a deficit of **{{water.coast.deficit}} m³** (Tier 1, Water CS Eric Mugaa to the Senate Committee on Lands, Environment and Natural Resources, 18 June 2026). Two national projects are meant to close Mombasa's share of it:

```visual
kind: timeline
items:
  - { date: "June 2026", label: "Mwache Dam {{water.mwache.complete}}% complete", text: "Civil works due to finish by September 2026, impoundment from October 2026 (Tier 1)." }
  - { date: "When full", label: "+{{water.mwache}} m³ a day", text: "Shared between Mombasa and Kwale: almost five times Mombasa's current supply (Tier 1)." }
  - { date: "Planned", label: "Mzima II pipeline", text: "A 220 km pipeline from Mzima Springs to Mazeras, {{water.mzima2}} m³ a day for the Coast (Tier 2, Nation, 2026)." }
```

**What it means for the campaign.** The water arrives in the next term, whoever governs: the dam and the pipeline are national projects. What the county controls is the last mile: reticulation, kiosks, the vendors' price, and the {{water.nrw}}% that leaks away. A governor elected in 2027 will be judged on whether the new water reaches the estates, not on whether the dam is finished. That is a delivery question, and the campaign answers it as one.

## 3.3 Health

Mombasa runs Coast General Teaching and Referral Hospital, the referral hospital for the whole coast, and a network of sub-county hospitals. The FY2025/26 budget estimates gave health **KSh {{budget.health.2025-26|bn}} billion** of {{budget.estimates.2025-26|bn}} billion, the largest single share, including a Level 4 hospital at Kongowea and the refurbishment of Likoni Sub-County Hospital (Tier 2, Eastleigh Voice). County health outcome indicators (stunting, facility births, access to care) are to be read from the KDHS 2022 Mombasa factsheet; until then they are named data gaps: stunting **{{health.stunting}}**.

**What it means for the campaign.** Health is where the county spends most, so it is where a delivery candidate is judged on what the money buys: drugs on the shelf, staff on duty, and the referral hospital's queue.

## 3.4 Roads, the ferry and access

Mombasa's geography is its traffic: one bridge to the north, one causeway to the west, and the Likoni ferry to the south, used by hundreds of thousands of people a day. Roads, drainage and the flooding of low-lying estates in the long rains are county issues; the ferry is national. A sourced inventory of county roads and drainage is not yet in hand; the record that would settle it is the county's Integrated Development Plan 2023–2027.

**What it means for the campaign.** Access is felt daily on the mainland. Ward-level road and drainage commitments are written only once the county's own project register is in hand.

## 3.5 Jobs, the port and the young

Six adults in ten in Mombasa are aged 18 to 34 (**{{census.adults.18-34.share}}%**, Tier 1, KNBS 2019 Census), and **{{ict.mombasa.youth}}%** of its young people use the internet (Tier 1, CA/KNBS 2023/24). The county economy is services-led, with services at **{{gva.services}}%** of its output (Tier 1, KNBS Gross County Product). A county youth unemployment rate is a named data gap: {{unemployment.youth.county}}.

**What it means for the campaign.** The port employs, but the jobs young people talk about are the ones that left with the cargo after the SGR began to move it inland. A jobs promise in Mombasa has to name the employer, and Section 3.8 does.

## 3.6 The cost of living

The cost of living in Mombasa is set by what households buy: water by the jerrican, food in the markets (Mombasa grows almost none of its own), rent and transport.

```visual
kind: stats
items:
  - value: "KSh {{price.water.vendor}}–40"
    label: "a 20-litre jerrican from a vendor"
    tier: 2
    body: "Against **KSh {{price.water.county}}** at county sources: six to eight times the price, in the governor's own words (Tier 2, 2025)."
  - value: "{{poverty.food.2021}}%"
    label: "in food poverty, 2021"
    tier: 2
    body: "Against 30.5% nationally (Tier 2, KNBS via Stats Kenya)."
```

**What it means for the campaign.** The jerrican is the one price the county can move. Section 9 sets a public price ceiling at county points as a proposal to size.

## 1.5 The county's budget and plan

```lead
Mombasa's approved supplementary budget for FY2025/26 was **KSh {{budget.total|bn}} billion**, of which **KSh {{budget.development|bn}} billion** was for development (Tier 3, as reported from the Controller of Budget's review).
```

**The budget.** Mombasa's approved supplementary budget for FY2025/26 was **KSh {{budget.total|bn}} billion**, **{{budget.development.share}}%** of it for development (Tier 3, the Controller of Budget's review as reported by Business Radar; verify against the CBIRR itself).

*   **Equitable share:** KSh {{budget.equitable|bn}} billion ({{budget.equitable.share}}% of the budget) (Tier 3). For FY2026/27 it rises to **KSh {{budget.equitable.2026-27|bn}} billion** (Tier 3).
*   **Own-source revenue:** KSh {{budget.osr|bn}} billion ({{budget.osr.share}}%), including KSh 2.41 billion from county hospitals (Tier 3). Mombasa raises more of its own money than almost any county.
*   **Grants, loans and balances brought forward:** KSh {{budget.grants|bn}} billion ({{budget.grants.share}}%), the remainder (calculated).

```figure
id: fig-2-5-budget
```

**Paying salaries on credit.** In June 2026 the county executive took an overdraft of **KSh {{budget.overdraft.2026-06|m}} million** from KCB to pay June salaries (Tier 3, as reported from the Controller of Budget). The FY2026/27 Programme Based Budget is not yet in hand; when it is, its figures replace these.

**The development plan.** The county's priorities for the term are set in the Mombasa County Integrated Development Plan 2023–2027 and the Annual Development Plans. An itemised project register by ward is a named data gap.

**What it means for the campaign.** A budget of KSh {{budget.total|bn}} billion is the scale of the job. The campaign translates it into ward-level targets, so that a builder's case is made in water, wards and paid bills, not in billions.

## 3.8 The port economy and the Jomvu SEZ

```lead
In September 2026 Mr Shahbal's GulfCap Group signed a **KSh {{record.sez.ksh|bn}} billion** agreement with DP World and the county to build a **{{record.sez.acres}}-acre** Special Economic Zone in Jomvu, projecting **{{record.sez.jobs}}** direct jobs (Tier 2, as reported).
```

**What was signed.** DP World, GulfCap Group and the County Government of Mombasa signed an agreement to develop a {{record.sez.acres}}-acre Special Economic Zone in Jomvu, witnessed by the President at State House on 8 September 2026 (Tier 2, Nation, Standard, Citizen Digital). The promoters project **{{record.sez.jobs}}** direct jobs and report **{{record.sez.firms}}** companies confirmed before construction (Tier 2). These are projections, not counts.

**The public zone next door.** Dongo Kundu, a public SEZ of about 3,000 acres in Likoni run by the Kenya Ports Authority, remains the state's flagship on the south mainland (Tier 2).

**The tension, stated plainly.** The deal is the strongest proof of what he can build, and the most exposed point in his campaign: the President advised him at the signing to stay out of politics, and the Jomvu MP said the county's support for the SEZ sat badly with his challenge to the governor (Tier 2, Nation). The campaign does not hide the deal; it puts the jobs on a public tracker (Section 5.4) and keeps the business and the campaign visibly apart (Section 19).

**What it means for the campaign.** Mombasa's jobs argument is about whether the port's value stays in the county. The SEZ lets him make that argument with a site, a partner and a number, if the number is reported honestly as a projection until the jobs exist.
