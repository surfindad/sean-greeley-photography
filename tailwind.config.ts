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
        background: "#0a0a0a",
        surface: "#141414",
        "surface-2": "#1e1e1e",
        border: "#2a2a2a",
        "text-muted": "#888888",
        "text-secondary": "#bbbbbb",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        "ultra-wide": "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
