/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        md: 'rgba(10, 10, 10, 0.08) 0px 16px 24px 0px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      bgClr: '#f2f2f2',
      black: '#18171c',
      grayLight: '#f4f4f6',
      grayMedium: '#ceced3',
      grayDark: '#9795a3',
      blue: 'rgba(60, 105, 251, 0.461)',
    },
  },
  plugins: [],
};
