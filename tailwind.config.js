/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens:{
    //   md:"1025px"
    // }
    // ,
    extend: {
      colors:{
        primary:"#4f028f"
      },
      fontFamily:{
        popins:["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

