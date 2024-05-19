import React from 'react';
import './home.css';
import { Button } from '../../container';
const ButtonData=[
  {
    buttonText: 'Learn More',
    onButtonClick: () => console.log("Clicked Learn More")
  },
  {
    buttonText: 'Get Involved',
    onButtonClick: () => console.log("Clicked Get Involved")
  },
  {
    buttonText: 'Donate Now',
    onButtonClick: () => console.log("Clicked Donate Now")
  },
]
const H_wlcm = () => {
  return (
    <div className='wlcm-container'>
   <h1> Welcome to MAHARANI VINA EDUCATIONAL AND CHARITABLE TRUST : A Helping Hand for All </h1>
   <div id="wlcm_text">At MVEC Trust, we help the elderly, children, people affected by disasters, and orphans. We offer health care and education for kids, a safe place for the elderly, quick help during disasters, and loving care for orphans. Our goal is to make life better now and in the future for those who need our help.
   </div>
   <br />
   <h1>How Can You Help?</h1>
   <div id="wlcm_text">You can make a big difference in many ways. You can volunteer your time, give money, or just tell others about us. Whether you help in person or support from afar, your efforts matter. Your donations go directly to our important work, and telling others helps our community grow.
   </div>
   <br />
   <h1>Join Us Today!!</h1>
   <div id="wlcm_text">Learn about our work and the people we've helped. Find out how you can get involved or make a donation. Together, we can keep helping those who need it most. Join us at MVEC Trust, and be part of making tomorrow better.
   </div>
   <br />
   <div className='wlcm_btn'>
   {ButtonData.map((item, index) => (
    <Button
      key={index}
      image={item.image}
      buttonText={item.buttonText}
      onButtonClick={item.onButtonClick}
    />
  ))}</div>
    </div>
  )
}

export default H_wlcm
