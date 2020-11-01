import React from "react";

import "../../styles/button.css";

const Button = ({
  label = "Button",
  width = "100%",
  backgroundColor = "#1762A7",
  color = "#fff",
  ...otherProps
}) => {
  return (
    <button
      className="button"
      type="submit"
      style={{
        width,
        backgroundColor,
        color,
      }}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
