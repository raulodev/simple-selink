import { RxPlus, RxLink2 } from "react-icons/rx";
import { useState } from "react";
import { NavBar } from "./NavBar";
import { Modal } from "./Modal";
import { Card } from "./Card";
import { Footer } from "./Footer";

function Button() {
  return (
    <div className="fixed bottom-10 right-10">
      <label htmlFor="modal" className="text-xl normal-case rounded btn btn-primary no-animation">
        <RxLink2 className="" />
      </label>
    </div>
  );
}

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
                <Card runUpdate={runUpdate} key={value.title} title={value.title} description={value.description} link={value.link} image={value.image} />
              </div>
            ))}
          </div>
        </div>
        <Modal runUpdate={runUpdate} />
        <Button />
        <Footer />
      </>
    );
  } else if (data.length > 0) {
    return (
      <>
        <div className="min-h-screen">
          <NavBar runUpdate={runUpdate} />
          <div className="flex flex-wrap justify-center gap-4 px-4 mt-20">
            {data.map((value) => (
              <div>
                <Card runUpdate={runUpdate} key={value.title} title={value.title} description={value.description} link={value.link} image={value.image} />
              </div>
            ))}
          </div>
        </div>
        <Modal runUpdate={runUpdate} />
        <Button />
        <Footer />
      </>
    );
  }

  return (
    <>
      <div>
        <NavBar runUpdate={runUpdate} />
        <div className="flex items-center justify-center h-screen">
          <label htmlFor="modal" className="text-xl normal-case rounded btn btn-outline btn-primary no-animation">
            <RxPlus className="text-2xl" />
          </label>
        </div>
        <Modal runUpdate={runUpdate} />
      </div>
      <Button />
      <Footer />
    </>
  );
}

export default App;
