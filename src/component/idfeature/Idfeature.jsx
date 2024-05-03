import React from 'react'
import "./Idfeature.css";
const Idfeature = ({ image, name,contentText,buttonText, onButtonClick, imageAlt = "Feature" }) => (
  <div className="idfeature-container">
    <div className="idfeature-box">
      <img
        src={image}
        alt={imageAlt}
        className="idfeature-img"
      />
      <h1>{name}</h1>
      <h2>{contentText}</h2>
      <button onClick={onButtonClick} className="feature-button">
        {buttonText}
      </button>
    </div>
  </div>
);

export default Idfeature;
