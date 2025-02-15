import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">Tech Diva</div>
      {/* Dropdown Menu */}
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
          Menu 
        </button>
        {isOpen && (
          <ul className="dropdown-content">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;

