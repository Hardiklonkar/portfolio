import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* ========================================
          LOGO
      ======================================== */}

      <a
        href="#home"
        className="logo"
        onClick={closeMenu}
        aria-label="Hardik Portfolio Home"
      >
        <span>&lt;</span>
        Hardik
        <span>/&gt;</span>
      </a>


      {/* ========================================
          NAVIGATION
      ======================================== */}

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#certificates" onClick={closeMenu}>
            Certificates
          </a>
        </li>

        <li>
          <a href="#resume" onClick={closeMenu}>
            Resume
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={closeMenu}
            className="contact-nav-link"
          >
            Contact
          </a>
        </li>

      </ul>


      {/* ========================================
          MOBILE MENU BUTTON
      ======================================== */}

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={
          menuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;