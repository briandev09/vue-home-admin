/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize:{
        h1:'2.6rem'
      },
      screens:{
        xs:'475px'
      },
      colors:{
        main:'#FAFAFA',
        subMain:'#CCE5E2',
        text:'#555555',
        subText:'#8E8E8E',
        button:'#F2F2F2',
        hover:"#EAEAEA"
      }
    },
  },
  plugins: [],
}

