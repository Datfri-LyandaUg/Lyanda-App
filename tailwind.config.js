/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {

      width: {
        '82': '20.5rem', // Using '82' as a key for 20.5rem
      }
    },
  },
  plugins: [],
};
