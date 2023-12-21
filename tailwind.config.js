/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      bgClr: '#f2f2f2',
      black: '#18171c',
      grayLight: '#f4f4f6',
      grayMedium: '#9795a3',
    },
  },
  plugins: [],
};
