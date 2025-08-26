/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#6C5CE7",
          accent: "#A29BFE",
          ink: "#0F0F14",
        },
        fontFamily: {
          sans: ["Montserrat", "ui-sans-serif", "system-ui"],
        },
        container: {
          center: true,
          padding: "1rem",
          screens: { lg: "1120px", xl: "1200px", "2xl": "1320px" },
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"), // опціонально, видали якщо не треба
    ].filter(Boolean),
  };
  