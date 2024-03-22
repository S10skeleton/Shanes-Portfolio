import React, { useState, useEffect } from "react";
import "../Styles/Home.css";

function Home() {
  const [highFiveCount, setHighFiveCount] = useState(
    parseInt(localStorage.getItem("highFiveCount")) || 6
  );
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [showSorryMessage, setShowSorryMessage] = useState(false);
  const [showGreedyMessage, setShowGreedyMessage] = useState(false); // New state for the greedy message

  const handleHighFive = () => {
    const newButtonClickCount = buttonClickCount + 1;
    setButtonClickCount(newButtonClickCount);

    if (newButtonClickCount === 1) {
      const newHighFiveCount = highFiveCount + 1;
      setHighFiveCount(newHighFiveCount);
      localStorage.setItem("highFiveCount", newHighFiveCount.toString());
    } else if (newButtonClickCount === 2) {
      setShowSorryMessage(true);
      setTimeout(() => {
        setShowSorryMessage(false);
      }, 3500);
    } else if (newButtonClickCount === 3) {
      setShowGreedyMessage(true); // Show greedy message
      setTimeout(() => {
        setShowGreedyMessage(false);
      }, 5000);
    }
  };

  useEffect(() => {
    const storedCount = localStorage.getItem("highFiveCount");
    if (storedCount) {
      setHighFiveCount(parseInt(storedCount));
    }
  }, []);

  return (
    <div className="home-page">
      <div className="welcome">
        <h2>Welcome! How About A High-Five? 👉 
          {buttonClickCount < 3 && ( // Hide button after 3 clicks
            <button onClick={handleHighFive} className="high-five-button">🖐️</button>
          )}
        </h2>
        <p>{highFiveCount} High-Fives!</p>
        {showSorryMessage && <p>Sorry, only one high-five per session!</p>}
        {showGreedyMessage && <p>Alright Mr Greedy, no more high-fives for you!</p>}
      </div>
            {/* // Placeholder section for a personal picture or avatar */}
            <div className="self">
        <p>My picture </p>
      </div>
    </div>
  );
}

export default Home;
