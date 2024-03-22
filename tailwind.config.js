/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,tsx,js,jsx}",
    "./src/*.{vue,ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3921F5',
        secondary: '#1E0FC2',
        textGray: '#4F4F4F',
        darkFooter: '#141F39',
        grayIcon: '#B4B6C4'
      }
    },
  },
  plugins: [],
}