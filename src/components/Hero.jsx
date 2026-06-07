import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className={`hero-content ${visible ? 'visible' : ''}`}>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Nithish M</span>
          </h1>

          <p className="hero-role">
            Jr. Software Engineer
            <span className="role-divider"> · </span>
            Full Stack Developer
          </p>

          <p className="hero-bio">
  Motivated full stack developer with hands-on experience building and deploying scalable
  applications using <strong>.NET / C#</strong>, <strong>React</strong>, and <strong>Node.js</strong>.
  Currently exploring <strong>Azure</strong>, <strong>GenAI</strong>, RAG, MCP, and Agentic AI
  with LangChain &amp; LangGraph. Passionate about clean architecture, APIs, and microservices.
</p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Projects
            </a>
            <a href="#contact" className="btn-secondary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Get in touch
            </a>
          </div>

          <div className="hero-tech">
  {['React', 'Node.js', 'MongoDB', 'Express', '.NET MVC', 'Web API', 'SQL Server', 'jQuery', 'AJAX', 'Chart.js'].map(tech => (
    <span key={tech} className="tech-pill">{tech}</span>
  ))}
</div>
        </div>

        <div className={`hero-visual ${visible ? 'visible' : ''}`}>
  <div className="hero-photo-wrapper">
    <img
      src="\Nithish M.png"
      alt="Nithish M"
      className="hero-photo"
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;
