import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // Optional for custom styling

const Header = () => {
  return (
    <header className="Header bg-light border-bottom py-2">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Branding Section */}
        <div className="Header-branding d-flex align-items-center">
          <a href="/" className="d-flex align-items-center text-decoration-none">
            
            <span className="fw-bold text-dark">Avishka Koswaththa</span>
          </a>
        </div>

        
        {/* Navigation Section */}
        <nav className="Header-nav">
          <ul className="nav">
            <li className="nav-item">
              <a href="/" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="/portfolio" className="nav-link">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
