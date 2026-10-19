/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#050816",
          dark: "#03050e",
          card: "#0b102b",
          cardHover: "#0e153b",
          border: "#19224d",
          borderHover: "#283777",
          subtle: "#101638",
        },
        primary: "#050816",
        secondary: "#94a3b8",
        tertiary: "#0e153b",
        "icy-blue": {
          DEFAULT: "#38bdf8",
          light: "#bae6fd",
          dim: "#0284c7",
        },
        "violet-accent": {
          DEFAULT: "#818cf8",
          light: "#c7d2fe",
          dim: "#6366f1",
        },
        "magenta-accent": {
          DEFAULT: "#e879f9",
          light: "#f5d0fe",
          dim: "#d946ef",
        },
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        "glow-ice": "0 0 25px -5px rgba(56, 189, 248, 0.25)",
        "glow-violet": "0 0 25px -5px rgba(129, 140, 248, 0.25)",
        "glow-magenta": "0 0 25px -5px rgba(232, 121, 249, 0.2)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};