import React from 'react';
import '../styles/resume.css'; // Importing styles specific to the Resume component

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>Download my resume here:</p>
      <a
        href="/public/assets/DanielleBoenischResume20240719-2.pdf" // Replace with the actual path to your resume
        download
        className="resume-link"
      >
        Download Resume
      </a>
      <div className="skills">
        <h3>Skills & Proficiencies</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>APIs</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
