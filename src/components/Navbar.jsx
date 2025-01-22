// import React from 'react';
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//     <div className="navbar-logo">
//     <img src="\accets\ValorantLogo.png" alt="Valorant Logo" className="valorant-logo" />
//     <img src="\accets\RiotLogo.png" alt="Riot Logo" className="riot-logo" />
//     </div>
//     <div className="navbar-links">
//       <a href="#game">Game</a>
//       <a href="#media">Media</a>
//       <a href="#news">News</a>
//       <a href="#leaderboards">Leaderboards</a>
//       <a href="#support">Support</a>
//     </div>
//     <div className="navbar-action">
//       <a href="#play" className="play-button">
//         Play Free
//       </a>
//     </div>
//   </nav>
// );
// };
// export default Navbar
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/accets/RiotLogo.png" alt="Riot Logo" className="logo riot" />
        <img src="/accets/ValorantLogo.png" alt="Valorant Logo" className="logo valorant" />

      </div>
      <div className="navbar-links">
        <div className="dropdown">
          <a href="#game" className="nav-link">Game</a>
          <div className="dropdown-content">
            <a href="#agents">Agents</a>
            <a href="#maps">Maps</a>
            {/* <a href="/Arsenal">Arsenal</a> */}
            <Link to="./components/Arsenal">Arsenal</Link>
            <Link to="./components/Users">Users</Link>

            {/* <a href="#premier">Premier</a> */}
          </div>
        </div>
        <Link to="./components/Media">Media</Link>

        {/* <a href="#media" className="nav-link">Media</a> */}
        <a href="#news" className="nav-link">News</a>
        <a href="#leaderboards" className="nav-link">Leaderboards</a>
        <a href="#support" className="nav-link">Support</a>
      </div>
      <div className="navbar-action">
        <a href="#play" className="play-button">Play Free</a>
      </div>
    </nav>
  );
}

export default Navbar;
