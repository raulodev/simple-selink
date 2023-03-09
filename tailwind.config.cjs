/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "black",
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#3b82f6",
          secondary: "#7c3aed",
          accent: "#38bdf8",
          neutral: "#171717",
          "base-100": "#FFFFFF",
          info: "#fde047",
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
