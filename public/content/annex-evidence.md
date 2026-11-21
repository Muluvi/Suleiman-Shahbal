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
{"kind":"cards","preset":"tier","title":"How each tier is used","items":[{"title":"Tier 1","text":"(e.g., 641,913 registered voters in 2022, 30 wards) is hardcoded into operational models and cannot be modified without gazetted IEBC addenda."},{"title":"Tier 2","text":"(e.g., the 2022 governor results as reported by The Star, the Nation and the Standard, pending the IEBC forms) is used with its source named, and where two published values disagree both are shown."},{"title":"Tier 3","text":"(e.g., the FY2025/26 county budget as read through secondary reporting of the Controller of Budget's review, or the ownership of a Coast radio station before it is checked against the licensing register) is marked as single-source until validated by the issuing body's own documents."}]}
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
{"kind":"checklist","items":[{"label":"Provenance","body":"Every number carries its export date, its source system, and whether it came from a Page Insights export or a manual public tally. The two are not interchangeable and are never averaged."},{"label":"Tier","body":"Platform-reported metrics are **Tier 2**: they are the platform's own measurement of itself, they restate silently, and they are not audited. They are never presented as Tier 1 alongside IEBC or KNBS figures."},{"label":"Coding, and its agreement rate","text":"Post coding is done twice, independently, with disagreements resolved by a third pass.","body":"**The inter-coder agreement rate is published with the findings.** A coding exercise that will not report its own agreement rate is an opinion wearing a table."},{"label":"Gaps","text":"A metric the export does not contain is reported as absent, not estimated.","body":"Estimated engagement rates and inferred follower geographies are not used."}]}
```

## A.2 Every source, in one table

<!-- source-table:start (generated by scripts/build-source-table.ts; do not edit) -->

Every figure in the store, 520 in all: 284 read off a named document, 142 modelled, 66 targets and 28 still needed. The needed figures are the open items listed in Section 7.3 and are not repeated here.

#### Sourced figures, by document

<!-- keep -->
| Document | Tier | As of | Figures read off it |
|---|---|---|---|
| CA and KNBS, Analytical Report on ICT based on the 2023/24 Kenya Housing Survey | Tier 1 | 2023-24 | `ict.internet` 46.9% |
| CA and KNBS, Analytical Report on ICT based on the 2023/24 Kenya Housing Survey (national tables) | Tier 1 | 2023/24 | `ict.kenya.internet` 35.0%; `ict.kenya.internet.rural` 25.0%; `ict.kenya.internet.urban` 56.6%; `ict.kenya.internet.15-24` 46.6%; `ict.kenya.internet.25-34` 59.3%; `ict.kenya.internet.35-44` 47.1%; `ict.kenya.youth` 58.6%; `ict.kenya.youth.urban` 78.7%; `ict.nairobi.youth` 83.1%; `ict.kenya.phone` 53.7%; `ict.nairobi.internet` 64.7%; `ict.mombasa.youth` 70.4% |
| Commission on Revenue Allocation, Kenya County Fact Sheets (3rd ed.), from the 2009 and 2019 censuses | Tier 1 | Not stated | `water.safe.2009` 73.9%; `water.safe.2019` 56.6% |
| Communications Authority, Audience Measurement and Industry Trends Report Q2 FY2023/24 | Tier 1 | Not stated | `radio.coast.weekly` 73% |
| Communications Authority, Q3 FY2025/26 sector statistics | Tier 1 | 2026-03 | `ict.sim-penetration` 157.7%; `ict.momo-penetration` 100.1%; `ict.sims.national` 84,100,000.0; `ict.broadband.national` 62,600,000.0; `ict.momo.national` 53,400,000.0; `ict.agents` 602,470 |
| Communications Authority, sector statistics | Tier 1 | 2025-09 | `ict.agents.2025` 480,216 |
| County Government of Mombasa, Annual Development Plan 2026/27 | Tier 1 | 2024-25, 2025-07, 2025-26, 2026-27 | `budget.pending-bills.2025-07` KSh 3,750,112,058; `budget.pending-bills.inherited` KSh 3,085,971,108; `budget.pending-bills.salary` KSh 1,289,516,702; `budget.pending-bills.service.plan` KSh 400,000,000; `budget.pending-bills.service.budget` KSh 119,300,000; `budget.revenue.2024-25.budget` KSh 17,360,000,000; `budget.revenue.2024-25.actual` KSh 14,798,536,568; `adp.requirement` KSh 13,760,950,000; `adp.funded` KSh 4,760,706,012; `adp.gap` KSh 9,000,243,988; `adp.revenue.2026-27` KSh 15,500,000,000; `adp.osr.2026-27` KSh 5,816,614,719; `adp.flagship.count` 20; `adp.flagship.investor` 16; `adp.flagship.industrial-park` KSh 15,000,000,000; `adp.aggregation.complete` 35%; `adp.aggregation.spent` KSh 106,000,000; `adp.aggregation.plan` KSh 500,000,000; `adp.issues.health` 18%; `adp.issues.water` 13%; `adp.issues.roads` 12%; `adp.issues.lighting` 11%; `adp.issues.education` 10%; `adp.issues.waste` 8%; `adp.issues.youth` 7%; `adp.issues.markets` 6%; `adp.wards.ranked` 30 |
| Gulf African Bank, corporate history | Tier 1 | Not stated | `record.gab.incorporated` 2006 |
| High Court at Mombasa, Hassan Omar Hassan & another v IEBC & 3 others [2018] KEHC 8291 (Election Petition 10 of 2017) | Tier 1 | 2017-08 | `result.2017.gov.joho` 221,177; `result.2017.gov.shahbal` 69,515; `result.2017.gov.omar` 43,787; `result.2017.gov.awiti` 4,709; `result.2017.gov.kitsao` 1,670 |
| High Court at Mombasa, Suleiman Said Shahbal v IEBC & 3 others [2013] KEHC 2189 (Election Petition 8 of 2013) | Tier 1 | 2013-03 | `result.2013.gov.joho` 132,583; `result.2013.gov.shahbal` 94,905 |
| IEBC 2022 polling station register (data/public-2026-11) | Tier 1 | Not stated | `register.polling-stations` 1,041; `register.registration-centres` 228 |
| IEBC declaration, Kenya Gazette Notice 9951 (2022), via Mzalendo | Tier 1 | 2022-08 | `result.2022.womanrep.zamzam` 116,008 |
| IEBC, Form 34C county summary, 2022 presidential election | Tier 1 | Not stated | `result.2022.pres.odinga.share` 58.07%; `result.2022.pres.ruto.share` 41.00%; `result.2022.pres.wajackoyah.share` 0.76%; `result.2022.pres.mwaure.share` 0.17% |
| IEBC, Registered Voters per County Assembly Ward (2022) | Tier 1 | Not stated | `con.changamwe` 93,561; `ward.port-reitz` 17,817; `ward.kipevu` 16,132; `ward.airport` 18,557; `ward.changamwe` 18,182; `ward.chaani` 22,873; `con.jomvu` 75,085; `ward.jomvu-kuu` 24,243; `ward.miritini` 18,048; `ward.mikindani` 32,794; `con.kisauni` 135,276; `ward.mjambere` 22,692; `ward.junda` 25,602; `ward.bamburi` 20,470; `ward.mwakirunge` 6,423; `ward.mtopanga` 19,474; `ward.magogoni` 15,105; `ward.shanzu` 25,510; `con.nyali` 124,253; `ward.frere-town` 24,849; `ward.ziwa-la-ng-ombe` 23,296; `ward.mkomani` 24,154; `ward.kongowea` 28,846; `ward.kadzandani` 23,108; `con.likoni` 94,764; `ward.mtongwe` 13,937; `ward.shika-adabu` 15,437; `ward.bofu` 18,188; `ward.likoni` 13,273; `ward.timbwani` 33,929; `con.mvita` 118,974; `ward.mji-wa-kale-makadara` 22,341; `ward.tudor` 22,926; `ward.tononoka` 23,379; `ward.shimanzi-ganjoni` 18,556; `ward.majengo` 31,772; `register.2022` 641,913; `register.2022.prisons` 0; `register.2022.with-prisons` 641,913; `register.wards` 30 |
| KNBS 2019 Census Volume I, Table 2.5 (population by sex and sub-county), via rKenyaCensus | Tier 1 | Not stated | `census.population` 1,208,333; `census.male` 610,257; `census.female` 598,046; `census.intersex` 30; `sub.changamwe.population` 131,882; `sub.jomvu.population` 163,415; `sub.kisauni.population` 291,930; `sub.nyali.population` 216,577; `sub.likoni.population` 250,358; `sub.mvita.population` 154,171 |
| KNBS 2019 Census Volume II, Table 2.2 (households, land area and density), via rKenyaCensus | Tier 1 | Not stated | `census.households` 378,422; `census.area` 220; `census.density` 5,495 |
| KNBS 2019 Census Volume III, Table 2.3 (population by age, sex and sub-county), via rKenyaCensus | Tier 1 | 2019 | `census.age.0-14.share` 32.6%; `census.age.15-34.share` 41.8%; `census.age.35-59.share` 22.4%; `census.age.60-plus.share` 3.2%; `census.adults` 756,906; `census.adults.18-34` 447,253 |
| KNBS 2019 Census Volume IV, Table 2.19 (conventional households), via rKenyaCensus | Tier 1 | Not stated | `sub.changamwe.households` 46,439; `sub.jomvu.households` 53,214; `sub.kisauni.households` 88,159; `sub.nyali.households` 69,771; `sub.likoni.households` 80,002; `sub.mvita.households` 38,710 |
| KNBS 2019 Census Volume IV, Table 2.19 (main lighting fuel), via rKenyaCensus | Tier 1 | 2019 | `electricity.mains.2019` 85.9%; `electricity.national` 50.4% |
| KNBS 2019 Census Volume IV, Tables 2.32 and 2.33 (phone ownership and internet use, persons aged 3+), via rKenyaCensus | Tier 1 | 2019 | `ict.phone` 61.8%; `ict.internet.2019` 39.2%; `ict.phone.2019` 61.8%; `ict.internet.2019.people` 431,327; `ict.phone.2019.people` 679,402; `ict.internet.2019.changamwe` 39.9%; `ict.phone.2019.changamwe` 65.3%; `ict.internet.2019.jomvu` 32.2%; `ict.phone.2019.jomvu` 59.1%; `ict.internet.2019.kisauni` 35.6%; `ict.phone.2019.kisauni` 58.7%; `ict.internet.2019.likoni` 33.0%; `ict.phone.2019.likoni` 58.9%; `ict.internet.2019.mvita` 55.2%; `ict.phone.2019.mvita` 66.4%; `ict.internet.2019.nyali` 44.9%; `ict.phone.2019.nyali` 65.7% |
| KNBS and ICF, KDHS 2022 Key Indicators, county table | Tier 1 | Not stated | `water.basic.kdhs` 52%; `health.stunting` 14%; `health.sanitation.basic` 47%; `health.fuel.clean` 42%; `health.teen-pregnancy` 9%; `health.vaccinated` 93%; `health.skilled-birth` 96%; `health.u5-mortality` 50; `edu.none.women.adult` 7%; `edu.none.men.adult` 3% |
| KNBS and ICF, KDHS 2022 Volume 1 (erratum, January 2024), female schooling by county | Tier 1 | Not stated | `edu.none.women` 11.3% |
| KNBS Gross County Product 2023, via KIPPRA Mombasa county brief | Tier 1 | Not stated | `gva.share` 5.1%; `gva.services` 65.5% |
| KNBS, 2019 Kenya Population and Housing Census | Tier 1 | Not stated | `census.subcounties` 6 |
| KNBS, Kenya Poverty Report 2021 | Tier 1 | 2021 | `poverty.2021.national` 38.6% |
| Mombasa County Budget Review and Outlook Paper 2025 | Tier 1 | 2024-25 | `budget.osr.treasury.2024-25` KSh 4,880,829,952; `budget.absorption.overall.2024-25` 78% |
| WASREB-approved MOWASSCO tariff, 2023/24 to 2025/26 | Tier 1 | Not stated | `water.mowasco.nrw.target` 39%; `water.mowasco.hours.target` 12 |
| Water CS Eric Mugaa to the Senate Committee on Lands, Environment and Natural Resources, 18 June 2026, as reported | Tier 1 | Not stated | `water.coast.demand` 512,000; `water.coast.supply` 185,000; `water.coast.deficit` 327,000; `water.mwache` 186,000 |
| Water CS Eric Mugaa, as reported by Kenya News Agency, 19 August 2026 | Tier 1 | 2026-08 | `water.mwache.complete` 90% |
| WHO Kenya, Mpox situation report, week 23 of 2026 (Ministry of Health data) | Tier 1 | 2026-06 | `health.mpox.2026` 70; `health.mpox.kenya.2026` 192 |
| World Bank, Implementation Status and Results Report, Coastal Region Water Security and Climate Resilience Project (P145559), December 2024 | Tier 1 | Not stated | `water.mwache.cost.usd-m` 266.76 |
| Abdulswamad Nassir, then Mvita MP, as reported by The Star, 1 June 2022 | Tier 2 | 2022-06 | `unemployment.youth.nassir.jobless` 163,208; `unemployment.youth.nassir.youth` 347,250 |
| Amref Health Africa, citing KDHS 2022 | Tier 2 | Not stated | `health.stunting.kenya` 18% |
| Citizen Digital and The Standard, 11 July 2025 | Tier 2 | 2025-07 | `health.mpox.2025` 98 |
| Citizen Digital, 11 July 2025 | Tier 2 | 2025-07 | `health.mpox.kenya.2025` 226 |
| Coast Water Works Development Agency, Nation (2026) | Tier 2 | Not stated | `water.mwache.wtp.start` 2026 |
| Communications Authority, Q3 FY2025/26 sector statistics | Tier 2 | Not stated | `ict.smartphone-share` 59.7%; `ict.smartphones.national` 50,200,000.0 |
| Controller of Budget FY2024/25 county review, as reported by Eastleigh Voice | Tier 2 | 2025-06 | `budget.pending-bills.2025` KSh 3,860,000,000 |
| Controller of Budget, as reported by AllAfrica (September 2024) | Tier 2 | 2024 | `budget.pending-bills.2021` KSh 4,400,000,000 |
| CRA, Kenya County Fact Sheets, 3rd edition (Mombasa), from KNBS 2019 Census Volume II | Tier 2 | Not stated | `census.rural` 0; `census.urban` 1,208,333; `census.rural.share` 0.0%; `census.urban.share` 100.0% |
| Eastleigh Voice, Mombasa County Executive Committee budget estimates FY2025/26 | Tier 2 | Not stated | `budget.estimates.2025-26` KSh 14,600,000,000; `budget.health.2025-26` KSh 4,750,000,000 |
| Equal Politics 2022 results tracker | Tier 2 | 2022-08 | `result.2022.womanrep.barayan` 83,115; `result.2022.womanrep.abdalla` 35,640 |
| GeoPoll, Kenya audience measurement, January to December 2024 | Tier 2 | 2024 | `radio.kaya` 7.3% |
| Governor Abdulswamad Nassir, as reported by The Star and KNA (2025) | Tier 2 | Not stated | `water.demand` 200,000; `water.supply` 40,000; `water.delivered` 20,000; `price.water.vendor` KSh 30; `price.water.county` KSh 5 |
| IEBC announcement, as reported by The Standard and Kenyans.co.ke (2026) | Tier 2 | 2026 | `parties.nomination-rules` 105 |
| IEBC declaration as gazetted (Gazette 9955), via Mzalendo | Tier 2 | Not stated | `result.2022.senate.faki` 113,694 |
| IEBC Mombasa, as reported by KNA (2026) | Tier 2 | Not stated | `register.2027.target` 825,000 |
| IEBC registered voters per constituency, 2017 General Election (as listed by Infohub Kenya and The Star) | Tier 2 | 2017-08 | `register.2017.changamwe` 86,331; `register.2017.jomvu` 69,307; `register.2017.kisauni` 126,151; `register.2017.nyali` 104,017; `register.2017.likoni` 87,326; `register.2017.mvita` 107,091 |
| KDHS 2022 county table of household mobile phone ownership, as published by Nairobi Business Monthly (25 May 2025) and the Kenya Food Systems Dashboard | Tier 2 | 2022 | `ict.phone.household` 97.1% |
| Kenya News Agency, 30 August 2022 (constituency tallies) | Tier 2 | 2022-08 | `result.2022.gov.likoni.nassir` 17,425; `result.2022.gov.likoni.omar` 9,756 |
| Kenya News Agency, October 2026 | Tier 2 | Not stated | `water.nrw` 60% |
| KNBS — Kenya Poverty Report 2021, Mombasa county estimate, via Stats Kenya | Tier 2 | 2021 | `poverty.2021` 31.8%; `poverty.2021.people` 402,000; `poverty.food.2021` 29.3%; `poverty.hardcore.2021` 1.0% |
| KNBS county population projection, as reported by Stats Kenya | Tier 2 | 2025 | `population.2025` 1,368,000 |
| KNBS, Kenya Poverty Report 2022, via Stats Kenya | Tier 2 | 2022 | `poverty.2022` 27.0% |
| Media reporting of the IEBC declaration, Mombasa governor, 30 August 2022 (The Star; Standard; Capital FM; KNA) | Tier 2 | 2022-08 | `result.2022.gov.nassir` 119,083; `result.2022.gov.omar` 98,105; `ballots.2022` 221,148 |
| Mzalendo, Mombasa county profile (IEBC declarations, 2022) | Tier 2 | 2022-08 | `mca.2022.seats` 30; `mca.2022.odm` 23; `mca.2022.uda` 4; `mca.2022.independent` 2; `mca.2022.wdm` 1; `mp.2022.odm` 5 |
| Nation, on the Mzima II pipeline (2026) | Tier 2 | Not stated | `water.mzima2` 105,000 |
| Nation, reporting the Controller of Budget (2026) | Tier 2 | Not stated | `budget.pending-bills.aged` 98% |
| Nation, reporting the water regulator's FY2025/26 performance review (2026) | Tier 2 | Not stated | `water.mowasco.met` 11.6%; `water.mowasco.debt` KSh 1,470,000,000; `water.mowasco.nrw` 49% |
| People Daily, 17 November 2022 | Tier 2 | Not stated | `record.eala.elected` 2022 |
| Returning officer Swalha Yusuf, as reported by The Standard, 30 August 2022 | Tier 2 | Not stated | `result.2022.gov.valid` 221,148 |
| The Standard and KNA, 30 August 2022 (constituency tallies) | Tier 2 | 2022-08 | `result.2022.gov.changamwe.nassir` 17,740; `result.2022.gov.changamwe.omar` 15,898; `result.2022.gov.jomvu.nassir` 15,629; `result.2022.gov.jomvu.omar` 11,038; `result.2022.gov.kisauni.nassir` 21,796; `result.2022.gov.kisauni.omar` 20,750; `result.2022.gov.nyali.nassir` 22,387; `result.2022.gov.nyali.omar` 21,580; `result.2022.gov.mvita.nassir` 24,106; `result.2022.gov.mvita.omar` 19,086 |
| The Standard, 30 August 2022 | Tier 2 | Not stated | `result.2022.gov.candidates` 7 |
| The Standard, Citizen Digital and Nation reporting on the GulfCap–DP World Mombasa SEZ (July–September 2026) | Tier 2 | Not stated | `record.sez.ksh` KSh 12,000,000,000; `record.sez.acres` 535; `record.sez.jobs` 7,972; `record.sez.firms` 67 |
| The Standard, KNA and NTV, 30 August 2022 | Tier 2 | Not stated | `result.2022.gov.omar.media` 98,108 |
| The Standard, on the County Equitable Share Bill (2025) | Tier 2 | Not stated | `budget.ward-dev` KSh 4,000,000,000 |
| The Star (13 February 2025) and The Standard (11 December 2025), citing local labour assessments | Tier 2 | Not stated | `unemployment.youth.county` 44% |
| The Star, 27 March 2025 | Tier 2 | Not stated | `water.mwache.storage` 136,000,000 |
| The Star, 30 August 2022 | Tier 2 | Not stated | `result.2022.gov.awiti` 875; `result.2022.gov.kingi` 712 |
| The Star, Citizen Digital and The Standard, December 2023 | Tier 2 | Not stated | `record.kncci.award` 2023 |
| TransTally party profile (Registrar of Political Parties register) | Tier 2 | Not stated | `party.tnd.registered` 2012 |
| Wikipedia and The Standard, on Gulf African Bank | Tier 2 | Not stated | `record.gab.founded` 2008 |
| Wikipedia, Suleiman Shahbal | Tier 2 | Not stated | `record.born` 1960 |
| Auditor-General, Summary Report on County Governments FY2024/25 (Mombasa County Executive), as reported by Business Radar | Tier 3 | 2024-25 | `audit.cash` KSh 63,960,000; `audit.unsupported` KSh 414,330,000; `audit.misstatement` KSh 112,940,000; `audit.procurement` KSh 95,130,000 |
| Controller of Budget, FY2025/26 county budget implementation review (Mombasa), as reported by Business Radar | Tier 3 | 2024-25, 2025-26, 2026-06 | `budget.total` KSh 18,730,000,000; `budget.development` KSh 5,620,000,000; `budget.equitable` KSh 8,380,000,000; `budget.osr` KSh 6,210,000,000; `budget.overdraft.2026-06` KSh 620,520,000; `budget.pending-bills.2026` KSh 3,800,000,000; `budget.absorption.q1` 45.8%; `budget.development.spent` KSh 2,570,000,000; `budget.development.spent.prior` KSh 3,430,000,000; `budget.receipts` KSh 15,790,000,000; `budget.spent` KSh 13,030,000,000; `budget.osr.target` KSh 8,390,000,000; `budget.wage-bill` KSh 7,220,000,000; `budget.wage-bill.share` 55.1%; `budget.bank-accounts` 101; `audit.uncollected` KSh 13,680,000,000 |
| IEBC Commissioner Alutalala Mukhwana, as reported by Breaking Kenya News, 25 March 2026 | Tier 3 | 2026-03 | `register.2026.continuous` 15,140 |
| IEBC ECVR Phase 1 county totals (1 May 2026), as reported by EverythingKE | Tier 3 | 2026-05 | `register.2026.ecvr-drive` 51,286 |
| Mombasa County budget, FY2026/27 (equitable share per the County Allocation of Revenue Act 2026, as reported) | Tier 3 | 2026-27 | `budget.equitable.2026-27` KSh 8,660,000,000 |
| Suleiman Shahbal, interview, 3 October 2026, as reported by People Daily | Tier 3 | 2026-10 | `party.mca.claim` 24 |

#### Modelled figures, and how each is computed

<!-- keep -->
| Figure | Value | Tier of its inputs | How it is computed |
|---|---|---|---|
| `register.2022.ward-mean` | 21,397 | Tier 1 | 641,913 across 30 wards. |
| `register.2026.growth` | 66,426 | Tier 3 | Continuous registration (15,140) plus the ECVR drive (51,286): new registrations reported since 2022, gross of deletions. |
| `register.2026` | 708,339 | Tier 3 | Indicative: the 2022 register plus the new registrations reported in 2025–26, before deletions and transfers out. Replace with the certified IEBC register when gazetted. |
| `bloc.north` | 259,529 | Tier 1 | Kisauni + Nyali: the north mainland, 2022 register. |
| `bloc.north.share` | 40.43% | Tier 1 | North mainland / 2022 register. |
| `bloc.west` | 168,646 | Tier 1 | Changamwe + Jomvu: the west mainland, 2022 register. |
| `bloc.west.share` | 26.27% | Tier 1 | West mainland / 2022 register. |
| `pool` | 353,090 | Tier 1 | The close-contest belt: Kisauni, Nyali and Changamwe, where the 2022 governor's race was decided by fewer than 2,000 votes each. |
| `pool.share` | 55.0% | Tier 1 | Pool / 2022 register. |
| `pool.wards` | 17 | Tier 1 | Wards in the pool. |
| `con.changamwe.share` | 14.58% | Tier 1 | Changamwe / 2022 register. |
| `con.jomvu.share` | 11.70% | Tier 1 | Jomvu / 2022 register. |
| `con.kisauni.share` | 21.07% | Tier 1 | Kisauni / 2022 register. |
| `con.nyali.share` | 19.36% | Tier 1 | Nyali / 2022 register. |
| `con.likoni.share` | 14.76% | Tier 1 | Likoni / 2022 register. |
| `con.mvita.share` | 18.53% | Tier 1 | Mvita / 2022 register. |
| `big4` | 473,267 | Tier 1 | Kisauni, Nyali, Mvita and Likoni: the four largest constituencies. |
| `big4.share` | 73.73% | Tier 1 | Big 4 / 2022 register. |
| `pareto.top12` | 321,482 | Tier 1 | The twelve largest wards, 2022 register. |
| `pareto.top12.share` | 50.08% | Tier 1 | Top 12 / 2022 register. |
| `pareto.top20` | 489,371 | Tier 1 | The twenty largest wards. |
| `pareto.top20.share` | 76.24% | Tier 1 | Top 20 / 2022 register. |
| `pareto.bottom10` | 152,542 | Tier 1 | The ten smallest wards. |
| `pareto.bottom10.share` | 23.76% | Tier 1 | Bottom 10 / 2022 register. |
| `pareto.top12.in-pool` | 7 | Tier 1 | Of the twelve largest wards, those in the pool. |
| `pareto.top12.in-pool.voters` | 175,365 | Tier 1 | Registered voters in those wards. |
| `pareto.top12.in-pool.share` | 27.3% | Tier 1 | Their share of the register. |
| `largest3` | 98,495 | Tier 1 | Timbwani + Mikindani + Majengo: the three largest wards. |
| `result.2022.gov.omar.share` | 44.36% | Tier 2 | 98,105 / 221,148 valid votes. |
| `result.2022.gov.nassir.share` | 53.85% | Tier 2 | 119,083 / 221,148 valid votes. |
| `result.2022.gov.margin` | 20,978 | Tier 2 | 119,083 less 98,105. |
| `turnout.2022` | 34.5% | Tier 2 | Valid governor votes as a share of the 2022 register: 221,148 / 641,913. The returning officer gave 34%. |
| `abstained.2022` | 420,765 | Tier 2 | Registered voters who cast no valid governor vote on 29 August 2022: 641,913 less 221,148. |
| `abstained.2022.share` | 65.5% | Tier 1 | Abstainers / the 2022 register. |
| `result.2022.gov.changamwe.margin` | 1,842 | Tier 2 | Nassir less Omar in the constituency. |
| `result.2022.gov.jomvu.margin` | 4,591 | Tier 2 | Nassir less Omar in the constituency. |
| `result.2022.gov.kisauni.margin` | 1,046 | Tier 2 | Nassir less Omar in the constituency. |
| `result.2022.gov.nyali.margin` | 807 | Tier 2 | Nassir less Omar in the constituency. |
| `result.2022.gov.mvita.margin` | 5,020 | Tier 2 | Nassir less Omar in the constituency. |
| `result.2022.gov.omar.by-constituency` | 98,108 | Tier 2 | The six constituency tallies for Omar added up: 98,108, the second published total. Nassir's six add up exactly to his declared 119,083, so 98,105 is most likely a slip in the announcement. Form 37C confirms. |
| `result.2022.gov.likoni.margin` | 7,669 | Tier 2 | Nassir less Omar in Likoni. |
| `result.2022.womanrep.total` | 234,763 | Tier 2 | The three Woman Representative candidates' votes, 9 August 2022. |
| `turnout.postponement.lost` | 13,615 | Tier 2 | Woman Representative votes on 9 August less valid governor votes on 29 August 2022: the voters the postponement lost, at least. |
| `result.2017.gov.valid` | 340,858 | Tier 1 | The five candidates' votes as recited by the court. |
| `result.2017.gov.shahbal.share` | 20.4% | Tier 1 | 69,515 / the five candidates' votes. |
| `result.shahbal.drop` | 25,390 | Tier 1 | 94,905 (2013) less 69,515 (2017). |
| `result.2013.gov.gap` | 37,678 | Tier 1 | 132,583 less 94,905: the closest he has come. |
| `result.2013.gov.shahbal.share-of-two` | 41.7% | Tier 1 | Shahbal / (Joho + Shahbal), 2013: his share of the two-way vote. |
| `benchmark.share-2022` | 18.6% | Tier 1 | 119,083 / 641,913: the 2022 winner's share of the register. |
| `benchmark.2026-equivalent` | 131,406 | Tier 1 | The 2022 winner's share of the register applied to the register in use. A ratio carried forward, not a forecast. |
| `benchmark.2026-equivalent.rounded` | 130,000 | Tier 1 | The equivalent, rounded to the nearest 5,000 for prose. |
| `benchmark.2026-equivalent.share` | 18.6% | Tier 1 | The share carried forward: 119,083 / 641,913. |
| `turnout.rate` | 0.345% | Tier 1 | The turnout rate as a multiplier, for the working shown in Section 2.5. |
| `ballots.2026` | 244,377 | Tier 1 | Register in use × the 2022 turnout rate, carried forward. |
| `benchmark.share-of-ballots.2026` | 49.1% | Tier 1 | 120,000 / ballots at the 2022 turnout rate on the register in use. |
| `benchmark.share-of-ballots` | 54.3% | Tier 1 | 120,000 / the 221,148 valid 2022 ballots. |
| `benchmark.share-of-register` | 18.7% | Tier 1 | 120,000 / 2022 register. |
| `benchmark.like-for-like.2026` | 131,406 | Tier 3 | 119,083 / 641,913 × the register in use. |
| `benchmark.gap.2013` | 25,095 | Tier 1 | 120,000 less his 2013 tally of 94,905. |
| `benchmark.gap.2017` | 50,485 | Tier 1 | 120,000 less his 2017 tally of 69,515. |
| `path.a.registered` | 259,529 | Tier 1 | Kisauni + Nyali (the north mainland), 2022 register. |
| `path.a.share` | 40.43% | Tier 1 | Kisauni + Nyali (the north mainland) / 2022 register. |
| `path.a.ballots` | 89,538 | Tier 1 | Kisauni + Nyali (the north mainland) × the 2022 turnout rate, carried forward. |
| `path.a.margin` | −30,462 | Tier 1 | Ballots at the constant less 120,000, even if every ballot went to him. |
| `path.b.registered` | 213,738 | Tier 1 | Mvita + Likoni (the Island and the south), 2022 register. |
| `path.b.share` | 33.30% | Tier 1 | Mvita + Likoni (the Island and the south) / 2022 register. |
| `path.b.ballots` | 73,740 | Tier 1 | Mvita + Likoni (the Island and the south) × the 2022 turnout rate, carried forward. |
| `path.b.margin` | −46,260 | Tier 1 | Ballots at the constant less 120,000, even if every ballot went to him. |
| `path.c.registered` | 321,482 | Tier 1 | The twelve largest wards, 2022 register. |
| `path.c.share` | 50.08% | Tier 1 | The twelve largest wards / 2022 register. |
| `path.c.ballots` | 110,911 | Tier 1 | The twelve largest wards × the 2022 turnout rate, carried forward. |
| `path.c.margin` | −9,089 | Tier 1 | Ballots at the constant less 120,000, even if every ballot went to him. |
| `path.d.registered` | 353,090 | Tier 1 | Kisauni + Nyali + Changamwe (the close-contest belt), 2022 register. |
| `path.d.share` | 55.01% | Tier 1 | Kisauni + Nyali + Changamwe (the close-contest belt) / 2022 register. |
| `path.d.ballots` | 121,816 | Tier 1 | Kisauni + Nyali + Changamwe (the close-contest belt) × the 2022 turnout rate, carried forward. |
| `path.d.margin` | 1,816 | Tier 1 | Ballots at the constant less 120,000, even if every ballot went to him. |
| `path.a.at80` | 71,630 | Tier 1 | 80% of the route's ballots. |
| `path.a.at80.short` | 48,370 | Tier 1 | 120,000 less 80% of the route's ballots. |
| `path.d.at80` | 97,453 | Tier 1 | 80% of the route's ballots. |
| `path.d.at80.short` | 22,547 | Tier 1 | 120,000 less 80% of the route's ballots. |
| `turnout.abstainers.to-benchmark` | 6.0% | Tier 1 | The votes he needs beyond his 2013 tally, as a share of the 2022 abstainers. |
| `census.female.share` | 49.5% | Tier 1 | Women / residents. |
| `census.household-size` | 3.2 | Tier 1 | Residents / households. |
| `census.median-age` | 24.0 | Tier 1 | Median age in years, interpolated within the single year of age where the cumulative count of residents passes half: 603,614 are under 24 and 30,165 are aged 24, of 1,208,277 with age stated. |
| `census.adults.18-34.share` | 59.1% | Tier 1 | 18–34 / all residents aged 18 and over. |
| `sub.changamwe.density` | 8,243 | Tier 1 | Population / the 16 km² the 2021 spending-limit gazette gives the constituency. |
| `sub.jomvu.density` | 5,635 | Tier 1 | Population / the 29 km² the 2021 spending-limit gazette gives the constituency. |
| `sub.kisauni.density` | 3,317 | Tier 1 | Population / the 88 km² the 2021 spending-limit gazette gives the constituency. |
| `sub.nyali.density` | 9,844 | Tier 1 | Population / the 22 km² the 2021 spending-limit gazette gives the constituency. |
| `sub.likoni.density` | 5,961 | Tier 1 | Population / the 42 km² the 2021 spending-limit gazette gives the constituency. |
| `sub.mvita.density` | 9,636 | Tier 1 | Population / the 16 km² the 2021 spending-limit gazette gives the constituency. |
| `zone.anchor.population` | 154,171 | Tier 1 | Sum of the Island's sub-counties: mvita. |
| `zone.anchor.households` | 38,710 | Tier 1 | Sum of the Island's sub-counties. |
| `zone.anchor.share` | 12.8% | Tier 1 | Zone population / county. |
| `zone.north.population` | 508,507 | Tier 1 | Sum of the north mainland's sub-counties: kisauni, nyali. |
| `zone.north.households` | 157,930 | Tier 1 | Sum of the north mainland's sub-counties. |
| `zone.north.share` | 42.1% | Tier 1 | Zone population / county. |
| `zone.west.population` | 295,297 | Tier 1 | Sum of the west mainland's sub-counties: changamwe, jomvu. |
| `zone.west.households` | 99,653 | Tier 1 | Sum of the west mainland's sub-counties. |
| `zone.west.share` | 24.4% | Tier 1 | Zone population / county. |
| `zones.population` | 957,975 | Tier 1 | The three zones together. |
| `zones.share` | 79.3% | Tier 1 | The three zones / county. |
| `zones.excluded` | 250,000 | Tier 1 | Residents in no zone (Likoni, the rotating constituency), rounded to the nearest 10,000. |
| `zones.excluded.share` | 20.7% | Tier 1 | Likoni / county: 100 less the three zones' share. |
| `zone.anchor.register.share` | 18.5% | Tier 1 | Mvita / 2022 register. |
| `zone.north.register.share` | 40.4% | Tier 1 | Kisauni + Nyali / 2022 register. |
| `zone.west.register.share` | 26.3% | Tier 1 | Changamwe + Jomvu / 2022 register. |
| `ict.offline` | 53.1% | Tier 1 | 100% less 46.9% internet use. |
| `reach.smartphone` | 332,211 | Tier 1 | 46.9% internet use applied to the register in use. |
| `reach.sms-only` | 105,543 | Tier 2 | 61.8% phone ownership less 46.9% internet use, on the register in use. Mixes a 2019 and a 2023/24 rate: an estimate. |
| `reach.nophone` | 270,585 | Tier 2 | The remainder of the register in use: no phone of their own. |
| `reach.offline` | 376,128 | Tier 1 | The register in use less those reachable online. |
| `reach.smartphone.short` | −212,211 | Tier 1 | 120,000 less the digital ceiling. |
| `reach.smartphone.of-benchmark` | 276.8% | Tier 1 | The digital ceiling / 120,000. |
| `reach.phone.resident` | 437,754 | Tier 2 | Phone owners: reachable online plus reachable by SMS only. |
| `budget.grants` | KSh 4,140,000,000 | Tier 3 | The budget less the equitable share and own-source revenue: grants, loans, and balances brought forward, together. |
| `budget.rounding` | KSh 0 | Tier 3 | No rounding segment: the remainder above absorbs it. |
| `budget.equitable.share` | 44.7% | Tier 3 | Equitable share / budget. |
| `budget.osr.share` | 33.2% | Tier 3 | Own-source revenue / budget. |
| `budget.grants.share` | 22.1% | Tier 3 | The remainder / budget. |
| `budget.development.share` | 30.0% | Tier 3 | Development / budget. |
| `budget.osr.achieved` | 74% | Tier 3 | Own-source revenue collected / target, FY2025/26. |
| `water.supply.share` | 20.0% | Tier 2 | Supply / demand. |
| `water.delivered.share` | 10.0% | Tier 2 | Water reaching residents / demand. |
| `segment.rural.voters` | 0 | Tier 1 | Mombasa is classed entirely urban. |
| `segment.urban.voters` | 641,913 | Tier 1 | The whole 2022 register. |
| `segment.youth.voters` | 379,000 | Tier 2 | The 2019 census share of adults aged 18–34 (59.1%) applied to the 2022 register, rounded. The register is not published by age, and young people register less, so this is a ceiling. |
| `segment.youth.share` | 59% | Tier 2 | Youth voters / the 2022 register. |
| `policy.ward-fund.total` | KSh 1,200,000,000 | Tier 1 | KSh 40m per ward × 30 wards, a year. |
| `policy.ward-fund.share` | 6% | Tier 3 | The ward fund / the FY2025/26 budget. |
| `policy.water.saving` | KSh 25 | Tier 2 | Vendor price less the county price, per jerrican. |
| `health.mpox.2026.share` | 36.5% | Tier 1 | Mombasa's share of Kenya's 2026 Mpox cases. |
| `register.2017` | 580,223 | Tier 2 | The six 2017 constituency registers added up. |
| `register.growth.2017-22` | 61,690 | Tier 2 | The 2022 register less the 2017 register. |
| `register.growth.2017-22.kisauni` | 9,125 | Tier 2 | Kisauni's register, 2022 less 2017. |
| `register.growth.2017-22.nyali` | 20,236 | Tier 2 | Nyali's register, 2022 less 2017. |
| `register.growth.2017-22.nyali.share` | 19% | Tier 2 | Nyali's register growth, 2017 to 2022. |
| `unemployment.youth.nassir.share` | 47% | Tier 2 | The governor's own 2022 figures: 163,208 of 347,250 young people. |
| `budget.pending-bills.inherited.share` | 82% | Tier 1 | Bills from before FY2024/25 / the stock at 1 July 2025. |
| `budget.revenue.2024-25.share` | 85% | Tier 1 | Revenue received / revenue budgeted, FY2024/25. |
| `adp.gap.share` | 65% | Tier 1 | Unfunded share of the costed plan. |
| `adp.flagship.ksh` | KSh 55,070,000,000 | Tier 1 | The seventeen costed flagship projects in ADP 2026/27 Section 3.14 added up; three more are 'to be confirmed' or donor-funded. |

#### Targets, and whose each is

<!-- keep -->
| Target | Value | Whose, and what it commits to |
|---|---|---|
| `benchmark` | 120,000 | The single working benchmark: the 2022 winning tally, 119,083, rounded. Stated once in Section 2.5 and reused everywhere. |
| `benchmark.high` | 221,177 | The high-turnout benchmark: Joho's 2017 tally, when turnout was far higher. Used only to bracket the working benchmark. |
| `turnout.constant` | 34.5% | The turnout rate used in every calculation: the 2022 governor election's rate carried forward to 2027. An assumption, and a low one: that election was held three weeks after the general election, after two postponements. The scenario model brackets it at 34–55%. |
| `target.sms.phase-1` | 15,000 | Consented SMS contacts by the end of Phase −1. |
| `target.sms.phase-1b` | 40,000 | Consented SMS contacts, Phase 1. |
| `target.sms.phase-2` | 80,000 | Consented SMS contacts, Phase 2. |
| `target.sms` | 120,000 | Consented SMS/USSD contacts by Phase 3 (objective 8.3.3). |
| `target.ussd.phase-1` | 5,000 | USSD unique sessions, Phase 1. |
| `target.ussd.phase-2` | 25,000 | USSD unique sessions, Phase 2. |
| `target.ussd.phase-3` | 60,000 | USSD unique sessions, Phase 3. |
| `target.tracker.phase-1` | 500 | Tracker reports, Phase 1. |
| `target.tracker.phase-2` | 3,000 | Tracker reports, Phase 2. |
| `target.tracker.phase-3` | 8,000 | Tracker reports, Phase 3. |
| `target.reach.phase-1` | 1,000,000 | Combined social reach, Phase 1: an operational diagnostic, not a performance indicator. |
| `target.reach.phase-2` | 3,000,000 | Cumulative reach, Phase 2: diagnostic. |
| `target.reach.phase-3` | 5,000,000 | Cumulative reach, Phase 3: diagnostic. |
| `target.followers.phase-1` | 50,000 | Engaged followers, Phase 1: diagnostic. |
| `target.followers.phase-2` | 150,000 | Engaged followers, Phase 2: diagnostic. |
| `target.followers.phase-3` | 250,000 | Engaged followers, Phase 3: diagnostic. |
| `target.subscribers.phase-1` | 5,000 | Email/SMS subscribers, Phase 1. |
| `target.subscribers.phase-2` | 15,000 | Email/SMS subscribers, Phase 2. |
| `target.volunteers.phase-1` | 1,000 | Digital volunteer sign-ups, Phase 1 (campaign-owned programme). |
| `target.volunteers.phase-2` | 5,000 | Digital volunteer sign-ups, Phase 2 (campaign-owned programme). |
| `target.pledges` | 30,000 | Digital pledges to vote, Phase 3. |
| `target.supporters` | 130,000 | Verified supporters mapped to polling stations by 31 May 2027 (objective 8.3.4): the benchmark plus a margin. |
| `target.pledged-voters` | 140,000 | Pledged voters in the CRM (GE-01). |
| `target.contact-universe.lean` | 60,000 | Realistic Phase 3 contact universe at Level 1. |
| `target.contact-universe.standard` | 150,000 | Realistic Phase 3 contact universe at Level 2. |
| `target.contact-universe.premium` | 250,000 | Realistic Phase 3 contact universe at Level 3. |
| `target.content.first` | 100 | Pieces of content approved and scheduled in Phase 0. |
| `target.captains` | 300 | Ward captains, 10 per ward: a campaign-owned recommendation. |
| `target.coordinators` | 30 | Ward coordinators, one per ward: a campaign-owned recommendation. |
| `target.captains.pool` | 170 | Of the 300 captains, those recommended for the pool's 17 wards: campaign-owned. |
| `target.ambassadors` | 600 | M-Pesa 'Economic Ambassadors', 20 per ward: a campaign-owned recommendation. |
| `target.stage-champions` | 900 | Boda-boda and tuk-tuk Stage Champions, 30 per ward: a campaign-owned recommendation. |
| `target.volunteer-points` | 100 | Average points per volunteer per month: the campaign-owned volunteer programme's target. |
| `target.whatsapp-groups` | 180 | Community WhatsApp groups monitored by the 30 ward monitoring assistants. |
| `target.polling-agents` | 1,041 | One trained agent per polling station: a campaign-owned requirement. |
| `effort.p-1.anchor` | 20% | Share of communications effort to the Island (Mvita). |
| `effort.p-1.north` | 40% | Share of communications effort to the north mainland (Kisauni, Nyali). |
| `effort.p-1.west` | 25% | Share of communications effort to the west mainland (Changamwe, Jomvu). |
| `effort.p-1.rotating` | 15% | Share of communications effort to Likoni and to rotating ward tests. |
| `effort.p12.anchor` | 20% | Share of communications effort to the Island (Mvita). |
| `effort.p12.north` | 35% | Share of communications effort to the north mainland (Kisauni, Nyali). |
| `effort.p12.west` | 25% | Share of communications effort to the west mainland (Changamwe, Jomvu). |
| `effort.p12.rotating` | 20% | Share of communications effort to Likoni and to rotating ward tests. |
| `effort.p3.anchor` | 20% | Share of communications effort to the Island (Mvita). |
| `effort.p3.north` | 35% | Share of communications effort to the north mainland (Kisauni, Nyali). |
| `effort.p3.west` | 25% | Share of communications effort to the west mainland (Changamwe, Jomvu). |
| `effort.p3.rotating` | 20% | Share of communications effort to Likoni and to rotating ward tests. |
| `channel.radio.conventional` | 20% | Coast radio in Kiswahili (Rahma, Salaam, Pwani FM, Baraka FM): share of effort in the conventional pitch, as Firefly characterises it. |
| `channel.radio.rebalanced` | 28% | Coast radio in Kiswahili (Rahma, Salaam, Pwani FM, Baraka FM): share of effort, rebalanced. |
| `channel.sms.conventional` | 10% | Direct SMS and the USSD tree: share of effort in the conventional pitch, as Firefly characterises it. |
| `channel.sms.rebalanced` | 18% | Direct SMS and the USSD tree: share of effort, rebalanced. |
| `channel.markets.conventional` | 15% | Markets, stages and barazas (Kongowea, Marikiti, Majengo): share of effort in the conventional pitch, as Firefly characterises it. |
| `channel.markets.rebalanced` | 16% | Markets, stages and barazas (Kongowea, Marikiti, Majengo): share of effort, rebalanced. |
| `channel.digital.conventional` | 45% | Digital and social media: share of effort in the conventional pitch, as Firefly characterises it. |
| `channel.digital.rebalanced` | 30% | Digital and social media: share of effort, rebalanced. |
| `channel.church.conventional` | 10% | Mosque, church and community outreach: share of effort in the conventional pitch, as Firefly characterises it. |
| `channel.church.rebalanced` | 8% | Mosque, church and community outreach: share of effort, rebalanced. |
| `channel.offline.rebalanced` | 70% | Share of effort offline, rebalanced: radio, SMS, markets and faith outreach. |
| `effort.digital.pool` | 60% | Share of Phase −1 digital reach effort geofenced to the pool. |
| `effort.sms.pool` | 60% | Share of SMS/USSD onboarding effort to the pool's 17 wards. |
| `policy.ward-fund` | KSh 40,000,000 | A ward development fund per ward per year: 30% of the KSh 4bn development budget shared equally across 30 wards, as the County Equitable Share Bill proposed. A campaign policy proposal, not yet sized against the FY2027/28 budget. |
| `policy.water.price` | KSh 5 | A public price ceiling per 20-litre jerrican at county water points and kiosks: the price the county itself charges at source. A campaign policy proposal. |
| `policy.nrw.target` | 30% | Non-revenue water by 2030: the county's own stated two-year target, adopted and dated. |

<!-- source-table:end -->

