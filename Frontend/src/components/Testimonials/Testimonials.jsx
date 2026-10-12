import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">Testimonials</h2>
        
        <div className="testimonial-content">
          <p className="testimonial-tagline">“A Journey Worth Remembering”</p>
          <blockquote className="testimonial-quote">
            “Everything was perfectly planned, from the stays to the experiences. We could simply relax and enjoy the journey.”
          </blockquote>
          <p className="testimonial-author">— Ananya R., Mumbai</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
