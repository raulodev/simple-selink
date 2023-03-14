import { RxOpenInNewWindow, RxEyeClosed, RxPencil2 } from "react-icons/rx";

export function Card({ title, description, image, link }) {
  // TODO implementar editado de la targeta
  function editInfo(title) {
    console.log(title);
  }

  return (
    <div className="transition-all border-2 rounded h-min border-info hover:shadow-lg sm:hover:-translate-y-2 w-96 card bg-base-100">
      <div className="card-body">
        <div className="flex items-center">
          <div className="avatar">
            <div className="ml-1 mr-4 w-14 h-14">
              <img className="object-cover w-full h-full" src={image} />
            </div>
          </div>
          <div>
            <h2 className="w-full break-words card-title text-primary">{title}</h2>
          </div>
        </div>
        <p className="text-xl break-words">{description}</p>
        <div className="justify-end card-actions">
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Editar">
            <label onClick={() => editInfo(title)} htmlFor="edit-info-modal" className="rounded btn btn-ghost no-animation">
              <RxPencil2 className="text-3xl" />
            </label>
          </div>
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Ocultar">
            <button className="rounded btn btn-ghost no-animation">
              <RxEyeClosed className="text-3xl" />
            </button>
          </div>
          <a href={link} target="_blank" className="tooltip tooltip-bottom tooltip-primary" data-tip="Abrir">
            <button className="rounded btn btn-ghost no-animation">
              <RxOpenInNewWindow className="text-3xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
