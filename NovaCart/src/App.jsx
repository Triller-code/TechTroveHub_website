import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import SignInPage from './SignInPage.jsx';
import CardCarousel from './CardCarousel.jsx';
import Products from './Products.jsx';
import AboutUs from './AboutUs.jsx';
import Footer from './Footer.jsx';

function MainContent() {
  return (
    <>
      <HomePage />
      <CardCarousel />
      <AboutUs />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/SignInPage.jsx" element={<SignInPage />} />
        <Route path="/Products.jsx" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
