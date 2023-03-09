import { useState } from "react";
import { NavBar } from "./NavBar";
import { Modal } from "./Modal";
import { Card } from "./Card";
import { Footer } from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="flex flex-wrap justify-center gap-4 px-4 mt-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
      <Modal />
    </div>
  );
}

export default App;
