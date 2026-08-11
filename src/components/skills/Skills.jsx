
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "PHP",
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        "Java",
        "Spring Boot",
        "Python",
        "Flask",
        "REST API",
        "Postman",
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        "MySQL",
        "SQLite",
        "SQL",
        "Database Management",
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Python",
        "Scikit-learn",
        "TensorFlow",
        "Gemini API",
      ],
    },
    {
      title: "Data Analytics & Data Science",
      icon: "📊",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Data Analysis",
        "Data Visualization",
        "Power BI",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Eclipse",
        "XAMPP",
        "Postman",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span>What I Work With</span>
          <h2>My Skills</h2>
          <p>
            Technologies and tools I use to build web applications,
            backend systems, AI solutions, and data-driven projects.
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>

              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>

                <h3>{category.title}</h3>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;

