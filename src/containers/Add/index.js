import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { AddContainer } from "./style";
import { mapDispatchToProps } from "./addConteiner";
import Input from "../../components/add/input/";
import Button from "../../components/add/button";

class Add extends Component {
  myVal = ({ addText }) => {
    this.props.addTask(addText);
    this.props.reset();
  };

  render() {
    return (
      <AddContainer onSubmit={this.props.handleSubmit(this.myVal)}>
        <Input />
        <Button />
      </AddContainer>
    );
  }
}

Add = reduxForm({
  form: "add"
})(Add);

export default connect(
  null,
  mapDispatchToProps
)(Add);
