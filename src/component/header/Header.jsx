import React from 'react';
import ImageSlider from './ImageAutoScroll'; 
import img1 from "../../asset/home-sc-img1.jpg";
import img2 from "../../asset/home-sc-img2.jpg";
import img3 from "../../asset/home-sc-img3.jpg";
import img4 from "../../asset/home-sc-img4.jpg";
import img5 from "../../asset/home-sc-img5.jpg";

const images = [img1,img2, img3, img4, img5];

const Header = () => {
  return (
    <div className="app">
      <ImageSlider images={images} />
    </div>
  );
}

export default Header;
