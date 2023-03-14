import { useState, useEffect } from "react";

import { RxEyeClosed } from "react-icons/rx";

export function ButtonHidden({ title, runUpdate }) {
  const [newdata, setNewData] = useState(null);

  const data = JSON.parse(localStorage.getItem("s3link"));
  // const hiddendata = JSON.parse(localStorage.getItem("hidden"));

  function handlerClick() {
    let new_data = [];

    data.forEach((el) => {
      if (el.title != title) {
        new_data.push(el);
      }
    });

    setNewData(new_data);
  }

  useEffect(() => {
    runUpdate();
    if (newdata != null) {
      localStorage.setItem("s3link", JSON.stringify(newdata));
    }
  }, [newdata]);

  return (
    <button onClick={(title) => handlerClick(title)} className="rounded btn btn-ghost no-animation">
      <RxEyeClosed className="text-2xl md:text-3xl" />
    </button>
  );
}
