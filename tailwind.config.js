/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        white: '#e6f1ff',
        green: {
          DEFAULT: '#64ffda',
          400: '#32cc44',
          700: '#2ba839',
          800: '#276749'
        },
        'bg-primary': '#0a192f',
        'bg-secondary': '#112240',
        'text-primary': '#ccd6f6',
        'text-secondary': '#8892b0',
      },
    },
  },
  plugins: [],
} 