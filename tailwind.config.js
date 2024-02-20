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
        'pageMain': 'url(/src/assets/BGARREDONDADO.png)',
        'pageGit': 'url(/src/assets/background-branco.png)'
      },
      colors: {
        Cinza: "#384252",
        overlay: 'rgba(0, 0, 0, 0.8)',

      },
      fontFamily: {
        firaCode: ['Fira Code Light'],
        montserrat: ['Montserrat thin '] // Altere 'Fire Code' para o nome exato da sua fonte, se necessário
      }
    },
  },
  plugins: [],
}