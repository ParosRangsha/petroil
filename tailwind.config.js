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
        ban: "url(./src/img/banner.png)",
        banOne: 'url(./src/img/ban1.png)',
        banTwo: 'url(./src/img/ban2.png)',
        banThree: 'url(./src/img/ban3.png)',
      },
      fontFamily:{
        'pops': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}