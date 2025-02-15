import React from 'react';
import './MyproductsList'
import './Home.css'
import MyproductsList from './MyproductsList.jsx';
const Home = () => {
  return (
    <div>
      <h1>Welcome to BloomAway-Your Go-To Flower Shop! 🌸💐✨</h1>
      <p>  
At BloomAway, we bring beauty to every moment with our fresh, hand-picked flowers. Whether you're celebrating love, friendship, or just brightening someone's day, our stunning bouquets and custom arrangements are crafted with care. Let your emotions bloom with BloomAway! 🌿🌷</p>
      <MyproductsList/>
    </div>
  );
};

export default Home;

