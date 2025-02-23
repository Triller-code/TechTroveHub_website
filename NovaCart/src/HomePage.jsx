import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    switch (option) {
      case 'Home':
        navigate('/');
        break;
      case 'Sign In':
        navigate('/SignInPage.jsx');
        break;
      case 'Stories':
        navigate('/CardCarousel.jsx');
        break;
      case 'About':
        navigate('/AboutUs.jsx');
        break;
      case 'Footer':
        navigate('/Footer.jsx');
        break;
      default:
        console.log(option);
    }
    setSidebarOpen(false);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button onClick={toggleSidebar} style={styles.menuButton}>☰</button>
        <h1 style={styles.logo}>EliteCycles</h1>
        <nav>
          <button style={styles.navButton} onClick={() => navigate('/SignInPage.jsx')}>Sign In</button>
        </nav>
      </header>

      {/* Sidebar */}
      <div style={{ ...styles.sidebar, transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <button onClick={toggleSidebar} style={styles.closeButton}>&times;</button>
        <div onClick={() => handleOptionClick('Home')} style={styles.sidebarItem}>Home</div>
        <div onClick={() => handleOptionClick('Sign In')} style={styles.sidebarItem}>Sign In</div>
        <div onClick={() => handleOptionClick('Stories')} style={styles.sidebarItem}>Stories</div>
        <div onClick={() => handleOptionClick('About')} style={styles.sidebarItem}>About Us</div>
        <div onClick={() => handleOptionClick('Footer')} style={styles.sidebarItem}>Get in Touch</div>
      </div>
      {isSidebarOpen && <div style={styles.overlay} onClick={toggleSidebar}></div>}

      <section style={styles.hero}>
        <h2>Premium Bicycles for Every Adventure</h2>
        <p>Experience the best in speed, comfort, and innovation.</p>
      </section>

      <section style={styles.featured}>
        <h2>Why Choose EliteCycles?</h2>
        <div style={styles.featuresContainer}>
          <div style={styles.feature}>
            <h3>Top-Tier Performance</h3>
            <p>Designed for speed and durability, our bikes are crafted for champions.</p>
          </div>
          <div style={styles.feature}>
            <h3>Luxury & Comfort</h3>
            <p>Engineered with precision for smooth and enjoyable rides.</p>
          </div>
          <div style={styles.feature}>
            <h3>Lifetime Support</h3>
            <p>We offer unparalleled customer service and lifetime maintenance.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    color: '#333',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 50px',
    backgroundColor: '#063970',
    color: '#fff',
  },
  logo: {
    fontSize: '2rem',
  },
  menuButton: {
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  },
  navButton: {
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#ff5722',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '250px',
    height: '100%',
    backgroundColor: '#063970',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.5)',
    transition: 'transform 0.3s ease',
  },
  sidebarItem: {
    padding: '15px',
    cursor: 'pointer',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'background-color 0.2s ease',
  },
  closeButton: {
    alignSelf: 'flex-end',
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '9%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  hero: {
    padding: '2px 2px',
    color: '#fff',
  },
  featured: {
    padding: '50px 20px',
  },
  featuresContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '20px',
  },
};

export default HomePage;
