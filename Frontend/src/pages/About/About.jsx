import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/Common/PageHero';
import heroAboutImg from '../../assets/hero_about.jpg';
import pagodaImg from '../../assets/about_pagoda.jpg';
import ctaBgImg from '../../assets/dest_amalfi.jpg';
import './About.css';

const statsData = [
  { value: '20+', label: 'Years of Curation' },
  { value: '150+', label: 'Global Destinations' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15,000+', label: 'Travellers Guided' }
];

const valuesData = [
  {
    num: '01',
    title: 'Bespoke Design',
    desc: 'Every itinerary is built from a blank canvas, attuned entirely to your personal tempo, interests, and curiosity.'
  },
  {
    num: '02',
    title: 'Intimate Local Access',
    desc: 'Our private historians, local sommeliers, and native guides open doors and share stories that no guidebook can.'
  },
  {
    num: '03',
    title: 'Responsible Footprint',
    desc: 'We champion sustainable preservation, respecting the delicate cultures and wild environments that welcome our travelers.'
  }
];

const About = () => {
  return (
    <div className="about-page">
      {/* 1. Hero */}
      <PageHero
        subtitle="OUR PHILOSOPHY & STORY"
        title="About Flybook"
        tagline="We don't simply book destinations. We curate transformative human experiences."
        bgImage={heroAboutImg}
        minHeight="60vh"
      />

      {/* 2. Philosophy Intro */}
      <section className="about-story-section">
        <div className="about-story-container">
          <span className="section-eyebrow">OUR PHILOSOPHY</span>
          <div className="about-story-header-split">
            <h2 className="section-title">Born from a belief in better travel.</h2>
            <div className="about-story-paragraphs">
              <p>
                Travel should leave you larger than you left — more connected, more contemplative, and more alive to the beauty of our world.
              </p>
              <p>
                Founded on the conviction that a journey should gently pause time, Flybook is a collective of travel architects, historians, and native insiders dedicated to authentic, unhurried discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Split Mission Block (Matching Figma About Artboard) */}
      <section className="about-mission-section">
        <div className="about-mission-split">
          <div className="about-mission-img-wrap">
            <img src={pagodaImg} alt="Kyoto Sanctuary" className="about-mission-img" />
          </div>
          <div className="about-mission-text-block">
            <span className="mission-tag">MISSION</span>
            <h2 className="mission-statement">
              To make the world feel closer, richer, and more human.
            </h2>
            <p className="mission-body">
              Whether you seek the tranquil stillness of a mountain sanctuary, the timeless warmth of a Mediterranean cliffside, or the private grandeur of Rajasthan’s royal havelis, every journey we compose is attuned to your personal cadence.
            </p>
            <div className="vision-sub-block">
              <span className="vision-tag">VISION</span>
              <p>Setting the benchmark for conscientious, ultra-bespoke luxury exploration worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Numbers / Metrics */}
      <section className="about-stats-section">
        <div className="about-stats-container">
          <div className="stats-header">
            <span className="section-eyebrow">MEASURE OF IMPACT</span>
            <h3 className="stats-header-title">One thoughtful trip at a time.</h3>
          </div>
          <div className="stats-grid">
            {statsData.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Values */}
      <section className="about-values-section">
        <div className="about-values-container">
          <div className="values-header">
            <span className="section-eyebrow">GUIDING PRINCIPLES</span>
            <h2 className="section-title">Care is our compass.</h2>
          </div>

          <div className="values-grid">
            {valuesData.map((val, idx) => (
              <div key={idx} className="value-card">
                <span className="value-num">{val.num}</span>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action Pre-Footer Banner */}
      <section 
        className="about-cta-section"
        style={{ backgroundImage: `url(${ctaBgImg})` }}
      >
        <div className="about-cta-overlay">
          <div className="about-cta-container">
            <h2 className="about-cta-title">Where might we take you?</h2>
            <p className="about-cta-desc">
              Let us design your next chapter of wonder, comfort, and unhurried luxury.
            </p>
            <Link to="/contact" className="about-cta-btn">
              Start a Conversation &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
