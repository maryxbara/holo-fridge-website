import type { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

/**
 * Plain section shell. Motion lives on the content (Reveal), not the section,
 * so each block fades up exactly once as it enters the viewport.
 */
export default function SectionWrapper({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative w-full py-16 sm:py-24 lg:py-28 ${className}`}
    >
      <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
