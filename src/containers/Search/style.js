import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 400px;

  input {
    width: 180px;
    height: 15px;
    color: #6e768f;
    border: 1px solid #d7d9e0;
    border-radius: 3px;
    padding: 0.5em 2.5em 0.5em 1em;
    font-size: 23px;
  }
`;
