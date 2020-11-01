import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "../../styles/toast.css";

const Toast = ({ message, visible, onClick }) => {
  return visible ? (
    <div className="toast-container">
      <div className="toast-icon-label-container">
        <div className="toast-icon">
          <BiErrorCircle size={25} />
        </div>
        <div>{message}</div>
      </div>
      <div className="toast-icon-label-container">
        <div className="toast-icon toast-icon-action">
          <AiOutlineCloseCircle size={27} onClick={onClick} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Toast;
