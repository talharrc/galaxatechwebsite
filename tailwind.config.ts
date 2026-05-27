import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#6C3CFF",
          mid: "#8D5CFF",
          lavender: "#C0B4FC",
          glow: "rgba(108,60,255,0.15)",
          "glow-strong": "rgba(108,60,255,0.3)",
        },
        surface: {
          bg: "#08070F",
          card: "#0F0D1A",
          elevated: "#161228",
          border: "#1E1A2E",
          "border-glow": "#3D2D8A",
        },
        text: {
          primary: "#F0EEFF",
          secondary: "#9B93C0",
          muted: "#5A5278",
          accent: "#C0B4FC",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(108,60,255,0.2), 0 0 80px rgba(108,60,255,0.08)",
        "glow-btn": "0 0 30px rgba(108,60,255,0.4)",
        "glow-sm": "0 0 20px rgba(108,60,255,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
