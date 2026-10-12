import React, { useState } from 'react';
import PageHero from '../../components/Common/PageHero';
import heroContactImg from '../../assets/hero_contact.jpg';
import { MdOutlineLocationOn, MdOutlinePhone, MdOutlineEmail, MdOutlineAccessTime } from 'react-icons/md';
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
            <span className="contact-eyebrow">REACH OUT DIRECTLY</span>
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
                  <p>Flybook Tours & Travels, Connaught Place, New Delhi 110001, India</p>
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
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3 className="form-card-title">Send a message</h3>
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
                        <option value="Other Bespoke Voyage">Other Bespoke Voyage</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>SPECIAL REQUESTS OR TRIP VISION</label>
                    <textarea
                      rows="4"
                      placeholder="Share your interests (e.g. private wine tours, anniversary dinner, quiet luxury)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Send Message &rarr;
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Location Banner Split (Matching Figma Contact Artboard) */}
      <section className="contact-location-banner-section">
        <div className="contact-location-banner-container">
          <div className="location-split-card">
            
            {/* Left Warm Stone Block */}
            <div className="location-stone-info">
              <span className="location-eyebrow">LOCATION</span>
              <h3 className="location-heading">Flybook at Bengaluru</h3>
              <p className="location-address">
                124 MG Road, Central Business District<br />
                Bengaluru, Karnataka 560001
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="location-directions-btn"
              >
                Get Directions &rarr;
              </a>
            </div>

            {/* Right Map Graphic with Pin */}
            <div className="location-map-graphic">
              <iframe
                title="Flybook Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985558907865!2d77.60742127599026!3d12.972792614856003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1681c2f0fcf7%3A0x6b86d9a244b7fcf7!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="location-iframe-map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="location-pin-callout">
                <div className="pin-dot"></div>
                <span>Flybook Flagship</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
