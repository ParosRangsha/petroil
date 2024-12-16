/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: '1140px'
      },
      backgroundImage: {
        ban: "url(./src/img/banner.png)"
      }
    },
  },
  plugins: [],
}