import React from "react";
import "../Styles/Home.css";

// Function component for the Home page
function Home() {
  return (
    // Container for the Home page content
    <div className="home-page">
      {/* // Section for the welcome message */}
      <div className="welcome">
        <h2>Welcome 🙋‍♂️</h2>
        <p>
          Outgoing problem solver specializing in full stack, <br></br> software
          and mechanical engineering.
        </p>
      </div>
      {/* // Placeholder section for a personal picture or avatar */}
      <div className="self">
        <p>My picture </p>
      </div>
    </div>
  );
}

export default Home;
