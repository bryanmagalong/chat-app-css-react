module.exports = {
  purge: [ './src/**/*.js', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '1536px',
      },
      spacing: {
        // content gap
        content: '10.313em',
        // height
        frame: '30rem',
        mfheader: '4.5rem', // mobile frame header
        'decorative-y': '43.438rem',
        'decorative-y-lg': '63.625rem',
        'submit-y': '2.125rem',
        'message-y': '1.938rem',
        // width
        'frame-x': '16.625rem',
        'decorative-x': '20.438rem',
        'decorative-x-lg': '30.563rem',
        'submit-x': '14.250rem',
        'message-x': '8rem',
        // position placement
        'lg-x': '30rem',

        //padding
        'message-padding-y': '0.313rem',
        'message-padding-x': '0.438rem',
      },
      minWidth: {
        'text-header-lg': '24.938rem',
      },
      maxWidth: {
        'text-header': '17.563rem',
        message: '8rem',
      },
      borderWidth: {
        frame: '10px',
      },
      borderRadius: {
        frame: '2rem',
        decorative: '20.125em',
        submit: '1.063rem',
        'message-left': '0.563rem 0.563rem 0.563rem 0.125rem',
        'message-right': '0.563rem 0.563rem 0.125rem 0.563rem',
      },
      fontSize: {
        'title-header': '2.375em',
        'content-header': '0.938rem',
        'avatar-name': '0.7rem',
        'avatar-status': '0.45rem',
        submit: '0.563rem',
        message: '0.438em',
      },
      margin: {
        'text-header': '3.375rem',
        'content-header': '1.313rem',
        placeholder: '1.188rem',
        'message-bottom': '0.438rem',
        'submit-button': '0.3rem',
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
            violet: '	hsl(277, 50%, 93%)',
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
};
