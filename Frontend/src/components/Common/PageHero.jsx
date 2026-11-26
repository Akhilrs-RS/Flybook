import React from 'react';
import './PageHero.css';

const PageHero = ({ 
  title, 
  subtitle, 
  tagline, 
  bgImage, 
  minHeight = '65vh',
  align = 'center',
  noBottomFade = false,
  bgPosition = 'center',
  overlay
}) => {
  const gradient = overlay 
    ? overlay 
    : noBottomFade
      ? 'linear-gradient(180deg, rgba(8, 14, 22, 0.48) 0%, rgba(8, 14, 22, 0.18) 50%, rgba(8, 14, 22, 0) 100%)'
      : 'linear-gradient(180deg, rgba(8, 14, 22, 0.45) 0%, rgba(8, 14, 22, 0.65) 60%, rgba(11, 17, 24, 0.95) 100%)';

  return (
    <section 
      className={`page-hero-section page-hero-align-${align} ${noBottomFade ? 'no-bottom-fade' : ''}`} 
      style={{ 
        backgroundImage: `${gradient}, url(${bgImage})`,
        backgroundPosition: bgPosition,
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
