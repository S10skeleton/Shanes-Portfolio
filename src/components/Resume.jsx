import React from 'react';

function Resume() {
  return (
    <div className='resume-page'>
      <h2>My Resume</h2>
      <p>Here you can view and download my resume.</p>
      
      {/* Resume Download Link */}
      <a href="path-to-your-resume.pdf" download>
        Download My Resume
      </a>

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
    </div>
  );
}

export default Resume;
