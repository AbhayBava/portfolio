module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        theme: 'background-color, color, border-color, text-decoration-color, fill, stroke',
      },
    },
  },
  plugins: [],
};