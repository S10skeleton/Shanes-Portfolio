import React from "react";
import "../Styles/AboutMe.css";

// Function component for the 'About Me' section of the website
function AboutMe() {
  return (
    // Container for the 'About Me' section, using Flexbox for layout
    <div className="about-container">
      {/* // The 'About Me' description part of the section  */}
      <div className="about-me-page">
        <h2>About Me</h2>
        <p>This section will contain information about me.</p>
      </div>
      {/* // A placeholder for the selfie or image representation  */}
      <div className="selfie">
        <p>Selfie</p>
      </div>
    </div>
  );
}

export default AboutMe;
