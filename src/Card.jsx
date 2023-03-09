import { RxOpenInNewWindow, RxEyeClosed } from "react-icons/rx";
import svg from "/vite.svg";

export function Card() {
  return (
    <div className="border rounded shadow-xl hover:shadow border-base-200 hover:border-base-300 w-96 card card-normal md:card-side bg-base-100">
      <figure className="w-40">
        <div className="bg-blue-500"></div>
      </figure>
      <div className="card-body">
        <div className="flex items-center">
          <div className="flex-1 avatar">
            <div className="w-10 h-10 border rounded-full">
              <img src={svg} />
            </div>
          </div>
          <h2 className="flex-none card-title min-w-max">New movie is released!</h2>
        </div>
        <p className="">Click the button to watch on Jetflix app.</p>
        <div className="justify-end card-actions">
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="ocultar enlace">
            <button className="rounded btn btn-ghost">
              <RxEyeClosed className="text-3xl" />
            </button>
          </div>
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="abrir en otra ventana">
            <button className="rounded btn btn-ghost">
              <RxOpenInNewWindow className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
