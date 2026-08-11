
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span>&lt;</span>Hardik<span>/&gt;</span>
          </a>

          <p>
            Web Developer | AI & ML Enthusiast | MCA Student
          </p>

          <p className="footer-location">
            📍 Chhatrapati Sambhajinagar, Maharashtra
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Connect With Me</h3>

          <div className="footer-socials">

            <a
              href="https://github.com/Hardiklonkar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hardik-lonkar-18446296"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:lonkarhardik@gmail.com">
              Email
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © {currentYear} Hardik Lonkar. All Rights Reserved.
        </p>

        <a href="#home" className="back-top">
          ↑ Back to Top
        </a>

      </div>

    </footer>
  );
}

export default Footer;

