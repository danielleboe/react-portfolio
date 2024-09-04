import React from 'react';
import Project from '../components/project.jsx'; // Importing the Project component
import '../styles/portfolio.css'; // Importing styles specific to the Portfolio component

const projects = [
  {
    title: 'Project One',
    image: '/path/to/project-one-image.jpg', // Replace with actual image path
    deployedLink: 'https://deployed-link-one.com',
    githubLink: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    image: '/path/to/project-two-image.jpg', // Replace with actual image path
    deployedLink: 'https://deployed-link-two.com',
    githubLink: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Project Three',
    image: '/path/to/project-three-image.jpg', // Replace with actual image path
    deployedLink: 'https://deployed-link-three.com',
    githubLink: 'https://github.com/yourusername/project-three',
  },
  {
    title: 'Project Four',
    image: '/path/to/project-four-image.jpg', // Replace with actual image path
    deployedLink: 'https://deployed-link-four.com',
    githubLink: 'https://github.com/yourusername/project-four',
  },
  {
    title: 'Project Five',
    image: '/path/to/project-five-image.jpg', // Replace with actual image path
    deployedLink: 'https://deployed-link-five.com',
    githubLink: 'https://github.com/yourusername/project-five',
  },
  {
    title: 'Project Six',
    image: '/path/to/project-six-image.jpg', // Replace with actual image path
    deployedLink: 'https://deployed-link-six.com',
    githubLink: 'https://github.com/yourusername/project-six',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
