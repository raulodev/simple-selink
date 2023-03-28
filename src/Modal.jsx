import { useState, useEffect } from "react";
import { CiTextAlignLeft, CiImageOn, CiLink, CiKeyboard } from "react-icons/ci";
import interImage from "./assets/Internet.svg";

export function Modal({ runUpdate }) {
  // estados
  const [link, setNewLink] = useState(null);
  const [title, setNewTitle] = useState(null);
  const [description, setNewDescription] = useState("");
  const [linkimage, setNewLinkImage] = useState(interImage);
  const [data, setData] = useState(null);

  let new_data = {};

  // clases para los input validos e inválidos
  const inputValid = "w-full bg-accent md:text-md max-w-xs rounded input input-bordered";
  const inputInValid =
    "w-full bg-accent md:text-md max-w-xs rounded input input-bordered border-red-500";

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
        title: title.trim(),
        description: description.trim(),
        link: link.trim(),
        image: linkimage.trim().includes("http") ? linkimage : interImage,
      };

      setData(new_data);
    }
  }

  useEffect(() => {
    let edit = JSON.parse(localStorage.getItem("toedit"));
    // actualizar vista
    runUpdate();
    // obtener la datos guardados en el localStore
    let items = JSON.parse(localStorage.getItem("s3link"));
    // actualizar datos
    if (data != null && items == null) {
      localStorage.setItem("s3link", JSON.stringify([data]));
    } else if (items != null && data != null) {
      // comprobar si ya existe un registro con el mismo título
      let exists = false;
      items.forEach((el) => {
        if (el.title == data.title) {
          exists = true;
        }
      });
      // agregar data en caso de que no exista
      if (!exists) {
        items.push(data);
      }
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
    setNewDescription("");
    // reiniciar input image url
    document.getElementById("input-url-image").className = inputValid;
    document.getElementById("input-url-image").value = "";
    setNewLinkImage("");

    event.preventDefault();
  }

  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal backdrop-blur">
        <div className="rounded modal-box bg-accent">
          <label
            htmlFor="modal"
            className="text-xl absolute rounded btn btn-sm btn-circle btn-ghost right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg md:text-xl text-primary font-bold">Agregar un nuevo enlace</h3>
          <p className="py-4 md:text-lg">Complete el formulario y presione en agregar.</p>

          <div className="grid gap-4">
            <div
              className="flex items-center gap-2 tooltip tooltip-top tooltip-primary"
              data-tip="Título del sitio web"
            >
              {/* <CiKeyboard className="text-2xl" /> */}
              <input
                autoComplete="off"
                maxLength={25}
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

            <div
              className="flex items-center gap-2 tooltip tooltip-top tooltip-primary"
              data-tip="Descripción del sitio web"
            >
              {/* <CiTextAlignLeft className="text-2xl" /> */}
              <input
                onChange={(event) => {
                  const value = event.target.value;
                  setNewDescription(value);
                }}
                id="input-description"
                type="text"
                maxLength={40}
                placeholder="descripción del sitio web"
                className={inputValid}
              />
            </div>
            <div
              className="flex items-center gap-2 tooltip tooltip-top tooltip-primary"
              data-tip="Link que lleva al sitio web"
            >
              {/* <CiLink className="text-2xl" /> */}
              <input
                autoComplete="off"
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
            <div
              className="flex items-center gap-2 tooltip tooltip-top tooltip-primary"
              data-tip="Imagen relacionada con el sitio web"
            >
              {/* <CiImageOn className="text-2xl" /> */}
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
            <label
              onClick={handlerResetInput}
              htmlFor="modal"
              className="uppercase rounded btn btn-outline text-xs p-3 btn-primary no-animation"
            >
              Reiniciar
            </label>
            <label
              onClick={(event) => {
                handlerClick(event);
              }}
              htmlFor="modal"
              className="uppercase rounded btn btn-primary text-xs p-3 no-animation"
            >
              Agregar
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
