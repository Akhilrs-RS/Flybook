import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';

  return (
    <nav className={`navbar ${isHome ? 'navbar-home' : ''} ${isContact ? 'navbar-contact' : ''}`}>
      <div className="navbar-brand-space">
        <Link to="/" className="navbar-brand-link">
          <span className="navbar-brand-title">FlyBook</span>
        </Link>
      </div>

      <div className="navbar-links-pill">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          About
        </NavLink>
        <NavLink to="/tours" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          Tours & Packages
        </NavLink>
        <NavLink to="/destinations" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          Destinations
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          Services
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          Gallery
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          Contact
        </NavLink>
      </div>

      <Link to="/contact" className="navbar-btn">
        Plan Your Trip
      </Link>
    </nav>
  );
};

export default Navbar;
