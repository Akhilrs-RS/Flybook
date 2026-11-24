import React from 'react';
import logoImg from '../../assets/flybook_logo_transparent.png';
import logoCardImg from '../../assets/flybook_logo_card.png';
import './FlybookLogo.css';

const FlybookLogo = ({ variant = 'transparent', height = 54, showSubtitle = true, className = '' }) => {
  return (
    <div className={`flybook-brand-logo ${variant} ${className}`} style={{ height: `${height}px` }}>
      {variant === 'card' ? (
        <img 
          src={logoCardImg} 
          alt="Flybook Tours & Travels" 
          className="flybook-logo-image card-badge"
          style={{ height: `${height}px` }}
        />
      ) : (
        <img 
          src={logoImg} 
          alt="Flybook Tours & Travels" 
          className="flybook-logo-image transparent-brand-logo"
          style={{ height: `${height}px` }}
        />
      )}
    </div>
  );
};

export default FlybookLogo;
