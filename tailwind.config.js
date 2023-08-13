module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        x: "70rem",
      },

      colors: {
        primary: "#EB50EB",
        secondary: "#50EBD3",
      },
      backgroundImage: {
        gradientRocketWay:
          "linear-gradient(90deg, rgba(235, 80, 235, 0.15) 0%, rgba(235, 80, 235, 0.00) 100%)",
        gradientFaq:
          "linear-gradient(180deg, rgba(80, 235, 211, 0.10) 0%, rgba(255, 0, 255, 0.04) 100%)",
      },
    },
  },
  plugins: [],
};
