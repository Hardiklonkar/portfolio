import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-heading">
          <span>WHO I AM</span>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-card">
            <div className="about-icon">👨‍💻</div>

            <h3>Web Developer</h3>

            <p>
              Hello! I'm <strong>Hardik Lonkar</strong>, an MCA student and
              passionate Web Developer interested in building modern,
              responsive and user-friendly web applications.
            </p>

            <p>
              I work with both frontend and backend technologies and enjoy
              developing complete web applications from user interface to
              database and server-side functionality.
            </p>
          </div>


          <div className="about-card">
            <div className="about-icon">🚀</div>

            <h3>Technology & Interests</h3>

            <p>
              My technical interests include Java, Spring Boot, Python,
              Flask, React.js, JavaScript, PHP, MySQL, REST APIs and
              Postman.
            </p>

            <p>
              I am also interested in Artificial Intelligence, Machine
              Learning, Data Analytics and Data Science, and continuously
              work on improving my technical and problem-solving skills.
            </p>
          </div>

        </div>


        <div className="about-highlights">

          <div className="highlight">
            <span>💻</span>
            <strong>Web Development</strong>
            <small>Frontend & Backend</small>
          </div>

          <div className="highlight">
            <span>☕</span>
            <strong>Java</strong>
            <small>Spring Boot & APIs</small>
          </div>

          <div className="highlight">
            <span>🐍</span>
            <strong>Python</strong>
            <small>Flask & Data</small>
          </div>

          <div className="highlight">
            <span>🤖</span>
            <strong>AI & ML</strong>
            <small>Learning & Projects</small>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;