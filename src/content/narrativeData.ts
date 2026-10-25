import { MessageVariant, NarrativePillar } from '../types/strategy.ts';

export const umbrellaNarrative = {
  title: 'Mombasa Inastahili Uongozi wa Kiuchumi na Kazi Halisi (Mombasa Deserves Economic Leadership and Real Jobs)',
  headline: 'Moving from Decades of Political Spectacle to Proven Executive Delivery',
  subheadline: 'Mombasa is Kenya\'s oldest international gateway, yet its families endure water scarcity, decaying markets, and crippling youth joblessness. Suleiman Shahbal brings proven global business credibility, large-scale capital mobilization, and unyielding commitment to build an inclusive coastal economic engine.',
  context: 'The narrative decisively shifts the election from ethnic alignments and party patronage toward measurable competence, capital attraction, industrial job creation, and municipal dignity.'
};

export const narrativePillars: NarrativePillar[] = [
  {
    title: 'Pillar 1: Revitalising the Maritime Gateway & Blue Economy',
    swahiliLead: 'Kufufua Uchumi wa Bandari, Bahari na Usafirishaji',
    coreArgument: 'Mombasa\'s economy is inextricably tied to the Indian Ocean and the Northern Corridor. Instead of complaining about national directives, a visionary governor actively builds Special Economic Zones, creates direct port value-addition, and modernises coastal fisheries.',
    verifiedProofPoints: [
      {
        point: 'Shahbal served as Board Chairman of TradeMark Africa, steering multi-million dollar regional trade facilitation, border post modernization, and maritime corridor efficiency.',
        sourceId: 'trademark-africa-chairmanship'
      },
      {
        point: 'Pioneered the historic DP World Special Economic Zone investment agreement in Jomvu constituency, structured to anchor container logistics and local manufacturing.',
        sourceId: 'jomvu-sez-dpworld-2024'
      },
      {
        point: 'Serves in the East African Legislative Assembly (EALA), actively advocating for cross-border trade liberalization and non-tariff barrier removal benefiting Mombasa businesses.',
        sourceId: 'eala-shahbal-record'
      }
    ],
    targetAudiences: ['Port workers', 'Clearing and forwarding agents', 'Trucking operators', 'Jomvu/Changamwe residents', 'Artisanal fisherfolk']
  },
  {
    title: 'Pillar 2: Proven Urban Renewal, Clean Water & Dignified Housing',
    swahiliLead: 'Makazi ya Kisasa, Maji Safi na Miundombinu ya Kudumu',
    coreArgument: 'You cannot lead modern urban transformation without proven engineering and project finance capability. Decades of municipal inertia left council estates crumbling; Shahbal demonstrated how to turn squalor into titled homeowner equity while keeping original families in place.',
    verifiedProofPoints: [
      {
        point: 'Delivered Buxton Point Phase 1, replacing crumbling 1950s municipal blocks with over 1,800 modern, green, master-planned affordable apartments with school, pool, and sports amenities.',
        sourceId: 'buxton-point-project'
      },
      {
        point: 'Established a verified relocation and priority re-housing formula for original municipal tenant families with structured tenant-purchase mortgages.',
        sourceId: 'buxton-point-project'
      },
      {
        point: 'County Integrated Development Plan (CIDP 2023-2027) identifies urban renewal and stormwater drainage as Mombasa\'s top unfinished infrastructure vulnerabilities.',
        sourceId: 'mombasa-cidp-2023-2027'
      }
    ],
    targetAudiences: ['Estate residents', 'Urban tenants', 'Middle-class homeowners', 'Environmental advocates', 'Likoni and Kisauni families']
  },
  {
    title: 'Pillar 3: Trader Dignity, Single Permit & Enterprise Capital',
    swahiliLead: 'Heshima ya Mfanyabiashara Ndogondogo na Leseni Moja',
    coreArgument: 'Informal traders generate the daily heartbeat of Mombasa. The county government should serve as their partner and protector, not a predatory extortion cartel demanding five overlapping daily permits.',
    verifiedProofPoints: [
      {
        point: 'Controller of Budget reports show Mombasa County collects substantial own-source revenue from trade licenses and market fees, yet market infrastructure (toilets, roofing, drainage) receives minimal capital allocation.',
        sourceId: 'cob-mombasa-2023-24'
      },
      {
        point: 'Kongowea wholesale market hosts over 10,000 daily traders and remains East Africa\'s largest fresh produce hub, yet suffers recurrent hygiene and flooding shutdowns during rains.',
        sourceId: 'knbs-census-2019'
      }
    ],
    targetAudiences: ['Kongowea traders', 'Boda boda and tuk-tuk saccos', 'Mama mbogas', 'Majengo garage artisans', 'SME retail owners']
  },
  {
    title: 'Pillar 4: Healthcare Automation, Merit Bursaries & Youth Tech',
    swahiliLead: 'Afya ya Uwazi, Bursary ya Kidijitali na Ustawi wa Vijana',
    coreArgument: 'Public money must directly benefit the poorest citizens without political middlemen. We will eliminate paper bursary corruption through transparent automated digital distribution and end medicine stockouts at Coast General.',
    verifiedProofPoints: [
      {
        point: 'Mombasa County total population reached 1.2M in the 2019 KNBS Census, with 60% under age 30, requiring massive scaling of public health and educational subsidies.',
        sourceId: 'knbs-census-2019'
      },
      {
        point: 'Controller of Budget reports highlight persistent medical personnel strikes and supply delays in devolved coastal healthcare facilities due to cash-flow delays.',
        sourceId: 'cob-mombasa-2023-24'
      }
    ],
    targetAudiences: ['University students', 'Parents with school-going children', 'Healthcare professionals', 'Youth in informal settlements']
  }
];

export const messageVariants: MessageVariant[] = [
  {
    audience: 'Youth & First-Time Voters',
    hook: 'Tumechoka na ahadi hewa—tunataka kazi halisi na mtaji (Tired of hot air promises; we need real jobs and capital).',
    elevatorPitch: 'Shahbal didn\'t get rich from government tenders; he built international banks, energy companies, and housing projects. He knows how to create real jobs for youth in tech, the port, and logistics.',
    keyProof: 'Buxton Point employed over 3,000 local youth directly in construction, masonry, electrical wiring, and plumbing.'
  },
  {
    audience: 'Market Women & Mama Mbogas',
    hook: 'Heshima kazini: Leseni moja, usalama, na maji masokoni (Dignity at work: One license, security, and clean market water).',
    elevatorPitch: 'No mother should have to dodge county askaris or stand in filthy mud to sell vegetables. Shahbal will deliver one affordable annual digital license, clean toilets, and free nursery centers inside markets.',
    keyProof: 'Documented commitment in the Mombasa SME Charter with Kongowea and open-air market committees.'
  },
  {
    audience: 'Port & Maritime Logistics Workers',
    hook: 'Bandari haitauzwa wala kuhamishwa—itapanuliwa na kuinua wazawa (The Port will not be sold or relocated—it will be expanded to uplift locals).',
    elevatorPitch: 'As former TradeMark Africa Chairman and EALA leader, Shahbal has the global networks and legal stature to ensure the Northern Corridor enriches Mombasa workers rather than dry ports upcountry.',
    keyProof: 'Demonstrated track record chairing TradeMark Africa trade corridor dwell-time reduction programs.'
  },
  {
    audience: 'Upcountry-Origin Residents & Business Owners',
    hook: 'Mombasa Moja: Usalama, haki ya biashara, na uwakilishi sawa (One Mombasa: Security, fair enterprise, and equal representation).',
    elevatorPitch: 'Your investment and home in Mombasa are protected by law. Shahbal represents cosmopolitan, corporate governance that judges residents by their contribution, never by ethnic origin or religion.',
    keyProof: 'Decades of multi-ethnic leadership across banking and national enterprise without a single tribal controversy.'
  }
];

export const dosAndDonts = {
  dos: [
    'DO focus relentlessly on economic competence, job creation, capital investment, and verified business delivery.',
    'DO speak respectful, fluent coastal Swahili and address community elders with appropriate cultural etiquette.',
    'DO acknowledge that past administrations accomplished certain foundational steps (e.g. initial county structures) before pivoting to the urgent need for economic acceleration.',
    'DO emphasize unity across all 6 sub-counties, bridging the historical Island vs Mainland divide.',
    'DO provide tangible receipts: Cite real housing completions, trade data, and verifiable business credentials.'
  ],
  donts: [
    'DO NOT engage in personal attacks, insults, or character assassination against Governor Abdulswamad Nassir or rival candidates.',
    'DO NOT make empty promises of free handouts or unbudgeted cash distributions—ground every proposal in economic viability.',
    'DO NOT exploit religious, ethnic, or indigenous vs non-indigenous tensions; maintain uncompromising national cohesion.',
    'DO NOT use aggressive or defensive rhetoric when responding to online criticism; always respond with verified data and composure.',
    'DO NOT claim official political party machinery or presidential endorsements before IEBC formalization.'
  ]
};
