/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      YoungSerif: ["Young Serif", "sans-serif"],
      Outfit: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        // primary
        Nutmeg: "#854632",
        DarkRaspberry: "#7B284F",

        // neutral

        White: "#FFFFFF",
        RoseWhite: "#FFF5FA",
        Eggshell: "#F3E6D8",
        LightGrey: "#E4DED8",
        WengeBrown: "#5F574E",
        DarkCharcoal: "#302D2C",
      },
    },
  },
  plugins: [],
};
