import React from "react";
import { useFormikContext } from "formik";

import InputField from "./common/InputField";
import ErrorMessage from "./common/ErrorMessage";
import { useState } from "react";

const FormField = ({ name, ...otherProps }) => {
  const [focused, setFocused] = useState("");

  const {
    setFieldTouched,
    handleChange,
    touched,
    errors,
    values,
  } = useFormikContext();

  function renderBorderColor(focused, errors) {
    if (focused) {
      if (errors[focused]) return "red";
      if (!errors[focused]) return "green";
    }

    if (!focused) {
      if (!errors[focused]) {
        return "black";
      }
      if (errors[name]) {
        return "red";
      }
    }
    return "black";
  }

  return (
    <>
      <InputField
        name={name}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        onFocus={(e) => setFocused(e.currentTarget.name)}
        autoComplete="off"
        style={{
          border: `3px solid ${renderBorderColor(focused, errors)}`,
        }}
        {...otherProps}
      />
      {touched[name] && errors[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
};

export default FormField;
