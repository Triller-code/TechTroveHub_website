
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import HomePage from './HomePage.jsx';
import SignInPage from './SignInPage.jsx';
import CardCarousel from './CardCarousel.jsx';
import Products from './Products.jsx';
import Related from './Related.jsx';
import AboutUs from './AboutUs.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/stories" element={<CardCarousel />} />
        <Route path="/products" element={<Products />} />
        <Route path="/related" element={<Related />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>

  );
}

export default App;