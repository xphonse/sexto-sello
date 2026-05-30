import type { Config } from "tailwindcss";

// Import numeric tokens from the data package (compiled dist).
// Falls back to source if the package alias doesn't resolve at build time.
let fontSizes: Record<string, number>;
let spacing: Record<string, number>;
let radii: Record<string, number>;
let elevation: { e1Web: string };

try {
  const tokens = require("../../libs/data/dist/tokens");
  fontSizes = tokens.fontSizes;
  spacing = tokens.spacing;
  radii = tokens.radii;
  elevation = tokens.elevation;
} catch {
  // Fallback: inline the values so the build never breaks
  fontSizes = { xs: 12, sm: 14, base: 16, lg: 18, xl: 20, "2xl": 24, "3xl": 30, "4xl": 40 };
  spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, "2xl": 24, "3xl": 32, "4xl": 48, "5xl": 64 };
  radii = { sm: 8, md: 12, lg: 16, pill: 999 };
  elevation = { e1Web: "0 1px 3px rgba(0, 0, 0, 0.08)" };
}

const toPixelMap = (map: Record<string, number>): Record<string, string> =>
  Object.fromEntries(Object.entries(map).map(([k, v]) => [k, `${v}px`]));

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--c-bg)",
        surface: "var(--c-surface)",
        text: "var(--c-text)",
        "text-muted": "var(--c-text-muted)",
        border: "var(--c-border)",
        accent: "var(--c-accent)",
        "accent-text": "var(--c-accent-text)",
      },
      fontSize: toPixelMap(fontSizes),
      spacing: toPixelMap(spacing),
      borderRadius: {
        ...toPixelMap(radii),
        pill: "999px",
      },
      boxShadow: {
        e1: elevation.e1Web,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
