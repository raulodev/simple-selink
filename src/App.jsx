import backgroun from "./assets/backgroun.svg";

import { useEffect, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineSave, AiFillDelete, AiOutlinePlus } from "react-icons/ai";

function App() {
  const [storage, setStorage] = useState();
  const [showModal, setShowModal] = useState(false);
  const [valueUrl, setValueUrl] = useState();
  const [valueTitle, setValueTitle] = useState();

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("selink"));
    setStorage(local);

    if (local?.length == 0 || local == null) {
      setShowModal(true);
    }
  }, [valueUrl, valueTitle, showModal]);

  const handlerSave = () => {
    let local = JSON.parse(localStorage.getItem("selink"));

    if (!local) {
      localStorage.setItem("selink", JSON.stringify([{ url: valueUrl, title: valueTitle }]));
    } else {
      local.push({ url: valueUrl, title: valueTitle });
      localStorage.setItem("selink", JSON.stringify(local));
    }

    setValueUrl("");
    setValueTitle("");
    setShowModal(false);
  };

  const handlerDelete = (title) => {
    localStorage.setItem("selink", JSON.stringify(storage.filter((el) => el.title != title)));
    setStorage(storage.filter((el) => el.title != title));
    if (storage?.length == 1) {
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="selection:bg-emerald-400  selection:text-white flex flex-col min-h-screen justify-start items-center">
        <div className="py-10">
          <h1 className="text-center font-black text-6xl text-white">S3link</h1>
          <p className="text-center text-xl font-bold text-white">
            El linkstore favorito del internet
          </p>
        </div>

        <div className="fixed bottom-10">
          <button
            onClick={() => setShowModal(showModal ? false : true)}
            className="btn-primary text-xl flex gap-2 items-center"
          >
            <AiOutlinePlus /> Nuevo
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 flex-wrap py-4 items-center justify-center">
          {storage &&
            storage.map((el) => (
              <Card key={el.title} url={el.url} title={el.title} handlerDelete={handlerDelete} />
            ))}
        </div>
      </div>
      {showModal && (
        <Modal
          handlerSave={handlerSave}
          setShowModal={setShowModal}
          setValueUrl={setValueUrl}
          setValueTitle={setValueTitle}
          inpuValue={valueUrl}
        />
      )}
      <footer className="h-20 text-white font-bold flex flex-row items-center justify-center gap-4">
        <span>
          creado con ❤️ por{" "}
          <a href="https://raulcobiellas.vercel.app/" target="_blank" rel="noopener noreferrer">
            raulodev
          </a>
        </span>
      </footer>
    </>
  );
}

const Card = ({ url, title, handlerDelete }) => {
  return (
    <div className="lg:w-[30rem] py-3 px-4 bg-emerald-500 rounded-sm shadow-lg text-white w-80 overflow-x-auto flex gap-2 items-center">
      <button onClick={() => handlerDelete(title)}>
        <AiFillDelete className="text-white text-xl" />
      </button>

      <a className="hover:underline text-lg" href={url} target="_blank">
        {title}
      </a>
    </div>
  );
};

const Modal = ({ handlerSave, setShowModal, setValueUrl, setValueTitle }) => {
  return (
    <div className="modal-overlay">
      <div className="bg-emerald-500 rounded-sm flex flex-col p-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-white">Ingrese los datos</h1>
          <input
            onChange={(e) => setValueUrl(e.target.value)}
            className="input"
            type="url"
            placeholder="enlace"
            name="url"
            autoFocus
          />
          <input
            onChange={(e) => setValueTitle(e.target.value)}
            className="input"
            type="text"
            placeholder="título"
            name="title"
            maxLength={100}
          />
          <div className="flex gap-4">
            <button
              onClick={() => handlerSave()}
              className="btn-primary w-max flex items-center gap-2"
            >
              Save
              <AiOutlineSave className="text-lg zinc-700" />
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="btn-primary flex gap-2 items-center "
            >
              Close
              <AiOutlineCloseCircle className="text-lg text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
