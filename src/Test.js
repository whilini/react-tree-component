import React, { Component } from "react";

const styleSheet = {
  color: "hotpink",
  backgroundColor: "#000",
};

const Test = React.createElement(
  "div",
  { style: styleSheet },
  React.createElement("span", null, "Font color: pink"),
  React.createElement("p", null, "Font color: aqua")
);

console.log(Test);

export default class TestComponent extends Component {
  render() {
    return Test;
  }
}
