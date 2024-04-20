import React from "react";
import "./features.css";

const Features = ({ image, buttonText, onButtonClick, imageAlt = "Feature" }) => (
  <div className="feature-container">
    <div className="feature-box">
      <img
        src={image}
        alt={imageAlt}
        className="feature-img"
      />
      <button onClick={onButtonClick} className="feature-button">
        {buttonText}
      </button>
    </div>
  </div>
);

export default Features;
