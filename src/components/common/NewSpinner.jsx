import React from "react";

import "../../styles/newSpinner.css";
import spinner from "../../assets/spinner-small3.svg";

const Spinner = ({ Item = spinner, visible = true, ...otherProps }) => {
  return visible ? (
    <div className="spinner" {...otherProps}>
      <img src={Item} alt="Loading..." />
    </div>
  ) : null;
};

export default Spinner;
