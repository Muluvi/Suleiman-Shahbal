// Phase 5a — the nomination path. The Phase −1 strategy assumes The New Democrats will nominate
// Mr Shahbal for governor without a contested primary. The party is his 2027 vehicle (its interim
// leader since September 2026 is his son, Samir Shahbal), so the assumption is reasonable, but it
// is reported, not confirmed by a party resolution, and is carried as such.
import type { SourcedFigure } from "./types";
import { LOCAL_DIGITAL_NOMINATION_REPORT } from "./sources";

export const NOMINATION_METHOD_CLAIM: SourcedFigure<string> = {
  label: "The New Democrats' Mombasa gubernatorial nomination method",
  value: "Expected to nominate him without a contested primary",
  unit: "method",
  provenance: {
    source: LOCAL_DIGITAL_NOMINATION_REPORT,
    granularity: "county",
    note: "Reported, not confirmed by a party resolution. The Phase −1 strategy assumes it; if the party runs a contested primary, the phasing in Section 4.3 is revisited before it is acted on.",
  },
};

export const NOMINATION_CONFIRMATION_REQUIREMENTS: string[] = [
  "A resolution of The New Democrats' National Executive Council adopting the nomination method for the Mombasa governor's race.",
  "The party's nomination rules and timetable for 2027, as filed with the IEBC and the Office of the Registrar of Political Parties.",
];
