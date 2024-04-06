import React from 'react'
import "./features.css"
const Feature = ({ image, button }) => (
  <div className="uniblu__features-container__feature">
    <div className="uniblu__features-container__feature-title">
      <div />
      <img>{image}</img>
    </div>
    <div className="uniblu__features-container_feature-text">
      <button>{button}</button>
    </div>
  </div>
);


export default Features
