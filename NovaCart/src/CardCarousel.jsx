import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background1 from './assets/Techproduct1.jpg';
import background2 from './assets/techproduct4.jpg';
import background3 from './assets/Techproduct5.jpg';
import background4 from './assets/Techproduct6.jpg';
import background5 from './assets/techproduct7.jpg';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        borderRadius: "50%",
        zIndex: 1, 
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        zIndex: 1, 
      }}
      onClick={onClick}
    />
  );
};

const CardCarousel = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 1000, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 5000,
    pauseOnHover: false,  
    pauseOnFocus: false,   
  };
  

  const cards = [
    {
      title: "Featured Products",
      description: "See What's New.",
      background: background1, 
    },
    {
      title: "Favourites",
      description: "What Our Customers Love.",
      background: background2,
    },
    {
      title: "Offers",
      description: "Check Out These Great Deals.",
      background: background3,
    },
    {
      title: "Discover",
      description: "Have you seen these new products?",
      background: background4,
    },
    {
      title: "Picked For You",
      description: "Based on your recent activity.",
      background: background5,
    },
  ];

  return (
    <div style={{ width: '100vw', height: '460px', overflow: 'hidden' }}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              width: '100vw',
              height: '600px',
              backgroundImage: `url(${card.background})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white', 
            }}
          >
            <div style={{ textAlign: 'center', backgroundColor: 'rgba(84, 95, 120, 0.5)',padding: '30px', borderRadius: '1px' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{card.title}</h3>
              <img src={card.background} style={{ height: '335px', width: '1330px' }} alt={card.title} />
              <p style={{ fontSize: '1.5rem' }}>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;








