import React, { Component } from "react";
import backendImg from "../../assets/images/programmer.svg";
export default class CloudInfraImg extends Component {
  render() {
    // const theme = this.props.theme;
    return (
      <img
            src={backendImg}
            alt="Backend Development"
            style={{ maxWidth: "100%", height: "auto" }}
          />
    );
  }
}
