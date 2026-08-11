
import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* Section Heading */}
        <div className="projects-heading">
          <span>My Recent Work</span>
          <h2>Projects</h2>
          <p>
            A collection of applications and systems I have built using
            modern web, backend, AI, and database technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              {/* Project Images */}
              <div className="project-image-wrapper">

                {project.images ? (
                  <div className="project-images">
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="project-image"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image single-image"
                  />
                )}

                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>

              {/* Project Content */}
              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-wrapper">
                  {project.tech.split(" • ").map((tech, i) => (
                    <span className="tech" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn github"
                  >
                    <span>GitHub</span>
                    <span>↗</span>
                  </a>

                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn demo"
                    >
                      <span>Live Demo</span>
                      <span>↗</span>
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;

