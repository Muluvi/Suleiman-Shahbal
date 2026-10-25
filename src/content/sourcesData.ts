import { SourceCitation } from '../types/strategy.ts';

export const sourcesList: SourceCitation[] = [
  {
    id: 'iebc-voters-2022',
    title: 'Gazetted Register of Voters for the 2022 General Election (County 001: Mombasa)',
    publisher: 'Independent Electoral and Boundaries Commission (IEBC)',
    year: '2022',
    url: 'https://www.iebc.or.ke/registration/?stats',
    category: 'IEBC',
    notes: 'Official voter registration count of 641,913 across Kisauni (135,263), Nyali (124,510), Mvita (118,699), Likoni (94,787), Changamwe (93,572), and Jomvu (75,082).'
  },
  {
    id: 'iebc-mombasa-registration-breakdown',
    title: 'County Code 001 - Mombasa County: Voter Registration Breakdown by Constituency, County Assembly Ward & Polling Centre (1,040+ Polling Stations)',
    publisher: 'Independent Electoral and Boundaries Commission (IEBC) Gazetted Record / Campaign Data Archive',
    year: '2022',
    url: '/public/assets/aistudio/Mombasa_County_Voter_Registration_Breakdown_8574c528.md',
    category: 'IEBC',
    notes: 'Exhaustive official enumeration of all 6 constituencies, 30 County Assembly Wards (CAW 0001 - 0030), and 100+ gazetted registration centres with exact registered voters, polling station counts, and 37 mega-centres holding >5,000 voters.'
  },
  {
    id: 'iebc-results-2022-mombasa',
    title: 'Official Declaration of Gubernatorial Election Results: Mombasa County (August 29, 2022)',
    publisher: 'Independent Electoral and Boundaries Commission (IEBC)',
    year: '2022',
    url: 'https://www.iebc.or.ke/election/?results',
    category: 'IEBC',
    notes: 'Abdulswamad Shariff Nassir won with 119,083 votes (54.09%) against Hassan Omar with 98,105 votes (44.56%). Voter turnout was historically subdued at ~34.1% due to postponement from August 9 to August 29.'
  },
  {
    id: 'knbs-census-2019',
    title: '2019 Kenya Population and Housing Census: Volume II - Distribution of Population by Administrative Units',
    publisher: 'Kenya National Bureau of Statistics (KNBS)',
    year: '2019',
    url: 'https://www.knbs.or.ke/2019-kenya-population-and-housing-census-reports/',
    category: 'KNBS',
    notes: 'Mombasa County total enumerated population of 1,208,333 (610,257 male, 598,046 female, 30 intersex) across 378,422 households.'
  },
  {
    id: 'cob-mombasa-2023-24',
    title: 'County Governments Annual Budget Implementation Review Report (FY 2023/24) - Mombasa County',
    publisher: 'Office of the Controller of Budget (OCOB Kenya)',
    year: '2024',
    url: 'https://cob.go.ke/reports/consolidated-county-budget-implementation-review-reports/',
    category: 'Controller of Budget',
    notes: 'Provides authoritative data on county own-source revenue collection, development expenditure absorption rates, pending bills, and wage bill absorption.'
  },
  {
    id: 'mombasa-cidp-2023-2027',
    title: 'County Integrated Development Plan (CIDP) 2023-2027: Mombasa County',
    publisher: 'County Government of Mombasa',
    year: '2023',
    url: 'https://www.mombasa.go.ke/',
    category: 'County Gov',
    notes: 'Priority sectors including blue economy, storm water drainage, informal settlement upgrading, healthcare digitization, and solid waste management.'
  },
  {
    id: 'eala-shahbal-record',
    title: 'East African Legislative Assembly (EALA) Member Profiles - Hon. Suleiman Shahbal',
    publisher: 'East African Legislative Assembly',
    year: '2023',
    url: 'https://www.eala.org/members/view/suleiman-shahbal',
    category: 'Public Record',
    notes: 'Shahbal was elected to the 5th EALA Assembly representing Kenya in November 2022, serving on the Committee on Accounts and General Purpose.'
  },
  {
    id: 'buxton-point-project',
    title: 'Buxton Point Affordable Housing Regeneration Project Overview and Phase 1 Handover',
    publisher: 'GulfCap Real Estate / State Department for Housing and Urban Development',
    year: '2023',
    url: 'https://buxtonpoint.com/',
    category: 'Public Record',
    notes: 'Flagship private-public coastal urban renewal project transforming colonial-era municipal housing into over 1,800 modern affordable apartments.'
  },
  {
    id: 'trademark-africa-chairmanship',
    title: 'TradeMark Africa Board Leadership and Trade Facilitation Initiatives in the Northern Corridor',
    publisher: 'TradeMark Africa (TMA)',
    year: '2023',
    url: 'https://www.trademarkafrica.com/',
    category: 'Public Record',
    notes: 'Details trade corridor efficiency initiatives, port dwell-time reduction programmes, and cross-border trade facilitation across the East African Community.'
  },
  {
    id: 'jomvu-sez-dpworld-2024',
    title: 'Jomvu Special Economic Zone Investment Agreement with DP World',
    publisher: 'Kenya Ministry of Investments, Trade and Industry & National Press',
    year: '2024',
    url: 'https://www.capitalfm.co.ke/',
    category: 'Media',
    notes: 'Public commercial and industrial initiative spearheaded in Jomvu constituency to anchor port-linked manufacturing and logistics employment.'
  },
  {
    id: 'data-protection-act-2019',
    title: 'The Data Protection Act, No. 24 of 2019 (Laws of Kenya)',
    publisher: 'National Council for Law Reporting (Kenya Law)',
    year: '2019',
    url: 'http://kenyalaw.org/kl/fileadmin/pdfdownloads/Acts/2019/TheDataProtectionAct__No24of2019.pdf',
    category: 'Official Gazette',
    notes: 'Governs processing of personal data, consent standards for communication, and prohibitions against profiling individual voters without lawful basis.'
  },
  {
    id: 'elections-act-2011',
    title: 'The Elections Act, No. 24 of 2011 & Electoral Code of Conduct',
    publisher: 'National Council for Law Reporting (Kenya Law)',
    year: '2011',
    url: 'http://kenyalaw.org/kl/fileadmin/pdfdownloads/Acts/ElectionsAct_No24of2011.pdf',
    category: 'Official Gazette',
    notes: 'Statutory rules on campaign communications, prohibition of hate speech, guidelines on digital campaign advertisements, and polling day mobilization.'
  }
];
