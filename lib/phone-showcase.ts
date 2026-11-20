import { PLAN_ITEMS, SMS_SPECIMENS, USSD_MENU as USSD_SPEC } from "../data/ussd-specimen";
/**
 * Every word, handle and number that appears on the seven phone screens.
 *
 * The campaign team must be able to rewrite any screen without opening a component, so nothing
 * displayable lives in JSX. Three rules govern what may go in here:
 *
 * 1. ON-SCREEN TEXT COMES FROM THE PROPOSAL. Each entry carries a `source` naming the section it
 *    was drawn from. Reshaping for the medium is expected — a narrative statement cut to caption
 *    length, a menu tree rendered as a menu. Writing new campaign messaging is not.
 * 2. WHAT THE PROPOSAL DOES NOT SAY STAYS EMPTY. A slot with no copy behind it is `null` and
 *    renders as the site's standard placeholder chip, exactly like the `[Insert …]` markers in
 *    the document. It is not filled with something plausible.
 * 3. NUMBERS AN INTERFACE STRUCTURALLY NEEDS ARE ILLUSTRATIVE AND REGISTERED. Engagement counts,
 *    subscriber counts and view counts are not campaign performance data and must never be read
 *    as such. They live in ILLUSTRATIVE_COUNTS below, and scripts/verify-figures.mjs fails the
 *    build if a number appears anywhere else in this file without tracing to the proposal.
 */

export type ChannelId = "whatsapp" | "facebook" | "instagram" | "tiktok" | "youtube" | "x" | "ussd";

/**
 * Rail order. Descending in-county reach per §2.6 — WhatsApp 65–80k down to X 8–12k — with USSD
 * last, because it reaches ~250,000 (§3.8.1) and is the point the whole module is making.
 */
export const CHANNEL_ORDER: ChannelId[] = [
  "whatsapp",
  "facebook",
  "instagram",
  "tiktok",
  "youtube",
  "x",
  "ussd",
];

/** Opens on WhatsApp: the most recognisable screen, so the device reads as a real phone at once. */
export const DEFAULT_CHANNEL: ChannelId = "whatsapp";

export const CHANNEL_LABELS: Record<ChannelId, string> = {
  whatsapp: "WhatsApp",
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
  x: "X",
  ussd: "USSD",
};

// ---------------------------------------------------------------------------
// Campaign identity
// ---------------------------------------------------------------------------

/**
 * Derived from the candidate's name and office as the proposal states them
 * ("Hon. Suleiman Shahbal, Member of the East African Legislative Assembly").
 * Identity, not a claim — no account is asserted to exist; the handle is the one the Week 1
 * channel audit confirms, and stays a placeholder until then.
 */
export const IDENTITY = {
  displayName: "Suleiman Shahbal",
  fullName: "Hon. Suleiman Shahbal",
  office: "Member, EALA",
  handle: "@ShahbalForMombasa",
  pageName: "Suleiman Shahbal — Mombasa 2027",
  channelName: "Suleiman Shahbal",
  initials: "SS",
  /** §11 radio script, the campaign's only slogan line. */
  slogan: "The builder. He finishes what he starts.",
  sloganKiswahili: "Mjenzi. Anayemaliza anachoanza.",
} as const;

// ---------------------------------------------------------------------------
// Illustrative counts — NOT campaign performance data
// ---------------------------------------------------------------------------

/**
 * Interface chrome needs numbers to look like an interface. None of these describe anything the
 * campaign has achieved, because the campaign has not launched: the proposal deliberately
 * makes no performance claims, and §2.6 gives platform
 * reach as ranges, never as account metrics.
 *
 * They are held as strings so they can never be read back as data, kept deliberately small and
 * unremarkable, and every one of them is listed here. The module carries a visible line saying
 * the screens are illustrative.
 */
export const ILLUSTRATIVE_COUNTS = {
  xReplies: "18",
  xReposts: "64",
  xLikes: "212",
  xViews: "9,481",
  facebookReactions: "137",
  facebookComments: "22",
  facebookShares: "41",
  instagramLikes: "486",
  tiktokLikes: "1,204",
  tiktokComments: "87",
  tiktokShares: "310",
  youtubeViews: "3,912",
  youtubeSubscribers: "1,860",
  youtubeLikes: "204",
  /** Chrome only — a plausible clock, not a scheduling claim. */
  statusBarTime: "9:41",
  /** Lock screen, WhatsApp Status and Channel views (visual upgrade, A6 and A8). */
  lockGroupMessages: "12",
  statusViews: "318",
  channelFollowers: "2,140",
  channelReactions: "96",
} as const;

// ---------------------------------------------------------------------------
// Screens
// ---------------------------------------------------------------------------

export interface Sourced<T> {
  value: T;
  /** Where in the proposal this came from, for review. */
  source: string;
}

/** A slot the proposal does not supply. Renders as the site's placeholder chip. */
export type Gap = { gap: string };
export type Fillable<T> = Sourced<T> | Gap;

export function isGap<T>(v: Fillable<T>): v is Gap {
  return "gap" in v;
}

export interface WhatsAppMessage {
  from: "campaign" | "resident";
  /** Text bubble, or a voice note of the given duration. */
  kind: "text" | "voice";
  text?: string;
  duration?: string;
  time: string;
  source: string;
}

export const WHATSAPP = {
  contactName: "Junda Ward Captains",
  contactStatus: "10 Ward Captains",
  dateDivider: "TODAY",
  /**
   * The four-hour field loop describes exactly this dispatch: a localized pledge, then a 45-second
   * audio note voiced by Mr Shahbal, pushed to Ward Captains for peer forwarding. The resident's
   * reply is the single character the SMS sample itself asks for.
   */
  thread: [
    {
      from: "campaign",
      kind: "text",
      text: "Kisauni / Junda: Mr Shahbal will publish every ward's water hours and the jerrican price, every quarter. Reply 1 to join, STOP to opt out.",
      time: "07:12",
      source: "Pillar 1, Water at the tap (Section 10.1), cut to SMS length",
    },
    {
      from: "resident",
      kind: "text",
      text: "1",
      time: "07:14",
      source: "The reply the message itself asks for",
    },
    {
      from: "campaign",
      kind: "voice",
      duration: "0:45",
      time: "07:15",
      source: "Section 15.3 — a short audio note voiced by Mr Shahbal, pushed via WhatsApp",
    },
  ] satisfies WhatsAppMessage[],
  composerPlaceholder: "Message",
} as const;

export const FACEBOOK = {
  audience: "Public",
  timestamp: "2h",
  /** Section 10.1 Pillar 3, cut to post length. */
  body: {
    value:
      "The County Assembly voted to share 30% of the development budget equally across the 30 wards. The governor rejected it. Mr Shahbal backs a ward development share every ward can check.",
    source: "Section 10.1, The ward fund, settled — cut to post length",
  } as Sourced<string>,
  /** Section 3.7, the Tier 2 proof point under the post. */
  card: {
    value: {
      kicker: "Controller of Budget — Tier 2",
      headline: "98% of Mombasa's unpaid county bills are more than three years old, the highest share in Kenya",
    },
    source: "Section 3.7 — pending bills, as reported from the Controller of Budget",
  } as Sourced<{ kicker: string; headline: string }>,
  /** No comment copy exists anywhere in the proposal. */
  commentPreview: { gap: "Comment preview" } as Fillable<string>,
} as const;

export const X_POST = {
  timestamp: "4h",
  /** Section 10.1 Pillar 3, evidence lines, cut to post length. */
  body: {
    value:
      "Mombasa County: KSh 3.8 billion in pending bills at 30 June 2026, and an overdraft to pay June's salaries.\n\nPay the oldest bills first, and publish the list.\n\nThe record is public. Read it.",
    source: "Section 3.7 — pending bills and the overdraft, Tier 3, as reported from the Controller of Budget",
  } as Sourced<string>,
  mediaLabel: {
    value: "Controller of Budget — Mombasa pending bills, FY2025/26",
    source: "Section 3.7 — proof point",
  } as Sourced<string>,
} as const;

export const INSTAGRAM = {
  /**
   * §C.1 specifies "1080x1080 square carousel cards" for social; it does not specify Reels or
   * Stories, and a Reel here would only duplicate the TikTok screen. So: a square feed carousel.
   */
  location: "Mombasa County",
  timestamp: "6 hours ago",
  slideCount: 3,
  /** Section 10.1 Pillar 1, cut to caption length. */
  caption: {
    value:
      "A jerrican from a vendor costs KSh 30. At a county source, KSh 5. Water at the tap, a price ceiling at county kiosks, and the losses published every quarter.",
    source: "Section 10.1 Pillar 1, Water at the tap; prices from Section 3.1 (Tier 2)",
  } as Sourced<string>,
  captionTitle: {
    value: "Maji Mferejini",
    source: "Pillar 1 name in Kiswahili, pending native-speaker review",
  } as Sourced<string>,
  cardHeadline: {
    value: "KSh 30 vs KSh 5",
    source: "Section 3.1 — a 20-litre jerrican, vendor against county source (Tier 2)",
  } as Sourced<string>,
  cardSub: {
    value: "One jerrican, two prices",
    source: "Section 10.1 Pillar 1",
  } as Sourced<string>,
} as const;

export const TIKTOK = {
  tabs: ["Following", "For You"],
  activeTab: "For You",
  /** Section 10.1 Pillar 2, cut to caption length. */
  caption: {
    value:
      "The port moves the country's cargo. More of its value should stay in Mombasa, as jobs for the young people who live beside it.",
    source: "Section 10.1 Pillar 2, Jobs that stay in Mombasa",
  } as Sourced<string>,
  overlayTitle: {
    value: "Kazi Zibaki Mombasa",
    source: "Pillar 2 name in Kiswahili, pending native-speaker review",
  } as Sourced<string>,
  /** A hashtag is new coinage, not a reshaping of existing copy. None exist in the proposal. */
  hashtags: { gap: "Hashtags" } as Fillable<string[]>,
  /** No audio track, jingle title or sound name is named anywhere. */
  audioTrack: { gap: "Audio track name" } as Fillable<string>,
} as const;

export const YOUTUBE = {
  /** Section 10.4, content type P2 ("He built it, go and see"), pulled into a title. */
  title: {
    value:
      "He built it, go and see: the Jomvu SEZ site, and the jobs it projects",
    source: "Section 10.4 content type P2; the SEZ figures are Section 3.8 (Tier 2, a projection)",
  } as Sourced<string>,
  /** §2.6 — YouTube's stated role in the channel mix. */
  descriptionLine: {
    value: "Long-form debates, site visits and rally livestreams.",
    source: "YouTube strategic role",
  } as Sourced<string>,
  duration: "18:24",
  publishedAgo: "2 days ago",
  subscribeLabel: "Subscribe",
  thumbnailKicker: {
    value: "What is there now, and what is promised",
    source: "Section 10.4 content type P2",
  } as Sourced<string>,
} as const;

export interface UssdMenuItem {
  key: string;
  label: string;
}

/**
 * §5.2.1.2 carries this menu as a literal tree, including the short code. Nothing here is
 * reshaped — it is the proposal's own USSD structure rendered as a USSD dialog.
 *
 * NOTE FOR THE CAMPAIGN: the short code and sender ID are now a single placeholder everywhere —
 * `*[shortcode]#` and `[Insert sender ID]` — because neither is provisioned to this campaign yet
 * (§6.1). They had been printed three ways (`*483*77#`, `*483*XX#`, `STOP=22340`, `STOP to
 * 22XXX`), which is a live-looking identifier in a document whose whole argument is provenance.
 * The concrete forms are used here because they are the only non-placeholder ones in the
 * document. Confirm both before anything is printed or dialled.
 */
export const USSD = {
  shortCode: "the campaign shortcode",
  gatewayLabel: "Zero-Rated Gateway",
  networkLabel: "USSD",
  dialingMessage: "Sending…",
  responseHeader: "Suleiman Shahbal — Mombasa 2027",
  // The menu and option 1's plan items: data/ussd-specimen.ts, the one definition.
  menu: USSD_SPEC.map((o) => ({ key: o.key, label: o.english })) satisfies UssdMenuItem[],
  submenu: PLAN_ITEMS.map((p, i) => ({ key: String(i + 1), label: p })) satisfies UssdMenuItem[],
  inputPlaceholder: "Reply",
  cancelLabel: "Cancel",
  sendLabel: "Send",
  source: "USSD Interactive Menu Tree Structure, verbatim",
} as const;

// ---------------------------------------------------------------------------
// WhatsApp, three more views: the lock screen, a Status and a Channel (visual upgrade, A6, A8)
// ---------------------------------------------------------------------------

/** WhatsApp's own views, shown as a second row of tabs when WhatsApp is the channel. */
export type WhatsAppView = "lock" | "chat" | "status" | "channel";
export const WHATSAPP_VIEWS: { id: WhatsAppView; label: string; summary: string }[] = [
  { id: "lock", label: "Lock screen", summary: "The lock screen of a ward captain's phone: the ward group, the pledge and a registration text waiting." },
  { id: "chat", label: "Chat", summary: "A WhatsApp thread to the Junda ward captains carrying the water pledge and a voice note from Mr Shahbal." },
  { id: "status", label: "Status", summary: "A WhatsApp Status carrying the campaign's slogan, in English and Kiswahili." },
  { id: "channel", label: "Channel", summary: "A WhatsApp Channel post on the ward development share, from the pillar on a county that pays its bills." },
];

/**
 * The lock screen. Every line is copy already on these screens or in the SMS specimens: the
 * group is the thread's own audience, the preview is the pledge, the text is the registration
 * drive. Only the message count is illustrative.
 */
export const LOCK_SCREEN = {
  weekday: "Thursday",
  notifications: [
    { app: "WhatsApp", title: "Ward captains · Kisauni", body: `${ILLUSTRATIVE_COUNTS.lockGroupMessages} new messages`, ago: "now" },
    { app: "WhatsApp", title: IDENTITY.displayName, body: WHATSAPP.thread[0].text, ago: "2m" },
    { app: "Messages", title: "Campaign shortcode", body: SMS_SPECIMENS[0].english, ago: "1h" },
  ],
  source: "WHATSAPP.thread (the pledge, verbatim) and data/ussd-specimen.ts SMS_SPECIMENS[0] (the registration drive, verbatim)",
} as const;

/** A Status is the slogan, the campaign's only slogan line, in both languages it exists in. */
export const WHATSAPP_STATUS = {
  posted: "Today, 07:30",
  lines: [IDENTITY.slogan, IDENTITY.sloganKiswahili],
  source: "IDENTITY.slogan and IDENTITY.sloganKiswahili, verbatim",
} as const;

/** A Channel post is the Facebook page post's body: the same pillar statement, the same proof card. */
export const WHATSAPP_CHANNEL = {
  name: IDENTITY.pageName,
  posted: "TODAY",
  time: "08:05",
  source: "FACEBOOK.body and FACEBOOK.card, verbatim",
} as const;

// ---------------------------------------------------------------------------
// Before and after (visual upgrade, A5)
// ---------------------------------------------------------------------------

/**
 * Two posts side by side, coded against the four things the objective asks of every briefed post
 * (goal.md, "Give every post a voter, ward and reason": segment, ward, pillar, and the finding's
 * missing ask).
 *
 * The "after" is the ward pledge, verbatim. The "before" is NOT a real post: it is written for this
 * comparison to have the shape the finding describes ("a record of where he was, with no ward named
 * outside the Island and no ask"), and it is labelled so wherever it is shown.
 */
export const BEFORE_AFTER = {
  before: {
    label: "A typical post",
    text: "Grateful to everyone who joined us today. Great to see so many friends. God bless Mombasa.",
    note: "Illustrative, written for this comparison: not a real post.",
    checks: { segment: null, ward: null, pillar: null, ask: null },
  },
  after: {
    label: "Written to the plan",
    text: WHATSAPP.thread[0].text,
    note: "The campaign's ward pledge, word for word.",
    checks: {
      segment: "Women & household managers",
      ward: "Junda, Kisauni",
      pillar: "Water at the tap",
      ask: "Reply 1 to join",
    },
  },
  criteria: [
    { key: "segment", label: "Voter" },
    { key: "ward", label: "Ward" },
    { key: "pillar", label: "Pillar" },
    { key: "ask", label: "Ask" },
  ],
} as const;

/** The one quiet line the module carries. */
export const DISCLOSURE =
  "Illustrative mockups of proposed campaign content. No account, post or engagement figure shown here exists yet.";

/** What each screen is, for assistive technology and for the caption under the rail. */
export const CHANNEL_SUMMARY: Record<ChannelId, string> = {
  whatsapp:
    "A WhatsApp thread to the Junda ward captains carrying the water pledge and a voice note from Mr Shahbal.",
  facebook:
    "A Facebook page post on the ward development share, with the pending-bills proof point beneath it.",
  instagram:
    "An Instagram carousel card on the price of a jerrican, from the water pillar.",
  tiktok:
    "A vertical TikTok clip on port jobs for young people, from the jobs pillar.",
  youtube:
    "A YouTube feature from the Jomvu SEZ site, the builder's proof.",
  x: "An X post on the county's pending bills and the salary overdraft.",
  ussd:
    "The zero-rated USSD menu on a feature phone — the channel that reaches the offline majority.",
};
