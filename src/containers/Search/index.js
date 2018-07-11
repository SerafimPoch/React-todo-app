import React, { Component } from "react";
import { SearchContainer } from "./style";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { mapDispatchToProps } from "./searchContainer";
import Input from "../../components/search/input";
import Button from "../../components/search/button";

class Search extends Component {
  myVal = ({ searchText = "" }) => {
    this.props.search(searchText);
  };
  render() {
    return (
      <SearchContainer onSubmit={this.props.handleSubmit(this.myVal)}>
        <Input />
        <Button />
      </SearchContainer>
    );
  }
}

Search = reduxForm({
  form: "search"
})(Search);

export default connect(
  null,
  mapDispatchToProps
)(Search);
