import React from "react";
import "./Spinner.scss";

interface Props {
  overlay?: boolean;
}

const Spinner = (props: Props) => {
  return (
    <div
      className={`spinner-container ${
        props.overlay ? "spinner-container--overlay" : ""
      }`}
    >
      <div className="spinner-container__spinner" />
    </div>
  );
};

export default Spinner;
