import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import FeaturedDestinations from '../FeaturedDestinations/FeaturedDestinations';
import ConciergeServices from '../ConciergeServices/ConciergeServices';
import TravelExperience from '../TravelExperience/TravelExperience';
import QuoteBanner from '../QuoteBanner/QuoteBanner';
import FeaturedPackages from '../FeaturedPackages/FeaturedPackages';
import './Home.css';
import flightImg from '../../assets/flight.png';
import h1Img from '../../assets/h1.png';
import h2Img from '../../assets/h2.png';
import h3Img from '../../assets/h3.png';

const Home = () => {
  const [animKey, setAnimKey] = useState(0);

  const handleReplay = () => {
    setAnimKey(prev => prev + 1);
  };

  return (
    <div className="home-container">
      <Navbar />
      
      {/* 1. Hero Section with Sequential Animation */}
      <section 
        className="hero-section" 
        key={animKey}
        onClick={handleReplay}
        title="Click to replay animation"
      >
        {/* Animated FLYBOOK Typography */}
        <div className="hero-bg-text-wrapper">
          <h1 className="hero-bg-text">FLYBOOK</h1>
        </div>

        {/* Upward Flying Aircraft & Contrails */}
        <div className="flight-animation-wrapper">
          <img src={flightImg} alt="Flight" className="hero-flight-img" />
        </div>
      </section>

      {/* 2. Destination Packages / Arched Cards Section */}
      <section className="destinations-section">
        {/* Decorative Path */}
        <div className="decorative-path">
          <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <path d="M 0,200 Q 250,50 500,200 T 1000,200" fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="10 10" />
            <circle cx="100" cy="150" r="4" fill="#ffffff" />
          </svg>
        </div>

        <div className="cards-wrapper">
          {/* Card 1 */}
          <div className="destination-card">
            <div className="card-img-wrapper">
              <img src={h1Img} alt="Adventure Escapes" />
            </div>
            <div className="card-content">
              <h3>Adventure Escapes</h3>
              <p>
                Leave the ordinary behind and step into experiences that make your heart race. From breathtaking mountain trails to thrilling outdoor adventures, every journey is designed to awaken your adventurous spirit.
              </p>
              <button className="card-btn">Explore Adventures &rarr;</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="destination-card">
            <div className="card-img-wrapper">
              <img src={h2Img} alt="Romantic Getaways" />
            </div>
            <div className="card-content">
              <h3>Romantic Getaways</h3>
              <p>
                Escape to beautiful places and create memories with the one who matters most. From peaceful beaches to dreamy retreats, every detail is thoughtfully planned for your perfect romantic getaway.
              </p>
              <button className="card-btn">Explore Adventures &rarr;</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="destination-card">
            <div className="card-img-wrapper">
              <img src={h3Img} alt="Romantic Getaways 2" />
            </div>
            <div className="card-content">
              <h3>Romantic Getaways</h3>
              <p>
                Escape to beautiful places and create memories with the one who matters most. From peaceful beaches to dreamy retreats, every detail is thoughtfully planned for your perfect romantic getaway.
              </p>
              <button className="card-btn">Explore Adventures &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Third Section: Featured Destinations (Kerala, Kashmir, Maldives, Dubai, Himachal, Europe) */}
      <FeaturedDestinations />

      {/* 4. Fourth Section: The Concierge Engine (Every service, engineered around you) */}
      <ConciergeServices />

      {/* 5. Fifth Section: Travel, The Way It Should Feel (with h10 architecture image) */}
      <TravelExperience />

      {/* 6. Sixth Section: Quote Banner ("Collect Moments, Not Just Miles." with bgh image) */}
      <QuoteBanner />

      {/* 7. Seventh Section: Featured Packages (Find The Journey Made For You) */}
      <FeaturedPackages />
    </div>
  );
};

export default Home;
