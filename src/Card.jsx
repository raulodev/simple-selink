import { RxOpenInNewWindow, RxEyeClosed, RxPencil2 } from "react-icons/rx";

import { ButtonHidden } from "./ButtonHidden";

export function Card({ title, description, image, link, runUpdate }) {
  // TODO implementar editado de la targeta
  function editInfo(title) {
    console.log(title);
  }

  return (
    <div className=" transition-transform bg-accent shadow-lg  rounded h-min sm:hover:shadow-xl sm:hover:-translate-y-2 w-80 md:w-96 card">
      <div className="card-body p-4">
        <div className="flex items-center">
          <div className="avatar">
            <div className="ml-1 mr-4 w-14 h-14">
              <img className="object-cover w-full h-full" src={image} />
            </div>
          </div>
          <div>
            <h2 className="w-full break-words text-lg font-semibold md:card-title text-primary">{title}</h2>
          </div>
        </div>
        <p className="text-md break-words md:text-xl">{description}</p>
        <div className="justify-end card-actions">
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Editar">
            <label onClick={() => editInfo(title)} htmlFor="edit-info-modal" className="rounded btn btn-ghost no-animation">
              <RxPencil2 className="text-2xl md:text-3xl" />
            </label>
          </div>
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Ocultar">
            <ButtonHidden runUpdate={runUpdate} title={title} />
          </div>
          <a href={link} target="_blank" className="tooltip tooltip-bottom tooltip-primary" data-tip="Abrir">
            <button className="rounded btn btn-ghost no-animation">
              <RxOpenInNewWindow className="text-2xl md:text-3xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
