/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/mainPageWithLogin/newPostPage.js'],
  theme: {
    extend: {
      colors: {
        // rose: colors.rose,
      },
    },
  },
  plugins: [
    // ...

    // require('tailwindcss'),
    // require('autoprefixer'),
    // require('forms')
    // ...
  ]
}

