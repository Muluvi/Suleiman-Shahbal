import { EscalationLevel } from '../types/strategy.ts';

export const escalationLadder: EscalationLevel[] = [
  {
    level: 1,
    label: 'Low Severity / Organic Noise',
    triggerCondition: 'Isolated negative tweets, skeptical comments on TikTok/Facebook with <500 engagements, individual partisan gripes.',
    responseTimeSLA: '< 4 hours (Monitoring only)',
    decisionAuthority: 'Digital Community Moderator',
    actions: [
      'Log into social listening dashboard',
      'No official candidate response required',
      'Community advocates reply organically with public FAQ links or verified facts if directly asked'
    ],
    channelDeployment: ['Organic comment threads']
  },
  {
    level: 2,
    label: 'Medium Severity / Emerging Narrative',
    triggerCondition: 'Rival influencers or anonymous accounts spreading a misleading claim (e.g., misrepresenting Buxton Point pricing or council rates) gaining 500–2,500 engagements.',
    responseTimeSLA: '< 60 minutes',
    decisionAuthority: 'Digital Communications Director',
    actions: [
      'Draft standardized 1-page visual Fact-Check Card with sources',
      'Distribute to 30 Ward WhatsApp Lead Captains to inoculate community chats',
      'Deploy short-form video or infographic from verified campaign handle without naming or amplifying the troll'
    ],
    channelDeployment: ['WhatsApp Community Channels', 'X Fact-Check Handle', 'Facebook Community Groups']
  },
  {
    level: 3,
    label: 'High Severity / Coordinated Smear Campaign',
    triggerCondition: 'Coordinated hashtag trending, fake news blog publishing defamatory story, or unverified claims repeated by rival political figures.',
    responseTimeSLA: '< 45 minutes',
    decisionAuthority: 'Campaign Director & Legal Counsel',
    actions: [
      'Convene Rapid Response War Room',
      'Issue formal Cease and Desist notice if libelous',
      'Release official press statement countersigned by communications director',
      'Launch video address debunking claim with irrefutable public documents'
    ],
    channelDeployment: ['National Media Houses', 'Official Verified Socials', 'Press Release', 'WhatsApp Broadcasts']
  },
  {
    level: 4,
    label: 'Critical / Fabricated Documents & Impersonation',
    triggerCondition: 'Forged resignation/withdrawal letters bearing fake candidate signature, counterfeit IEBC disqualification notices, or spoofed campaign statements.',
    responseTimeSLA: '< 20 minutes',
    decisionAuthority: 'Candidate & Steering Committee',
    actions: [
      'Instant "FAKE / UONGO" watermark graphic stamped across the forged document',
      'Immediate alert to IEBC, DCI Cybercrime Unit, and National Cohesion and Integration Commission (NCIC)',
      'Candidate records a direct 30-second authentic video address from current physical location',
      'Simultaneous WhatsApp blast to all registered supporters'
    ],
    channelDeployment: ['Mainstream Television Bulletins', 'Verified Blue-Check Platforms', 'SMS Broadcast Network']
  },
  {
    level: 5,
    label: 'Emergency / AI Deepfake Audio/Video Smear',
    triggerCondition: 'Synthetic voice clone of candidate appearing to make inflammatory ethnic slurs, illicit deals, or religious insults designed to cause immediate public outrage.',
    responseTimeSLA: '< 15 minutes',
    decisionAuthority: 'Candidate, Lead Counsel & National Media Liaisons',
    actions: [
      'Invoke emergency takedown requests with Meta, ByteDance (TikTok), and X via expedited political threat channels',
      'Release cryptographic/metadata analysis proving AI generation',
      'Live physical broadcast with candidate surrounded by interfaith/multi-ethnic community leaders',
      'Formal criminal complaint to NCIC and DCI Cybercrime Directorate'
    ],
    channelDeployment: ['Emergency Live Press Conference', 'All Social Platforms', 'National Radio & TV Simulcast']
  }
];

export const factCheckWorkflow = [
  {
    step: '1. Ingestion & Detection',
    action: 'Social listening monitors flag viral threshold breach (>200 shares/hr or known disinformation syndicate match).',
    timing: 'Minute 0–10'
  },
  {
    step: '2. Triage & Evidence Retrieval',
    action: 'Rapid response research officer pulls verified public records (IEBC, Controller of Budget, Parliament Hansard, Land Registry).',
    timing: 'Minute 10–25'
  },
  {
    step: '3. Asset Creation',
    action: 'Design desk produces high-contrast bilingual "UKWELI NI HUU / THE FACTS" visual card with exact document receipt embedded.',
    timing: 'Minute 25–40'
  },
  {
    step: '4. Legal & Strategy Clearance',
    action: 'Communications director signs off on copy; legal counsel reviews for defamation or NCIC compliance.',
    timing: 'Minute 40–50'
  },
  {
    step: '5. Multi-Channel Blast',
    action: 'Simultaneous deployment to WhatsApp captain network, X, Facebook, and local coastal radio newsrooms.',
    timing: 'Minute 50–60'
  }
];

export const spokespersonProtocol = {
  authorizedSpokespersons: [
    'Candidate (Hon. Suleiman Shahbal) - Final policy authority & visionary speeches',
    'Campaign Director - Operational and logistical announcements',
    'Official Campaign Spokesperson - Daily press briefings, television debates, and media queries',
    'Lead Legal Counsel - Electoral disputes, cybercrime complaints, and statutory compliance'
  ],
  strictRules: [
    'No unauthorized surrogate or volunteer may issue official statements on behalf of the campaign.',
    'All surrogates speaking on radio or TV talk shows must complete weekly campaign briefing drills.',
    'Never speculate on ongoing legal matters, party coalition negotiations, or confidential running mate vetting.'
  ]
};

export const crisisPlaybook = [
  {
    scenario: 'Disinformation Claim: "Shahbal will alienate coastal land and evict informal settlements"',
    counterStrategy: 'Point directly to the Buxton Point precedent where original tenants received priority allocation and modernized titled housing. Deploy video testimonials of actual coastal families who now hold titles.',
    preparedTagline: 'Rekodi ya Shahbal si maneno—ni makazi halisi na hati miliki kwa wazawa (Shahbal\'s record isn\'t talk—it is real homes and title deeds for locals).'
  },
  {
    scenario: 'Disinformation Claim: "Shahbal is focused only on big corporate business and doesn\'t care about Mama Mboga"',
    counterStrategy: 'Highlight his concrete policy for the KES 500M SME Credit Guarantee Fund and the abolition of multiple county cess fees in Kongowea and Marikiti markets. Release side-by-side comparison of current county extortion vs unified permit.',
    preparedTagline: 'Mfanyabiashara ndogondogo anahitaji mtaji na heshima, si askari kumkimbiza kila asubuhi.'
  },
  {
    scenario: 'Disinformation Claim: "Fake withdrawal statement before election day"',
    counterStrategy: 'Immediately deploy high-resolution live video of Shahbal at campaign headquarters holding today\'s newspaper; blast SMS and WhatsApp alerts to all 30 ward networks.',
    preparedTagline: 'Hatukurudi nyuma, hatutetereki—tarehe ya kura ni ya kuweka historia mpya ya Mombasa.'
  }
];
