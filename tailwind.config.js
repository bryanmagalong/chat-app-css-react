const plugin = require('tailwindcss/plugin');
const divPlugin = require('./src/plugins/div-plugin');

module.exports = {
  purge: [ './src/**/*.js', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': '1440px',
      '3xl': '1536px',
    },
    height: {
      frame: '30rem',
    },
    borderWidth: {
      frame: '10px',
    },
    borderRadius: {
      frame: '2rem',
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      pale: {
        violet: 'hsl(276, 100%, 81%)',
      },
      moderate: {
        violet: 'hsl(276, 55%, 52%)',
      },
      dark: {
        grayish: {
          violet: 'hsl(270, 7%, 64%)',
        },
        desaturated: {
          violet: 'hsl(271, 15%, 43%)',
        },
      },
      light: {
        grayish: {
          violet: 'hsl(270, 20%, 96%)',
        },
        magenta: 'hsl(293, 100%, 63%)',
        violet: 'hsl(264, 100%, 61%)',
      },
      very: {
        dark: {
          desaturated: {
            violet: 'hsl(271, 36%, 24%)',
          },
        },
        light: {
          magenta: 'hsl(289, 100%, 72%)',
          grayish: 'hsl(300, 2%, 98%)',
        },
      },
      grayish: {
        blue: 'hsl(206, 6%, 79%)',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ plugin(divPlugin) ],
};