```lead
The working diagnosis is that Mr Shahbal's gap is one of turnout and machinery, not of recognition or credibility. It is a hypothesis, and Week 1 tests it against his own channel data before anything is committed.
```

The working diagnosis is that Mr Shahbal's gap is one of turnout and machinery, not of recognition or credibility. It is a hypothesis, and Week 1 tests it against his own channel data before anything is committed. This chapter states the evidence for it, what could overturn it, what the data cannot yet tell us, and the assumptions the plan rests on.

## 7.1 What the evidence says

```visual
kind: hypothesis
hypothesis: "Mr Shahbal's gap is substantially a **turnout-and-machinery** problem, not a recognition problem: Mombasa has known his name since 2013, but no party machine has carried his voters to vote, and in 2022 most registered voters stayed home. Turnout is addressable through a ward-level ground operation, consented SMS/USSD and a polling-agent network the campaign builds itself. Phase −1 is built to start it."
for: "He received {{result.2013.gov.shahbal}} votes in 2013, more than the {{result.2022.gov.nassir}} that won in 2022 (Section 2.2). {{abstained.2022}} registered voters cast no valid governor vote in 2022 (Section 2.1). He contests 2027 outside ODM and UDA (Section 6.3). Three constituencies holding {{pool.share}}% of the register were decided by fewer than 2,000 votes each (Section 2.4)."
test: "Week 1 tests the hypothesis against his own channel data before anything is committed against it (Section 7.2)."
body: "That test is not a formality; it is the first deliverable. A further line of support: the 2022 governor election was held three weeks after the presidential result, on a day with no national race to bring voters out, and turnout fell to {{turnout.2022}}% (Section 2.1). In 2027 the governor's race is on general-election day, so the turnout question is who organises the extra voters, not whether they come."
```

```figure
id: fig-3-11-evidence
```

## 7.2 What could overturn it

**The case against.** His vote fell from {{result.2013.gov.shahbal}} in 2013 to {{result.2017.gov.shahbal}} in 2017 while the winner's rose (Tier 1, Section 2.2). If voters who knew him chose against him in 2017, the gap is not only machinery: it is a reason to vote against him that the campaign has to find and answer. The business record, and the SEZ in particular, could be part of it (Section 3.8).

**The test.** Week 1 reads ninety days of his own channels and measures how much of his reach lands in the pool and how it converts (method: Section 18.5). The 2017 Forms 37B, once in hand, show where his 2013 voters went. Section 12.7 sets out in advance what each finding changes, so the audit cannot be read backwards into whatever was already planned.

## 7.3 What the data cannot yet show

Where data is missing, this plan names the gap rather than filling it:

1.  **Ward-level voter preference:** **not measured, and not sought.** This plan forms strategy from existing records and its own analysis only. The nearest official record is how each ward actually voted: the IEBC's ward and polling-station forms for 2013, 2017 and 2022 (Section 2.2), which the analysis uses as soon as they are in hand.
2.  **Where his 2013 and 2017 votes were cast:** a **named data gap (Tier 1 gap).** The countywide totals are established ({{result.2013.gov.shahbal}} and {{result.2017.gov.shahbal}}, Tier 1); the constituency and ward returns (Forms 37B and 37A) are to be retrieved from the IEBC.
3.  **The 2026 register:** **indicative only.** IEBC reported {{register.2026.growth}} new Mombasa voters in 2025–26, giving about {{register.2026}} before deletions; the certified register is not yet published, so ward figures use 2022.
4.  **Segment sizes:** port workers, traders, and the up-country communities are not published as voter counts by any official source. Chapter 11 gives the census context for each; none is estimated.

```figure
id: fig-3-10-gaps
```

The figure above lists every open data item, with the document that would close each; it is generated from the figures store, so it cannot fall behind the text.

## 7.4 The assumptions the plan rests on

```lead
Each assumption is stated so that if one fails, the campaign can see immediately what in the plan moves. None of them is a prediction, and none is presented as settled fact.
```

This plan rests on eleven assumptions. Each is stated so that if one fails, the campaign can see immediately what in the plan moves. None of them is a prediction, and none is presented as settled fact.

<!-- keep -->
The variables the voter model uses are defined in [the voter model and its variables](/#annex-technology-sec-e-2).

```visual
kind: cards
preset: assumption
items:
  - title: "1. The New Democrats nominates him without a contested primary."
    head: { label: "If it fails", text: "If the party holds a contested primary, Phase −1 adds a membership drive and the nomination dates in Section 14 become hard deadlines." }
    body: "This is reported (Tier 2) and not confirmed by the party's certified nomination rules, which would confirm it."
  - title: "2. The party meets the IEBC calendar."
    head: { label: "If it fails", text: "A party that misses a membership-list or nomination deadline puts him on the ballot only as an independent, on the independent candidates' earlier deadlines." }
    body: "The gazetted IEBC calendar (Section 14) sets the dates: certified membership lists by 23 March 2027, primaries by 8 May 2027, and governor nominations from 3 to 6 June 2027. **The campaign should confirm The New Democrats' own timetable against these dates before committing effort against it.**"
  - title: "3. The register and connectivity figures hold."
    body: "The {{register.2022}} registered voters (2022), the {{ict.offline}}% of residents not online (CA/KNBS 2023/24) and the 2022 ward distribution in Section 2.3 are the most recent published figures. The offline layer in Section 15.3.3 is sized against them. No 2026 Mombasa register figure is in hand."
  - title: "4. The campaign appoints the named roles."
    body: "The data-protection and electoral-law reviewer and the sign-language provider are campaign appointments, not Firefly's. Section 22.2 lists them. Firefly assembles no team: the one in post stays in post and runs the campaign on the platform (Section 17.5)."
  - title: "5. The Facebook asset is a Page, not a personal profile in professional mode."
    head: { label: "If it fails", text: "If it is a profile there are no Page Insights, no ad account and no delegated access, and Section 14.3 says what changes." }
    badge: "the largest single unknown in this document"
    body: "A visible friends list suggests otherwise. This is settled in the first hour of Week 1 and is the largest single unknown in this document."
  - title: "6. The existing team will work to a weekly brief and a named approval path."
    head: { label: "If it fails", text: "If the team will not, or cannot, work to a brief it writes itself, the operation is the wrong shape and should be re-scoped rather than forced." }
    body: "The direction model in Section 13.4 assumes it."
  - title: "7. Analytics access can be granted at analyst level without admin rights."
    body: "Firefly, which runs the platform, asks for no publishing credentials and should be given none."
  - title: "8. Any SMS or WhatsApp list already held carries documented opt-in."
    head: { label: "If it fails", text: "Where it does not, it is not merged and not messaged (Section 19.1)." }
  - title: "9. The candidate is available to the production cycle."
    head: { label: "If it fails", text: "Without it, the earned-media and owned-video commitments in Section 21.2 cannot hold at the stated cadence." }
    body: "The weekly Facebook Live, the explainer series and the debate preparation in Section 15.2.2 assume scheduled candidate time."
  - title: "10. Telco and platform access is obtained on ordinary commercial terms."
    body: "The SMS aggregator, the shortcode and the advertising platforms are assumed available to a compliant political advertiser. Section 19.4 covers the compliance conditions; Section 19.5 covers the regulatory guidance still outstanding."
  - title: "11. The engagement is embedded with the campaign."
    body: "Firefly runs the platform the campaign's own structure works on under Section 13.4, and the ground-digital integration in Section 15.3.1 assumes the team's daily contact with the field operation."
```
