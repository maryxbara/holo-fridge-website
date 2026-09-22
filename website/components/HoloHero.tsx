"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HoloHeroProps = {
  size?: number;
  priority?: boolean;
  className?: string;
  withParticles?: boolean;
  withSweep?: boolean;
  hologramSrc?: string;
};

/**
 * Holo as a hologram: PNG render + radial turquoise orb + drifting particles
 * + breathing scale + vertical bob + optional iridescent light sweep.
 *
 * If /public/holo-hologram.png is missing at runtime, the <Image> onError handler
 * shows a placeholder div with just the radial glow so the layout never breaks.
 */
export default function HoloHero({
  size = 480,
  priority = false,
  className = "",
  withParticles = true,
  withSweep = true,
  hologramSrc = "/holo-hologram.png",
}: HoloHeroProps) {
  const [imgError, setImgError] = useState(false);

  // Stable particle config — generated once, identical SSR/CSR.
  const particles = Array.from({ length: 10 }, (_, i) => {
    const seed = i + 1;
    return {
      left: 8 + ((seed * 73) % 84), // 8..92 %
      delay: (seed * 0.83) % 9,
      duration: 8 + ((seed * 1.7) % 5), // 8..13s
      size: 4 + (seed % 4), // 4..7px
      drift: ((seed * 5) % 24) - 12, // -12..12 px
    };
  });

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden={false}
    >
      {/* Radial glow orb — sits behind Holo */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: size * 0.85,
          height: size * 0.85,
          background:
            "radial-gradient(circle, rgba(166,245,232,0.55) 0%, rgba(166,245,232,0.32) 35%, rgba(166,245,232,0) 70%)",
          filter: "blur(60px)",
          transform: "translateY(6%)",
          borderRadius: "9999px",
        }}
      />

      {/* Inner soft pearl glow — extra premium halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: size * 0.55,
          height: size * 0.55,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(30px)",
          transform: "translateY(8%)",
          borderRadius: "9999px",
        }}
      />

      {/* Holo character — float + breathe + optional light sweep */}
      <div
        className={`relative z-10 animate-float ${withSweep ? "holo-sweep" : ""}`}
        style={{ width: size * 0.78, height: size * 0.78 }}
      >
        <div
          className="relative h-full w-full animate-breathe"
          style={{ transformOrigin: "center" }}
        >
          {imgError ? (
            // Fallback: pure radial glow if /public/holo-hologram.png is missing.
            // TODO: add /public/holo-hologram.png — do not fall back to the logo.
            <div
              className="h-full w-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(166,245,232,0.6) 0%, rgba(166,245,232,0) 70%)",
                filter: "blur(20px)",
              }}
            />
          ) : (
            <Image
              src={hologramSrc}
              alt="Holo, your friendly holographic fridge companion"
              fill
              sizes={`${Math.round(size)}px`}
              priority={priority}
              fetchPriority={priority ? "high" : "auto"}
              loading={priority ? "eager" : "lazy"}
              onError={() => setImgError(true)}
              className="select-none object-contain"
              draggable={false}
            />
          )}
        </div>
      </div>

      {/* Particles — purely decorative, lazy mount to avoid SSR mismatch with delays */}
      {withParticles ? (
        <ClientOnly>
          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
            {particles.map((p, i) => (
              <span
                key={i}
                className="holo-particle"
                style={{
                  left: `${p.left}%`,
                  bottom: "12%",
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${p.duration}s`,
                  // tiny lateral drift via CSS variable (animation already moves up)
                  transform: `translateX(${p.drift}px)`,
                }}
              />
            ))}
          </div>
        </ClientOnly>
      ) : null}
    </div>
  );
}

function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <>{children}</>;
}
