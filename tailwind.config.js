/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ash": "#333333",
        "green": "#56B45E",
        "lightBg": "#F1F5F9",
        "leftGrad": "#BBEAFA",
        "midGrad": "#FAEEF0",
        "rightGrad": "#FBE4D1",
        "gold": "#FFD700",
        "inactive": "#b2beb5"
      },
      fontFamily: {
        "montserrat": "Montserrat"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
