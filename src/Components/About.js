
import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import '../CSS/About.css';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";


export default function About() {
    return(

        <Row>
          <Col>
            <div className="about-background-image-container">
              <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
              <img src={AboutBackgroundImage} alt="" />
            </div>
          </Col>
          <Col>
            <div className="about-section-text-container">
              <p className="primary-subheading">About</p>
              <h1 className="primary-heading">
                Savoring Life: Food, Balance, Joy
              </h1>
              <p className="primary-text">
              At RestoFinder, we recognize the significance of food in maintaining a balanced life. 
              </p>
              <p className="primary-text">
              Our mission is to effortlessly incorporate delightful dining experiences into your everyday routine.
              </p>
              <div className="about-buttons-container">
                <button className="secondary-button">Learn More</button>
              </div>
            </div>
          </Col>
        </Row>
    );       
    
}
