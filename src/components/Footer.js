import React, { Component } from "react";
import "../css/Footer.css";
import Google from "../images/GooglePlay.png";
import AppStore from "../images/AppStore.png";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="info-container">
            <div className="column">
              <p className="column-title">HelloFresh</p>
              <p>
                <a href="#">Students</a>
              </p>
              <p>
                <a href="#">Blog</a>
              </p>
              <p>
                <a href="#">Recipes</a>
              </p>
            </div>
            <div className="column">
              <p className="column-title">OUR COMPANY</p>
              <p>
                <a href="#">HelloFresh Group</a>
              </p>
              <p>
                <a href="#">Careers</a>
              </p>
              <p>
                <a href="#">Press</a>
              </p>
            </div>
            <div className="column">
              <p className="column-title">CONTACT US</p>
              <p>
                <a href="#">Help center</a>
              </p>
              <p>
                <a href="#">Affilate program</a>
              </p>
              <p>
                <a href="#">Event request</a>
              </p>
            </div>
          </div>
          <div className="app-container">
            <div className="column">
              <p className="column-title">Download our app</p>
              <p className="text">
                Manage your deliveries from anywhere, anytime.
              </p>
              <div className="img-container">
                <img src={Google} alt="google" className="download" />
                <img src={AppStore} alt="appstore" className="download" />
              </div>
            </div>
          </div>
        </div>
        <div className="social-row">
          <div className="footer-info">
            <p>© HelloFreshClone made by Mejtur 2020</p>
          </div>
          <div className="social-icons">
            <AiFillFacebook className="icon fb" />
            <FaTwitterSquare className="icon tw" />
            <FiInstagram className="icon ig" />
          </div>
        </div>
      </div>
    );
  }
}
