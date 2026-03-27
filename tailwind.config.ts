import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slatebase: "#0b0f19",
        panel: "#111827",
        edge: "rgba(148, 163, 184, 0.18)",
        glow: "#5eead4",
        neon: "#60a5fa",
        violet: "#8b5cf6",
      },
      boxShadow: {
        ambient: "0 0 0 1px rgba(148,163,184,0.08), 0 22px 60px rgba(15,23,42,0.45)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
