/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ["./src/**/*.{html,js,vue}", "index.html"],
  theme: {
    extend: {
      padding: {
        'navitem': '38px',
      },
      fontSize: {
        brand: ['22px', '33px']
      },
      width: {
        '100': '100px',
      },
      height: {
        '100': '100px',
      },
      boxShadow: {
        'user-card': '0px 0px 48px 0px rgba(85, 85, 85, 0.25)'
      },
      colors: {
        primary: 'rgba(79, 53, 155, 1)',
        subtitle: 'rgba(92, 102, 114, 1)',
        title: 'rgba(38, 48, 62, 1)',
        border: 'rgba(216, 217, 221, 1)',
        brand: 'rgba(72, 91, 105, 1)',
      }
    }
  },
  plugins: [require("@tailwindcss/forms")],
}

