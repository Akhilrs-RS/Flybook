import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand-space"></div>
      <div className="navbar-links-pill">
        <a href="#about">About</a>
        <a href="#tours">Tours & Packages</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="navbar-btn">Plan Your Trip</button>
    </nav>
  );
};

export default Navbar;
