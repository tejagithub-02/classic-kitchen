import React from 'react';
import './About.css';

const About = () => {
  const sectionStyle = {
    // Removed background image here
    position: 'relative',
    zIndex: 1,
    color: '#fff',
    // You can optionally add a light background color, for example:
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // very subtle light overlay
  };

  const images = [
    '/services/about1.jpeg',
    '/services/about2.jpeg',
    '/services/about3.jpeg',
    '/services/about4.jpeg',
  ];

  return (
    <section className="about-catering" style={sectionStyle}>
      <div className="light-overlay" />

      <div className="about-container">
        <div className="about-header">
          <h3 className="section-title">~ Who We Are ~</h3>
          <h2 className="headline">Delivering Delight With Every Dish</h2>
        </div>

        <div className="about-main">
          <div className="about-image-gallery">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`About Gallery ${i + 1}`}
                style={{ animationDelay: `${i * 0.18}s` }}
                className="about-image-item"
              />
            ))}
          </div>
          <div className="about-text-features">
            <p className="about-description">
              We specialize in unforgettable food experiences, blending creativity and flavor
              to bring your event to life. Whether it's a cozy gathering or a grand celebration,
              our chefs and service team are committed to making it flawless.
            </p>
            <ul className="about-features">
              <li><span>🍽️</span> Fresh, Seasonal, and Gourmet Ingredients</li>
              <li><span>🧑‍🍳</span> Trained Culinary Professionals</li>
              <li><span>🎯</span> Fully Customized Menus for Every Event</li>
              <li><span>📦</span> Hassle-Free Delivery & On-site Setup</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
