import React, { useState, useEffect } from "react";
import './Styles/Styles.css';

// Function component for the 'Home' section of the website
function Home() {
  const [highFiveCount, setHighFiveCount] = useState(
    parseInt(localStorage.getItem("highFiveCount")) || 6
  );
  const [buttonClickCount, setButtonClickCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("highFiveCount", highFiveCount);
  }, [highFiveCount]);

  const handleClick = () => {
    setHighFiveCount(highFiveCount + 1);
    setButtonClickCount(buttonClickCount + 1);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Shane Beaman</h1>
      <p className="home-text">Welcome to my portfolio website!</p>
      <button onClick={handleClick} className="high-five-button">
        Give me a High-Five! 🙌
      </button>
      <p className="high-five-count">
        You have given me {highFiveCount} high-fives!
      </p>
      <p className="button-click-count">
        Button clicked {buttonClickCount} times.
      </p>
    </div>
  );
}

// Function component for the 'About Me' section of the website
function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-me-page">
        <h2>About Me</h2>
        <p>This section will contain information about me.</p>
      </div>
      <div className="selfie">
        <p>Selfie</p>
      </div>
    </div>
  );
}

// Function component for the Portfolio page
function Portfolio() {
  return (
    <div className="portfolio-page">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Project 1 description</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Project 2 description</p>
      </div>
    </div>
  );
}

// Function component for the Contact page
function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contacth2">Feel Free to Contact Me 🙂</h1>
      <a href="mailto:S10skelton@gmail.com">✉️ Email: S10Skeleton@gmail.com</a>
      <p>📞 Phone: 406-546-6577</p>
      <a className="git" href="https://github.com/S10skeleton">
        🐈‍⬛ Github Profile: S10skeleton
      </a>
      <a className="link" href="https://www.linkedin.com/in/shane-beaman-07495627/">
        🔗 Linkedin: S10skeleton
      </a>
    </div>
  );
}

// Function component for the Resume page
function Resume() {
  return (
    <div className='resume-page'>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Database Management (SQL, MongoDB)</li>
        <li>Version Control (Git, GitHub)</li>
        <li>Other skills...</li>
      </ul>
      <h2>My Resume</h2>
      <a href="path-to-your-resume.pdf" download>
        Download My Resume
      </a>
      <p>PDF Placeholder</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="title">Shane's Portfolio</h2>
        <nav>
          <ul className="linkList">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutme">About Me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <p>Designed and Developed by Shane Beaman</p>
        <p>Copyright © 2024</p>
        <p>Thank you for stopping by! 🙋‍♂️</p>
      </footer>
    </div>
  );
}

export default App;
