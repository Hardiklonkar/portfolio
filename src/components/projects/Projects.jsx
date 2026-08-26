import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        {/* Section Heading */}
        <div className="projects-heading">

          <span className="projects-eyebrow">
            My Recent Work
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A collection of real-world applications built using modern
            web technologies, backend systems, databases, AI and
            machine learning.
          </p>

        </div>


        {/* Projects Grid */}
        <div className="projects-grid">

          {projects.map((project, index) => (

            <article
              className="project-card"
              key={index}
            >

              {/* ========================================
                  PROJECT IMAGE
              ======================================== */}

              <div className="project-image-wrapper">

                {project.images ? (

                  <div className="project-images">

                    {project.images.map((img, i) => (

                      <img
                        key={i}
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="project-image"
                        loading="lazy"
                      />

                    ))}

                  </div>

                ) : (

                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="project-image single-image"
                    loading="lazy"
                  />

                )}


                {/* Image Overlay */}

                <div className="project-overlay">
                  <span>View Project</span>
                </div>


                {/* Project Number */}

                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>


              {/* ========================================
                  PROJECT CONTENT
              ======================================== */}

              <div className="project-content">

                <div className="project-meta">

                  <span className="project-label">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-status">
                    ● Completed
                  </span>

                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                {/* Technologies */}

                <div className="tech-wrapper">

                  {project.tech
                    .split(" • ")
                    .map((tech, i) => (

                      <span
                        className="tech"
                        key={i}
                      >
                        {tech}
                      </span>

                    ))}

                </div>


                {/* Buttons */}

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github"
                  >
                    <span className="btn-icon">
                      {"</>"}
                    </span>

                    <span>
                      GitHub
                    </span>

                    <span className="btn-arrow">
                      ↗
                    </span>

                  </a>


                  {project.demo &&
                    project.demo !== "#" && (

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn demo"
                      >

                        <span className="btn-icon">
                          🌐
                        </span>

                        <span>
                          Live Demo
                        </span>

                        <span className="btn-arrow">
                          ↗
                        </span>

                      </a>

                    )}

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* Bottom Message */}

        <div className="projects-footer">

          <span>
            More projects available on my GitHub
          </span>

          <a
            href="https://github.com/Hardiklonkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;