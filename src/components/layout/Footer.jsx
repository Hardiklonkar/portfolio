import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h3>lonkarhardikk</h3>

      <p>
        Full Stack Developer | AI Enthusiast | MCA Student
      </p>

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

        <a
          href="https://portfolio-vert-one-23.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Portfolio
        </a>

      </div>

      <p className="copyright">
        © 2026 _lonkarhardikk. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;