import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand-space">
        <Link to="/" className="navbar-brand-link">
          <div className="navbar-logo-badge">
            <span>F</span>
          </div>
          <span className="navbar-brand-title">Flybook</span>
        </Link>
      </div>

      <div className="navbar-links-pill">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          Home
        </NavLink>
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
