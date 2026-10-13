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
      <div className="relative w-full" style={{ aspectRatio: "9 / 19.5" }}>
        <div className="phone-shell absolute inset-0 overflow-hidden rounded-[2.75rem] p-[6px]">
          {/* Same near-black as the app screens, so nothing light shows before
              the image arrives or along the anti-aliased rounded edge */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-[#0b0b0b]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              className="object-cover"
            />
          </div>
        </div>
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
