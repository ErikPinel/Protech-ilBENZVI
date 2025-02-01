/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#48cae4',
          DEFAULT: '#00b4d8',
          dark: '#0096c7',
        }
      },
      boxShadow: {
        'elevation-1': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 6px 12px rgba(0, 0, 0, 0.15)',
        'elevation-3': '0 8px 24px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};