import React from 'react';
import './Header.css';
const DownloadButton = () => {
  return (
    <div className="nav-link">
  <a 
    href="/Avishka_Koswaththa_Resume_SE_Intern.pdf" 
    download="Avishka_Koswaththa_Resume_SE_Intern.pdf" 
    style={{
      textDecoration: 'none',
      padding:'10px',
       color:'#333',
      cursor: 'pointer',
      backgroundColor:'#638c80',
    }}
  >
    Download CV
  </a>
</div>

  );
};

export default DownloadButton;
