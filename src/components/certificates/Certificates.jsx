
import "./Certificates.css";

function Certificates() {
  const certificates = [
    
    {
      title: "Java Programming",
      issuer: "Self Learning",
      year: "2025",
      icon: "☕",
    },
    {
      title: "Python Programming",
      issuer: "Self Learning",
      year: "2025",
      icon: "🐍",
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="certificates-container">

        <div className="certificates-heading">
          <span>Learning & Achievements</span>

          <h2>Certificates</h2>

          <p>
            Certifications and learning achievements that reflect my
            continuous learning and interest in technology.
          </p>
        </div>

        <div className="certificates-grid">

          {certificates.map((certificate, index) => (
            <div className="certificate-card" key={index}>

              <div className="certificate-icon">
                {certificate.icon}
              </div>

              <div className="certificate-content">

                <span className="certificate-year">
                  {certificate.year}
                </span>

                <h3>{certificate.title}</h3>

                <p>
                  Issued by <strong>{certificate.issuer}</strong>
                </p>

              </div>

              <div className="certificate-badge">
                ✓ Certified
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;

