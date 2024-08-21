import React from "react";
import "../styles/pages/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBriefcase } from "@fortawesome/free-solid-svg-icons"; // Solid icons
import {
  faLinkedin,
  faGithub,
  
} from "@fortawesome/free-brands-svg-icons"; // Brand icons



const Contact = () => {
  return (
    <div className='contact-container'>
      <h2>Contact Me</h2>
      <div className='contact-info'>
        <div className='contact-item'>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href='mailto:your-email@example.com'>your-email@example.com</a>
        </div>
        <div className='contact-item'>
          <FontAwesomeIcon icon={faLinkedin} />
          <a
            href='https://www.linkedin.com/in/your-profile'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </div>
        <div className='contact-item'>
          <FontAwesomeIcon icon={faGithub} />
          <a
            href='https://github.com/your-username'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </div>
        <div className='contact-item'>
          <FontAwesomeIcon icon={faBriefcase} />
          <a
            href='https://your-portfolio-link.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

