import React from 'react';
import PropTypes from 'prop-types';
import './AboutUs.css';
import './CardCarousel.jsx';
import CardCarousel from './CardCarousel.jsx';

function AboutUs({ title, description }) {
  return (
    <div className="about-us__container">
      <h1>{title}</h1>
      <p>{description}</p>
      <CardCarousel/>
    </div>
  );
}

AboutUs.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

AboutUs.defaultProps = {
  title: 'About Us',
  description: `At BloomAway, we are passionate about flowers and committed to delivering only the freshest, most beautiful blooms. 
  Every flower in our shop is hand-picked with care, ensuring that only the best make it into our arrangements. 
  We carefully select each bloom for its vibrancy, fragrance, and longevity, working closely with trusted growers to bring you premium-quality flowers.

  To maintain their beauty, we use expert preservation techniques that keep our flowers fresh for longer. 
  From proper hydration to temperature-controlled storage, every step is designed to ensure that your bouquet arrives looking as stunning as the moment it was picked.

  Whether you are celebrating a special occasion or simply brightening someone's day, our flowers are crafted with love and handled with care—because every petal tells a story. 💐💖`,
};


export default AboutUs;