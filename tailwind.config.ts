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
      keyframes: {
        shine: {
          "0%, 100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(2)" },
        },
        navHome: {
          "0%, 100%": { rotate: "-96deg" },
          "50%": { rotate: "-83deg" },
        },
        navTrivia: {
          "0%": { rotate: "0deg" },
          "100%": { rotate: "360deg" },
        },
        navGames: {
          "0%, 100%": { rotate: "12deg" },
          "50%": { rotate: "-12deg" },
        },
        bright: {
          "0%, 100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(5.5)" },
        },
        lost: {
          "0%, 100%": {
            scale: "1",
          },
          "50%": {
            scale: "3.5",
          },
        },
      },
      animation: {
        shine: "shine 3s ease infinite;",
        navHome: "navHome 1.5s ease infinite",
        navTrivia: "navTrivia 1s ease infinite",
        navGames: "navGames 1.5s ease infinite",
        bright: "bright 1s ease infinite",
        lost: "lost 1.5s",
      },
      boxShadow: {
        witch: "0 0 10px black",
      },
    },
  },
  plugins: [],
};
export default config;
