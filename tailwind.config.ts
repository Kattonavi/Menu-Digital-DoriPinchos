import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0b0b0d",
          surface: "#141417",
          card: "#1b1b20",
          border: "#2a2a31",
          red: "#e11d2e",
          redDark: "#a3121f",
          orange: "#ff7a1a",
          amber: "#ffb020",
          text: "#f5f5f5",
          muted: "#a1a1aa",
        },
      },
      fontFamily: {
        sans: ['Inter', "system-ui", "sans-serif"],
        display: ['"Bebas Neue"', "Impact", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0,0,0,0.5)",
        glow: "0 0 40px -10px rgba(225,29,46,0.45)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #e11d2e 0%, #ff7a1a 60%, #ffb020 100%)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(225,29,46,0.18), transparent 60%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
