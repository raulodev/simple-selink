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
          info: "#CCCCCC",
        },
      },
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#3b82f6",
          info: "#93c5fd",
          secondary: "#7c3aed",
          accent: "#38bdf8",
          neutral: "#171717",
          "base-100": "#FFFFFF",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#1d4ed8",
          secondary: "#7c3aed",
          accent: "#38bdf8",
          neutral: "#171717",
          "base-100": "#0f172a",
          info: "#fde047",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
    ],
  },
};
