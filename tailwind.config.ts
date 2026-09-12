import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0A08",
        panel: "#121009",
        panel2: "#17140D",
        line: "#2B2519",
        accent: "#3E6BF0",
        accentBright: "#5C86FF",
        paper: "#EDE7DA",
        muted: "#95897390",
        mutedSolid: "#96897A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
