/**
 * Which registry figure holds each station's Coast listener share. No Coast audience measurement
 * is in hand yet, so no station has one and none is ranked by audience; a KARF or GeoPoll report
 * fills this in. Read by the Radio Planner and the radio set (components/devices/RadioSet.tsx), so
 * the two can never disagree.
 */
export const RADIO_SHARE: Record<string, string> = {};

/** The Radio Planner's starting plan: ten spots a week on each priority station, none elsewhere. */
export const startingSpots = (posture: string) => (/^Priority/.test(posture) ? 10 : 0);
