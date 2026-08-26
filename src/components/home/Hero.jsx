import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Decorations */}
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-orbit hero-orbit-one"></div>
      <div className="hero-orbit hero-orbit-two"></div>

      {/* ========================================
          HERO CONTENT
      ======================================== */}

      <div className="hero-content">

        {/* Availability Badge */}
        <div className="hero-intro">
          <span className="hello-dot"></span>
          <span>Open to Opportunities</span>
        </div>

        {/* Main Heading */}
        <h1>
          Hi, I'm <span>Hardik Lonkar</span>
        </h1>

        {/* Professional Role */}
        <h2>
          MCA Student <span className="separator">|</span> Web Developer
        </h2>

        {/* Description */}
        <p className="hero-description">
          I build modern, responsive and user-friendly web applications
          with a strong focus on clean UI, functionality and real-world
          problem solving. I enjoy working with React, JavaScript, PHP,
          MySQL, Python and AI-powered technologies.
        </p>

        {/* Quick Highlights */}
        <div className="hero-highlights">

          <div className="hero-highlight">
            <span className="highlight-icon">💻</span>
            <div>
              <strong>Web Development</strong>
              <small>Frontend & Backend</small>
            </div>
          </div>

          <div className="hero-highlight">
            <span className="highlight-icon">⚡</span>
            <div>
              <strong>Modern UI</strong>
              <small>Responsive Design</small>
            </div>
          </div>

          <div className="hero-highlight">
            <span className="highlight-icon">🤖</span>
            <div>
              <strong>AI & ML</strong>
              <small>Exploring Intelligent Apps</small>
            </div>
          </div>

        </div>

        {/* Technology Tags */}
        <div className="hero-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML & CSS</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>Python</span>
          <span>AI / ML</span>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">

          <a href="#projects" className="hero-btn primary-btn">
            <span>View My Projects</span>
            <span className="btn-arrow">→</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn resume-btn"
          >
            <span>View Resume</span>
            <span>↗</span>
          </a>

          <a href="#contact" className="hero-btn secondary-btn">
            <span>Contact Me</span>
          </a>

        </div>

        {/* Social Links */}
        <div className="hero-socials">

          <span className="social-label">
            Let's connect
          </span>

          <a
            href="https://github.com/Hardiklonkar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>

          <span className="social-divider">•</span>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>

        </div>

      </div>


      {/* ========================================
          PROFILE SECTION
      ======================================== */}

      <div className="hero-image">

        {/* Rotating Rings */}
        <div className="profile-ring ring-one"></div>
        <div className="profile-ring ring-two"></div>
        <div className="profile-ring ring-three"></div>

        {/* Main Profile Card */}
        <div className="profile-card">

          {/* Status */}
          <div className="profile-status">
            <span></span>
            Available for Opportunities
          </div>

          {/* Profile Image */}
          <div className="profile-image-wrapper">

            <div className="image-glow"></div>

            <img
              src="/images/profile/profile.png"
              alt="Hardik Lonkar - Web Developer"
            />

          </div>

        </div>

        {/* Floating Badge - Top */}
        <div className="floating-badge badge-top">

          <span className="badge-icon">{"</>"}</span>

          <div>
            <strong>Web Developer</strong>
            <small>Building for Web</small>
          </div>

        </div>

        {/* Floating Badge - Bottom */}
        <div className="floating-badge badge-bottom">

          <span className="badge-icon">{"AI"}</span>

          <div>
            <strong>AI Enthusiast</strong>
            <small>Learning & Building</small>
          </div>

        </div>

        {/* Floating Tech Badge */}
        <div className="floating-tech">
          <span>React</span>
        </div>

      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <span className="scroll-arrow">↓</span>
      </a>

    </section>
  );
}

export default Hero;