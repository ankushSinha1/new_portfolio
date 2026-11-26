/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: '#a6b3c9',
        'light-slate': '#c4cede',
        'lightest-slate': '#eef4fb',
        white: '#f8fafc',
        green: {
          DEFAULT: '#69dfb9',
          400: '#69dfb9',
          700: '#087c5a',
          800: '#06694c'
        },
        'bg-primary': '#0c1421',
        'bg-secondary': '#121e2e',
        'text-primary': '#eef4fb',
        'text-secondary': '#718198',
      },
    },
  },
  plugins: [],
} 