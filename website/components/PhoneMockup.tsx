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
 * Aspect ratio locked to 9 / 19.5 via padding-bottom on the inner shell.
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
          className="pointer-events-none absolute inset-0 -z-10 mx-auto"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 60%, rgba(166,245,232,0.55) 0%, rgba(166,245,232,0) 70%)",
            filter: "blur(40px)",
            transform: "translateY(8%)",
          }}
        />
      ) : null}
      <div
        className="relative mx-auto overflow-hidden rounded-[2.75rem] bg-[#262626] p-[6px] shadow-[0_40px_80px_-20px_rgba(38,38,38,0.25)]"
        style={{ aspectRatio: "9 / 19.5" }}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-[2.4rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
          style={{ background: "#000" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 30vw, 320px"
            priority={priority}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
