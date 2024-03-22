import React from "react";
import '../Styles/Portfolio.css';


function Portfolio() {
  return (
    <div className="portfolio-page">
      <h2>My Portfolio</h2>
      <div className="portfolio-container">
        {/* Example of a project; replicate this structure for other projects */}
        <PortfolioItem
          title="Project 1"
          staticImg="path-to-image1.jpg"
          gifImg="path-to-gif1.gif"
          shortDesc="Short Description 1"
          longDesc="Extended Description 1"
          projectLink="link-to-project-1"
        />
        <PortfolioItem
          title="Project 1"
          staticImg="path-to-image1.jpg"
          gifImg="path-to-gif1.gif"
          shortDesc="Short Description 1"
          longDesc="Extended Description 1"
          projectLink="link-to-project-1"
        />
        <PortfolioItem
          title="Project 1"
          staticImg="path-to-image1.jpg"
          gifImg="path-to-gif1.gif"
          shortDesc="Short Description 1"
          longDesc="Extended Description 1"
          projectLink="link-to-project-1"
        />
        <PortfolioItem
          title="Project 1"
          staticImg="path-to-image1.jpg"
          gifImg="path-to-gif1.gif"
          shortDesc="Short Description 1"
          longDesc="Extended Description 1"
          projectLink="link-to-project-1"
        />
        <PortfolioItem
          title="Project 1"
          staticImg="path-to-image1.jpg"
          gifImg="path-to-gif1.gif"
          shortDesc="Short Description 1"
          longDesc="Extended Description 1"
          projectLink="link-to-project-1"
        />
        <PortfolioItem
          title="Project 1"
          staticImg="path-to-image1.jpg"
          gifImg="path-to-gif1.gif"
          shortDesc="Short Description 1"
          longDesc="Extended Description 1"
          projectLink="link-to-project-1"
        />
      </div>
    </div>
  );
}

// PortfolioItem.jsx
function PortfolioItem({
  title,
  staticImg,
  gifImg,
  shortDesc,
  longDesc,
  projectLink,
}) {
  return (
    <div className="portfolio-item">
      <h3>{title}</h3>
      <img src={staticImg} alt="Static Thumbnail" className="static-img" />
      <img src={gifImg} alt="Animated Thumbnail" className="gif-img" />
      <p className="short-description">{shortDesc}</p>
      <div className="extended-content">
        <p className="extended-description">{longDesc}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
