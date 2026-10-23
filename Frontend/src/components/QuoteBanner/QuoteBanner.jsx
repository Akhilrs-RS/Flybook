import React, { useState, useEffect } from 'react';
import './QuoteBanner.css';
import bghImg from '../../assets/bgh.png';
import bImg from '../../assets/b.jpg';
import dImg from '../../assets/d.png';
import cImg from '../../assets/c.png';

const SLIDE_DURATION = 5000; // 5 seconds per story reel

const SLIDES = [
  {
    id: 1,
    image: bghImg,
    alt: 'Collect Moments, Not Just Miles',
    subtitle: 'A TRAVEL PHILOSOPHY',
    titleWhite: '"Collect Moments,',
    titleGold: ' Not Just Miles."',
    desc: "The world is not a checklist. It's a living gallery of sights, culture and connection — waiting for you to carve your own trail."
  },
  {
    id: 2,
    image: bImg,
    alt: 'Make Every Journey Memorable',
    subtitle: 'A TRAVEL PHILOSOPHY',
    titleWhite: 'Make Every Journey',
    titleGold: ' Memorable',
    desc: "The world is not a checklist. It's a living gallery of sights, culture and connection — waiting for you to carve your own trail."
  },
  {
    id: 3,
    image: dImg,
    alt: 'Unforgettable Journeys, Beautifully Planned',
    subtitle: 'A TRAVEL PHILOSOPHY',
    titleWhite: 'Unforgettable Journeys,',
    titleGold: ' Beautifully Planned',
    desc: "The world is not a checklist. It's a living gallery of sights, culture and connection — waiting for you to carve your own trail."
  },
  {
    id: 4,
    image: cImg,
    alt: 'Your Next Escape Awaits',
    subtitle: 'A TRAVEL PHILOSOPHY',
    titleWhite: 'Your Next Escape',
    titleGold: ' Awaits',
    desc: "The world is not a checklist. It's a living gallery of sights, culture and connection — waiting for you to carve your own trail."
  }
];

const QuoteBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (prevIndex !== null) {
      const clearPrev = setTimeout(() => {
        setPrevIndex(null);
      }, 2000); // clears outgoing slide after fade completes
      return () => clearTimeout(clearPrev);
    }
  }, [prevIndex, currentIndex]);

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section 
      className="quote-banner-section"
      aria-roledescription="carousel"
      aria-label="Travel Philosophy Stories"
    >
      {SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        const isPrev = index === prevIndex;
        let slideClass = 'quote-slide';
        if (isActive) slideClass += ' active';
        else if (isPrev) slideClass += ' prev';

        return (
          <div 
            key={slide.id} 
            className={slideClass}
            aria-hidden={!isActive}
          >
            <div className="quote-bg-wrap">
              <img 
                src={slide.image} 
                alt={slide.alt} 
                className="quote-bg-img" 
                loading="eager"
              />
              <div className="quote-overlay"></div>
            </div>

            <div className="quote-content-container">
              <span className="quote-subtitle">{slide.subtitle}</span>
              <h2 className="quote-title">
                <span className="quote-white">{slide.titleWhite}</span>
                <span className="quote-gold">{slide.titleGold}</span>
              </h2>
              <p className="quote-desc">{slide.desc}</p>
            </div>
          </div>
        );
      })}

      {/* Prev / Next Chevrons on Hover */}
      <button 
        type="button" 
        className="quote-nav-arrow prev" 
        onClick={goToPrev} 
        aria-label="Previous Slide"
      >
        &#8249;
      </button>
      <button 
        type="button" 
        className="quote-nav-arrow next" 
        onClick={goToNext} 
        aria-label="Next Slide"
      >
        &#8250;
      </button>

      {/* Sequential Story Reel Progress Bars */}
      <div className="quote-story-progress-bar" role="tablist" aria-label="Story Progress">
        {SLIDES.map((slide, index) => {
          let stateClass = 'upcoming';
          if (index < currentIndex) stateClass = 'completed';
          if (index === currentIndex) stateClass = 'active';

          return (
            <button
              key={slide.id}
              type="button"
              className={`story-segment ${stateClass}`}
              onClick={() => goToSlide(index)}
              aria-label={`Jump to story ${index + 1}: ${slide.alt}`}
              role="tab"
              aria-selected={index === currentIndex}
            >
              <div 
                className="story-fill" 
                key={`${index}-${currentIndex === index}`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuoteBanner;
