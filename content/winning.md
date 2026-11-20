## 2.5 The number it takes

```lead
Governor Abdulswamad Nassir's 2022 winning total was {{result.2022.gov.nassir}} votes; this document rounds it to **{{benchmark}}**. [CALC, not a forecast] It is a floor: on a general-election day with higher turnout, the 2017 winner received {{benchmark.high}}.
```

*   **The electorate:** **{{register.2022}} voters** on the 2022 register (Section 2.1). The 2026 register is not yet certified (about {{register.2026}} on reported new registrations), so every figure here uses the 2022 register and is a floor.
*   **The benchmark: {{benchmark}} votes.** Governor Abdulswamad Nassir's 2022 winning total was **{{result.2022.gov.nassir}} votes** (Section 2.2). This document rounds it to **{{benchmark}}** and uses that one figure as the benchmark everywhere: every route below, the digital ceiling in Section 4.3 and the objectives in Chapter 8 are measured against it.
*   **[CALC, not a forecast] The high-turnout bracket.** In 2017, on general-election day, Hassan Joho won with **{{benchmark.high}}** votes (Tier 1). The 2027 governor's race is on general-election day too. Treat {{benchmark}} as the floor and {{benchmark.high}} as what a high-turnout race could demand; the campaign plans to the floor and builds capacity toward the bracket.
*   **The turnout rate: {{turnout.constant}}%.** The 2022 governor election turnout was **{{turnout.2022}}%**: {{result.2022.gov.valid}} valid votes of {{register.2022}} registered (Tier 2, calculated from the declared result). Every calculation here carries that rate forward to 2027. It is the lowest rate on record, from an election held three weeks late; carrying it forward is a cautious assumption, and the scenario model brackets it at 34–55%.
    *   At {{turnout.constant}}% of the 2022 register, total ballots cast were **{{ballots.2022}} votes**: the valid votes for governor (Tier 2).
    *   To reach **{{benchmark}}**, a winning candidate needs about **{{benchmark.share-of-ballots}}% of ballots cast**, which is **{{benchmark.share-of-register}}% of the registered electorate** (calculated).
*   **Against his own record.** His best tally, {{result.2013.gov.shahbal}} in 2013, is {{benchmark.gap.2013}} votes short of {{benchmark}}; his 2017 tally is {{benchmark.gap.2017}} short (calculated). The {{benchmark.gap.2013}} votes he needs beyond 2013 are **{{turnout.abstainers.to-benchmark}}%** of the voters who stayed home in 2022 (calculated).

```figure
id: fig-3-1-funnel
```

#### Four routes to the number

```lead
**No route clears {{benchmark}} on its own ballots.** A route is where the margin is built, not where the whole number lives.
```

Each route below is a group of constituencies or wards, measured the same way: registered voters, then the ballots they would cast at the {{turnout.constant}}% turnout rate, then those ballots against the {{benchmark}} benchmark. The ballot count is a ceiling, because it assumes every ballot in the route goes to one candidate. **No route clears {{benchmark}} on its own ballots.** A route is where the margin is built, not where the whole number lives.

```figure
id: fig-3-3-paths
```

```textversion
#### Path A: The North Mainland (Kisauni and Nyali)
*   **Constituency Composition:** Kisauni ({{con.kisauni}}) + Nyali ({{con.nyali}}).
*   **Total Registered Voters:** **{{bloc.north}} voters** across **12 wards** (**{{bloc.north.share}}%** of county total).
*   **Mathematical Proof:**
    *   `Total (North) = {{con.kisauni}} + {{con.nyali}} = {{bloc.north}} registered voters`
    *   `Ballots at {{turnout.constant}}% turnout = {{bloc.north}} × {{turnout.rate}} = {{path.a.ballots}}`
    *   `Against the benchmark = {{path.a.ballots}} − {{benchmark}} = −{{path.a.margin|abs}} votes, even at 100% of ballots`
*   **Turnout Reality:** Even an unprecedented 80% share of those ballots ({{path.a.at80}} votes) leaves the campaign **{{path.a.at80.short}} votes short** of {{benchmark}}.
*   **Strategic Implication:** The north mainland is the largest block in the county and was decided by about a thousand votes in each constituency in 2022. The campaign cannot win without it, and cannot win on it alone.

#### Path B: The Island and the South (Mvita and Likoni)
*   **Constituency Composition:** Mvita ({{con.mvita}}) + Likoni ({{con.likoni}}).
*   **Total Registered Voters:** **{{path.b.registered}} voters** across **10 wards** (**{{path.b.share}}%** of county total).
*   **Mathematical Proof:**
    *   `Total (Island and South) = {{con.mvita}} + {{con.likoni}} = {{path.b.registered}} registered voters`
    *   `Ballots at {{turnout.constant}}% turnout = {{path.b.registered}} × {{turnout.rate}} = {{path.b.ballots}}`
    *   `Against the benchmark = {{path.b.ballots}} − {{benchmark}} = −{{path.b.margin|abs}} votes, even at 100% of ballots`
*   **Strategic Implication:** The incumbent's strongest ground in 2022: his former constituency and the widest margin in the county. The campaign contests it to hold the incumbent's margin down, not to carry it.

#### Path C: The Twelve Largest Wards
*   **Ward Composition (12 Wards):** the twelve largest wards on the 2022 register, led by Timbwani ({{ward.timbwani}}), Mikindani ({{ward.mikindani}}) and Majengo ({{ward.majengo}}); the full list is in the ward table in Annex B.
*   **Total Registered Voters:** **{{pareto.top12}} voters** across **12 wards** (**{{pareto.top12.share}}%** of county total).
*   **Mathematical Proof:**
    *   `∑ (12 Wards) = {{ward.timbwani}} + {{ward.mikindani}} + {{ward.majengo}} + … = {{pareto.top12}} registered voters`
    *   `Ballots at {{turnout.constant}}% turnout = {{pareto.top12}} × {{turnout.rate}} = {{path.c.ballots}}`
    *   `Against the benchmark = {{path.c.ballots}} − {{benchmark}} = −{{path.c.margin|abs}} votes, even at 100% of ballots`
*   **Strategic Implication:** The campaign does not need to contest all 30 wards with equal intensity. Concentrated effort across these 12 wards reaches {{pareto.top12}} registered voters, which is where the margin is cheapest to build.

#### Path D: The Close-Contest Belt (Kisauni, Nyali and Changamwe)
*   **Constituency Composition:** Kisauni ({{con.kisauni}}) + Nyali ({{con.nyali}}) + Changamwe ({{con.changamwe}}).
*   **Total Registered Voters:** **{{path.d.registered}} voters** across **17 wards** (**{{path.d.share}}%** of county total).
*   **Mathematical Proof:**
    *   `Total (Belt) = {{con.kisauni}} + {{con.nyali}} + {{con.changamwe}} = {{path.d.registered}} registered voters`
    *   `Ballots at {{turnout.constant}}% turnout = {{path.d.registered}} × {{turnout.rate}} = {{path.d.ballots}}`
    *   `Against the benchmark = {{path.d.ballots}} − {{benchmark}} = {{path.d.margin}} votes at 100% of ballots`
*   **Turnout Reality:** These {{path.d.registered}} registered voters cast about **{{path.d.ballots}} ballots** at the 2022 rate. Even 80% of them ({{path.d.at80}} votes) leaves the campaign **{{path.d.at80.short}} votes short** of {{benchmark}}.
*   **Strategic Conclusion:** **Turnout, not geography, is the lever.** At the 2022 rate no realistic share of any route reaches the number; at the turnout of a general-election day the same routes do. The plan's first job is to bring the 2022 abstainers in the belt to vote.
```

**What it means for the campaign.** The margin is built in the close-contest belt (Section 6.2), the Island is contested to hold the incumbent's lead down, and the whole plan is measured by one thing above all: how many of the {{abstained.2022}} voters who stayed home in 2022 turn out for him.
