import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-info">
            <h1>Cris Miro</h1>
            <p>Based in Barcelona</p>
        </div>
        <div className="footer-contact">
            <h3>Contact Me</h3>
            <p>And let's get down to work</p>
        </div>
        <div className="footer-sns">
            <div className="design-by">
                Design By Cris
            </div>
            <div className="sns-links">
                <a href="/#" target="_blank">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
                <a href="/#" target="_blank">
                    <i className="fab fa-twitter twitter"></i>
                </a>
                <a href="/#" target="_blank">
                    <i className="fab fa-facebook facebook"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;