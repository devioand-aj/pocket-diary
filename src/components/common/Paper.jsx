import React from "react";

import "../../styles/paper.css";

const Paper = ({ children, ...otherProps }) => {
  return (
    <div className="paper" {...otherProps}>
      {children}
    </div>
  );
};

export default Paper;
