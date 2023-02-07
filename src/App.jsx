import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import reactLogo from "./assets/react.svg";

function App() {
  let init_theme = localStorage.getItem("theme");
  if (init_theme == null) {
    init_theme = "light";
  }

  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(init_theme);

  const toggleTheme = (event) => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="h-screen flex text-center justify-center items-center">
      <div>
        <div className="mb-4">
          <button id="toggle-theme" onClick={toggleTheme}>
            {theme === "dark" ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
          </button>
          <h1 className="text-xl">theme change</h1>
        </div>
        <div className="flex gap-10 justify-center items-center">
          <a href="https://vitejs.dev" target="_blank">
            <img className="w-32" src="/vite.svg" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img className="w-32" src={reactLogo} alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl py-4">daisyUi + React + Vite</h1>
        <div className="text-xl">
          <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="mt-4">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-xl mt-4">Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
}

export default App;
