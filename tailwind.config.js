const { Container } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        xl: "1400px",
      },
      colors: {
        "Pale-Blue": " hsl(243, 100%, 93%)",
        "Grayish-Blue": " hsl(229, 7%, 55%)",
        "Dark-Blue": " hsl(228, 56%, 26%)",
        "Very-Dark-Blue": " hsl(229, 57%, 11%)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
