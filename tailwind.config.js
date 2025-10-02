const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      '2xl': '1440px',
    },
    extend: {
      screens: {
        ...defaultTheme.screens,
        '2xl': '1440px'
      },
      fontFamily: {
        montserrat: [
          'Montserrat',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        oswald: [
          'Oswald',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ]
      },
    },
  },
  plugins: [],
}
