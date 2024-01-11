/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors:{
        skin:"#B88E56",
        lightBrown:'#b4934c',
      }
    },
  },
  plugins: [],
}

