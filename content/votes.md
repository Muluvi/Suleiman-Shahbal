```lead
Mombasa has **{{register.2022}}** registered voters on the 2022 register, and Governor Nassir won in 2022 with **{{result.2022.gov.nassir}}** votes, on a turnout of about a third. The number to win is about **{{benchmark}}**, and no single zone holds it.
```

Mombasa has **{{register.2022}}** registered voters on the 2022 register, and Governor Nassir won in 2022 with **{{result.2022.gov.nassir}}** votes (Tier 2, IEBC declaration as reported). The number to win is about **{{benchmark}}** (target), and no single zone holds it. This chapter sets out the electorate, how it has voted, where the votes are, and the arithmetic of winning.

## 2.1 The electorate and polling stations

```visual
kind: stats
items:
  - value: "{{register.2022}}"
    label: "registered voters, 2022"
    tier: 1
    body: "**{{register.2022}}** voters registered across the county's 30 wards (Tier 1, IEBC). The ward sum and the county total agree exactly."
  - value: "30"
    label: "wards across 6 constituencies"
    tier: 1
    body: "30 county assembly wards in six constituencies (Tier 1, IEBC)."
  - value: "{{register.polling-stations}}"
    label: "polling stations"
    tier: 1
    body: "{{register.polling-stations}} polling stations at {{register.registration-centres}} registration centres (Tier 1, IEBC 2022 polling station register)."
  - value: "{{turnout.2022}}%"
    label: "turnout, 2022 governor election"
    tier: 2
    body: "**{{turnout.2022}}%**: {{result.2022.gov.valid}} valid votes for governor, of {{register.2022}} registered (Tier 2, calculated from the declared result; the returning officer gave 34%). Chapter 2 carries this rate forward to 2027 as a stated, and cautious, assumption."
```

```figure
id: fig-2-1-register
```

**The 2026 register, indicative.** IEBC reported **{{register.2026.continuous}}** new Mombasa voters from continuous registration to March 2026, then **{{register.2026.ecvr-drive}}** in the ECVR drive of 30 March to 28 April 2026 (Tier 3, as reported). Added to 2022, that gives about **{{register.2026}}** before deletions. The certified register is not yet published, so ward and constituency calculations still use 2022, and IEBC's own target for 2027 is {{register.2027.target}} (Tier 2).

**Why turnout was so low.** Mombasa's governor election did not happen on 9 August 2022. The IEBC suspended it the day before over a ballot-paper mix-up, rescheduled it, and held it on 29 August, three weeks after the presidential result was known (Tier 2, KNA and The Standard). Turnout fell to **{{turnout.2022}}%**. In 2017, on the general-election day, Joho alone received {{result.2017.gov.joho}} votes (Tier 1). The 2027 governor's race will be held on the same day as the presidential race, so 2022's turnout is a floor, not a forecast.

The full 30-ward register, by constituency, is in Annex B.

## 2.2 Results from 2013 to 2022

```lead
Abdulswamad Nassir won 2022 with **{{result.2022.gov.nassir}} votes** against Hassan Omar's **{{result.2022.gov.omar}}**. Mr Shahbal received **{{result.2013.gov.shahbal}}** in 2013 and **{{result.2017.gov.shahbal}}** in 2017, both times second to Hassan Joho.
```

*   **Governor, 2013:** Hassan Joho (ODM) won with **{{result.2013.gov.joho}} votes**; Suleiman Shahbal (Wiper) was runner-up with **{{result.2013.gov.shahbal}} votes** (Tier 1, as recited in *Shahbal v IEBC* [2013] KEHC 2189). The court-ordered scrutiny moved the totals by a few dozen votes and the petition was dismissed. The gap, {{result.2013.gov.gap}} votes, is the closest any challenger has come to winning the seat.
*   **Governor, 2017:** Hassan Joho (ODM) was re-elected with **{{result.2017.gov.joho}} votes**; Suleiman Shahbal (Jubilee) was second with **{{result.2017.gov.shahbal}}** and Hassan Omar (Wiper) third with **{{result.2017.gov.omar}}** (Tier 1, as recited in *Hassan Omar Hassan v IEBC* [2018] KEHC 8291). The election court upheld the result.
*   **Governor, 2022:** Abdulswamad Nassir (ODM) won with **{{result.2022.gov.nassir}} votes** of {{result.2022.gov.valid}} valid votes; Hassan Omar (UDA) was runner-up with **{{result.2022.gov.omar}}** (Tier 2). A second published total of {{result.2022.gov.omar.media}} is a media variant; Form 37C settles it. The other five candidates received under 1,000 each, led by Hezron Awiti (VDP) with {{result.2022.gov.awiti}}. Mr Shahbal sought the ODM ticket and stepped down in Nassir's favour.
*   **President, 2022 (Mombasa):** Raila Odinga took **{{result.2022.pres.odinga.share}}%** and William Ruto **{{result.2022.pres.ruto.share}}%**; George Wajackoyah {{result.2022.pres.wajackoyah.share}}% and David Mwaure {{result.2022.pres.mwaure.share}}% (Tier 1, IEBC Form 34C county summary). Vote totals are to be read from the same form.
*   **Senator, 2022:** Mohamed Faki (ODM) won with **{{result.2022.senate.faki}} votes** (Tier 2, IEBC declaration as gazetted, via Mzalendo). The Woman Representative total is a named data gap.
*   **Ward and polling-station results:** the constituency and polling-station forms for the 2013, 2017 and 2022 governor races (IEBC Forms 37B and 37A) are public records, not yet in hand. Section 6.2 needs them to test where his own vote came from, ward by ward.

```figure
id: fig-2-2-results
```

**What it means for the campaign.** Mombasa has elected the ODM candidate for governor three times, and voted for the ODM presidential ticket in 2022 by {{result.2022.pres.odinga.share}}% to {{result.2022.pres.ruto.share}}%. But the winning tally fell from {{result.2017.gov.joho}} in 2017 to {{result.2022.gov.nassir}} in 2022, and in 2022 the runner-up came within {{result.2022.gov.margin}} votes. The ODM vote is large, and it is no longer sure to turn out.

## 2.3 The twelve largest wards

The register is concentrated. Spread evenly, the 30 wards would hold {{register.2022.ward-mean}} voters each (calculated); in fact voters cluster in the dense mainland estates of Likoni, Jomvu and Kisauni.

```figure
id: fig-3-2-register-map
```

```visual
kind: stats
preset: battery
title: "Where the votes concentrate"
items:
  - value: "{{pareto.top12.share}}%"
    label: "of the register in the 12 largest wards"
    tier: 1
    body: "**Twelve wards, 40% of the total, hold {{pareto.top12}} registered voters** ({{pareto.top12.share}}% of the county, calculated from IEBC's 2022 register). At the {{turnout.constant}}% turnout rate they cast about **{{path.c.ballots}} ballots** (calculated)."
  - value: "{{pareto.top20.share}}%"
    label: "in the largest 20"
    tier: 1
    body: "**The largest 20 wards**, two-thirds of the total, hold **{{pareto.top20}} registered voters** (**{{pareto.top20.share}}%** of the county, calculated)."
  - value: "{{pareto.bottom10.share}}%"
    label: "in the smallest 10"
    tier: 1
    body: "**The ten smallest wards** (from Mwakirunge, the smallest, upward), a third of the total, hold **{{pareto.bottom10}} registered voters** (**{{pareto.bottom10.share}}%** of the register, calculated)."
```

```lead
This annex holds the 30-ward register: background the argument rests on rather than part of the argument.
```

This annex holds the 30-ward register: background the argument rests on rather than part of the argument. The county's finances are in Section 3.7, water in Section 3.2, and the port economy and the SEZ in Section 3.8.

The register of every ward, with its voters and polling stations, is at the end of Evidence and sources.

## 2.4 The constituencies that decide it

```lead
Kisauni, Nyali and Changamwe were each decided by fewer than 2,000 votes in 2022. Together they hold {{pool}} registered voters, {{pool.share}}% of the county: **necessary and not sufficient**. No path to {{benchmark}} runs around them, and none ends there.
```

A constituency's weight comes from its voters, the density of its wards, and how close it was last time:

```figure
id: constituency-power
```

```visual
kind: bars
title: "The 2022 governor's race by constituency: Nassir's lead over Omar, in votes"
source: "The Standard and KNA, 30 August 2022 (Tier 2); Likoni calculated"
items:
  - label: "Nyali: {{result.2022.gov.nyali.nassir}} to {{result.2022.gov.nyali.omar}}"
    value: "{{result.2022.gov.nyali.margin}}"
    tier: 2
  - label: "Kisauni: {{result.2022.gov.kisauni.nassir}} to {{result.2022.gov.kisauni.omar}}"
    value: "{{result.2022.gov.kisauni.margin}}"
    tier: 2
  - label: "Changamwe: {{result.2022.gov.changamwe.nassir}} to {{result.2022.gov.changamwe.omar}}"
    value: "{{result.2022.gov.changamwe.margin}}"
    tier: 2
  - label: "Jomvu: {{result.2022.gov.jomvu.nassir}} to {{result.2022.gov.jomvu.omar}}"
    value: "{{result.2022.gov.jomvu.margin}}"
    tier: 2
  - label: "Mvita: {{result.2022.gov.mvita.nassir}} to {{result.2022.gov.mvita.omar}}"
    value: "{{result.2022.gov.mvita.margin}}"
    tier: 2
  - label: "Likoni: {{result.2022.gov.likoni.nassir}} to {{result.2022.gov.likoni.omar}}"
    value: "{{result.2022.gov.likoni.margin}}"
    tier: 2
```

*Five constituency tallies as reported by The Standard and KNA (Tier 2); Likoni is the county total less the five, so it is calculated.*

#### The close-contest belt: necessary, not sufficient

**Kisauni, Nyali and Changamwe together command {{pool}} registered voters (Tier 1).** In 2022 the leader's margin was {{result.2022.gov.nyali.margin}} in Nyali, {{result.2022.gov.kisauni.margin}} in Kisauni and {{result.2022.gov.changamwe.margin}} in Changamwe (Tier 2). At the {{turnout.constant}}% turnout the belt casts roughly **{{path.d.ballots}} ballots**, so even every vote there leaves the campaign about {{path.d.margin|abs}} short of {{benchmark}} (calculated). So SMS, USSD and digital outreach go into the belt first, to establish Mr Shahbal as the leading alternative there.

#### The four constituencies that decide it

1.  **The Big Four ({{big4.share}}% of the county):** Kisauni, Nyali, Mvita and Likoni hold **{{big4}} registered voters** across 22 wards (calculated from IEBC's 2022 register, Tier 1). The candidate who leads in these four, or holds level in them, is in reach of the governorship.
2.  **Kisauni ({{con.kisauni}} voters, Tier 1):** the largest constituency, with seven wards from Mwakirunge ({{ward.mwakirunge}}), the smallest in the county, to Junda ({{ward.junda}}) and Shanzu ({{ward.shanzu}}). It was decided by {{result.2022.gov.kisauni.margin}} votes in 2022.
3.  **Likoni ({{con.likoni}} voters, Tier 1):** holds the county's largest ward, **Timbwani ({{ward.timbwani}})**, and the constituency where Nassir's lead was largest ({{result.2022.gov.likoni.margin}}, calculated).
4.  **Mvita ({{con.mvita}} voters, Tier 1):** the governor's former constituency and the county's commercial heart, holding **Majengo ({{ward.majengo}})**, the third-largest ward.

## B.1 The 30-ward register

Registered voters per county assembly ward, 2022 (IEBC, Tier 1). The 2026 register is not yet published by ward.

#### 1. Changamwe Constituency ({{con.changamwe}} total registered voters, Tier 1)

*   **Chaani Ward:** {{ward.chaani}} voters
*   **Airport Ward:** {{ward.airport}} voters
*   **Changamwe Ward:** {{ward.changamwe}} voters
*   **Port Reitz Ward:** {{ward.port-reitz}} voters
*   **Kipevu Ward:** {{ward.kipevu}} voters

#### 2. Jomvu Constituency ({{con.jomvu}} total registered voters, Tier 1)

*   **Mikindani Ward:** {{ward.mikindani}} voters
*   **Jomvu Kuu Ward:** {{ward.jomvu-kuu}} voters
*   **Miritini Ward:** {{ward.miritini}} voters

#### 3. Kisauni Constituency ({{con.kisauni}} total registered voters, Tier 1)

*   **Junda Ward:** {{ward.junda}} voters
*   **Shanzu Ward:** {{ward.shanzu}} voters
*   **Mjambere Ward:** {{ward.mjambere}} voters
*   **Bamburi Ward:** {{ward.bamburi}} voters
*   **Mtopanga Ward:** {{ward.mtopanga}} voters
*   **Magogoni Ward:** {{ward.magogoni}} voters
*   **Mwakirunge Ward:** {{ward.mwakirunge}} voters

#### 4. Nyali Constituency ({{con.nyali}} total registered voters, Tier 1)

*   **Kongowea Ward:** {{ward.kongowea}} voters
*   **Frere Town Ward:** {{ward.frere-town}} voters
*   **Mkomani Ward:** {{ward.mkomani}} voters
*   **Ziwa la Ng'ombe Ward:** {{ward.ziwa-la-ng-ombe}} voters
*   **Kadzandani Ward:** {{ward.kadzandani}} voters

#### 5. Likoni Constituency ({{con.likoni}} total registered voters, Tier 1)

*   **Timbwani Ward:** {{ward.timbwani}} voters
*   **Bofu Ward:** {{ward.bofu}} voters
*   **Shika Adabu Ward:** {{ward.shika-adabu}} voters
*   **Mtongwe Ward:** {{ward.mtongwe}} voters
*   **Likoni Ward:** {{ward.likoni}} voters

#### 6. Mvita Constituency ({{con.mvita}} total registered voters, Tier 1)

*   **Majengo Ward:** {{ward.majengo}} voters
*   **Tononoka Ward:** {{ward.tononoka}} voters
*   **Tudor Ward:** {{ward.tudor}} voters
*   **Mji wa Kale/Makadara Ward:** {{ward.mji-wa-kale-makadara}} voters
*   **Shimanzi/Ganjoni Ward:** {{ward.shimanzi-ganjoni}} voters
