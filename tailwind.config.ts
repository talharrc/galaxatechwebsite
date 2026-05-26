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
        primary: {
          DEFAULT: "#6C3CFF",
          mid: "#8D5CFF",
          light: "#C0B4FC",
        },
        dark: "#0F0B1D",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #6C3CFF 0%, #8D5CFF 50%, #C0B4FC 100%)",
        "gradient-brand-r": "linear-gradient(135deg, #C0B4FC 0%, #8D5CFF 50%, #6C3CFF 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
