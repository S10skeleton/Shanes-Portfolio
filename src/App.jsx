import React, { useEffect, useRef, useState } from "react";
import "./Styles/Styles.css";
import screenshot1 from "./assets/screenshots/myflixscreenshot.png"; // Example image path
import video1 from "./assets/videos/EmployeeTracker.webm"; // Example video path
import screenshot2 from "./assets/screenshots/Wags.png"; // Example image path
import video2 from "./assets/videos/EmployeeTracker.webm";
import screenshot3 from "./assets/screenshots/Dashboard.png"; // Example image path
import video3 from "./assets/videos/EmployeeTracker.webm";
import screenshot4 from "./assets/screenshots/ComingSoon.jpg"; // Example image path
import video4 from "./assets/videos/EmployeeTracker.webm";
import screenshot5 from "./assets/screenshots/Fiero2.jpg"; // Example image path
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
      <div className="selfie">
        <img src="/Me2.png" alt="selfie" />
      </div>
      <div className="about-me-page">
        <h2>About Me</h2>
        <p>
          As a seasoned entrepreneur with 15 years of experience, I specialize
          in creating innovative solutions tailored to clients' needs. My
          expertise spans CAD design, coding, 3D modeling/printing, physical
          fabrication/prototyping, and Agile methodology. Driven by a passion
          for combining leadership, engineering, and coding to deliver
          high-quality, reliable results. I am committed to creativity,
          collaboration, and exceeding customer expectations. Always eager to
          learn new technologies, I strive to achieve what others deem
          impossible.
        </p>
      </div>
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "My Flix",
    description:
      "MyFlix is a custom-built streaming service designed to mirror the functionality of Netflix. Developed to cater to my personal entertainment preferences, MyFlix allows for a personalized viewing experience with a user-friendly interface, seamless video playback, and a robust library management system. This project showcases my skills in full stack development, including the use of the MERN stack (MongoDB, Express.js, React.js, Node.js), API integration, and responsive design.",
    screenshot: screenshot1,
    video: video1,
    link: "https://myflix.mov",
  },
  {
    id: 2,
    title: "Wags to Riches",
    description:
      "Wags to Riches is a comprehensive pet adoption platform designed to simplify the process of finding and adopting pets. Utilizing a web API, this application provides an up-to-date list of available dogs and cats, offering basic information for each pet. Clicking on a pet's picture navigates to a detailed page with additional information and direct links to the adoption location, streamlining the adoption process. The goal of Wags to Riches is to make it easier to find adoptable animals beyond local sources, enhancing accessibility and convenience for potential pet owners.",
    screenshot: screenshot2,
    video: video2,
    link: "https://github.com/S10skeleton/Wags-to-Riches",
  },
  {
    id: 3,
    title: "Daily Dashboard",
    description:
      "The Software Developer's Daily Dashboard is a single-page web application designed to streamline a developer's daily routine. It features a daily planner for scheduling events, a weather forecast for your location, and a YouTube API integration for listening to music while planning your day. Additionally, the background image changes based on the time of day, the dashboard includes an API that accesses your GitHub repositories, providing quick and easy access to your projects. This application is a comprehensive tool to enhance productivity and organization for software developers.",
    screenshot: screenshot3,
    video: video3,
    link: "https://daydash.netlify.app/",
  },
  {
    id: 4,
    title: "VoltMon Self-Contained Voltage Monitoring Devices",
    description:
      "I developed self-contained voltage monitoring devices using Arduino components to track the voltage of my motorcycle, jet ski, ATV, camper, truck, and car. The setup includes two alligator leads connecting the battery terminals to the voltage meter board. A buck converter reduces the 12-volt feed to 5 volts for the ESP32 module. This voltage meter sends the current vehicle voltage via the ESP32 WiFi board to a custom app on my phone and smart home server, integrated with the Home Assistant OS. By implementing a sleep and awake function, I reduced the parasitic draw from the device to 26.85 μW, ensuring minimal battery drain.",
    screenshot: screenshot4,
    video: video4,
  },
  {
    id: 5,
    title: "Apocalypse Auto",
    description:
      "I own and operate Apocalypse Auto, an automotive design and fabrication company specializing in Mad Max-themed and apocalypse-ready vehicles. Our YouTube channel, also named Apocalypse Auto, showcases our unique builds and the adventures we embark on as a business. One notable project was collaborating with Discovery Channel producers to create a pilot and six episodes, although the series was unfortunately canceled midway. Despite slowing down our major shop projects and YouTube content due to alternate career directions, I remain active in the business. Featured here is my heavily modified 1987 Pontiac Fiero, transformed into an off-road buggy, which stands as my first and favorite vehicle.",
    screenshot: screenshot5,
    video: video5,
    link: "https://youtube.com/apocalypseauto",
  },
  {
    id: 6,
    title: "Smart Entertainment Command Center",
    description:
      "I designed and built this custom entertainment and work station from scratch, combining functionality with aesthetics. The station features a steel frame and particle board panels, ensuring both durability and stability. It is fully motorized, allowing the 65-inch TV to tilt and travel vertically from the desk to the ceiling, all controlled through a convenient app on my phone.The LED lighting system is powered by ESP32 boards and WLED, providing customizable ambient lighting. For audio, I incorporated two 12-inch subwoofers connected to a car amplifier, delivering powerful bass for movies and immersive vibrations for video games. To enhance the overall look, I wrapped the structure in carbon fiber and brushed steel vinyl wrap, while the tops are covered in neoprene for a sleek, professional finish. This setup not only allows me to work efficiently at my desk but also provides an exceptional entertainment experience for watching movies and gaming.",
    screenshot: screenshot6,
    video: video6,
  },
  {
    id: 8,
    title: "Social Network API",
    description:
      "Social Network API is a sophisticated backend application engineered to simulate the data management of a social network using a NoSQL database. This API-driven solution allows users to share their thoughts, react to their friends' posts, and manage their friends list, all through a set of well-defined endpoints. The API supports essential social networking features such as creating, reading, updating, and deleting user-generated content, along with the ability to react to and comment on friends' posts. Additionally, it facilitates dynamic friend list management, enabling users to send, accept, and remove friend requests seamlessly. This project highlights my expertise in backend development, API design, and database management, showcasing my ability to build scalable and efficient data-driven applications that cater to real-world social networking requirements.",
    link: "https://github.com/S10skeleton/Shanes-Social-Network-API",
  },
  {
    id: 7,
    title: "Housing Price Web Scraper",
    description:
      "The Housing Price Web Scraper is a Python-based tool designed to extract real estate listing data from online sources and present it in an easy-to-read spreadsheet format. Using requests and BeautifulSoup, this application fetches and parses HTML content to collect housing prices and addresses, which are then stored in an Excel file. The script includes robust error handling and can be customized to scrape different websites and additional data fields, making it versatile for various real estate sources. Ideal for real estate agents, homebuyers, and market analysts, this project showcases my proficiency in web scraping, data manipulation, and creating practical, data-driven solutions.",
  },
  {
    id: 9,
    title: "Python Movie Organizer",
    description:
      "I developed a robust Python program designed to streamline the process of populating a movie database. This application takes a text list of movies and utilizes the OMDb API to fetch comprehensive details such as descriptions, release dates, directors, genres, and actors. By automating the data retrieval process, the program ensures accuracy and consistency, eliminating the need for manual data entry. Once the data is collected, the program processes and converts it into a well-structured SQL seed file, optimized for seamless injection into a SQL database. This not only significantly reduces the time and effort required to manage movie data but also enhances the overall quality and scalability of the database. The project showcases my proficiency in Python, API integration, and database management, demonstrating my ability to create efficient and reliable data processing solutions.",
    link: "https://github.com/S10skeleton/Movie-Organizer",
  },
];

function Portfolio() {
  return (
    <div className="portfolio-page">
      <h2>My Projects</h2>
      <div className="portfolio-container">
        {projects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function PortfolioItem({ project }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div className="portfolio-item">
      <h3>{project.title}</h3>
      <p className="project-description">
        {showFullDescription
          ? project.description
          : `${project.description.substring(0, 170)}...`}
        <span className="more-link" onClick={toggleDescription}>
          {showFullDescription ? " Show less" : " Show more..."}
        </span>
      </p>
      <div className="media-container">
        <img src={project.screenshot} className="static-img" />
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-button"
          >
            Application
          </a>
        )}
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
                <li>CAD software (AutoCAD, Fusion 360)</li>
                <li>Welding and fabrication</li>
                <li>Mechanical design and analysis</li>
                <li>Prototyping and product development</li>
                <li>Material Science</li>
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
      <div className="resume">
        <h2>My Resume</h2>
        <a href="/resume2.pdf" download>
          Click to Download PDF
        </a>
        <div className="pdf-container">
          <iframe
            src="/resume2.pdf"
            title="Resume"
            frameBorder="0"
            scrolling="yes"
          ></iframe>
        </div>
      </div>
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
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="back-to-top"
      >
        ↑ Back to Top
      </button>
    </div>
  );
}

export default App;
