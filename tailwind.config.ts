import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4FA3",
        secondary: "#FF7BC3",
        lightPink: "#FFE8F4",
        softBlue: "#A8D8FF",
        lightBlue: "#EDF8FF",
        darkText: "#1A1A1A"
      },
      boxShadow: {
        glow: "0 0 36px rgba(168, 216, 255, 0.75)",
        soft: "0 24px 80px rgba(255, 79, 163, 0.13)"
      }
    }
  },
  plugins: []
};

export default config;
