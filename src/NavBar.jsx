import { useState } from "react";
import { FiSearch, FiLink } from "react-icons/fi";
import { ToggleThemeButton } from "./ToggleThemeButton";

export function NavBar() {
  // Mostrar o ocultar el input en pantallas móviles
  const [show, setShowInpuSearch] = useState(false);

  function handlerClick() {
    setShowInpuSearch(show == false ? true : false);
  }

  return (
    <div className="px-4 navbar bg-base-100">
      <div className="flex-none sm:flex-1">
        <a className="text-xl normal-case rounded btn btn-ghost no-animation">s3link</a>
      </div>
      <div className="flex-1 sm:flex-none justify-end">
        <div className="flex">
          {/* Ocultar botones de cambiar el tema si show es true */}
          {show == false && (
            <>
              <div>
                <label htmlFor="modal" className="text-xl normal-case rounded btn btn-ghost no-animation">
                  <FiLink />
                </label>
              </div>
              <div>
                <ToggleThemeButton className="mx-1 text-xl normal-case rounded btn btn-ghost no-animation" />
              </div>
            </>
          )}
          {/* Mostralos si show es true y la pantalla es md  */}
          {show && (
            <>
              <div>
                <label htmlFor="modal" className="text-xl hidden md:flex normal-case rounded btn btn-ghost no-animation">
                  <FiLink />
                </label>
              </div>
              <div>
                <ToggleThemeButton className="mx-1 text-xl hidden md:flex normal-case rounded btn btn-ghost no-animation" />
              </div>
            </>
          )}
          <div className="gap-2 w-full">
            <div className="flex form-control">
              {/* Mostrar si show es true*/}
              {show && (
                <div className="flex">
                  <button onClick={handlerClick} className="mx-1 text-xl normal-case rounded md:hidden  btn btn-ghost no-animation">
                    <FiSearch />
                  </button>
                  <input type="text" placeholder="buscar" className="rounded w-full  input input-bordered" />
                </div>
              )}
              {/* Mostrar si show es false */}
              {show == false && (
                <>
                  <button onClick={handlerClick} className="mx-1 text-xl normal-case rounded w-min sm:hidden btn btn-ghost no-animation">
                    <FiSearch />
                  </button>
                  <input type="text" placeholder="buscar" className="hidden w-72 rounded md:flex input input-bordered" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
