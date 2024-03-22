import React, { useState } from "react";
import "../Styles/Contact.css";

// Function component for the Contact page
function Contact() {
  return (
    // Container for the entire Contact page content
    <div className="contact-page">
      {/* // Header for the Contact page */}
      <h1 className="contacth2">Feel Free to Contact Me 🙂</h1>

      {/* // Mailto link for direct email contact */}
      <a href="mailto:S10skelton@gmail.com">✉️ Email: S10Skeleton@gmail.com</a>

      {/* // Displaying the phone number for contact */}
      <p>📞 Phone: 406-546-6577</p>

      {/* // Link to the Github profile */}
      <a className="git" href="https://github.com/S10skeleton">
        🐈‍⬛ Github Profile: S10skeleton
      </a>

      {/* // Link to the LinkedIn profile */}
      <a className="link" href="https://www.linkedin.com/in/shane-beaman-07495627/">
        🔗 Linkedin: S10skeleton
      </a>
    </div>
  );
}

export default Contact;
