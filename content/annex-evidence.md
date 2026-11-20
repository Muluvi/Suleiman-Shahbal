```lead
Every figure on this site carries its source, its tier and its date, and where no source exists the gap is named rather than filled.
```

Every figure on this site carries its source, its tier and its date, and where no source exists the gap is named rather than filled. This annex sets out the provenance rules every figure is held to, the three source tiers it is graded against and the protocol for when two sources disagree, and then lists every figure with its source. It is referenced throughout and collected here so the method can be checked without interrupting the argument.

## A.1 The evidence standard

### A.1.1 Every figure carries its provenance

So that no figure drifts between documents, every figure cited in memos, ad targeting budgets, field operations and briefings carries three things, its source, its tier and its date (the **three-part provenance rule**):

```figure
id: provenance-mandate
```

**The rule.** Any metric presented without all three is classed as **unverified draft data** and may not inform field allocations or spending decisions.

### A.1.2 The three source tiers

The campaign grades every source into one of three tiers:

```figure
id: tier-classification
```

```visual
kind: cards
preset: tier
title: "How each tier is used"
items:
  - title: "Tier 1"
    text: "(e.g., {{register.2022}} registered voters in 2022, 30 wards) is hardcoded into operational models and cannot be modified without gazetted IEBC addenda."
  - title: "Tier 2"
    text: "(e.g., the 2022 governor results as reported by The Star, the Nation and the Standard, pending the IEBC forms) is used with its source named, and where two published values disagree both are shown."
  - title: "Tier 3"
    text: "(e.g., the FY2025/26 county budget as read through secondary reporting of the Controller of Budget's review, or the ownership of a Coast radio station before it is checked against the licensing register) is marked as single-source until validated by the issuing body's own documents."
```

#### The Mombasa source pack (November 2026), and how each document is tiered

| Document | Publisher, date | Basis | Tier |
|---|---|---|---|
| Register of voters per ward and per polling station, 2022 | IEBC; polling-station file transcribed from the IEBC PDF and reconciled to the gazetted ward totals | The register | Tier 1 |
| 2019 Kenya Population and Housing Census, Volumes I–IV | KNBS, read through the rKenyaCensus package | The census | Tier 1 |
| Analytical Report on ICT, 2023/24 Kenya Housing Survey | CA and KNBS, August 2025 | A national household survey with county estimates | Tier 1 |
| Gazette Notice 12251, contributions and spending limits | IEBC, 7 August 2026, read through the TransTally mirror; stayed by the High Court | The statutory schedules | Tier 1, with the stay noted wherever used |
| Election court judgments, 2013 and 2017 governor petitions | High Court at Mombasa | Results as recited by the courts | Tier 1 |
| Media reports of the 2022 governor declaration | The Star, The Standard, Capital FM, KNA | The returning officer's announcement | Tier 2 until Form 37C is cited |
| Controller of Budget county reviews, as reported | Business Radar, Nation, AllAfrica | The CBIRR | Tier 2 or Tier 3 by outlet, until the CBIRR itself is cited |

### A.1.3 When two sources disagree

When multiple sources report conflicting metrics (e.g., voter registration counts, vote totals, or demographic proportions), the analysis applies a **four-step protocol**:

```figure
id: conflict-protocol
```

**No guesswork.** The analysis never interpolates, smooths or invents numbers to fill gaps between conflicting datasets.

### A.1.4 The standard applied to our own measurement

```lead
The presence audit in Section 14.1 is held to the same rules as every figure in this document. Platform-reported metrics are **Tier 2**, and they are never presented as Tier 1 alongside IEBC or KNBS figures.
```

The presence audit in Section 14.1 is held to the same rules as every figure in this document.

```visual
kind: checklist
items:
  - label: "Provenance"
    body: "Every number carries its export date, its source system, and whether it came from a Page Insights export or a manual public tally. The two are not interchangeable and are never averaged."
  - label: "Tier"
    body: "Platform-reported metrics are **Tier 2**: they are the platform's own measurement of itself, they restate silently, and they are not audited. They are never presented as Tier 1 alongside IEBC or KNBS figures."
  - label: "Coding, and its agreement rate"
    text: "Post coding is done twice, independently, with disagreements resolved by a third pass."
    body: "**The inter-coder agreement rate is published with the findings.** A coding exercise that will not report its own agreement rate is an opinion wearing a table."
  - label: "Gaps"
    text: "A metric the export does not contain is reported as absent, not estimated."
    body: "Estimated engagement rates and inferred follower geographies are not used."
```

## A.2 Every source, in one table

<!-- source-table:start (generated by scripts/build-source-table.ts; do not edit) -->

Every figure in the store, 505 in all: 274 read off a named document, 136 modelled, 66 targets and 29 still needed. The needed figures are the open items listed in Section 7.3 and are not repeated here.

#### Sourced figures, by document

<!-- keep -->
| Document | Tier | As of | Figures read off it |
|---|---|---|---|
| CA and KNBS, Analytical Report on ICT based on the 2023/24 Kenya Housing Survey | Tier 1 | 2023-24 | `ict.internet` {{ict.internet}}% |
| CA and KNBS, Analytical Report on ICT based on the 2023/24 Kenya Housing Survey (national tables) | Tier 1 | 2023/24 | `ict.kenya.internet` {{ict.kenya.internet}}%; `ict.kenya.internet.rural` {{ict.kenya.internet.rural}}%; `ict.kenya.internet.urban` {{ict.kenya.internet.urban}}%; `ict.kenya.internet.15-24` {{ict.kenya.internet.15-24}}%; `ict.kenya.internet.25-34` {{ict.kenya.internet.25-34}}%; `ict.kenya.internet.35-44` {{ict.kenya.internet.35-44}}%; `ict.kenya.youth` {{ict.kenya.youth}}%; `ict.kenya.youth.urban` {{ict.kenya.youth.urban}}%; `ict.nairobi.youth` {{ict.nairobi.youth}}%; `ict.kenya.phone` {{ict.kenya.phone}}%; `ict.nairobi.internet` {{ict.nairobi.internet}}%; `ict.mombasa.youth` {{ict.mombasa.youth}}% |
| Commission on Revenue Allocation, Kenya County Fact Sheets (3rd ed.), from the 2009 and 2019 censuses | Tier 1 | Not stated | `water.safe.2009` {{water.safe.2009}}%; `water.safe.2019` {{water.safe.2019}}% |
| Communications Authority, Audience Measurement and Industry Trends Report Q2 FY2023/24 | Tier 1 | Not stated | `radio.coast.weekly` {{radio.coast.weekly}}% |
| Communications Authority, Q3 FY2025/26 sector statistics | Tier 1 | 2026-03 | `ict.sim-penetration` {{ict.sim-penetration}}%; `ict.momo-penetration` {{ict.momo-penetration}}%; `ict.sims.national` {{ict.sims.national}}; `ict.broadband.national` {{ict.broadband.national}}; `ict.momo.national` {{ict.momo.national}}; `ict.agents` {{ict.agents}} |
| Communications Authority, sector statistics | Tier 1 | 2025-09 | `ict.agents.2025` {{ict.agents.2025}} |
| County Government of Mombasa, Annual Development Plan 2026/27 | Tier 1 | 2024-25, 2025-07, 2025-26, 2026-27 | `budget.pending-bills.2025-07` KSh {{budget.pending-bills.2025-07}}; `budget.pending-bills.inherited` KSh {{budget.pending-bills.inherited}}; `budget.pending-bills.salary` KSh {{budget.pending-bills.salary}}; `budget.pending-bills.service.plan` KSh {{budget.pending-bills.service.plan}}; `budget.pending-bills.service.budget` KSh {{budget.pending-bills.service.budget}}; `budget.revenue.2024-25.budget` KSh {{budget.revenue.2024-25.budget}}; `budget.revenue.2024-25.actual` KSh {{budget.revenue.2024-25.actual}}; `adp.requirement` KSh {{adp.requirement}}; `adp.funded` KSh {{adp.funded}}; `adp.gap` KSh {{adp.gap}}; `adp.revenue.2026-27` KSh {{adp.revenue.2026-27}}; `adp.osr.2026-27` KSh {{adp.osr.2026-27}}; `adp.flagship.count` {{adp.flagship.count}}; `adp.flagship.investor` {{adp.flagship.investor}}; `adp.flagship.industrial-park` KSh {{adp.flagship.industrial-park}}; `adp.aggregation.complete` {{adp.aggregation.complete}}%; `adp.aggregation.spent` KSh {{adp.aggregation.spent}}; `adp.aggregation.plan` KSh {{adp.aggregation.plan}}; `adp.issues.health` {{adp.issues.health}}%; `adp.issues.water` {{adp.issues.water}}%; `adp.issues.roads` {{adp.issues.roads}}%; `adp.issues.lighting` {{adp.issues.lighting}}%; `adp.issues.education` {{adp.issues.education}}%; `adp.issues.waste` {{adp.issues.waste}}%; `adp.issues.youth` {{adp.issues.youth}}%; `adp.issues.markets` {{adp.issues.markets}}%; `adp.wards.ranked` {{adp.wards.ranked}} |
| Gulf African Bank, corporate history | Tier 1 | Not stated | `record.gab.incorporated` {{record.gab.incorporated}} |
| High Court at Mombasa, Hassan Omar Hassan & another v IEBC & 3 others [2018] KEHC 8291 (Election Petition 10 of 2017) | Tier 1 | 2017-08 | `result.2017.gov.joho` {{result.2017.gov.joho}}; `result.2017.gov.shahbal` {{result.2017.gov.shahbal}}; `result.2017.gov.omar` {{result.2017.gov.omar}}; `result.2017.gov.awiti` {{result.2017.gov.awiti}}; `result.2017.gov.kitsao` {{result.2017.gov.kitsao}} |
| High Court at Mombasa, Suleiman Said Shahbal v IEBC & 3 others [2013] KEHC 2189 (Election Petition 8 of 2013) | Tier 1 | 2013-03 | `result.2013.gov.joho` {{result.2013.gov.joho}}; `result.2013.gov.shahbal` {{result.2013.gov.shahbal}} |
| IEBC 2022 polling station register (data/public-2026-11) | Tier 1 | Not stated | `register.polling-stations` {{register.polling-stations}}; `register.registration-centres` {{register.registration-centres}} |
| IEBC declaration, Kenya Gazette Notice 9951 (2022), via Mzalendo | Tier 1 | 2022-08 | `result.2022.womanrep.zamzam` {{result.2022.womanrep.zamzam}} |
| IEBC, Form 34C county summary, 2022 presidential election | Tier 1 | Not stated | `result.2022.pres.odinga.share` {{result.2022.pres.odinga.share}}%; `result.2022.pres.ruto.share` {{result.2022.pres.ruto.share}}%; `result.2022.pres.wajackoyah.share` {{result.2022.pres.wajackoyah.share}}%; `result.2022.pres.mwaure.share` {{result.2022.pres.mwaure.share}}% |
| IEBC, Registered Voters per County Assembly Ward (2022) | Tier 1 | Not stated | `con.changamwe` {{con.changamwe}}; `ward.port-reitz` {{ward.port-reitz}}; `ward.kipevu` {{ward.kipevu}}; `ward.airport` {{ward.airport}}; `ward.changamwe` {{ward.changamwe}}; `ward.chaani` {{ward.chaani}}; `con.jomvu` {{con.jomvu}}; `ward.jomvu-kuu` {{ward.jomvu-kuu}}; `ward.miritini` {{ward.miritini}}; `ward.mikindani` {{ward.mikindani}}; `con.kisauni` {{con.kisauni}}; `ward.mjambere` {{ward.mjambere}}; `ward.junda` {{ward.junda}}; `ward.bamburi` {{ward.bamburi}}; `ward.mwakirunge` {{ward.mwakirunge}}; `ward.mtopanga` {{ward.mtopanga}}; `ward.magogoni` {{ward.magogoni}}; `ward.shanzu` {{ward.shanzu}}; `con.nyali` {{con.nyali}}; `ward.frere-town` {{ward.frere-town}}; `ward.ziwa-la-ng-ombe` {{ward.ziwa-la-ng-ombe}}; `ward.mkomani` {{ward.mkomani}}; `ward.kongowea` {{ward.kongowea}}; `ward.kadzandani` {{ward.kadzandani}}; `con.likoni` {{con.likoni}}; `ward.mtongwe` {{ward.mtongwe}}; `ward.shika-adabu` {{ward.shika-adabu}}; `ward.bofu` {{ward.bofu}}; `ward.likoni` {{ward.likoni}}; `ward.timbwani` {{ward.timbwani}}; `con.mvita` {{con.mvita}}; `ward.mji-wa-kale-makadara` {{ward.mji-wa-kale-makadara}}; `ward.tudor` {{ward.tudor}}; `ward.tononoka` {{ward.tononoka}}; `ward.shimanzi-ganjoni` {{ward.shimanzi-ganjoni}}; `ward.majengo` {{ward.majengo}}; `register.2022` {{register.2022}}; `register.2022.prisons` {{register.2022.prisons}}; `register.2022.with-prisons` {{register.2022.with-prisons}}; `register.wards` {{register.wards}} |
| KNBS 2019 Census Volume I, Table 2.5 (population by sex and sub-county), via rKenyaCensus | Tier 1 | Not stated | `census.population` {{census.population}}; `census.male` {{census.male}}; `census.female` {{census.female}}; `census.intersex` {{census.intersex}}; `sub.changamwe.population` {{sub.changamwe.population}}; `sub.jomvu.population` {{sub.jomvu.population}}; `sub.kisauni.population` {{sub.kisauni.population}}; `sub.nyali.population` {{sub.nyali.population}}; `sub.likoni.population` {{sub.likoni.population}}; `sub.mvita.population` {{sub.mvita.population}} |
| KNBS 2019 Census Volume II, Table 2.2 (households, land area and density), via rKenyaCensus | Tier 1 | Not stated | `census.households` {{census.households}}; `census.area` {{census.area}}; `census.density` {{census.density}} |
| KNBS 2019 Census Volume III, Table 2.3 (population by age, sex and sub-county), via rKenyaCensus | Tier 1 | 2019 | `census.age.0-14.share` {{census.age.0-14.share}}%; `census.age.15-34.share` {{census.age.15-34.share}}%; `census.age.35-59.share` {{census.age.35-59.share}}%; `census.age.60-plus.share` {{census.age.60-plus.share}}%; `census.adults` {{census.adults}}; `census.adults.18-34` {{census.adults.18-34}} |
| KNBS 2019 Census Volume IV, Table 2.19 (conventional households), via rKenyaCensus | Tier 1 | Not stated | `sub.changamwe.households` {{sub.changamwe.households}}; `sub.jomvu.households` {{sub.jomvu.households}}; `sub.kisauni.households` {{sub.kisauni.households}}; `sub.nyali.households` {{sub.nyali.households}}; `sub.likoni.households` {{sub.likoni.households}}; `sub.mvita.households` {{sub.mvita.households}} |
| KNBS 2019 Census Volume IV, Table 2.19 (main lighting fuel), via rKenyaCensus | Tier 1 | 2019 | `electricity.mains.2019` {{electricity.mains.2019}}%; `electricity.national` {{electricity.national}}% |
| KNBS 2019 Census Volume IV, Tables 2.32 and 2.33 (phone ownership and internet use, persons aged 3+), via rKenyaCensus | Tier 1 | 2019 | `ict.phone` {{ict.phone}}%; `ict.internet.2019` {{ict.internet.2019}}%; `ict.phone.2019` {{ict.phone.2019}}%; `ict.internet.2019.people` {{ict.internet.2019.people}}; `ict.phone.2019.people` {{ict.phone.2019.people}}; `ict.internet.2019.changamwe` {{ict.internet.2019.changamwe}}%; `ict.phone.2019.changamwe` {{ict.phone.2019.changamwe}}%; `ict.internet.2019.jomvu` {{ict.internet.2019.jomvu}}%; `ict.phone.2019.jomvu` {{ict.phone.2019.jomvu}}%; `ict.internet.2019.kisauni` {{ict.internet.2019.kisauni}}%; `ict.phone.2019.kisauni` {{ict.phone.2019.kisauni}}%; `ict.internet.2019.likoni` {{ict.internet.2019.likoni}}%; `ict.phone.2019.likoni` {{ict.phone.2019.likoni}}%; `ict.internet.2019.mvita` {{ict.internet.2019.mvita}}%; `ict.phone.2019.mvita` {{ict.phone.2019.mvita}}%; `ict.internet.2019.nyali` {{ict.internet.2019.nyali}}%; `ict.phone.2019.nyali` {{ict.phone.2019.nyali}}% |
| KNBS and ICF, KDHS 2022 Key Indicators, county table | Tier 1 | Not stated | `water.basic.kdhs` {{water.basic.kdhs}}%; `health.stunting` {{health.stunting}}%; `health.sanitation.basic` {{health.sanitation.basic}}%; `health.fuel.clean` {{health.fuel.clean}}%; `health.teen-pregnancy` {{health.teen-pregnancy}}%; `health.vaccinated` {{health.vaccinated}}%; `health.skilled-birth` {{health.skilled-birth}}%; `health.u5-mortality` {{health.u5-mortality}}; `edu.none.women.adult` {{edu.none.women.adult}}%; `edu.none.men.adult` {{edu.none.men.adult}}% |
| KNBS and ICF, KDHS 2022 Volume 1 (erratum, January 2024), female schooling by county | Tier 1 | Not stated | `edu.none.women` {{edu.none.women}}% |
| KNBS Gross County Product 2023, via KIPPRA Mombasa county brief | Tier 1 | Not stated | `gva.share` {{gva.share}}%; `gva.services` {{gva.services}}% |
| KNBS, 2019 Kenya Population and Housing Census | Tier 1 | Not stated | `census.subcounties` {{census.subcounties}} |
| KNBS, Kenya Poverty Report 2021 | Tier 1 | 2021 | `poverty.2021.national` {{poverty.2021.national}}% |
| Mombasa County Budget Review and Outlook Paper 2025 | Tier 1 | 2024-25 | `budget.osr.treasury.2024-25` KSh {{budget.osr.treasury.2024-25}}; `budget.absorption.overall.2024-25` {{budget.absorption.overall.2024-25}}% |
| WASREB-approved MOWASSCO tariff, 2023/24 to 2025/26 | Tier 1 | Not stated | `water.mowasco.nrw.target` {{water.mowasco.nrw.target}}%; `water.mowasco.hours.target` {{water.mowasco.hours.target}} |
| Water CS Eric Mugaa to the Senate Committee on Lands, Environment and Natural Resources, 18 June 2026, as reported | Tier 1 | Not stated | `water.coast.demand` {{water.coast.demand}}; `water.coast.supply` {{water.coast.supply}}; `water.coast.deficit` {{water.coast.deficit}}; `water.mwache` {{water.mwache}} |
| Water CS Eric Mugaa, as reported by Kenya News Agency, 19 August 2026 | Tier 1 | 2026-08 | `water.mwache.complete` {{water.mwache.complete}}% |
| World Bank, Implementation Status and Results Report, Coastal Region Water Security and Climate Resilience Project (P145559), December 2024 | Tier 1 | Not stated | `water.mwache.cost.usd-m` {{water.mwache.cost.usd-m}} |
| Abdulswamad Nassir, then Mvita MP, as reported by The Star, 1 June 2022 | Tier 2 | 2022-06 | `unemployment.youth.nassir.jobless` {{unemployment.youth.nassir.jobless}}; `unemployment.youth.nassir.youth` {{unemployment.youth.nassir.youth}} |
| Amref Health Africa, citing KDHS 2022 | Tier 2 | Not stated | `health.stunting.kenya` {{health.stunting.kenya}}% |
| Citizen Digital and The Standard, 11 July 2025 | Tier 2 | 2025-07 | `health.mpox.2025` {{health.mpox.2025}} |
| Citizen Digital, 11 July 2025 | Tier 2 | 2025-07 | `health.mpox.kenya.2025` {{health.mpox.kenya.2025}} |
| Coast Water Works Development Agency, Nation (2026) | Tier 2 | Not stated | `water.mwache.wtp.start` {{water.mwache.wtp.start}} |
| Communications Authority, Q3 FY2025/26 sector statistics | Tier 2 | Not stated | `ict.smartphone-share` {{ict.smartphone-share}}%; `ict.smartphones.national` {{ict.smartphones.national}} |
| Controller of Budget FY2024/25 county review, as reported by Eastleigh Voice | Tier 2 | 2025-06 | `budget.pending-bills.2025` KSh {{budget.pending-bills.2025}} |
| Controller of Budget, as reported by AllAfrica (September 2024) | Tier 2 | 2024 | `budget.pending-bills.2021` KSh {{budget.pending-bills.2021}} |
| CRA, Kenya County Fact Sheets, 3rd edition (Mombasa), from KNBS 2019 Census Volume II | Tier 2 | Not stated | `census.rural` {{census.rural}}; `census.urban` {{census.urban}}; `census.rural.share` {{census.rural.share}}%; `census.urban.share` {{census.urban.share}}% |
| Eastleigh Voice, Mombasa County Executive Committee budget estimates FY2025/26 | Tier 2 | Not stated | `budget.estimates.2025-26` KSh {{budget.estimates.2025-26}}; `budget.health.2025-26` KSh {{budget.health.2025-26}} |
| Equal Politics 2022 results tracker | Tier 2 | 2022-08 | `result.2022.womanrep.barayan` {{result.2022.womanrep.barayan}}; `result.2022.womanrep.abdalla` {{result.2022.womanrep.abdalla}} |
| Governor Abdulswamad Nassir, as reported by The Star and KNA (2025) | Tier 2 | Not stated | `water.demand` {{water.demand}}; `water.supply` {{water.supply}}; `water.delivered` {{water.delivered}}; `price.water.vendor` KSh {{price.water.vendor}}; `price.water.county` KSh {{price.water.county}} |
| IEBC declaration as gazetted (Gazette 9955), via Mzalendo | Tier 2 | Not stated | `result.2022.senate.faki` {{result.2022.senate.faki}} |
| IEBC Mombasa, as reported by KNA (2026) | Tier 2 | Not stated | `register.2027.target` {{register.2027.target}} |
| KDHS 2022 county table of household mobile phone ownership, as published by Nairobi Business Monthly (25 May 2025) and the Kenya Food Systems Dashboard | Tier 2 | 2022 | `ict.phone.household` {{ict.phone.household}}% |
| Kenya News Agency, 30 August 2022 (constituency tallies) | Tier 2 | 2022-08 | `result.2022.gov.likoni.nassir` {{result.2022.gov.likoni.nassir}}; `result.2022.gov.likoni.omar` {{result.2022.gov.likoni.omar}} |
| Kenya News Agency, October 2026 | Tier 2 | Not stated | `water.nrw` {{water.nrw}}% |
| KNBS — Kenya Poverty Report 2021, Mombasa county estimate, via Stats Kenya | Tier 2 | 2021 | `poverty.2021` {{poverty.2021}}%; `poverty.2021.people` {{poverty.2021.people}}; `poverty.food.2021` {{poverty.food.2021}}%; `poverty.hardcore.2021` {{poverty.hardcore.2021}}% |
| KNBS county population projection, as reported by Stats Kenya | Tier 2 | 2025 | `population.2025` {{population.2025}} |
| KNBS, Kenya Poverty Report 2022, via Stats Kenya | Tier 2 | 2022 | `poverty.2022` {{poverty.2022}}% |
| Media reporting of the IEBC declaration, Mombasa governor, 30 August 2022 (The Star; Standard; Capital FM; KNA) | Tier 2 | 2022-08 | `result.2022.gov.nassir` {{result.2022.gov.nassir}}; `result.2022.gov.omar` {{result.2022.gov.omar}}; `ballots.2022` {{ballots.2022}} |
| Mzalendo, Mombasa county profile (IEBC declarations, 2022) | Tier 2 | 2022-08 | `mca.2022.seats` {{mca.2022.seats}}; `mca.2022.odm` {{mca.2022.odm}}; `mca.2022.uda` {{mca.2022.uda}}; `mca.2022.independent` {{mca.2022.independent}}; `mca.2022.wdm` {{mca.2022.wdm}}; `mp.2022.odm` {{mp.2022.odm}} |
| Nation, on the Mzima II pipeline (2026) | Tier 2 | Not stated | `water.mzima2` {{water.mzima2}} |
| Nation, reporting the Controller of Budget (2026) | Tier 2 | Not stated | `budget.pending-bills.aged` {{budget.pending-bills.aged}}% |
| Nation, reporting the water regulator's FY2025/26 performance review (2026) | Tier 2 | Not stated | `water.mowasco.met` {{water.mowasco.met}}%; `water.mowasco.debt` KSh {{water.mowasco.debt}}; `water.mowasco.nrw` {{water.mowasco.nrw}}% |
| People Daily, 17 November 2022 | Tier 2 | Not stated | `record.eala.elected` {{record.eala.elected}} |
| Returning officer Swalha Yusuf, as reported by The Standard, 30 August 2022 | Tier 2 | Not stated | `result.2022.gov.valid` {{result.2022.gov.valid}} |
| The Standard and KNA, 30 August 2022 (constituency tallies) | Tier 2 | 2022-08 | `result.2022.gov.changamwe.nassir` {{result.2022.gov.changamwe.nassir}}; `result.2022.gov.changamwe.omar` {{result.2022.gov.changamwe.omar}}; `result.2022.gov.jomvu.nassir` {{result.2022.gov.jomvu.nassir}}; `result.2022.gov.jomvu.omar` {{result.2022.gov.jomvu.omar}}; `result.2022.gov.kisauni.nassir` {{result.2022.gov.kisauni.nassir}}; `result.2022.gov.kisauni.omar` {{result.2022.gov.kisauni.omar}}; `result.2022.gov.nyali.nassir` {{result.2022.gov.nyali.nassir}}; `result.2022.gov.nyali.omar` {{result.2022.gov.nyali.omar}}; `result.2022.gov.mvita.nassir` {{result.2022.gov.mvita.nassir}}; `result.2022.gov.mvita.omar` {{result.2022.gov.mvita.omar}} |
| The Standard, 30 August 2022 | Tier 2 | Not stated | `result.2022.gov.candidates` {{result.2022.gov.candidates}} |
| The Standard, Citizen Digital and Nation reporting on the GulfCap–DP World Mombasa SEZ (July–September 2026) | Tier 2 | Not stated | `record.sez.ksh` KSh {{record.sez.ksh}}; `record.sez.acres` {{record.sez.acres}}; `record.sez.jobs` {{record.sez.jobs}}; `record.sez.firms` {{record.sez.firms}} |
| The Standard, KNA and NTV, 30 August 2022 | Tier 2 | Not stated | `result.2022.gov.omar.media` {{result.2022.gov.omar.media}} |
| The Standard, on the County Equitable Share Bill (2025) | Tier 2 | Not stated | `budget.ward-dev` KSh {{budget.ward-dev}} |
| The Star (13 February 2025) and The Standard (11 December 2025), citing local labour assessments | Tier 2 | Not stated | `unemployment.youth.county` {{unemployment.youth.county}}% |
| The Star, 27 March 2025 | Tier 2 | Not stated | `water.mwache.storage` {{water.mwache.storage}} |
| The Star, 30 August 2022 | Tier 2 | Not stated | `result.2022.gov.awiti` {{result.2022.gov.awiti}}; `result.2022.gov.kingi` {{result.2022.gov.kingi}} |
| The Star, Citizen Digital and The Standard, December 2023 | Tier 2 | Not stated | `record.kncci.award` {{record.kncci.award}} |
| TransTally party profile (Registrar of Political Parties register) | Tier 2 | Not stated | `party.tnd.registered` {{party.tnd.registered}} |
| Wikipedia and The Standard, on Gulf African Bank | Tier 2 | Not stated | `record.gab.founded` {{record.gab.founded}} |
| Wikipedia, Suleiman Shahbal | Tier 2 | Not stated | `record.born` {{record.born}} |
| Auditor-General, Summary Report on County Governments FY2024/25 (Mombasa County Executive), as reported by Business Radar | Tier 3 | 2024-25 | `audit.cash` KSh {{audit.cash}}; `audit.unsupported` KSh {{audit.unsupported}}; `audit.misstatement` KSh {{audit.misstatement}}; `audit.procurement` KSh {{audit.procurement}} |
| Controller of Budget, FY2025/26 county budget implementation review (Mombasa), as reported by Business Radar | Tier 3 | 2024-25, 2025-26, 2026-06 | `budget.total` KSh {{budget.total}}; `budget.development` KSh {{budget.development}}; `budget.equitable` KSh {{budget.equitable}}; `budget.osr` KSh {{budget.osr}}; `budget.overdraft.2026-06` KSh {{budget.overdraft.2026-06}}; `budget.pending-bills.2026` KSh {{budget.pending-bills.2026}}; `budget.absorption.q1` {{budget.absorption.q1}}%; `budget.development.spent` KSh {{budget.development.spent}}; `budget.development.spent.prior` KSh {{budget.development.spent.prior}}; `budget.receipts` KSh {{budget.receipts}}; `budget.spent` KSh {{budget.spent}}; `budget.osr.target` KSh {{budget.osr.target}}; `budget.wage-bill` KSh {{budget.wage-bill}}; `budget.wage-bill.share` {{budget.wage-bill.share}}%; `budget.bank-accounts` {{budget.bank-accounts}}; `audit.uncollected` KSh {{audit.uncollected}} |
| IEBC Commissioner Alutalala Mukhwana, as reported by Breaking Kenya News, 25 March 2026 | Tier 3 | 2026-03 | `register.2026.continuous` {{register.2026.continuous}} |
| IEBC ECVR Phase 1 county totals (1 May 2026), as reported by EverythingKE | Tier 3 | 2026-05 | `register.2026.ecvr-drive` {{register.2026.ecvr-drive}} |
| Mombasa County budget, FY2026/27 (equitable share per the County Allocation of Revenue Act 2026, as reported) | Tier 3 | 2026-27 | `budget.equitable.2026-27` KSh {{budget.equitable.2026-27}} |
| Suleiman Shahbal, interview, 3 October 2026, as reported by People Daily | Tier 3 | 2026-10 | `party.mca.claim` {{party.mca.claim}} |

#### Modelled figures, and how each is computed

<!-- keep -->
| Figure | Value | Tier of its inputs | How it is computed |
|---|---|---|---|
| `register.2022.ward-mean` | {{register.2022.ward-mean}} | Tier 1 | 641,913 across 30 wards. |
| `register.2026.growth` | {{register.2026.growth}} | Tier 3 | Continuous registration (15,140) plus the ECVR drive (51,286): new registrations reported since 2022, gross of deletions. |
| `register.2026` | {{register.2026}} | Tier 3 | Indicative: the 2022 register plus the new registrations reported in 2025–26, before deletions and transfers out. Replace with the certified IEBC register when gazetted. |
| `bloc.north` | {{bloc.north}} | Tier 1 | Kisauni + Nyali: the north mainland, 2022 register. |
| `bloc.north.share` | {{bloc.north.share}}% | Tier 1 | North mainland / 2022 register. |
| `bloc.west` | {{bloc.west}} | Tier 1 | Changamwe + Jomvu: the west mainland, 2022 register. |
| `bloc.west.share` | {{bloc.west.share}}% | Tier 1 | West mainland / 2022 register. |
| `pool` | {{pool}} | Tier 1 | The close-contest belt: Kisauni, Nyali and Changamwe, where the 2022 governor's race was decided by fewer than 2,000 votes each. |
| `pool.share` | {{pool.share}}% | Tier 1 | Pool / 2022 register. |
| `pool.wards` | {{pool.wards}} | Tier 1 | Wards in the pool. |
| `con.changamwe.share` | {{con.changamwe.share}}% | Tier 1 | Changamwe / 2022 register. |
| `con.jomvu.share` | {{con.jomvu.share}}% | Tier 1 | Jomvu / 2022 register. |
| `con.kisauni.share` | {{con.kisauni.share}}% | Tier 1 | Kisauni / 2022 register. |
| `con.nyali.share` | {{con.nyali.share}}% | Tier 1 | Nyali / 2022 register. |
| `con.likoni.share` | {{con.likoni.share}}% | Tier 1 | Likoni / 2022 register. |
| `con.mvita.share` | {{con.mvita.share}}% | Tier 1 | Mvita / 2022 register. |
| `big4` | {{big4}} | Tier 1 | Kisauni, Nyali, Mvita and Likoni: the four largest constituencies. |
| `big4.share` | {{big4.share}}% | Tier 1 | Big 4 / 2022 register. |
| `pareto.top12` | {{pareto.top12}} | Tier 1 | The twelve largest wards, 2022 register. |
| `pareto.top12.share` | {{pareto.top12.share}}% | Tier 1 | Top 12 / 2022 register. |
| `pareto.top20` | {{pareto.top20}} | Tier 1 | The twenty largest wards. |
| `pareto.top20.share` | {{pareto.top20.share}}% | Tier 1 | Top 20 / 2022 register. |
| `pareto.bottom10` | {{pareto.bottom10}} | Tier 1 | The ten smallest wards. |
| `pareto.bottom10.share` | {{pareto.bottom10.share}}% | Tier 1 | Bottom 10 / 2022 register. |
| `pareto.top12.in-pool` | {{pareto.top12.in-pool}} | Tier 1 | Of the twelve largest wards, those in the pool. |
| `pareto.top12.in-pool.voters` | {{pareto.top12.in-pool.voters}} | Tier 1 | Registered voters in those wards. |
| `pareto.top12.in-pool.share` | {{pareto.top12.in-pool.share}}% | Tier 1 | Their share of the register. |
| `largest3` | {{largest3}} | Tier 1 | Timbwani + Mikindani + Majengo: the three largest wards. |
| `result.2022.gov.omar.share` | {{result.2022.gov.omar.share}}% | Tier 2 | 98,105 / 221,148 valid votes. |
| `result.2022.gov.nassir.share` | {{result.2022.gov.nassir.share}}% | Tier 2 | 119,083 / 221,148 valid votes. |
| `result.2022.gov.margin` | {{result.2022.gov.margin}} | Tier 2 | 119,083 less 98,105. |
| `turnout.2022` | {{turnout.2022}}% | Tier 2 | Valid governor votes as a share of the 2022 register: 221,148 / 641,913. The returning officer gave 34%. |
| `abstained.2022` | {{abstained.2022}} | Tier 2 | Registered voters who cast no valid governor vote on 29 August 2022: 641,913 less 221,148. |
| `abstained.2022.share` | {{abstained.2022.share}}% | Tier 1 | Abstainers / the 2022 register. |
| `result.2022.gov.changamwe.margin` | {{result.2022.gov.changamwe.margin}} | Tier 2 | Nassir less Omar in the constituency. |
| `result.2022.gov.jomvu.margin` | {{result.2022.gov.jomvu.margin}} | Tier 2 | Nassir less Omar in the constituency. |
| `result.2022.gov.kisauni.margin` | {{result.2022.gov.kisauni.margin}} | Tier 2 | Nassir less Omar in the constituency. |
| `result.2022.gov.nyali.margin` | {{result.2022.gov.nyali.margin}} | Tier 2 | Nassir less Omar in the constituency. |
| `result.2022.gov.mvita.margin` | {{result.2022.gov.mvita.margin}} | Tier 2 | Nassir less Omar in the constituency. |
| `result.2022.gov.omar.by-constituency` | {{result.2022.gov.omar.by-constituency}} | Tier 2 | The six constituency tallies for Omar added up: 98,108, the second published total. Nassir's six add up exactly to his declared 119,083, so 98,105 is most likely a slip in the announcement. Form 37C confirms. |
| `result.2022.gov.likoni.margin` | {{result.2022.gov.likoni.margin}} | Tier 2 | Nassir less Omar in Likoni. |
| `result.2022.womanrep.total` | {{result.2022.womanrep.total}} | Tier 2 | The three Woman Representative candidates' votes, 9 August 2022. |
| `turnout.postponement.lost` | {{turnout.postponement.lost}} | Tier 2 | Woman Representative votes on 9 August less valid governor votes on 29 August 2022: the voters the postponement lost, at least. |
| `result.2017.gov.valid` | {{result.2017.gov.valid}} | Tier 1 | The five candidates' votes as recited by the court. |
| `result.2017.gov.shahbal.share` | {{result.2017.gov.shahbal.share}}% | Tier 1 | 69,515 / the five candidates' votes. |
| `result.shahbal.drop` | {{result.shahbal.drop}} | Tier 1 | 94,905 (2013) less 69,515 (2017). |
| `result.2013.gov.gap` | {{result.2013.gov.gap}} | Tier 1 | 132,583 less 94,905: the closest he has come. |
| `result.2013.gov.shahbal.share-of-two` | {{result.2013.gov.shahbal.share-of-two}}% | Tier 1 | Shahbal / (Joho + Shahbal), 2013: his share of the two-way vote. |
| `benchmark.share-2022` | {{benchmark.share-2022}}% | Tier 1 | 119,083 / 641,913: the 2022 winner's share of the register. |
| `benchmark.2026-equivalent` | {{benchmark.2026-equivalent}} | Tier 1 | The 2022 winner's share of the register applied to the register in use. A ratio carried forward, not a forecast. |
| `benchmark.2026-equivalent.rounded` | {{benchmark.2026-equivalent.rounded}} | Tier 1 | The equivalent, rounded to the nearest 5,000 for prose. |
| `benchmark.2026-equivalent.share` | {{benchmark.2026-equivalent.share}}% | Tier 1 | The share carried forward: 119,083 / 641,913. |
| `turnout.rate` | {{turnout.rate}}% | Tier 1 | The turnout rate as a multiplier, for the working shown in Section 2.5. |
| `ballots.2026` | {{ballots.2026}} | Tier 1 | Register in use × the 2022 turnout rate, carried forward. |
| `benchmark.share-of-ballots.2026` | {{benchmark.share-of-ballots.2026}}% | Tier 1 | 120,000 / ballots at the 2022 turnout rate on the register in use. |
| `benchmark.share-of-ballots` | {{benchmark.share-of-ballots}}% | Tier 1 | 120,000 / the 221,148 valid 2022 ballots. |
| `benchmark.share-of-register` | {{benchmark.share-of-register}}% | Tier 1 | 120,000 / 2022 register. |
| `benchmark.like-for-like.2026` | {{benchmark.like-for-like.2026}} | Tier 3 | 119,083 / 641,913 × the register in use. |
| `benchmark.gap.2013` | {{benchmark.gap.2013}} | Tier 1 | 120,000 less his 2013 tally of 94,905. |
| `benchmark.gap.2017` | {{benchmark.gap.2017}} | Tier 1 | 120,000 less his 2017 tally of 69,515. |
| `path.a.registered` | {{path.a.registered}} | Tier 1 | Kisauni + Nyali (the north mainland), 2022 register. |
| `path.a.share` | {{path.a.share}}% | Tier 1 | Kisauni + Nyali (the north mainland) / 2022 register. |
| `path.a.ballots` | {{path.a.ballots}} | Tier 1 | Kisauni + Nyali (the north mainland) × the 2022 turnout rate, carried forward. |
| `path.a.margin` | {{path.a.margin}} | Tier 1 | Ballots at the constant less 120,000, even if every ballot went to him. |
| `path.b.registered` | {{path.b.registered}} | Tier 1 | Mvita + Likoni (the Island and the south), 2022 register. |
| `path.b.share` | {{path.b.share}}% | Tier 1 | Mvita + Likoni (the Island and the south) / 2022 register. |
| `path.b.ballots` | {{path.b.ballots}} | Tier 1 | Mvita + Likoni (the Island and the south) × the 2022 turnout rate, carried forward. |
| `path.b.margin` | {{path.b.margin}} | Tier 1 | Ballots at the constant less 120,000, even if every ballot went to him. |
| `path.c.registered` | {{path.c.registered}} | Tier 1 | The twelve largest wards, 2022 register. |
| `path.c.share` | {{path.c.share}}% | Tier 1 | The twelve largest wards / 2022 register. |
| `path.c.ballots` | {{path.c.ballots}} | Tier 1 | The twelve largest wards × the 2022 turnout rate, carried forward. |
| `path.c.margin` | {{path.c.margin}} | Tier 1 | Ballots at the constant less 120,000, even if every ballot went to him. |
| `path.d.registered` | {{path.d.registered}} | Tier 1 | Kisauni + Nyali + Changamwe (the close-contest belt), 2022 register. |
| `path.d.share` | {{path.d.share}}% | Tier 1 | Kisauni + Nyali + Changamwe (the close-contest belt) / 2022 register. |
| `path.d.ballots` | {{path.d.ballots}} | Tier 1 | Kisauni + Nyali + Changamwe (the close-contest belt) × the 2022 turnout rate, carried forward. |
| `path.d.margin` | {{path.d.margin}} | Tier 1 | Ballots at the constant less 120,000, even if every ballot went to him. |
| `path.a.at80` | {{path.a.at80}} | Tier 1 | 80% of the route's ballots. |
| `path.a.at80.short` | {{path.a.at80.short}} | Tier 1 | 120,000 less 80% of the route's ballots. |
| `path.d.at80` | {{path.d.at80}} | Tier 1 | 80% of the route's ballots. |
| `path.d.at80.short` | {{path.d.at80.short}} | Tier 1 | 120,000 less 80% of the route's ballots. |
| `turnout.abstainers.to-benchmark` | {{turnout.abstainers.to-benchmark}}% | Tier 1 | The votes he needs beyond his 2013 tally, as a share of the 2022 abstainers. |
| `census.female.share` | {{census.female.share}}% | Tier 1 | Women / residents. |
| `census.household-size` | {{census.household-size}} | Tier 1 | Residents / households. |
| `census.median-age` | {{census.median-age}} | Tier 1 | Median age in years, interpolated within the single year of age where the cumulative count of residents passes half: 603,614 are under 24 and 30,165 are aged 24, of 1,208,277 with age stated. |
| `census.adults.18-34.share` | {{census.adults.18-34.share}}% | Tier 1 | 18–34 / all residents aged 18 and over. |
| `sub.changamwe.density` | {{sub.changamwe.density}} | Tier 1 | Population / the 16 km² the 2021 spending-limit gazette gives the constituency. |
| `sub.jomvu.density` | {{sub.jomvu.density}} | Tier 1 | Population / the 29 km² the 2021 spending-limit gazette gives the constituency. |
| `sub.kisauni.density` | {{sub.kisauni.density}} | Tier 1 | Population / the 88 km² the 2021 spending-limit gazette gives the constituency. |
| `sub.nyali.density` | {{sub.nyali.density}} | Tier 1 | Population / the 22 km² the 2021 spending-limit gazette gives the constituency. |
| `sub.likoni.density` | {{sub.likoni.density}} | Tier 1 | Population / the 42 km² the 2021 spending-limit gazette gives the constituency. |
| `sub.mvita.density` | {{sub.mvita.density}} | Tier 1 | Population / the 16 km² the 2021 spending-limit gazette gives the constituency. |
| `zone.anchor.population` | {{zone.anchor.population}} | Tier 1 | Sum of the Island's sub-counties: mvita. |
| `zone.anchor.households` | {{zone.anchor.households}} | Tier 1 | Sum of the Island's sub-counties. |
| `zone.anchor.share` | {{zone.anchor.share}}% | Tier 1 | Zone population / county. |
| `zone.north.population` | {{zone.north.population}} | Tier 1 | Sum of the north mainland's sub-counties: kisauni, nyali. |
| `zone.north.households` | {{zone.north.households}} | Tier 1 | Sum of the north mainland's sub-counties. |
| `zone.north.share` | {{zone.north.share}}% | Tier 1 | Zone population / county. |
| `zone.west.population` | {{zone.west.population}} | Tier 1 | Sum of the west mainland's sub-counties: changamwe, jomvu. |
| `zone.west.households` | {{zone.west.households}} | Tier 1 | Sum of the west mainland's sub-counties. |
| `zone.west.share` | {{zone.west.share}}% | Tier 1 | Zone population / county. |
| `zones.population` | {{zones.population}} | Tier 1 | The three zones together. |
| `zones.share` | {{zones.share}}% | Tier 1 | The three zones / county. |
| `zones.excluded` | {{zones.excluded}} | Tier 1 | Residents in no zone (Likoni, the rotating constituency), rounded to the nearest 10,000. |
| `zones.excluded.share` | {{zones.excluded.share}}% | Tier 1 | Likoni / county: 100 less the three zones' share. |
| `zone.anchor.register.share` | {{zone.anchor.register.share}}% | Tier 1 | Mvita / 2022 register. |
| `zone.north.register.share` | {{zone.north.register.share}}% | Tier 1 | Kisauni + Nyali / 2022 register. |
| `zone.west.register.share` | {{zone.west.register.share}}% | Tier 1 | Changamwe + Jomvu / 2022 register. |
| `ict.offline` | {{ict.offline}}% | Tier 1 | 100% less 46.9% internet use. |
| `reach.smartphone` | {{reach.smartphone}} | Tier 1 | 46.9% internet use applied to the register in use. |
| `reach.sms-only` | {{reach.sms-only}} | Tier 2 | 61.8% phone ownership less 46.9% internet use, on the register in use. Mixes a 2019 and a 2023/24 rate: an estimate. |
| `reach.nophone` | {{reach.nophone}} | Tier 2 | The remainder of the register in use: no phone of their own. |
| `reach.offline` | {{reach.offline}} | Tier 1 | The register in use less those reachable online. |
| `reach.smartphone.short` | {{reach.smartphone.short}} | Tier 1 | 120,000 less the digital ceiling. |
| `reach.smartphone.of-benchmark` | {{reach.smartphone.of-benchmark}}% | Tier 1 | The digital ceiling / 120,000. |
| `reach.phone.resident` | {{reach.phone.resident}} | Tier 2 | Phone owners: reachable online plus reachable by SMS only. |
| `budget.grants` | KSh {{budget.grants}} | Tier 3 | The budget less the equitable share and own-source revenue: grants, loans, and balances brought forward, together. |
| `budget.rounding` | KSh {{budget.rounding}} | Tier 3 | No rounding segment: the remainder above absorbs it. |
| `budget.equitable.share` | {{budget.equitable.share}}% | Tier 3 | Equitable share / budget. |
| `budget.osr.share` | {{budget.osr.share}}% | Tier 3 | Own-source revenue / budget. |
| `budget.grants.share` | {{budget.grants.share}}% | Tier 3 | The remainder / budget. |
| `budget.development.share` | {{budget.development.share}}% | Tier 3 | Development / budget. |
| `budget.osr.achieved` | {{budget.osr.achieved}}% | Tier 3 | Own-source revenue collected / target, FY2025/26. |
| `water.supply.share` | {{water.supply.share}}% | Tier 2 | Supply / demand. |
| `water.delivered.share` | {{water.delivered.share}}% | Tier 2 | Water reaching residents / demand. |
| `segment.rural.voters` | {{segment.rural.voters}} | Tier 1 | Mombasa is classed entirely urban. |
| `segment.urban.voters` | {{segment.urban.voters}} | Tier 1 | The whole 2022 register. |
| `segment.youth.voters` | {{segment.youth.voters}} | Tier 2 | The 2019 census share of adults aged 18–34 (59.1%) applied to the 2022 register, rounded. The register is not published by age, and young people register less, so this is a ceiling. |
| `segment.youth.share` | {{segment.youth.share}}% | Tier 2 | Youth voters / the 2022 register. |
| `policy.ward-fund.total` | KSh {{policy.ward-fund.total}} | Tier 1 | KSh 40m per ward × 30 wards, a year. |
| `policy.ward-fund.share` | {{policy.ward-fund.share}}% | Tier 3 | The ward fund / the FY2025/26 budget. |
| `policy.water.saving` | KSh {{policy.water.saving}} | Tier 2 | Vendor price less the county price, per jerrican. |
| `unemployment.youth.nassir.share` | {{unemployment.youth.nassir.share}}% | Tier 2 | The governor's own 2022 figures: 163,208 of 347,250 young people. |
| `budget.pending-bills.inherited.share` | {{budget.pending-bills.inherited.share}}% | Tier 1 | Bills from before FY2024/25 / the stock at 1 July 2025. |
| `budget.revenue.2024-25.share` | {{budget.revenue.2024-25.share}}% | Tier 1 | Revenue received / revenue budgeted, FY2024/25. |
| `adp.gap.share` | {{adp.gap.share}}% | Tier 1 | Unfunded share of the costed plan. |
| `adp.flagship.ksh` | KSh {{adp.flagship.ksh}} | Tier 1 | The seventeen costed flagship projects in ADP 2026/27 Section 3.14 added up; three more are 'to be confirmed' or donor-funded. |

#### Targets, and whose each is

<!-- keep -->
| Target | Value | Whose, and what it commits to |
|---|---|---|
| `benchmark` | {{benchmark}} | The single working benchmark: the 2022 winning tally, 119,083, rounded. Stated once in Section 2.5 and reused everywhere. |
| `benchmark.high` | {{benchmark.high}} | The high-turnout benchmark: Joho's 2017 tally, when turnout was far higher. Used only to bracket the working benchmark. |
| `turnout.constant` | {{turnout.constant}}% | The turnout rate used in every calculation: the 2022 governor election's rate carried forward to 2027. An assumption, and a low one: that election was held three weeks after the general election, after two postponements. The scenario model brackets it at 34–55%. |
| `target.sms.phase-1` | {{target.sms.phase-1}} | Consented SMS contacts by the end of Phase −1. |
| `target.sms.phase-1b` | {{target.sms.phase-1b}} | Consented SMS contacts, Phase 1. |
| `target.sms.phase-2` | {{target.sms.phase-2}} | Consented SMS contacts, Phase 2. |
| `target.sms` | {{target.sms}} | Consented SMS/USSD contacts by Phase 3 (objective 8.3.3). |
| `target.ussd.phase-1` | {{target.ussd.phase-1}} | USSD unique sessions, Phase 1. |
| `target.ussd.phase-2` | {{target.ussd.phase-2}} | USSD unique sessions, Phase 2. |
| `target.ussd.phase-3` | {{target.ussd.phase-3}} | USSD unique sessions, Phase 3. |
| `target.tracker.phase-1` | {{target.tracker.phase-1}} | Tracker reports, Phase 1. |
| `target.tracker.phase-2` | {{target.tracker.phase-2}} | Tracker reports, Phase 2. |
| `target.tracker.phase-3` | {{target.tracker.phase-3}} | Tracker reports, Phase 3. |
| `target.reach.phase-1` | {{target.reach.phase-1}} | Combined social reach, Phase 1: an operational diagnostic, not a performance indicator. |
| `target.reach.phase-2` | {{target.reach.phase-2}} | Cumulative reach, Phase 2: diagnostic. |
| `target.reach.phase-3` | {{target.reach.phase-3}} | Cumulative reach, Phase 3: diagnostic. |
| `target.followers.phase-1` | {{target.followers.phase-1}} | Engaged followers, Phase 1: diagnostic. |
| `target.followers.phase-2` | {{target.followers.phase-2}} | Engaged followers, Phase 2: diagnostic. |
| `target.followers.phase-3` | {{target.followers.phase-3}} | Engaged followers, Phase 3: diagnostic. |
| `target.subscribers.phase-1` | {{target.subscribers.phase-1}} | Email/SMS subscribers, Phase 1. |
| `target.subscribers.phase-2` | {{target.subscribers.phase-2}} | Email/SMS subscribers, Phase 2. |
| `target.volunteers.phase-1` | {{target.volunteers.phase-1}} | Digital volunteer sign-ups, Phase 1 (campaign-owned programme). |
| `target.volunteers.phase-2` | {{target.volunteers.phase-2}} | Digital volunteer sign-ups, Phase 2 (campaign-owned programme). |
| `target.pledges` | {{target.pledges}} | Digital pledges to vote, Phase 3. |
| `target.supporters` | {{target.supporters}} | Verified supporters mapped to polling stations by 31 May 2027 (objective 8.3.4): the benchmark plus a margin. |
| `target.pledged-voters` | {{target.pledged-voters}} | Pledged voters in the CRM (GE-01). |
| `target.contact-universe.lean` | {{target.contact-universe.lean}} | Realistic Phase 3 contact universe at Level 1. |
| `target.contact-universe.standard` | {{target.contact-universe.standard}} | Realistic Phase 3 contact universe at Level 2. |
| `target.contact-universe.premium` | {{target.contact-universe.premium}} | Realistic Phase 3 contact universe at Level 3. |
| `target.content.first` | {{target.content.first}} | Pieces of content approved and scheduled in Phase 0. |
| `target.captains` | {{target.captains}} | Ward captains, 10 per ward: a campaign-owned recommendation. |
| `target.coordinators` | {{target.coordinators}} | Ward coordinators, one per ward: a campaign-owned recommendation. |
| `target.captains.pool` | {{target.captains.pool}} | Of the 300 captains, those recommended for the pool's 17 wards: campaign-owned. |
| `target.ambassadors` | {{target.ambassadors}} | M-Pesa 'Economic Ambassadors', 20 per ward: a campaign-owned recommendation. |
| `target.stage-champions` | {{target.stage-champions}} | Boda-boda and tuk-tuk Stage Champions, 30 per ward: a campaign-owned recommendation. |
| `target.volunteer-points` | {{target.volunteer-points}} | Average points per volunteer per month: the campaign-owned volunteer programme's target. |
| `target.whatsapp-groups` | {{target.whatsapp-groups}} | Community WhatsApp groups monitored by the 30 ward monitoring assistants. |
| `target.polling-agents` | {{target.polling-agents}} | One trained agent per polling station: a campaign-owned requirement. |
| `effort.p-1.anchor` | {{effort.p-1.anchor}}% | Share of communications effort to the Island (Mvita). |
| `effort.p-1.north` | {{effort.p-1.north}}% | Share of communications effort to the north mainland (Kisauni, Nyali). |
| `effort.p-1.west` | {{effort.p-1.west}}% | Share of communications effort to the west mainland (Changamwe, Jomvu). |
| `effort.p-1.rotating` | {{effort.p-1.rotating}}% | Share of communications effort to Likoni and to rotating ward tests. |
| `effort.p12.anchor` | {{effort.p12.anchor}}% | Share of communications effort to the Island (Mvita). |
| `effort.p12.north` | {{effort.p12.north}}% | Share of communications effort to the north mainland (Kisauni, Nyali). |
| `effort.p12.west` | {{effort.p12.west}}% | Share of communications effort to the west mainland (Changamwe, Jomvu). |
| `effort.p12.rotating` | {{effort.p12.rotating}}% | Share of communications effort to Likoni and to rotating ward tests. |
| `effort.p3.anchor` | {{effort.p3.anchor}}% | Share of communications effort to the Island (Mvita). |
| `effort.p3.north` | {{effort.p3.north}}% | Share of communications effort to the north mainland (Kisauni, Nyali). |
| `effort.p3.west` | {{effort.p3.west}}% | Share of communications effort to the west mainland (Changamwe, Jomvu). |
| `effort.p3.rotating` | {{effort.p3.rotating}}% | Share of communications effort to Likoni and to rotating ward tests. |
| `channel.radio.conventional` | {{channel.radio.conventional}}% | Coast radio in Kiswahili (Rahma, Salaam, Pwani FM, Baraka FM): share of effort in the conventional pitch, as Firefly characterises it. |
| `channel.radio.rebalanced` | {{channel.radio.rebalanced}}% | Coast radio in Kiswahili (Rahma, Salaam, Pwani FM, Baraka FM): share of effort, rebalanced. |
| `channel.sms.conventional` | {{channel.sms.conventional}}% | Direct SMS and the USSD tree: share of effort in the conventional pitch, as Firefly characterises it. |
| `channel.sms.rebalanced` | {{channel.sms.rebalanced}}% | Direct SMS and the USSD tree: share of effort, rebalanced. |
| `channel.markets.conventional` | {{channel.markets.conventional}}% | Markets, stages and barazas (Kongowea, Marikiti, Majengo): share of effort in the conventional pitch, as Firefly characterises it. |
| `channel.markets.rebalanced` | {{channel.markets.rebalanced}}% | Markets, stages and barazas (Kongowea, Marikiti, Majengo): share of effort, rebalanced. |
| `channel.digital.conventional` | {{channel.digital.conventional}}% | Digital and social media: share of effort in the conventional pitch, as Firefly characterises it. |
| `channel.digital.rebalanced` | {{channel.digital.rebalanced}}% | Digital and social media: share of effort, rebalanced. |
| `channel.church.conventional` | {{channel.church.conventional}}% | Mosque, church and community outreach: share of effort in the conventional pitch, as Firefly characterises it. |
| `channel.church.rebalanced` | {{channel.church.rebalanced}}% | Mosque, church and community outreach: share of effort, rebalanced. |
| `channel.offline.rebalanced` | {{channel.offline.rebalanced}}% | Share of effort offline, rebalanced: radio, SMS, markets and faith outreach. |
| `effort.digital.pool` | {{effort.digital.pool}}% | Share of Phase −1 digital reach effort geofenced to the pool. |
| `effort.sms.pool` | {{effort.sms.pool}}% | Share of SMS/USSD onboarding effort to the pool's 17 wards. |
| `policy.ward-fund` | KSh {{policy.ward-fund}} | A ward development fund per ward per year: 30% of the KSh 4bn development budget shared equally across 30 wards, as the County Equitable Share Bill proposed. A campaign policy proposal, not yet sized against the FY2027/28 budget. |
| `policy.water.price` | KSh {{policy.water.price}} | A public price ceiling per 20-litre jerrican at county water points and kiosks: the price the county itself charges at source. A campaign policy proposal. |
| `policy.nrw.target` | {{policy.nrw.target}}% | Non-revenue water by 2030: the county's own stated two-year target, adopted and dated. |

<!-- source-table:end -->

