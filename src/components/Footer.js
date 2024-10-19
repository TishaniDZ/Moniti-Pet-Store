import React from 'react';
import '../styles/footer.css'; // Link to your footer styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="frame-28">
        <div className="frame-23">
          <h2>Register now so you don't miss our programs</h2>
          <div className="frame-24">
            <input type="text" placeholder="Type something here!" className="footer-input" />
            <button className="button-l">Click here</button>
          </div>
        </div>

        <div className="frame-27">
          <div className="frame-2">
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">Category</a>
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Contact</a>
          </div>

          <div className="social-icons">
            <div className="icon facebook-icon"></div>
            <div className="icon twitter-icon"></div>
            <div className="icon instagram-icon"></div>
            <div className="icon youtube-icon"></div>
          </div>
        </div>

        <div className="frame-26">
          <p>&copy; {new Date().getFullYear()} Monito Pet Store. All rights reserved.</p>
          <div>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

