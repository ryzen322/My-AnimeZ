/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Robot", "sans-serif"],
      },
      backgroundColor: {
        primaryColor: "#101726",
      },
    },
  },
  plugins: [],
};
