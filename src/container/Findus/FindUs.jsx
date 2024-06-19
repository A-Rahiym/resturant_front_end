import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper-info">
      <SubHeading title={"Contact"}/>
      <h1 className='headtext__cormorant' style={{marginBottom:"3rem"}}>Find us</h1>
      <div className="app__wrapper-content">
        <p className='p__opensans'>Land Ends bungalow whitecroft hail laone, Rudheath CW0 753</p>
        <p className='p__cormorant' style={{color:"#DCCA87", margin:"2rem 0"}}>Land Ends bungalow whitecroft hail laone, Rudheath CW0 753</p>
        <p className='p__opensans'>Mon - Fri: 10:00am - 02:00pm</p>
        <p className='p__opensans'>sat - sun: 10:00am - 03:00pm</p>
      </div>
      <button className='custom__button' style={{marginTop:"2rem"}}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="find" />
    </div> 
  </div>
  
);

export default FindUs;
