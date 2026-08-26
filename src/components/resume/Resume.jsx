import React from "react";
import "./Resume.css";

function Resume() {
    return (
        <section id="resume" className="resume-section">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>My professional profile, skills, education and projects</p>
                </div>

                <div className="resume-card">

                    <div className="resume-icon">
                        📄
                    </div>

                    <div className="resume-content">
                        <h3>Hardik Dipak Lonkar</h3>

                        <h4>
                            Web Developer | AI & ML Enthusiast
                        </h4>

                        <p>
                            MCA student and passionate Web Developer focused on
                            building modern, responsive and user-friendly web
                            applications. Skilled in frontend, backend,
                            databases, REST APIs, AI, Machine Learning and
                            Data Analytics.
                        </p>

                        <div className="resume-highlights">

                            <span>💻 Web Development</span>
                            <span>🤖 AI & Machine Learning</span>
                            <span>📊 Data Analytics</span>
                            <span>🚀 Full-Stack Projects</span>

                        </div>

                        <div className="resume-buttons">

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-btn primary"
                            >
                                👁️ View Resume
                            </a>

                            <a
                                href="/resume.pdf"
                                download="Hardik-Dipak-Lonkar-Resume.pdf"
                                className="resume-btn secondary"
                            >
                                ⬇️ Download Resume
                            </a>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Resume;