import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-deepTurquoise">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tightish text-charcoal dark:text-pearl1 sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-balance text-lg leading-relaxed text-bodyGray dark:text-pearl1/70 ${
            isCenter ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
