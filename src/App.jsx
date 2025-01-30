import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Collisions from './components/Collisions';
import CollisionEpisode from './components/CollisionEpisode';
import WeAreValorant from './components/WeAreValorant';
import YourAgents from './components/YourAgents';
import YourMaps from './components/YourMaps';
import Footer from './components/Footer';
import Arsenal from './components/Arsenal';
import Users from './components/Users'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collisions" element={<Collisions />} />
        <Route path="/collision-episode" element={<CollisionEpisode />} />
        <Route path="/we-are-valorant" element={<WeAreValorant />} />
        <Route path="/your-agents" element={<YourAgents />} />
        <Route path="/your-maps" element={<YourMaps />} />
        <Route path="components/arsenal" element={<Arsenal />} />
        <Route path="components/Users" element={<Users />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
