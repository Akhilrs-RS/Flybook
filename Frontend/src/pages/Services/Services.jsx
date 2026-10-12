import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/Common/PageHero';
import heroServicesImg from '../../assets/hero_services.jpg';
import flightImg from '../../assets/hero_tours.jpg';
import villaImg from '../../assets/dest_maldives.jpg';
import bespokeImg from '../../assets/dest_amalfi.jpg';
import visaImg from '../../assets/about_pagoda.jpg';
import romanceImg from '../../assets/hero_about.jpg';
import corporateImg from '../../assets/dest_rajasthan.jpg';
import './Services.css';

const servicesList = [
  {
    num: '01',
    category: 'FLIGHTS & AVIATION',
    title: 'Flight Booking',
    desc: 'Bespoke routing for first, business, and private jet charters with seamless transfers, priority lounges, and baggage concierge.',
    image: flightImg
  },
  {
    num: '02',
    category: 'ACCOMMODATION',
    title: 'Hotels & Villas',
    desc: 'Hand-picked five-star sanctuaries, private island retreats, and historic palazzos with complimentary upgrades and welcome amenities.',
    image: villaImg
  },
  {
    num: '03',
    category: 'CURATED TOURS',
    title: 'Tailor-made Tours',
    desc: 'Private itineraries composed from scratch around your personal pace, secret landmark access, and licensed master guides.',
    image: bespokeImg
  },
  {
    num: '04',
    category: 'ADVISORY & PAPERWORK',
    title: 'Visa Assistance',
    desc: 'End-to-end documentation handling, embassy liaison, express filing, and comprehensive international travel protection.',
    image: visaImg
  },
  {
    num: '05',
    category: 'ROMANCE & RETREATS',
    title: 'Honeymoon Stays',
    desc: 'Enchanting romantic sanctuaries, private overwater dining, sunset boat charters, and curated couple wellness rituals.',
    image: romanceImg
  },
  {
    num: '06',
    category: 'EXECUTIVE EXPEDITIONS',
    title: 'Corporate Travel',
    desc: 'Precision planning for leadership summits, high-stakes retreats, delegation logistics, and consolidated enterprise billing.',
    image: corporateImg
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* 1. Hero */}
      <PageHero
        subtitle="END-TO-END TRAVEL CONCIERGE"
        title="Every detail, beautifully handled."
        tagline="Considered service at every step. From the first spark of inspiration until your safe return home."
        bgImage={heroServicesImg}
        minHeight="60vh"
      />

      {/* 2. Services Section */}
      <section className="services-list-section">
        <div className="services-list-container">
          
          {/* Header */}
          <div className="services-intro-row">
            <div>
              <span className="services-eyebrow">WHAT WE OFFER</span>
              <h2 className="services-main-heading">Considered service at every step.</h2>
            </div>
            <p className="services-intro-desc">
              From the quiet spark of an idea to the moment you step back across your own threshold, Flybook manages every layer of your voyage with unhurried care and absolute precision.
            </p>
          </div>

          {/* 6 Horizontal Rows */}
          <div className="services-rows-wrap">
            {servicesList.map((service, index) => (
              <div key={index} className="service-row-item">
                <div className="service-row-left">
                  <span className="service-num-tag">{service.num} / {service.category}</span>
                  <h3 className="service-row-title">{service.title}</h3>
                  <p className="service-row-desc">{service.desc}</p>
                  <Link to="/contact" className="service-row-btn">
                    Learn More &rarr;
                  </Link>
                </div>
                <div className="service-row-right">
                  <img src={service.image} alt={service.title} className="service-row-img" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section className="services-cta-banner">
        <div className="services-cta-content">
          <span className="services-cta-eyebrow">PEACE OF MIND GUARANTEE</span>
          <h2 className="services-cta-title">24/7 travel assistance, wherever you are.</h2>
          <p className="services-cta-desc">
            A direct line to your dedicated travel curator at every hour, anywhere across the globe. Whether flight changes or spontaneous requests, we are with you.
          </p>
          <div className="services-cta-actions">
            <Link to="/contact" className="services-cta-primary-btn">
              Speak to a Concierge
            </Link>
            <a href="tel:+919876543210" className="services-cta-secondary-btn">
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
