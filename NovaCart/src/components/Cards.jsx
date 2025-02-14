import { useState, useEffect } from "react";

const Carousel = () => {
  const pages = [
    { id: 1, text: "Limited Offer: 50% Off on Electronics", color: "#ff4d4d" },
    { id: 2, text: "Buy 1 Get 1 Free on Fashion", color: "#ff9933" },
    { id: 3, text: "Exclusive Deals on Smartphones", color: "#33cc33" },
    { id: 4, text: "Flash Sale: Up to 70% Off", color: "#3399ff" },
    { id: 5, text: "New Arrivals at Discounted Prices!", color: "#cc33ff" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate function
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pages.length);
    }, 4000); // Change page every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="page"
        key={pages[currentIndex].id}
        style={{ backgroundColor: pages[currentIndex].color }}
      >
        <h2>{pages[currentIndex].text}</h2>
      </div>

      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>

      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .page {
          position: absolute;
          width: 80%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          border-radius: 10px;
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          font-size: 20px;
          border-radius: 5px;
          transition: 0.3s;
        }

        .prev { left: 10px; }
        .next { right: 10px; }

        button:hover {
          background: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
};

export default Carousel;