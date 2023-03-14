import { useState, useEffect } from "react";
import { FiSearch, FiLink } from "react-icons/fi";
import { ToggleThemeButton } from "./ToggleThemeButton";

export function NavBar({ runUpdate }) {
  // Mostrar o ocultar el input en pantallas móviles
  const [show, setShowInpuSearch] = useState(false);
  const [elements, setElements] = useState(null);

  function handlerClick() {
    setShowInpuSearch(show == false ? true : false);
  }

  function search(event) {
    const query = event.target.value;
    const data = JSON.parse(localStorage.getItem("s3link"));

    // filtrar la data por el query
    function inQuery(el) {
      if (el.title.toLowerCase().includes(query.toLowerCase()) || el.description.toLowerCase().includes(query.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    }

    const result = data.filter(inQuery);

    // actualizar estado
    if (query === "") {
      setElements(null);
    } else {
      setElements(result);
    }
  }

  useEffect(() => {
    // renderizar componente App
    runUpdate();
    // actualizar localstorage
    localStorage.setItem("search", JSON.stringify(elements));
  }, [elements]);

  return (
    <div className="fixed top-0 z-10 px-4 navbar backdrop-blur">
      <div className="flex-none sm:flex-1">
        <a className="text-2xl normal-case rounded text-primary btn btn-ghost no-animation">s3link</a>
      </div>
      <div className="justify-end flex-1 sm:flex-none">
        <div className="flex">
          {/* Ocultar botones de cambiar el tema si show es true */}
          {show == false && (
            <>
              <div>
                <ToggleThemeButton className="mx-1 text-xl normal-case rounded btn btn-ghost no-animation" />
              </div>
            </>
          )}
          {/* Mostralos si show es true y la pantalla es md  */}
          {show && (
            <>
              <div>
                <label htmlFor="modal" className="hidden text-xl normal-case rounded md:flex btn btn-ghost no-animation">
                  <FiLink className="" />
                </label>
              </div>
              <div>
                <ToggleThemeButton className="hidden mx-1 text-xl normal-case rounded md:flex btn btn-ghost no-animation" />
              </div>
            </>
          )}
          <div className="w-full gap-2">
            <div className="flex form-control">
              {/* Mostrar si show es true*/}
              {show && (
                <div className="flex">
                  <button onClick={handlerClick} className="mx-1 text-xl normal-case rounded md:hidden btn btn-ghost no-animation">
                    <FiSearch />
                  </button>
                  <input onChange={search} type="text" placeholder="buscar" className="w-full bg-transparent rounded input input-bordered " />
                </div>
              )}
              {/* Mostrar si show es false */}
              {show == false && (
                <>
                  <button onClick={handlerClick} className="mx-1 text-xl normal-case rounded w-min sm:hidden btn btn-ghost no-animation">
                    <FiSearch />
                  </button>
                  <input onChange={search} type="text" placeholder="buscar" className="hidden bg-transparent rounded w-72 md:flex input input-bordered" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
