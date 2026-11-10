import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: {
        paper: "#fdfcf9",
        surface: "#fffefa",
        ink: "#151b22",
        muted: "#444d51",
        line: "#dcded3",
        charcoal: "#252630",
        night: "#1b2b33",
        sand: "#f6f3ea",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Avenir Next", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
