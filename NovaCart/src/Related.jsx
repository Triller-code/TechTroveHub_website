import React from "react";
import "./styles.css";


const RelatedProducts = () => {
    const products = [
      { name: "Smart Glasses", img: "smartglasses.png" },
      { name: "Solar charger", img: "solar.png" },
      { name: "Headphones", img: "headphones.png" },
      { name: "LED strip", img: "LED.png" },
      { name: "I - Phones", img: "phone.png" }
    ];
  
    return (
      <div className="products">
        <h2>Related Products</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product">
              <img src={`${product.img}`} alt={product.name} />
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default RelatedProducts;

