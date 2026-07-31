import "./Skills.css";

function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "MySQL",
    "Git",
    "GitHub",
    "REST API",
    "VS Code",
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;