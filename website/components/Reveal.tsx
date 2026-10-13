"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/lib/useInView";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in seconds — pass index * 0.06 for a soft cascade. */
  delay?: number;
  y?: number;
  className?: string;
};

/** Fade-up on scroll at 400 ms, once. Pure CSS transition; see .reveal in globals.css. */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className = "",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style = {
    transitionDelay: delay ? `${delay}s` : undefined,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-shown" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
