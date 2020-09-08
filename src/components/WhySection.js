import React, { Component } from "react";
import "../css/WhySection.css";

import { GiChicken } from "react-icons/gi";
import { BsCalendar } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";

export default class WhySection extends Component {
  render() {
    return (
      <div className="section">
        <h4>Why HelloFresh?</h4>
        <div className="why-container">
          <div className="row">
            <div className="column">
              <GiChicken className="icon" />
              <p className="text-title">No skimpin’ on the chicken!</p>
              <p className="text">Or steak, or fish, or plant protein.</p>
            </div>
            <div className="column">
              <BsCalendar className="icon" />
              <p className="text-title">No commitment whatsoever</p>
              <p className="text">
                Skipping weeks or cancelling is super easy.
              </p>
            </div>
            <div className="column">
              <FaAward className="icon" />
              <p className="text-title">The most 5-star reviews</p>
              <p className="text">
                Our huge recipe selection wows week after week.
              </p>
            </div>
            <div className="column">
              <BiDollarCircle className="icon" />
              <p className="text-title">Fresh and affordable</p>
              <p className="text">
                Chef-created deliciousness from $7.49 per meal.
              </p>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn">GET STARTED</button>
        </div>
      </div>
    );
  }
}
