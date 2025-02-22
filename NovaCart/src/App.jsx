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

function MainContent() {
  return (
    <>
      <Dashboard />
      <HomePage />
      <CardCarousel />
      <Products />
      <Related />
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
      </Routes>
    </Router>
  );
}

export default App;
