export interface SourceCitation {
  id: string;
  title: string;
  publisher: string;
  year: string;
  url: string;
  category: 'IEBC' | 'KNBS' | 'County Gov' | 'Controller of Budget' | 'Media' | 'Official Gazette' | 'Public Record';
  notes?: string;
}

export interface VerificationItem {
  id: string;
  claim: string;
  context: string;
  status: 'PENDING_CAMPAIGN_CONFIRMATION' | 'PARTY_DEPENDENT' | 'POLICY_DRAFT' | 'VERIFIED';
  actionRequired: string;
  targetDeadline: string;
}

export interface VoterSegment {
  id: string;
  title: string;
  subTitle: string;
  estimatedVoterShare: string; // e.g. "28% of registered electorate"
  demographicInsight: string;
  keyFrustrations: string[];
  coreMessage: string;
  primaryChannels: string[];
  mobilisationTactics: string[];
  conversionFunnel: {
    awareness: string;
    registration: string;
    persuasion: string;
    turnout: string;
  };
  sources: string[];
}

export interface PlatformStrategy {
  platform: string;
  audienceFocus: string;
  mombasaTone: string;
  contentFormats: string[];
  cadence: string;
  strategicObjective: string;
  riskMitigation: string;
}

export interface ContentPillar {
  id: string;
  title: string;
  swahiliHook: string;
  description: string;
  keyThemes: string[];
  formatExample: string;
}

export interface CalendarWeekItem {
  week: number;
  phase: 'Phase 1: Grounding & Listening' | 'Phase 2: Pillar Rollout' | 'Phase 3: Community Mobilisation' | 'Phase 4: GOTV & Turnout Engine';
  theme: string;
  pillarId: string;
  platforms: string[];
  deliverables: string[];
  kpiGoal: string;
}

export interface SwahiliSlogan {
  slogan: string;
  englishTranslation: string;
  context: string;
  suggestedHashtags: string[];
  tone: 'Inspirational' | 'Economic Delivery' | 'Community Pride' | 'Action Call';
}

export interface NarrativePillar {
  title: string;
  swahiliLead: string;
  coreArgument: string;
  verifiedProofPoints: { point: string; sourceId: string }[];
  unverifiedCaveats?: string[];
  targetAudiences: string[];
}

export interface MessageVariant {
  audience: string;
  hook: string;
  elevatorPitch: string;
  keyProof: string;
}

export interface PollingCentre {
  code: string;
  name: string;
  registeredVoters: number;
  pollingStations: number | string;
  wardName: string;
  subCounty: string;
  isMegaCentre?: boolean; // > 5,000 voters
}

export interface WardData {
  wardName: string;
  cawCode: string;
  constituencyCode: string;
  subCounty: 'Mvita' | 'Nyali' | 'Kisauni' | 'Likoni' | 'Changamwe' | 'Jomvu';
  registeredVoters2022: number;
  pollingStationsCount: number;
  estimated2027Target: number;
  turnout2022Pct: number;
  strategicPriority: 'Critical Fortress' | 'High-Opportunity Growth' | 'Swing Ground' | 'Consolidation';
  keyDemographics: string;
  priorityLocalIssues: string[];
  digitalPenetration: 'High' | 'Medium-High' | 'Medium' | 'Emerging';
  groundMobilisationAnchor: string;
  topCentres: { name: string; voters: number; stations: number | string }[];
  isPlaceholder?: boolean;
}

export interface SubCountySummary {
  name: 'Mvita' | 'Nyali' | 'Kisauni' | 'Likoni' | 'Changamwe' | 'Jomvu';
  code: string;
  totalVoters2022: number;
  wardsCount: number;
  pollingStationsTotal: number;
  economicBackbone: string;
  turnout2022Average: number;
  strategicWeight: string;
  coreVulnerabilityToAddress: string;
  megaCentresCount: number;
}

export interface EscalationLevel {
  level: number;
  label: string;
  triggerCondition: string;
  responseTimeSLA: string;
  decisionAuthority: string;
  actions: string[];
  channelDeployment: string[];
}

export interface RivalComparison {
  competitor: string;
  currentOfficeOrRecord: string;
  knownPoliticalBase: string;
  statedStrength: string;
  demonstratedVulnerability: string;
  shahbalDifferentiator: string;
  contrastGuideline: string;
  verifiedCitations: string[];
}
