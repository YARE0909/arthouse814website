import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ChelseaMarket: ["Chelsea Market", "cursive"],
        Montserrat: ["Montserrat", "sans-serif"],
        Jokerman: ["var(--font-jokerman)", "sans-serif"],
        LucidaCalligraphy: ["var(--font-lucia-calligraphy)", "sans-serif"],
        Elephant: ["var(--font-elephant)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
