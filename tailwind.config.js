module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
