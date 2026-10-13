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
  /** 2-second slow push-in as the mockup scrolls into view. Once. */
  pushIn?: boolean;
};

/**
 * Minimal phone slab — thin warm-black bezel, no notch, no glow.
 * The aspect box (9 : 19.5) reserves space before the image loads, so the
 * hero never shifts layout.
 */
export default function PhoneMockup({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 300px",
  pushIn = false,
}: PhoneMockupProps) {
  const { ref, inView } = useInView<HTMLDivElement>("-10% 0px");

  const slab = (
    <div className="relative w-full" style={{ aspectRatio: "9 / 19.5" }}>
      <div className="phone-shell absolute inset-0 overflow-hidden rounded-[2.5rem] p-[6px]">
        <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-[#0f0e0c]">
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
