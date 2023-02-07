import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ToggleThemeButton } from "./ToggleThemeButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex text-center justify-center items-center">
      <div>
        <div>
          <ToggleThemeButton />
        </div>
        <div className="flex gap-10 py-4 justify-center items-center">
          <a href="https://vitejs.dev" target="_blank">
            <img className="w-32" src="/vite.svg" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img className="w-32" src={reactLogo} alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl">daisyUi + React + Vite</h1>
        <div className="text-xl py-4">
          <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="mt-4">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-xl">Click on the Vite and React logos to learn more</p>
        <div className="flex justify-center gap-4 pt-4">
          <div className="bg-primary w-8 h-8 rounded-full"></div>
          <div className="bg-secondary w-8 h-8 rounded-full"></div>
          <div className="bg-accent w-8 h-8 rounded-full"></div>
          <div className="bg-info w-8 h-8 rounded-full"></div>
          <div className="bg-success w-8 h-8 rounded-full"></div>
          <div className="bg-warning w-8 h-8 rounded-full"></div>
          <div className="bg-error w-8 h-8 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
