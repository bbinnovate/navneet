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
        black: "var(--color-black)",
        white: "var(--color-white)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        green: "var(--color-green)",
        surface: "var(--color-background-light)",
        subtle: "var(--color-background-off)",
        muted: "var(--color-text-muted)",
        border: "var(--color-border)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};

export default config;
