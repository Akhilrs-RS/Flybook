import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/Common/PageHero';
import AttestationGuideModal from '../../components/AttestationGuide/AttestationGuideModal';
import s1Img from '../../assets/s1.jpg';
import t1Img from '../../assets/t1.jpg';
import t5Img from '../../assets/t5.jpg';
import t2Img from '../../assets/t2.jpg';
import a1Img from '../../assets/a1.jpg';
import t4Img from '../../assets/t4.jpg';
import d5Img from '../../assets/d5.jpg';
import './Services.css';

const servicesList = [
  {
    num: '01',
    category: 'FLIGHTS & TICKETING',
    title: 'Flight Tickets & Aviation',
    desc: 'Best-fare domestic and international flight ticketing, business routing, seat allocation, and priority baggage concierge.',
    image: t1Img,
    link: '/attestation'
  },
  {
    num: '02',
    category: 'ACCOMMODATION',
    title: 'Hotels & Villas',
    desc: 'Hand-picked five-star sanctuaries, private island retreats, and historic palazzos with complimentary upgrades and welcome amenities.',
    image: t5Img,
    link: '/contact'
  },
  {
    num: '03',
    category: 'CURATED TOURS',
    title: 'Tailor-made Tours',
    desc: 'Private itineraries composed from scratch around your personal pace, secret landmark access, and licensed master guides.',
    image: t2Img,
    link: '/contact'
  },
  {
    num: '04',
    category: 'ADVISORY & PAPERWORK',
    title: 'Visa & Passport Assistance',
    desc: 'Specialized visit visa processing for UAE, Bahrain, Saudi Arabia, Australia, and 50+ countries, with end-to-end passport issuance and renewal assistance.',
    image: d5Img,
    link: '/attestation'
  },
  {
    num: '05',
    category: 'ROMANCE & RETREATS',
    title: 'Honeymoons',
    desc: 'Enchanting romantic sanctuaries, private overwater dining, sunset boat charters, and curated couple wellness rituals.',
    image: a1Img,
    link: '/contact'
  },
  {
    num: '06',
    category: 'EXECUTIVE EXPEDITIONS',
    title: 'Corporate Travel',
    desc: 'Precision planning for leadership summits, high-stakes retreats, delegation logistics, and consolidated enterprise billing.',
    image: t4Img,
    link: '/contact'
  }
];

const focusAreas = [
  {
    icon: '✈️',
    tag: 'AIR TICKETING',
    title: 'Flight Tickets',
    desc: 'Domestic & international flight reservations with instant PNR, best fare discovery, and rescheduling support.'
  },
  {
    icon: '🚆',
    tag: 'RAIL RESERVATION',
    title: 'Train Tickets',
    desc: 'Hassle-free train ticket bookings, Tatkal reservations, confirmed berth assistance, and scenic rail journeys.'
  },
  {
    icon: '🛂',
    tag: 'DOCUMENTATION',
    title: 'Passport Assistance',
    desc: 'End-to-end guidance for fresh passport applications, renewals, Tatkal appointments, and document verification.'
  },
  {
    icon: '🌐',
    tag: 'VISA SPECIALISTS',
    title: 'Visit Visa Services',
    desc: 'Express visit and tourist visa processing with guaranteed documentation compliance and embassy coordination.',
    countries: [
      { name: 'UAE', flag: '🇦🇪' },
      { name: 'Bahrain', flag: '🇧🇭' },
      { name: 'Saudi Arabia', flag: '🇸🇦' },
      { name: 'Australia', flag: '🇦🇺' },
      { name: '+ Worldwide', flag: '🌍' }
    ]
  }
];

const Services = () => {
  const [isAttestationOpen, setIsAttestationOpen] = useState(false);

  return (
    <div className="services-page">
      {/* 1. Hero */}
      <PageHero
        subtitle="END-TO-END TRAVEL CONCIERGE"
        title="Every detail beautifully handled."
        tagline="Considered service at every step. From the first spark of inspiration until your safe return home."
        bgImage={s1Img}
        minHeight="58vh"
        align="left"
      />

      {/* 2. Main Focus & Specialization Banner */}
      <section className="services-focus-section">
        <div className="services-focus-container">
          <div className="services-focus-header">
            <span className="services-focus-badge">✦ CORE SPECIALIZATION & FOCUS</span>
            <h2 className="services-focus-title">
              Main focus: Flight Tickets, Train Tickets, Passport Assistance, Visit Visa for UAE, BAHRAIN, SAUDI ARABIA, AUSTRALIA & beyond.
            </h2>
            <p className="services-focus-subtitle">
              Reliable, expedited ticketing and embassy paperwork solutions handled with precision, licensed liaison, and end-to-end client peace of mind.
            </p>
          </div>

          <div className="services-focus-grid">
            {focusAreas.map((item, idx) => (
              <div key={idx} className="services-focus-card">
                <div className="focus-card-top">
                  <span className="focus-card-icon">{item.icon}</span>
                  <span className="focus-card-tag">{item.tag}</span>
                </div>
                <h3 className="focus-card-title">{item.title}</h3>
                <p className="focus-card-desc">{item.desc}</p>
                {item.countries && (
                  <div className="focus-country-pills">
                    {item.countries.map((c, i) => (
                      <span key={i} className="focus-country-pill">
                        <span className="country-flag">{c.flag}</span>
                        <span className="country-name">{c.name}</span>
                      </span>
                    ))}
                  </div>
                )}
                {item.tag === 'VISA SPECIALISTS' || item.tag === 'DOCUMENTATION' || item.tag === 'AIR TICKETING' ? (
                  <Link to="/attestation" className="focus-card-link">
                    Learn More Guide &rarr;
                  </Link>
                ) : (
                  <Link to="/contact" className="focus-card-link">
                    Inquire Now &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
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
                  <Link to={service.link || '/contact'} className="service-row-btn">
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

      {/* 4. Interactive Attestation & Legalization Guide Modal */}
      <AttestationGuideModal 
        isOpen={isAttestationOpen} 
        onClose={() => setIsAttestationOpen(false)} 
      />
    </div>
  );
};

export default Services;
