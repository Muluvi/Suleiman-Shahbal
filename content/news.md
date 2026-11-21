```lead
**{{ict.internet}}%** of Mombasa's residents use the internet, the fourth-highest share in Kenya. Digital can in principle reach about **{{reach.smartphone}} voters** (modelled), more than the {{benchmark}} benchmark, but reach is not votes: the 2022 race was lost by the side that did not turn its voters out.
```

**{{ict.internet}}%** of Mombasa's residents use the internet (Tier 1, CA/KNBS 2023/24), the fourth-highest share in Kenya, and **{{ict.mombasa.youth}}%** of its young people do. Digital can in principle reach about **{{reach.smartphone}} voters** (modelled), more than the {{benchmark}} benchmark. But reach is not votes, and in 2022 {{abstained.2022}} registered voters cast no valid governor vote. The election is reached online and won on the phone, on the radio, at the mosque and the church, and at the stage.

## 4.1 Where people get information

```visual
kind: stats
preset: people
title: "Phones, internet and money agents (CA/KNBS; KNBS 2019)"
items:
  - value: "{{ict.internet}}%"
    label: "use the internet"
    tier: 1
  - value: "{{ict.offline}}%"
    label: "of residents not online"
    tier: 1
  - value: "{{ict.phone}}%"
    label: "own a mobile phone (2019)"
    tier: 1
  - value: "{{ict.agents}}"
    label: "mobile-money agents, nationally"
    tier: 1
    body: "In every estate the agent kiosk is a trusted local point of contact, and it is commercially motivated."
body: "The **CA/KNBS ICT report on the 2023/24 Kenya Housing Survey** (Tier 1) puts internet use in Mombasa at **{{ict.internet}}%**, up from {{ict.internet.2019}}% in the 2019 census, behind only Nairobi, Kiambu and Nyeri. Mobile phone ownership was **{{ict.phone}}%** of residents aged 3 and over in 2019 (Tier 1, KNBS); the 2023/24 county row for phone ownership is to be read from the same CA/KNBS report."
```

| Measure | Mombasa | By constituency, 2019 | National context |
|---|---|---|---|
| Internet use | **{{ict.internet}}%** in 2023/24 (Tier 1); {{ict.internet.2019}}% in 2019 ({{ict.internet.2019.people}} people) | Mvita {{ict.internet.2019.mvita}}%, Nyali {{ict.internet.2019.nyali}}%, Changamwe {{ict.internet.2019.changamwe}}%, Kisauni {{ict.internet.2019.kisauni}}%, Likoni {{ict.internet.2019.likoni}}%, Jomvu {{ict.internet.2019.jomvu}}% (Tier 1) | Kenya {{ict.kenya.internet}}%; Nairobi {{ict.nairobi.internet}}% (Tier 1) |
| Mobile phone ownership | **{{ict.phone}}%** in 2019 ({{ict.phone.2019.people}} people) (Tier 1) | Mvita {{ict.phone.2019.mvita}}%, Nyali {{ict.phone.2019.nyali}}%, Changamwe {{ict.phone.2019.changamwe}}%, Jomvu {{ict.phone.2019.jomvu}}%, Likoni {{ict.phone.2019.likoni}}%, Kisauni {{ict.phone.2019.kisauni}}% (Tier 1) | {{ict.sims.national|m1}} million active SIM cards; {{ict.sim-penetration}}% penetration (CA, Q3 FY2025/26) |
| Young people online | **{{ict.mombasa.youth}}%** (Tier 1, 2023/24) | — | Kenya {{ict.kenya.youth}}%; Nairobi {{ict.nairobi.youth}}% (Tier 1) |
| Mobile money | Near-universal | — | {{ict.momo.national|m1}} million subscriptions ({{ict.momo-penetration}}%, Tier 1); **{{ict.agents}} registered agents** (March 2026) |

**Two bases, never averaged.** {{ict.phone}}% and {{ict.internet}}% are shares of all residents aged 3 and over, children included. The register holds adults only, and adults own phones at a higher rate. Section 4.3 models voter reach on the resident basis and says so.

**The Island and the mainland are different audiences.** More than half of Mvita used the internet in 2019; a third of Jomvu and Likoni did. The same message goes online on the Island and by SMS, radio and the stage on the west and south mainland.

```figure
id: fig-2-6-connectivity
```

## 4.2 Who owns the airwaves

```lead
**Coast radio speaks Kiswahili, and Mombasa listens to faith broadcasters as much as to commercial ones.** Ownership and posture for every station are set out once, below, to be checked against the licensing register before any booking.
```

Kiswahili radio is the main source of news and political talk for the {{ict.offline}}% of residents who are not online, and for many who are. Mombasa's dial mixes national commercial stations broadcasting in Kiswahili with faith-based and community stations whose audiences trust them for more than news.

```figure
id: fig-2-7-media
```

```visual
kind: checklist
title: "The three facts that shape the radio plan"
items:
  - label: "**Faith broadcasters carry trust as well as reach**:"
    text: "Islamic stations such as **Radio Rahma** and **Radio Salaam**, and the Catholic **Baraka FM**. They are approached for community and service-delivery programming, never for partisan placement."
  - label: "**National commercial stations broadcast in Kiswahili on the coast**:"
    text: "**Bahari FM** and **Radio Citizen** (Royal Media Services) and **Radio Maisha** (Standard Group). These are the paid placement targets."
  - label: "**No Mombasa station's political ownership is assumed**:"
    text: "Ownership is mapped from the Communications Authority's register of licensees and company records before any booking, and every station's posture is recorded in `data/media-ownership.ts`."
```

**The ownership map.** This table governs. It is the version reconciled against `data/media-ownership.ts`, which the site renders directly. Ownership entries are Tier 3 until checked against the CA licensing register.

| Station | Language | Ownership association | Campaign posture |
|---|---|---|---|
| **Bahari FM** | Kiswahili | Royal Media Services | **Priority — commercial, coast-wide reach** |
| **Radio Citizen** | Kiswahili | Royal Media Services | **Priority — national reach, strong at the coast** |
| **Radio Maisha** | Kiswahili | Standard Group | Priority — commercial |
| **Radio Rahma** | Kiswahili | Islamic community broadcaster | Community and service-delivery programming; no partisan placement |
| **Radio Salaam** | Kiswahili | Islamic broadcaster | As above |
| **Baraka FM** | Kiswahili | Catholic Archdiocese of Mombasa | As above |
| **Radio Kaya** | Mijikenda languages | Community broadcaster | Secondary — the Mijikenda audience on the mainland |
| **Pwani FM** | Kiswahili | Kenya Broadcasting Corporation (public broadcaster) | Institutional coverage and civic programming |

**What it means for the campaign:** the paid radio plan runs through Bahari FM, Radio Citizen and Radio Maisha; the faith stations are partners for programming on water, health and jobs, where trust matters more than reach.

> **Listenership.** Station-by-station shares for Mombasa are not published openly: Radio Rahma {{radio.rahma}}, Bahari FM {{radio.bahari}}, Baraka FM {{radio.baraka}}. What is public: {{radio.coast.weekly}}% of Coast residents listen to radio (Tier 1, Communications Authority); Radio Kaya held **{{radio.kaya}}%** of the Coast market in 2024, the region's top vernacular station, with Msenangu FM second (Tier 2, GeoPoll); and Bahari FM led the Coast's vernacular stations from September 2025 to February 2026 (Tier 2). The record that would close it is a KARF or GeoPoll audience report for the Coast. Until then the stations are ranked by reach as their owners describe it, and no booking is sized on a share.

Ownership associations are publicly reported rather than certified, and ownership changes. The certifiable records are the Communications Authority's register of broadcast licensees and the Business Registration Service's company records.

## 4.3 What each channel can reach

```lead
If the campaign reached every internet-connected voter in Mombasa, it would reach about **{{reach.smartphone}} voters** (modelled), {{reach.smartphone.of-benchmark}}% of the {{benchmark}} benchmark. Mombasa is one of the few counties where digital alone could, on paper, carry the number. It will not, because reach is not turnout.
```

**The digital ceiling.** If the campaign reached every internet-connected voter in Mombasa, it would reach about **{{reach.smartphone}} voters** (modelled: {{ict.internet}}% internet use applied to the register in use), **{{reach.smartphone.of-benchmark}}%** of the {{benchmark}} benchmark (modelled). That is the difference from a rural county: online reach is large enough to matter on its own. But the voters it reaches are disproportionately on the Island and in Nyali, and young; the 2022 abstainers, and the estates on the west and south mainland, are reached as much by SMS, radio and people.

Digital use is concentrated on the Island, in Nyali and among young people. In-county users per platform are not published, so this section sizes what digital can reach from the published rates alone.

```figure
id: fig-3-8-ceiling
```

**The reach behind the weighting.**

| | Figure |
|---|---|
| Reachable by smartphone or data, in county | ~{{reach.smartphone}} voters (modelled: {{ict.internet}}% of the register in use) |
| Share of the {{benchmark}} benchmark digital could reach | **{{reach.smartphone.of-benchmark}}%** (modelled), reach not votes |
| Reachable by SMS only | ~{{reach.sms-only}} voters (modelled: {{ict.phone}}% phone ownership, 2019, less {{ict.internet}}% internet use, 2023/24: an estimate that mixes years) |
| Phone owners: the SMS and USSD layer | ~{{reach.phone.resident}} voters on the resident rate (modelled) |
| No phone: radio or in person only | ~{{reach.nophone}} voters on the resident rate (modelled) |
| Radio reach | No Coast audience share in hand; named data gap (Section 4.2) |

```visual
kind: contrast
left:
  title: "What digital can do"
  items:
    - label: "Set the agenda"
      body: "Coast journalists, radio presenters, imams, pastors and county assembly members follow X, Facebook and TikTok, so what is posted there can shape what radio goes on to discuss. No source in this plan measures that link; the channel audit (Section 18.5) records it from the first month rather than assuming it."
    - label: "Recruit young volunteers"
      body: "Reaching the ~{{segment.youth.voters}} young adults on TikTok, Instagram and WhatsApp recruits field volunteers who run ground logistics and serve as polling agents."
    - label: "Target traders and commuters"
      body: "Geofencing Kongowea, Marikiti, the CBD and the ferry approaches tests policy messages (a single business permit; the price of water) with little waste."
right:
  title: "What digital cannot do"
  items:
    - label: "Turn reach into turnout"
      body: "In 2022 {{abstained.2022}} registered voters cast no valid governor vote. An online audience does not walk to a polling station without someone to ask it to."
    - label: "Reach the west and south mainland evenly"
      body: "A third of Jomvu and Likoni used the internet in 2019 (Tier 1). Their estates are reached by SMS, the stage, the market and the mosque."
    - label: "Answer rumours on the ground"
      body: "WhatsApp rumours in an estate are answered in that estate, by someone the residents know."
```

## 4.4 Reaching the voters who did not vote

```lead
The election will be won or lost among the **{{abstained.2022}} registered voters who cast no valid governor vote in 2022** (calculated: the 2022 register less {{result.2022.gov.valid}} valid votes), and the **{{reach.offline}}** not reachable online (modelled).
```

The election will be won or lost among the **{{abstained.2022}} registered voters who cast no valid governor vote in 2022** (calculated), and the **{{reach.offline}} registered voters not reachable online** (modelled: the register in use less the {{reach.smartphone}} reachable by smartphone or data). They are reached by six channels together: SMS and USSD, Kiswahili radio, mobile-money agents, markets and stages, mosques and churches, and the ward captains.

```visual
kind: cards
preset: channel
items:
  - title: "Kiswahili radio"
    fields:
      - { label: "Reach", text: "no Coast audience share is in hand (Section 4.2); stations are ranked by their own reach claims until a KARF or GeoPoll report is." }
      - { label: "The stations", text: "*   *Bahari FM and Radio Citizen (Royal Media Services):* coast-wide reach in Kiswahili. **Priority placement.**\n    *   *Radio Maisha (Standard Group):* commercial, Kiswahili. **Priority placement.**\n    *   *Radio Rahma, Radio Salaam and Baraka FM:* faith broadcasters; programming on water, health and jobs, never partisan placement." }
      - { label: null, text: "**What the campaign would run** (campaign-owned, outside this engagement, Section 13.3):\n*   *Morning interviews:* studio interviews with Mr Shahbal in the weeks a policy is launched.\n    *   *Kiswahili spots and testimonials:* 45-second stories from traders in Kongowea, water vendors' customers in Mikindani and young people in Kisauni, on what his plan changes for them." }
  - title: "SMS and USSD"
    head: { label: "Reach", text: "{{ict.phone}}% of residents owned a mobile phone in 2019 (Tier 1); a feature phone is enough for SMS and USSD." }
    fields:
      - { label: null, text: "**What your team operates** (Section 15.3.3):\n*   *A free USSD menu (`*[shortcode]#`):* any feature phone can dial it to read Mr Shahbal's five-point plan in Kiswahili, register as a volunteer, find the nearest ward captain, or check where to vote.\n    *   *Ward-targeted SMS:* **Kiswahili or English** messages to consented supporters in specific wards, on the eve of events, and on election morning." }
  - title: "Mobile-money agents"
    head: { label: "Reach", text: "nationally there are {{ict.agents}} registered agents (March 2026, Tier 1, Section 4.1)." }
    fields:
      - { label: null, text: "**What the campaign would run** (campaign-owned, outside this engagement, Section 13.3):\n*   M-Pesa agents are trusted estate hubs. **Agent networks are regulated financial infrastructure**; Section 15.3.3 requires campaign counsel to review any commercial arrangement with them before recruitment." }
  - title: "Markets, stages and the ferry"
    head: { label: "Reach", text: "Kongowea, Marikiti and Majengo markets, the matatu and tuk-tuk stages, and the Likoni ferry approaches gather the county's working population every day. None is counted." }
    fields:
      - { label: null, text: "**What the campaign would run** (campaign-owned, outside this engagement, Section 13.3): two sound trucks with Kiswahili music and local young speakers at market entrances and stages, rotating by ward. Section 15.3.1 sets out how the ground team runs them." }
  - title: "Mosques and churches"
    head: { label: "Reach", text: "Friday prayers at the mosques of the Island, Kisauni and Likoni, and Sunday services across the mainland, are the largest regular gatherings in the county. Neither is counted." }
    fields:
      - { label: null, text: "**What the campaign would run** (campaign-owned, outside this engagement, Section 13.3): visits that respect the place of worship: no campaigning inside, meetings with mosque and parish committees after prayers or service, and service-delivery forums the community hosts." }
```

```visual
kind: week
title: "Market and stage rotation"
items:
  - day: "Mondays"
    items:
      - { label: "Kongowea Market (Nyali)" }
      - { label: "Changamwe stages (Changamwe)" }
  - day: "Tuesdays"
    items:
      - { label: "Marikiti Market (Mvita)" }
      - { label: "Mtopanga and Bamburi stages (Kisauni)" }
  - day: "Wednesdays"
    items:
      - { label: "Mikindani and Miritini (Jomvu)" }
      - { label: "Likoni ferry approaches (Likoni)" }
  - day: "Thursdays"
    items:
      - { label: "Majengo Market (Mvita)" }
      - { label: "Mjambere and Junda (Kisauni)" }
  - day: "Fridays"
    items:
      - { label: "After Jumaa prayers: the Island, Kisauni and Likoni" }
      - { label: "Chaani and Port Reitz (Changamwe)" }
  - day: "Saturdays"
    items:
      - { label: "Timbwani and Shika Adabu (Likoni)" }
      - { label: "Kadzandani and Ziwa la Ng'ombe (Nyali)" }
```

**What it means for the campaign.** The voters who stayed home in 2022 are reached through places that already gather people in every ward, and the campaign's job is to give them a reason to come out.
