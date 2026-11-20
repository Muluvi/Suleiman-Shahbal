```lead
The goal is to win the general election on 10 August 2027, with at least **{{benchmark}} votes**.
```

The goal is to win the general election on 10 August 2027, with at least **{{benchmark}} votes**. Five objectives for the digital operation serve it, and every one traces to that result.

## 8.1 The goal and its deadline

```lead
The campaign works to one deadline: the general election on 10 August 2027. Being on the ballot comes first, and the Timeline tracks it as a milestone.
```

The campaign works to one deadline: the general election on 10 August 2027. Being on the ballot comes first, and the Timeline tracks it as a milestone. Every objective traces to delivering the ~{{benchmark}} vote threshold at the general election; digital measures that do not are left out (Section 18.4).

```figure
id: fig-1-1-timeline
```

## 8.2 Five objectives

Each objective names its target, its owner, the finding it answers, its baseline, the strategy that serves it and the indicator that measures it.

```figure
id: fig-1-3-objectives
```

### 8.2.1 Be present where the race is closest

```visual
kind: cards
preset: objective
items:
  - head: { label: "Target", text: "At least {{pool.share}}% of his reach landing in the pool, the pool's own share of the register, and a verified subscriber footprint across all 17 wards of Kisauni, Nyali and Changamwe before party nominations close in June 2027." }
    chips: ["NW-01", "R-02"]
    text: "**Named Owner:** Director of Communications; the delivery ledger is the dispatch log on Firefly's platform."
    fields:
      - { label: "Traceability", text: "Turnout: visible, ward-level activity in the three constituencies decided by fewer than 2,000 votes in 2022, where a party machine, not his, carried the vote." }
      - { label: "Finding it answers", text: "{{pool.share}}% of the register, {{pool}} voters, lives in Kisauni, Nyali and Changamwe, the close-contest belt (Section 6.2)." }
      - { label: "Baseline", text: "set in Week 1, from his own Insights export. The hypothesis is that his reach concentrates on the Island and among people who already know him (Section 7.1); Week 1 tests it." }
      - { label: "Served by", text: "Section 12.1 (where the effort goes) and Section 12.6 (what gets published)." }
      - { label: "Measured by", text: "NW-01 and R-02 (Section 18.1)." }
```

### 8.2.2 Turn his record into visible proof

```visual
kind: cards
preset: objective
items:
  - head: { label: "Target", text: "40 ward-specific briefs on his economic and devolved-governance record, distributed through local WhatsApp networks and audio digests." }
    chips: ["R-03"]
    text: "**Named Owner:** Policy and Communications Research Lead."
    fields:
      - { label: "Traceability", text: "Turns Mr Shahbal's record (Section 6.1: Gulf African Bank, founded {{record.gab.founded}}; the KSh {{record.sez.ksh|bn}} billion Jomvu SEZ, {{record.sez.jobs}} jobs projected) into verifiable, visitable case studies set to the priorities of each zone: water, jobs and paid bills." }
      - { label: "Finding it answers", text: "his distinguishing proof is his record (Section 6.1)." }
      - { label: "Baseline", text: "His record is documented in business and at EALA, not in county office (Section 6.1). Where content about it currently reaches is measured in Week 1." }
      - { label: "Served by", text: "Section 9.1 (the position) and the content type \"Where the money went\" (Section 10.1)." }
      - { label: "Measured by", text: "R-03, shares per 1,000 reached in the deficit wards (Section 18.1)." }
```

### 8.2.3 Reach voters the internet does not

```visual
kind: cards
preset: objective
items:
  - head: { label: "Target", text: "**{{target.sms}} active, verified SMS/USSD offline subscribers** across rural wards." }
    chips: ["NW-03", "R-04"]
    text: "**Named Owner:** Campaign Field Operations Lead, who operates the USSD/SMS dispatch and logs it on Firefly's platform."
    fields:
      - { label: "Traceability", text: "Answers the county's connectivity ceiling ({{ict.internet}}% internet use, {{ict.phone}}% mobile phone ownership, CA/KNBS 2023/24) with an offline channel the campaign owns." }
      - { label: "Finding it answers", text: "digital alone reaches about {{reach.smartphone}} voters at most, short of the {{benchmark}} benchmark (Section 4.3)." }
      - { label: "Baseline", text: "No consented offline subscribers in a central campaign register today." }
      - { label: "Deadline", text: "30 June 2027." }
      - { label: "Served by", text: "Section 12.2 (which channel does which job) and Workstream 9 (Section 15.3.3)." }
      - { label: "Measured by", text: "NW-03 and R-04 (Section 18.1)." }
```

### 8.2.4 Give every post a voter, ward and reason

```visual
kind: cards
preset: objective
items:
  - head: { label: "Target", text: "Every briefed post coded with segment, ward and pillar, checked in the Monday review." }
    chips: ["R-05"]
    text: "**Named Owner:** Database and Ground Mobilization Coordinator."
    fields:
      - { label: "Traceability", text: "Every post the weekly brief commissions names the voter segment it is for (Section 11.2), the ward it is aimed at (Section 2.3) and the content type that gives it a reason (Section 10.1)." }
      - { label: "Finding it answers", text: "his current output is a record of where he was and whom he met, with no ward named and no ask (Section 12.6)." }
      - { label: "Baseline", text: "set in Week 1, from the post coding." }
      - { label: "Served by", text: "Chapters 10 to 12." }
      - { label: "Measured by", text: "R-05 and the weekly post coding (Sections 18.5 and 18.1)." }
      - { label: "Campaign build target it supports", text: "**{{target.supporters}} registered, verified supporters** in the central database mapped across all {{register.polling-stations}} polling stations by 31 May 2027. The database is the campaign's own, outside Firefly's platform, which holds only its counts (Section 15.4.1); the recruitment is the campaign's." }
```

### 8.2.5 Hold his 2013 voters

```visual
kind: cards
preset: objective
items:
  - head: { label: "Target", text: "Reach and engagement among his existing supporters held at or above the Week 1 baseline while output weight moves to the close-contest belt and the 2022 abstainers." }
    text: "**Named Owner:** The campaign's constituency coordinators, one for each of the six constituencies."
    fields:
      - { label: "Traceability", text: "Avoids taking known supporters for granted while effort moves to new voters, and rebuilds the 2013 coalition that has never voted for him on a ticket of his own." }
      - { label: "Finding it answers", text: "His vote fell from {{result.2013.gov.shahbal}} in 2013 to {{result.2017.gov.shahbal}} in 2017 (Section 6.2)." }
      - { label: "Baseline", text: "{{result.2013.gov.shahbal}} votes in 2013 and {{result.2017.gov.shahbal}} in 2017 (Tier 1); where they were cast is read from the Forms 37B once in hand." }
      - { label: "Served by", text: "Section 12.1 (the anchor zone's weighting)." }
      - { label: "Measured by", text: "reach by constituency in the monthly performance report (Section 21.2)." }
```
