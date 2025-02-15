import React, { useEffect, useState } from 'react';
import './MyproductsCarousel.css';

const featuredProducts = [
  { id: 1, name: 'Pink Roses', image: 'https://i.pinimg.com/736x/5a/76/b6/5a76b64ab0ee78f5b57ff60d998ed792.jpg', price: 'Kshs. 4500' },
  { id: 2, name: 'Lilies', image: 'https://i.pinimg.com/474x/26/80/50/2680502c17e3ea2e4817ae23621b1447.jpg', price: 'Kshs. 4300' },
  { id: 3, name: 'Peonies', image: 'https://i.pinimg.com/474x/f4/b7/d4/f4b7d4344b48ae58d78017372ffcfc51.jpg', price: 'Kshs. 3600' },
  { id: 4, name: 'Sunflowers', image: 'https://i.pinimg.com/474x/cf/93/ce/cf93ced9c8bebb0baa247564698518a5.jpg', price: 'Kshs. 5100' },
  { id: 5, name: 'Carnations', image: 'https://i.pinimg.com/736x/cd/10/22/cd1022d3771c517746347774d4dbd8ea.jpg', price: 'Kshs. 3900' },
];

function CardCarousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]); // Updated dependency array

  return (
    <div className="carousel" aria-label="Featured Products Carousel" role="region">
      <button onClick={handlePrev} aria-label="Previous Product">
        &lt;
      </button>
      <div className="carousel-item">
        <img src={featuredProducts[index].image} alt={featuredProducts[index].name} />
        <h3>{featuredProducts[index].name}</h3>
        <p>{featuredProducts[index].price}</p>
      </div>
      <button onClick={handleNext} aria-label="Next Product">
        &gt;
      </button>
    </div>
  );
}

export default CardCarousel;