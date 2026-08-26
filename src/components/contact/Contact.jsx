import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Section Heading */}
        <div className="contact-heading">
          <span className="contact-label">Get In Touch</span>

          <h2>Let's Connect</h2>

          <p>
            Have an opportunity, project idea, or just want to connect?
            Feel free to reach out. I'm open to internships, web development
            opportunities, and professional collaborations.
          </p>
        </div>

        <div className="contact-content">

          {/* =========================
              CONTACT INFORMATION
          ========================= */}

          <div className="contact-left">

            <div className="contact-intro">
              <div className="availability">
                <span className="availability-dot"></span>
                Open to Opportunities
              </div>

              <h3>Let's build something meaningful.</h3>

              <p>
                I'm always interested in discussing new projects,
                internships, development opportunities and innovative
                technology ideas.
              </p>
            </div>

            <div className="contact-details">

              {/* Email */}
              <a
                href="mailto:lonkarhardik@gmail.com"
                className="contact-card"
              >
                <div className="contact-icon">✉</div>

                <div className="contact-card-content">
                  <span className="contact-card-label">Email</span>
                  <strong>lonkarhardik@gmail.com</strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

              {/* Mobile */}
              <a
                href="tel:+917823872019"
                className="contact-card"
              >
                <div className="contact-icon">☎</div>

                <div className="contact-card-content">
                  <span className="contact-card-label">Phone</span>
                  <strong>+91 78238 72019</strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Hardiklonkar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">⌘</div>

                <div className="contact-card-content">
                  <span className="contact-card-label">GitHub</span>
                  <strong>github.com/Hardiklonkar</strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hardik-lonkar-18446296"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">in</div>

                <div className="contact-card-content">
                  <span className="contact-card-label">LinkedIn</span>
                  <strong>LinkedIn Profile</strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

            </div>

            {/* Location */}
            <div className="contact-location">
              <div className="location-icon">⌖</div>

              <div>
                <span>Based in</span>
                <strong>Chhatrapati Sambhajinagar, Maharashtra</strong>
              </div>
            </div>

          </div>


          {/* =========================
              MAP
          ========================= */}

          <div className="contact-map">

            <div className="map-header">
              <div>
                <span className="map-label">LOCATION</span>

                <h3>MIT CSN</h3>

                <p>
                  Chhatrapati Sambhajinagar, Maharashtra
                </p>
              </div>

              <div className="map-pin">
                ⌖
              </div>
            </div>

            <div className="map-wrapper">

              <iframe
                title="MIT CSN Location Map"
                src="https://www.google.com/maps?q=MIT+CSN+Chhatrapati+Sambhajinagar&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="map-overlay">
                <span className="map-live-dot"></span>
                Available for opportunities
              </div>

            </div>

          </div>

        </div>


        {/* =========================
            FINAL CTA
        ========================= */}

        <div className="contact-cta">

          <div>
            <span>Have an opportunity?</span>

            <h3>Let's talk about it.</h3>
          </div>

          <a
            href="mailto:lonkarhardik@gmail.com"
            className="contact-cta-button"
          >
            Send Me an Email
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;