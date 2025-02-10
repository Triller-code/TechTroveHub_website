import React, { useState, useEffect } from "react";
import "./styles.css";

const images = [
  "smartglasses.png",
  "Smart-led.png",
  "notebook.png",
  "ring.png",
  "vr-headset.png",
  "smartwatch.png",
  "Smart-led.png" ,
  "ring.png" ,
  "vr-headset.png" ,
  "smd.png" ,
  "thermostat.png" ,
  "seb.png" ,
  "smartmirror.png" ,
  "smartcamera.png",
  "headphones.png",
  "LED.png",
  "phone.png" 
   
];

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
      <img src={`${images[currentIndex]}`} alt="Product" />
    </div>
  );
};

export default Carousel;
