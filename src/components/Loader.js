import React, { Component } from "react";
import loader from "./assets/Eclipse-1s-200px-grey.svg";
export class Loader extends Component {
  render() {
    return (
      <div>
        <div className="container text-center w-100">
          <img src={loader} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Loader;
