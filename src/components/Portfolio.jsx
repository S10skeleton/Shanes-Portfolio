import React from 'react';

function Portfolio() {
  return (
    <div>
      <h2>My Portfolio</h2>
      <div className="portfolio-container">
        {/* Example of a project; replicate this structure for other projects */}
        <div className="portfolio-item">
          <h3>Project Title</h3>
          <img src="path-to-image" alt="Project Thumbnail" />
          <p>Description of the project...</p>
          <a href="link-to-live-project" target="_blank" rel="noopener noreferrer">Live Project</a>
          <a href="link-to-github-repo" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
        {/* Repeat for other projects */}
      </div>
    </div>
  );
}

export default Portfolio;
