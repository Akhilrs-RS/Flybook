import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/Common/PageHero';
import t1Img from '../../assets/t1.jpg';
import t2Img from '../../assets/t2.jpg';
import t3Img from '../../assets/t3.jpg';
import t4Img from '../../assets/t4.jpg';
import t5Img from '../../assets/t5.jpg';
import a1Img from '../../assets/a1.jpg';
import './Tours.css';

const categories = [
  'All Packages',
  'Cultural',
  'Nature & Wildlife',
  'Beach & Coast',
  'Adventure',
  'Scenic Rail'
];

const mainTours = [
  {
    id: 1,
    title: 'Amalfi Serenade',
    location: 'Italy',
    category: 'Beach & Coast',
    duration: '8 Days / 7 Nights',
    price: '$3,850',
    image: t2Img,
    description: 'Sun-drenched cliffs and pastel seaside dreams along the dramatic Italian coastline.',
    highlights: ['Private Riva boat charters', '5-star cliffside suites', 'Exclusive lemon estate tastings']
  },
  {
    id: 2,
    title: 'Kyoto & Ancient Honshu',
    location: 'Japan',
    category: 'Cultural',
    duration: '10 Days / 9 Nights',
    price: '$4,900',
    image: t3Img,
    description: 'Quiet bamboo groves, classical wooden shrines, and Zen meditation with master monks.',
    highlights: ['Ryokan with private onsen', 'Shinkansen First Class', 'Private Gion geisha walk']
  },
  {
    id: 3,
    title: 'Rajasthan Palaces & Forts',
    location: 'India',
    category: 'Cultural',
    duration: '7 Days / 6 Nights',
    price: '$2,650',
    image: t4Img,
    description: 'Golden fortresses, regal havelis, and desert sunsets across the legendary land of kings.',
    highlights: ['Heritage palace suites', 'Private Amber Fort evening', 'Vintage royal car transfers']
  },
  {
    id: 4,
    title: 'Maldives Haven',
    location: 'Maldives',
    category: 'Beach & Coast',
    duration: '6 Days / 5 Nights',
    price: '$5,200',
    image: t5Img,
    description: 'Pristine turquoise lagoons, barefoot luxury, and overwater sundecks under canopy stars.',
    highlights: ['Overwater sunset villa', 'Scenic seaplane transfers', 'Private sandbank dinner']
  }
];

const splitTours = [
  {
    id: 5,
    title: 'The Grand Alpine Tour',
    location: 'Switzerland',
    category: 'Scenic Rail',
    duration: '9 Days / 8 Nights',
    price: '$4,400',
    image: t1Img,
    description: 'Glacier Express Excellence Class and breathtaking viaduct mountain rail passes.',
    highlights: ['Excellence Class Glacier rail', 'Matterhorn sunrise cable car']
  },
  {
    id: 6,
    title: 'Heritage Heartland',
    location: 'Udaipur & Rajasthan',
    category: 'Cultural',
    duration: '8 Days / 7 Nights',
    price: '$2,800',
    image: a1Img,
    description: 'Illuminated marble waterfront palaces, royal courtyards, and sunset boat safaris.',
    highlights: ['Lake palace private suite', 'Private historian accompaniment']
  }
];

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState('All Packages');
  const [searchQuery, setSearchQuery] = useState('');

  const filterItem = (tour) => {
    const matchesCategory = activeCategory === 'All Packages' || tour.category === activeCategory;
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tour.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  };

  const filteredMain = mainTours.filter(filterItem);
  const filteredSplit = splitTours.filter(filterItem);

  return (
    <div className="tours-page">
      {/* 1. Hero */}
      <PageHero
        subtitle="CURATED EXPEDITIONS & BESPOKE PACKAGES"
        title="Curated journeys made for you."
        tagline="Handcrafted itineraries balancing unhurried discovery, authentic local intimacy, and effortless luxury."
        bgImage={t1Img}
        minHeight="60vh"
      />

      {/* 2. Catalog Section */}
      <section className="tours-catalog-section">
        <div className="tours-catalog-container">
          
          {/* Search Bar */}
          <div className="tours-search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search destinations or packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="tours-search-input"
            />
          </div>

          {/* Filter Bar */}
          <div className="tours-filter-bar">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Wide Showcase Cards */}
          <div className="tours-wide-list">
            {filteredMain.map(tour => (
              <div key={tour.id} className="tour-wide-card">
                <div className="tour-wide-img-wrap">
                  <img src={tour.image} alt={tour.title} className="tour-wide-img" />
                  <span className="tour-wide-badge">{tour.location.toUpperCase()}</span>
                </div>
                <div className="tour-wide-content">
                  <div className="tour-wide-header">
                    <div>
                      <span className="tour-meta-category">{tour.category}</span>
                      <h3 className="tour-wide-title">{tour.title}</h3>
                    </div>
                    <div className="tour-wide-pricing">
                      <span className="tour-price-from">From</span>
                      <span className="tour-price-val">{tour.price}</span>
                      <span className="tour-duration-sub">{tour.duration}</span>
                    </div>
                  </div>
                  <p className="tour-wide-desc">{tour.description}</p>
                  <div className="tour-wide-footer">
                    <div className="tour-highlights-row">
                      {tour.highlights.map((h, i) => (
                        <span key={i} className="tour-highlight-tag">✦ {h}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="tour-inquire-btn">
                      Inquire About Journey &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Side by side cards (Row 5 & 6) */}
          {filteredSplit.length > 0 && (
            <div className="tours-split-grid">
              {filteredSplit.map(tour => (
                <div key={tour.id} className="tour-half-card">
                  <div className="tour-half-img-wrap">
                    <img src={tour.image} alt={tour.title} className="tour-half-img" />
                    <span className="tour-wide-badge">{tour.location.toUpperCase()}</span>
                  </div>
                  <div className="tour-half-content">
                    <span className="tour-meta-category">{tour.category}</span>
                    <h3 className="tour-half-title">{tour.title}</h3>
                    <p className="tour-half-desc">{tour.description}</p>
                    <div className="tour-half-footer">
                      <div className="tour-price-box">
                        <span className="tour-price-val">{tour.price}</span>
                        <span className="tour-duration-sub">{tour.duration}</span>
                      </div>
                      <Link to="/contact" className="tour-inquire-btn">
                        Inquire &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredMain.length === 0 && filteredSplit.length === 0 && (
            <div className="tours-empty-state">
              <h3>No journeys found</h3>
              <p>Try clearing your search query or choosing another category filter.</p>
              <button 
                onClick={() => { setActiveCategory('All Packages'); setSearchQuery(''); }}
                className="reset-tours-btn"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Tours;
