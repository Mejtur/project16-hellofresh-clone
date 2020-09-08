import React, { Component } from "react";
import "../css/Recipes.css";
import Recipe from "./Recipe";
import Carousel from "react-elastic-carousel";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 550, itemsToShow: 1, itemsToScroll: 2 },
      { width: 1000, itemsToShow: 2, ittemsToScroll: 1 },
    ];
  }

  render() {
    return (
      <div className="recipes-section">
        <h4 className="title">Most variety. Most deliciousness.</h4>
        <p className="text">
          We test each recipe 45 times to ensure deliciousness and simplicity.
        </p>
        <div className="recipe-container">
          <Carousel breakPoints={this.breakPoints}>
            <Recipe bg="food1" text="TASTE TOURS" color="blue" />
            <Recipe bg="food2" text="CRAFT BURGER" color="orange" />
            <Recipe bg="food3" text="20-MIN MEAL" color="light-orange" />
            <Recipe bg="food4" text="ONE-POT" color="grey" />
            <Recipe bg="food5" text="VEGGIE" color="green" />
          </Carousel>
        </div>
        <button className="btn">GET COOKING</button>
      </div>
    );
  }
}
