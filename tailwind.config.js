/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}", // Just in case you have a src folder
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ffbd5d', // Your Logo Color
          dark: '#e0a340',    // Hover Color
        },
      },
    },
  },
  plugins: [],
}