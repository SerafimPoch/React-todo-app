import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  min-height: 300px;
  width: 400px;
  margin-top: 30px;
  font-size: 20px;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
