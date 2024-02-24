// Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-heading">Testimonials</h2>
        <div className="testimonial">
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget turpis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <cite>- John Doe, CEO</cite>
          </blockquote>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </section>
  );
};

export default Testimonials;
