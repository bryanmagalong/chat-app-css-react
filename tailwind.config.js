module.exports = {
  purge: [ './src/**/*.js', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      violet: {
        pale: 'hsl(276, 100%, 81%)',
        moderate: 'hsl(276, 55%, 52%)',
        desaturated: {
          dark: 'hsl(271, 15%, 43%)',
          verydark: 'hsl(271, 36%, 24%)',
        },
      },
      grayish: {
        blue: 'hsl(206, 6%, 79%)',
        light: {
          violet: 'hsl(270, 20%, 96%)',
        },
        dark: {
          violet: 'hsl(270, 7%, 64%)',
        },
      },
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
