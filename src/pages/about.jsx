// import React from 'react';
import "../styles/about.css";

const About = () => (
  <section>
    <h1>About Me</h1>
    <img
      src="/public/assets/girl.jpeg"
      alt="Danielle Boenisch"
      id="author-photo"
    />
    <div id="aboutme-text">
      <p>
        Results-driven Senior Product Manager with a proven track record of
        implementing innovative software applications and specializing in
        personalization and customer data management. Over 6 years of experience
        in product management leading CRM, Martech, data integrations,
        optimizing business operations, and increasing revenue through
        data-driven strategies.
        <br /><br />
        My career began in marketing, specializing in marketing automation
        before moving into product management.
      </p>
      </div>
      <div id="relevant-skills">
      <h2>Relevant Skills</h2>
      <h3>CRM and Marketing Tech</h3>
      <p>
        Multiple years of marketing experience in email, push and SMS and
        managing the marketing technology for marketing platforms and CDP.
        Specialized in customer data automation. Specialized in CRM management
        and customer data management.
      </p>
      <br />
      <h3>Data Integrations</h3>
      <p>
        Built an internal iPaaS and implemented integrations for multiple SaaS
        including Salesforce, Responsys, Genesys, Hubspot, Netsuite, Arrivy,
        Enerflo, internal SaaS
      </p>
      <br />
      <h3>SaaS Implementations and Migrations</h3>

      <p>
        Managed implementation of Salesforce, Responsys, Genesys, Arrivy,
        Enerflo, Hubspot, Netsuite, internal SaaS
      </p>
    </div>
    <div id="contact-details">
      <strong>Email:</strong> danielleboenisch@gmail.com
      <br />
      <a href="https://github.com/danielleboe" id="github-link">
        <strong>Github</strong>
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/danielle-boenisch/"
        id="linkedin-link"
      >
        <strong>LinkedIn</strong>
      </a>
    </div>
  </section>
);

export default About;
