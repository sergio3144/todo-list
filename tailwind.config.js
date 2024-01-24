/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'body': '#161722',
        'item': '#25273c',
      },
      colors: {
        'opacityText': '#777a92',
        'baseColor': '#fff',
        'activeText': '#2640de'
      }
    },
  },
  plugins: [],
}

