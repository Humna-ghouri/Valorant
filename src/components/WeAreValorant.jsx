import React from 'react';
import './WeAreValorant.css'; // Link to the CSS file for styling
// import valorantImage from '\accets\Agents.jpg'; // Adjust the path to your image

const WeAreValorant = () => {
  return (
    <section className="we-are-valorant">
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="section-title">WE ARE VALORANT</h2>
          <h3 className="section-subtitle">DEFY THE LIMITS</h3>
          <p className="section-description">
            Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
          </p>
          <button className="learn-btn">LEARN THE GAME</button>
        </div>
        <div className="image-content">
        <img src="/accets/character.jpg" alt="Agents" />
        </div>
      </div>
    </section>
  );
}

export default WeAreValorant;

