import React from 'react';
import './About.css';

const About = () => {
  const stats = [
  { value: '1+',  label: 'Year Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '2',   label: 'Stacks (MERN + .NET)' },
  { value: '5',   label: 'Certifications' },
];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">About me</p>
            <h2 className="section-title">Crafting software with purpose</h2>
            <p className="about-para">
              I'm a Jr. Software Engineer with hands-on experience building enterprise-grade
              web applications. My work spans full-stack development — from designing
              RESTful APIs in <strong>ASP.NET Core</strong> to creating interactive
              frontends with <strong>React</strong>.
            </p>
            <p className="about-para">
              I've worked with both <strong>SQL Server</strong> and <strong>Oracle</strong> databases,
              writing stored procedures and complex queries to power data-heavy applications.
              I love solving real business problems through clean, maintainable code.
            </p>
            <p className="about-para">
              Outside of work, I'm constantly learning — currently exploring
              TypeScript and cloud deployment on Azure.
            </p>

            <div className="about-links">
              <a
                href="/NITHISH-CV.pdf"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume ↓
              </a>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
