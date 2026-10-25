import { VoterSegment } from '../types/strategy.ts';

export const voterSegmentsList: VoterSegment[] = [
  {
    id: 'youth-creative-boda',
    title: 'Youth, Creatives & Urban Transport Operators',
    subTitle: 'Ages 18–35 in Boda Boda, Tuk-Tuk, Street Art, Digital Content & Casual Labour',
    estimatedVoterShare: '~38% of registered electorate (and >60% of potential new registrants)',
    demographicInsight: 'Concentrated heavily in high-density wards across Kisauni (Mjambere, Bamburi, Mtopanga), Likoni (Bofu, Timbwani), and Changamwe (Chaani). They face severe underemployment, arbitrary county enforcement arrest fees, lack of capital for tools/motorcycles, and fatigue with traditional political rhetoric.',
    keyFrustrations: [
      'Harassment and arbitrary daily impound fees by county askaris',
      'High cost of fuel, motorcycle lease debt, and lack of affordable charging infrastructure for electric tuk-tuks',
      'Unfulfilled promises of county enterprise funds and sports talent monetization'
    ],
    coreMessage: 'From hand-to-mouth hustling to structured economic ownership. Suleiman Shahbal delivers real capital, transparent permits, and port-linked industrial jobs—not hand-outs or empty slogans.',
    primaryChannels: ['TikTok short-form video', 'Instagram Reels', 'WhatsApp Boda/Tuk-Tuk stage groups', 'Local coastal DJ mixes & football tournament activations'],
    mobilisationTactics: [
      'Direct peer-to-peer mobilization through stage chairmen and SACCO youth captains',
      'Digital "Stage-by-Stage" video town halls debunking false rumors about licensing',
      'Pre-voter registration drives at football tournaments and music showcases with live voter status verification bots'
    ],
    conversionFunnel: {
      awareness: 'Viral TikToks showing candidate inspecting actual fabrication yards and speaking candid Swahili on youth enterprise barriers.',
      registration: 'Ward-level youth voter registration brigades offering free digital ID photocopies and instant polling station lookup.',
      persuasion: 'Concrete contract pledge: Abolish punitive daily impound fines and establish the KES 500M Mombasa Youth Enterprise Credit Guarantee.',
      turnout: 'Transport pooling and coordinated WhatsApp reminder cascades at 05:30 on polling day.'
    },
    sources: ['iebc-voters-2022', 'knbs-census-2019', 'mombasa-cidp-2023-2027']
  },
  {
    id: 'women-chamas-market-vendors',
    title: 'Women Entrepreneurs, Table-Banking Chamas & Market Vendors',
    subTitle: 'Mama Mbogas, Wholesale Traders, Healthcare Advocates & Community Matriarchs',
    estimatedVoterShare: '~51% of actual 2022 turnout in Mombasa County',
    demographicInsight: 'The bedrock of community resilience and household survival. They run stalls in Kongowea, Mackinnon (Marikiti), Likoni, and Majengo. Highly structured through informal savings chamas, church women guilds, and Muslim women welfare leagues. They evaluate candidates on dignity, cost of living, maternal healthcare, and child bursaries.',
    keyFrustrations: [
      'Filthy market sanitation conditions and lack of clean running water or crèches at Kongowea and open markets',
      'Rampant delays and cronyism in county education bursary disbursement for secondary school fees',
      'Maternal clinics running out of basic commodities and life-saving delivery medication at Coast General and sub-county hospitals'
    ],
    coreMessage: 'Dignity for the woman who feeds Mombasa. Clean, sheltered markets, zero-harassment single trade permits, 100% automated school bursaries, and fully stocked maternal dispensaries in every ward.',
    primaryChannels: ['WhatsApp voice notes in Swahili', 'Facebook Community Groups', 'Local coastal radio morning shows (Baraka FM, Radio Rahma, Pilipili FM)', 'Chama weekend in-person barazas'],
    mobilisationTactics: [
      'Recruitment of 300 trusted Chama Ambassadors (10 per ward) equipped with micro-audio campaign briefing packs',
      'Digital town halls on Mama Mboga dignity with direct Q&A on single business license reforms',
      'Sunday church mothers union visits and Friday Madrassa women committee engagements'
    ],
    conversionFunnel: {
      awareness: 'Authentic 90-second Swahili video series highlighting real market women describing daily cess headaches and the solution.',
      registration: 'Chama-based voter audit: identifying unregistered mothers and daughters in weekly group meetings.',
      persuasion: 'Shahbal\'s verifiable business and housing record (Buxton nursery schools, clean estate design, and commercial viability).',
      turnout: 'Early morning "Amka Upige Kura" Chama roll-call at 06:00 on voting day with elder transport assistance.'
    },
    sources: ['cob-mombasa-2023-24', 'knbs-census-2019', 'iebc-voters-2022']
  },
  {
    id: 'informal-traders-smes',
    title: 'Informal Sector Traders, Jua Kali Artisans & Retailers',
    subTitle: 'Kongowea Wholesale Dealers, Mitumba Sellers, Hardware Merchants & Artisans',
    estimatedVoterShare: '~22% of active commercial electorate',
    demographicInsight: 'Operating across Kongowea Market (the largest fresh food market in East Africa), Mwembe Tayari, Majengo garages, and Likoni stalls. Highly organized into trade associations. They care intensely about single unified licensing, municipal service delivery (garbage, drainage), and protection from arbitrary evictions.',
    keyFrustrations: [
      'Multiple overlapping county fees (waste fee, parking fee, loading fee, single business permit, health inspection fee)',
      'Flooding and uncollected garbage rotting outside stalls during coastal monsoon seasons',
      'Unfair competition from un-regulated external import dumping without local retail safeguards'
    ],
    coreMessage: 'One unified license, zero corruption. Transform Mombasa markets into 24-hour modern commerce engines with modern cold storage, clean toilets, and paved walkways.',
    primaryChannels: ['WhatsApp Traders Broadcast Lists', 'Direct engagement with Market Committee Executives', 'Facebook Live briefings from markets', 'Local business podcasts'],
    mobilisationTactics: [
      'Signing of a binding Mombasa SME Charter with Kongowea and Mwembe Tayari executive committees',
      'Digital dashboard demonstrating revenue leakages and how a unified digital billing system saves KES 14,000 per stall annually',
      'Ward-level market captain network'
    ],
    conversionFunnel: {
      awareness: 'Interactive digital calculator showing traders how much they currently lose to overlapping county fees vs unified digital license.',
      registration: 'On-site market voter verification tables during midday trading lulls.',
      persuasion: 'Shahbal\'s demonstrated private sector track record in structuring large-scale capital and commercial infrastructure.',
      turnout: 'Staggered voting shifts coordinated with stall partners to guarantee 100% participation without shutting down daily income.'
    },
    sources: ['mombasa-cidp-2023-2027', 'cob-mombasa-2023-24']
  },
  {
    id: 'port-logistics-maritime',
    title: 'Port, Logistics, Maritime & Transport Workers',
    subTitle: 'Dock Workers Union, Clearing & Forwarding Agents, Truck Drivers, CFS Technicians',
    estimatedVoterShare: '~16% of direct electorate (with ~35% indirect economic dependency)',
    demographicInsight: 'Concentrated heavily in Changamwe, Jomvu, Mvita (Shimanzi), and Likoni. Highly unionized, politically sophisticated, and protective of Mombasa\'s status as East Africa\'s undisputed maritime gateway. Traumatized by past executive directives that diverted cargo haulage to the Naivasha dry port.',
    keyFrustrations: [
      'Decentralization of cargo clearance that drained Mombasa\'s warehousing and clearing economy',
      'Casualization of dock labour and inadequate worker safety protections',
      'Traffic gridlock and poor terminal logistics on the Northern Corridor access routes'
    ],
    coreMessage: 'The Port of Mombasa must benefit the people of Mombasa first. Shahbal\'s international trade expertise (TradeMark Africa leadership, EALA trade committees, DP World industrial partnerships) will expand maritime throughput, revitalize local CFSs, and create 30,000 new maritime logistics jobs.',
    primaryChannels: ['LinkedIn long-form policy briefs', 'X (Twitter) policy spaces', 'Dock Workers WhatsApp forums', 'Specialized maritime trade roundtables'],
    mobilisationTactics: [
      'Direct policy summits with KIFWA (clearing agents), KTA (transporters), and Dock Workers Union delegates',
      'White paper release on "Mombasa Maritime Hub 2035: Reclaiming Local Value"',
      'Peer-to-peer mobilization through shift supervisors and logistics engineers'
    ],
    conversionFunnel: {
      awareness: 'Executive video series on Shahbal\'s work reducing Northern Corridor dwell times and defending coastal trade.',
      registration: 'Union shift voter registration drives at port access gates and CFS lounges.',
      persuasion: 'Clear policy contrast: Showing how non-business county politicians failed to counter national maritime cargo diversion.',
      turnout: 'Union transport shuttles and coordinated vote shifts around port vessel discharge rosters.'
    },
    sources: ['trademark-africa-chairmanship', 'jomvu-sez-dpworld-2024', 'eala-shahbal-record']
  },
  {
    id: 'coastal-swahili-indigenous',
    title: 'Coastal, Swahili, Mijikenda & Historical Resident Communities',
    subTitle: 'Heritage Custodians, Fisherfolk, Kaya Elders, Coastal Land Rights Holders',
    estimatedVoterShare: '~32% of county electorate',
    demographicInsight: 'Spanning Old Town (Mvita), Kisauni historical villages, Likoni settlements, and Jomvu clans. Deep historical memory of land alienation, economic marginalization, cultural dilution, and unaddressed squatter tenure. Highly influenced by community elders, religious leadership, and cultural societies.',
    keyFrustrations: [
      'Unresolved squatter status and slow issuance of verified freehold title deeds',
      'Neglect of Swahili cultural heritage, historical architecture decay, and coastal language pride',
      'Modern developments displacing traditional families without structured equity or local ownership'
    ],
    coreMessage: 'Preserving our coastal heritage while creating 21st-century prosperity. Shahbal\'s model ensures local community ownership, ancestral land adjudication, and deep investment in cultural tourism and blue economy fisheries.',
    primaryChannels: ['Swahili language audio podcasts', 'Community barazas', 'Local radio (Radio Salaam, Radio Rahma, Pwani FM)', 'Mosque and cultural elder councils'],
    mobilisationTactics: [
      'Endorsement from respected coastal cultural scholars, BMU leaders, and heritage trusts',
      'Swahili poetic campaign storytelling (mashairi, taarab cultural soundbites) highlighting coastal pride and resilience',
      'In-person consultative barazas in Mji wa Kale, Mtongwe, and Jomvu Kuu'
    ],
    conversionFunnel: {
      awareness: 'High-production Swahili documentary series honoring Mombasa\'s 800-year maritime civilization and Shahbal\'s lifelong roots.',
      registration: 'Elders council mobilizing family houses and clan youth across ancestral wards.',
      persuasion: 'Documented proof: Buxton Point priority resettlement model for original municipal tenants with modern titled apartments.',
      turnout: 'Family head mobilization and early morning community group voting after morning prayers.'
    },
    sources: ['buxton-point-project', 'knbs-census-2019']
  },
  {
    id: 'upcountry-origin-residents',
    title: 'Upcountry-Origin Residents & Professional Settlers',
    subTitle: 'Kikuyu, Luo, Luhya, Kamba, Kisii Communities in Business, Teaching, Banking & Real Estate',
    estimatedVoterShare: '~30% of total registered voters in Mombasa',
    demographicInsight: 'Found prominently across Changamwe, Nyali (Kongowea, Kadzandani), Likoni (Timbwani), and Jomvu (Mikindani). They drive substantial retail, manufacturing, logistics, civil service, and artisan businesses. Their primary political priority is security of life and property, non-discriminatory business licensing, educational quality, and inclusive governance.',
    keyFrustrations: [
      'Anxiety over xenophobic "native vs outsider" political rhetoric during election cycles',
      'Unequal access to county bursaries and county government employment opportunities',
      'Selective municipal enforcement on upcountry-owned SME establishments'
    ],
    coreMessage: 'One Mombasa for all who build it. Suleiman Shahbal stands for constitutional inclusion, equal economic protection, zero ethnic discrimination, and a peaceful investment environment for every resident.',
    primaryChannels: ['Facebook community groups', 'Christian religious networks & welfare unions', 'Ethnic professional associations (Welfare chapters in Mombasa)', 'LinkedIn'],
    mobilisationTactics: [
      'Town hall engagements with upcountry community welfare chairpersons and business associations',
      'Digital messaging reinforcing Shahbal\'s national outlook, corporate reputation, and commitment to multi-ethnic county executive appointments',
      'Direct peace and cohesion digital pledges backed by legal safeguards'
    ],
    conversionFunnel: {
      awareness: 'Digital ads highlighting Mombasa as Kenya\'s premier cosmopolitan hub where enterprise thrives without tribal division.',
      registration: 'Voter registration clinics organized through residential estate welfare groups in Mikindani, Nyali, and Changamwe.',
      persuasion: 'Highlighting Shahbal\'s national corporate record (Gulf African Bank, national housing partnerships) and zero tolerance for chauvinism.',
      turnout: 'Security assurance monitoring and dedicated transport for families on polling day.'
    },
    sources: ['knbs-census-2019', 'iebc-voters-2022', 'elections-act-2011']
  },
  {
    id: 'first-time-genz-voters',
    title: 'First-Time Gen-Z Voters (Ages 18–22)',
    subTitle: 'University Students (TUM, UoN Mombasa), High School Leavers & Digital Natives',
    estimatedVoterShare: '~14% of eligible potential voters (highest uncaptured voter pool)',
    demographicInsight: 'Digital-first, highly skeptical of traditional coastal political dynasties, energized by the nationwide 2024 civic awakening. They communicate through TikTok trends, memes, and Discord/X spaces. They reject personality cults and demand forensic accountability on public funds, climate resilience, and digital economy jobs.',
    keyFrustrations: [
      'Extremely high rate of tertiary graduate joblessness across coastal counties',
      'Outdated municipal tech infrastructure, lack of free public high-speed Wi-Fi in libraries and parks',
      'Corruption in county executive appointments and lack of youth voices in the County Assembly'
    ],
    coreMessage: 'No more tokenism. Modern governance driven by tech, industrial automation, and verified job hubs. Shahbal brings global capital and tech infrastructure to empower Mombasa\'s digital generation.',
    primaryChannels: ['TikTok', 'X Spaces', 'Discord & WhatsApp Channels', 'Campus hackathons & e-sports tournaments'],
    mobilisationTactics: [
      'Hosting interactive "Shahbal Unfiltered" live stream Q&A sessions on TikTok and X without pre-screened questions',
      'Gamified voter registration tracking leaderboard across coastal universities and sub-counties',
      'Digital creative grants for young coastal animators, satirists, and policy podcasters'
    ],
    conversionFunnel: {
      awareness: 'Trend-jacking high-energy TikTok explainers on county budget leakages vs digital job hubs.',
      registration: 'Campus-to-IEBC shuttle buses and on-campus digital registration kiosks.',
      persuasion: 'Demonstrating Shahbal\'s private investment in tech-enabled modern housing and logistics vs political rhetoric.',
      turnout: 'Gen-Z "Vote & Chill" community meetups and digital badge proof of voting across social media.'
    },
    sources: ['iebc-voters-2022', 'knbs-census-2019']
  },
  {
    id: 'mombasa-diaspora',
    title: 'Mombasa Diaspora (Nairobi, Gulf States, UK & US)',
    subTitle: 'Maritime Professionals, Diaspora Investors, Remittance Senders & Influential Family Financiers',
    estimatedVoterShare: '~5% direct registered voters, but influences >25% of household voting decisions',
    demographicInsight: 'Tens of thousands of Mombasa natives work in Nairobi\'s corporate sector, the Middle East (Dubai, Qatar, Saudi Arabia maritime and hospitality), and Europe. They remit millions of shillings monthly to elderly parents and young siblings in Mombasa, wielding decisive influence over household votes.',
    keyFrustrations: [
      'Difficulty managing and securing land and properties in Mombasa due to title deed fraud and planning chaos',
      'Frustration with having to pay out-of-pocket for private medical emergencies because county hospitals lack equipment',
      'Decaying tourism image of their beloved hometown compared to Zanzibar or Dubai'
    ],
    coreMessage: 'Make your remittances count for generational transformation. Partner with a proven global business leader who will restore Mombasa to an international blue economy and tourism metropolis.',
    primaryChannels: ['LinkedIn', 'WhatsApp Family Broadcasts', 'Facebook Live Diaspora Summits', 'Digital Email Newsletters'],
    mobilisationTactics: [
      'Bi-monthly virtual "Mombasa Future Summits" with diaspora professionals in Nairobi, Dubai, and London',
      '"Call Home for Shahbal" digital campaign encouraging diaspora professionals to talk to their families in Mombasa',
      'Structured Diaspora Investment Advisory Council policy paper'
    ],
    conversionFunnel: {
      awareness: 'Data-driven LinkedIn articles and polished webinars on coastal blue economy investment models.',
      registration: 'Facilitating out-of-county voter registration awareness for Mombasa professionals resident in Nairobi.',
      persuasion: 'Detailed comparative analysis showing Shahbal\'s executive credibility on international platforms (TradeMark Africa, EALA).',
      turnout: 'Diaspora sponsoring transport for family members back home to vote on election morning.'
    },
    sources: ['eala-shahbal-record', 'trademark-africa-chairmanship']
  }
];
