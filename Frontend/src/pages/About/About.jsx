import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/Common/PageHero';
import heroAboutImg from '../../assets/hero_about.jpg';
import pagodaImg from '../../assets/about_pagoda.jpg';
import './About.css';

const statsData = [
  { value: '12+', label: 'Years of Bespoke Journeys' },
  { value: '98%', label: 'Returning & Referred Travelers' },
  { value: '50+', label: 'Global Curated Destinations' },
  { value: '10k+', label: 'Unforgettable Stories Crafted' }
];

const valuesData = [
  {
    num: '01',
    title: 'Obsession with Detail',
    desc: 'From private jet connections and secret viewpoints to hand-selected boutique riads, nothing is left to chance.'
  },
  {
    num: '02',
    title: 'Authentic Local Insight',
    desc: 'Our private historians, local sommeliers, and native guides open doors and share stories that no guidebook can.'
  },
  {
    num: '03',
    title: '24/7 Human Warmth',
    desc: 'A dedicated personal concierge is on call before takeoff, during your expedition, and until your safe return.'
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

      {/* 2. Founding Belief Split */}
      <section className="about-story-section">
        <div className="about-story-container">
          <div className="about-story-header">
            <span className="section-eyebrow">OUR ORIGIN</span>
            <h2 className="section-title">Born from a belief in better travel.</h2>
          </div>

          <div className="about-story-grid">
            <div className="about-story-image-wrap">
              <img src={pagodaImg} alt="Kyoto Sanctuary" className="about-story-img" />
              <div className="about-story-badge">
                <span>EST. 2012</span>
              </div>
            </div>

            <div className="about-story-text-wrap">
              <blockquote className="about-story-quote">
                “To make the world feel closer, richer, and more human.”
              </blockquote>
              <p>
                Travel should never feel like a transaction or a hurried checklist. We founded Flybook on a singular conviction: that a genuinely great journey should gently pause time and leave you changed for the better.
              </p>
              <p>
                Whether you seek the tranquil stillness of a mountain sanctuary, the timeless warmth of a Mediterranean cliffside, or the private grandeur of Rajasthan’s royal havelis, every journey we compose is attuned to your personal cadence.
              </p>
              <div className="about-story-signature">
                <span className="founder-name">The Flybook Concierge Team</span>
                <span className="founder-role">Curators of Bespoke Expeditions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Numbers / Metrics */}
      <section className="about-stats-section">
        <div className="about-stats-container">
          <div className="stats-header">
            <h3 className="stats-header-title">One thoughtful trip at a time.</h3>
            <p className="stats-header-sub">Metrics that reflect our unwavering standard of craftsmanship.</p>
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

      {/* 4. Values */}
      <section className="about-values-section">
        <div className="about-values-container">
          <div className="values-header">
            <span className="section-eyebrow">OUR PROMISE</span>
            <h2 className="section-title">Care is our compass.</h2>
            <p className="values-subtitle">Three pillars that define every itinerary we craft.</p>
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

      {/* 5. Call To Action Banner */}
      <section className="about-cta-section">
        <div className="about-cta-container">
          <h2 className="about-cta-title">Where might we take you?</h2>
          <p className="about-cta-desc">
            Let us design your next chapter of wonder, comfort, and unhurried luxury.
          </p>
          <Link to="/contact" className="about-cta-btn">
            Plan Your Journey &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
