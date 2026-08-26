import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ========================================
            BRAND
        ======================================== */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <span>&lt;</span>
            Hardik
            <span>/&gt;</span>
          </a>

          <p className="footer-tagline">
            Web Developer building modern, responsive
            and user-focused web applications.
          </p>

          <div className="footer-role">
            <span className="role-dot"></span>
            Open to Opportunities
          </div>

          <p className="footer-location">
            📍 Chhatrapati Sambhajinagar, Maharashtra
          </p>

        </div>


        {/* ========================================
            QUICK LINKS
        ======================================== */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <div className="footer-nav">

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#education">Education</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#certificates">Certificates</a>

            <a href="#resume">Resume</a>

            <a href="#contact">Contact</a>

          </div>

        </div>


        {/* ========================================
            CONNECT
        ======================================== */}

        <div className="footer-section">

          <h3>Connect With Me</h3>

          <div className="footer-socials">

            <a
              href="https://github.com/Hardiklonkar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">{"</>"}</span>
              <span>GitHub</span>
              <span className="social-arrow">↗</span>
            </a>


            <a
              href="https://www.linkedin.com/in/hardik-lonkar-18446296"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">in</span>
              <span>LinkedIn</span>
              <span className="social-arrow">↗</span>
            </a>


            <a
              href="mailto:lonkarhardik@gmail.com"
              className="social-link"
            >
              <span className="social-icon">@</span>
              <span>Email Me</span>
              <span className="social-arrow">↗</span>
            </a>

          </div>

        </div>

      </div>


      {/* ========================================
          BOTTOM
      ======================================== */}

      <div className="footer-bottom">

        <p>
          © {currentYear} Hardik Lonkar. All Rights Reserved.
        </p>

        <div className="footer-bottom-right">

          <span>
            Built with React
          </span>

          <span className="bottom-divider">
            •
          </span>

          <a
            href="#home"
            className="back-top"
          >
            ↑ Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;