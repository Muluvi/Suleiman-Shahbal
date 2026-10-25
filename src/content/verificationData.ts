import { VerificationItem } from '../types/strategy.ts';

export const verificationChecklist: VerificationItem[] = [
  {
    id: 'verify-party-ticket-2027',
    claim: 'Candidate Party Ticket / Sponsoring Coalition for the August 2027 General Election',
    context: 'Shahbal was elected to EALA under the Azimio/ODM allocation in late 2022 after stepping aside in the 2022 ODM governor consensus. While active across Mombasa, his formal political party vehicle for August 2027 remains unfinalised.',
    status: 'PARTY_DEPENDENT',
    actionRequired: 'Confirm with campaign secretariat whether the digital rollout should initially position Shahbal on an independent policy platform, an ODM primary ticket, or a distinct coalition brand before official IEBC party candidate gazettement.',
    targetDeadline: 'Q1 2026'
  },
  {
    id: 'verify-running-mate-matrix',
    claim: 'Geographic and Demographic Balancing for Deputy Governor Running Mate',
    context: 'Mombasa gubernatorial arithmetic historically balances the Island/Nyali commercial vote with Likoni/Changamwe upcountry communities or Kisauni indigenous coastal constituencies.',
    status: 'PENDING_CAMPAIGN_CONFIRMATION',
    actionRequired: 'Ensure digital campaign messaging does not hint at or constrain running mate selections until formal campaign leadership announces the ticket shortlist.',
    targetDeadline: 'Q4 2026'
  },
  {
    id: 'verify-dp-world-jomvu-job-numbers',
    claim: 'Projected Direct and Indirect Job Creation for the Jomvu Special Economic Zone Logistics Hub',
    context: 'Public reports cite up to 15,000 direct and indirect jobs upon Phase 2 completion, but final concession phases are subject to commercial close and parliamentary committee review.',
    status: 'POLICY_DRAFT',
    actionRequired: 'Verify official economic modeling figures from GulfCap/consortium legal team before releasing specific employment pledges in ward micro-targeting leaflets.',
    targetDeadline: 'Immediate'
  },
  {
    id: 'verify-ward-grassroots-captains',
    claim: 'Designation of 30 Ward Digital WhatsApp Community Lead Admins',
    context: 'Digital mobilization relies on authenticated local youth and community leaders who reside in each of the 30 wards to prevent external astroturfing and adhere to community trust.',
    status: 'PENDING_CAMPAIGN_CONFIRMATION',
    actionRequired: 'Campaign secretariat to provide vetted names and secure communication numbers for all 30 ward-level field coordinators to synchronize with digital command.',
    targetDeadline: 'Month 2 of Sprint'
  },
  {
    id: 'verify-cob-pending-bills-figure',
    claim: 'County Government of Mombasa Pending Bills Amount for FY 2023/2024 Audit',
    context: 'Controller of Budget reports fluctuated between KES 4.2B and KES 5.8B for accumulated historical and current supplier pending bills.',
    status: 'VERIFIED',
    actionRequired: 'Rely strictly on the latest Controller of Budget consolidated report rather than local political baraza claims to protect credibility.',
    targetDeadline: 'Active Reference'
  }
];

export const dataPlaceholders = [
  {
    metric: '2027 Ward-Level Registered Voter Projections',
    label: 'Illustrative placeholder, replace with real data',
    description: 'Projections assume a 12.5% organic net voter registration expansion by IEBC during the 2026/2027 continuous voter registration drive. Must be updated upon official gazettement of the 2027 IEBC Voter Register.'
  },
  {
    metric: 'Micro-Targeted Polling & Sentiment Samples',
    label: 'Illustrative placeholder, replace with real data',
    description: 'All sentiment indexes represent aggregated public social media engagement trends and field listening samples. No individual profiling or private telephone tracking is used, strictly in compliance with Kenya Data Protection Act 2019.'
  }
];
