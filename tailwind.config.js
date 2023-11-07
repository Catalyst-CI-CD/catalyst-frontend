/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3333",
        secondary: "#395B64",
        ternary: "#A5C9CA",
        accent: "#D2DE32",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
