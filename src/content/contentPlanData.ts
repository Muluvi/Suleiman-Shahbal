import { CalendarWeekItem, ContentPillar, PlatformStrategy, SwahiliSlogan } from '../types/strategy.ts';

export const platformStrategies: PlatformStrategy[] = [
  {
    platform: 'WhatsApp Channels & Community Groups',
    audienceFocus: 'Ward-level residents, Mama Mbogas, Boda SACCOs, family elders, church and mosque committees',
    mombasaTone: 'Intimate, warm, conversational Coastal Swahili (Sanifu and Kimvita nuances), authentic voice notes, respectful community elder address.',
    contentFormats: [
      '60-second direct Swahili audio voice notes from Shahbal on specific ward issues',
      'High-contrast infographic one-pagers summarizing policy commitments',
      'Ward-specific digital flyers for upcoming community barazas and listening tours',
      'Fact-check warning cards for viral election rumors'
    ],
    cadence: 'Daily micro-updates; 2 high-priority voice memos per week; immediate rapid-response debunking broadcasts.',
    strategicObjective: 'Direct peer-to-peer mobilization with zero algorithmic gatekeeping; highest conversion vehicle for voter registration and GOTV turnout.',
    riskMitigation: 'Closed broadcast channels for official messages to prevent spam; trained community moderators adhering to anti-hate speech protocols.'
  },
  {
    platform: 'TikTok',
    audienceFocus: 'Gen-Z (18–24), college students at TUM and Mombasa campuses, young creatives, urban youth in Kisauni and Likoni',
    mombasaTone: 'Energetic, punchy, trend-aware, self-deprecating yet substantive, street Swahili ("Sheng ya pwani"), visual evidence.',
    contentFormats: [
      'Unscripted behind-the-scenes clips of candidate visiting workshops, construction yards, and ports',
      'Trend-jacking transitions (e.g. "What political speeches promised" vs "What Shahbal actually built in Buxton")',
      'Micro-podcasts tackling youth questions directly without teleprompter',
      'Duets and stitch collaborations with reputable coastal satirists and comedians'
    ],
    cadence: '4–6 posts weekly; weekly 45-minute live Q&A session with open comments.',
    strategicObjective: 'Humanise the candidate, dismantle the "aloof tycoon" narrative, and channel Gen-Z political energy into voter registration.',
    riskMitigation: 'Zero defensive arguing in comments; pivot trolling into factual video responses with verified source receipts.'
  },
  {
    platform: 'Facebook',
    audienceFocus: 'Voters aged 28–60, small business owners, Kongowea traders, parents, coastal civil servants, teachers',
    mombasaTone: 'Authoritative, civic, community-first, visual photojournalism with detailed narrative captions in accessible bilingual format.',
    contentFormats: [
      'High-resolution photo essays documenting community town halls and infrastructure inspections',
      'Facebook Live broadcasts of major campaign policy announcements and town halls',
      'Longer-form video explainers (3–5 minutes) on county budget implementation, healthcare, and water solutions',
      'Moderated discussion threads on specific sub-county challenges'
    ],
    cadence: '1–2 comprehensive posts daily; weekly long-form policy address.',
    strategicObjective: 'Build broad civic trust, articulate detailed policy proposals, and anchor cross-generational household persuasion.',
    riskMitigation: 'Strict comment filtering for tribal insults, coordinated bot swarms, or defamatory claims.'
  },
  {
    platform: 'X (formerly Twitter)',
    audienceFocus: 'Journalists, political commentators, civil society analysts, diaspora professionals, corporate and maritime executives',
    mombasaTone: 'Sharp, data-driven, executive, policy-dense, rapid and assertive on governance and devolution accountability.',
    contentFormats: [
      'Analytical threads with charts breaking down Mombasa County revenue, pending bills, and economic growth',
      'Real-time statements on national economic decisions affecting Mombasa (port logistics, SGR freight tariffs)',
      'Bi-weekly X Spaces with maritime and urban planning experts',
      'Instant rapid-response fact-checks and press releases'
    ],
    cadence: '3–5 tweets daily; bi-weekly X Spaces; breaking news engagement within 30 minutes.',
    strategicObjective: 'Shape elite media consensus, control the narrative in Nairobi newsrooms, and position Shahbal as the unrivaled policy authority.',
    riskMitigation: 'Avoid engaging partisan trolls; maintain unshakeable poise, data citations, and statesmanship.'
  },
  {
    platform: 'Instagram',
    audienceFocus: 'Urban professionals, coastal hospitality operators, lifestyle creatives, youth aged 22–38',
    mombasaTone: 'Visually refined, inspirational, modern coastal aesthetic, celebrating Mombasa\'s maritime beauty, culture, and economic potential.',
    contentFormats: [
      'Carousel graphics summarizing manifestos in 5 clean slides',
      'High-production documentary Reels highlighting coastal artisans, fishermen, and tech entrepreneurs',
      'Interactive Stories with polls, quizzes on Mombasa history, and AMA question stickers',
      'Highlight reels of key milestones, community projects, and public engagements'
    ],
    cadence: 'Daily Stories; 4–5 feed carousel posts/Reels per week.',
    strategicObjective: 'Cement an aspirational, world-class image of Mombasa under transformational executive leadership.',
    riskMitigation: 'Strict visual standards; avoid low-resolution or rushed graphics.'
  },
  {
    platform: 'YouTube',
    audienceFocus: 'Diaspora voters, policy researchers, engaged voters seeking long-form substance, television news consumers',
    mombasaTone: 'Documentary-grade, deep, serious, visionary, broadcast quality with crystal clear audio and bilingual subtitles.',
    contentFormats: [
      '10-minute mini-documentaries: "The Mombasa Blueprint" (Port, Housing, Water, Blue Economy)',
      'Full unedited town hall recordings for radical public transparency',
      'YouTube Shorts repurposed from the most impactful moments in town hall debates',
      'In-depth interviews with independent coastal policy analysts'
    ],
    cadence: '1 high-production mini-documentary every fortnight; weekly town hall uploads; 5 Shorts weekly.',
    strategicObjective: 'Serve as the campaign\'s permanent, search-optimized video archive and policy repository.',
    riskMitigation: 'Professional captioning and chapters; pin verified source citations in top comments.'
  }
];

export const contentPillars: ContentPillar[] = [
  {
    id: 'pillar-economic-engine',
    title: 'The Blue Economy & Port Transformation',
    swahiliHook: 'Uchumi wa Bahari na Bandari ya Wananchi',
    description: 'Transforming Mombasa from a passive maritime transit point into East Africa\'s industrial manufacturing, logistics, and blue economy powerhouse.',
    keyThemes: [
      'Reclaiming value addition in container clearing and freight forwarding',
      'Developing the Jomvu Special Economic Zone (SEZ) to create 15,000 direct jobs',
      'Modernising coastal fish landing sites with cold chain storage in Likoni, Tudor, and Old Town',
      'Revitalising cruise ship tourism and international charter flights to Moi International Airport'
    ],
    formatExample: 'Mini-documentary comparing port city models (Dubai, Durban, Singapore) with Mombasa\'s untapped potential, featuring Shahbal on the quayside.'
  },
  {
    id: 'pillar-urban-renewal',
    title: 'Modern Urban Living & Dignified Housing',
    swahiliHook: 'Makazi ya Kisasa na Mazingira Safi',
    description: 'Demonstrating proven execution in replacing decaying municipal slums with modern, affordable, well-planned residential communities without displacing residents.',
    keyThemes: [
      'The Buxton Point precedent: Transforming dilapidated council housing into titled homeowner equity',
      'Clean water revolution: Ending water bowser cartels through desalination and bulk pipeline management',
      'Stormwater drainage masterplan to permanently end seasonal monsoon flooding in Bamburi, Chaani, and Likoni',
      'Decentralised waste-to-energy transformation for Mwakirunge dumpsite'
    ],
    formatExample: 'Video walk-through of Buxton Point with original municipal tenant families who now own titled modern apartments, contrasting with decades of council neglect.'
  },
  {
    id: 'pillar-sme-trader-dignity',
    title: 'Enterprise, Market Dignity & Unified Licensing',
    swahiliHook: 'Kazi, Biashara na Heshima ya Mfanyabiashara',
    description: 'Protecting the mama mboga, boda boda rider, and Kongowea wholesale trader from arbitrary county askari extortion and bureaucratic strangulation.',
    keyThemes: [
      'One Unified Digital Business Permit (replacing 5 overlapping county charges)',
      'Upgrading Kongowea and open-air markets with clean toilets, solar lighting, daycare centers, and cold rooms',
      'Mombasa Youth & Women Enterprise Credit Fund: KES 500M revolving guarantee for micro-traders',
      'Boda boda and tuk-tuk designated operational bays with electric charging stations'
    ],
    formatExample: 'Interactive digital calculator and infographic flyer demonstrating KES 14,000 annual savings per trader under the Unified License.'
  },
  {
    id: 'pillar-human-capital',
    title: 'Transparent Healthcare, Bursaries & Youth Tech',
    swahiliHook: 'Afya Bora, Masomo Bila Ubaguzi na Vipaji vya Vijana',
    description: 'Ensuring that Mombasa\'s human capital thrives through functional public hospitals, 100% merit-based automated student bursaries, and digital creative hubs.',
    keyThemes: [
      'Ending chronic medicine shortages at Coast General and sub-county dispensaries through automated stock tracking',
      'Digital bursary portal: Transparent, published award lists eliminating ward political favoritism',
      'Sub-county digital innovation hubs providing free gig-economy co-working spaces and high-speed fibre',
      'Restoring coastal football, boxing, and performing arts funding to keep youth away from crime and substance abuse'
    ],
    formatExample: 'Live demo of an automated SMS/digital bursary tracking system to contrast with the current paper voucher patronage system.'
  }
];

export const swahiliSlogans: SwahiliSlogan[] = [
  {
    slogan: 'Mombasa Mpya, Kazi Halisi, Uchumi Imara',
    englishTranslation: 'A New Mombasa, Real Jobs, Strong Economy',
    context: 'Core overarching campaign identity emphasizing practical economic delivery over hollow political theater.',
    suggestedHashtags: ['#MombasaMpya', '#KaziHalisi', '#UchumiImara', '#Shahbal2027'],
    tone: 'Economic Delivery'
  },
  {
    slogan: 'Bandari Yetu, Fahari Yetu, Faida Yetu',
    englishTranslation: 'Our Port, Our Pride, Our Benefit',
    context: 'Mobilising port, maritime, and Changamwe/Jomvu logistics workers around reclaiming port economic dividends for local youth.',
    suggestedHashtags: ['#BandariYetuFaidaYetu', '#MombasaMaritimeHub', '#BlueEconomyPwani'],
    tone: 'Community Pride'
  },
  {
    slogan: 'Uongozi Unaopimika kwa Vitendo',
    englishTranslation: 'Leadership Measurable by Tangible Action',
    context: 'Contrasting Shahbal\'s verifiable record of capital mobilization and housing construction against career politicians\' unfulfilled promises.',
    suggestedHashtags: ['#UongoziWaVitendo', '#ShahbalDelivers', '#RekodiInaongea'],
    tone: 'Inspirational'
  },
  {
    slogan: 'Mama Mboga na Boda: Heshima Kazini',
    englishTranslation: 'Market Traders and Boda Operators: Dignity at Work',
    context: 'Informal sector outreach focusing on stopping county askari harassment and introducing single unified permits.',
    suggestedHashtags: ['#HeshimaKazini', '#KongoweaKwanza', '#MamaMbogaMombasa'],
    tone: 'Action Call'
  },
  {
    slogan: 'Maji Bomba, Si Maji ya Mkokoteni',
    englishTranslation: 'Clean Tap Water, Not Water Cartel Handcarts',
    context: 'Addressing Mombasa\'s systemic clean water crisis and cartel profiteering in Likoni, Kisauni, and Changamwe.',
    suggestedHashtags: ['#MajiBombaMombasa', '#MajiNiHaki', '#MombasaCleanWater'],
    tone: 'Action Call'
  }
];

export const calendarWeeks: CalendarWeekItem[] = [
  {
    week: 1,
    phase: 'Phase 1: Grounding & Listening',
    theme: 'The Mombasa Economic Listening Tour: Direct Citizen Voices',
    pillarId: 'pillar-economic-engine',
    platforms: ['WhatsApp', 'TikTok', 'Facebook'],
    deliverables: [
      'Candidate unannounced walk-throughs in Kongowea and Likoni ferry asking traders: "What is choking your enterprise?"',
      'Launch of official campaign WhatsApp Channel with weekly voice memo #01',
      'Audit release: The true state of youth joblessness in Mombasa County'
    ],
    kpiGoal: 'Establish active WhatsApp subscriber base of 15,000; 250,000 organic TikTok views on listening clips.'
  },
  {
    week: 2,
    phase: 'Phase 1: Grounding & Listening',
    theme: 'Water, Drainage and Healthcare: The Unspoken Crisis',
    pillarId: 'pillar-human-capital',
    platforms: ['Facebook', 'X', 'YouTube'],
    deliverables: [
      'Documentary explainer on the water bowser economy: Why families pay 10x more for dirty water',
      'Photo essay on maternal healthcare realities at sub-county clinics',
      'X Space: Devolution at 14: Has healthcare actually improved in Mombasa?'
    ],
    kpiGoal: 'Engage 1,200 participants on X Space; 4,000 comments on Facebook community discussion.'
  },
  {
    week: 3,
    phase: 'Phase 1: Grounding & Listening',
    theme: 'The Youth Generation: Creative Economy & Gig Realities',
    pillarId: 'pillar-sme-trader-dignity',
    platforms: ['TikTok', 'Instagram', 'Discord/WhatsApp'],
    deliverables: [
      'Roundtable with coastal music producers, comedians, and street artists in Majengo and Bamburi',
      'TikTok series: "A Day in the Life of a Mombasa Boda Rider"',
      'Launch of "Mombasa Innovation Challenge" solicitating youth policy ideas'
    ],
    kpiGoal: '500 youth policy submissions; 50,000 Instagram Reel views; 20 creator duets on TikTok.'
  },
  {
    week: 4,
    phase: 'Phase 2: Pillar Rollout',
    theme: 'Pillar 1 Launch: The Blue Economy & Port Transformation Charter',
    pillarId: 'pillar-economic-engine',
    platforms: ['X', 'LinkedIn', 'YouTube', 'Facebook'],
    deliverables: [
      'Release of White Paper: "Reclaiming the Port of Mombasa: A 10-Point Economic Marshall Plan"',
      'Keynote speech at maritime forum in Shimanzi broadcast live across all platforms',
      'Infographics breaking down how the Jomvu SEZ and DP World investment injects KES 12B into the local economy'
    ],
    kpiGoal: 'Top 3 trending topic on X in Kenya; coverage in all major national dailies (Nation, Standard, Star).'
  },
  {
    week: 5,
    phase: 'Phase 2: Pillar Rollout',
    theme: 'Pillar 2 Launch: Urban Renewal, Dignified Housing & Land Rights',
    pillarId: 'pillar-urban-renewal',
    platforms: ['Facebook', 'YouTube', 'WhatsApp'],
    deliverables: [
      'Mini-doc: "The Buxton Story - Beyond the Rhetoric": Tenant testimonials on home ownership',
      'Interactive web map showing planned coastal urban regeneration zones across Changamwe and Likoni',
      'WhatsApp audio memo debunking rival misinformation regarding land alienation'
    ],
    kpiGoal: '30,000 views on Buxton documentary; WhatsApp voice note forwarded to over 500 local groups.'
  },
  {
    week: 6,
    phase: 'Phase 2: Pillar Rollout',
    theme: 'Pillar 3 Launch: The Mama Mboga and Trader Dignity Charter',
    pillarId: 'pillar-sme-trader-dignity',
    platforms: ['WhatsApp', 'Facebook', 'Local Radio'],
    deliverables: [
      'Signing of the Unified Business License pledge in Kongowea with 50 trader association chairpersons',
      'Digital brochure in Swahili: "One Fee, Zero Harassment, 24/7 Security"',
      'Radio talk show simulcast on Baraka FM, Radio Rahma, and Pwani FM'
    ],
    kpiGoal: 'Mobilise 5,000 registered traders into WhatsApp communication networks; 10,000 leaflet downloads.'
  },
  {
    week: 7,
    phase: 'Phase 2: Pillar Rollout',
    theme: 'Pillar 4 Launch: 100% Automated Bursaries & Healthcare Accountability',
    pillarId: 'pillar-human-capital',
    platforms: ['TikTok', 'Instagram', 'Facebook', 'X'],
    deliverables: [
      'Prototype demonstration of the open-source "Mombasa Digital Bursary Portal"',
      'Healthcare plan announcement: Universal emergency medicine supply guarantee for all 30 wards',
      'Campus town hall at Technical University of Mombasa (TUM)'
    ],
    kpiGoal: 'Over 2,500 students in attendance at TUM; 80,000 views on Bursary Portal demo.'
  },
  {
    week: 8,
    phase: 'Phase 3: Community Mobilisation',
    theme: 'Voter Registration Surge: Continuous Registration Activation',
    pillarId: 'pillar-sme-trader-dignity',
    platforms: ['TikTok', 'WhatsApp', 'Instagram'],
    deliverables: [
      'Launch of "Niko Tayari 2027" IEBC polling station finder bot on WhatsApp and web',
      'Campus voter registration caravans across Kisauni, Nyali, and Likoni',
      'TikTok challenge: Young voters sharing their registration confirmation slips with #KuraYanguKaziYangu'
    ],
    kpiGoal: 'Drive 20,000 lookups on polling station verification bot; 5,000 documented first-time registrants.'
  },
  {
    week: 9,
    phase: 'Phase 3: Community Mobilisation',
    theme: 'Sub-County Ward Summits: Changamwe and Jomvu Industrial Heartlands',
    pillarId: 'pillar-economic-engine',
    platforms: ['Facebook Live', 'X', 'WhatsApp'],
    deliverables: [
      'Town hall in Port Reitz with dockers and industrial workers',
      'Jomvu Kuu youth forum on SEZ manufacturing apprenticeship opportunities',
      'Rapid-response fact-check debunking allegations about port privatization'
    ],
    kpiGoal: 'Reach 85,000 voters across Changamwe and Jomvu sub-counties; deploy 10,000 ward WhatsApp messages.'
  },
  {
    week: 10,
    phase: 'Phase 3: Community Mobilisation',
    theme: 'Sub-County Ward Summits: Likoni and Mvita Heritage Focus',
    pillarId: 'pillar-urban-renewal',
    platforms: ['YouTube', 'Facebook', 'Local Radio'],
    deliverables: [
      'Likoni Ferry town hall: The transit crossing, security, and land title deeds blueprint',
      'Old Town (Mji wa Kale) cultural heritage evening with elders and tourism operators',
      'Broadcast of candidate address to Mombasa Business Community Council'
    ],
    kpiGoal: 'Achieve 70%+ positive sentiment in Mvita and Likoni targeted digital listening panels.'
  },
  {
    week: 11,
    phase: 'Phase 4: GOTV & Turnout Engine',
    theme: 'War Room Mobilisation: The 30-Ward Captains Synchronisation',
    pillarId: 'pillar-sme-trader-dignity',
    platforms: ['WhatsApp Groups', 'SMS Broadcasts', 'Facebook'],
    deliverables: [
      'Deployment of the 30 Ward Digital Command Desks with real-time incident logging',
      'Final candidate direct video address: "Why I Am Prepared to Serve You from Day One"',
      'Step-by-step voting day guide: Polling station rules, opening hours, transport pooling'
    ],
    kpiGoal: '100% onboarding of 30 ward digital captains; verified communication link with 2,500 polling station monitors.'
  },
  {
    week: 12,
    phase: 'Phase 4: GOTV & Turnout Engine',
    theme: 'Polling Week: Turnout Protection, Anti-Apathy & Final Push',
    pillarId: 'pillar-economic-engine',
    platforms: ['WhatsApp', 'TikTok', 'Facebook', 'X', 'SMS'],
    deliverables: [
      'Continuous 24-hour rapid response team debunking last-minute disinformation, fake letters, or panic rumors',
      'Morning WhatsApp voice memo at 05:30: "Amka Upige Kura kwa Mustakabali wa Mombasa"',
      'Live turnout monitoring dashboard updates across all 6 sub-counties',
      'Legal response hotline publication for voter protection'
    ],
    kpiGoal: 'Increase Mombasa voter turnout from 2022\'s historic low of 34% to over 65% across all 30 wards.'
  }
];

export const creatorStrategy = {
  philosophy: 'Authentic grassroots creators over disconnected celebrity endorsements. Partner with credible coastal voices who live the day-to-day economic reality of Mombasa.',
  creatorTiers: [
    {
      tier: 'Tier 1: Coastal Cultural & Comedic Satirists',
      reach: '100k–500k followers',
      role: 'Translating complex economic and county budget concepts into viral, relatable Swahili sketches and commentary.',
      deliverable: 'Weekly satirical sketch contrasting old politics with real delivery; hosting TikTok live streams.'
    },
    {
      tier: 'Tier 2: Grassroots Ward Advocates & Boda/Market Influencers',
      reach: '5k–25k hyper-local followers',
      role: 'Direct community trust anchors: Kongowea market leaders, TUM student union presidents, BMU chairpersons.',
      deliverable: 'Authentic WhatsApp audio updates, Facebook live testimonials, ward listening tour co-hosts.'
    },
    {
      tier: 'Tier 3: Policy, Maritime & Devolution Analysts',
      reach: '10k–50k professional followers',
      role: 'Objective verification: Maritime lawyers, university economists, certified public accountants examining the candidate\'s blueprints.',
      deliverable: 'LinkedIn white papers, X Spaces hosting, national television interview analysis.'
    }
  ],
  guardrails: [
    'No paid astroturfing: All creators must genuinely disclose partnership or participate as voluntary civic endorsers.',
    'Strict ban on tribal or defamatory attacks against rivals.',
    'Pre-cleared factual receipts: Creators are supplied with verified Controller of Budget and IEBC statistics to prevent spreading accidental errors.'
  ]
};
