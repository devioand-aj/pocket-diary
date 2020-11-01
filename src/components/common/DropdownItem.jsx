import React from "react";

import "../../styles/dropdownItem.css";

const DropdownItem = ({ children, onClick, value }) => {
  //  console.log(onClick);
  const selectedOption = value ? value : children;

  return (
    <li className="dropdown-item" onClick={() => onClick(selectedOption)}>
      {children}
    </li>
  );
};

export default DropdownItem;
