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
          dark: "#0F0B1D",
          white: "#FFFFFF",
          offwhite: "#F7F6FF",
          gray: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(108, 60, 255, 0.18)",
        "glow-sm": "0 0 20px rgba(108, 60, 255, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
