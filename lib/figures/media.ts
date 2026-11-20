/**
 * The gatekeeper-bypass architecture: four ways the campaign reaches voters without a commercial
 * station's permission (Media). The station roster and the "hostile stations" diagram this file
 * once carried were retired with their figures (consolidation pass, Step 3); who owns which
 * station is data/media-ownership.ts, the map the proposal says governs.
 */
import { regFmt } from "./from-registry.ts";

/**
 * §4.5.6's four bypass pillars, at both the levels the document states them.
 *
 * §2.8.3 named the four routes in four lines and pointed at §4.5.6 for the protocol; §4.5.6 gave the
 * protocol in a table of its own. Both blocks are retired, so both levels live here: `summary` is
 * §2.8.3's line and `detail` is §4.5.6's cell, transcribed. The §2.8.3 figure prints the summary and
 * says where the full version is, exactly as the block it replaced did; the §4.5.6 figure prints
 * the protocol. Flattening them into one would either lose §4.5.6's operational detail or move it
 * four chapters earlier than the document puts it.
 */
export const BYPASS_PILLARS = [
  {
    label: "Faith-based and community radio, for programming",
    summary: "Radio Rahma, Radio Salaam, Baraka FM — programming partners, never paid political placement",
    detail:
      "Civic programming on water, health and jobs with Radio Rahma, Radio Salaam and Baraka FM (Catholic " +
      "Archdiocese of Mombasa). These stations carry high trust among women, elders and faith communities; " +
      "the campaign offers residents' call-ins and expert segments, with no candidate named and no paid political message.",
  },
  {
    label: `Direct 2G bulk SMS and USSD, to up to ${regFmt("reach.sms-only")} phone owners not online`,
    summary: "Zero-rated interactive USSD gateway (*[shortcode]#)",
    detail:
      "Deployment of the SMS engine and the zero-rated USSD gateway (*[shortcode]#) through a licensed " +
      "aggregator. Bypasses radio entirely by landing 160-character ward alerts directly onto voters' " +
      "phones within minutes.",
  },
  {
    label: "The stages, markets and PA caravans",
    summary: "Boda-boda and tuk-tuk stages and the big markets",
    detail:
      "PA caravans and stage champions at Kongowea, Marikiti, Majengo, Mtopanga, Chaani and the Likoni ferry " +
      "approaches. Short Kiswahili jingles, verified policy addresses and live Q&A directly with the crowd.",
  },
  {
    label: "Ward captain WhatsApp audio network",
    summary: "Ward captains' WhatsApp voice notes and estate groups",
    detail:
      `${regFmt("target.captains")} ward captains with pre-loaded 45-second Kiswahili audio tracks, dispatched across ` +
      "estate, chama, stage and residents' WhatsApp groups for peer-to-peer sharing among youth, traders and households.",
  },
];
