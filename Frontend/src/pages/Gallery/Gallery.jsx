import React, { useState } from 'react';
import PageHero from '../../components/Common/PageHero';
import g1Img from '../../assets/g1.png';
import t2Img from '../../assets/t2.jpg';
import d3Img from '../../assets/d3.jpg';
import d5Img from '../../assets/d5.jpg';
import d6Img from '../../assets/d6.jpg';
import g3Img from '../../assets/g3.png';
import t4Img from '../../assets/t4.jpg';
import a1Img from '../../assets/a1.jpg';
import g4Img from '../../assets/g4.png';
import g5Img from '../../assets/g5.jpg';
import t1Img from '../../assets/t1.jpg';
import g7Img from '../../assets/g7.jpg';
import g6Img from '../../assets/g6.png';
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
  { id: 1, title: 'Amalfi Coast Haven', location: 'Italy', region: 'Europe', image: t2Img },
  { id: 2, title: 'Maldives Overwater Sanctuary', location: 'Maldives', region: 'Asia', image: d5Img },
  { id: 3, title: 'Amber Citadel Palace', location: 'Rajasthan, India', region: 'Asia', image: t4Img },
  { id: 4, title: 'Mediterranean Cliffs', location: 'Italy', region: 'Europe', image: g5Img },
  { id: 5, title: 'Positano Coastal Vista', location: 'Italy', region: 'Europe', image: g7Img }
];

const columnTwo = [
  { id: 6, title: 'Autumn Pagoda Sanctuary', location: 'Kyoto, Japan', region: 'Asia', image: d3Img },
  { id: 7, title: 'Matterhorn Alpine Majesty', location: 'Swiss Alps', region: 'Europe', image: d6Img },
  { id: 8, title: 'Udaipur Waterfront Palace', location: 'India', region: 'Asia', image: a1Img },
  { id: 9, title: 'Landwasser Mountain Viaduct', location: 'Switzerland', region: 'Europe', image: t1Img }
];

const columnThree = [
  { id: 10, title: 'Eiffel Tower at Noon', location: 'Paris, France', region: 'Europe', image: g3Img },
  { id: 11, title: 'Taj Mahal Sunrise Reflection', location: 'Agra, India', region: 'Asia', image: g4Img },
  { id: 12, title: 'Burj Khalifa Sunset Skyline', location: 'Dubai, UAE', region: 'Middle East', image: g6Img }
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
        bgImage={g1Img}
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
