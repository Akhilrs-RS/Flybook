import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MdOutlineMenu, MdOutlineClose, MdOutlineChat, MdOutlinePhone } from 'react-icons/md';
import FlybookLogo from '../Common/FlybookLogo';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`navbar ${isHome ? 'navbar-home' : ''} ${isContact ? 'navbar-contact' : ''}`}>
        <div className="navbar-brand-space">
          <Link to="/" className="navbar-brand-link" title="Flybook Tours & Travels" onClick={() => setMobileMenuOpen(false)}>
            <FlybookLogo variant="transparent" height={48} />
          </Link>
        </div>

        {/* Desktop Centered Links Pill */}
        <div className="navbar-links-pill">
          <NavLink to="/tours" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Tours & Packages
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Services
          </NavLink>
          <NavLink to="/certificate-attestation" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Attestation
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Gallery
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Contact
          </NavLink>
        </div>

        {/* Desktop CTA & Mobile Toggle Group */}
        <div className="navbar-actions-group">
          <Link to="/contact" className="navbar-btn desktop-only">
            Plan Your Trip
          </Link>

          {/* Mobile Hamburger / Close Button */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <MdOutlineClose /> : <MdOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Out Drawer & Backdrop Overlay */}
      <div 
        className={`navbar-mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="navbar-drawer-header">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <FlybookLogo variant="transparent" height={42} />
          </Link>
          <button
            type="button"
            className="navbar-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation drawer"
          >
            <MdOutlineClose />
          </button>
        </div>

        <div className="navbar-drawer-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'drawer-link active' : 'drawer-link'}>
            Home
          </NavLink>
          <NavLink to="/tours" className={({ isActive }) => isActive ? 'drawer-link active' : 'drawer-link'}>
            Tours & Packages
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'drawer-link active' : 'drawer-link'}>
            Services
          </NavLink>
          <NavLink to="/certificate-attestation" className={({ isActive }) => isActive ? 'drawer-link active' : 'drawer-link'}>
            Certificate Attestation
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'drawer-link active' : 'drawer-link'}>
            Gallery
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'drawer-link active' : 'drawer-link'}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'drawer-link active' : 'drawer-link'}>
            Contact & Support
          </NavLink>
        </div>

        <div className="navbar-drawer-footer">
          <Link to="/contact" className="navbar-drawer-cta-btn" onClick={() => setMobileMenuOpen(false)}>
            Plan Your Trip &rarr;
          </Link>

          <div className="navbar-drawer-quick-contact">
            <a
              href="https://wa.me/919876543210?text=Hello%20Flybook%20Travel%20Desk!%20I%20would%20like%20to%20plan%20a%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-contact-pill whatsapp"
            >
              <MdOutlineChat /> WhatsApp Desk
            </a>
            <a href="tel:+919876543210" className="drawer-contact-pill phone">
              <MdOutlinePhone /> +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
