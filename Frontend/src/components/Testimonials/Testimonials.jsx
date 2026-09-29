import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    tagline: '"A vacation that felt like returning"',
    quote: '"Everything was perfectly planned, from the stays to the experiences. We could simply relax and enjoy the journey."',
    author: '— Ananya R., Mumbai'
  },
  {
    id: 2,
    tagline: '"Unmatched precision and warmth"',
    quote: '"From our private villa in the Maldives to our desert safari in Dubai, every transfer was seamless. Flybook is in a league of its own."',
    author: '— Siddharth & Natasha K., Delhi'
  },
  {
    id: 3,
    tagline: '"A truly bespoke expedition"',
    quote: '"Our journey through Spiti Valley felt deeply personal and completely unhurried. The curated stays and local guides were world-class."',
    author: '— Vikramaditya M., Bengaluru'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonialsData[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">Testimonials</h2>
        
        <div className="testimonial-content">
          <p className="testimonial-tagline">{current.tagline}</p>
          <blockquote className="testimonial-quote">
            {current.quote}
          </blockquote>
          <p className="testimonial-author">{current.author}</p>
        </div>

        {/* Carousel indicators */}
        <div className="testimonials-indicators">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
