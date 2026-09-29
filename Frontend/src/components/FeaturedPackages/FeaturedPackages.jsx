import React from 'react';
import './FeaturedPackages.css';
import h11Img from '../../assets/h11.png';
import h12Img from '../../assets/h12.png';
import h13Img from '../../assets/h13.png';
import h14Img from '../../assets/h14.png';
import h15Img from '../../assets/h15.png';
import h16Img from '../../assets/h16.png';

const packagesData = [
  {
    id: 1,
    image: h11Img,
    title: 'Himachal — Spiti Sojourn',
    duration: '6 Nights · 7 Days',
    price: '₹28,000'
  },
  {
    id: 2,
    image: h12Img,
    title: 'Kashmir — The Valley of Dreams',
    duration: '5 Nights · 6 Days',
    price: '₹24,000'
  },
  {
    id: 3,
    image: h13Img,
    title: 'Dubai Desert & Skyline',
    duration: '5 Nights · 6 Days',
    price: '₹34,000'
  },
  {
    id: 4,
    image: h14Img,
    title: 'Kerala Backwater Bliss',
    duration: '4 Nights · 5 Days',
    price: '₹19,999'
  },
  {
    id: 5,
    image: h15Img,
    title: 'Europe Grand Circuit',
    duration: '6 Nights · 7 Days',
    price: '₹28,000'
  },
  {
    id: 6,
    image: h16Img,
    title: 'Maldives Overwater',
    duration: '4 Nights · 5 Days',
    price: '₹148,000'
  }
];

const FeaturedPackages = () => {
  return (
    <section className="featured-packages-section">
      <div className="packages-container">
        {/* Header */}
        <div className="packages-header">
          <div className="packages-title-wrap">
            <span className="packages-subtitle">Featured Packages</span>
            <h2 className="packages-heading">Find The Journey Made For You</h2>
            <p className="packages-subtext">
              Hand-Picked Itineraries Across India And The World — Filter By The Kind Of Escape You're After.
            </p>
          </div>
          <button className="packages-view-all-btn">
            View More &rarr;
          </button>
        </div>

        {/* 6 Packages Grid */}
        <div className="packages-grid">
          {packagesData.map((pkg) => (
            <div className="package-card" key={pkg.id}>
              <div className="package-image-wrap">
                <img src={pkg.image} alt={pkg.title} className="package-image" />
                <div className="package-overlay" />
              </div>
              <div className="package-info-bar">
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-meta">
                  <span className="package-duration">{pkg.duration}</span>
                  <span className="package-divider">|</span>
                  <span className="package-price-label">Starts from </span>
                  <span className="package-price">{pkg.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
