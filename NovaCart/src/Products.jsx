import React from "react";
import "./styles.css";

const Products = () => {
  const products = [
    { name: "Smart LED Light", img: "Smart-led.png" },
    { name: "Smart Notebook", img: "notebook.png" },
    { name: "Wearable Ring", img: "ring.png" },
    { name: "VR Headset", img: "vr-headset.png" },
    { name: "SmartWatch", img: "smartwatch.png" },
    { name: "Smart Door Lock", img: "smd.png" },
    { name: "Smart Thermostat", img: "thermostat.png" },
    { name: "Smart Ear Buds", img: "seb.png" },
    { name: "Smart Mirror", img: "smartmirror.png" },
    { name: "Smart Camera", img: "smartcamera.png" }
   

  ];

  return (
    <div className="products">
      <h2>Our Products</h2>
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

export default Products;
