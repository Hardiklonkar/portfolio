import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h1>
          Hi, I'm <span>Hardik Lonkar</span>
        </h1>

        <h2>
          Full Stack Developer | AI Enthusiast
        </h2>

        <p>
          MCA Student | Java | Python | React | PHP | MySQL | AI & Machine Learning
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>

        </div>

      </div>


      <div className="hero-image">

        <img
          src="/images/profile/profile.png"
          alt="Hardik Profile"
        />

      </div>

    </section>
  );
}

export default Hero;