
import headerLogo from "../assets/images/logo.svg";

const Header = () => {

    return(

        <header className="header">
            <div className="spacing">
                <div className="logo">
                    <a href="/">
                        <img src={headerLogo} className="site-header" alt="Room logo" />
                    </a>
                </div>

                {/* Nav Links */}
                <nav>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </nav>
            </div>

            {/* Nav Btn at the rght */}
            <div className="auth">
                <button className="login">Login</button>
                <button className="signup">Sign Up</button>
            </div>
        </header>

    )
}

export default Header;