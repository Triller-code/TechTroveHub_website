import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.webp'; 

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  // Function to handle opening the modal
  const handleSignInClick = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='navbar'>
       
          <img src={logo} alt="Logo" className="logo" />

          {/* Navbar Menu */}
          <ul className="navbar-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#mobile-app">Mobile App</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

          {/* Sign In Button */}
          <button className="sign-in-btn" onClick={handleSignInClick}>Sign In</button>

          {/* Sign In Modal */}
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close-btn" onClick={handleCloseModal}>&times;</span>
                <h2>Sign In</h2>
                <form className="sign-in-form">
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit" className="modal-sign-in-btn">Sign In</button>
                </form>
              </div>
            </div>
          )}
        
      </div>

     
    </div>
  );
};

export default Navbar;