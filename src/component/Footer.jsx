import React from "react";
import headerLogo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="brand">
          <a href="/">
            <img src={headerLogo} className="site-header" alt="Shortly logo" />
          </a>
        </div>

        <div className="links">
          <div>
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#features">Link Shortening</a>
              </li>
              <li>
                <a href="#features">Branded Links</a>
              </li>
              <li>
                <a href="#features">Analytics</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#resources">Blog</a>
              </li>
              <li>
                <a href="#resources">Developers</a>
              </li>
              <li>
                <a href="#resources">Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#company">About</a>
              </li>
              <li>
                <a href="#company">Our Team</a>
              </li>
              <li>
                <a href="#company">Careers</a>
              </li>
              <li>
                <a href="#company">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social media handles */}
          <div>
            <ul>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <img src={twitter} alt="Twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                >
                  <img src={pinterest} alt="Pinterest" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;