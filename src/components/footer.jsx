import React from "react";
import "../styles/footer.css"; // Importing styles specific to the footer component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Danielle Boenisch. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://github.com/danielleboe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/danielle-boenisch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
