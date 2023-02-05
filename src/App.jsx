import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    localStorage.setItem("theme", "dark");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="h-screen flex text-center justify-center items-center">
      <div>
        <motion.div variants={item} className="mb-4">
          <input type="checkbox" className="toggle" onClick={toggleTheme} />
          <h1 className="text-2xl">theme change</h1>
        </motion.div>
        <motion.div variants={item} className="flex gap-4 justify-center items-center">
          <a href="https://vitejs.dev" target="_blank">
            <img className="w-32" src="/vite.svg" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img className="w-32" src={reactLogo} alt="React logo" />
          </a>
        </motion.div>
        <motion.h1 variants={item} className="text-4xl py-4">
          daisyUi + React + Vite
        </motion.h1>
        <motion.div variants={item} className="text-2xl">
          <button className="btn" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="mt-4">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </motion.div>
        <motion.p variants={item} className="text-2xl mt-4">
          Click on the Vite and React logos to learn more
        </motion.p>
      </div>
    </motion.div>
  );
}

export default App;
