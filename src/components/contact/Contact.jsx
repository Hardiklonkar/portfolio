
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Section Heading */}
        <div className="contact-heading">
          <span>Get In Touch</span>

          <h2>Contact Me</h2>

          <p>
            I'm open to internship opportunities, web development projects,
            Java, Python, AI & Machine Learning opportunities, and
            professional collaborations.
          </p>
        </div>

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-details">

            <div className="contact-card">
              <div className="contact-icon">📧</div>

              <div>
                <h3>Email</h3>
                <a href="mailto:lonkarhardik@gmail.com">
                  lonkarhardik@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📱</div>

              <div>
                <h3>Mobile</h3>
                <a href="tel:7823872019">
                  +91 78238 72019
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🎓</div>

              <div>
                <h3>College</h3>
                <p>
                  MIT CSN
                  <br />
                  Chhatrapati Sambhajinagar, Maharashtra
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💻</div>

              <div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/Hardiklonkar"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Hardiklonkar
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💼</div>

              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/hardik-lonkar-18446296"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🌐</div>

              <div>
                <h3>Portfolio</h3>
                <a
                  href="https://portfolio-vert-one-23.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  portfolio-vert-one-23.vercel.app
                </a>
              </div>
            </div>

          </div>

          {/* Map */}
          <div className="contact-map">

            <div className="map-header">
              <h3>📍 Location</h3>

              <p>
                MIT CSN, Chhatrapati Sambhajinagar
              </p>
            </div>

            <iframe
              title="MIT CSN Location Map"
              src="https://www.google.com/maps?q=MIT+CSN+Chhatrapati+Sambhajinagar&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;

