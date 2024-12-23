/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost"],
        inter: ["Inter"],
        roboto: ["Roboto"],
        poppins: ["Poppins"],
        lato: ["Lato"],
        lobster: ["Lobster"],
        montserrat: ["Montserrat"],
        opensans: ["Open Sans"],
      }
    },
  },
  plugins: [],
}

