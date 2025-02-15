import React, { useContext } from 'react';
import { CartContext } from './App'; 
import './MyproductsList.css'; 

const products = [
  { id: 1, name: 'Pink Roses', price: 'Kshs. 4500', image: 'https://i.pinimg.com/736x/5a/76/b6/5a76b64ab0ee78f5b57ff60d998ed792.jpg' },
  { id: 2, name: 'Orchids', price: 'Kshs. 6200', image: 'https://i.pinimg.com/474x/f6/e4/54/f6e45463922b386c9efaac9934152445.jpg' },
  { id: 3, name: 'Gerbara Daisies', price: 'Kshs. 7000', image: 'https://i.pinimg.com/474x/40/60/e7/4060e74160f6078c54e2b94aa7c66d56.jpg' },
  { id: 4, name: 'Carnations', price: 'Kshs. 3900', image: 'https://i.pinimg.com/736x/cd/10/22/cd1022d3771c517746347774d4dbd8ea.jpg' },
  { id: 5, name: 'Sunflowers', price: 'Kshs. 5100', image: 'https://i.pinimg.com/474x/cf/93/ce/cf93ced9c8bebb0baa247564698518a5.jpg' },
  { id: 6, name: 'Dahlias', price: 'Kshs. 4300', image: 'https://i.pinimg.com/474x/6d/91/c8/6d91c8d36a06c956960dfffab8345cae.jpg' },
  { id: 7, name: 'Jasmine', price: 'Kshs. 4600', image: 'https://i.pinimg.com/474x/30/ef/e1/30efe1cff72b39f1e36fbeb0ba8d241d.jpg' },
  { id: 8, name: 'Pampas Grass', price: 'Kshs. 3000', image: 'https://i.pinimg.com/474x/bb/1e/b6/bb1eb630a403bcc02ad64372b3b6bbfc.jpg' },
  { id: 9, name: 'Lilies', price: 'Kshs. 3400', image: 'https://i.pinimg.com/474x/26/80/50/2680502c17e3ea2e4817ae23621b1447.jpg' },
  { id: 10, name: 'Peonies', price: 'Kshs. 3600', image: 'https://i.pinimg.com/474x/f4/b7/d4/f4b7d4344b48ae58d78017372ffcfc51.jpg' },
  { id: 11, name: 'Tulips', price: 'Kshs. 5200', image: 'https://i.pinimg.com/474x/6c/60/7b/6c607b79d4a6ae3823921f3331b80ebd.jpg' },
  { id: 12, name: 'Lavender', price: 'Kshs. 4700', image: 'https://i.pinimg.com/474x/05/79/3d/05793dc336374900bf86d7e0f7c0cd43.jpg' },
  { id: 13, name: 'Proteus', price: 'Kshs. 6500', image: 'https://i.pinimg.com/474x/b3/ab/97/b3ab97420d75d79cf836eb49fb5b9fb9.jpg' },
  { id: 14, name: 'Chrysanthemus', price: 'Kshs. 5500', image: 'https://i.pinimg.com/474x/ae/c2/1d/aec21dc79c3cc63767246e69269f72e1.jpg' },
  { id: 15, name: 'Poisenttius', price: 'Kshs. 4700', image: 'https://i.pinimg.com/474x/cf/92/2d/cf922dec753d00f33d33b7b7531089d7.jpg' },
];

function MyproductsList() {
  const { addToCart } = useContext(CartContext); 

  return (
    <div className="my-products-list">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyproductsList;
