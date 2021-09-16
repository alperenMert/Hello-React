import React, { Component } from "react";
import Logo from "../images/react.png";
import DateTime from "../dateTime/DateTime";
import './Header.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      projeNo: "Proje 1",
    };
  }

  render() {
    return (
      <div className="header">
        <img className="header-logo" src={Logo} />
        <p className="header-project-name">{this.state.projeNo}</p>
        <DateTime />
      </div>
    );
  }
}
