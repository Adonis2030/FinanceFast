/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-2xl": { max: "1535px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
        "max-xs": { max: "399px" },
      },
      fontSize: {
        40: "40px",
        32: "32px",
        16: "16px",
      },
      spacing: {
        22: "88px",
      },
      width: {
        500: "500px",
      },
      fontFamily: {
        satoshiVariable: ["Satoshi-Variable", "sans-serif"],
        satoshiLight: ["Satoshi-Light", "sans-serif"],
        grifter: ["Grifter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
