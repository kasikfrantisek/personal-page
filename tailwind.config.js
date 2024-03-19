module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      'h0-light-mobile': [
        '100px',
        {
          fontWeight: 200,
          lineHeight: '100px',
          letterSpacing: '-1.4px',
        },
      ],
      'h0-mobile': [
        '100px',
        {
          fontWeight: 600,
          lineHeight: '100px',
          letterSpacing: '-1.4px',
        },
      ],
      'h0-light': [
        '150px',
        {
          fontWeight: 200,
          lineHeight: '150px',
          letterSpacing: '-1px',
        },
      ],
      h0: [
        '150px',
        {
          fontWeight: 600,
          lineHeight: '150px',
          letterSpacing: '2px',
        },
      ],
      h1: [
        '70px',
        {
          fontWeight: 600,
          lineHeight: '70px',
          letterSpacing: '-1.4px',
        },
      ],
      'h1-light': [
        '70px',
        {
          fontWeight: 300,
          lineHeight: '70px',
          letterSpacing: '-1.4px',
        },
      ],
      'h1-mobile': [
        '45px',
        {
          fontWeight: 600,
          lineHeight: '45px',
          letterSpacing: '-0.9px',
        },
      ],
      'h1-light-mobile': [
        '45px',
        {
          fontWeight: 300,
          lineHeight: '45px',
          letterSpacing: '-0.9px',
        },
      ],
      h2: [
        '60px',
        {
          fontWeight: 600,
          lineHeight: '60px',
          letterSpacing: '-1.2px',
        },
      ],
      'h2-mobile': [
        '38px',
        {
          fontWeight: 600,
          lineHeight: '38px',
          letterSpacing: '-0.76px',
        },
      ],
      h3: [
        '45px',
        {
          fontWeight: 600,
          lineHeight: '45px',
          letterSpacing: '-0.9px',
        },
      ],
      'h3-light': [
        '45px',
        {
          fontWeight: 500,
          lineHeight: '45px',
          letterSpacing: '-0.9px',
        },
      ],
      h4: [
        '38px',
        {
          fontWeight: 600,
          lineHeight: '38px',
          letterSpacing: '-0.76px',
        },
      ],
      'h4-light': [
        '38px',
        {
          fontWeight: 400,
          lineHeight: '38px',
          letterSpacing: '-0.76px',
        },
      ],
      h5: [
        '30px',
        {
          fontWeight: 600,
          lineHeight: '30px',
          letterSpacing: '-0.76px',
        },
      ],
      'h5-light': [
        '30px',
        {
          fontWeight: 400,
          lineHeight: '30px',
          letterSpacing: '-0.76px',
        },
      ],
      'p-large': [
        '70px',
        {
          fontWeight: 500,
          lineHeight: '70px',
          letterSpacing: '-1.4px',
        },
      ],
      p: [
        '20px',
        {
          fontWeight: 300,
          lineHeight: '28px',
          letterSpacing: '-0.2px',
        },
      ],
      'p-demi': [
        '20px',
        {
          fontWeight: 600,
          lineHeight: '28px',
          letterSpacing: '-0.2px',
        },
      ],
      'p-small-medium': [
        '16px',
        {
          fontWeight: 500,
          lineHeight: '19.2px',
          letterSpacing: '-0.16px',
        },
      ],
      'p-small': [
        '16px',
        {
          fontWeight: 400,
          lineHeight: '19.2px',
          letterSpacing: '-0.16px',
        },
      ],
      'overline-14-medium': [
        '14px',
        {
          fontWeight: 500,
          lineHeight: '14px',
          letterSpacing: '0.5px',
        },
      ],
      'overline-14': [
        '14px',
        {
          fontWeight: 600,
          lineHeight: '14px',
          letterSpacing: '0.5px',
        },
      ],
      'overline-16': [
        '16px',
        {
          fontWeight: 400,
          lineHeight: '16px',
          letterSpacing: '1px',
        },
      ],
      'overline-16-light': [
        '16px',
        {
          fontWeight: 300,
          lineHeight: '16px',
          letterSpacing: '1px',
        },
      ],
      'overline-20': [
        '20px',
        {
          fontWeight: 600,
          lineHeight: '30px',
          letterSpacing: '0.6px',
        },
      ],
    },
    extend: {
      fontFamily: {
        hoves: ['Nohemi'],
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
    },
  },
  plugins: [],
};
