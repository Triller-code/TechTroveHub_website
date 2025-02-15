import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ title, navLinks, buttons }) {
  return (
    <header className="header" aria-label="Header">
      <h1>{title}</h1>
      <nav aria-label="Main Navigation">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.label}
          </Link>
        ))}
        {buttons.map((button, index) => (
          <button key={index} aria-label={button.label} onClick={button.onClick}>
            {button.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

Header.defaultProps = {
  title: '🌸BloomAway🌸',
  navLinks: [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
  ],
  buttons: [
    { label: 'Sign In', onClick: () => alert('Sign In clicked') },
    { label: 'Create an Account', onClick: () => alert('Create an Account clicked') },
  ],
};

export default Header;