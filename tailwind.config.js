/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ['"Archivo"', "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        midnight: {
          DEFAULT: "#050816",
          dark: "#03050c",
          card: "#0b1022",
          cardHover: "#0e152e",
          border: "#18223d",
          borderHover: "#243257",
        },
        primary: "#050816",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.4)",
        card: "0 4px 20px -2px rgba(2, 6, 23, 0.6)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};