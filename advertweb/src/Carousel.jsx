import React, { useState, useEffect } from "react";
import "./Carousel.css";
import calcImage from "./assets/calc.jpg";
import vernierImage from "./assets/vernier calliper.jpg";
import multimeterImage from "./assets/multimeter.jpeg";
import rulerImage from "./assets/ruler.jpg";
import setImage from "./assets/set.webp";
import solderImage from "./assets/solder.jpg";

const images = [calcImage, vernierImage, multimeterImage, rulerImage, setImage, solderImage];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt="Product" />
    </div>
  );
};

export default Carousel;