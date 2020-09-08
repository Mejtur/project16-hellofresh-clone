import React, { Component } from "react";
import "../css/Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-container">
          <h4>America's Most Popular Meal Kit</h4>
          <p>
            Now offering the most recipe variety and meals starting at
            <b> $7.49</b>
          </p>
          <button className="btn">Viev our plans</button>
        </div>
      </div>
    );
  }
}
