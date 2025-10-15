/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#374151', // Custom gray for hover effects
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable class-based dark mode
}
