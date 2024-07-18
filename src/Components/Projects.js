import React, { useEffect } from 'react';
import './Projects.css'; 
import { Link } from 'react-router-dom';

const Projects = () => {
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
      <div className="projects-container">
        <Link to="/project1" className="project-card">
          <img src="/images/project1.png" alt="Project 1" />
         
          <p>DownSouth Tourists Medical Help Project</p>
        </Link>
        
        <Link to="/project2" className="project-card">
          <img src="/images/project2.png" alt="Project 2" />
          
          <p>Real Estate Website Project</p>
        </Link>
        <Link to="/project3" className="project-card">
          <img src="/images/p3.jpg" alt="Project 3" />
         
          <p>Real Estate Exploration App</p>
        </Link>
        <Link to="/project4" className="project-card">
          <img src="/images/project4.png" alt="Project 4" />
          
          <p>Home Service Finder Website Project</p>
        </Link>
        <Link to="/project5" className="project-card">
          <img src="/images/project5.png" alt="Project 5" />
         
          <p>Mental Health Website Project</p>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
