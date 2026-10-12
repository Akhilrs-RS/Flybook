import React, { useState } from 'react';
import PageHero from '../../components/Common/PageHero';
import heroGalleryImg from '../../assets/hero_gallery.jpg';
import pagodaImg from '../../assets/about_pagoda.jpg';
import maldivesImg from '../../assets/dest_maldives.jpg';
import trainImg from '../../assets/hero_tours.jpg';
import amalfiImg from '../../assets/dest_amalfi.jpg';
import greatWallImg from '../../assets/hero_destinations.jpg';
import citadelImg from '../../assets/hero_about.jpg';
import londonImg from '../../assets/hero_contact.jpg';
import alpsImg from '../../assets/dest_alps.jpg';
import rajasthanImg from '../../assets/dest_rajasthan.jpg';
import eiffelImg from '../../assets/gallery_eiffel.jpg';
import tajImg from '../../assets/gallery_taj.jpg';
import './Gallery.css';

const filterCategories = [
  'All',
  'Nature',
  'Asia',
  'Africa',
  'Europe',
  'Americas',
  'Middle East'
];

// Curated 3 columns matching Figma Gallery artboard
const columnOne = [
  { id: 1, title: 'Amalfi Coast Haven', location: 'Italy', region: 'Europe', image: amalfiImg },
  { id: 2, title: 'Maldives Overwater Sanctuary', location: 'Maldives', region: 'Asia', image: maldivesImg },
  { id: 3, title: 'Amber Citadel Palace', location: 'Rajasthan, India', region: 'Asia', image: rajasthanImg },
  { id: 4, title: 'Mediterranean Cliffs', location: 'Italy', region: 'Europe', image: amalfiImg }
];

const columnTwo = [
  { id: 5, title: 'Autumn Pagoda Sanctuary', location: 'Kyoto, Japan', region: 'Asia', image: pagodaImg },
  { id: 6, title: 'Matterhorn Alpine Majesty', location: 'Swiss Alps', region: 'Europe', image: alpsImg },
  { id: 7, title: 'Udaipur Waterfront Palace', location: 'India', region: 'Asia', image: citadelImg },
  { id: 8, title: 'Landwasser Mountain Viaduct', location: 'Switzerland', region: 'Europe', image: trainImg }
];

const columnThree = [
  { id: 9, title: 'Great Wall Golden Ridge', location: 'China', region: 'Asia', image: greatWallImg },
  { id: 10, title: 'Eiffel Tower at Noon', location: 'Paris, France', region: 'Europe', image: eiffelImg },
  { id: 11, title: 'Taj Mahal Sunrise Reflection', location: 'Agra, India', region: 'Asia', image: tajImg },
  { id: 12, title: 'Westminster Bridge Sunset', location: 'London, UK', region: 'Europe', image: londonImg }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filterList = (list) => {
    if (activeFilter === 'All') return list;
    if (activeFilter === 'Nature') return list.filter(i => ['Maldives', 'Swiss Alps'].includes(i.location));
    return list.filter(i => i.region === activeFilter);
  };

  const col1Filtered = filterList(columnOne);
  const col2Filtered = filterList(columnTwo);
  const col3Filtered = filterList(columnThree);

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

      {/* 2. Gallery Section */}
      <section className="gallery-main-section">
        <div className="gallery-container">
          
          {/* Filter Bar */}
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

          {/* 3 Column Masonry */}
          <div className="gallery-columns-grid">
            <div className="gallery-column">
              {col1Filtered.map(item => (
                <div 
                  key={item.id} 
                  className="gallery-photo-card"
                  onClick={() => setSelectedPhoto(item)}
                >
                  <img src={item.image} alt={item.title} className="gallery-photo-img" />
                  <div className="gallery-photo-overlay">
                    <span className="gallery-photo-loc">{item.location}</span>
                    <h4 className="gallery-photo-title">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="gallery-column">
              {col2Filtered.map(item => (
                <div 
                  key={item.id} 
                  className="gallery-photo-card"
                  onClick={() => setSelectedPhoto(item)}
                >
                  <img src={item.image} alt={item.title} className="gallery-photo-img" />
                  <div className="gallery-photo-overlay">
                    <span className="gallery-photo-loc">{item.location}</span>
                    <h4 className="gallery-photo-title">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="gallery-column">
              {col3Filtered.map(item => (
                <div 
                  key={item.id} 
                  className="gallery-photo-card"
                  onClick={() => setSelectedPhoto(item)}
                >
                  <img src={item.image} alt={item.title} className="gallery-photo-img" />
                  <div className="gallery-photo-overlay">
                    <span className="gallery-photo-loc">{item.location}</span>
                    <h4 className="gallery-photo-title">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="gallery-lightbox-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedPhoto(null)}>✕</button>
            <img src={selectedPhoto.image} alt={selectedPhoto.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <span className="lightbox-loc">{selectedPhoto.location}</span>
              <h3>{selectedPhoto.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
