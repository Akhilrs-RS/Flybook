import React from 'react';
import './PageHero.css';

const PageHero = ({ 
  title, 
  subtitle, 
  tagline, 
  bgImage, 
  minHeight = '65vh',
  align = 'center' 
}) => {
  return (
    <section 
      className={`page-hero-section page-hero-align-${align}`} 
      style={{ 
        backgroundImage: `linear-gradient(180deg, rgba(8, 14, 22, 0.45) 0%, rgba(8, 14, 22, 0.65) 60%, rgba(11, 17, 24, 0.95) 100%), url(${bgImage})`,
        minHeight 
      }}
    >
      <div className="page-hero-container">
        {subtitle && <span className="page-hero-eyebrow">{subtitle}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {tagline && <p className="page-hero-tagline">{tagline}</p>}
      </div>
    </section>
  );
};

export default PageHero;
