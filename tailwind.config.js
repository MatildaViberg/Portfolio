/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/background.png')",
      },
    },
    fontFamily: {
      signature: ["Sofia Sans Extra Condensed"],
    },
  },
  plugins: [],
};
