import { type Locale } from "@/lib/i18n";
import { APP_RATING, APP_RATING_COUNT } from "@/lib/site";
import { t } from "@/lib/translations";

type ProofStripProps = {
  locale: Locale;
  className?: string;
};

/**
 * One line under the download button: rating + count.
 * Renders nothing unless both NEXT_PUBLIC_APP_RATING and
 * NEXT_PUBLIC_APP_RATING_COUNT are set — never a placeholder.
 */
export default function ProofStrip({ locale, className = "" }: ProofStripProps) {
  if (!APP_RATING || !APP_RATING_COUNT) return null;

  return (
    <p
      className={`flex items-center gap-2 text-sm text-charcoal/85 dark:text-pearl1/85 ${className}`}
    >
      <svg
        aria-hidden
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="shrink-0 -translate-y-[1px] text-deepTurquoise"
      >
        <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8L12 2.5z" />
      </svg>
      <span className="font-medium">{t(locale, "proofRating", { rating: APP_RATING })}</span>
      <span aria-hidden className="text-bodyGray dark:text-pearl1/50">·</span>
      <span className="text-bodyGray dark:text-pearl1/60">
        {t(locale, "proofRatingCount", { count: APP_RATING_COUNT })}
      </span>
    </p>
  );
}
