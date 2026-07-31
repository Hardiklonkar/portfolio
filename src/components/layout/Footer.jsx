import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h3>Hardik Lonkar</h3>

        <p>Java Full Stack Developer | MCA Student</p>

        <div className="footer-links">

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

        </div>

        <p className="copyright">
          © 2026 Hardik Lonkar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;