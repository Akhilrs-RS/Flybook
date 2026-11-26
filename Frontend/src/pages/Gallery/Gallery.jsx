import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/Common/PageHero';
import d1Img from '../../assets/d1.png';
import d2Img from '../../assets/d2.jpg';
import d3Img from '../../assets/d3.jpg';
import d4Img from '../../assets/d4.jpg';
import d5Img from '../../assets/d5.jpg';
import d6Img from '../../assets/d6.jpg';
import g1Img from '../../assets/g1.png';
import t2Img from '../../assets/t2.jpg';
import g3Img from '../../assets/g3.png';
import t4Img from '../../assets/t4.jpg';
import a1Img from '../../assets/a1.jpg';
import g4Img from '../../assets/g4.png';
import g5Img from '../../assets/g5.jpg';
import t1Img from '../../assets/t1.jpg';
import g7Img from '../../assets/g7.jpg';
import g6Img from '../../assets/g6.png';
import h13Img from '../../assets/h13.png';
import destUsaImg from '../../assets/dest_usa.jpg';
import destNetherlandsImg from '../../assets/dest_netherlands.jpg';
import gallerySfUsaImg from '../../assets/gallery_sf_usa.jpg';
import galleryAmsterdamImg from '../../assets/gallery_amsterdam.jpg';
import './Gallery.css';

// 1. Destination Showcase Data
const regions = [
  'All Regions',
  'Europe',
  'Americas',
  'Middle East',
  'Asia & Far East',
  'Indian Subcontinent',
  'Island Sanctuaries'
];

const destinationList = [
  {
    id: 'usa',
    name: 'New York & California',
    country: 'United States',
    region: 'Americas',
    image: destUsaImg,
    tagline: 'Iconic Manhattan skylines, Broadway lights, and Pacific Coast horizons.',
    description: "From the electrifying energy of Manhattan's world-class theaters and soaring penthouses to the cinematic coastal cliffs of Big Sur and California's sun-drenched vineyards. Flybook crafts seamless, bespoke journeys across the United States with private aviation, luxury boutique suites, and curated VIP access.",
    highlights: ['Central Park & Broadway VIP theater access', 'Private helicopter skyline flights over Manhattan', 'Big Sur Pacific Coast Highway private touring', 'Napa Valley private vineyard tastings & stays']
  },
  {
    id: 'dubai',
    name: 'Dubai & Arabian Sands',
    country: 'United Arab Emirates',
    region: 'Middle East',
    image: g6Img,
    tagline: 'Futuristic architectural marvels, golden desert dunes, and ultra-luxury hospitality.',
    description: 'Where visionary ultra-modern architecture rises out of golden desert dunes. Dubai is a world of superlatives — from sunset vistas atop the Burj Khalifa and private yacht cruises across Palm Jumeirah, to silent stargazing evenings at luxury Bedouin desert retreats.',
    highlights: ['Burj Khalifa level 148 lounge access', 'Private Arabian desert dune safari & glamping', 'Palm Jumeirah private yacht charters', 'Dubai Marina rooftop fine dining & fountain views']
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps & Interlaken',
    country: 'Switzerland',
    region: 'Europe',
    image: d6Img,
    tagline: 'Mirror alpine lakes, pristine glaciers, and snow-crested mountain peaks.',
    description: 'Glittering glaciers, pristine alpine meadows, and classic mountain rail routes. Switzerland invites you into dramatic panoramic peaks, world-class thermal wellness resorts, and tranquil lakeside evenings under the shadow of the Matterhorn.',
    highlights: ['Glacier Express Excellence Class', 'Matterhorn sunrise panoramic cable cars', 'Boutique alpine chalets in Zermatt', 'Historic Landwasser mountain viaduct rail journey']
  },
  {
    id: 'netherlands',
    name: 'Amsterdam & The Canals',
    country: 'Netherlands',
    region: 'Europe',
    image: destNetherlandsImg,
    tagline: 'Golden Age canal houses, historic bridges, and radiant spring tulip blossoms.',
    description: 'Woven together by concentric 17th-century canals and arched stone bridges, Amsterdam is an effortless blend of historic elegance and vibrant contemporary culture. Cruise tree-lined waterways on private classic salon boats, discover golden age Dutch masters at the Rijksmuseum, and cycle past iconic windmill landscapes and blooming tulip estates.',
    highlights: ['Private classic salon boat canal cruises', 'Keukenhof spring tulip estate VIP access', 'Jordaan historic townhouse & canal walks', 'Rijksmuseum & Van Gogh masterwork docent tours']
  },
  {
    id: 'paris',
    name: 'Paris & French Riviera',
    country: 'France',
    region: 'Europe',
    image: g3Img,
    tagline: 'Haute couture, world-class art collections, and romantic Seine riverbanks.',
    description: "The timeless capital of art, gastronomy, and romance. Sip café au lait under the shadow of the Eiffel Tower, tour private galleries through the Marais, and cruise down the Seine as the city of lights illuminates at twilight.",
    highlights: ['Private Louvre & Musée d\'Orsay docent tours', 'Seine sunset champagne dinner cruise', 'Saint-Germain boutique hotel stays', 'Private day excursions to Palace of Versailles']
  },
  {
    id: 'amalfi',
    name: 'Amalfi Coast & Positano',
    country: 'Italy',
    region: 'Europe',
    image: d2Img,
    tagline: 'Sun-drenched cliffs, pastel seaside villages, and timeless Dolce Vita charm.',
    description: 'Carved into dramatic Italian limestone cliffs, the Amalfi Coast is an intoxicating blend of fragrant lemon groves, sapphire Mediterranean waters, and timeless Dolce Vita charm. Wander vertical alleys in Positano, savor cliffside dining, and cruise private grottos around Capri.',
    highlights: ['Private Riva boat charters to Capri', 'Cliffside boutique stays in Positano', 'Exclusive lemon estate tastings', 'Ravello garden concerts']
  },
  {
    id: 'kyoto',
    name: 'Kyoto & Tokyo',
    country: 'Japan',
    region: 'Asia & Far East',
    image: d3Img,
    tagline: 'Quiet bamboo groves, ancient shrines, and zen aesthetics.',
    description: 'Kyoto is the cultural heart of Japan, where thousands of classical wooden temples nestle against misty cedar mountains. Stroll historic Gion stone lanes at dusk, experience private Zen meditation with resident monks, and indulge in exquisite seasonal kaiseki.',
    highlights: ['Ryokan with private thermal baths', 'Private tea ceremony masters', 'Gion dusk geisha quarters', 'Autumn maple forest tours']
  },
  {
    id: 'maldives',
    name: 'Maldives Atolls',
    country: 'Maldives',
    region: 'Island Sanctuaries',
    image: d5Img,
    tagline: 'Pristine turquoise lagoons and overwater sanctuaries.',
    description: 'A constellation of ringed coral atolls adrift in warm cerulean waters. The Maldives represents barefoot luxury in its purest expression — wake up to gentle waves below your wooden sundeck, swim with manta rays, and dine under canopy constellations.',
    highlights: ['Overwater sunset villas', 'Scenic seaplane flights', 'Private sandbank dining', 'Coral reef preservation dives']
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan & Agra',
    country: 'India',
    region: 'Indian Subcontinent',
    image: d4Img,
    tagline: 'Golden fortresses, sunrise marble wonders, and regal royal havelis.',
    description: 'Step into a world of kings and poets. Rajasthan weaves a majestic tapestry of carved sandstone citadels, lake palaces illuminated by thousands of candles, and silent starry nights amid the sweeping Thar desert dunes, complemented by the sunrise majesty of the Taj Mahal in Agra.',
    highlights: ['Heritage palace suites in Udaipur', 'Taj Mahal sunrise private viewing', 'Private Amber Fort evening', 'Vintage royal car transfers']
  }
];

// 2. Photographic Masonry Data (3 Columns)
const filterCategories = [
  'All',
  'Europe',
  'Americas',
  'Middle East',
  'Asia',
  'Nature'
];

const columnOne = [
  { id: 1, title: 'Manhattan Twilight Skyline', location: 'New York, USA', region: 'Americas', image: destUsaImg },
  { id: 2, title: 'Amsterdam Canal Ring', location: 'Amsterdam, Netherlands', region: 'Europe', image: destNetherlandsImg },
  { id: 3, title: 'Amalfi Coast Haven', location: 'Italy', region: 'Europe', image: t2Img },
  { id: 4, title: 'Arabian Desert Red Dunes', location: 'Dubai, UAE', region: 'Middle East', image: h13Img },
  { id: 5, title: 'Positano Coastal Vista', location: 'Italy', region: 'Europe', image: g7Img }
];

const columnTwo = [
  { id: 6, title: 'Matterhorn Alpine Majesty', location: 'Swiss Alps', region: 'Europe', image: d6Img },
  { id: 7, title: 'Burj Khalifa Sunset Skyline', location: 'Dubai, UAE', region: 'Middle East', image: g6Img },
  { id: 8, title: 'Autumn Pagoda Sanctuary', location: 'Kyoto, Japan', region: 'Asia', image: d3Img },
  { id: 9, title: 'Golden Gate Sunset Vista', location: 'California, USA', region: 'Americas', image: gallerySfUsaImg },
  { id: 10, title: 'Maldives Overwater Sanctuary', location: 'Maldives', region: 'Asia', image: d5Img }
];

const columnThree = [
  { id: 11, title: 'Eiffel Tower at Noon', location: 'Paris, France', region: 'Europe', image: g3Img },
  { id: 12, title: 'Historic Canals & Townhouses', location: 'Netherlands', region: 'Europe', image: galleryAmsterdamImg },
  { id: 13, title: 'Taj Mahal Sunrise Reflection', location: 'Agra, India', region: 'Asia', image: g4Img },
  { id: 14, title: 'Landwasser Mountain Viaduct', location: 'Switzerland', region: 'Europe', image: t1Img },
  { id: 15, title: 'Amber Citadel Palace', location: 'Rajasthan, India', region: 'Asia', image: t4Img }
];

const Gallery = () => {
  // Destinations state
  const [activeRegion, setActiveRegion] = useState('All Regions');
  const [searchQuery, setSearchQuery] = useState('');

  // Photo Gallery state
  const [activePhotoFilter, setActivePhotoFilter] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Filter Destinations
  const filteredDestinations = destinationList.filter(dest => {
    const matchesRegion = activeRegion === 'All Regions' || dest.region === activeRegion;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
                          dest.name.toLowerCase().includes(q) ||
                          dest.country.toLowerCase().includes(q) ||
                          dest.region.toLowerCase().includes(q) ||
                          dest.description.toLowerCase().includes(q) ||
                          (q === 'usa' && (dest.country.toLowerCase().includes('united states') || dest.name.toLowerCase().includes('new york'))) ||
                          (q === 'swiss' && dest.country.toLowerCase().includes('switzerland')) ||
                          (q === 'uae' && dest.country.toLowerCase().includes('united arab emirates')) ||
                          (q === 'holland' && dest.country.toLowerCase().includes('netherlands'));
    return matchesRegion && matchesSearch;
  });

  // Filter Photo Masonry
  const filterList = (list) => {
    if (activePhotoFilter === 'All') return list;
    if (activePhotoFilter === 'Nature') {
      return list.filter(i => ['Maldives', 'Swiss Alps', 'Switzerland', 'Dubai, UAE', 'Italy'].includes(i.location));
    }
    return list.filter(i => i.region === activePhotoFilter);
  };

  const col1Filtered = filterList(columnOne);
  const col2Filtered = filterList(columnTwo);
  const col3Filtered = filterList(columnThree);

  return (
    <div className="gallery-page">
      {/* 1. Hero */}
      <PageHero
        subtitle="VISUAL CHRONICLES & CURATED DESTINATIONS"
        title="A world worth seeing."
        tagline="From sun-drenched coastal bluffs to timeless mountain sanctuaries — explore our curated destinations and visual chronicles."
        bgImage={d1Img}
        minHeight="58vh"
        align="left"
      />

      {/* 2. Destination Showcases Section */}
      <section className="gallery-destinations-section">
        <div className="gallery-section-intro">
          <span className="gallery-section-eyebrow">CURATED DESTINATIONS</span>
          <h2 className="gallery-section-title">Where will you go next?</h2>
          <p className="gallery-section-desc">
            Handcrafted sanctuaries and timeless landscapes composed for authentic, unhurried discovery.
          </p>
        </div>

        {/* Search & Region Filters */}
        <div className="destinations-filter-container">
          <div className="dest-search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search destinations (e.g. USA, Dubai, Switzerland, Netherlands)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>

          <div className="region-pills">
            {regions.map((reg, idx) => (
              <button
                key={idx}
                className={`region-pill ${activeRegion === reg ? 'active' : ''}`}
                onClick={() => setActiveRegion(reg)}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Split Showcases */}
        <div className="destinations-list-container">
          {filteredDestinations.map((dest, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div 
                key={dest.id} 
                className={`dest-showcase-row ${isReversed ? 'row-reversed' : ''}`}
              >
                <div className="dest-showcase-img-wrap">
                  <img src={dest.image} alt={dest.name} className="dest-showcase-img" />
                  <div className="dest-showcase-badge">
                    <span>{dest.country}</span>
                  </div>
                </div>

                <div className="dest-showcase-content">
                  <span className="dest-region-tag">{dest.region}</span>
                  <h2 className="dest-title">{dest.name}</h2>
                  <p className="dest-tagline">{dest.tagline}</p>
                  <p className="dest-description">{dest.description}</p>

                  <div className="dest-highlights-list">
                    {dest.highlights.map((h, i) => (
                      <div key={i} className="dest-highlight-item">
                        <span className="bullet">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="dest-explore-btn">
                    Explore {dest.name} &rarr;
                  </Link>
                </div>
              </div>
            );
          })}

          {filteredDestinations.length === 0 && (
            <div className="no-destinations-found">
              <h3>No destinations match your search.</h3>
              <p>Try searching for a different country or clear your filters.</p>
              <button onClick={() => { setActiveRegion('All Regions'); setSearchQuery(''); }} className="reset-btn">
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Photographic Masonry Gallery Section */}
      <section className="gallery-masonry-section">
        <div className="gallery-section-intro">
          <span className="gallery-section-eyebrow">PHOTOGRAPHIC ARCHIVE</span>
          <h2 className="gallery-section-title">Moments from the journey.</h2>
          <p className="gallery-section-desc">
            A curated photographic collection of quiet dawns, dramatic horizons, and bespoke journeys around the globe.
          </p>
        </div>

        <div className="gallery-container">
          {/* Category Filter Bar */}
          <div className="gallery-filter-bar">
            {filterCategories.map((cat, idx) => (
              <button
                key={idx}
                className={`gallery-filter-btn ${activePhotoFilter === cat ? 'active' : ''}`}
                onClick={() => setActivePhotoFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 3-Column Masonry Grid */}
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

      {/* 4. Bottom Call To Action Banner */}
      <section className="gallery-cta-banner">
        <div className="gallery-cta-content">
          <span className="gallery-cta-eyebrow">YOUR JOURNEY AWAITS</span>
          <h2 className="gallery-cta-title">Ready to compose your bespoke itinerary?</h2>
          <p className="gallery-cta-desc">
            Connect with a Flybook travel specialist to curate private stays, exclusive routing, and unforgettable experiences.
          </p>
          <Link to="/contact" className="gallery-cta-btn">
            Plan Your Journey &rarr;
          </Link>
        </div>
      </section>

      {/* 5. Lightbox Modal */}
      {selectedPhoto && (
        <div className="gallery-lightbox-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Close photo preview">✕</button>
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
