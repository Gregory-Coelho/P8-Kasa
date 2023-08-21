const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#FF5A5F",
      lightgrey: "#F2F2F2",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      grey: colors.grey,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      backgroundImage: {
        home: "url('./assets/home.png')",
        about: "url('./assets/about.png')",
      },
    },
  },
  plugins: [],
};
