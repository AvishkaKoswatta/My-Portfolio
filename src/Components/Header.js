import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // Optional for custom styling
import DownloadButton from './DownloadButton';
import './DownloadButton.css';

const Header = () => {
  // Get current path
  const currentPath = window.location.pathname;

  return (
    <header className="Header">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Branding Section */}
        <div className="Header-branding d-flex align-items-center">
          <a href="/" className="d-flex align-items-center text-decoration-none">
            <img src="/images/Avishka Koswaththa.png" alt="Site Logo" className="me-2" />
          </a>
        </div>

        {/* Navigation Section */}
        <nav className="Header-nav">
          <ul className="nav">
            <li className="nav-item">
              <a 
                href="/" 
                className={`nav-link ${currentPath === "/" ? "active" : ""}`}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/about" 
                className={`nav-link ${currentPath === "/about" ? "active" : ""}`}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/projects" 
                className={`nav-link ${currentPath === "/projects" ? "active" : ""}`}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/contactform" 
                className={`nav-link ${currentPath === "/contactform" ? "active" : ""}`}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <DownloadButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
