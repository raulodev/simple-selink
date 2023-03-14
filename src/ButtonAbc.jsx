import { useState, useEffect } from "react";

import { FiArrowDown, FiArrowUp } from "react-icons/fi";

export function ButtonAbc({ className, runUpdate }) {
  const [order, setOrder] = useState(false);
  const data = JSON.parse(localStorage.getItem("s3link"));

  function handlerClic() {
    setOrder(order ? false : true);

    if (order) {
      localStorage.setItem("s3link", JSON.stringify(data.sort((a, b) => a.title.localeCompare(b.title))));
    } else {
      localStorage.setItem("s3link", JSON.stringify(data.sort((a, b) => b.title.localeCompare(a.title))));
    }
  }

  useEffect(() => {
    runUpdate();
  }, [order]);

  return (
    <div onClick={handlerClic} className={className}>
      abc
      {order ? <FiArrowUp /> : <FiArrowDown />}
    </div>
  );
}
