/** @type {import('tailwindcss').Config} */

const { secondary } = require('daisyui/src/colors')
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3e36b0',
        secondary: '#a6def7'
      }
    },
  },
  plugins: [require("daisyui")],
}
