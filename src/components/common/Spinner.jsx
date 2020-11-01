import React from "react";
import "../../styles/spinner.css";

import spinner from "../../assets/spinner.svg";
import spinner2 from "../../assets/spinner2.svg";
import spinnerDarkMedium from "../../assets/spinner-dark-medium.svg";
import spinnerDarkExtraSmall from "../../assets/spinner-dark-extra-small.svg";
import spinnerLightExtraSmall from "../../assets/spinner-light-extra-small-2.svg";

const Spinner = ({ name = "spinner", visible = true }) => {
  if (!visible) return null;

  if (name === "spinner") {
    return (
      <div className="spinner-container">
        <img src={spinner} alt="Loading..." />
      </div>
    );
  }

  if (name === "spinner-dark-large") {
    return (
      <div className="spinner-container">
        <img src={spinner2} alt="Loading..." />
      </div>
    );
  }

  if (name === "spinner-dark-medium") {
    return (
      <div className="spinner-container">
        <img src={spinnerDarkMedium} alt="Loading..." />
      </div>
    );
  }

  if (name === "spinner-dark-large") {
    return (
      <div className="spinner-container">
        <img src={spinner2} alt="Loading..." />
      </div>
    );
  }

  if (name === "spinner-dark-extra-small") {
    return (
      <div className="spinner-container">
        <img src={spinnerDarkExtraSmall} alt="Loading..." />
      </div>
    );
  }

  if (name === "spinner-light-extra-small") {
    return (
      <div className="spinner-container">
        <img src={spinnerLightExtraSmall} alt="Loading..." />
      </div>
    );
  }
};

export default Spinner;
