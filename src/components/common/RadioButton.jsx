import React from "react";
import { useState } from "react";

const RadioButton = () => {
  const [value, setValue] = useState("apple");

  return (
    <div>
      {/* <form> */}
      <input
        type="radio"
        name="fruit"
        value="apple"
        id="apple"
        checked={value === "apple"}
        onChange={(e) => {
          console.log(e.currentTarget);
          setValue(e.currentTarget.value);
        }}
      />
      <label htmlFor="apple">Apple</label>
      <input
        id="orange"
        type="radio"
        name="fruit"
        value="orange"
        checked={value === "orange"}
        onChange={(e) => {
          console.log(e.currentTarget);
          setValue(e.currentTarget.value);
        }}
      />
      <label htmlFor="orange">Orange</label>
      <input
        id="melon"
        type="radio"
        name="fruit"
        value="melon"
        checked={value === "melon"}
        onChange={(e) => {
          console.log(e.currentTarget);
          setValue(e.currentTarget.value);
        }}
      />
      <label htmlFor="melon">Melon</label>
      {/* </form> */}
    </div>
  );
};

export default RadioButton;
