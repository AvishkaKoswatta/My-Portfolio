import React, { useEffect } from 'react';
import Button from '@mui/material/Button'; // Import MUI Button
import './About.css';

const About = () => {

    useEffect(() => {
        const addFontAwesomeScript = () => {
          // Check if Font Awesome script is already loaded
          if (!document.querySelector('script[src="https://kit.fontawesome.com/b3b298ed40.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://kit.fontawesome.com/b3b298ed40.js';
            script.crossOrigin = 'anonymous';
            script.async = true;
            document.head.appendChild(script);
          }
        };
    
        addFontAwesomeScript();
    
        return () => {
          // Cleanup function to remove the script if component unmounts
          const scriptElement = document.querySelector('script[src="https://kit.fontawesome.com/b3b298ed40.js"]');
          if (scriptElement) {
            document.head.removeChild(scriptElement);
          }
        };
      }, []);


  return (
    <div className="about-me-container">
      <div className="profile-picture">
        <img src="/images/photo1.jpg" alt="Profile" />
        <p className='about-text2'>Hi, I'm Avishka Koswaththa </p>
      </div>
      <div className='about'>
        <h1>About Me</h1>
        <p className='about-text1'>
          I am a passionate developer and tech enthusiast.
          With a background in software development, I have a strong interest in creating efficient
          and innovative solutions. I love working with new technologies and continuously improving my skills.
        </p>
      </div>
      <div className="about-contact">
        <p> </p>
        <br/>
        <div className='contact-button'>
          <Button
            variant="contained"
            color="primary"
            href="./contactform"
          >
            Contact Me
          </Button>
        </div>
        <div>
        <ul className="social-icons1" >
          <li >
            <a href="https://github.com/AvishkaKoswatta">
              <i className="fa-brands fa-github" style={{ color:'black'}}></i>
            </a>
          </li>
          <li style={{ '--clr-inline': '#0072b1' }}>
            <a href="http://www.linkedin.com/in/avishkakoswaththa">
              <i className="fa-brands fa-linkedin" style={{ color:'black'}}></i>
            </a>
          </li>
          <li style={{ '--clr-inline': '#00acee' }}>
            <a href="./contactform">
            <i class="fa-solid fa-envelope" style={{ color:'black'}}></i>

            </a>
          </li>
          <li style={{ '--clr-inline': '#171515' }}>
            <a href="https://www.youtube.com/@AvishkaKoswaththa">
            <i class="fa-brands fa-youtube" style={{ color:'black'}}></i>

            </a>
          </li>
          <li style={{ '--clr-inline': '#171515' }}>
            <a href="https://medium.com/@avishkakkoswaththa">
            <i class="fa-brands fa-medium" style={{ color:'black'}}></i>

            </a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
