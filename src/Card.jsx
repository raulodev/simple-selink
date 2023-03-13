import { RxOpenInNewWindow, RxEyeClosed } from "react-icons/rx";

export function Card({ title, description, image, link }) {
  return (
    <div className="rounded h-min border hover:shadow-lg hover:-translate-y-3 transition-all border-zinc-500 hover:border-base-300 w-96 card  bg-base-100">
      <div className="card-body">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-14 h-14  ml-1 mr-4">
              <img className="w-full h-full object-cover" src={image} />
            </div>
          </div>
          <div>
            <h2 className="card-title w-full text-primary">{title}</h2>
          </div>
        </div>
        <p className="break-words">{description}</p>
        <div className="justify-end card-actions">
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="ocultar">
            <button className="rounded btn btn-ghost no-animation">
              <RxEyeClosed className="text-3xl" />
            </button>
          </div>
          <a href={link} target="_blank" className="tooltip tooltip-bottom tooltip-primary" data-tip="abrir">
            <button className="rounded btn btn-ghost no-animation">
              <RxOpenInNewWindow className="text-3xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
