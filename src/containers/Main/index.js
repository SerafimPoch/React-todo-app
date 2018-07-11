import React from "react";
import { MainContainer, TaskContainer } from "./style";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mainContainer";
import Task from "../../components/main/task/";
import Remove from "../../components/main/button/";

const Main = ({ tasks, remove }) => {
  return (
    <MainContainer>
      {tasks.map((e, i) => {
        return (
          <TaskContainer key={i}>
            <Task text={e} />
            <Remove remove={remove} value={e} />
          </TaskContainer>
        );
      })}
    </MainContainer>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
