import { useState, useEffect } from "react";
import { CiTextAlignLeft, CiImageOn, CiLink, CiKeyboard } from "react-icons/ci";
import interImage from "./assets/Internet.svg";

export function Modal({ runUpdate }) {
  // stats
  const [link, setNewLink] = useState(null);
  const [title, setNewTitle] = useState(null);
  const [description, setNewDescription] = useState("-");
  const [linkimage, setNewLinkImage] = useState(interImage);
  const [data, setData] = useState(null);

  let new_data = {};

  // clases para los input validos e inválidos
  const inputValid = "w-full max-w-xs rounded input border-base-300";
  const inputInValid = "w-full max-w-xs rounded input border-base-300 border-red-500";

  function handlerClick(event) {
    // validando entrada del link
    if (link == null || link == "") {
      document.getElementById("input-link").value = ":) debe rellenar este campo !";
      document.getElementById("input-link").className = inputInValid;
      event.preventDefault();
    } else {
      document.getElementById("input-link").className = inputValid;
    }
    // validando entrada del título
    if (title == null || title == "") {
      document.getElementById("input-title").value = ":) debe rellenar este campo !";
      document.getElementById("input-title").className = inputInValid;
      event.preventDefault();
    } else {
      document.getElementById("input-title").className = inputValid;
    }

    if (title != null && title != "" && link != null && link != "") {
      new_data = {
        title: title,
        description: description,
        link: link,
        image: linkimage.trim().includes("http") ? linkimage : interImage,
      };

      setData(new_data);
    }
  }

  useEffect(() => {
    // actualizar vista
    runUpdate();
    // obtener la datos guardados en el localStore
    const items = JSON.parse(localStorage.getItem("s3link"));
    // actualizar datos
    if (data != null && items == null) {
      localStorage.setItem("s3link", JSON.stringify([data]));
    } else if (items != null && data != null) {
      items.push(data);
      localStorage.setItem("s3link", JSON.stringify(items));
    }
  }, [data]);

  // reinicair inputs
  function handlerResetInput(event) {
    // reiniciar input link
    document.getElementById("input-link").className = inputValid;
    document.getElementById("input-link").value = "";
    setNewLink(null);
    // reiniciar input title
    document.getElementById("input-title").className = inputValid;
    document.getElementById("input-title").value = "";
    setNewTitle(null);
    // reiniciar input descripction
    document.getElementById("input-description").className = inputValid;
    document.getElementById("input-description").value = "";
    setNewDescription("-");
    // reiniciar input image url
    document.getElementById("input-url-image").className = inputValid;
    document.getElementById("input-url-image").value = "";
    setNewLinkImage("");

    event.preventDefault();
  }

  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal">
        <div className="rounded modal-box">
          <label htmlFor="modal" className="absolute rounded btn btn-sm btn-circle btn-ghost right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">Agregar un nuevo enlace</h3>
          <p className="py-4">Complete el formulario y presione en agregar.</p>

          <div className="grid gap-4">
            <div className="flex items-center gap-2 tooltip tooltip-top tooltip-primary" data-tip="Link que lleva al sitio web">
              <CiLink className="text-xl" />
              <input
                onChange={(event) => {
                  const value = event.target.value;
                  setNewLink(value);
                }}
                id="input-link"
                type="url"
                placeholder="link del sitio web *"
                className={inputValid}
              />
            </div>
            <div className="flex items-center gap-2 tooltip tooltip-top tooltip-primary" data-tip="Título del sitio web">
              <CiKeyboard className="text-xl" />
              <input
                onChange={(event) => {
                  const value = event.target.value;
                  setNewTitle(value);
                }}
                id="input-title"
                type="text"
                placeholder="título del sitio web *"
                className={inputValid}
              />
            </div>
            <div className="flex items-center gap-2 tooltip tooltip-top tooltip-primary" data-tip="Descripción del sitio web">
              <CiTextAlignLeft className="text-xl" />
              <textarea
                onChange={(event) => {
                  const value = event.target.value;
                  setNewDescription(value);
                }}
                id="input-description"
                type="text"
                maxLength={400}
                placeholder="descripción del sitio web"
                className={inputValid}
              />
            </div>
            <div className="flex items-center gap-2 tooltip tooltip-top tooltip-primary" data-tip="Imagen relacionada con el sitio web">
              <CiImageOn className="text-xl" />
              <input
                onChange={(event) => {
                  const value = event.target.value;
                  setNewLinkImage(value);
                }}
                id="input-url-image"
                type="url"
                placeholder="link de una imagen"
                className={inputValid}
              />
            </div>
          </div>
          <div className="modal-action">
            <label onClick={handlerResetInput} htmlFor="modal" className="uppercase rounded btn btn-outline btn-primary no-animation">
              Reiniciar
            </label>
            <label
              onClick={(event) => {
                handlerClick(event);
              }}
              htmlFor="modal"
              className="uppercase rounded btn btn-primary no-animation"
            >
              Agregar
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
