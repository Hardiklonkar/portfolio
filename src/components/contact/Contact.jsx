import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h2>Contact Me</h2>

        <p>
          I'm currently looking for Full Stack Development, Java, Python, and AI Internship opportunities.
        </p>

        <div className="contact-info">

          <p>
            📧 Email:
            <br />
            <a href="mailto:lonkarhardik@gmail.com">
              lonkarhardik@gmail.com
            </a>
          </p>


          <p>
            🌐 Portfolio:
            <br />
            <a
              href="https://portfolio-vert-one-23.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              portfolio-vert-one-23.vercel.app
            </a>
          </p>


          <p>
            💻 GitHub:
            <br />
            <a
              href="https://github.com/Hardiklonkar"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Hardiklonkar
            </a>
          </p>


          <p>
            💼 LinkedIn:
            <br />
            <a
              href="https://www.linkedin.com/in/hardik-lonkar-18446296"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/hardik-lonkar-18446296
            </a>
          </p>


        </div>

      </div>
    </section>
  );
}

export default Contact;