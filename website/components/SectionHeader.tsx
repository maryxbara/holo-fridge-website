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
        <p className="text-sm font-medium text-bodyGray dark:text-[#f3f1ec]/60">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tightish text-charcoal dark:text-[#f3f1ec] sm:text-[40px]">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-balance text-lg leading-relaxed text-bodyGray dark:text-[#f3f1ec]/70 ${
            isCenter ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
