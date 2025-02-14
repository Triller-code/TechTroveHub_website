import React, { useState } from "react";
import picture from '../assets/logo.jpg'


const Navbar = () => {
 
  const [dropdown, setDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(0); 


  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (<>
    <nav className="navbar">
     
      <div className="logo">
        <img src= {picture} alt="NovaCart Logo" className="logo-img" />
        <span className="company-name">NovaCart</span>
      </div>

     
      <ul className="nav-links">
        <li className="dropdown">
          <button onClick={() => toggleDropdown("downloads")}>Downloads ▼</button>
          {dropdown === "downloads" && (
            <ul className="dropdown-menu">
              <li><a href="#">Software</a></li>
              <li><a href="#">Documents</a></li>
            </ul>
          )}
        </li>

        <li className="dropdown">
          <button onClick={() => toggleDropdown("info")}>Related Info ▼</button>
          {dropdown === "info" && (
            <ul className="dropdown-menu">
              <li><a href="#">News</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          )}
        </li>

        <li><a href="#">How to Reach Us</a></li>
        <li><a href="#">Create Account</a></li>
        <li><a href="#">Enquire About Account</a></li>
      </ul>

   
      <div className="nav-buttons">
        <button className="home-btn">Home</button>
        <button className="signin-btn">Sign In</button>

      
        <button className="cart-btn">
          Cart <span className="cart-count">{cartCount}</span>
        </button>
      </div>
      </nav>
      <div className="next">Welcom to NovaCart</div>
      </>
  );
};

export default Navbar;