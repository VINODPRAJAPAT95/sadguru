/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EF7F1A",
          50: "#FFF4E9",
          100: "#FEE6CC",
          200: "#FCC998",
          300: "#FBAD65",
          400: "#F49638",
          500: "#EF7F1A",
          600: "#D66C0F",
          700: "#B0570C",
          800: "#87420A",
          900: "#5E2E07",
        },
        charcoal: {
          DEFAULT: "#2B2A29",
          50: "#F5F5F4",
          100: "#E5E4E3",
          200: "#C7C5C3",
          300: "#A0A0A0",
          400: "#6E6C6A",
          500: "#4A4948",
          600: "#3A3938",
          700: "#2B2A29",
          800: "#1E1D1C",
          900: "#121111",
        },
        cream: "#FBF3E7",
      },
      fontFamily: {
        display: ["Cooper Black", "Georgia", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(43, 42, 41, 0.25)",
      },
      backgroundImage: {
        pattern: "url('/patterns/bg-pattern.svg')",
      },
      backgroundSize: {
        pattern: "cover",
      },
      backgroundPosition: {
        pattern: "center top",
      },
    },
  },
  plugins: [],
};