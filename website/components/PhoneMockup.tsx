"use client";

import Image from "next/image";
import { useInView } from "@/lib/useInView";

type PhoneMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Responsive `sizes` hint for next/image. */
  sizes?: string;
  /** Turquoise radial glow underneath the phone — the house mockup style. */
  glow?: boolean;
  /** 2-second slow push-in as the mockup scrolls into view. Once. */
  pushIn?: boolean;
  /** Tiny blurred preview shown until the screenshot loads (lib/screen-placeholders). */
  blurDataURL?: string;
  /** Start loading immediately instead of when near the viewport. */
  eager?: boolean;
  /**
   * Full lifestyle poster (phone, kitchen and mascot already in the art).
   * Skips the extra phone shell so the image is shown as sent.
   */
  poster?: boolean;
  /** CSS aspect-ratio when the file is not a 9:19.5 screenshot. */
  aspectRatio?: string;
  /** Poster with square corners, so the file is not clipped. */
  sharp?: boolean;
  /** Fit the whole image inside the screen so side details stay visible. */
  contain?: boolean;
};

/**
 * Minimal iPhone-style slab — no notch, no Dynamic Island, no camera cutout —
 * with the glowing turquoise shell edge from the app's design system.
 * The aspect box (9 : 19.5) reserves space before the image loads, so the
 * hero never shifts layout.
 */
export default function PhoneMockup({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 300px",
  glow = false,
  pushIn = false,
  blurDataURL,
  eager = false,
  poster = false,
  aspectRatio,
  sharp = false,
  contain = false,
}: PhoneMockupProps) {
  const { ref, inView } = useInView<HTMLDivElement>("-10% 0px");

  const slab = (
    <>
      {glow ? (
        <div
          aria-hidden
          className="mockup-glow pointer-events-none absolute -inset-x-12 -inset-y-10"
        />
      ) : null}
      <div
        className="relative w-full"
        style={{ aspectRatio: aspectRatio ?? (poster ? "470 / 1024" : "9 / 19.5") }}
      >
        {poster ? (
          <div
            className={`absolute inset-0 overflow-hidden bg-[#0b0b0b] ${sharp ? "" : "rounded-[1.75rem] shadow-phone"}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              loading={priority || eager ? "eager" : "lazy"}
              placeholder={blurDataURL ? "blur" : "empty"}
              blurDataURL={blurDataURL}
              className={contain ? "object-contain object-center" : "object-cover"}
            />
          </div>
        ) : (
          <div
            className={`phone-shell absolute inset-0 overflow-hidden p-[6px] ${contain ? "rounded-[1.6rem]" : "rounded-[2.75rem]"}`}
          >
            {/* Same near-black as the app screens, so nothing light shows before
                the image arrives or along the anti-aliased rounded edge */}
            <div
              className={`relative h-full w-full bg-[#0b0b0b] ${contain ? "overflow-hidden rounded-2xl" : "overflow-hidden rounded-[2.4rem]"}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                priority={priority}
                loading={priority || eager ? "eager" : "lazy"}
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
                className={contain ? "object-contain object-center" : "object-cover"}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );

  if (!pushIn) {
    return <div className={`relative ${className}`}>{slab}</div>;
  }

  return (
    <div ref={ref} className={`push-in relative ${inView ? "is-shown" : ""} ${className}`}>
      {slab}
    </div>
  );
}
