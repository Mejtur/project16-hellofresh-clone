import React from "react";
import "../css/Nav.css";
import Logo from "../images/logo.png";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <div className="logo">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <li>Our plans</li>
        <li>How it works</li>
        <li>Our Menus</li>
        <li>Gift Cards</li>
        <li>Covid-19 update</li>
      </ul>
      <div className="login">
        <button className="btn">LOG IN</button>
      </div>
    </div>
  );
}
