// Portfolio.js
import React, { useEffect, useState } from 'react';
import SCMPic from '../images/image1.jpg';
import PMPic from '../images/image2.jpg';
import AIPic from '../images/image3.jpg';
import ECOPic from '../images/image4.jpg';
import Project from './Project';
import '../styles/portfolio.css'; // Import custom CSS for Portfolio component

const Portfolio = () => {
  const projects = [
    { name: 'Supply Chain Management System', image: SCMPic, link: 'https://example.com/project12', desc : "Sample description for the projects" },
    { name: 'Project Management System', image: PMPic, link: 'https://example.com/project21', desc : "Sample description for the projects" },
    { name: 'AI-empowered Medical Assistant System', image: AIPic, link: 'https://example.com/project32', desc : "Sample description for the projects" },
    { name: 'E-commerce Web Application', image: ECOPic, link: 'https://example.com/project13', desc : "Sample description for the projects" },
  ];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);
  return (
    <section id="portfolio" className={`portfolio-section fade-in ${isVisible ? 'visible' : ''}`}>
      <div className='header-container'><h2 className="portfolio-heading">Portfolio</h2></div>
      <div className="projects">
      {projects.map((project, index) => (
          <Project key={index} name={project.name} image={project.image} link={project.link} description={project.desc} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
