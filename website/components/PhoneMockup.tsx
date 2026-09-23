import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  /** When true, renders an additional turquoise radial glow underneath the phone. */
  glow?: boolean;
};

/**
 * Minimal iPhone-style slab — no notch, no Dynamic Island, no camera cutout.
 * Aspect ratio locked to 9 / 19.5 via padding-bottom for cross-browser support.
 */
export default function PhoneMockup({
  src,
  alt,
  width = 1170,
  height = 2532,
  priority = false,
  className = "",
  glow = false,
}: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {glow ? (
        <div
          aria-hidden
          className="mockup-glow pointer-events-none absolute -inset-x-6 -inset-y-5"
        />
      ) : null}
      {/* Aspect ratio container using padding-bottom for full browser support */}
      <div className="relative w-full" style={{ paddingBottom: "216.67%" }}>
        <div
          className="phone-shell absolute inset-0 overflow-hidden rounded-[2.75rem] p-[6px]"
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 30vw, 320px"
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
