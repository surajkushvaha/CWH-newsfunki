import React from "react";
import loader from "./assets/Eclipse-1s-200px-grey.svg";
const Loader = () => {
  return (
    <div>
      <div className="container text-center w-100">
        <img src={loader} alt="logo" />
      </div>
    </div>
  );
};

export default Loader;
