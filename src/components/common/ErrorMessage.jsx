import React from "react";

import "../../styles/errorMessage.css";

const ErrorMessage = ({ error }) => {
  return <div className="error-message">{error}</div>;
};

export default ErrorMessage;
