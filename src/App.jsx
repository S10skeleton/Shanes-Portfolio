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
import screenshot6 from "./assets/screenshots/Wags.png"; // Example image path
import video6 from "./assets/videos/EmployeeTracker.webm"; 

// Function component for the 'Home' section of the website
function Home() {
  return (
    <div className="home-container">
         <p className="home-text">Welcome to my portfolio website!</p>
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
    title: "Project 6",
    description: "Project 6 description",
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
              <video className="gif-img" loop muted>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
      <h1 className="contacth2">Feel Free to Contact Me 🙂</h1>
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
      <ul className="Skills">
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
            <video id="bg-video" autoPlay loop muted>
        <source src="src\assets\videos\background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
        <p>Thank you for stopping by! 🙋‍♂️</p>
      </footer>
    </div>
  );
}

export default App;