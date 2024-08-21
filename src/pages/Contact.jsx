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
      <h1>Contact Me</h1>
      <div className='contact-info'>
        <div className='contact-item'>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href='mailto:ever.rios.gonzalez@gmail.com'>Gmail</a>
        </div>
        <div className='contact-item'>
          <FontAwesomeIcon icon={faLinkedin} />
          <a
            href='https://www.linkedin.com/in/daniel-rios-142619111

'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </div>
        <div className='contact-item'>
          <FontAwesomeIcon icon={faGithub} />
          <a
            href='https://github.com/danielriosg'
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

