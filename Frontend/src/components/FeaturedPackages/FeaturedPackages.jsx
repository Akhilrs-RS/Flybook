import React from 'react';
import './FeaturedPackages.css';

const FeaturedPackages = () => {
  return (
    <section className="featured-packages-section">
      <div className="packages-container">
        <div className="packages-header">
          <div className="packages-title-wrap">
            <span className="packages-subtitle">Featured Packages</span>
            <h2 className="packages-heading">Find The Journey Made For You</h2>
            <p className="packages-subtext">
              Hand-Picked Itineraries Across India And The World — Filter By The Kind Of Escape You're After.
            </p>
          </div>
          <button className="packages-view-all-btn">
            View All &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
