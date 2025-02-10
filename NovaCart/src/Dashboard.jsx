import React, { useState } from "react";

const Dashboard = () => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <nav className="dashboard">
      <h1>Tech Store</h1>

      <div className="menu">
        {/* Navigation Menu */}
        <div className="menu-item">
          <button onClick={() => setNavMenuOpen(!isNavMenuOpen)}>☰ Menu</button>
          {isNavMenuOpen && (
            <ul className="dropdown">
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          )}
        </div>

        {/* User Account Menu */}
        <div className="menu-item">
          <button onClick={() => setUserMenuOpen(!isUserMenuOpen)}>👤 Account</button>
          {isUserMenuOpen && (
            <ul className="dropdown">
              <li>My Profile</li>
              <li>Email: info@techstore.com</li>
              <li><button className="logout-btn">Logout</button></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Dashboard;
