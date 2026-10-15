import React, { useState, useEffect } from 'react';
import './FeaturedDestinations.css';
import hh1Img from '../../assets/hh1.jpg';
import hh2Img from '../../assets/hh2.png';
import hh3Img from '../../assets/hh3.png';
import hh4Img from '../../assets/hh4.png';
import hh5Img from '../../assets/hh5.png';
import h5Img from '../../assets/h5.jpg';
import h9Img from '../../assets/h9.jpg';
import h6Img from '../../assets/h6.jpg';
import h7Img from '../../assets/h7.jpg';
import h8Img from '../../assets/h8.jpg';

const keralaSlides = [hh1Img, hh2Img, hh3Img, hh4Img, hh5Img];

const FeaturedDestinations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % keralaSlides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="featured-destinations-section">
      {/* Multi-layered Atmospheric Mountain Valley Mist Layers */}
      <div className="dest-mist-full-veil" aria-hidden="true" />
      <div className="dest-mist-glow" aria-hidden="true" />
      <div className="dest-mist-band-primary" aria-hidden="true" />
      <div className="dest-mist-band-secondary" aria-hidden="true" />

      <div className="destinations-container">
        {/* Header */}
        <div className="destinations-header">
          <div className="destinations-title-wrap">
            <span className="destinations-subtitle">WHERE WILL YOU GO</span>
            <h2 className="destinations-heading">
              Featured<br />Destinations
            </h2>
          </div>
          <p className="destinations-desc">
            From sacred valleys to tropical idylls — discover places that change you.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="destinations-grid">
          {/* Top Row: Large Card (Kerala) + Stack of 2 (Kashmir, Maldives) */}
          <div className="destinations-top-row">
            {/* Kerala - Looping Slideshow (hh1 to hh5) */}
            <div className="dest-card dest-card-large">
              <div className="dest-slideshow-container">
                {keralaSlides.map((slide, idx) => (
                  <img
                    key={idx}
                    src={slide}
                    alt={`Kerala scenic ${idx + 1}`}
                    className={`dest-slide-img ${idx === currentSlide ? 'active' : ''}`}
                  />
                ))}
              </div>
              <div className="dest-card-overlay">
                <span className="dest-tag">GOD'S OWN COUNTRY</span>
                <h3 className="dest-title">Kerala</h3>
              </div>
            </div>

            {/* Side Stack */}
            <div className="dest-side-stack">
              {/* Kashmir (h5) */}
              <div className="dest-card dest-card-medium">
                <img src={h5Img} alt="Kashmir" className="dest-card-img" />
                <div className="dest-card-overlay">
                  <span className="dest-tag">PARADISE ON EARTH</span>
                  <h3 className="dest-title">Kashmir</h3>
                </div>
              </div>

              {/* Maldives (h9) */}
              <div className="dest-card dest-card-medium">
                <img src={h9Img} alt="Maldives" className="dest-card-img" />
                <div className="dest-card-overlay">
                  <span className="dest-tag">TURQUOISE INFINITY</span>
                  <h3 className="dest-title">Maldives</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Dubai (h6), Himachal (h7), Europe (h8) */}
          <div className="destinations-bottom-row">
            {/* Dubai (h6) */}
            <div className="dest-card dest-card-small">
              <img src={h6Img} alt="Dubai" className="dest-card-img" />
              <div className="dest-card-overlay">
                <span className="dest-tag">CITY OF GOLD</span>
                <h3 className="dest-title">Dubai</h3>
              </div>
            </div>

            {/* Himachal (h7) */}
            <div className="dest-card dest-card-small">
              <img src={h7Img} alt="Himachal" className="dest-card-img" />
              <div className="dest-card-overlay">
                <span className="dest-tag">LAND OF THE GODS</span>
                <h3 className="dest-title">Himachal</h3>
              </div>
            </div>

            {/* Europe (h8) */}
            <div className="dest-card dest-card-small">
              <img src={h8Img} alt="Europe" className="dest-card-img" />
              <div className="dest-card-overlay">
                <span className="dest-tag">OLD WORLD MAGIC</span>
                <h3 className="dest-title">Europe</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;

