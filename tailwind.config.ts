import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFAFA",
        textGray: "#828282",
        logoYellow: "#D9B700",
        dark: "#211D1D",
        outlineGray: "#ABABAB",
      },
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
        secoundary: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
