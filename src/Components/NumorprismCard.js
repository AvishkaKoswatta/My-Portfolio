import React, { useEffect } from 'react';
import './NumorprismCard.css'; // Import the custom CSS file

const NumorprismCard = () => {
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
        <ul className="tech-list">
          <li className="tech-item" style={{ '--clr-inline': '#171515' }}>
            <a >Java</a>
          </li>
          <li className="tech-item" style={{ '--clr-inline': '#0072b1' }}>
            <a >SpringBoot</a>
          </li>
          <li className="tech-item" style={{ '--clr-inline': '#00acee' }}>
            <a >Laravel</a>
          </li>
          <li className="tech-item" style={{ '--clr-inline': '#171515' }}>
            <a >MySQL</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default NumorprismCard;
