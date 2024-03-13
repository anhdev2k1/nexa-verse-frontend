/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#222831',

        'bg-blur': 'rgba(255,255,255,0.2)'
      },
      borderColor: {
        primary: '#c7c1c14b'
      },
      backgroundImage: {
        'bg-overlay': "url('./assets/images/overlay_3.jpg')"
      },
      backdropBlur: {
        filter: '5px'
      }
    }
  },
  plugins: []
}
