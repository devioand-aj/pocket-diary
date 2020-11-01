import React, { useState, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";

import "../../styles/dropdown.css";

const Dropdown = ({ selectedOption, children, onClick }) => {
  const [showItems, setShowItems] = useState(false);
  const [chevronChange, setChevronChange] = useState("down");
  const [menuHeight, setMenuHeight] = useState(0);
  const ref = useRef(null);

  /**** Extending the functionality of childrens ****/
  const fn = (child) => React.cloneElement(child, { onClick });
  const childs = React.Children.map(children, fn);

  return (
    <div
      className="dropdown-container"
      onClick={() => setShowItems(!showItems)}
    >
      <div>
        <div className="dropdown-header">
          <div className="dropdown-header-label">
            {selectedOption ? selectedOption : "Dropdown"}
          </div>
          <div className="dropdown-header-icon">
            {chevronChange === "up" ? <FiChevronUp /> : <FiChevronDown />}
          </div>
        </div>
      </div>
      <div
        className="dropdown-items-container"
        style={{ height: menuHeight === 0 ? menuHeight : menuHeight + 30 }}
      >
        <CSSTransition
          in={showItems}
          timeout={200}
          classNames="alert"
          unmountOnExit
          onEnter={() => {
            setMenuHeight(ref.current.firstChild.offsetHeight);
            setChevronChange("up");
          }}
          onExiting={() => {
            setMenuHeight(0);
            setChevronChange("down");
          }}
        >
          <div ref={ref}>
            <ul className="dropdown-items">{childs}</ul>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Dropdown;
