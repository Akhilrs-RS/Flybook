import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineLocationOn, MdOutlinePhone, MdOutlineEmail } from 'react-icons/md';
import { IoPlayCircleOutline } from 'react-icons/io5';
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
            <IoPlayCircleOutline className="footer-logo-icon" />
            <div className="footer-logo-text">
              <h2>Flybook</h2>
              <p>TOURS & TRAVELS</p>
            </div>
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
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Tours & Packages</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-column">
          <h3 className="footer-heading">SERVICES</h3>
          <ul className="footer-links">
            <li><a href="#">Domestic Tours</a></li>
            <li><a href="#">International Tours</a></li>
            <li><a href="#">Honeymoon Packages</a></li>
            <li><a href="#">Pilgrimage Tours</a></li>
            <li><a href="#">Air Ticketing</a></li>
            <li><a href="#">Rail & Bus Ticketing</a></li>
            <li><a href="#">Cab & Transport</a></li>
            <li><a href="#">Travel Documentation</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column contact-column">
          <h3 className="footer-heading">CONTACT</h3>
          <ul className="footer-contact-info">
            <li>
              <MdOutlineLocationOn className="contact-icon" />
              <span>Flybook Tours & Travels, Connaught<br />Place, New Delhi, India</span>
            </li>
            <li>
              <MdOutlinePhone className="contact-icon" />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <MdOutlineEmail className="contact-icon" />
              <span>journeys@flybooktravels.com</span>
            </li>
          </ul>
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
