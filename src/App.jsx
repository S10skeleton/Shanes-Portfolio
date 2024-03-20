import {useState} from 'react';
import './App.css';

function AboutMe() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h2>About Me</h2>
      <p>This section will contain information about me.</p>
    </div>
  );
}

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <p>This section will showcase my projects.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>This section will have a contact form.</p>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>This section will include my resume and skills.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
      </main>
      <footer>
        <p>Footer content here.</p>
      </footer>
    </div>
  );
}

export default App;
