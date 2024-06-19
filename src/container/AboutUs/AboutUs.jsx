import React from 'react';

import './AboutUs.css';
import {images} from "../../constants"

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex_center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img'/>
        <p className='p__opensans'>Healthcare Predicting total height based on various body measurements can help healthcare professionals monitor growth and development, as well as identify potential health issues.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img'/>
        <p className='p__opensans'>based on various body measurements can help healthcare professionals monitor growth and development, as well as identify potential health issues.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
