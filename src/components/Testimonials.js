// Testimonials.js
import React from 'react';
import '../styles/testimony.css' //import custom CSS for the testimonial page

const Testimonials = () => {
    return (
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2 className="section-heading">Testimonials</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget turpis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
                  <footer className="blockquote-footer">John Doe, CEO</footer>
                </div>
              </div>
            </div>
            {/* Add more testimonial cards as needed */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
