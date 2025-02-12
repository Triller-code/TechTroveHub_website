import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>EliteCycles</h1>
        <nav>
          <button style={styles.navButton} onClick={() => navigate('/signin')}>Sign In</button>
        </nav>
      </header>

      <section style={styles.hero}>
        <h2>Premium Bicycles for Every Adventure</h2>
        <p>Experience the best in speed, comfort, and innovation.</p>
        <button style={styles.shopButton} onClick={() => navigate('/products')}>Shop Now</button>
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

      <footer style={styles.footer}>
        <p>© 2025 EliteCycles. All Rights Reserved.</p>
      </footer>
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
  navButton: {
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#ff5722',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  hero: {
    padding: '100px 20px',
    background: 'url("https://source.unsplash.com/1600x900/?bicycle") center/cover no-repeat',
    color: '#fff',
  },
  shopButton: {
    padding: '12px 20px',
    border: 'none',
    backgroundColor: '#ff5722',
    color: '#fff',
    fontSize: '1.2rem',
    cursor: 'pointer',
    marginTop: '20px',
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
  feature: {
    maxWidth: '300px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f0f0f0',
  },
  footer: {
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#063970',
    color: '#fff',
  },
};

export default HomePage;
