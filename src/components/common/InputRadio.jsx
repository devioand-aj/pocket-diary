import React from "react";

import "../../styles/radioInputField.css";

const InputRadio = ({ data, selectedValue, onRadioChange }) => {
  return (
    <div className="radio-input-field-container">
      {data.map(({ label, value }) => (
        <div key={value} className="radio-input-field">
          <input
            id={value}
            onChange={onRadioChange}
            type="radio"
            name={value}
            value={value}
            checked={selectedValue === value}
          />
          <label htmlFor={value}>{label}</label>
        </div>
      ))}
    </div>
  );
};

export default InputRadio;
