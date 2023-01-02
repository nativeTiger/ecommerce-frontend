/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        green: "#0C8747",
        lightGreen: "#0C874791",
        darkGray: "#120E0F",
        gray: "#707070",
        lightGray: "#00000063",
        darkLight: "#D7D7D7",
      },
    },
  },
  plugins: [],
};
