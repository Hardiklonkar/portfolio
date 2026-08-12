import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Decorations */}
      <div className="hero-orbit hero-orbit-one"></div>
      <div className="hero-orbit hero-orbit-two"></div>

      <div className="hero-content">

        <div className="hero-intro">
          <span className="hello-dot"></span>
          <span>Welcome to my portfolio</span>
        </div>

        <h1>
          Hi, I'm <span>Hardik Lonkar</span>
        </h1>

        <h2>
          Web Developer <span className="separator">|</span> AI Enthusiast
        </h2>

        <p className="hero-description">
          MCA student and passionate developer focused on building modern,
          responsive and user-friendly web applications. I work with
          frontend, backend, databases, APIs, Python, AI, Machine Learning
          and Data Analytics technologies.
        </p>

        {/* Technology Tags */}
        <div className="hero-tags">
          <span>Java</span>
          <span>Python</span>
          <span>React</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>AI / ML</span>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">

          <a href="#projects" className="hero-btn primary-btn">
            View Projects
            <span>→</span>
          </a>

          <a href="#contact" className="hero-btn secondary-btn">
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="hero-btn resume-btn"
          >
            Download Resume
            <span>↓</span>
          </a>

        </div>

      </div>

      {/* Profile Section */}
      <div className="hero-image">

        <div className="profile-ring ring-one"></div>
        <div className="profile-ring ring-two"></div>

        <div className="profile-card">

          <div className="profile-status">
            <span></span>
            Available for Opportunities
          </div>

          <img
            src="/images/profile/profile.png"
            alt="Hardik Lonkar"
          />

        </div>

        <div className="floating-badge badge-top">
          <span>💻</span>
          Web Developer
        </div>

        <div className="floating-badge badge-bottom">
          <span>🤖</span>
          AI Enthusiast
        </div>

      </div>

    </section>
  );
}

export default Hero;