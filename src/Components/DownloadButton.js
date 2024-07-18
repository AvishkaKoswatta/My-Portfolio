import React from 'react';

const DownloadButton = () => {
  return (
    <div className="download-button">
      <a href="/Avishka_Koswaththa_Resume_SE_Intern.pdf" download="Avishka_Koswaththa_Resume_SE_Intern.pdf">
        <button type="button">
          Download CV
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
