import React, { useState } from 'react';
import c1Img from '../../assets/c1.png';
import c2Img from '../../assets/c2.png';
import { enquiryService } from '../../services/enquiryService';
import './Contact.css';

const countryList = [
  { code: '+91', label: 'India +91' },
  { code: '+1', label: 'USA / Canada +1' },
  { code: '+44', label: 'UK +44' },
  { code: '+971', label: 'UAE +971' },
  { code: '+65', label: 'Singapore +65' },
  { code: '+61', label: 'Australia +61' },
  { code: '+49', label: 'Germany +49' },
  { code: '+33', label: 'France +33' },
  { code: '+966', label: 'Saudi Arabia +966' },
  { code: '+81', label: 'Japan +81' }
];

const serviceList = [
  'Flight Booking',
  'Hotels & Villas',
  'Tailor-made Tours',
  'Visa Assistance',
  'Honeymoon Packages',
  'Corporate Travel',
  'Domestic Tours',
  'International Tours',
  'Cab & Transport',
  'General Enquiry'
];

const Contact = () => {
  const [activeTab, setActiveTab] = useState('query');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    service: '',
    message: '',
    destination: '',
    travelDate: '',
    travelers: '',
    travelClass: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    enquiryService.addEnquiry({
      ...formData,
      destination: formData.destination || formData.service || 'General Inquiry'
    });
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      service: '',
      message: '',
      destination: '',
      travelDate: '',
      travelers: '',
      travelClass: ''
    });
  };

  return (
    <div className="contact-page">
      {/* 1. Hero Section (Full Cover Background Image) */}
      <section className="contact-hero-section">
        <div className="contact-hero-bg">
          <img 
            src={c1Img} 
            alt="London Big Ben Westminster" 
            className="contact-hero-bg-img" 
          />
          <div className="contact-hero-overlay"></div>
        </div>

        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <span className="contact-hero-eyebrow">BEGIN A CONVERSATION</span>
            <h1 className="contact-hero-title">
              Let's plan your<br />next journey.
            </h1>
            <p className="contact-hero-tagline">
              Tell us what you're dreaming of. Our travel designers will take<br />it from here.
            </p>
          </div>
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
                  1st Floor, Kumaravel Nadar Building<br />
                  North Street Road, Opp. Appavonadar Textile<br />
                  Marthandam, Tamil Nadu
                </p>
              </div>

              <div className="contact-detail-block">
                <span className="detail-label">HOURS</span>
                <p className="detail-value">
                  Monday—Saturday<br />
                  9:00 AM—8:00 PM
                </p>
              </div>

              <div className="contact-detail-block">
                <span className="detail-label">CALL & WHATSAPP</span>
                <a href="tel:04651272575" className="detail-value detail-link">
                  04651-272575 (Office)
                </a>
                <a href="tel:+919865232346" className="detail-value detail-link">
                  +91 98652 32346 (Mobile / WhatsApp)
                </a>
                <a href="tel:+918148021275" className="detail-value detail-link">
                  +91 81480 21275 (Helpline)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Have Query ? Reach Out Us! Form Card */}
          <div className="contact-form-col">
            <div className="travel-enquiry-card">

              {/* Form Category Switcher Tabs */}
              <div className="contact-form-tabs">
                <button
                  type="button"
                  className={`contact-form-tab ${activeTab === 'query' ? 'active' : ''}`}
                  onClick={() => setActiveTab('query')}
                >
                  Quick Query
                </button>
                <button
                  type="button"
                  className={`contact-form-tab ${activeTab === 'itinerary' ? 'active' : ''}`}
                  onClick={() => setActiveTab('itinerary')}
                >
                  Custom Tour Planner
                </button>
              </div>

              <div className="enquiry-card-header">
                <span className="enquiry-card-eyebrow">
                  {activeTab === 'query' ? 'GET IN TOUCH' : 'BESPOKE DESIGN'}
                </span>
                <h3 className="enquiry-card-title">
                  {activeTab === 'query' ? 'Have Query ? Reach Out Us!' : 'Plan Your Bespoke Tour'}
                </h3>
                <p className="enquiry-card-desc">
                  {activeTab === 'query' 
                    ? 'Leave your query below and our senior concierge will connect with you within 24 hours.'
                    : 'Share your dream destination and dates to receive a tailored itinerary from our master guides.'}
                </p>
              </div>

              {submitted ? (
                <div className="form-success-banner">
                  <div className="success-icon">✓</div>
                  <h4>Query Received with Pleasure</h4>
                  <p>
                    Thank you, {formData.name || 'valued guest'}. A dedicated Flybook travel designer will reach out to you within 24 hours.
                  </p>
                  <button className="reset-form-btn" onClick={resetForm}>
                    Send Another Query
                  </button>
                </div>
              ) : (
                <form className="travel-enquiry-form" onSubmit={handleSubmit}>
                  {/* Row 1: Name & Email */}
                  <div className="form-grid-row">
                    <div className="form-field-group">
                      <label className="field-label">NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
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
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="field-input"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone with Country Code Selector & Mobile Number */}
                  <div className="form-field-group full-width">
                    <label className="field-label">PHONE NUMBER</label>
                    <div className="phone-input-composite">
                      <div className="phone-country-select-wrapper">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="phone-country-select"
                          aria-label="Country Code"
                        >
                          {countryList.map((item) => (
                            <option key={item.code} value={item.code}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                        <span className="phone-select-arrow">▾</span>
                      </div>
                      <div className="phone-number-wrapper">
                        <span className="phone-prefix-badge">{formData.countryCode}</span>
                        <input
                          type="tel"
                          required
                          placeholder="Enter mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="field-input phone-number-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mode-Specific Fields */}
                  {activeTab === 'query' ? (
                    /* Query Mode: Select Service */
                    <div className="form-field-group full-width">
                      <label className="field-label">SELECT SERVICE</label>
                      <div className="select-wrapper">
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="field-select"
                        >
                          <option value="">Select Service</option>
                          {serviceList.map((svc) => (
                            <option key={svc} value={svc}>
                              {svc}
                            </option>
                          ))}
                        </select>
                        <span className="select-arrow">▾</span>
                      </div>
                    </div>
                  ) : (
                    /* Itinerary Mode: Destination, Dates, Travellers, Class */
                    <>
                      <div className="form-grid-row">
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
                      </div>

                      <div className="form-grid-row">
                        <div className="form-field-group">
                          <label className="field-label">NUMBER OF TRAVELLERS</label>
                          <input
                            type="text"
                            placeholder="e.g. 2 travellers"
                            value={formData.travelers}
                            onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                            className="field-input"
                          />
                        </div>
                        <div className="form-field-group">
                          <label className="field-label">PREFERRED CLASS</label>
                          <div className="select-wrapper">
                            <select
                              value={formData.travelClass}
                              onChange={(e) => setFormData({ ...formData, travelClass: e.target.value })}
                              className="field-select"
                            >
                              <option value="">Select travel class</option>
                              <option value="luxury">Luxury Suite / First Class</option>
                              <option value="business">Premium Business Class</option>
                              <option value="economy">Premium Economy</option>
                              <option value="bespoke">Bespoke Custom Expedition</option>
                            </select>
                            <span className="select-arrow">▾</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Message Field */}
                  <div className="form-field-group full-width">
                    <label className="field-label">MESSAGE</label>
                    <textarea
                      rows="3"
                      required={activeTab === 'query'}
                      placeholder="Write your query or message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="field-textarea"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="form-action-row">
                    <button type="submit" className="enquiry-submit-btn">
                      {activeTab === 'query' ? 'REACH OUT TO US →' : 'SEND REQUEST →'}
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
            <span className="studio-eyebrow">OUR MAIN OFFICE</span>
            <h2 className="studio-heading">
              In the heart of<br />Marthandam.
            </h2>
            <p className="studio-coords">Kumaravel Nadar Building, North Street Road</p>
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
