/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#00d1b3',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'heading-1': '1.785rem',
        'heading-2': '1.595rem',
        'heading-3': '1.25rem',
        'body': '1rem',
        'body-sm': '0.875rem',
        'caption': '0.813rem',
        'micro': '0.65rem',
      },
      screens: {
        mobile: {'max': '639px'},
      },
    },
  },
  plugins: [],
};