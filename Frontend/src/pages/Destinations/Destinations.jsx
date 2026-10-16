import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/Common/PageHero';
import d1Img from '../../assets/d1.png';
import d2Img from '../../assets/d2.jpg';
import d3Img from '../../assets/d3.jpg';
import d4Img from '../../assets/d4.jpg';
import d5Img from '../../assets/d5.jpg';
import d6Img from '../../assets/d6.jpg';
import './Destinations.css';

const regions = [
  'All Regions',
  'Europe',
  'Asia & Far East',
  'Indian Subcontinent',
  'Island Sanctuaries'
];

const destinationList = [
  {
    id: 'amalfi',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Europe',
    image: d2Img,
    tagline: 'Sun-drenched cliffs and pastel seaside dreams.',
    description: 'Carved into dramatic Italian limestone cliffs, the Amalfi Coast is an intoxicating blend of fragrant lemon groves, sapphire Mediterranean waters, and timeless Dolce Vita charm. Wander vertical alleys in Positano, savor cliffside dining, and cruise private grottos around Capri.',
    highlights: ['Private Riva boat charters', 'Cliffside boutique stays', 'Exclusive lemon estate tastings', 'Ravello garden concerts']
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia & Far East',
    image: d3Img,
    tagline: 'Quiet bamboo groves, ancient shrines, and zen aesthetics.',
    description: 'Kyoto is the cultural heart of Japan, where thousands of classical wooden temples nestle against misty cedar mountains. Stroll historic Gion stone lanes at dusk, experience private Zen meditation with resident monks, and indulge in exquisite seasonal kaiseki.',
    highlights: ['Ryokan with private thermal baths', 'Private tea ceremony masters', 'Gion dusk geisha quarters', 'Autumn maple forest tours']
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    country: 'India',
    region: 'Indian Subcontinent',
    image: d4Img,
    tagline: 'Golden fortresses, regal havelis, and desert sunsets.',
    description: 'Step into a world of kings and poets. Rajasthan weaves a majestic tapestry of carved sandstone citadels, lake palaces illuminated by thousands of candles, and silent starry nights amid the sweeping Thar desert dunes.',
    highlights: ['Heritage palace suites', 'Private Amber Fort evening', 'Vintage royal car transfers', 'Private desert luxury camps']
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Indian Ocean',
    region: 'Island Sanctuaries',
    image: d5Img,
    tagline: 'Pristine turquoise lagoons and overwater sanctuaries.',
    description: 'A constellation of ringed coral atolls adrift in warm cerulean waters. The Maldives represents barefoot luxury in its purest expression — wake up to gentle waves below your wooden sundeck, swim with manta rays, and dine under canopy constellations.',
    highlights: ['Overwater sunset villas', 'Scenic seaplane flights', 'Private sandbank dining', 'Coral reef preservation dives']
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Europe',
    image: d6Img,
    tagline: 'Mirror alpine lakes and snow-crested mountain peaks.',
    description: 'Glittering glaciers, pristine alpine meadows, and classic mountain rail routes. Switzerland invites you into dramatic panoramic peaks, world-class thermal wellness resorts, and tranquil lakeside evenings under the shadow of the Matterhorn.',
    highlights: ['Glacier Express Excellence Class', 'Matterhorn sunrise cable cars', 'Boutique alpine chalets', 'Historic mountain viaducts']
  }
];

const Destinations = () => {
  const [activeRegion, setActiveRegion] = useState('All Regions');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = destinationList.filter(dest => {
    const matchesRegion = activeRegion === 'All Regions' || dest.region === activeRegion;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="destinations-page">
      {/* 1. Hero */}
      <PageHero
        subtitle="ICONIC LANDSCAPES & HIDDEN RETREATS"
        title="Where will you go next?"
        tagline="From sun-drenched coastal bluffs to snow-crested sanctuaries, explore destinations curated for genuine discovery."
        bgImage={d1Img}
        minHeight="58vh"
        align="left"
      />

      {/* 2. Search & Region Filters */}
      <section className="destinations-filter-section">
        <div className="destinations-filter-container">
          <div className="dest-search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search destinations (e.g. Amalfi, Kyoto, Maldives)..."
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
      </section>

      {/* 3. Alternating Split Showcases */}
      <section className="destinations-list-section">
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
    </div>
  );
};

export default Destinations;
