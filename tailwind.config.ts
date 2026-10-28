import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#6d281d",
          dark:    "#3d1410",
          deeper:  "#1a0e0c",
        },
        gold: {
          DEFAULT: "#f7bf04",
          dark:    "#c49a03",
        },
        cream: {
          DEFAULT: "#f5ede8",
          warm:    "#fffdf5",
        },
        text: {
          body: "#4a4a4a",
        },
      },
      fontFamily: {
        sans:  ["var(--font-lexend)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      fontSize: {
        "display": ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};

export default config;