import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <p>Contact: info@myweatherapp.com</p>
      <p>
        View the code on GitHub:
        <a
          href='https://github.com/danielriosg/weather-react'
          target='_blank'
          rel='noopener noreferrer'
          className='github-link'
        >
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
      </p>
    </footer>
  );
};

export default Footer;



