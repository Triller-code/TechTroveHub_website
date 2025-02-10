import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; 
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p><FaEnvelope /> Contact: <a href="mailto:info@techstore.com">info@techstore.com</a></p>
        <p><FaMapMarkerAlt /> Location: Nairobi, Kenya</p>
      </div>
      <div className="social-media">
        <p>Follow us on:</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>
    </footer>
  );
};

export default Footer;
