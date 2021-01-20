module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      sm: "0px",
      md: "480px",
      lg: "768px",
      xl: "1200px",
      "2xl": "1440px",
    },
    width: {
      "400px": "400px",
      "full": "100%",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
