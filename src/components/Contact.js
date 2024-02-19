// Contact.js
import React, { useEffect, useState } from 'react';
import '../styles/contact.css'; // Import custom CSS for Contact component

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);
  return (
    <section id="contact" className= {`contact-section fade-in ${isVisible? 'visible' : ''}`}>
      <div className='header-container'><h2 className="contact-heading">Contact Me</h2></div>
      <div className="contact-info">
        <p>Email: ephred1254@gmail.com</p>
        <p>Phone: +251 9 82 66 44 32</p>
        <p>Address: Addis Abeba, Ethiopia</p>
        <p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Website</a></p>
      </div>
    </section>
  );
}

export default Contact;
  