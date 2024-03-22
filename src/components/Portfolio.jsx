import React from "react";
import "../Styles/Portfolio.css";

// Portfolio component to showcase different projects
function Portfolio() {
  return (
        // Container for the portfolio section
    <div className="portfolio-page">
      <h1>A Few of the Applications I Have Made</h1>
      <div className="portfolio-container">
        <PortfolioItem
          className="project1 left"
          title="Project 1"
          staticImg="path-to-image1.jpg"
          gifImg="path-to-gif1.gif"
          shortDesc="Short Description 1"
          longDesc="Extended Description 1"
          projectLink="link-to-project-1"
        />
        <PortfolioItem
          className="project2 center"
          title="Wags to Riches"
          staticImg="src\assets\Wags.png"
          gifImg="src\assets\Wags.png"
          shortDesc="A simple application for adopting Cats and Dogs"
          longDesc="Extended Description 1"
          projectLink="https://github.com/S10skeleton/Wags-to-Riches"
        />
        <PortfolioItem 
          className="project3 right"
          title="Coder's Daily Dashboard"
          staticImg="src\assets\Dashboard.png"
          gifImg="src\assets\Dashboard.png"
          shortDesc="This is a Daily Dashboard to help coders with their day"
          longDesc="Extended Description 1"
          projectLink="link-to-project-1"
        />
        <PortfolioItem
          className="project4 left"
          title="Project 1"
          staticImg="path-to-image1.jpg"
          gifImg="path-to-gif1.gif"
          shortDesc="Short Description 1"
          longDesc="Extended Description 1"
          projectLink="link-to-project-1"
        />
        <PortfolioItem
          className="project5 center"
          title="Project 1"
          staticImg="path-to-image1.jpg"
          gifImg="path-to-gif1.gif"
          shortDesc="Short Description 1"
          longDesc="Extended Description 1"
          projectLink="link-to-project-1"
        />
        <PortfolioItem right 
          className="project6 right"
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

// Component to display an individual portfolio item
function PortfolioItem({
  className,
  title,
  staticImg,
  gifImg,
  shortDesc,
  longDesc,
  projectLink,
}) {
  return (
    <div className={`portfolio-item ${className}`}>
      <h3>{title}</h3>
      <img src={staticImg} alt="Static Thumbnail" className="static-img" />
      <img src={gifImg} alt="Animated Thumbnail" className="gif-img" />
      <p className="short-description">{shortDesc}</p>
      <div className="extended-content">
        <p className="extended-description">{longDesc}</p>
        <p>Applical Links Below:</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          View Github Repositories
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
