// import React from 'react';
import Project from '../components/project.jsx'; // Importing the Project component
import '../styles/portfolio.css'; // Importing styles specific to the Portfolio component

const projects = [
  {
    title: 'CalorEase Calorie Tracker',
    image: '/assets/CalorEase.png', // Replace with actual image path
    deployedLink: 'https://danielleboe.github.io/NutritionTracker/',
    githubLink: 'https://github.com/danielleboe/NutritionTracker',
  },
  {
    title: 'Blog Form',
    image: '/assets/Create-New-Post.png', // Replace with actual image path
    deployedLink: 'https://danielleboe.github.io/blogform/',
    githubLink: 'https://github.com/blogform',
  },
  {
    title: 'Kanban Task Board',
    image: '/assets/taskboard-screenshot.png', // Replace with actual image path
    deployedLink: 'https://danielleboe.github.io/taskboard/',
    githubLink: 'https://github.com/danielleboe/taskboard',
  },
  {
    title: 'Weather App',
    image: '/assets/weatherapp.png', // Replace with actual image path
    deployedLink: 'https://danielleboe.github.io/weatherapp/',
    githubLink: 'https://github.com/danielleboe/weatherapp',
  },
  {
    title: 'Blog',
    image: '/assets/blogpost.png', // Replace with actual image path
    deployedLink: 'https://new-blog-86s0.onrender.com',
    githubLink: 'https://github.com/danielleboe/new-blog',
  },
  
  {
    title: 'Notes App',
    image: 'assets/notes-app.png', // Replace with actual image path
    deployedLink: 'https://note-app-ynb3.onrender.com/notes.html',
    githubLink: 'https://github.com/danielleboe/notesapp',
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
