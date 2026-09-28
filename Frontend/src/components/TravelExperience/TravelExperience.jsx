import React from 'react';
import './TravelExperience.css';
import h10Img from '../../assets/h10.png';

const features = [
  {
    num: '01',
    title: 'Personalized Travel Planning',
    desc: 'Every itinerary is built around your pace, your interests and your budget — never a template.'
  },
  {
    num: '02',
    title: 'Trusted Assistance',
    desc: 'A dedicated travel lead that answers on the first ring, before and during your journey.'
  },
  {
    num: '03',
    title: 'Customized Packages',
    desc: 'Hand-picked stays, experiences and routes — adjusted until the journey feels like yours.'
  },
  {
    num: '04',
    title: 'Comfortable Transport',
    desc: 'Verified vehicles and drivers who know the road, so the journey is as good as the destination.'
  },
  {
    num: '05',
    title: 'Complete Travel Support',
    desc: 'Visas, tickets, insurance and on-trip help — every loose end tied before you leave home.'
  },
  {
    num: '06',
    title: 'Hassle-Free Enquiries',
    desc: 'One conversation, one plan, no spam, no pressure — just a journey shaped around you.'
  }
];

const TravelExperience = () => {
  return (
    <section className="travel-experience-section">
      <div className="travel-experience-container">
        {/* Left Column: Rajasthan Archway Image (h10) */}
        <div className="travel-image-wrap">
          <img src={h10Img} alt="Travel Architecture" className="travel-arch-img" />
        </div>

        {/* Right Column: Title and 6 Features List */}
        <div className="travel-content-wrap">
          <h2 className="travel-heading">Travel, The Way It Should Feel</h2>

          <div className="travel-features-list">
            {features.map((item, index) => (
              <div className="travel-feature-item" key={index}>
                <span className="feature-num">{item.num}</span>
                <div className="feature-text">
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelExperience;
