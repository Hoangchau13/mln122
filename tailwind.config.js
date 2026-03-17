/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DA251D",
        secondary: "#FFCD00",
        navy: "#1E3A8A",
        light: "#F3F4F6",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}
