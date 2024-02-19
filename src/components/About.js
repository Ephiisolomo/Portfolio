// About.js
import React, { useEffect, useState } from 'react';
import '../styles/about.css'; // Import custom CSS for About component

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);
  return (
    <section id="about" className={`about-section fade-in ${isVisible? 'visible' : ''}`}>
      <div className="header-container"><h2 className="about-heading">About Me</h2></div>
      <p className="about-content">
        This is placeholder text for the About Me section. Replace it with your own content.
      </p>
    </section>
  );
}

export default About;
