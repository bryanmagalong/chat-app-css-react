const plugin = require('tailwindcss/plugin');
const divPlugin = require('./src/plugins/div-plugin');

module.exports = {
  purge: [ './src/**/*.js', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      lg: '1024px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
    extend: {
      gap: {
        content: '10.313em',
      },
      minWidth: {
        'text-header-lg': '24.938rem',
      },
      maxWidth: {
        'text-header': '17.563rem',
      },
      height: {
        frame: '30rem',
        mfheader: '4.5rem',
      },
      borderWidth: {
        frame: '10px',
      },
      borderRadius: {
        frame: '2rem',
      },
      fontSize: {
        'title-header': '2.375em',
        'content-header': '0.938rem',
      },
      margin: {
        'text-header': '3.375rem',
        'content-header': '1.313rem',
      },
      colors: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ plugin(divPlugin) ],
};
