import React, { useState, useEffect, useRef } from 'react';
import './imageSlider.css';
const ImageAutoScroll = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
      interval
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, interval]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-auto-scroll">
      <div className="images-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`image ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageAutoScroll;
