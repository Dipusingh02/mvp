import React from 'react';
import './h_medical.css';
import Idfeatures from '../../component/idfeature/Idfeature';
import child1 from "../../asset/childp1.jpg";
import child2 from "../../asset/childp2.jpg";
import child3 from "../../asset/img3.jpeg";
import child4 from "../../asset/child4.jpeg";
const IdfeaturesData =[
    {
        image: child1,
        name:'hellog',
        contentText:'dude you have do it',
        buttonText: '  Donate Now ',
        onButtonClick: () => console.log("Clicked Button 1")
      },
    {
        image: child2,
        name:'hellog',
        contentText:'dude you have do it',
        buttonText: '  Donate Now ',
        onButtonClick: () => console.log("Clicked Button 1")
      },
    {
        image: child1,
        name:'hellog',
        contentText:'dude you have do it',
        buttonText: '  Donate Now ',
        onButtonClick: () => console.log("Clicked Button 1")
      },
    {
        image: child1,
        name:'hellog',
        contentText:'dude you have do it',
        buttonText: '  Donate Now ',
        onButtonClick: () => console.log("Clicked Button 1")
      },
    {
        image: child1,
        name:'hellog',
        contentText:'dude you have do it',
        buttonText: '  Donate Now ',
        onButtonClick: () => console.log("Clicked Button 1")
      },
    {
        image: child1,
        name:'hellog',
        contentText:'dude you have do it',
        buttonText: '  Donate Now ',
        onButtonClick: () => console.log("Clicked Button 1")
      },
    {
        image: child1,
        name:'hellog',
        contentText:'dude you have do it',
        buttonText: '  Donate Now ',
        onButtonClick: () => console.log("Clicked Button 1")
      },
    {
        image: child1,
        name:'hellog',
        contentText:'dude you have do it',
        buttonText: '  Donate Now ',
        onButtonClick: () => console.log("Clicked Button 1")
      },
     
]

const H_Medical = () => {
    return (
      <div className='mvp_wh_bgheros'>
      <div className='mvp_wh_herosblur'></div>
      <h1 id="h1s">Support Us</h1>
      <div className="H_medical-row-container">
        {IdfeaturesData.map((item, index) => (
          <Idfeatures
            key={index}
            image={item.image}
            name={item.name}
            contentText={item.contentText}
            buttonText={item.buttonText}
            onButtonClick={item.onButtonClick}
          />
        ))}
      </div>
      </div>
    );
  };

export default H_Medical
