import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import styles 
import './Styles/AboutMe.css';
import './Styles/Portfolio.css';
import './Styles/Contact.css';
import './Styles/Resume.css';



// Import your components
import Home from "./components/Home";
import AboutMe from "./components/AboutMe"; // Assume these are separate component files
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";



function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2 className="title">Shane's Portfolio</h2>
          <nav>
            <ul className="linkList">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutme">About Me</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <footer>
          <p>Thank you for stopping by! 🙋‍♂️</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
