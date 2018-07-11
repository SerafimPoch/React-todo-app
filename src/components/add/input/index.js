import React from "react";
import { Field } from "redux-form";

export default () => {
  return (
    <Field
      name="addText"
      component="input"
      required
      minLength={5}
      maxLength={10}
    />
  );
};
