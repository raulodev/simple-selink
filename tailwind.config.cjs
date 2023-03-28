/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        black: {
          ...require("daisyui/src/colors/themes")["[data-theme=black]"],
          primary: "#cecece",
          info: "#101011",
          accent: "#18181b", // fondo
          neutral: "#000000",
        },
      },
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#3b82f6",
          info: "#ffffff",
          accent: "#fff", // fondo
          neutral: "#cecece",
          secondary: "#7c3aed",
          "base-100": "#FFFFFF",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
    ],
  },
};
