import React from "react";
import { useFormikContext } from "formik";

import Button from "./common/Button";

const FormButton = ({ label }) => {
  const { handleSubmit } = useFormikContext();

  return <Button label={label} onClick={handleSubmit} />;
};

export default FormButton;
