import React from "react";

import Dropdown from "./common/Dropdown";
import DropdownItem from "./common/DropdownItem";

const FilterSection = () => {
  return (
    <>
      <div className="dropdown-section">
        <Dropdown>
          <DropdownItem>Name</DropdownItem>
        </Dropdown>
      </div>
    </>
  );
};

export default FilterSection;
