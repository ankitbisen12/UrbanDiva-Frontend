/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tail:{
          100:'#FEFEFF',
        },
        discount: {
          100: "#1E1F26",
        },
        footer: {
          100: "#202021",
          200:"#FE8E9C",
        },
        btn:{
          100:"#1E1E27"
        },
        shipping:{
          100:"#EDECEB"
        }
      },
      boxShadow: {
        bottom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        nav:["Jost","sans-serif"],
        title: ["Cinzel Decorative", "cursive"],
        about:["Lato","sans-serif"]
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
