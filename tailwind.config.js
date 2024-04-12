/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {

    screens: {
      'sm': '700px',

      'md': '1000px',

      'lg': '1250px',
    },

    
    extend: {
        fontFamily:{
          pro: ["Be Vietnam Pro", "sans-serif"]
        }


    },
  },
  plugins: [],
}

