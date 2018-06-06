import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.curName,
      company: this.props.curCompany,
      details: this.props.curDetails
    };
  }

  render() {
    const { changeParent, addContract } = this.props;
    return (
      <form class="Form">
        <Input
          onChange={e => changeParent("curName", e.target.value)}
          placeholder="Name"
          value={this.state.name}
        />
        <div />
        <Input
          onChange={e => changeParent("curCompany", e.target.value)}
          placeholder="Company"
          value={this.state.company}
        />
        <div />
        <Input
          onChange={e => changeParent("curDetails", e.target.value)}
          placeholder="Details"
          value={this.state.details}
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
