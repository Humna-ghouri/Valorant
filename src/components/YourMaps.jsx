import React from "react";
import "./YourMaps.css";



function YourMaps() {
  return (
    <section className="maps-section">
      <div className="content">
        <h2>YOUR MAPS</h2>
        <h3>FIGHT AROUND THE WORLD</h3>
        <p>
          Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.
        </p>
        <button>VIEW ALL MAPS</button>
      </div>
      <div className="image">
        <img src="/accets/yourMaps.avif" alt="Maps" />
      </div>
    </section>
  );
}

export default YourMaps;
