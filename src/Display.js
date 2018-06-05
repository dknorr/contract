import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const style = {
  width: "40vw",
  marginLeft: "30vw",
  rounded: true
};

class Display extends Component {
  render() {
    const { contract, removeContract } = this.props;
    const { name, company, details } = contract;
    return (
      <Paper style={style}>
        <p class="Display-heading">
          {" "}
          <strong>Name:</strong> {name}
        </p>

        <p class="Display-heading">
          {" "}
          <strong>Company:</strong> {company}{" "}
        </p>

        <p class="Display-heading">
          {" "}
          <strong>Details:</strong> {details}{" "}
        </p>
      </Paper>
    );
  }
}

export default Display;
