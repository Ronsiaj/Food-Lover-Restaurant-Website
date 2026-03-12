import React from "react";
import { Container } from "reactstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>

        {/* Logo */}
        <div className="footer-logo">
          <span className="heart">❤</span>
          <h2>Food Lover</h2>
        </div>

        {/* Menu Links */}
        <div className="footer-menu">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Foods</a>
          <a href="#">Contact</a>
          <a href="#">Location</a>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>

      </Container>
    </footer>
  );
};

export default Footer;