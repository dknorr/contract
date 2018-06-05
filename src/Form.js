import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { changeParent, addContract } = this.props;
    return (
      <form class="Form">
        <Input
          onChange={e => changeParent("curName", e.target.value)}
          placeholder="Name"
        />
        <div />
        <Input
          onChange={e => changeParent("curCompany", e.target.value)}
          placeholder="Company"
        />
        <div />
        <Input
          onChange={e => changeParent("curDetails", e.target.value)}
          placeholder="Details"
        />
        <div />
        <br />
        <Button onClick={addContract} variant="outlined" color="primary">
          Submit Contract
        </Button>
      </form>
    );
  }
}

export default Form;
