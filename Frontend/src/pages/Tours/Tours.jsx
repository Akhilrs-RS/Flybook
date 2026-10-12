import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/Common/PageHero';
import heroToursImg from '../../assets/hero_tours.jpg';
import amalfiImg from '../../assets/dest_amalfi.jpg';
import pagodaImg from '../../assets/about_pagoda.jpg';
import rajasthanImg from '../../assets/h13.png';
import maldivesImg from '../../assets/h6.jpg';
import swissImg from '../../assets/hero_services.jpg';
import ladakhImg from '../../assets/h11.png';
import './Tours.css';

const categories = [
  'All Tours',
  'Adventure Escapes',
  'Romantic Getaways',
  'Cultural Heritage',
  'Island & Beach',
  'Scenic Rail'
];

const toursData = [
  {
    id: 1,
    title: 'Amalfi Coast & Capri Retreat',
    category: 'Romantic Getaways',
    duration: '8 Days / 7 Nights',
    price: '$3,850',
    location: 'Italy',
    image: amalfiImg,
    description: 'Cliffside villas in Positano, private sunset sails across Capri, and hand-selected lemon grove tastings.',
    highlights: ['Private Riva boat charter', '5-star cliffside suites', 'Exclusive Pompeii historian']
  },
  {
    id: 2,
    title: 'Kyoto Zen & Historic Japan',
    category: 'Cultural Heritage',
    duration: '10 Days / 9 Nights',
    price: '$4,900',
    location: 'Japan',
    image: pagodaImg,
    description: 'Immerse in ancient cedar forests, private tea ceremonies with Zen masters, and Michelin kaiseki dining.',
    highlights: ['Ryokan with private onsen', 'Shinkansen First Class', 'Private Gion geisha walk']
  },
  {
    id: 3,
    title: 'Royal Rajasthan & Desert Forts',
    category: 'Cultural Heritage',
    duration: '7 Days / 6 Nights',
    price: '$2,650',
    location: 'India',
    image: rajasthanImg,
    description: 'Grand palaces of Jaipur and Udaipur, private desert stargazing under Thar skies, and royal hospitality.',
    highlights: ['Heritage palace stays', 'Royal vintage car transfer', 'Private amber fort evening']
  },
  {
    id: 4,
    title: 'Private Atolls & Overwater Serenity',
    category: 'Island & Beach',
    duration: '6 Days / 5 Nights',
    price: '$5,200',
    location: 'Maldives',
    image: maldivesImg,
    description: 'Pristine turquoise waters, seaplane transfers, private coral reef dives, and barefoot luxury living.',
    highlights: ['Overwater sunset villa', 'Seaplane scenic transfers', 'Private sandbank dinner']
  },
  {
    id: 5,
    title: 'Swiss Glacier Express & Alpine Peaks',
    category: 'Scenic Rail',
    duration: '9 Days / 8 Nights',
    price: '$4,400',
    location: 'Switzerland',
    image: swissImg,
    description: 'Panorama rail journeys through mountain viaducts, Zermatt Matterhorn vistas, and boutique chalets.',
    highlights: ['Excellence Class Glacier rail', 'Matterhorn sunrise cable car', 'Alpine spa sanctuaries']
  },
  {
    id: 6,
    title: 'High Himalayas & Sacred Monasteries',
    category: 'Adventure Escapes',
    duration: '8 Days / 7 Nights',
    price: '$2,250',
    location: 'Ladakh',
    image: ladakhImg,
    description: 'Ancient cliffside gompas, Nubra Valley sand dunes under snow peaks, and peaceful Pangong Lake shores.',
    highlights: ['Luxury glamping camps', 'Chauffeured 4x4 expedition', 'High altitude pass crossing']
  }
];

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState('All Tours');

  const filteredTours = activeCategory === 'All Tours'
    ? toursData
    : toursData.filter(t => t.category === activeCategory);

  return (
    <div className="tours-page">
      {/* 1. Hero */}
      <PageHero
        subtitle="CURATED EXPEDITIONS"
        title="Curated journeys, made for you."
        tagline="Hand-picked itineraries across the world’s most mesmerizing destinations, planned with unhurried precision."
        bgImage={heroToursImg}
        minHeight="62vh"
      />

      {/* 2. Main Catalog Section */}
      <section className="tours-catalog-section">
        <div className="tours-catalog-container">
          
          {/* Category Filter Pills */}
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

          {/* Cards Grid */}
          <div className="tours-grid">
            {filteredTours.map(tour => (
              <div key={tour.id} className="tour-package-card">
                <div className="tour-card-img-wrap">
                  <img src={tour.image} alt={tour.title} className="tour-card-img" />
                  <span className="tour-card-badge">{tour.duration}</span>
                  <span className="tour-card-location">{tour.location}</span>
                </div>

                <div className="tour-card-body">
                  <span className="tour-card-category">{tour.category}</span>
                  <h3 className="tour-card-title">{tour.title}</h3>
                  <p className="tour-card-desc">{tour.description}</p>

                  <div className="tour-card-highlights">
                    {tour.highlights.map((h, i) => (
                      <span key={i} className="highlight-tag">✓ {h}</span>
                    ))}
                  </div>

                  <div className="tour-card-footer">
                    <div className="tour-price-wrap">
                      <span className="price-label">Starting from</span>
                      <span className="price-val">{tour.price} <small>/ person</small></span>
                    </div>
                    <Link to="/contact" className="tour-inquire-btn">
                      View Itinerary &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Tours;
