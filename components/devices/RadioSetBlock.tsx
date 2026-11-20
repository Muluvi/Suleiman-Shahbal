import { RADIO_STATIONS } from "../../data/media-ownership";
import { resolveFigure } from "../../lib/card/spec";
import { IDENTITY } from "../../lib/phone-showcase";
import { RADIO_SHARE, startingSpots } from "../../lib/tools/radio-share";
import { ExportableVisual } from "../visual/ExportableVisual";
import { RadioSet } from "./RadioSet";

/** The radio set's frame: the Radio Planner's stations and listener shares in, its source line out. */
export function RadioSetBlock() {
  const shares = Object.values(RADIO_SHARE).map((id) => resolveFigure({ id, label: "listener share" }));
  const stations = RADIO_STATIONS.map((s) => ({
    name: s.name, frequency: s.frequency, alignment: s.alignment, posture: s.posture, reachLabel: s.reachLabel,
    share: RADIO_SHARE[s.name] ? resolveFigure({ id: RADIO_SHARE[s.name], label: "" }).display : null,
    spots: startingSpots(s.posture),
  }));
  return (
    <ExportableVisual
      id="radio-set"
      illustrative
      title={`Tune across the ${stations.length} Coast stations: who owns each, and where the plan places spots`}
      note="Slide the dial. The starting plan is the Radio Planner's: ten spots a week on each priority station; the faith and community stations carry programming, not spots."
      figures={shares}
      source={`Source: station ownership from public records (Tier 2) and the plan's media audit; no Coast listener share is published openly; frequencies are from public station listings (Tier 2), to be checked against the Communications Authority register.`}
      card={{ type: "week", params: { set: "radio" } }}
    >
      <RadioSet stations={stations} slogan={IDENTITY.slogan} sloganKiswahili={IDENTITY.sloganKiswahili} />
    </ExportableVisual>
  );
}
