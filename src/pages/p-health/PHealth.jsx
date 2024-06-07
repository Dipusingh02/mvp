import React from 'react';
import "./phealth.css";
import { Navbar, Header } from '../../component';
import { Button } from '../../container';
import H_Medical from '../Home/H_Medical';

const ButtonData = [{
  buttonText: 'JOIN US',
  onButtonClick: () => console.log("Clicked Join Us")
}]

const PHealth = () => {
  return (
    <div className='health-main'>
      <Navbar />
      <Header />
      <br />
      <div className='health-main__head'>
        HEALTHCARE SUPPORT
      </div>
      <div className='health-main__content'>
        Welcome to the Health Section of Maharani Vina Educational and Charitable Trust's website. At our organization, we believe in the profound importance of leading a healthy lifestyle. The benefits of living a healthy life extend far beyond physical well-being; they encompass mental, emotional, and social aspects of our lives. Through our various initiatives and programs, we aim to promote and facilitate the adoption of healthy habits for individuals and communities alike.
      </div>
      <div className='health-cards'>
        <div>One of the primary benefits of prioritizing health is the enhancement of overall well-being. When we take care of our bodies through nutritious eating, regular exercise, and sufficient rest, we experience increased energy levels, improved mood, and greater resilience to stress. This holistic approach to health empowers individuals to fully engage in and enjoy all aspects of their lives.</div>
        <div>Investing in our health today contributes to a better tomorrow. By maintaining a healthy lifestyle, we reduce the risk of developing chronic diseases such as diabetes, heart disease, and certain cancers. This not only leads to improved longevity but also enhances our quality of life as we age. Through education, awareness, and access to healthcare services, we strive to empower individuals to take proactive steps towards preventing illness and promoting longevity.</div>
        <div>In addition to individual benefits, living a healthy life has ripple effects that extend to our families, communities, and society at large. Healthy individuals are more productive, engaged, and able to contribute meaningfully to their communities. By fostering a culture of health within our organization and beyond, we aim to create a positive impact that transcends individual boundaries and fosters collective well-being.</div>
        <div>At Maharani Vina Educational and Charitable Trust, we recognize that achieving and maintaining good health is a journey that requires support, resources, and collaboration. Through our diverse array of programs, workshops, and partnerships, we provide individuals with the tools and knowledge they need to make informed decisions about their health and well-being. Together, we can cultivate a healthier, happier future for all.</div>
      </div>
      <br />
      <div className='health-main__button'>
        <div className='health__button-main__heading'>
          WANT TO BECOME A VOLUNTEER ?
        </div>
        <div className='health___button-main__content'>
          {ButtonData.map((item, index) => (
            <Button
              key={index}
              image={item.image}
              buttonText={item.buttonText}
              onButtonClick={item.onButtonClick}
            />
          ))}
        </div>
      </div>
      <H_Medical />
    </div>
  )
}

export default PHealth;
