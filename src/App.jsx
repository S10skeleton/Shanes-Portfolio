import React, { useEffect, useRef } from 'react';
import "./Styles/Styles.css";
import screenshot1 from "./assets/screenshots/myflixscreenshot.png"; // Example image path
import video1 from "./assets/videos/EmployeeTracker.webm"; // Example video path
import screenshot2 from "./assets/screenshots/Wags.png"; // Example image path
import video2 from "./assets/videos/EmployeeTracker.webm"; 
import screenshot3 from "./assets/screenshots/Dashboard.png"; // Example image path
import video3 from "./assets/videos/EmployeeTracker.webm"; 
import screenshot4 from "./assets/screenshots/Wags.png"; // Example image path
import video4 from "./assets/videos/EmployeeTracker.webm"; 
import screenshot5 from "./assets/screenshots/Wags.png"; // Example image path
import video5 from "./assets/videos/EmployeeTracker.webm"; 
import screenshot6 from "./assets/screenshots/HQ.jpg"; // Example image path
import video6 from "./assets/videos/EmployeeTracker.webm"; 

// Function component for the 'Home' section of the website
function Home() {
  return (
    <div className="home-container">
         <p className="home-text">Welcome!</p>
    </div>
  );
}

// Function component for the 'About Me' section of the website
function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-me-page">
        <h2>About Me</h2>
        <p>Hello! I'm Shane, a versatile engineer skilled in Full Stack MERN, Python, AI prompt engineering, UI design, and fabrication/prototyping. I thrive on creating innovative solutions to advance technology for a better world.</p>
      </div>
      <div className="selfie">
        <p>Selfie</p>
      </div>
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "My Flix",
    description: "MyFlix is a custom-built streaming service designed to mirror the functionality of Netflix. Developed to cater to my personal entertainment preferences, MyFlix allows for a personalized viewing experience with a user-friendly interface, seamless video playback, and a robust library management system. This project showcases my skills in full stack development, including the use of the MERN stack (MongoDB, Express.js, React.js, Node.js), API integration, and responsive design.",
    screenshot: screenshot1,
    video: video1,
  },
  {
    id: 2,
    title: "Wags to Riches",
    description: "Wags to Riches is a comprehensive pet adoption platform designed to simplify the process of finding and adopting pets. Utilizing a web API, this application provides an up-to-date list of available dogs and cats, offering basic information for each pet. Clicking on a pet's picture navigates to a detailed page with additional information and direct links to the adoption location, streamlining the adoption process. The goal of Wags to Riches is to make it easier to find adoptable animals beyond local sources, enhancing accessibility and convenience for potential pet owners.",
    screenshot: screenshot2,
    video: video2,
  },
  {
    id: 3,
    title: "Daily Dashboard",
    description: "The Software Developer's Daily Dashboard is a single-page web application designed to streamline a developer's daily routine. It features a daily planner for scheduling events, a weather forecast for your location, and a YouTube API integration for listening to music while planning your day. Additionally, the dashboard includes an API that accesses your GitHub repositories, providing quick and easy access to your projects. This application is a comprehensive tool to enhance productivity and organization for software developers.",
    screenshot: screenshot3,
    video: video3,
  },
  {
    id: 4,
    title: "Project 4",
    description: "Project 4 description",
    screenshot: screenshot4,
    video: video4,
  },
  {
    id: 5,
    title: "Project 5",
    description: "Project 5 description",
    screenshot: screenshot5,
    video: video5,
  },
  {
    id: 6,
    title: "Smart Entertainment Command Center",
    description: "I designed and built this custom entertainment and work station from scratch, combining functionality with aesthetics. The station features a steel frame and particle board panels, ensuring both durability and stability. It is fully motorized, allowing the 65-inch TV to tilt and travel vertically from the desk to the ceiling, all controlled through a convenient app on my phone.The LED lighting system is powered by ESP32 boards and WLED, providing customizable ambient lighting. For audio, I incorporated two 12-inch subwoofers connected to a car amplifier, delivering powerful bass for movies and immersive vibrations for video games. To enhance the overall look, I wrapped the structure in carbon fiber and brushed steel vinyl wrap, while the tops are covered in neoprene for a sleek, professional finish. This setup not only allows me to work efficiently at my desk but also provides an exceptional entertainment experience for watching movies and gaming.",
    screenshot: screenshot6,
    video: video6,
  },
];

function Portfolio() {
  return (
    <div className="portfolio-page">
      <h2>My Projects</h2>
      <div className="portfolio-container">
        {projects.map((project) => (
          <div className="portfolio-item" key={project.id}>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="media-container">
              <img
                src={project.screenshot}
                alt={project.title}
                className="static-img"
              />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Function component for the Contact page
function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contacth2">Connect With Me</h1>
      <a href="mailto:S10skelton@gmail.com">✉️ Email: S10Skeleton@gmail.com</a>
      <p>📞 Phone: 406-546-6577</p>
      <a className="git" href="https://github.com/S10skeleton">
        🐈‍⬛ Github Profile: S10skeleton
      </a>
      <a
        className="link"
        href="https://www.linkedin.com/in/shane-beaman-07495627/"
      >
        🔗 Linkedin: S10skeleton
      </a>
    </div>
  );
}

// Function component for the Resume page
function Resume() {
  return (
    <div className="resume-page">
      <h3>Skills</h3>
      <div className="skills-container">
        <div className="main-column">
          <h4>Technical Skills</h4>
          <div className="sub-columns">
            <div className="sub-category">
              <h5>Full Stack Development</h5>
              <ul className="skills-list">
                <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                <li>RESTful API development</li>
                <li>GraphQL</li>
                <li>WebSockets</li>
                <li>JWT authentication</li>
              </ul>
            </div>
            <div className="sub-category">
              <h5>Front-end Development</h5>
              <ul className="skills-list">
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>React.js (Hooks, Context API, Redux)</li>
                <li>Responsive design (Bootstrap, Material-UI)</li>
                <li>Cross-browser compatibility</li>
              </ul>
            </div>
            <div className="sub-category">
              <h5>Back-end Development</h5>
              <ul className="skills-list">
                <li>Node.js, Express.js</li>
                <li>API development and integration</li>
                <li>Server-side rendering</li>
              </ul>
            </div>
            <div className="sub-category">
              <h5>Database Management</h5>
              <ul className="skills-list">
                <li>MongoDB, Mongoose</li>
                <li>SQL (MySQL, PostgreSQL)</li>
                <li>Database design and normalization</li>
              </ul>
            </div>
          </div>
          <div className="sub-columns">
            <div className="sub-category">
              <h5>DevOps and Tools</h5>
              <ul className="skills-list">
                <li>Git, GitHub, GitLab</li>
                <li>Docker, Kubernetes</li>
                <li>CI/CD pipelines (Jenkins, GitHub Actions)</li>
                <li>Cloud services (AWS, Azure, Google Cloud)</li>
              </ul>
            </div>
            <div className="sub-category">
              <h5>Robotics and Automation</h5>
              <ul className="skills-list">
                <li>Python programming</li>
                <li>ROS (Robot Operating System)</li>
                <li>Embedded systems (Arduino, Raspberry Pi)</li>
                <li>Sensor integration and control systems</li>
              </ul>
            </div>
            <div className="sub-category">
              <h5>Mechanical Engineering</h5>
              <ul className="skills-list">
                <li>CAD software (AutoCAD, SolidWorks)</li>
                <li>Welding and fabrication</li>
                <li>Mechanical design and analysis</li>
                <li>Prototyping and product development</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-column">
          <h4>Management and Soft Skills</h4>
          <div className="sub-columns">
            <div className="sub-category">
              <h5>Project Management</h5>
              <ul className="skills-list">
                <li>Agile methodologies (Scrum, Kanban)</li>
                <li>Project planning and scheduling</li>
                <li>Risk management</li>
                <li>Budgeting and cost control</li>
              </ul>
            </div>
            <div className="sub-category">
              <h5>Business Management</h5>
              <ul className="skills-list">
                <li>Business strategy and planning</li>
                <li>Financial management</li>
                <li>Marketing and sales strategies</li>
                <li>Customer relationship management</li>
              </ul>
            </div>
          </div>
          <div className="sub-columns">
            <div className="sub-category">
              <h5>Team Leadership</h5>
              <ul className="skills-list">
                <li>Team building and motivation</li>
                <li>Conflict resolution</li>
                <li>Performance management</li>
                <li>Training and mentoring</li>
              </ul>
            </div>
            <div className="sub-category">
              <h5>Personal Attributes</h5>
              <ul className="skills-list">
                <li>Punctuality and reliability</li>
                <li>Honesty and integrity</li>
                <li>Strong work ethic</li>
                <li>Independent working and self-starting</li>
                <li>Excellent problem-solving skills</li>
                <li>Creative and out-of-the-box thinking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
        <h2 className="title">Shane Beaman</h2>
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
        <p>Thank you for stopping by!</p>
      </footer>
    </div>
  );
}

export default App;