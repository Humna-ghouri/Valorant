import React from 'react';
import './Collisions.css'; // Link to CSS file for styling

const Collisions = () => {
  return (
    <section className="collisions-section">
      <div className="collisions-content">
        <div className="collisions-header">
          <h1>Experience the Collisions</h1>
          <p>Get ready for a thrilling gameplay experience with new game modes!</p>
        </div>
        <div className="collisions-body">
          <div className="collisions-card">
            <img src="\accets\card1.jpg" alt="Collision 1" />
            <h2>Game Mode 1</h2>
            <p>Experience intense battles in the new mode.</p>
            <button className="collisions-btn">Learn More</button>
          </div>
          <div className="collisions-card">
            <img src="\accets\card2.jpg" alt="Collision 2" />
            <h2>Game Mode 2</h2>
            <p>Explore the new strategies and win big!</p>
            <button className="collisions-btn">Learn More</button>
          </div>
          <div className="collisions-card">
            <img src="\accets\card3.jpg" alt="Collision 3" />
            <h2>Game Mode 3</h2>
            <p>Unlock rewards and enjoy exciting challenges!</p>
            <button className="collisions-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collisions;
