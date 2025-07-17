import React, { Component } from "react";
import programmingImg from "../../assets/images/programming.jpg";
export default class LanguagesImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
            src={programmingImg}
            alt="Programming Languages"
            style={{ maxWidth: "100%", height: "auto" }}
          />
    );
  }
}
