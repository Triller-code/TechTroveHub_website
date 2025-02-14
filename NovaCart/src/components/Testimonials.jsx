import React from "react";
import { motion } from "framer-motion";


const testimonials = [
  { id: 1, name: "Alice", text: "Amazing products and great service!" },
  { id: 2, name: "John", text: "Fast delivery and good prices!" },
  { id: 3, name: "Emma", text: "Quality products. Will shop again!" }
];

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h2>What Our Customers Say</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={testimonial.id} 
            className="testimonial-card"
            animate={{ x: [-100, 20] }} 
            transition={{ duration: 5, delay: index * 0.3 ,repeat:Infinity }}
          >
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

