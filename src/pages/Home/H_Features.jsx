import React from 'react';
import Features from '../../component/features/Features';
import child1 from "../../asset/child1.jpeg";
import child2 from "../../asset/child2.jpeg";
import child3 from "../../asset/img3.jpeg";
import child4 from "../../asset/child4.jpeg";
import './H_Features.css'; 
const featuresData = [
  {
    image: child1,
    buttonText: '  Donate Now ',
    onButtonClick: () => console.log("Clicked Button 1")
  },
  {
    image: child2,
    buttonText: '  Donate Now ',
    onButtonClick: () => console.log("Clicked Button 2")
  },
  {
    image: child3,
    buttonText: '  Donate Now ',
    onButtonClick: () => console.log("Clicked Button 3")
  },
  {
    image: child3,
    buttonText: '  Donate Now ',
    onButtonClick: () => console.log("Clicked Button 3")
  },
  {
    image: child3,
    buttonText: '  Donate Now ',
    onButtonClick: () => console.log("Clicked Button 3")
  },
  {
    image: child3,
    buttonText: '  Donate Now ',
    onButtonClick: () => console.log("Clicked Button 3")
  },
  {
    image: child3,
    buttonText: '  Donate Now ',
    onButtonClick: () => console.log("Clicked Button 3")
  },
  {
    image: child4,
    buttonText: '  Donate Now ',
    onButtonClick: () => console.log("Clicked Button 4")
  }
];

const H_Features = () => {
  return (
    <div className="features-row-container">
    <h1>Children Support</h1>
      {featuresData.map((item, index) => (
        <Features
          key={index}
          image={item.image}
          buttonText={item.buttonText}
          onButtonClick={item.onButtonClick}
        />
      ))}
    </div>
  );
};

export default H_Features;
