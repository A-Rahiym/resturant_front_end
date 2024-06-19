import React from 'react';
import {SubHeading} from '../../components'
import './Header.css';
import {images} from "../../constants"

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
        <h1 className='app__header-h1'>The Key to fine Dining</h1>
      <p className='p__opensans'  style={{margin:'2rem 0'}}>Healthcare Predicting total height based on various body measurements can help healthcare professionals monitor growth and development, as well as identify potential health issues.</p>
      <button type='button' className='custom__button'>Explore here</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
