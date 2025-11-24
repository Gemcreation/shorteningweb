
import heroImg from "../assets/images/illustration-working.svg";

const HeroSection = () => {

    return(
        <section className="hero">
          <div className="hero-content">
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed <br></br> insights on how your links are performing.
            </p>
            <button>Get Started</button>
          </div>
    
          {/* Illustration on the right */}
          <div className="hero-image">
            <img src={heroImg} alt="Working Illustration" />
          </div>
        </section>
    );
}

export default HeroSection;