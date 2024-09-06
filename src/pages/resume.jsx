// import React from 'react';
import "../styles/resume.css"; // Importing styles specific to the Resume component

const Resume = () => {
  return (
    <section className="resume">
      <header>
        <h1>Resume</h1>
        <h2>Danielle Boenisch</h2>
        <p>Product Management | Marketing | Web Development</p>
        <p>Email: danielleboenisch@gmail.com | Phone: (573) 489-6938</p>
      </header>
      <section className="summary">
        <h2>Summary</h2>
        <p>
          <strong> Product Management in SaaS Development</strong>
          <br />
          With six years in product management, I bring expertise in SaaS,
          integrations, and automation. Successfully increased efficiency,
          saving over $10,000 and achieving a 3% conversion rate uplift.
          <br />
          <br />
          <strong>CRM and Marketing Tech</strong>
          <br />
          Five years of experience in CRM and MarTech development and data
          automation. <br />
          <br />
          <strong>Data Integrations</strong>
          <br />
          Skilled in building internal iPaaS and integrating multiple SaaS
          including Salesforce, Responsys, Genesys, Hubspot, Netsuite, Arrivy,
          Enerflo and internal SaaS.
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>

        <div className="job">
          <h3>Founder, Product Manager, Developer</h3>
          <p>Townee, June 2024 - Present</p>
          <ul className="list">
            <li>
              Founded site decided to providing movers and travelers with advice
              from locals.
            </li>
            <li>
              Designed and developed site using html/css, javascript,
              handlebars, node, express, postgres
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Product Manager</h3>
          <p>Ambia Solar, September 2022 - November 2023</p>
          <ul className="list">
            <li>
              Developed and maintained company website using React and Node.js.
            </li>
            <li>
              Collaborated with design and backend teams to create seamless user
              experiences.
            </li>
            <li>
              Implemented responsive design principles to ensure cross-device
              compatibility.
            </li>
          </ul>
        </div>
        <div className="job">
          <h3>Product Manager</h3>
          <p>Freeosk, August 2021 - July 2022</p>
          <ul className="list">
            <li>
              Developed internal operations applications for engineering,
              creative and logistics optimizing business deployment, and
              reducing labor hours across multiple lines of business through
              user research and roadmap planning
            </li>
            <li>
              Led the creation of an automated forecasting model tool, enhancing
              business optimization and scheduling efficiency
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Product Manager</h3>
          <p>Overstock.com, January 2017 - August 2020</p>
          <ul className="list">
            <li>
              Achieved a 3% increase in new mover conversion rate through
              implementation of machine learning personalization, optimizing
              user engagement and sales outcomes</li>
              <li>
                Built an iPaaS that streamlined data integration setup time from
                1 month to mere minutes, revolutionizing customer
                personalization capabilities and operational efficiency
              </li>
              <li>
                Pioneered the development of a SaaS platform that simplified
                holiday doorbusters pricing, reducing manual workload and error
                rates
              </li>
            <li>
              Managed cross-functional team of product, engineering and UX that
              oversaw product development from beginning to implementation
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>CRM Marketing Manager</h3>
          <p>Overstock.com, March 2016 - December 2016</p>
          <ul className="list">
            <li>
              Improved technical innovation by migrating email service providers
              including automation campaigns, leading to faster deployment times
              for email teams
            </li>
          </ul>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of Example, Graduated May 2016</p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js</li>
          <li>Responsive Design</li>
          <li>Version Control (Git)</li>
        </ul>
      </section>

      <a
        href="/assets/DanielleBoenischResume20240719-2.pdf" // Replace with the actual path to your resume
        download
        className="resume-link"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
