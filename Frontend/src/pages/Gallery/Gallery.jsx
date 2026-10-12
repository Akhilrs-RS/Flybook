import React, { useState } from 'react';
import PageHero from '../../components/Common/PageHero';
import heroGalleryImg from '../../assets/hero_gallery.jpg';
import pagodaImg from '../../assets/about_pagoda.jpg';
import maldivesImg from '../../assets/h6.jpg';
import trainImg from '../../assets/hero_tours.jpg';
import amalfiImg from '../../assets/dest_amalfi.jpg';
import greatWallImg from '../../assets/hero_destinations.jpg';
import citadelImg from '../../assets/hero_about.jpg';
import londonImg from '../../assets/hero_contact.jpg';
import alpineImg from '../../assets/hero_services.jpg';
import rajasthanImg from '../../assets/h13.png';
import varanasiImg from '../../assets/h14.png';
import dubaiImg from '../../assets/h7.jpg';
import munnarImg from '../../assets/h16.png';
import './Gallery.css';

const filterCategories = [
  'All Moments',
  'Mountains & Alpine',
  'Coastal & Islands',
  'Heritage & Palaces',
  'Urban & Architecture'
];

const galleryItems = [
  { id: 1, title: 'Autumn Sanctuary in Kyoto', location: 'Japan', category: 'Heritage & Palaces', image: pagodaImg, span: 'tall' },
  { id: 2, title: 'Azure Waters of Ari Atoll', location: 'Maldives', category: 'Coastal & Islands', image: maldivesImg, span: 'wide' },
  { id: 3, title: 'Landwasser Viaduct Rail Pass', location: 'Switzerland', category: 'Mountains & Alpine', image: trainImg, span: 'tall' },
  { id: 4, title: 'Sunlit Cliffs of Positano', location: 'Italy', category: 'Coastal & Islands', image: amalfiImg, span: 'normal' },
  { id: 5, title: 'Great Wall Golden Ridge', location: 'China', category: 'Heritage & Palaces', image: greatWallImg, span: 'wide' },
  { id: 6, title: 'Mist Over Alhambra Citadel', location: 'Spain', category: 'Heritage & Palaces', image: citadelImg, span: 'normal' },
  { id: 7, title: 'Westminster Bridge at Sunset', location: 'United Kingdom', category: 'Urban & Architecture', image: londonImg, span: 'tall' },
  { id: 8, title: 'Morning Reflections on Alpine Lake', location: 'Banff / Alberta', category: 'Mountains & Alpine', image: alpineImg, span: 'wide' },
  { id: 9, title: 'Amber Citadel Palace Gates', location: 'Rajasthan, India', category: 'Heritage & Palaces', image: rajasthanImg, span: 'normal' },
  { id: 10, title: 'Sacred Ganges at Daybreak', location: 'Varanasi, India', category: 'Heritage & Palaces', image: varanasiImg, span: 'tall' },
  { id: 11, title: 'Futuristic Dusk Over Downtown', location: 'Dubai, UAE', category: 'Urban & Architecture', image: dubaiImg, span: 'normal' },
  { id: 12, title: 'Emerald Terraces of Munnar', location: 'Kerala, India', category: 'Mountains & Alpine', image: munnarImg, span: 'wide' }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All Moments');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredItems = activeFilter === 'All Moments'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="gallery-page">
      {/* 1. Hero */}
      <PageHero
        subtitle="VISUAL CHRONICLES"
        title="A world worth seeing."
        tagline="A curated photographic collection of quiet moments, dramatic horizons, and bespoke journeys."
        bgImage={heroGalleryImg}
        minHeight="60vh"
      />

      {/* 2. Gallery Main Section */}
      <section className="gallery-main-section">
        <div className="gallery-container">
          
          {/* Filter Navigation */}
          <div className="gallery-filter-bar">
            {filterCategories.map((cat, idx) => (
              <button
                key={idx}
                className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Collage Grid */}
          <div className="gallery-masonry-grid">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className={`gallery-item item-span-${item.span}`}
                onClick={() => setSelectedPhoto(item)}
              >
                <img src={item.image} alt={item.title} className="gallery-item-img" />
                <div className="gallery-item-overlay">
                  <span className="gallery-location-tag">{item.location}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Lightbox Modal */}
      {selectedPhoto && (
        <div className="gallery-lightbox-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedPhoto(null)}>✕</button>
            <img src={selectedPhoto.image} alt={selectedPhoto.title} className="lightbox-img" />
            <div className="lightbox-details">
              <span className="lightbox-location">{selectedPhoto.location}</span>
              <h3 className="lightbox-title">{selectedPhoto.title}</h3>
              <span className="lightbox-category">{selectedPhoto.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
