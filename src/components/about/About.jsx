
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-heading">
          <span>Get To Know Me</span>
          <h2>About Me</h2>
        </div>
s
        <div className="about-content">

          <div className="about-card">
            <div className="about-icon">👨‍💻</div>

            <h3>Who I Am</h3>

            <p>
              Hello! I'm <strong>Hardik Lonkar</strong>, an MCA student and
              passionate technology enthusiast with an interest in
              <strong> Web Development, Backend Development, AI, Machine
              Learning, Data Analytics, and Data Science.</strong>
            </p>

            <p>
              I enjoy developing practical and user-friendly applications,
              working with databases and APIs, analyzing data, and exploring
              intelligent solutions using modern technologies.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🚀</div>

            <h3>What I Do</h3>

            <p>
              I work with technologies such as
              <strong> HTML, CSS, JavaScript, React, PHP, Java, Python,
              Flask, MySQL, and SQLite</strong> for developing frontend,
              backend, and full-stack applications.
            </p>

            <p>
              I also work with
              <strong> AI & Machine Learning, Data Analytics, Data Science,
              REST APIs, and Postman</strong>, and continuously improve my
              technical and problem-solving skills.
            </p>
          </div>

        </div>

        <div className="about-highlights">

          <div className="highlight">
            <span>🌐</span>
            <strong>Web Development</strong>
            <small>Frontend & Full Stack</small>
          </div>

          <div className="highlight">
            <span>⚙️</span>
            <strong>Backend Development</strong>
            <small>Java • PHP • Python • Flask</small>
          </div>

          <div className="highlight">
            <span>🤖</span>
            <strong>AI & ML</strong>
            <small>Artificial Intelligence</small>
          </div>

          <div className="highlight">
            <span>📊</span>
            <strong>Data Analytics</strong>
            <small>Data & Visualization</small>
          </div>

          <div className="highlight">
            <span>🔬</span>
            <strong>Data Science</strong>
            <small>Python & Data Analysis</small>
          </div>

          <div className="highlight">
            <span>🗄️</span>
            <strong>Database</strong>
            <small>MySQL • SQLite</small>
          </div>

          <div className="highlight">
            <span>🔌</span>
            <strong>API & Testing</strong>
            <small>REST API • Postman</small>
          </div>

          <div className="highlight">
            <span>☁️</span>
            <strong>Continuous Learning</strong>
            <small>New Technologies</small>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
