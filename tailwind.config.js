/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //If you're using the src/ directory
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fef6e4",
        headline: "#001858",
        paragraph: "#172c66",
        buttonText: "#001858",
        button: "#f582ae",
        stroke: "#001858",
        main: "#f3d2c1",
        highlight: "#fef6e4",
        secondary: "#8bd3dd",
        tertiary: "#f582ae",
      },
    },
  },
  plugins: [],
};
