import React from 'react';
import './QuoteBanner.css';
import bghImg from '../../assets/bgh.png';

const QuoteBanner = () => {
  return (
    <section className="quote-banner-section">
      <div className="quote-bg-wrap">
        <img src={bghImg} alt="Travel Philosophy" className="quote-bg-img" />
        <div className="quote-overlay"></div>
      </div>

      <div className="quote-content-container">
        <span className="quote-subtitle">A TRAVEL PHILOSOPHY</span>
        <h2 className="quote-title">
          <span className="quote-white">"Collect Moments,</span>
          <span className="quote-gold"> Not Just Miles."</span>
        </h2>
        <p className="quote-desc">
          The world is not a checklist. It's a living gallery of sights, culture and connection — waiting for you to carve your own trail.
        </p>
      </div>
    </section>
  );
};

export default QuoteBanner;
