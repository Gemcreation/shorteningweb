
import headerLogo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {

    return(
        <footer className="footer">
          <div className="footer-links">
                <div className="brand">
                    <a href="/">
                        <img src={headerLogo} className="site-header" alt="Room logo" />
                    </a>
                </div>
    
            <div className="links">
              <div>
                <h4>Features</h4>
                <ul>
                  <li>Link Shortening</li>
                  <li>Branded Links</li>
                  <li>Analytics</li>
                </ul>
              </div>
    
              <div>
                <h4>Resources</h4>
                <ul>
                  <li>Blog</li>
                  <li>Developers</li>
                  <li>Support</li>
                </ul>
              </div>
    
              <div>
                <h4>Company</h4>
                <ul>
                  <li>About</li>
                  <li>Our Team</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>
              {/* socail media handles */}
              <div>
                <ul>
                  <li>
                    <a href=""><img src={facebook} alt="facebook" /></a>
                  </li>
                  <li>
                    <a href=""><img src={twitter} alt="twitter" /></a>
                  </li>
                  <li>
                    <a href=""><img src={pinterest} alt="pinterest" /></a>
                  </li>
                  <li>
                    <a href=""><img src={instagram} alt="instagram" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    );
}

export default Footer;