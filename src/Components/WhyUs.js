import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import '../CSS/WhyUs.css';

export default function WhyUs() {
    const workInfoData = [
        {
          image: PickMeals,
          title: "Pick Meals",
          text: "Discover an array of cuisines, choose your favorites.",
        },
        {
          image: ChooseMeals,
          title: "Choose How Often",
          text: "Select one-time or regular orders to match your schedule.",
        },
        {
          image: DeliveryMeals,
          title: "Fast Deliveries",
          text: "Choose our dependable and efficient delivery service for mealtime satisfaction.",
        },
      ];
      return (
        <div style={{backgroundColor: "#e7e1f7", padding: "30px"}}>
          <div className="work-section-top">
            <p className="primary-subheading">Why Us ?</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">
            At RestoFinder, we operate with a clear methodology and strict
             discipline to ensure that your dining experience exceeds expectations every time. Here's how:
            </p>
          </div>
          <div className="work-section-bottom" style={{marginTop: "10px"}}>
            {workInfoData.map((data) => (
              <div className="work-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                  <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
    );       
    
}
