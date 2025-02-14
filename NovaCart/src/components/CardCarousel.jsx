import React, { useState } from "react"
import picture1 from '../assets/product1.jpg'
import picture2 from '../assets/product2.jpg'
import picture3 from '../assets/product3.jpg'
import picture4 from '../assets/product4.jpg'
import picture5 from '../assets/product5.jpg'
import picture6 from '../assets/product6.jpg'
import picture7 from '../assets/product7.jpg'
import picture8 from '../assets/product8.jpg'
import picture9 from '../assets/product9.jpg'

const ProductGrid = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Camon Camera",
      imagePath: picture1, 
      description: "High quality lens with a magnification of x1000",
      price: 25000.99,
      onOffer: true, 
    },
    {
      id: 2,
      name: "Microphones",
      imagePath: picture2,
      description: "Communicate with clarity, Nova quality mics.",
      price: 4000.50,
      onOffer: false,
    },
    {
      id: 3,
      name: "App products",
      imagePath: picture3,
      description: "Great  phones , laptops (macbooks).There in no communication without an iphone",
      price: 19000.99,
      onOffer: true,
    },
    {
      id: 4,
      name: "Liquor",
      imagePath: picture4, 
      description: "Find the best of all times ,only here at NovaCart.",
      price: 5500.00,
      onOffer: false,
    },
    {
      id: 5,
      name: "Skates",
      imagePath: picture5, 
      description: "Enjoy your ride with quality rubber ,undestractable shoes.",
      price: 3000.99,
      onOffer: true,
    },
    {
      id: 6,
      name: "Official Shoes",
      imagePath: picture6, 
      description: "Men's high quality leather shoes. Get youre today",
      price: 2200.49,
      onOffer: false,
    },
    {
      id: 7,
      name: "Women wear",
      imagePath: picture7, 
      description: "Clothes that confidence",
      price: 1800.75,
      onOffer: true,
    },
    {
      id: 8,
      name: "Perfume ",
      imagePath: picture8, 
      description: "Scent of passion",
      price: 600.00,
      onOffer: false,
    },
    {
      id: 9,
      name: "Naiil Polish ",
      imagePath: picture9, 
      description: "All with great colors and scents",
      price: 450.30,
      onOffer: true,
    },
  ];

  const [cart, setCart] = useState([]);

  const handleCartToggle = (product) => {
    setCart((prevCart) =>
      prevCart.some((item) => item.id === product.id)
        ? prevCart.filter((item) => item.id !== product.id)
        : [...prevCart, product]
    );
  };

  return (
   <>
     <h2>Our products</h2>
    <div style={styles.grid}>
      {initialProducts.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.imagePath} alt={product.name} style={styles.image} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p style={styles.price}>Ksh{product.price.toFixed(2)}</p>
          {product.onOffer && <span style={styles.offer}>On Offer!</span>}
          <button
            onClick={() => handleCartToggle(product)}
            style={{
              ...styles.button,
              backgroundColor: cart.some((item) => item.id === product.id)
                ? "#e74c3c"
                : "#27ae60",
            }}
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      ))}
      </div>
      
      </>
  );
};







const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  price: {
    fontWeight: "bold",
    color: "#2c3e50",
  },
  offer: {
    color: "#e74c3c",
    fontWeight: "bold",
  },
  button: {
    padding: "10px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight:'bold',
  },
};

export default ProductGrid;