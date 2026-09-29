import React from 'react';
import './WhyFlybook.css';
import h17Img from '../../assets/h17.png';

const WhyFlybook = () => {
  return (
    <section className="why-flybook-section">
      <div className="why-flybook-container">
        <div className="why-flybook-card">
          <img 
            src={h17Img} 
            alt="Why Choose Flybook - We don't book trips. We compose journeys." 
            className="why-flybook-banner-img"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyFlybook;
