import { MdAddLink } from "react-icons/md";
import { FiSearch, FiLink } from "react-icons/fi";

import { ToggleThemeButton } from "./ToggleThemeButton";

export function NavBar() {
  return (
    <div className="px-4 navbar bg-base-100">
      <div className="flex-1">
        <a className="text-xl normal-case rounded btn btn-ghost">s3link</a>
      </div>
      <div>
        <div className="">
          <label htmlFor="modal" className="text-xl normal-case rounded btn btn-ghost">
            <FiLink />
          </label>
        </div>
        <div className="">
          <ToggleThemeButton className="mx-1 text-xl normal-case rounded btn btn-ghost" />
        </div>
        <div className="flex-none gap-2">
          <div className="flex form-control w-min">
            <button className="mx-1 text-xl normal-case rounded md:hidden btn btn-ghost">
              <FiSearch />
            </button>
            <input type="text" placeholder="buscar" className="hidden rounded md:flex input input-bordered" />
          </div>
        </div>
      </div>
    </div>
  );
}
