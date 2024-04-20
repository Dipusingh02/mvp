import React, { useState } from 'react';
import './imageSlider.css'; 

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>&#10094;</button>
      <button className="next" onClick={handleNext}>&#10095;</button>
    </div>
  );
}

export default ImageSlider;
