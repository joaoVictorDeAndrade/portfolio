/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0D0E0F',
        footer: '#1d1f21',
        neutral: {
          light: '#C5C5C5',
          dark: '#0d0e0f',
        },
        primary: {
          main: '#FF8660',
          dark: '#D5491D',
        },
        secondary: {
          main: '#9A33FF',
        },
        tertiary: {
          main: '#5BADFF',
          dark: '#1373D1',
        },
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: '425px',
      },
    },
  },
};
