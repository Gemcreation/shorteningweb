

const Footer = () => {

    return(
        <footer className="footer">
          <div className="cta">
            <h2>Boost your links today</h2>
            <button>Get Started</button>
          </div>
    
          <div className="footer-links">
            <div className="brand">Shortly</div>
    
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
            </div>
          </div>
        </footer>
    );
}

export default Footer;