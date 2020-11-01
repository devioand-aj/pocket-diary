import React from "react";
import { useFormikContext } from "formik";

import InputRadio from "./common/InputRadio";
import ErrorMessage from "./common/ErrorMessage";

const FormRadio = ({ name, data }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  let type = values[name];
  if (type) type = type.toLowerCase();

  return (
    <>
      <InputRadio
        name={name}
        data={data}
        selectedValue={type}
        onRadioChange={(e) => setFieldValue(name, e.currentTarget.value)}
      />
      {touched[name] && errors[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
};

export default FormRadio;
