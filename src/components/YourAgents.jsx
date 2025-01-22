import React from 'react';
import './YourAgents.css'; // Link to the CSS file for styling

const YourAgents = () => {
  return (
    <section className="your-agents">
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="agents-title">YOUR AGENTS</h2>
          <p className="agents-description">
            Creativity is your greatest weapon.
            <br />
            More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.
          </p>
          <button className="view-all-btn">VIEW ALL AGENTS</button>
        </div>
      </div>
    </section>
  );
}

export default YourAgents;
