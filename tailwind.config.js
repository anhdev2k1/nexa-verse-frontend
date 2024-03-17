/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#1A120B'
      },
      borderColor: {
        primary: '#c7c1c14b'
      },
      backgroundImage: {
        'main-overlay': "url('./assets/images/overlay1.jpg')"
      },
      backdropBlur: {
        filter: '5px'
      }
    }
  },
  plugins: []
}
