import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
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
        navigate('/signin');
        break;
      case 'Stories':
        navigate('/stories');
        break;
      case 'Products':
        navigate('/products');
        break;
      case 'Related':
        navigate('/related');
        break;
      case 'About':
        navigate('/about');
        break;
      case 'Footer':
        navigate('/contact');
        break;
      default:
        console.log(option);
    }
    setSidebarOpen(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      <button onClick={toggleSidebar} style={styles.menuButton}>
        Menu
      </button>

      {/* Sidebar */}
      <div style={{ ...styles.sidebar, transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <button onClick={toggleSidebar} style={styles.closeButton}>&times;</button>
        <div onClick={() => handleOptionClick('Home')} style={styles.sidebarItem}>Home</div>
        <div onClick={() => handleOptionClick('Sign In')} style={styles.sidebarItem}>Sign In</div>
        <div onClick={() => handleOptionClick('Stories')} style={styles.sidebarItem}>Stories</div>
        <div onClick={() => handleOptionClick('Products')} style={styles.sidebarItem}>Products</div>
        <div onClick={() => handleOptionClick('Related')} style={styles.sidebarItem}>Related</div>
        <div onClick={() => handleOptionClick('About')} style={styles.sidebarItem}>About Us</div>
        <div onClick={() => handleOptionClick('Footer')} style={styles.sidebarItem}>Get in Touch</div>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && <div style={styles.overlay} onClick={toggleSidebar}></div>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20vh',
    backgroundColor: '#f0f0f0',
    transition: 'background-color 0.3s ease',
  },
  title: {
    fontSize: '2rem',
    margin: '20px 0',
    color: '#333',
  },
  menuButton: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#063970',
    color: '#FFFFFF',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
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
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
};

export default Dashboard;
