/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}", // Includes src if you use it
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ffbd5d', // Your main logo color
          dark: '#e0a340',    // Darker hover state
        },
      },
    },
  },
  plugins: [],
}