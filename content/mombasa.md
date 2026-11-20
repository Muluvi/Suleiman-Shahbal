```lead
Mombasa is small, crowded, young and urban: **{{census.population}}** people on **{{census.area}} km²**, a median age of **{{census.median-age}}**, and **{{poverty.2021}}%** in poverty in 2021.
```

Mombasa is small, crowded, young and urban: **{{census.population}}** people on **{{census.area}} km²**, a median age of **{{census.median-age}}**, and **{{poverty.2021}}%** in poverty in 2021 (Tier 1, KNBS 2019 Census; Tier 2, KNBS poverty estimate via Stats Kenya). It is Kenya's second city and its port, producing about **{{gva.share}}%** of national output (Tier 1, KNBS Gross County Product). Its next governor runs a budget of **KSh {{budget.total|bn}} billion** a year (Tier 3, FY2025/26, unconfirmed). This chapter sets out who lives here and how the county is run; Chapter 3 sets out what they need.

## 1.1 Who lives here

The 2019 census counted **{{census.population}}** people: {{census.male}} men, {{census.female}} women and {{census.intersex}} intersex people (Tier 1, KNBS). Mombasa is one of only two Kenyan counties with more men than women, a mark of a port city that draws working men from the rest of the coast and up-country. A 2025 population projection is not yet in hand; the record that would settle it is the KNBS county projection series.

```visual
kind: stats
items:
  - value: "{{census.population}}"
    label: "people, 2019 census"
    tier: 1
    body: "{{census.male}} men, {{census.female}} women and {{census.intersex}} intersex people (Tier 1, KNBS 2019 Census)."
  - value: "{{census.households}}"
    label: "households"
    tier: 1
    body: "An average of **{{census.household-size}}** people per household (Tier 1, KNBS 2019 Census)."
  - value: "{{census.median-age}}"
    label: "median age, in years"
    tier: 1
    body: "Half of Mombasa's residents are {{census.median-age}} or younger (Tier 1, calculated from KNBS 2019 Census Volume III)."
```

```figure
id: fig-2-4-people
```

**Age.** The median age is **{{census.median-age}}** (Tier 1, calculated from KNBS 2019 Census Volume III). The 2019 census puts **{{census.age.0-14.share}}%** of residents at 0–14, **{{census.age.15-34.share}}%** at 15–34, **{{census.age.35-59.share}}%** at 35–59 and **{{census.age.60-plus.share}}%** at 60 and over. Of the {{census.adults}} adults, **{{census.adults.18-34.share}}%** are aged 18 to 34 (Tier 1, KNBS 2019 Census Volume III).

**What it means for the campaign.** A county where six adults in ten are under 35 is decided by whether young people register and turn out. They are also the most online: **{{ict.mombasa.youth}}%** of Mombasa's young people use the internet (Tier 1, CA/KNBS 2023/24).

## 1.2 The land and its three zones

Mombasa covers **{{census.area}} km²**, the second-smallest county in Kenya, at **{{census.density}}** people per km² (Tier 1, KNBS 2019 Census). It is classed entirely urban (Tier 2, CRA county fact sheet). Its six constituencies share their names and boundaries with its six census sub-counties, so in Mombasa the census and the register can be read side by side.

```visual
kind: stats
items:
  - value: "{{census.area}} km²"
    label: "Kenya's second-smallest county"
    tier: 1
    body: "**{{census.density}}** people per km² (Tier 1, KNBS 2019 Census)."
  - value: "{{census.urban.share}}%"
    label: "urban"
    tier: 2
    body: "Mombasa has no rural population in the census classification (Tier 2, KNBS 2019 Census Volume II via the CRA county fact sheet)."
```

**Three zones and a fourth that rotates.** Water separates Mombasa into the Island, the north mainland across the Nyali bridge, the west mainland along the Nairobi road and the port, and Likoni across the ferry. Each has its own economy and its own grievance, and the campaign's digital and SMS messaging is set for each.

```figure
id: fig-3-7-zones
```

```visual
kind: tabs
preset: zone
items:
  - title: "The Island: Mvita"
    body: "| Sub-County (Tier 1, KNBS 2019 Census) | Population | Density/km² | Households | Strategic value |\n|---|---|---|---|---|\n| Mvita | {{sub.mvita.population}} | {{sub.mvita.density}} | {{sub.mvita.households}} | Old Town, the CBD, the most online constituency |\n| **Total** | **{{zone.anchor.population}}** | — | **{{zone.anchor.households}}** | **{{zone.anchor.share}}% of county population** |\n\nThe Island holds {{con.mvita}} registered voters in five wards (Mji wa Kale/Makadara {{ward.mji-wa-kale-makadara}}; Tudor {{ward.tudor}}; Tononoka {{ward.tononoka}}; Shimanzi/Ganjoni {{ward.shimanzi-ganjoni}}; Majengo {{ward.majengo}}), all Tier 1 (IEBC). It is the governor's own former constituency and the county's commercial heart.\n\nMessaging here leads on trade, permits and the cost of doing business. **More than half of Mvita used the internet in 2019 ({{ict.internet.2019.mvita}}%, Tier 1), the highest of the six: the Island is where digital does most of the work.**"
  - title: "The north mainland: Kisauni and Nyali"
    body: "| Sub-County (Tier 1, KNBS 2019 Census) | Population | Density/km² | Households | Key issues |\n|---|---|---|---|---|\n| Kisauni | {{sub.kisauni.population}} | {{sub.kisauni.density}} | {{sub.kisauni.households}} | Largest population; youth, land, security |\n| Nyali | {{sub.nyali.population}} | {{sub.nyali.density}} | {{sub.nyali.households}} | Kongowea market; mixed incomes |\n| **Total** | **{{zone.mwingi.population}}** | — | **{{zone.mwingi.households}}** | **{{zone.mwingi.share}}% of county population** |\n\nTwo constituencies, {{bloc.north}} registered voters, {{bloc.north.share}}% of the register (Tier 1, IEBC). In 2022 both were decided by about a thousand votes each.\n\n**Priority from Phase −1.** This is the largest block in the county and the closest-fought, and it carries more than its share of effort and reach."
  - title: "The west mainland: Changamwe and Jomvu"
    body: "| Sub-County (Tier 1, KNBS 2019 Census) | Population | Density/km² | Households | Characteristics |\n|---|---|---|---|---|\n| Changamwe | {{sub.changamwe.population}} | {{sub.changamwe.density}} | {{sub.changamwe.households}} | The port, the airport, industry |\n| Jomvu | {{sub.jomvu.population}} | {{sub.jomvu.density}} | {{sub.jomvu.households}} | Mikindani, Miritini, the SEZ site |\n| **Total** | **{{zone.arid.population}}** | — | **{{zone.arid.households}}** | **{{zone.arid.share}}% of county population** |\n\nThe working mainland: {{bloc.west}} registered voters (Tier 1, IEBC). It is where the port's jobs are, where the water shortage bites hardest, and where the Jomvu SEZ he is building would stand.\n\n**This is where the connectivity gap is widest: Jomvu had the lowest internet use in the county in 2019 ({{ict.internet.2019.jomvu}}%, Tier 1).** SMS, USSD and the stages do more of the work here."
body: "**Likoni, the fourth.** Likoni ({{con.likoni}} registered voters, Tier 1) sits across the ferry and is not assigned to a zone: it takes a rotating share of effort and the campaign's ward-level tests. Its largest ward, Timbwani ({{ward.timbwani}}), is the largest in the county."
```

Living standards, from poverty and water to electricity, phones and the internet, are set out with the rest of what voters need, in What voters need.

## 1.4 How the county is run

Mombasa has six constituencies, 30 county assembly wards and {{census.subcounties}} sub-counties (Tier 1, IEBC and KNBS). Unlike most counties, its sub-counties and constituencies are the same six areas, so a sub-county census figure can be read against a constituency register figure directly (Section 1.2).

The Governor of Mombasa heads the county executive. Under the County Governments Act the office runs public services for more than one million residents. Its main responsibilities:

```visual
kind: checklist
items:
  - label: "Water and Sanitation"
    text: "Mombasa Water (MOWASCO), kiosks and reticulation, sewerage, and solid waste."
  - label: "County Health Services"
    text: "Coast General and the sub-county hospitals, staff, medicine procurement."
  - label: "Trade, Markets and Infrastructure"
    text: "Markets such as Kongowea and Marikiti, trade licences and permits, county roads and drainage."
  - label: "Financial Administration"
    text: "The budget, own-source revenue, and paying the county's suppliers on time."
```

The county's money, from the budget to the pending bills, is set out in one place in What voters need, beside how it was spent.
