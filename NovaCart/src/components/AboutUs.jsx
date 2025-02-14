import React from "react";
import { motion } from "framer-motion";
import picture from '../assets/logo2.jpg'

function AboutUs() {
  return (
    <div className="about-container">
      <motion.img 
        src={picture}
        alt="About Us" 
        animate={{ x: [-200, 0] }} 
        transition={{ duration: 0.8 }} 
      />
      <motion.div 
        className="text-box" 
        animate={{ x: [200, 0] }} 
        transition={{ duration: 8, repeat:Infinity }}
      >
        <h1>About NovaCart</h1>
        <p>NovaCart is a premium e-commerce platform offering high-quality products at unbeatable prices.</p>
      </motion.div>
    </div>
  );
}

export default AboutUs;




