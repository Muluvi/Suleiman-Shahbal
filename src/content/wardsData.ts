import { SubCountySummary, WardData } from '../types/strategy.ts';

export const subCountiesList: SubCountySummary[] = [
  {
    name: 'Kisauni',
    code: '003',
    totalVoters2022: 135263,
    wardsCount: 7,
    pollingStationsTotal: 214,
    economicBackbone: 'High-density residential, youth informal economy, artisan enterprise, tourism corridor, smallholder agriculture',
    turnout2022Average: 34.2,
    strategicWeight: 'Largest vote basket in Mombasa County (~21.1% of county electorate). Vital youth mobilization battleground with 10 Mega Polling Centres.',
    coreVulnerabilityToAddress: 'High youth unemployment, periodic security crackdowns, uncollected refuse, and historical land tenure insecurity.',
    megaCentresCount: 10
  },
  {
    name: 'Nyali',
    code: '004',
    totalVoters2022: 124510,
    wardsCount: 5,
    pollingStationsTotal: 201,
    economicBackbone: 'Commercial hubs, Kongowea wholesale market, hospitality & tourism, middle/upper-income residential, coastal real estate',
    turnout2022Average: 36.8,
    strategicWeight: 'Second largest vote basket (~19.4%). Diverse voter profile combining affluent suburbanites and dense informal settlements (Ziwa La Ng\'ombe).',
    coreVulnerabilityToAddress: 'Frustration of Kongowea traders with county tax harassment, poor drainage, erratic water supply in middle-class estates.',
    megaCentresCount: 9
  },
  {
    name: 'Mvita',
    code: '006',
    totalVoters2022: 118699,
    wardsCount: 5,
    pollingStationsTotal: 201,
    economicBackbone: 'Island commercial district, Port of Mombasa headquarters, shipping agencies, banking, Old Town cultural tourism, logistics',
    turnout2022Average: 35.5,
    strategicWeight: 'Historical and intellectual political heart of Mombasa (~18.5%). High concentration of professionals, heritage custodians, and port executives.',
    coreVulnerabilityToAddress: 'Urban decay, parking fee disputes, port logistics decentralization anxiety, historical housing renewal disputes.',
    megaCentresCount: 3
  },
  {
    name: 'Likoni',
    code: '005',
    totalVoters2022: 94787,
    wardsCount: 5,
    pollingStationsTotal: 149,
    economicBackbone: 'Ferry and maritime transit commuters, fishing and artisanal marine harvesting, informal retail, cross-border Kwale corridor commerce',
    turnout2022Average: 31.9,
    strategicWeight: 'Southern gateway (~14.8%). High turnaround potential with targeted infrastructure message focused on Likoni crossing and land rights.',
    coreVulnerabilityToAddress: 'Likoni ferry congestion delays, poor feeder roads, land squatters, clean water deficits.',
    megaCentresCount: 6
  },
  {
    name: 'Changamwe',
    code: '001',
    totalVoters2022: 93572,
    wardsCount: 5,
    pollingStationsTotal: 148,
    economicBackbone: 'Heavy industrial zone, container freight stations (CFSs), refinery infrastructure, oil terminal transport, airport logistics',
    turnout2022Average: 33.7,
    strategicWeight: 'Organised labour and logistics heartland (~14.6%). Decisive influence among transport unions, clearing agents, and factory technicians.',
    coreVulnerabilityToAddress: 'Loss of clearing and forwarding business to dry ports, industrial pollution, informal settlement drainage.',
    megaCentresCount: 4
  },
  {
    name: 'Jomvu',
    code: '002',
    totalVoters2022: 75082,
    wardsCount: 3,
    pollingStationsTotal: 122,
    economicBackbone: 'Dry ports, logistics yards, Special Economic Zone (SEZ) corridor, long-distance trucking hubs, light manufacturing',
    turnout2022Average: 34.9,
    strategicWeight: 'Rapidly industrialising economic frontier (~11.7%). Home to the upcoming DP World SEZ investment spearheaded by Shahbal.',
    coreVulnerabilityToAddress: 'Trucking congestion, truck parking fees, local youth access to emerging industrial apprenticeships.',
    megaCentresCount: 5
  }
];

export const wardsList: WardData[] = [
  // --- CHANGAMWE (Code: 001) - 5 Wards, 93,572 Voters ---
  {
    wardName: 'Port Reitz',
    cawCode: '0001',
    constituencyCode: '001',
    subCounty: 'Changamwe',
    registeredVoters2022: 17817,
    pollingStationsCount: 28,
    estimated2027Target: 20040,
    turnout2022Pct: 34.2,
    strategicPriority: 'Critical Fortress',
    keyDemographics: 'Port Reitz Sub-County Hospital staff, residential settlements, transport technicians',
    priorityLocalIssues: ['Port Reitz Hospital diagnostic upgrading', 'Airport access road drainage', 'Noise mitigation'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Health workers union chapters & residential estate committees',
    topCentres: [
      { name: 'Bomu Primary School', voters: 9411, stations: 14 },
      { name: 'Mwliabu Primary School', voters: 4337, stations: 7 },
      { name: 'Lilongwe Garden', voters: 3085, stations: 5 }
    ]
  },
  {
    wardName: 'Kipevu',
    cawCode: '0002',
    constituencyCode: '001',
    subCounty: 'Changamwe',
    registeredVoters2022: 16132,
    pollingStationsCount: 25,
    estimated2027Target: 18150,
    turnout2022Pct: 33.1,
    strategicPriority: 'Consolidation',
    keyDemographics: 'Kipevu oil terminal operators, power engineers, equipment technicians',
    priorityLocalIssues: ['Local community procurement quotas in maritime contracts', 'Industrial dust control', 'Youth internships'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Dock Workers Union (DWU) shop stewards & industrial technicians WhatsApp circle',
    topCentres: [
      { name: 'Cape Town Ground', voters: 4489, stations: 7 },
      { name: 'Kisumu Ndogo Ground', voters: 3419, stations: 5 },
      { name: 'Umoja Primary School', voters: 3360, stations: 5 },
      { name: 'Kwa Hola Primary School', voters: 3090, stations: 5 }
    ]
  },
  {
    wardName: 'Airport',
    cawCode: '0003',
    constituencyCode: '001',
    subCounty: 'Changamwe',
    registeredVoters2022: 18557,
    pollingStationsCount: 29,
    estimated2027Target: 20880,
    turnout2022Pct: 33.9,
    strategicPriority: 'Swing Ground',
    keyDemographics: 'Moi International Airport cargo crew, transport forwarders, residential artisans',
    priorityLocalIssues: ['Tourist chartered flights restoration', 'Aviation cargo ground handling internships', 'Access roads to Magongo'],
    digitalPenetration: 'Medium-High',
    groundMobilisationAnchor: 'Aviation cargo workers groups & Magongo youth forum',
    topCentres: [
      { name: 'Al-Irshadi Nursery School', voters: 5203, stations: 8 },
      { name: 'Mwidani Social Hall', voters: 4276, stations: 7 },
      { name: 'Baraka Village', voters: 4156, stations: 6 },
      { name: 'Bokole Nursery School', voters: 3726, stations: 6 }
    ]
  },
  {
    wardName: 'Changamwe',
    cawCode: '0004',
    constituencyCode: '001',
    subCounty: 'Changamwe',
    registeredVoters2022: 18182,
    pollingStationsCount: 30,
    estimated2027Target: 20450,
    turnout2022Pct: 34.0,
    strategicPriority: 'Critical Fortress',
    keyDemographics: 'Trade union heartland, railway workers, clearing agents, multi-ethnic industrial workforce',
    priorityLocalIssues: ['Empowering local CFSs to keep clearing jobs in Mombasa', 'Municipal housing maintenance', 'Clean water supply'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Veterans of coastal labor movement & transport logistics managers circle',
    topCentres: [
      { name: 'Changamwe Social Hall', voters: 6183, stations: 9 },
      { name: 'St. Lwanga Primary School', voters: 2566, stations: 4 },
      { name: 'Baptist Church Primary School', voters: 2332, stations: 4 },
      { name: 'Macongo Primary School', voters: 2125, stations: 4 }
    ]
  },
  {
    wardName: 'Chaani',
    cawCode: '0005',
    constituencyCode: '001',
    subCounty: 'Changamwe',
    registeredVoters2022: 22873,
    pollingStationsCount: 36,
    estimated2027Target: 25730,
    turnout2022Pct: 33.5,
    strategicPriority: 'High-Opportunity Growth',
    keyDemographics: 'Dense multicultural residential heartland, informal retailers, metalworkers',
    priorityLocalIssues: ['Youth micro-enterprise stalls', 'Stormwater drainage to prevent flooding', 'Dispensary 24-hour service'],
    digitalPenetration: 'Medium-High',
    groundMobilisationAnchor: 'Chaani youth development collective & women micro-credit groups',
    topCentres: [
      { name: 'Chaani Social Hall', voters: 8654, stations: 13 },
      { name: 'Chaani Primary School', voters: 5752, stations: 9 },
      { name: 'Mikadini Primary School', voters: 4241, stations: 7 },
      { name: 'Kipevu Primary School', voters: 3424, stations: 5 }
    ]
  },

  // --- JOMVU (Code: 002) - 3 Wards, 75,082 Voters ---
  {
    wardName: 'Jomvu Kuu',
    cawCode: '0006',
    constituencyCode: '002',
    subCounty: 'Jomvu',
    registeredVoters2022: 24243,
    pollingStationsCount: 37,
    estimated2027Target: 27270,
    turnout2022Pct: 35.5,
    strategicPriority: 'Critical Fortress',
    keyDemographics: 'Heavy logistics corridor, DP World Special Economic Zone ground zero, trucking yards',
    priorityLocalIssues: ['Prioritizing local youth jobs at the new Jomvu SEZ', 'Truck transit staging fees', 'Land title deeds'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Jomvu youth economic empowerment alliance & local clan council',
    topCentres: [
      { name: 'Jomvu Kuu Primary School', voters: 5699, stations: 9 },
      { name: 'Miritini World Bank Primary School', voters: 5066, stations: 8 },
      { name: 'Aldinnah Open Grounds', voters: 4727, stations: 7 },
      { name: 'Nuru CBR School', voters: 3364, stations: 5 }
    ]
  },
  {
    wardName: 'Miritini',
    cawCode: '0007',
    constituencyCode: '002',
    subCounty: 'Jomvu',
    registeredVoters2022: 18048,
    pollingStationsCount: 31,
    estimated2027Target: 20300,
    turnout2022Pct: 35.1,
    strategicPriority: 'High-Opportunity Growth',
    keyDemographics: 'Mombasa SGR terminus hub, transport operators, commuters, market vendors',
    priorityLocalIssues: ['SGR terminus boda and taxi integration', 'Modern market stalls for fruit vendors', 'Clean water distribution'],
    digitalPenetration: 'Medium-High',
    groundMobilisationAnchor: 'Miritini Terminus Transport Sacco & market vendors association',
    topCentres: [
      { name: 'Railway Station Hall', voters: 6391, stations: 10 },
      { name: 'Miritini Primary School', voters: 3954, stations: 6 },
      { name: 'Abu-Ubaida Primary School', voters: 3715, stations: 6 }
    ]
  },
  {
    wardName: 'Mikindani',
    cawCode: '0008',
    constituencyCode: '002',
    subCounty: 'Jomvu',
    registeredVoters2022: 32791,
    pollingStationsCount: 54,
    estimated2027Target: 36890,
    turnout2022Pct: 34.2,
    strategicPriority: 'Critical Fortress',
    keyDemographics: 'Dense planned residential estate, teachers, civil servants, diverse cosmopolitan population',
    priorityLocalIssues: ['Water bowser cartels control', 'Recreational youth centers and sports park refurbishment', 'Street lighting'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Mikindani Estate Residents Association & teacher-parent digital communities',
    topCentres: [
      { name: 'Amani Primary School', voters: 7071, stations: 11 },
      { name: 'Kajembe High School', voters: 6601, stations: 10 },
      { name: 'Mikindani Primary School', voters: 5621, stations: 9 },
      { name: "St. Mary's Bangladesh Primary", voters: 4699, stations: 7 },
      { name: 'Ministry of Water Tanks', voters: 3685, stations: 6 }
    ]
  },

  // --- KISAUNI (Code: 003) - 7 Wards, 135,263 Voters ---
  {
    wardName: 'Mjambere',
    cawCode: '0009',
    constituencyCode: '003',
    subCounty: 'Kisauni',
    registeredVoters2022: 22692,
    pollingStationsCount: 34,
    estimated2027Target: 25530,
    turnout2022Pct: 33.8,
    strategicPriority: 'High-Opportunity Growth',
    keyDemographics: 'Vibrant youth population, boda boda operators, informal traders, multi-ethnic residential clusters',
    priorityLocalIssues: ['Youth job creation and vocational training', 'Sanitation and solid waste management', 'Clean water access'],
    digitalPenetration: 'Medium-High',
    groundMobilisationAnchor: 'Boda boda sacco leadership & youth sports tournament WhatsApp groups',
    topCentres: [
      { name: 'Kisauni Baptist Primary School', voters: 9166, stations: 14 },
      { name: 'Kadongo Grounds Mishomoroni', voters: 6205, stations: 9 },
      { name: 'Kisauni Water & Sewerage Offices', voters: 4853, stations: 7 },
      { name: 'Palani Grounds', voters: 2468, stations: 4 }
    ]
  },
  {
    wardName: 'Junda',
    cawCode: '0010',
    constituencyCode: '003',
    subCounty: 'Kisauni',
    registeredVoters2022: 25602,
    pollingStationsCount: 41,
    estimated2027Target: 28800,
    turnout2022Pct: 32.5,
    strategicPriority: 'Swing Ground',
    keyDemographics: 'Rapidly growing peri-urban residential zone, young families, artisans',
    priorityLocalIssues: ['Feeder road tarmacking', 'Maternal healthcare dispensary hours', 'Streetlighting security'],
    digitalPenetration: 'Medium',
    groundMobilisationAnchor: 'Community women merry-go-round chamas & local church/mosque welfare committees',
    topCentres: [
      { name: 'IFC Church', voters: 6308, stations: 10 },
      { name: "Junda Assistant Chief's Camp-Wangwani", voters: 5084, stations: 8 },
      { name: "Assistant Chief's Camp-Machafuko", voters: 4959, stations: 8 },
      { name: 'Emmas Academy', voters: 4077, stations: 6 }
    ]
  },
  {
    wardName: 'Bamburi',
    cawCode: '0011',
    constituencyCode: '003',
    subCounty: 'Kisauni',
    registeredVoters2022: 20470,
    pollingStationsCount: 32,
    estimated2027Target: 23030,
    turnout2022Pct: 36.2,
    strategicPriority: 'Critical Fortress',
    keyDemographics: 'High-density mixed residential, tourism workers, entertainment hubs, transport technicians',
    priorityLocalIssues: ['Drainage during torrential coastal rains', 'SME license fee rationalization', 'Security patrols'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Hospitality workers digital circles & Bamburi tech/creative hubs',
    topCentres: [
      { name: 'Kiembeni Primary School', voters: 9682, stations: 14 },
      { name: 'Majaoni Primary School', voters: 5314, stations: 8 },
      { name: 'St. Elizabeth Academy', voters: 2885, stations: 5 },
      { name: 'Kashani Primary School', voters: 2188, stations: 4 }
    ]
  },
  {
    wardName: 'Mwakirunge',
    cawCode: '0012',
    constituencyCode: '003',
    subCounty: 'Kisauni',
    registeredVoters2022: 6423,
    pollingStationsCount: 11,
    estimated2027Target: 7230,
    turnout2022Pct: 35.1,
    strategicPriority: 'Consolidation',
    keyDemographics: 'Peri-urban agricultural settlements, waste management workforce, indigenous coastal residents',
    priorityLocalIssues: ['Waste-to-energy transformation for dumpsite', 'Piped water infrastructure', 'Land title deeds'],
    digitalPenetration: 'Medium',
    groundMobilisationAnchor: 'Farmers co-operatives & grassroots elders barazas',
    topCentres: [
      { name: 'Marimani Primary School', voters: 1911, stations: 3 },
      { name: 'M/akirunge Primary School', voters: 1568, stations: 3 },
      { name: 'Voroni Community Primary School', voters: 1170, stations: 2 },
      { name: 'Colorado Primary School', voters: 1102, stations: 2 }
    ]
  },
  {
    wardName: 'Mtopanga',
    cawCode: '0013',
    constituencyCode: '003',
    subCounty: 'Kisauni',
    registeredVoters2022: 19474,
    pollingStationsCount: 32,
    estimated2027Target: 21910,
    turnout2022Pct: 33.4,
    strategicPriority: 'High-Opportunity Growth',
    keyDemographics: 'High-density informal enterprise, youth majority, tuk-tuk service depots',
    priorityLocalIssues: ['County enforcement cess on small kiosks', 'Youth sports grounds', 'Drainage desilting'],
    digitalPenetration: 'Medium-High',
    groundMobilisationAnchor: 'Youth creative content creators & micro-retailers association',
    topCentres: [
      { name: 'Mtopanga Primary School', voters: 6539, stations: 10 },
      { name: 'Kiembeni Baptist Primary School', voters: 4558, stations: 7 },
      { name: 'St. Josephs Herman Primary', voters: 2269, stations: 4 },
      { name: 'Community of Christ Church', voters: 2220, stations: 4 }
    ]
  },
  {
    wardName: 'Magogoni',
    cawCode: '0014',
    constituencyCode: '003',
    subCounty: 'Kisauni',
    registeredVoters2022: 15105,
    pollingStationsCount: 23,
    estimated2027Target: 16990,
    turnout2022Pct: 34.9,
    strategicPriority: 'Swing Ground',
    keyDemographics: 'Coastal fishing settlements, coastal tourism resorts workforce, mixed traders',
    priorityLocalIssues: ['Landing site cold-storage for fisherfolk', 'Tourism revival', 'Borehole water salinity'],
    digitalPenetration: 'Medium-High',
    groundMobilisationAnchor: 'Beach Management Units (BMUs) & local youth football clubs',
    topCentres: [
      { name: 'Mwandoni (Kishada) Play Grounds', voters: 3976, stations: 6 },
      { name: 'Mishomoroni Junior Academy', voters: 3453, stations: 5 },
      { name: 'Barsheba Sokoni Grounds', voters: 2600, stations: 4 },
      { name: 'Mwandoni Kwa Mtumwa Grounds', voters: 2069, stations: 3 }
    ]
  },
  {
    wardName: 'Shanzu',
    cawCode: '0015',
    constituencyCode: '003',
    subCounty: 'Kisauni',
    registeredVoters2022: 25497,
    pollingStationsCount: 41,
    estimated2027Target: 28680,
    turnout2022Pct: 34.0,
    strategicPriority: 'Swing Ground',
    keyDemographics: 'Northern tourism belt, resort staff, tertiary students (Shanzu TTC), artisans',
    priorityLocalIssues: ['College student intern placements', 'Curio vendor designated stalls', 'Access roads to beaches'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'College student unions & hotel union shop stewards',
    topCentres: [
      { name: 'Shanzu Teachers Training College', voters: 7500, stations: 11 },
      { name: 'Mikoroshoni Primary School', voters: 4347, stations: 7 },
      { name: 'Mwembelegeza Primary School', voters: 3750, stations: 6 },
      { name: 'Bamburi Primary School', voters: 3025, stations: 5 }
    ]
  },

  // --- NYALI (Code: 004) - 5 Wards, 124,510 Voters ---
  {
    wardName: 'Frere Town',
    cawCode: '0016',
    constituencyCode: '004',
    subCounty: 'Nyali',
    registeredVoters2022: 24849,
    pollingStationsCount: 40,
    estimated2027Target: 27950,
    turnout2022Pct: 37.5,
    strategicPriority: 'Critical Fortress',
    keyDemographics: 'Historic freed slave settlement heritage, mixed middle-income estates, educators',
    priorityLocalIssues: ['Heritage site protection and tourism revenues', 'Estate access roads', 'County property rates transparency'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Frere Town Descendants Heritage Association & resident welfare groups',
    topCentres: [
      { name: 'Frere Town Primary School', voters: 6283, stations: 9 },
      { name: 'Khadija Primary School', voters: 5199, stations: 8 },
      { name: 'Sarajevo Grounds', voters: 3021, stations: 5 },
      { name: 'Mlaleo Primary School', voters: 2826, stations: 5 }
    ]
  },
  {
    wardName: "Ziwa La Ng'ombe",
    cawCode: '0017',
    constituencyCode: '004',
    subCounty: 'Nyali',
    registeredVoters2022: 23296,
    pollingStationsCount: 36,
    estimated2027Target: 26210,
    turnout2022Pct: 35.8,
    strategicPriority: 'High-Opportunity Growth',
    keyDemographics: 'Largest informal settlement in Nyali, highly energetic youth and women petty trading community',
    priorityLocalIssues: ['Sanitation sewer connections', 'Fire outbreak emergency response', 'Micro-credit access for women'],
    digitalPenetration: 'Medium-High',
    groundMobilisationAnchor: 'Women table-banking networks & youth creative arts collectives',
    topCentres: [
      { name: "Ziwa La Ng'ombe Primary School", voters: 9516, stations: 14 },
      { name: 'Tumaini Academy/Church of Christ', voters: 5102, stations: 8 },
      { name: 'NITA Mombasa', voters: 3901, stations: 6 },
      { name: 'Olive Rehabilitation Centre', voters: 2676, stations: 4 }
    ]
  },
  {
    wardName: 'Mkomani',
    cawCode: '0018',
    constituencyCode: '004',
    subCounty: 'Nyali',
    registeredVoters2022: 24154,
    pollingStationsCount: 37,
    estimated2027Target: 27170,
    turnout2022Pct: 38.2,
    strategicPriority: 'Consolidation',
    keyDemographics: 'Middle and upper middle-income coastal residents, ASK Mombasa Showground precinct',
    priorityLocalIssues: ['Zoning regulation and commercial intrusion', 'Pothole remediation', 'Reliable piped water'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Estate resident associations & professional networks',
    topCentres: [
      { name: 'Pentrose Community Primary School', voters: 7055, stations: 11 },
      { name: 'Maweni Primary School', voters: 6675, stations: 10 },
      { name: "ASK Ground-Gate 'A'", voters: 5088, stations: 8 },
      { name: 'Mkomani Grounds', voters: 2748, stations: 4 }
    ]
  },
  {
    wardName: 'Kongowea',
    cawCode: '0019',
    constituencyCode: '004',
    subCounty: 'Nyali',
    registeredVoters2022: 28846,
    pollingStationsCount: 44,
    estimated2027Target: 32450,
    turnout2022Pct: 36.1,
    strategicPriority: 'Critical Fortress',
    keyDemographics: 'East Africa\'s largest fresh-produce wholesale hub, wholesale traders, porters, transporters',
    priorityLocalIssues: ['Kongowea market daily cess and garbage charges', 'Cold chain storage', '24-hour security and washrooms'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Kongowea Traders Welfare Association & transport operators WhatsApp network',
    topCentres: [
      { name: 'Kongowea Primary School', voters: 8007, stations: 12 },
      { name: 'Kwa Karama Grounds', voters: 7386, stations: 11 },
      { name: 'Methodist Church-Kongowea', voters: 5018, stations: 8 },
      { name: 'Municipal Social Hall-Kongowea', voters: 3932, stations: 6 },
      { name: 'Kengeleni Primary School', voters: 3465, stations: 5 }
    ]
  },
  {
    wardName: 'Kadzandani',
    cawCode: '0020',
    constituencyCode: '004',
    subCounty: 'Nyali',
    registeredVoters2022: 23365,
    pollingStationsCount: 37,
    estimated2027Target: 26290,
    turnout2022Pct: 36.6,
    strategicPriority: 'Swing Ground',
    keyDemographics: 'Artisan workshops, construction workers, young working families',
    priorityLocalIssues: ['Feeder road paving', 'Dispensary drug stocks', 'School classroom infrastructure'],
    digitalPenetration: 'Medium-High',
    groundMobilisationAnchor: 'Artisan guild leaders & local youth sports tournaments',
    topCentres: [
      { name: 'Soweto Grounds', voters: 5810, stations: 5 },
      { name: 'Mwatamba Grounds', voters: 3759, stations: 6 },
      { name: 'Kadzandani Primary School', voters: 3715, stations: 6 },
      { name: 'Kwa Bullo Primary/Secondary', voters: 3694, stations: 6 }
    ]
  },

  // --- LIKONI (Code: 005) - 5 Wards, 94,787 Voters ---
  {
    wardName: 'Mtongwe',
    cawCode: '0021',
    constituencyCode: '005',
    subCounty: 'Likoni',
    registeredVoters2022: 13937,
    pollingStationsCount: 23,
    estimated2027Target: 15680,
    turnout2022Pct: 32.1,
    strategicPriority: 'Swing Ground',
    keyDemographics: 'Kenya Navy base proximity, naval civil support staff, artisanal fishermen',
    priorityLocalIssues: ['Mtongwe ferry passenger consistency', 'Fisheries landing jetty modernization', 'Public clinic medicine'],
    digitalPenetration: 'Medium',
    groundMobilisationAnchor: 'Mtongwe Fishermen Cooperative & local elders council',
    topCentres: [
      { name: 'Mtongwe Social Hall', voters: 3749, stations: 6 },
      { name: 'St. Joseph Nursery School', voters: 2436, stations: 4 },
      { name: 'Vuiweni Primary School', voters: 1934, stations: 3 },
      { name: 'Mtongwe Primary School', voters: 1768, stations: 3 }
    ]
  },
  {
    wardName: 'Shika Adabu',
    cawCode: '0022',
    constituencyCode: '005',
    subCounty: 'Likoni',
    registeredVoters2022: 15437,
    pollingStationsCount: 25,
    estimated2027Target: 17370,
    turnout2022Pct: 31.5,
    strategicPriority: 'High-Opportunity Growth',
    keyDemographics: 'Suburban smallholders, artisan tradesmen, commuter families',
    priorityLocalIssues: ['Title deeds and land adjudication disputes', 'Piped clean water pipelines', 'Electrification'],
    digitalPenetration: 'Medium',
    groundMobilisationAnchor: 'Land rights advocacy committees & church welfare fellowships',
    topCentres: [
      { name: 'Shika Adabu Primary School', voters: 4515, stations: 7 },
      { name: 'Ujamaa Grounds', voters: 3666, stations: 6 },
      { name: 'Consolata Primary School', voters: 3466, stations: 5 }
    ]
  },
  {
    wardName: 'Bofu',
    cawCode: '0023',
    constituencyCode: '005',
    subCounty: 'Likoni',
    registeredVoters2022: 18188,
    pollingStationsCount: 28,
    estimated2027Target: 20460,
    turnout2022Pct: 32.8,
    strategicPriority: 'Swing Ground',
    keyDemographics: 'Dense settlement near ferry access, kiosk vendors, motorcycle transport operators',
    priorityLocalIssues: ['Drainage along Likoni-Lungalunga road', 'Askari harassment on mama mbogas', 'Floodlighting'],
    digitalPenetration: 'Medium-High',
    groundMobilisationAnchor: 'Likoni Boda Boda Union & market women chamas',
    topCentres: [
      { name: 'Daru Ulum Madrasa', voters: 6506, stations: 10 },
      { name: 'Likoni Muslim Primary School', voters: 6363, stations: 10 },
      { name: 'Jamvi La Wageni Primary School', voters: 3109, stations: 5 }
    ]
  },
  {
    wardName: 'Likoni',
    cawCode: '0024',
    constituencyCode: '005',
    subCounty: 'Likoni',
    registeredVoters2022: 13273,
    pollingStationsCount: 21,
    estimated2027Target: 14930,
    turnout2022Pct: 31.8,
    strategicPriority: 'Critical Fortress',
    keyDemographics: 'Ferry landing zone, heavy commuter influx, lodging and micro-restaurant operators',
    priorityLocalIssues: ['Ferry crossing efficiency', 'Emergency ambulance response times across channel', 'Sanitation'],
    digitalPenetration: 'Medium-High',
    groundMobilisationAnchor: 'Ferry commuter welfare groups & youth digital community creators',
    topCentres: [
      { name: 'Likoni Primary School', voters: 8877, stations: 13 },
      { name: 'Jesus Celebration Center (Soweto)', voters: 3502, stations: 6 },
      { name: 'Likoni Secondary School', voters: 894, stations: 2 }
    ]
  },
  {
    wardName: 'Timbwani',
    cawCode: '0025',
    constituencyCode: '005',
    subCounty: 'Likoni',
    registeredVoters2022: 33952,
    pollingStationsCount: 52,
    estimated2027Target: 38200,
    turnout2022Pct: 31.4,
    strategicPriority: 'High-Opportunity Growth',
    keyDemographics: 'Fastest growing residential zone in Likoni, mixed coastal and upcountry families',
    priorityLocalIssues: ['Secondary bursaries distribution', 'Pothole repairs on interior roads', 'Youth vocational center'],
    digitalPenetration: 'Medium',
    groundMobilisationAnchor: 'Community school PTA networks & Likoni youth football leagues',
    topCentres: [
      { name: 'Ushindi Baptist Primary School', voters: 8592, stations: 13 },
      { name: 'Mrima Primary School', voters: 7985, stations: 12 },
      { name: 'Licodep', voters: 6834, stations: 10 },
      { name: 'Consolata Nursery School', voters: 4574, stations: 7 }
    ]
  },

  // --- MVITA (Code: 006) - 5 Wards, 118,699 Voters ---
  {
    wardName: 'Mji wa Kale/Makadara',
    cawCode: '0026',
    constituencyCode: '006',
    subCounty: 'Mvita',
    registeredVoters2022: 22341,
    pollingStationsCount: 37,
    estimated2027Target: 25130,
    turnout2022Pct: 38.0,
    strategicPriority: 'Critical Fortress',
    keyDemographics: 'Historic Old Town Swahili, Arab, and Asian heritage community, family merchant businesses',
    priorityLocalIssues: ['UNESCO buffer zone preservation', 'Tourism security & narrow alley waste collection', 'Substance abuse rehab'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Old Town Heritage Society & family merchant lineage networks',
    topCentres: [
      { name: 'Tijara Gardens', voters: 2850, stations: 5 },
      { name: 'Sonara Social Hall', voters: 2814, stations: 5 },
      { name: 'Kaderbhoy Old Town Dispensary', voters: 2474, stations: 4 },
      { name: 'Fort Jesus Museum', voters: 2377, stations: 4 },
      { name: 'Star of the Sea Primary School', voters: 2255, stations: 4 }
    ]
  },
  {
    wardName: 'Tudor',
    cawCode: '0027',
    constituencyCode: '006',
    subCounty: 'Mvita',
    registeredVoters2022: 22926,
    pollingStationsCount: 37,
    estimated2027Target: 25790,
    turnout2022Pct: 35.4,
    strategicPriority: 'High-Opportunity Growth',
    keyDemographics: 'Technical University of Mombasa (TUM) academic staff, students, medical workers',
    priorityLocalIssues: ['Student affordable boarding regulation', 'Tudor creek mangrove environmental protection', 'Water billing transparency'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'TUM student governance bodies & Tudor Creek environmental community groups',
    topCentres: [
      { name: 'Tudor Village Hall', voters: 3971, stations: 6 },
      { name: 'Municipal Inspectorate Offices', voters: 3244, stations: 5 },
      { name: 'St. Augustine Primary School', voters: 3013, stations: 5 },
      { name: 'Khamisi Secondary School', voters: 2651, stations: 4 }
    ]
  },
  {
    wardName: 'Tononoka',
    cawCode: '0028',
    constituencyCode: '006',
    subCounty: 'Mvita',
    registeredVoters2022: 23379,
    pollingStationsCount: 40,
    estimated2027Target: 26300,
    turnout2022Pct: 36.7,
    strategicPriority: 'Critical Fortress',
    keyDemographics: 'Assembly epicenter of Mombasa (Tononoka Grounds), multi-cultural trading estates, civil servants',
    priorityLocalIssues: ['Tononoka Social Hall and sports grounds revitalisation', 'Drainage during monsoons', 'Parking fee automation'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Tononoka youth leaders council & coastal football tournament organisers',
    topCentres: [
      { name: 'Tononoka Social Hall', voters: 4631, stations: 7 },
      { name: 'Mwembe-Tayari Public Health Clinic', voters: 3388, stations: 5 },
      { name: 'Municipal Stadium', voters: 2888, stations: 5 },
      { name: 'Kumbar Primary School', voters: 2636, stations: 4 },
      { name: 'Buxton Estate Hall', voters: 1407, stations: 3 }
    ]
  },
  {
    wardName: 'Shimanzi/Ganjoni',
    cawCode: '0029',
    constituencyCode: '006',
    subCounty: 'Mvita',
    registeredVoters2022: 18556,
    pollingStationsCount: 36,
    estimated2027Target: 20880,
    turnout2022Pct: 34.2,
    strategicPriority: 'High-Opportunity Growth',
    keyDemographics: 'Heavy freight corridor, Kenya Railways/KPA logistics staff, customs brokers, corporate offices',
    priorityLocalIssues: ['Restoring logistics business volume to Mombasa Island', 'Street paving & lighting', 'Public parking regulation'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'KIFWA coastal members & dockers circles',
    topCentres: [
      { name: 'Sacred Heart Primary School', voters: 3672, stations: 6 },
      { name: 'Makupa Primary School', voters: 2704, stations: 4 },
      { name: 'Makande KPA Nursery School', voters: 1854, stations: 3 },
      { name: 'KPA Hall High Level', voters: 1767, stations: 3 }
    ]
  },
  {
    wardName: 'Majengo',
    cawCode: '0030',
    constituencyCode: '006',
    subCounty: 'Mvita',
    registeredVoters2022: 31772,
    pollingStationsCount: 51,
    estimated2027Target: 35740,
    turnout2022Pct: 34.3,
    strategicPriority: 'Critical Fortress',
    keyDemographics: 'High-density urban commercial heartland, garage and spare parts mechanics, open markets',
    priorityLocalIssues: ['Buxton housing relocation benefits & tenant ownership', 'Mechanic working sheds', 'Youth policing reforms'],
    digitalPenetration: 'High',
    groundMobilisationAnchor: 'Majengo artisans association, Buxton resident network & coastal music creators',
    topCentres: [
      { name: 'Majengo Village Hall', voters: 4676, stations: 7 },
      { name: 'Mvita Primary School', voters: 4573, stations: 7 },
      { name: 'Mwembe-Tayari Public Health Dept', voters: 3738, stations: 6 },
      { name: 'Sakina Hall', voters: 3325, stations: 5 },
      { name: 'Patel Samaj Hall', voters: 2983, stations: 5 }
    ]
  }
];
