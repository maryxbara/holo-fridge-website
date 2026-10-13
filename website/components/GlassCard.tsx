import { forwardRef, type HTMLAttributes } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "article";
  variant?: "default" | "strong";
};

/**
 * Quiet card: flat surface, hairline border, low warm shadow.
 * The name is historical — the glass treatment was retired with the ivory
 * redesign, but inner pages still import it under this name.
 */
const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className = "", variant = "default", children, ...rest }, ref) => {
    const base = variant === "strong" ? "glass-strong" : "glass";
    return (
      <div
        ref={ref}
        className={`${base} rounded-3xl p-6 sm:p-8 ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
