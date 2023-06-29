/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(140deg, #0A5783 5.05%, #18A19A 100%)",
      },
      width: {
        980: "980px",
        1332: "1332px",
        320: "320px",
        1086: "1086px",
        884: "984px",
        488: "488px",
        550: "550px",
        363: "363px",
        256: "256px",
        full: "100%",
      },
      height: {
        800: "800px",
        569: "569px",
        154: "154px",
        497: "497px",
        101: "101px",
        306: "306px",
        3: "3px",
        68: "68px",
        92: "92px",
      },
      padding: {
        30: "0px",
      },
      minWidth: {
        500: "500px",
      },
      fontSize: {
        76: "76px",
        60: "60px",
        27: "27px",
        29: "29px",
        32: "32px",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      fontWeight: {
        700: "700",
        600: "600",
        275: "200",
      },
      lineHeight: {
        130: "130%",
      },
      inset: {
        21: "20%",
        "360px": "360px",
      },
      letterSpacing: {
        1.89: "1.89px",
      },
      colors: {
        orange: "#FB7306",
      },
      boxShadow: {
        btn: "2px 3px 3px 0px #074553",
      },
      lineHeight: {
        41.6: "41.6px",
      },
      gradientColorStops: {
        primary: "#0A5783",
        secondary: "#18A19A",
        full: "100%",
      },
      gradientColorStopPositions: {
        5.05: "5.05%",
        100: "100%",
      },
      linearGradientDirections: {
        140: "140deg",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        40: "40px",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
