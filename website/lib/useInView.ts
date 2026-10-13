"use client";

import { useEffect, useRef, useState } from "react";

/**
 * True once the element has entered the viewport. Fires once and disconnects —
 * scroll motion on this site happens one time, never on the way back out.
 * Without IntersectionObserver (or with JS disabled) content is simply shown.
 */
export function useInView<T extends HTMLElement>(rootMargin = "-40px 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
