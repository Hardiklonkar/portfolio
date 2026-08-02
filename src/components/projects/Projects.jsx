import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2>My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              {/* Project Images */}
{project.images ? (
  <div className="project-images">
    {project.images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={project.title}
        className="project-image"
      />
    ))}
  </div>
) : (
  <img
    src={project.image}
    alt={project.title}
    className="project-image"
  />
)}

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="tech">{project.tech}</span>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn github"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn demo"
                >
                  Live Demo
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;