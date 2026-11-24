import React from 'react';
import { Link } from 'react-router-dom';
import FlybookLogo from '../Common/FlybookLogo';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineLocationOn, MdOutlinePhone, MdOutlineEmail, MdOutlineAccessTime } from 'react-icons/md';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Column 1: Brand */}
        <div className="footer-column brand-column">
          <div className="footer-logo-section">
            <Link to="/" title="Flybook Tours & Travels" style={{ textDecoration: 'none' }}>
              <FlybookLogo variant="transparent" height={58} />
            </Link>
          </div>
          <p className="brand-description">
            The premier curator of human experience. We design journeys that linger long after the flight home.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 2: Navigate */}
        <div className="footer-column">
          <h3 className="footer-heading">NAVIGATE</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/tours">Tours & Packages</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-column">
          <h3 className="footer-heading">SERVICES</h3>
          <ul className="footer-links">
            <li><Link to="/services">Domestic Tours</Link></li>
            <li><Link to="/services">International Tours</Link></li>
            <li><Link to="/services">Honeymoon Packages</Link></li>
            <li><Link to="/services">Pilgrimage Tours</Link></li>
            <li><Link to="/services">Air Ticketing</Link></li>
            <li><Link to="/services">Rail & Bus Ticketing</Link></li>
            <li><Link to="/services">Cab & Transport</Link></li>
            <li><Link to="/attestation">Document Attestation</Link></li>
            <li><Link to="/services">Travel Documentation</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column contact-column">
          <h3 className="footer-heading">CONTACT</h3>
          <ul className="footer-contact-info">
            <li>
              <MdOutlineLocationOn className="contact-icon" />
              <span>
                1st Floor, Kumaravel Nadar Building,<br />
                North Street Road, Opp. Appavonadar Textile,<br />
                Marthandam, Tamil Nadu
              </span>
            </li>
            <li>
              <MdOutlineAccessTime className="contact-icon" />
              <span>
                Monday—Saturday<br />
                9:00 AM—8:00 PM
              </span>
            </li>
            <li>
              <MdOutlinePhone className="contact-icon" />
              <div className="footer-phones-list">
                <a href="tel:04651272575" className="footer-contact-link">
                  04651-272575 <span className="phone-tag">(Office)</span>
                </a>
                <a href="https://wa.me/919865232346" target="_blank" rel="noopener noreferrer" className="footer-contact-link footer-wa-link">
                  <FaWhatsapp className="footer-wa-icon" /> +91 98652 32346 <span className="phone-tag">(Mobile / WhatsApp)</span>
                </a>
                <a href="tel:+918148021275" className="footer-contact-link">
                  +91 81480 21275 <span className="phone-tag">(Helpline)</span>
                </a>
              </div>
            </li>
            <li>
              <MdOutlineEmail className="contact-icon" />
              <a href="mailto:journeys@flybook.in" className="footer-contact-link footer-email-link">
                journeys@flybook.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Document Attestation in India | UAE | Saudi | Qatar | Dubai Banner */}
      <div className="footer-attestation-banner">
        <div className="footer-attestation-left">
          <span className="footer-attestation-tag">EMBASSY LEGALIZATION & APOSTILLE</span>
          <h4 className="footer-attestation-heading">
            Document Attestation in India | UAE | Saudi | Qatar | Dubai
          </h4>
          <p className="footer-attestation-desc">
            Authorized authentication for educational, personal, and commercial certificates with State HRD, MEA, Embassy, and MOFA coordination.
          </p>
        </div>
        <div className="footer-attestation-action">
          <Link to="/attestation" className="footer-attestation-btn">
            Inquire for Attestation &rarr;
          </Link>
        </div>
      </div>

      <div className="footer-bottom-wrapper">
        <div className="footer-divider">
          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <FiArrowUp />
          </button>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            © 2024 FLYBOOK TOURS & TRAVELS. ALL RIGHTS RESERVED.
          </div>
          <div className="footer-bottom-links">
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS & CONDITIONS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
