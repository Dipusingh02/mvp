import React from 'react'
import "./Idfeature.css";
import { Button } from '../../container';
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
    <Button buttonText={buttonText}  className="idfeature-button"/>
    </div>
  </div>
);

export default Idfeature;
