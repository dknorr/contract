import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const style = {
  width: "40vw",
  marginLeft: "30vw",
  rounded: true
};

const style2 = {
  width: "15vw",
  marginLeft: "25vw"
};

class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { contract, removeContract } = this.props;
    const { name, company, details } = contract;
    return (
      <Paper style={style} key={name}>
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
        <span>
          <Button>Hi</Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => removeContract(contract.id)}
            style={style2}
          >
            Remove Contract
          </Button>
        </span>
      </Paper>
    );
  }
}

export default Display;
