import React from 'react';
import './FeaturedDestinations.css';
import h4Img from '../../assets/h4.jpg';
import h5Img from '../../assets/h5.jpg';
import h9Img from '../../assets/h9.jpg';
import h6Img from '../../assets/h6.jpg';
import h7Img from '../../assets/h7.jpg';
import h8Img from '../../assets/h8.jpg';

const FeaturedDestinations = () => {
  return (
    <section className="featured-destinations-section">
      <div className="destinations-container">
        {/* Header */}
        <div className="destinations-header">
          <div className="destinations-title-wrap">
            <span className="destinations-subtitle">WHERE WILL YOU GO</span>
            <h2 className="destinations-heading">Featured Destinations</h2>
          </div>
          <p className="destinations-desc">
            From sun-kissed valleys to tropical atolls – discover places that change you.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="destinations-grid">
          {/* Top Row: Large Card (Kerala) + Stack of 2 (Kashmir, Maldives) */}
          <div className="destinations-top-row">
            {/* Kerala (h4) */}
            <div className="dest-card dest-card-large">
              <img src={h4Img} alt="Kerala" className="dest-card-img" />
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
                  <span className="dest-tag">TROPICAL BLISS</span>
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
                <span className="dest-tag">FUTURE MEETS DESERT</span>
                <h3 className="dest-title">Dubai</h3>
              </div>
            </div>

            {/* Himachal (h7) */}
            <div className="dest-card dest-card-small">
              <img src={h7Img} alt="Himachal" className="dest-card-img" />
              <div className="dest-card-overlay">
                <span className="dest-tag">LAND OF GODS</span>
                <h3 className="dest-title">Himachal</h3>
              </div>
            </div>

            {/* Europe (h8) */}
            <div className="dest-card dest-card-small">
              <img src={h8Img} alt="Europe" className="dest-card-img" />
              <div className="dest-card-overlay">
                <span className="dest-tag">OLD WORLD CHARM</span>
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
