import React, { useState } from 'react';
import PageHero from '../../components/Common/PageHero';
import heroContactImg from '../../assets/hero_contact.jpg';
import { MdOutlineLocationOn, MdOutlinePhone, MdOutlineEmail, MdOutlineAccessTime } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'Amalfi Coast & Italy',
    travelDate: '',
    travelers: '2',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* 1. Hero */}
      <PageHero
        subtitle="START A CONVERSATION"
        title="Let's plan your next journey."
        tagline="Tell us where your curiosity leads. Our bespoke travel architects will compose an itinerary tailored precisely to you."
        bgImage={heroContactImg}
        minHeight="60vh"
      />

      {/* 2. Main Two-Column Contact Section */}
      <section className="contact-main-section">
        <div className="contact-container">
          
          {/* Left Column: Direct Info */}
          <div className="contact-info-col">
            <span className="section-eyebrow">REACH OUT DIRECTLY</span>
            <h2 className="contact-info-heading">We'd love to hear from you.</h2>
            <p className="contact-info-intro">
              Whether you have a fully formed voyage in mind or simply a desire for somewhere untamed and beautiful, we begin with an unhurried consultation.
            </p>

            <div className="contact-channels-list">
              <div className="channel-item">
                <div className="channel-icon-wrap">
                  <MdOutlineLocationOn className="channel-icon" />
                </div>
                <div className="channel-text">
                  <span className="channel-label">FLAGSHIP CONCIERGE</span>
                  <p>Flybook Tours & Travels, Connaught Place, New Delhi, India</p>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-wrap">
                  <MdOutlinePhone className="channel-icon" />
                </div>
                <div className="channel-text">
                  <span className="channel-label">PHONE INQUIRIES</span>
                  <p>+91 98765 43210 / +91 11 2345 6789</p>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-wrap">
                  <MdOutlineEmail className="channel-icon" />
                </div>
                <div className="channel-text">
                  <span className="channel-label">EMAIL CONCIERGE</span>
                  <p>journeys@flybooktravels.com</p>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-wrap">
                  <MdOutlineAccessTime className="channel-icon" />
                </div>
                <div className="channel-text">
                  <span className="channel-label">OFFICE HOURS</span>
                  <p>Mon – Sat: 9:30 AM – 7:00 PM IST (Private weekend consultations by appointment)</p>
                </div>
              </div>
            </div>

            <div className="whatsapp-callout">
              <div className="whatsapp-icon-circle">
                <FaWhatsapp />
              </div>
              <div className="whatsapp-info">
                <h4>Instant WhatsApp Liaison</h4>
                <p>Chat directly with our senior travel planner</p>
              </div>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noreferrer" 
                className="whatsapp-btn"
              >
                Start Chat &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3 className="form-card-title">Compose Your Journey</h3>
              <p className="form-card-sub">Share your travel vision and our concierge team will respond within 24 hours.</p>

              {submitted ? (
                <div className="form-success-banner">
                  <div className="success-icon">✓</div>
                  <h4>Inquiry Received with Pleasure</h4>
                  <p>
                    Thank you, {formData.name || 'valued traveler'}. A dedicated Flybook travel architect is reviewing your vision and will reach out shortly.
                  </p>
                  <button className="reset-form-btn" onClick={() => setSubmitted(false)}>
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form className="inquiry-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>FULL NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Roy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. ananya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>CONTACT NUMBER *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>DESTINATION OF INTEREST</label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      >
                        <option value="Amalfi Coast & Italy">Amalfi Coast & Italy</option>
                        <option value="Kyoto & Historic Japan">Kyoto & Historic Japan</option>
                        <option value="Royal Rajasthan & Desert">Royal Rajasthan & Desert</option>
                        <option value="Private Atolls Maldives">Private Atolls Maldives</option>
                        <option value="Swiss Alps & Scenic Rail">Swiss Alps & Scenic Rail</option>
                        <option value="High Himalayas of Ladakh">High Himalayas of Ladakh</option>
                        <option value="Other / Bespoke Multi-Country">Other / Bespoke Multi-Country</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>ESTIMATED TRAVEL DATES</label>
                      <input
                        type="text"
                        placeholder="e.g. October 2026 / Spring"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>NUMBER OF TRAVELERS</label>
                      <select
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      >
                        <option value="1">Solo Traveler</option>
                        <option value="2">2 Adults (Couple)</option>
                        <option value="3-5">Family / Small Group (3–5)</option>
                        <option value="6+">Private Delegation (6+)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>SPECIAL REQUESTS OR TRIP VISION</label>
                    <textarea
                      rows="4"
                      placeholder="Share your interests (e.g. private wine tours, anniversary dinner, quiet luxury, hiking preference)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Submit Travel Inquiry &rarr;
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Location Card / Map Section */}
      <section className="contact-map-section">
        <div className="contact-map-container">
          <div className="map-card-wrapper">
            <div className="map-card-overlay-info">
              <span className="map-badge">DELHI FLAGSHIP</span>
              <h3>Flybook Private Atelier</h3>
              <p>Connaught Place, Inner Circle, New Delhi 110001</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="directions-link"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
