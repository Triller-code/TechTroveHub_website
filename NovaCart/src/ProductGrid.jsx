import React from "react";

import tech1 from "./assets/Techproduct1.jpg";
import tech4 from "./assets/Techproduct4.jpg";
import tech5 from "./assets/Techproduct5.jpg";
import tech6 from "./assets/Techproduct6.jpg";

const products = [
  { id: 1, image: tech1, name: "Laptop", price: "KSH 5,000" },
  { id: 2, image: tech4, name: "Desktop", price: "KSH 7,500" },
  { id: 3, image: tech5, name: "Smart Watch", price: "KSH 4,200" },
  { id: 4, image: tech6, name: "Television", price: "KSH 14,200" },
  { id: 5, image: tech1, name: "Laptop", price: "KSH 5,000" },
  { id: 6, image: tech4, name: "Desktop", price: "KSH 7,500" },
  { id: 7, image: tech5, name: "Smart Watch", price: "KSH 4,200" },
];

const ProductGrid = () => {
  return (
    <>
      <h2 className="product-title">Check Out Our Latest Releases</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="btn">Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
