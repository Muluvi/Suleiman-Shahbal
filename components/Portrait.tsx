import React from "react";
import Image from "next/image";

/**
 * The candidate portraits.
 *
 * All five are transparent-background cutouts, which is why they sit directly on the page rather
 * than in a framed box — a cutout in a card reads as a sticker. They carry no caption of their
 * own: the surrounding section already says who this is, and a caption under every portrait
 * would be four restatements of the same name.
 *
 * One high-resolution WebP source per portrait (polish pass, November 2026): cut out from the
 * 2496 x 3744 originals and cropped to the subject, about 3,200-3,400px tall. next/image serves
 * AVIF or WebP from it at the width the layout asks for, up to 3840w for a 4K screen, so a phone
 * still downloads a small file and a large display never shows an image stretched past its
 * source. Nothing is upscaled.
 *
 * `sizes` is set per placement rather than left to default. Without it next/image assumes full
 * viewport width and serves the 1600px rendition to a phone showing the image at 150px, which is
 * the single most common way an "optimised" image pipeline still ships four times the bytes it
 * needs.
 */

export type PortraitId =
  | "hero-clasped-hands"
  | "three-piece-formal"
  | "gesture-explaining"
  | "red-polo-arms-crossed"
  | "black-tee-arms-crossed";

/**
 * Intrinsic dimensions of the sources, so next/image never has to guess.
 *
 * Mombasa edition: the five photographs supplied by the campaign (November 2026), cut out and
 * enlarged to about 2,800-3,200px tall with a plain Lanczos resample and a light unsharp mask. No
 * generative upscaler was used, so the face is exactly as photographed; the enlargement adds no
 * detail the camera did not record. The three original slot names are kept so every placement
 * keeps working.
 */
const PORTRAITS: Record<PortraitId, { file: string; w: number; h: number; alt: string }> = {
  "hero-clasped-hands": {
    file: "quilted-jacket-smile-4k",
    w: 3065,
    h: 3026,
    alt: "Hon. Suleiman Shahbal, smiling, in a navy quilted jacket and tie.",
  },
  "three-piece-formal": {
    file: "shirt-tie-cuff-4k",
    w: 2760,
    h: 3111,
    alt: "Hon. Suleiman Shahbal in a white shirt and navy tie, adjusting his cuff.",
  },
  "gesture-explaining": {
    file: "kofia-kanzu-smile-4k",
    w: 3240,
    h: 3172,
    alt: "Hon. Suleiman Shahbal in a kanzu and kofia, smiling, hands clasped.",
  },
  "red-polo-arms-crossed": {
    file: "red-polo-arms-crossed-4k",
    w: 2622,
    h: 3197,
    alt: "Hon. Suleiman Shahbal in a red polo shirt, arms crossed.",
  },
  "black-tee-arms-crossed": {
    file: "black-tee-arms-crossed-4k",
    w: 2235,
    h: 2818,
    alt: "Hon. Suleiman Shahbal in a black T-shirt, arms crossed.",
  },
};

/**
 * The cutouts were trimmed to the subject, so every one of them ends in a straight horizontal
 * cut across the jacket. On a white page that edge is invisible; on this site's dark ground it
 * reads as a photograph someone chopped. A short mask at the base dissolves it instead.
 */
const BOTTOM_FADE =
  "linear-gradient(to bottom, #000 0%, #000 82%, rgba(0,0,0,0.55) 93%, transparent 100%)";

export function Portrait({
  id,
  sizes,
  className = "",
  priority = false,
  fade = true,
}: {
  id: PortraitId;
  /** Required. See the note above on why this is never left to the default. */
  sizes: string;
  className?: string;
  /** True only for the hero. Everything else loads lazily. */
  priority?: boolean;
  /** Set false where the portrait sits on a light ground and the cut is already invisible. */
  fade?: boolean;
}) {
  const p = PORTRAITS[id];
  return (
    <Image
      src={`/portraits/${p.file}.webp`}
      alt={p.alt}
      width={p.w}
      height={p.h}
      sizes={sizes}
      priority={priority}
      // The cover portrait is the home page's LCP element: fetched at high priority, beside its preload.
      fetchPriority={priority ? "high" : undefined}
      loading={priority ? undefined : "lazy"}
      referrerPolicy="no-referrer"
      className={`h-auto w-full object-contain select-none pointer-events-none ${className}`}
      style={fade ? { maskImage: BOTTOM_FADE, WebkitMaskImage: BOTTOM_FADE } : undefined}
      draggable={false}
    />
  );
}
