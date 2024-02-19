import React from 'react';
import '../styles/project.css'; // Import custom CSS for Project component

const Project = ({ name, image, link, description }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
      <div className="project-card">
        <img src={image} alt={name} className="project-image" />
        <h3 className="project-name">{name}</h3>
        <p className = "project-desc">{description}</p>
      </div>
    </a>
  );
}

export default Project;