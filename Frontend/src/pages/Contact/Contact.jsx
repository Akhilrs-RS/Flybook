import React, { useState } from 'react';
import c1Img from '../../assets/c1.png';
import c2Img from '../../assets/c2.png';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '',
    package: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* 1. Hero Section */}
      <section 
        className="contact-hero-section"
        style={{ backgroundImage: `url(${c1Img})` }}
      >
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-container">
          <span className="contact-hero-eyebrow">START A CONVERSATION</span>
          <h1 className="contact-hero-title">
            Let's plan your<br />next journey.
          </h1>
          <p className="contact-hero-tagline">
            Tell us what you're dreaming of. Our travel designers will take it from here.
          </p>
        </div>
      </section>

      {/* 2. Main Two-Column Contact Section */}
      <section className="contact-main-section">
        <div className="contact-container">
          
          {/* Left Column: Direct Info */}
          <div className="contact-info-col">
            <span className="contact-eyebrow">COME SAY HELLO</span>
            <h2 className="contact-info-heading">
              We'd love to hear<br />from you.
            </h2>

            <div className="contact-details-list">
              <div className="contact-detail-block">
                <span className="detail-label">EMAIL</span>
                <a href="mailto:journeys@flybook.in" className="detail-value detail-link">
                  journeys@flybook.in
                </a>
              </div>

              <div className="contact-detail-block">
                <span className="detail-label">VISIT</span>
                <p className="detail-value">
                  42 Residency Road<br />
                  Bengaluru,<br />
                  Karnataka 560025
                </p>
              </div>

              <div className="contact-detail-block">
                <span className="detail-label">HOURS</span>
                <p className="detail-value">
                  Monday—Saturday<br />
                  9:30 AM—7:00 PM
                </p>
              </div>

              <div className="contact-detail-block">
                <span className="detail-label">CALL</span>
                <a href="tel:+919876543210" className="detail-value detail-link">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Travel Enquiry Form Card */}
          <div className="contact-form-col">
            <div className="travel-enquiry-card">
              <h3 className="enquiry-card-title">TRAVEL ENQUIRY</h3>

              {submitted ? (
                <div className="form-success-banner">
                  <div className="success-icon">✓</div>
                  <h4>Enquiry Received with Pleasure</h4>
                  <p>
                    Thank you, {formData.name || 'valued traveler'}. A dedicated Flybook travel designer will contact you within 24 hours.
                  </p>
                  <button className="reset-form-btn" onClick={() => setSubmitted(false)}>
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form className="travel-enquiry-form" onSubmit={handleSubmit}>
                  {/* Row 1: Full Name & Email */}
                  <div className="form-grid-row">
                    <div className="form-field-group">
                      <label className="field-label">FULL NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="field-input"
                      />
                    </div>
                    <div className="form-field-group">
                      <label className="field-label">EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="field-input"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Travel Destination */}
                  <div className="form-grid-row">
                    <div className="form-field-group">
                      <label className="field-label">PHONE NUMBER</label>
                      <input
                        type="tel"
                        placeholder="+91 00 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="field-input"
                      />
                    </div>
                    <div className="form-field-group">
                      <label className="field-label">TRAVEL DESTINATION</label>
                      <input
                        type="text"
                        placeholder="Where do you plan to go?"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="field-input"
                      />
                    </div>
                  </div>

                  {/* Row 3: Travel Date & Number of Travelers */}
                  <div className="form-grid-row">
                    <div className="form-field-group">
                      <label className="field-label">TRAVEL DATE</label>
                      <input
                        type="text"
                        placeholder="dd/mm/yyyy"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className="field-input"
                      />
                    </div>
                    <div className="form-field-group">
                      <label className="field-label">NUMBER OF TRAVELERS</label>
                      <input
                        type="text"
                        placeholder="e.g. 2 travelers"
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                        className="field-input"
                      />
                    </div>
                  </div>

                  {/* Row 4: Preferred Package */}
                  <div className="form-field-group full-width">
                    <label className="field-label">PREFERRED PACKAGE</label>
                    <div className="select-wrapper">
                      <select
                        value={formData.package}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                        className="field-select"
                      >
                        <option value="">Select a curated tour</option>
                        <option value="amalfi">Amalfi Coast & Southern Italy</option>
                        <option value="kyoto">Kyoto & Traditional Japan</option>
                        <option value="maldives">Maldives Luxury Overwater Atolls</option>
                        <option value="swiss">Swiss Alps & Glacier Scenic Rail</option>
                        <option value="rajasthan">Royal Rajasthan Heritage & Palaces</option>
                        <option value="bespoke">Bespoke Custom Expedition</option>
                      </select>
                      <span className="select-arrow">▾</span>
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div className="form-field-group full-width">
                    <label className="field-label">MESSAGE</label>
                    <textarea
                      rows="3"
                      placeholder="Tell us a little about the journey you have in mind..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="field-textarea"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="form-action-row">
                    <button type="submit" className="enquiry-submit-btn">
                      SEND REQUEST &rarr;
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Studio Map Section */}
      <section className="contact-studio-section">
        <div className="contact-studio-container">
          <div className="studio-text-col">
            <span className="studio-eyebrow">OUR STUDIO</span>
            <h2 className="studio-heading">
              In the heart of<br />Bengaluru.
            </h2>
            <p className="studio-coords">12.9716° N, 77.5946° E</p>
          </div>

          <div className="studio-map-col">
            <img 
              src={c2Img} 
              alt="Flybook Bengaluru Studio Location Map" 
              className="studio-map-image" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
