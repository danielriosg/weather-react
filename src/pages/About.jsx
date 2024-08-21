import React from "react";
import "../styles/pages/About.css";

function About() {
  return (
    <div className='about'>
      <h1>About This App</h1>
      <p>
        About This weather app provides real-time weather updates and a 6-day
        forecast. The app utilizes React components and props to manage and
        display data efficiently. For a comprehensive overview, please visit the
        <a
          href='https://github.com/danielriosg/weather-react/blob/main/README.md'
          target='_blank'
          rel='noopener noreferrer'
          className='readme-link'
        >
          README
        </a>
      </p>
    </div>
  );
}

export default About;
