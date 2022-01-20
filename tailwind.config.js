module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
      "./src/components/*.{js,jsx}",
    ],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
