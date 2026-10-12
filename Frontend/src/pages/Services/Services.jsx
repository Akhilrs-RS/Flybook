import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/Common/PageHero';
import heroServicesImg from '../../assets/hero_services.jpg';
import flightImg from '../../assets/hero_tours.jpg';
import villaImg from '../../assets/h6.jpg';
import bespokeImg from '../../assets/h13.png';
import visaImg from '../../assets/about_pagoda.jpg';
import romanceImg from '../../assets/dest_amalfi.jpg';
import corporateImg from '../../assets/h10.png';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Flight Ticketing & Private Aviation',
    category: 'AIR TRAVEL',
    image: flightImg,
    description: 'We orchestrate seamless flight arrangements — from commercial first and business class routing with optimal layovers to private jet charters and VIP tarmac transfers.',
    perks: ['Global airline partner perks', 'Private jet charter booking', 'VIP airport concierge & lounge access', 'Seat selection & baggage handling']
  },
  {
    id: 2,
    title: 'Luxury Hotels, Villas & Riads',
    category: 'ACCOMMODATIONS',
    image: villaImg,
    description: 'Direct relationships with world-class boutique hotels, private island estates, and historic palaces ensuring complimentary upgrades, flexible check-ins, and bespoke welcomes.',
    perks: ['Hand-verified 5-star properties', 'Private villa staff & chefs', 'Room upgrades upon arrival', 'Daily complimentary breakfast']
  },
  {
    id: 3,
    title: 'Tailor-Made Bespoke Itineraries',
    category: 'CURATED TOURS',
    image: bespokeImg,
    description: 'No two journeys should ever be identical. We map your voyage day by day around what moves you — whether that is private museum openings, culinary masterclasses, or rugged trails.',
    perks: ['100% personalized travel pace', 'Private licensed historian guides', 'Secret access to landmarks', 'Unhurried flexible timing']
  },
  {
    id: 4,
    title: 'Visa & Documentation Assistance',
    category: 'PAPERWORK & ADVISORY',
    image: visaImg,
    description: 'Navigate global travel entry requirements effortlessly. Our dedicated visa liaison manages document reviews, embassy appointments, insurance policies, and express processing.',
    perks: ['End-to-end visa filing', 'Fast-track embassy liaisons', 'Comprehensive travel insurance', 'Real-time entry regulation alerts']
  },
  {
    id: 5,
    title: 'Honeymoon & Romantic Getaways',
    category: 'CELEBRATIONS',
    image: romanceImg,
    description: 'Celebrate your union in destinations designed for romance. Overwater bungalows, private cliffside sunsets, couple spa rituals, and candlelit dinners under canopy constellations.',
    perks: ['Private sunset sailing charters', 'Special honeymoon amenities', 'Intimate candlelit dining', 'Private secluded beach days']
  },
  {
    id: 6,
    title: 'Corporate Retreats & Delegations',
    category: 'EXECUTIVE EXPEDITIONS',
    image: corporateImg,
    description: 'Flawless execution for leadership offsites, board summits, client entertainment, and global conferences. We manage high-stakes group logistics with discretion and military precision.',
    perks: ['Dedicated group transport & jets', 'Exclusive venue buyouts', 'Team-building masterclasses', 'Consolidated billing & invoice reporting']
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* 1. Hero */}
      <PageHero
        subtitle="END-TO-END TRAVEL CONCIERGE"
        title="Every detail, beautifully handled."
        tagline="Considered service at every step. From the moment you imagine your departure until your safe arrival back home."
        bgImage={heroServicesImg}
        minHeight="62vh"
      />

      {/* 2. Services Grid */}
      <section className="services-grid-section">
        <div className="services-grid-container">
          <div className="services-intro">
            <span className="section-eyebrow">WHAT WE DELIVER</span>
            <h2 className="services-heading">Precision engineering behind every moment.</h2>
            <p className="services-sub">
              Experience the peace of mind that comes from knowing every flight, transfer, stay, and reservation has been thoughtfully curated by seasoned specialists.
            </p>
          </div>

          <div className="services-cards-grid">
            {servicesData.map(service => (
              <div key={service.id} className="service-feature-card">
                <div className="service-img-wrap">
                  <img src={service.image} alt={service.title} className="service-img" />
                  <span className="service-category-badge">{service.category}</span>
                </div>

                <div className="service-card-body">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>

                  <div className="service-perks-list">
                    {service.perks.map((perk, i) => (
                      <div key={i} className="service-perk-item">
                        <span className="perk-check">✦</span>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="service-cta-link">
                    Inquire About Service &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 24/7 Assistance Callout Card */}
      <section className="services-support-section">
        <div className="services-support-container">
          <div className="support-card-dark-green">
            <div className="support-card-content">
              <span className="support-eyebrow">PEACE OF MIND GUARANTEE</span>
              <h2 className="support-title">24/7 travel assistance, wherever you are.</h2>
              <p className="support-desc">
                Flight delayed? Spontaneous dinner change? Our dedicated concierge support is at your fingertips 24 hours a day, 7 days a week — via WhatsApp, phone, or direct liaison.
              </p>
              <div className="support-actions">
                <Link to="/contact" className="support-btn-primary">
                  Speak to a Concierge
                </Link>
                <a href="tel:+919876543210" className="support-btn-secondary">
                  Call: +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
