import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FlightSearchWidget from '../FlightSearchWidget/FlightSearchWidget';
import FeaturedDestinations from '../FeaturedDestinations/FeaturedDestinations';
import ConciergeServices from '../ConciergeServices/ConciergeServices';
import TravelExperience from '../TravelExperience/TravelExperience';
import QuoteBanner from '../QuoteBanner/QuoteBanner';
import FeaturedPackages from '../FeaturedPackages/FeaturedPackages';
import WhyFlybook from '../WhyFlybook/WhyFlybook';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';
import flightImg from '../../assets/flight.png';
import heroVideo from '../../assets/h.mp4';
import h1Img from '../../assets/h1.png';
import h2Img from '../../assets/h2.png';
import h3Img from '../../assets/h3.png';

// In-memory flag that resets only on browser page reload / fresh load
let hasPlayedHeroIntro = false;

const Home = () => {
  const [videoActive, setVideoActive] = useState(hasPlayedHeroIntro);

  useEffect(() => {
    // If the animation has already played in this browser session, skip immediately
    if (hasPlayedHeroIntro) {
      setVideoActive(true);
      return;
    }

    // Trigger video fade-in and blue curtain dissolve right as FLYBOOK sinks downwards
    const timer = setTimeout(() => {
      setVideoActive(true);
      hasPlayedHeroIntro = true;
    }, 4600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      {/* 1. Hero Section with Sequential Animation transitioning to continuous looping video */}
      <section 
        className={`hero-section ${videoActive ? 'video-active' : ''}`}
      >
        {/* Continuous Looping Scenic Video */}
        <video 
          className="hero-video-bg" 
          src={heroVideo}
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
        />

        {/* Brand Overlay Scrim for Text Legibility & Contrast */}
        <div className="hero-video-overlay" />

        {/* Blue Intro Curtain (Renders only once on load/refresh, bypassed on SPA navigation) */}
        {!hasPlayedHeroIntro && (
          <div className={`hero-intro-curtain ${videoActive ? 'curtain-fade-out' : ''}`}>
            {/* Animated FLYBOOK Typography (Takeoff intro -> Horizontal -> Downward Sink) */}
            <div className="hero-bg-text-wrapper">
              <h1 className="hero-bg-text">FLYBOOK</h1>
            </div>

            {/* Upward Flying Aircraft & Contrails */}
            <div className="flight-animation-wrapper">
              <img src={flightImg} alt="Flight" className="hero-flight-img" />
            </div>
          </div>
        )}

        {/* Exact Editorial Hero Content Revealed with Looping Video (Figma) */}
        <div className={`hero-editorial-content ${videoActive ? 'visible' : ''}`}>
          <span className="hero-eyebrow">PREMIUM TRAVEL EXPERIENCES SINCE 2010</span>
          <h1 className="hero-main-title">
            Your Journey Begins<br />
            Beyond the<br />
            Ordinary.
          </h1>
          <p className="hero-description">
            Curated travel experiences for those who seek more — richer stories, deeper connections, and moments that outlast every photograph.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="hero-cta-btn primary" onClick={(e) => e.stopPropagation()}>
              Plan Your Trip
            </Link>
            <Link to="/tours" className="hero-cta-btn secondary" onClick={(e) => e.stopPropagation()}>
              Explore Packages
            </Link>
          </div>
        </div>

        {/* Last Section of First Page: Flight Search Section (Revealed with Looping Video) */}
        <div 
          className={`hero-flight-search-wrapper ${videoActive ? 'visible' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <FlightSearchWidget variant="hero" />
        </div>
      </section>

      {/* Sections 2 through 5: Unified Continuous Mountain & Forest Canvas (bb.png) */}
      <div className="home-bb-continuous-wrapper">
        {/* Atmospheric Mountain Valley Mist Layer */}
        <div className="home-valley-mist-band" aria-hidden="true" />

        {/* 2. Destination Packages / Arched Cards Section */}
        <section className="destinations-section">
          {/* Decorative Path with Animated Flight */}
          <div className="decorative-path-container">
            <svg className="flight-svg-path" viewBox="0 0 1440 680" preserveAspectRatio="none">
              {/* Dashed Flight Curve traversing across Card 2 image */}
              <path 
                id="flightCurveRoute"
                d="M 90,560 C 90,440 140,360 260,330 C 380,300 460,340 540,310 C 640,270 780,230 900,180 C 1020,130 1160,95 1285,105 C 1350,115 1395,300 1380,520" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.9)" 
                strokeWidth="3.2" 
                strokeDasharray="9 9" 
                filter="drop-shadow(0 2px 5px rgba(0,0,0,0.45))"
              />

              {/* Location Pin Icon at Bottom Left Origin */}
              <g transform="translate(78, 545)">
                <path 
                  d="M 12,2 C 7,2 3,6 3,11 C 3,18 12,25 12,25 C 12,25 21,18 21,11 C 21,6 17,2 12,2 Z" 
                  fill="#ffffff" 
                  filter="drop-shadow(0 2px 6px rgba(0,0,0,0.5))"
                />
                <circle cx="12" cy="10" r="3.5" fill="#141a24" />
              </g>

              {/* Continuous Animated Aircraft gliding along path */}
              <g className="flying-aircraft-node">
                <animateMotion 
                  path="M 90,560 C 90,440 140,360 260,330 C 380,300 460,340 540,310 C 640,270 780,230 900,180 C 1020,130 1160,95 1285,105 C 1350,115 1395,300 1380,520" 
                  dur="8.5s" 
                  repeatCount="indefinite" 
                  rotate="auto" 
                />
                {/* Aircraft Silhouette with nose oriented along path */}
                <path 
                  d="M 0,-18 L 5,-4 L 20,4 L 20,9 L 5,6 L 4,16 L 10,20 L 10,23 L 0,21 L -10,23 L -10,20 L -4,16 L -5,6 L -20,9 L -20,4 L -5,-4 Z" 
                  fill="#ffffff" 
                  filter="drop-shadow(0 4px 12px rgba(0,0,0,0.65))"
                  transform="rotate(90)"
                />
              </g>
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
                  Leave the ordinary behind and step into experiences that make your heart race. From breathtaking mountain trails and scenic road trips to thrilling outdoor adventures, every journey is designed to awaken your adventurous spirit.
                </p>
                <Link to="/tours" className="card-btn">Explore Adventures &rarr;</Link>
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
                  Escape to beautiful places and create memories with the one who matters most. From peaceful beaches and dreamy resorts to breathtaking mountain escapes, every detail is thoughtfully planned for your perfect getaway. Let your journey be filled with romance, comfort, and unforgettable moments.
                </p>
                <Link to="/tours" className="card-btn">Explore Getaways &rarr;</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="destination-card">
              <div className="card-img-wrapper">
                <img src={h3Img} alt="Seamless Global Travel" />
              </div>
              <div className="card-content">
                <h3>Seamless Global Travel</h3>
                <p>
                  Step into new horizons with effortless international travel. From smooth flight ticketing and fast-track visa processing to curated global itineraries, we handle every detail from departure gate to destination so you can explore the world with total confidence.
                </p>
                <Link to="/tours" className="card-btn">Explore Journeys &rarr;</Link>
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
      </div>

      {/* 6. Sixth Section: Quote Banner ("Collect Moments, Not Just Miles." with bgh image) */}
      <QuoteBanner />

      {/* 7 & 8: Lower Home Section with Panoramic Mountain Background (hb.png) */}
      <div className="home-packages-bottom-wrapper">
        {/* 7. Seventh Section: Featured Packages (Find The Journey Made For You with h11 to h16) */}
        <FeaturedPackages />

        {/* 8. Eighth Section: Why Choose Flybook (with h17 image) */}
        <WhyFlybook />
      </div>

      {/* 9. Ninth Section: Testimonials with Forest Road Background */}
      <Testimonials />
    </div>
  );
};

export default Home;
