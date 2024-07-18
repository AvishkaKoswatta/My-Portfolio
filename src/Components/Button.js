import React, { useEffect } from 'react';
import './Button.css'; // Import the custom CSS file

const Button = () => {
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
    <div className="App1">
      <footer>
        <ul className="social-icons">
          <li style={{ '--clr-inline': '#171515' }}>
            <a href="https://github.com/AvishkaKoswatta">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li style={{ '--clr-inline': '#0072b1' }}>
            <a href="http://www.linkedin.com/in/avishkakoswaththa">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li style={{ '--clr-inline': '#00acee' }}>
            <a href="./contactform">
            <i class="fa-solid fa-envelope"></i>

            </a>
          </li>
          <li style={{ '--clr-inline': '#171515' }}>
            <a href="https://www.youtube.com/@AvishkaKoswaththa">
            <i class="fa-brands fa-youtube"></i>

            </a>
          </li>
          <li style={{ '--clr-inline': '#171515' }}>
            <a href="https://medium.com/@avishkakkoswaththa">
            <i class="fa-brands fa-medium"></i>

            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Button;
