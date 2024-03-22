import React from 'react';
import '../Styles/Resume.css';

// Function component for the Resume page
function Resume() {
  return (
        // Container for the Resume page content
    <div className='resume-page'>
            {/* Proficiencies or Skills Section */}
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
            {/* Resume Download Link */}
            <a href="path-to-your-resume.pdf" download>
        Download My Resume
      </a>
      <p>PDF Placeholder</p>
      



    </div>
  );
}

export default Resume;
