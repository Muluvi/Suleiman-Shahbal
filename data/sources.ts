// Reusable Source objects — one definition per institution/outlet, imported everywhere that
// institution is cited so a URL or date correction happens in exactly one place. Several of them
// are also the registry's sources (lib/data/figures.ts reads their names), so a document is named
// the same way in a figure's source line and in the evidence table.
//
// Mombasa edition (November 2026). The export names are kept from the platform's first build so
// every consumer still resolves; each now names the Mombasa document it stands for. Where no
// Mombasa document is in hand the comment says so, and the figure that would use it is held as
// "data needed" in lib/data/figures.ts rather than filled from memory.
import type { Source } from "./types";

// ---- Tier 1 · Official ------------------------------------------------------------------

export const IEBC_WARD_REGISTER: Source = {
  name: "IEBC, Registered Voters per County Assembly Ward (2022)",
  url: "https://www.iebc.or.ke/docs/rov_per_caw.pdf",
  publicationDate: "2022",
  tier: 1,
};

export const IEBC_PRESIDENTIAL_34C_2022: Source = {
  name: "IEBC, Form 34C county summary, 2022 presidential election",
  url: "https://www.iebc.or.ke/uploads/resources/QLTlLJx0Vr.pdf",
  publicationDate: "2022-08",
  tier: 1,
};

export const KNBS_CENSUS_2019: Source = {
  name: "KNBS, 2019 Kenya Population and Housing Census",
  publicationDate: "2019",
  tier: 1,
};

export const FISCAL_STRATEGY_PAPER_FY2026_27: Source = {
  name: "Mombasa County budget, FY2026/27 (equitable share per the County Allocation of Revenue Act 2026, as reported)",
  publicationDate: "2026",
  tier: 3,
  // The approved FY2026/27 Programme Based Budget is not yet in hand. Until it is, the envelope is
  // read through secondary reporting and carried at Tier 3.
};

export const AUDITOR_GENERAL_FY2023_24: Source = {
  name: "Office of the Auditor-General, Mombasa County Executive audit report",
  publicationDate: "FY2024/25",
  tier: 1,
  // Opinion type is reported (qualified, FY2024/25); the report itself is to be retrieved.
};

export const COURT_OF_APPEAL_2018: Source = {
  name: "High Court at Mombasa, Hassan Omar Hassan & another v IEBC & 3 others [2018] KEHC 8291 (Election Petition 10 of 2017)",
  url: "https://new.kenyalaw.org/akn/ke/judgment/kehc/2018/8291/eng@2018-02-22",
  publicationDate: "2018-02",
  tier: 1,
};

export const HIGH_COURT_2013: Source = {
  name: "High Court at Mombasa, Suleiman Said Shahbal v IEBC & 3 others [2013] KEHC 2189 (Election Petition 8 of 2013)",
  url: "https://new.kenyalaw.org/akn/ke/judgment/kehc/2013/2189/eng@2013-09-27",
  publicationDate: "2013-09",
  tier: 1,
};

export const CA_KNBS_ICT_2023_24: Source = {
  name: "CA and KNBS, Analytical Report on ICT based on the 2023/24 Kenya Housing Survey",
  url: "https://www.ca.go.ke/sites/default/files/2025-08/ICT%20Analytical%20Report%20Based%20on%202023-2024%20Kenya%20Housing%20Survey_0.pdf",
  publicationDate: "2025-08",
  tier: 1,
};

// ---- Tier 2 · Reported --------------------------------------------------------------------

export const KNBS_POVERTY_REPORT: Source = {
  name: "KNBS — Kenya Poverty Report 2021, Mombasa county estimate, via Stats Kenya",
  url: "https://statskenya.co.ke/county-information/Mombasa/1",
  publicationDate: "2023",
  tier: 2,
};

export const IEBC_REGISTER_2026_REPORTED: Source = {
  name: "IEBC 2022 register plus 2025–26 new registrations as reported (indicative 2026 register)",
  publicationDate: "2026",
  tier: 3,
  // Indicative only: the certified 2026 register is not published. See register.2026 in figures.ts.
};

export const MEDIA_2022_DECLARATION: Source = {
  name: "Media reporting of the IEBC declaration, Mombasa governor, 30 August 2022 (The Star; Standard; Capital FM; KNA)",
  publicationDate: "2022-08",
  tier: 2,
};

// ---- Tier 3 · Single-source / partisan -----------------------------------------------------

export const LOCAL_DIGITAL_NOMINATION_REPORT: Source = {
  name: "Kenyan media reporting on Mr Shahbal's exit from ODM and his 2027 party vehicle (September–November 2026)",
  publicationDate: "2026",
  tier: 2,
};

export const LOCAL_DIGITAL_MEDIA_OWNERSHIP: Source = {
  name: "Public station information on Coast radio ownership; audience shares to be confirmed against a KARF or GeoPoll report",
  publicationDate: "2026",
  tier: 3,
};
