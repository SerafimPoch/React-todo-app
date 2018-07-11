import React from "react";
import { Container } from "./style";
import Search from "../Search/";
import Add from "../Add/";
import Main from "../../containers/Main/";

export default () => {
  return (
    <Container>
      <Search />
      <Main />
      <Add />
    </Container>
  );
};
