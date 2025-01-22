// import { useState } from 'react'
// import './App.css'
// import Navbar from './components/Navbar'
// import HomePage from './components/HomePage'
// import Collisions from './components/Collisions'
// import CollisionEpisode from './components/CollisionEpisode'
// import WeAreValorant from './components/WeAreValorant'
// import YourAgents from './components/YourAgents'
// import YourMaps from './components/YourMaps'
// import Footer from './components/footer'
// import Arsenal from './components/Arsenal'
// // ROUTER DOM THINGS 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//     return (
//       <>
//         <Navbar />
//         <HomePage />
//         <Collisions />
//         <CollisionEpisode/>
//          <WeAreValorant />
//         <YourAgents />
//         <YourMaps/>
//         <Footer/>
//         <Arsenal/>
//         {/* ROUTER DOM THINGS  */}
//         <Router>
//       <Navbar />
//       <Routes>
//         <Route path="./components/Arsenal" element={<Arsenal />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//       </>

//     );
//   }
  
  
// export default App
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Collisions from './components/Collisions';
import CollisionEpisode from './components/CollisionEpisode';
import WeAreValorant from './components/WeAreValorant';
import YourAgents from './components/YourAgents';
import YourMaps from './components/YourMaps';
import Footer from './components/footer';
import Arsenal from './components/Arsenal';
import Users from './components/Users'
// import Media from './components/Media';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define all routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/collisions" element={<Collisions />} />
        <Route path="/collision-episode" element={<CollisionEpisode />} />
        <Route path="/we-are-valorant" element={<WeAreValorant />} />
        <Route path="/your-agents" element={<YourAgents />} />
        <Route path="/your-maps" element={<YourMaps />} />
        <Route path="components/arsenal" element={<Arsenal />} />
        <Route path="components/Users" element={<Users />} />

        {/* <Route path="components/media" element={<Media />} /> */}
        {/* <Media/> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
