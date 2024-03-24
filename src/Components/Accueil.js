import React from "react";
import BannerBackground from "../Assets/home-banner-background2.png";
import BannerImage from "../Assets/home-banner-image.png";
import '../CSS/Accueil.css';
import { FiArrowRight } from "react-icons/fi";
import Feedbacks from "./Feedbacks";
import About from "./About";
import WhyUs from "./WhyUs";

export default function Accueil() {
    return (
        <div>
            <div className="home-container">
                <div className="home-banner-container">
                    <div className="home-bannerImage-container">
                        <img src={BannerBackground} alt="" />
                    </div>
                    <div className="home-text-section">
                        <h1 className="primary-heading">
                            Your Favourite Food Delivered Hot & Fresh
                        </h1>
                        <p className="primary-text">
                        Let our restaurant partners cook your favorite meals, 
                        and we'll bring them to you just like you're dining out
                        </p>
                        <button className="secondary-button">
                            Order Now <FiArrowRight /> {" "}
                        </button>
                    </div>
                    <div className="home-image-section">
                        <img src={BannerImage} alt="" />
                    </div>
                </div>
            </div>
            <About />
            <WhyUs />
            <Feedbacks/>
        </div>
    );       
}
