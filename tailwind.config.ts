import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // The five locked tokens. Nothing else gets a colour name.
      colors: {
        ink: "#01161E",    // page background
        teal: "#124559",   // surface — cards, nav, rows
        air: "#598392",    // accent — links, buttons, active nav
        beige: "#EFF6E0",  // primary text
        ash: "#AEC3B0",    // muted text, borders, dividers
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["Switzer", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
