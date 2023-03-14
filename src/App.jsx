import { RxPlus } from "react-icons/rx";

import { useState } from "react";
import { NavBar } from "./NavBar";
import { Modal } from "./Modal";
import { Card } from "./Card";
import { Footer } from "./Footer";

function App() {
  const data = JSON.parse(localStorage.getItem("s3link"));
  const search = JSON.parse(localStorage.getItem("search"));

  const [update, setUpdate] = useState(0);

  function runUpdate() {
    setUpdate(update + 1);
  }

  if (search != null && search.length > 0) {
    return (
      <>
        <div className="min-h-screen">
          <NavBar runUpdate={runUpdate} />
          <div className="flex flex-wrap justify-center gap-4 px-4 mt-20">
            {search.map((value) => (
              <div>
                <Card key={value.title} title={value.title} description={value.description} link={value.link} image={value.image} />
              </div>
            ))}
          </div>
        </div>
        <Modal runUpdate={runUpdate} />
        <Footer />
      </>
    );
  } else if (data) {
    return (
      <>
        <div className="min-h-screen">
          <NavBar runUpdate={runUpdate} />
          <div className="flex flex-wrap justify-center gap-4 px-4 mt-20">
            {data.map((value) => (
              <div>
                <Card key={value.title} title={value.title} description={value.description} link={value.link} image={value.image} />
              </div>
            ))}
          </div>
        </div>
        <Modal runUpdate={runUpdate} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <div>
        <NavBar />
        <div className="flex items-center justify-center h-screen">
          <label htmlFor="modal" className="text-xl normal-case rounded btn btn-outline btn-primary no-animation">
            <RxPlus className="text-2xl" />
          </label>
        </div>
        <Modal runUpdate={runUpdate} />
      </div>
      <Footer />
    </>
  );
}

export default App;
