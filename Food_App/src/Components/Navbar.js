import React, { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Left Menu */}
      <div className={`nav-left ${menuOpen ? "active" : ""}`}>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">MENUS</a>
        <a href="#">OFFERS</a>
      </div>

      {/* Logo */}
      <div className="logo">
        <div className="logo-top">
          <span className="heart">❤</span>
          <h2>Food Lover</h2>
        </div>
        <span className="tagline">Restaurant</span>
      </div>

      {/* Right Menu */}
      <div className={`nav-right ${menuOpen ? "active" : ""}`}>
        <a href="#">GALLERY</a>
        <a href="#">CONTACT</a>
        <a href="#">BLOG</a>
      </div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
};

export default Navbar;