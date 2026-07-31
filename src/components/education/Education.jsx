import "./Education.css";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "MIT Chhatrapati Sambhajinagar",
      year: "2025 - Present",
      score: "Pursuing",
    },
    {
      degree: "Bachelor of Science (B.Sc. Information Technology)",
      institute: "Dr. Babasaheb Ambedkar Marathwada University",
      year: "2022 - 2025",
      score: "76%",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institute: "Maharashtra State Board",
      year: "2022",
      score: "62.83%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "Maharashtra State Board",
      year: "2020",
      score: "72.20%",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2>Education</h2>

        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.degree}</h3>
            <h4>{item.institute}</h4>

            <div className="education-info">
              <span>{item.year}</span>
              <span>{item.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;