import React from "react";
import "./features.css";
import { Button } from "../../container";

const Features = ({ image, buttonText, onButtonClick, imageAlt = "Feature" }) => (
  <div className="feature-container">
    <div className="feature-box">
      <img
        src={image}
        alt={imageAlt}
        className="feature-img"
      />
<div className="feature-button" >
      <Button buttonText={buttonText}   />
</div>
    </div>
  </div>
);

export default Features;
