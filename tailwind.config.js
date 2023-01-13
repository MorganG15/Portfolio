/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        GreenLt: "#dde6d5",
        GreenMd: "#a3b899",
        GreenDk: "#667b68",
        GreenSh: "#3a423b",
      }
    },
  },
  plugins: [],
}