

// // export default HomePage;
// import React from "react";
// import "./HomePage.css";

// const HomePage = () => {
//   return (
//     <header className="hero">
//       <div className="hero-content">
//         <h1 className="hero-title">Play Valorant</h1>
//         <p className="hero-subtitle">
//           A 5v5 character-based tactical shooter from Riot Games.
//         </p>
//         <a href="#play" className="cta-button">
//           Play Free
//         </a>
//       </div>
//       {/* Video background */}
//       <div className="video-container">
//         <video autoPlay muted loop className="background-video">
//           <source src="/accets/ValorantVedio.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </header>
//   );
// };

// export default HomePage;
// HomePage.js
import React from "react";
import "./HomePage.css";
import Collisions from './Collisions';
import CollisionEpisode from './CollisionEpisode';
import WeAreValorant from './WeAreValorant';
import YourAgents from './YourAgents';
import YourMaps from './YourMaps';

const HomePage = () => {
  return (
    <div>
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Play Valorant</h1>
          <p className="hero-subtitle">
            A 5v5 character-based tactical shooter from Riot Games.
          </p>
          <a href="#play" className="cta-button">
            Play Free
          </a>
        </div>
       <div className="video-container">
         <video autoPlay muted loop className="background-video">
         <source src="/accets/ValorantVedio.mp4" type="video/mp4" />
         Your browser does not support the video tag.
        </video>
      </div>
      </header>

      {/* Additional Components Section */}
      <main className="main">
        <Collisions />
        <CollisionEpisode />
        <WeAreValorant />
        <YourAgents />
        <YourMaps />
      </main>
    </div>
  );
};

export default HomePage;