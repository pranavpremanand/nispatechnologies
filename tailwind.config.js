/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary': '#5B6CFF',
        headerbackgroundcolor: "#f4f4f4",
        headertextcolor: "#272727",
        headertexthoverandactive: "#ea5d26",
        backgroundcolor: "#faf3ef",
        primarytextcolor: "#333333",
        footerbackgrouncolor: "#cccccc",
        primary: "#ea5d26",
        secondary: "#007acc",
        tertiary: "#2773A7",
        bordercolor: "rgb(255,173,140)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        section4: "url('/src/assets/images/section4-img.png')",
        "custom-gradient":
          "linear-gradient(90deg, rgba(255,173,140,0.2567620798319328) 0%, rgba(218,218,218,0.6125043767507004) 100%)",
        "backgro-gradient":
          "linear-gradient(90deg, rgba(250,120,67,0.5452774859943977) 0%, rgba(164,164,164,0.6125043767507004) 100%);",
        "backgro-gradient-revert":
          "linear-gradient(90deg, rgba(164,164,164,0.6125043767507004) 0% ,rgba(250,120,67,0.5452774859943977) 100%);",
      },
    },
  },
  plugins: [],
};
