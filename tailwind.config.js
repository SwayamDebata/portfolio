/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    screens: {
      'lg2': {'max': '1623px'},
      'lg': {'max': '1023px'},
      'tl': {'max': '790px'},
    },
    extend: {
      backgroundImage: {
        'back': "url('./src/assets/images/bg.jpg')",
        'skills': "url('./src/assets/images/banner-bg.png')"
      },
      fontFamily: {
        press_start: ['"Press Start 2P", "cursive"'],
      },
    },
  },
  plugins: [],
}

