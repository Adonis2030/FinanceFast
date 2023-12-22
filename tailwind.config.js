/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        22: "88px",
      },
      width: {
        500: "500px",
      },
    },
  },
  plugins: [],
};
