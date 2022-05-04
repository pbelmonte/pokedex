import "../styles/loader.css";

import React from "react";

import pokeball from "../images/pokeball_gray.png";

interface Props {
  loading: boolean;
}

function Loader({ loading }: Props) {
  return loading ? (
    <div className="m-auto">
      <img className="loader" src={pokeball} alt="loading" width="50"  height="50" />
    </div>
  ) : (
    <div />
  );
}

export default Loader;
