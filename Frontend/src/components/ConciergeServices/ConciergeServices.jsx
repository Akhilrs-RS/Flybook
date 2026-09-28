import React from 'react';
import './ConciergeServices.css';

const servicesData = [
  {
    title: 'Domestic Tours',
    description: "Curated journeys across India's rich cultural and natural tapestry."
  },
  {
    title: 'International Tours',
    description: 'Seamlessly planned global adventures across continents and cultures.'
  },
  {
    title: 'Honeymoon Packages',
    description: 'Romantic escapes tailored for unforgettable beginnings.'
  },
  {
    title: 'Pilgrimage Tours',
    description: 'Sacred circuits arranged with reverence and deep care.'
  },
  {
    title: 'Air Ticketing',
    description: 'Best-fare flight bookings with complete support.'
  },
  {
    title: 'Rail & Bus Ticketing',
    description: 'Hassle-free land travel bookings across routes.'
  },
  {
    title: 'Cab & Transport',
    description: 'Premium vehicles for comfortable, safe transit.'
  },
  {
    title: 'Travel Documentation',
    description: 'Visa, passport and permit assistance end-to-end.'
  }
];

const ConciergeServices = () => {
  return (
    <section className="concierge-services-section">
      <div className="concierge-container">
        {/* Header */}
        <div className="concierge-header">
          <span className="concierge-subtitle">The Concierge Engine</span>
          <h2 className="concierge-heading">Every service, engineered around you</h2>
        </div>

        {/* 8 Frosted Glass Service Cards Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <div className="service-card-dash"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConciergeServices;
