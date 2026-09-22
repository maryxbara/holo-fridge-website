"use client";

import { useEffect, useRef } from "react";
import PhoneMockup from "./PhoneMockup";

type Screen = { src: string; label: string; alt: string };

/** Copies of the set laid end to end so the scroll can rewind unnoticed. */
const COPIES = 4;
/** Drift speed in px/sec. */
const SPEED = 14;
/** Quiet period after the user touches the strip. */
const RESUME_DELAY = 2600;

export default function MockupCarousel({ screens }: { screens: Screen[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // One copy wide. Scrolling a whole copy lands on an identical frame, so
    // we can jump back by that much without anything visibly moving.
    const copyWidth = () => el.scrollWidth / COPIES;

    // The browser quantises scrollLeft to whole device pixels, so a drift this
    // slow has to be accumulated here and written out as an absolute position —
    // incrementing scrollLeft directly would round away to nothing every frame.
    let pos = 0;
    let lastWritten = 0;

    // Park one copy in, leaving runway to swipe backwards as well as forwards.
    const recenter = () => {
      pos = copyWidth();
      el.scrollLeft = pos;
      lastWritten = el.scrollLeft;
    };
    recenter();
    window.addEventListener("resize", recenter);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let last = 0;
    let quietUntil = 0;
    let visible = true;

    const hold = () => {
      quietUntil = performance.now() + RESUME_DELAY;
    };
    for (const evt of ["pointerdown", "touchstart", "wheel", "keydown"]) {
      el.addEventListener(evt, hold, { passive: true });
    }

    const tick = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      const w = copyWidth();
      if (w > 0) {
        if (now < quietUntil) {
          // The reader is in charge — follow their scrolling, write nothing.
          pos = el.scrollLeft;
        } else {
          // Pick up anything that moved us since our last write (momentum).
          if (Math.abs(el.scrollLeft - lastWritten) > 2) pos = el.scrollLeft;
          if (visible && !reduced.matches) pos += SPEED * dt;
          // Rewind by a whole copy; the frame either side is identical.
          if (pos >= w * 2) pos -= w;
          else if (pos < w * 0.02) pos += w;
          el.scrollLeft = pos;
          lastWritten = el.scrollLeft;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Don't burn frames while the section is off-screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        last = 0;
      },
      { threshold: 0 }
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", recenter);
      for (const evt of ["pointerdown", "touchstart", "wheel", "keydown"]) {
        el.removeEventListener(evt, hold);
      }
    };
  }, [screens.length]);

  return (
    <div className="marquee-mask-wide -mx-5 sm:-mx-8">
      <div
        ref={scrollerRef}
        aria-label="App screens"
        className="flex overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Padding lives on the track so the glow isn't clipped by the scroller */}
        <div className="flex py-16">
          {Array.from({ length: COPIES }).flatMap((_, copy) =>
            screens.map((s) => (
              <div
                key={`${copy}-${s.src}`}
                aria-hidden={copy > 0}
                className="mr-8 w-[230px] shrink-0 sm:mr-10 sm:w-[260px]"
              >
                <PhoneMockup src={s.src} alt={s.alt} glow priority={false} />
                <p className="mt-6 text-center text-sm font-medium text-charcoal/85 dark:text-pearl1/85 sm:text-base">
                  {s.label}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
