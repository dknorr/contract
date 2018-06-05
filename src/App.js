import React, { Component } from "react";
import firebase from "./firebase";
import Display from "./Display.js";
import Form from "./Form.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contracts: [],
      curName: "",
      curCompany: "",
      curDetails: ""
    };
  }
  changeParent = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  addContract = () => {
    const contract = {
      name: this.state.curName,
      company: this.state.curCompany,
      details: this.state.curDetails
    };
    this.state.contracts.push(contract);
    const contractsRef = firebase.database().ref("contracts");
    contractsRef.push(contract);
    this.setState({
      name: "",
      company: "",
      details: ""
    });
  };

  componentDidMount() {
    const contractsRef = firebase.database().ref("contracts");
    contractsRef.on("value", snapshot => {
      let contracts = snapshot.val();
      let newState = [];
      for (let contract in contracts) {
        newState.push({
          name: contracts[contract].name,
          company: contracts[contract].company,
          details: contracts[contract].details
        });
      }
      this.setState({
        contracts: newState
      });
    });
  }
  render() {
    let contractDisplay = this.state.contracts.map(con => {
      return <Display contract={con} />;
    });
    return (
      <div>
        <p class="Title">Dark Brotherhood</p>
        <Form addContract={this.addContract} changeParent={this.changeParent} />
        <br />
        <div class="Display">{contractDisplay}</div>
      </div>
    );
  }
}

export default App;
