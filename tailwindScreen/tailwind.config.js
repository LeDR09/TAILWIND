/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {

    screens: {

      'xs':'320px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    ,
    extend: {
      colors: {
        ws:'#123456', // added new color
      }
    },
  },
  plugins: [],
}

