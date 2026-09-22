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
    <div
      className={
        isCenter
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] text-deepTurquoise ${
            isCenter ? "" : ""
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-4xl font-semibold tracking-tightish text-charcoal dark:text-pearl1 text-balance sm:text-5xl ${
          eyebrow ? "" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-lg leading-relaxed text-bodyGray dark:text-pearl1/70 text-balance ${
            isCenter ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
