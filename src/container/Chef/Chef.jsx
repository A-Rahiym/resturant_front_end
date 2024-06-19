import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants'

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'> What we belive in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>he user inputs are retrieved from the form</p>
        </div>
        <p className='p__opensans'>and the trained model predicts the total height based on these inputs.
        The prediction result is displayed on the web page, and error handling is implemented to manage potential issues during the prediction process.</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
