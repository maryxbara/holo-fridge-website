import type { Config } from "tailwindcss";

// Enable dark mode with class strategy

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepTurquoise: "#32C0B5",
        glowTurquoise: "#A6F5E8",
        pearl1: "#F8FCFF",
        pearl2: "#ECF5F7",
        pearl3: "#F5F7FA",
        charcoal: "#262626",
        bodyGray: "#6B7280",
        divider: "#DDE3EA",
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
        glass: "0 30px 80px -30px rgba(50, 192, 181, 0.18)",
        phone: "0 40px 80px -20px rgba(38, 38, 38, 0.25)",
        glassHover: "0 40px 100px -30px rgba(50, 192, 181, 0.28)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        breathe: "breathe 8s ease-in-out infinite",
        floatUp: "floatUp 10s linear infinite",
        lightSweep: "lightSweep 12s ease-in-out infinite",
        drift: "drift 30s linear infinite",
        marquee: "marquee 42s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(0.99)" },
          "50%": { transform: "scale(1.01)" },
        },
        floatUp: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-160px) translateX(8px)", opacity: "0" },
        },
        lightSweep: {
          "0%, 80%, 100%": { backgroundPosition: "-200% 0" },
          "85%, 95%": { backgroundPosition: "200% 0" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Rightward scroll. Track holds 4 copies, so -50% lands on an identical frame.
        marquee: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
