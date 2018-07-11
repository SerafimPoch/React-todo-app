import React from "react";
import { Remove } from "./style";

export default ({ remove, value }) => {
  return <Remove onClick={() => remove(value)}>remove</Remove>;
};
