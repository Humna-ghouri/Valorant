// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // for social media icons
import "./Footer.css";


function Footer() {
    return (
        <footer>
        <div className="footer-top">
          <div className="footer-link-group">
            <h3>GAME</h3>
            <ul>
              <li><a href="#">Play Now</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h3>SUPPORT</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Support Articles</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h3>LEGAL</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">EULA</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="footer-logo">
            <img src="/accets/RiotLogo.png" alt="Riot Games Logo" />
          </div>
        </div>
  
        <div className="footer-bottom">
          <div className="social-media">
            <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="#" target="_blank"><i className="fab fa-youtube"></i></a>
          </div>
          <p>&copy; 2024 Riot Games, Inc. All rights reserved.</p>
        </div>
      </footer>
    );  }
  
  export default Footer;
  