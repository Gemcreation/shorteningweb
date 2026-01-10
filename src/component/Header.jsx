import React, { useState } from "react";
import headerLogo from "../assets/images/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="spacing">
        <div className="logo">
          <a href="/">
            <img src={headerLogo} className="site-header" alt="Shortly logo" />
          </a>
        </div>

        {/* Nav Links */}
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <a href="#features" onClick={closeMenu}>Features</a>
            </li>
            <li>
              <a href="#pricing" onClick={closeMenu}>Pricing</a>
            </li>
            <li>
              <a href="#resources" onClick={closeMenu}>Resources</a>
            </li>
          </ul>

          {/* Auth buttons for mobile */}
          <div className="auth-mobile">
            <button className="login" onClick={closeMenu}>Login</button>
            <button className="signup" onClick={closeMenu}>Sign Up</button>
          </div>
        </nav>
      </div>

      {/* Nav Btn at the right - Desktop */}
      <div className="auth">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>

      {/* Hamburger menu button */}
      <button
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;