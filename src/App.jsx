import { useState } from "react";
import { NavBar } from "./NavBar";
import { Modal } from "./Modal";
import { Card } from "./Card";
import { Footer } from "./Footer";

function App() {
  const data = JSON.parse(localStorage.getItem("s3link"));

  const [update, setUpdate] = useState(0);

  function runUpdate() {
    setUpdate(update + 1);
  }

  if (data) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="flex flex-wrap justify-center gap-4 px-4 mt-20">
          {data.map((value) => (
            <Card key={value.title} title={value.title} description={value.description} link={value.link} image={value.image} />
          ))}
        </div>
        <Footer />
        <Modal runUpdate={runUpdate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="flex flex-wrap justify-center gap-4 px-4 mt-20"></div>
      <Footer />
      <Modal runUpdate={runUpdate} />
    </div>
  );
}

export default App;
