import { useState, useEffect } from "react";

import { RiSortAsc, RiSortDesc } from "react-icons/ri";

export function ButtonAbc({ className, runUpdate }) {
  const [order, setOrder] = useState(false);
  const data = JSON.parse(localStorage.getItem("s3link"));

  function handlerClic() {
    setOrder(order ? false : true);

    if (order) {
      localStorage.setItem(
        "s3link",
        JSON.stringify(data.sort((a, b) => a.title.localeCompare(b.title)))
      );
    } else {
      localStorage.setItem(
        "s3link",
        JSON.stringify(data.sort((a, b) => b.title.localeCompare(a.title)))
      );
    }
  }

  useEffect(() => {
    runUpdate();
  }, [order]);

  return (
    <div className="lg:tooltip lg:tooltip-bottom lg:tooltip-primary" data-tip="Ordenar">
      <div onClick={handlerClic} className={className}>
        {order ? <RiSortAsc className="w-5 h-5" /> : <RiSortDesc className="w-5 h-5" />}
      </div>
    </div>
  );
}
