/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    screens: {
      'lg2': {'min': '1624px'}, // Larger screens with min-width: 1624px
      'lg': {'min': '1024px'},   // Medium screens with min-width: 1024px
      'tl': {'min': '791px'},    // Small screens with min-width: 791px
    },
    extend: {
      backgroundImage: {
        'back': "url('./src/assets/images/bg.jpg')",
        'skills': "url('./src/assets/images/banner-bg.png')"
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
