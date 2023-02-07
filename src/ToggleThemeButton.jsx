import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ToggleThemeButton() {
  const local_theme = localStorage.getItem("theme");

  const init_theme = local_theme === null ? "light" : local_theme;

  const [theme, setTheme] = useState(init_theme);

  const toggleTheme = () => {
    const new_theme = theme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", new_theme);

    setTheme(new_theme);
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  });

  return (
    <button id="toggle-theme" onClick={toggleTheme}>
      {theme === "dark" ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
    </button>
  );
}
