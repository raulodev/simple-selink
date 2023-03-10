import { RxOpenInNewWindow, RxEyeClosed } from "react-icons/rx";
import svg from "/vite.svg";

export function Card({ title, description, image, link }) {
  return (
    <div className="rounded border shadow-lg  border-base-200 hover:border-base-300 w-96 card  bg-base-100">
      <div className="card-body">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-10 h-10 object-cover mx-1 rounded-full">
              <img src={image} />
            </div>
          </div>
          <div>
            <h2 className="card-title w-full">{title}</h2>
          </div>
        </div>
        <p className="">{description}</p>
        <div className="justify-end card-actions">
          <div className="tooltip tooltip-left tooltip-primary" data-tip="ocultar enlace">
            <button className="rounded btn btn-ghost no-animation">
              <RxEyeClosed className="text-3xl" />
            </button>
          </div>
          <a href={link} target="_blank" className="tooltip tooltip-bottom tooltip-primary" data-tip="abrir en otra ventana">
            <button className="rounded btn btn-ghost no-animation">
              <RxOpenInNewWindow className="text-3xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
