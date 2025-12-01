/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {}
  },
  plugins: [require("flowbite/plugin")]
};
