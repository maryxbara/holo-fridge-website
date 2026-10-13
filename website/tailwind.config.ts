import type { Config } from "tailwindcss";

// Brand tokens — see "holofridge.com — Upgrade Spec": ivory, warm grey, one
// turquoise accent (links + the single underline in the final CTA). No
// gradients, nothing that loops.

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        ivory: "#F7F5F0",
        ivoryDeep: "#EFECE5",
        ivoryLine: "#E4E0D7",
        // Type
        charcoal: "#24221F",
        bodyGray: "#6F6A62",
        divider: "#E4E0D7",
        // Accent — links and the CTA underline only
        deepTurquoise: "#32C0B5",
        glowTurquoise: "#A6F5E8",
        // Kept for pages that still reference them (legal, guides)
        pearl1: "#F7F5F0",
        pearl2: "#EFECE5",
        pearl3: "#F7F5F0",
        // Dark theme
        ink: "#0F0E0C",
        inkDeep: "#161513",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        // Quiet elevation — warm, low-contrast
        card: "0 1px 2px rgba(36, 34, 31, 0.04), 0 8px 24px -16px rgba(36, 34, 31, 0.18)",
        phone: "0 24px 48px -24px rgba(36, 34, 31, 0.35)",
        // Legacy names still referenced by inner pages
        glass: "0 1px 2px rgba(36, 34, 31, 0.04), 0 8px 24px -16px rgba(36, 34, 31, 0.18)",
        glassHover: "0 2px 4px rgba(36, 34, 31, 0.05), 0 16px 32px -16px rgba(36, 34, 31, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
