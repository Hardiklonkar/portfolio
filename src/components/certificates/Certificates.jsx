import "./Certificates.css";

function Certificates() {
  const certificates = [
    {
      title: "Snowflake Data & AI Fast Track",
      issuer: "Snowflake",
      year: "2026",
    },
    {
      title: "Java Programming",
      issuer: "Self Learning",
      year: "2025",
    },
    {
      title: "Python Programming",
      issuer: "Self Learning",
      year: "2025",
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="certificates-container">
        <h2>Certificates</h2>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <div className="certificate-card" key={index}>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <span>{certificate.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;