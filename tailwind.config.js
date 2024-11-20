/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
  ],
  theme: {
    colors:{
      'blue': {
        light: '#8ECAE6',
        DEFAULT: '#219EBC',
        dark: '#023047',
      },
      'yellow': {
        DEFAULT: 'FFB703',
      },
      'orange': {
        DEFAULT: 'FB8500',
      },
    },
  },
  plugins: [],
}