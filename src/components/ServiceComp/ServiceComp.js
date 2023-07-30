import React from 'react';
import serviceOne from '../../assets/39.webp'
import serviceTwo from '../../assets/40.webp'
import serviceThree from '../../assets/41.webp'
import serviceFour from '../../assets/42.webp'
import serviceFive from '../../assets/43.webp'
import serviceSix from '../../assets/44.webp'

import './ServiceComp.css'

const ServiceComp = () => {
  return (
    <div>
      <h2>What We Are Doing</h2>

      <section className="service_container">
        <div className="servive_box">
            <img src={serviceOne} alt="Welfare" className='service_icon' />
            <h3 className='service_text'>Welfare</h3>
        </div>
        <div className="servive_box">
            <img src={serviceTwo} alt="Medical" className='service_icon' />
            <h3 className='service_text'>Medical</h3>
        </div>
        <div className="servive_box">
            <img src={serviceThree} alt="Online Sadqah" className='service_icon' />
            <h3 className='service_text'>Online Sadqah</h3>
        </div>
        <div className="servive_box">
            <img src={serviceFour} alt="RO Plant" className='service_icon' />
            <h3 className='service_text'>RO Plant</h3>
        </div>
        <div className="servive_box">
            <img src={serviceFive} alt="Education" className='service_icon' />
            <h3 className='service_text'>Education</h3>
        </div>
        <div className="servive_box">
            <img src={serviceSix} alt="Welfare" className='service_icon' />
            <h3 className='service_text'>Food</h3>
        </div>
      </section>
    </div>
  );
}

export default ServiceComp;
