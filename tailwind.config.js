/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    extend: {
      opacity:{
        '67':'.67',
        '60':'.60',
        '70':'.7',
        '80':'.80'
      },
      backgroundImage:{
        'img':"url('./src/image/582587-brick.jpg')"
      }
    },
  },
  plugins: [],
}

