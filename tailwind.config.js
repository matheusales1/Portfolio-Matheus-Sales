/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'page': 'url(/src/assets/7246.jpg)',
        'se7volei': 'url(/src/assets/se7volei.jpeg)',
        'pageServiços': 'url(/src/assets/bg-img-serviços.png)',
        'pageMain': 'url(/src/assets/teste1.jpg)'
      },
      colors: {
        Cinza: "#313131",
        overlay: 'rgba(0, 0, 0, 0.8)',

      },
    },
  },
  plugins: [],
}