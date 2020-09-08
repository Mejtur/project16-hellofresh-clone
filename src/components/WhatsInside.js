import React, { Component } from "react";
import "../css/WhatsInside.css";
import { FcCheckmark } from "react-icons/fc";

export default class WhatsInside extends Component {
  render() {
    return (
      <div className="whats_section">
        <div className="container">
          <h4>What's Inside the Box Each Week</h4>
          <p>
            <FcCheckmark /> Easy-to-follow recipes with clear nutritional info
          </p>
          <p>
            <FcCheckmark /> High-quality ingredients sourced straight from the
            farm
          </p>
          <p>
            <FcCheckmark /> Convenient meal kits that fit perfectly in the
            fridge
          </p>
          <p>
            <FcCheckmark /> A fun cooking experience that makes you feel
            unstoppable
          </p>
          <div className="btn_container">
            <button className="btn">CHOOSE MY PLAN</button>
          </div>
        </div>
      </div>
    );
  }
}
