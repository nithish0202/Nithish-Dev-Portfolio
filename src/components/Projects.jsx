import React, { useState } from 'react';
import './Projects.css';

/* =========================
   ALL PROJECTS DATA
========================= */
const projects = [
  {
    title: 'Audit Management System',
    category: 'Enterprise',
    professional: true,
    description:
      'Enterprise audit management platform supporting internal and supplier audits, NCR tracking, approval workflows, audit lifecycle management, and reporting dashboards.',
    highlights: ['NCR Tracking', 'Approval Workflow', 'Dashboard Reporting'],
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'JavaScript']
  },
  {
    title: 'Quality Plan Module',
    category: 'Enterprise',
    professional: true,
    description:
      'Manufacturing quality management module integrated with Oracle databases, supporting process tracking, quality planning, and multi-plant operations.',
    highlights: ['Oracle DB', 'Stored Procedures', 'Multi-Plant Support'],
    tags: ['ASP.NET Core', 'Oracle', 'Dapper', 'JavaScript']
  },
  {
    title: 'Audit Analytics Dashboard',
    category: 'Enterprise',
    professional: true,
    description:
      'Interactive dashboard for visualizing audit status, compliance metrics, audit counts, and KPI trends using dynamic charts.',
    highlights: ['Chart.js', 'KPI Tracking', 'Analytics'],
    tags: ['Chart.js', 'SQL Server', 'JavaScript']
  },

  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description:
      'Full-stack shopping application with authentication, product management, cart functionality, and order processing.',
    highlights: ['Authentication', 'Shopping Cart', 'Order Management'],
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    github: '#',
    live: '#'
  },
  {
    title: 'Food Ordering Application',
    category: 'Full Stack',
    description:
      'Online food ordering system with menu browsing, cart management, and responsive user experience.',
    highlights: ['Responsive UI', 'Cart System', 'API Integration'],
    tags: ['React', 'JavaScript', 'REST API'],
    github: '#',
    live: '#'
  },

  {
    title: 'Student Enrollment System',
    category: '.NET',
    description:
      'ASP.NET MVC application for managing students, courses, and enrollment records with full CRUD functionality.',
    highlights: ['CRUD Operations', 'Entity Framework', 'AJAX'],
    tags: ['ASP.NET MVC', 'C#', 'SQL Server', 'jQuery'],
    github: '#'
  },
  {
    title: 'To-Do Management System',
    category: '.NET',
    description:
      'Task management application built using ASP.NET MVC and SQL Server with create, update, and completion tracking.',
    highlights: ['Task Tracking', 'MVC Pattern', 'Database Design'],
    tags: ['ASP.NET MVC', 'C#', 'SQL Server'],
    github: '#'
  },

  {
    title: 'Book Store API',
    category: 'Backend',
    description:
      'RESTful API for managing books, authors, and inventory with complete CRUD functionality.',
    highlights: ['REST API', 'CRUD Operations', 'Database Integration'],
    tags: ['Node.js', 'Express', 'Prisma', 'MySQL'],
    github: '#'
  },
  {
    title: 'Billing System',
    category: 'Backend',
    description:
      'Invoice and billing management system capable of generating downloadable PDF invoices.',
    highlights: ['PDF Generation', 'Invoice Management', 'Prisma ORM'],
    tags: ['Node.js', 'Prisma ORM', 'MySQL'],
    github: '#'
  },

  {
    title: 'Weather Application',
    category: 'Frontend',
    description:
      'Weather forecasting application using OpenWeather API to display real-time weather information.',
    highlights: ['OpenWeather API', 'Real-Time Data', 'Responsive Design'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#'
  },
  {
    title: 'Online Quiz Application',
    category: 'Frontend',
    description:
      'Interactive quiz application fetching questions dynamically and providing instant scoring.',
    highlights: ['Quiz API', 'Score Tracking', 'Dynamic Questions'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#'
  },
  {
    title: 'Calculator & Utility Suite',
    category: 'Frontend',
    description:
      'Collection of frontend projects including calculator, CAPTCHA generator, registration form validation, and checklist applications.',
    highlights: ['DOM Manipulation', 'Form Validation', 'JavaScript Logic'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#'
  }
];

/* =========================
   FILTER OPTIONS
========================= */
const filters = ['All', 'Enterprise', 'Full Stack', '.NET', 'Backend', 'Frontend'];

const Projects = () => {

  /* =========================
     STATE
  ========================= */
  const [active, setActive] = useState('All');
  const [toast, setToast] = useState('');

  /* =========================
     FILTER LOGIC
  ========================= */
  const filtered =
    active === 'All'
      ? projects
      : projects.filter(p => p.category === active);

  /* =========================
     TOAST FUNCTION
  ========================= */
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2000);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* HEADER */}
        <p className="section-label">Where I build</p>
        <h2 className="section-title">Projects & Professional Work</h2>

        <p className="section-subtitle">
          Enterprise systems, full-stack apps, APIs, and frontend work demonstrating real-world development experience.
        </p>

        {/* FILTERS */}
        <div className="project-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="projects-grid">
          {filtered.map(project => (
            <div className="project-card" key={project.title}>

              <div className="project-card-top">

                {/* HEADER */}
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                  </div>

                  {/* BADGE OR LINKS */}
                  <div className="project-meta">

                    {project.professional ? (
                      <span className="professional-badge">
                        Enterprise Work
                      </span>
                    ) : (
                      <div className="project-links">

                        {/* GitHub */}
                        <button
                          className="project-link-icon"
                          onClick={() => showToast('GitHub repo will be added soon')}
                        >
                          <GitHubIcon />
                        </button>

                        {/* Live */}
                        <button
                          className="project-link-icon"
                          onClick={() => showToast('Live demo will be available soon')}
                        >
                          <ExternalIcon />
                        </button>

                      </div>
                    )}

                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="project-desc">{project.description}</p>

                {/* HIGHLIGHTS */}
                <div className="project-highlights">
                  {project.highlights.map(h => (
                    <span key={h} className="highlight-pill">
                      {h}
                    </span>
                  ))}
                </div>

              </div>

              {/* TAGS */}
              <div className="project-tags">
                {project.tags.map(t => (
                  <span key={t} className="project-tag">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* TOAST */}
        {toast && <div className="toast">{toast}</div>}

      </div>
    </section>
  );
};

export default Projects;

/* =========================
   ICONS
========================= */

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.85 3.438 22.37 8.207 23.98C8.807 24.08 9.025 23.72 9.025 23.41C9.025 23.13 9.013 22.33 9.007 21.22C5.672 21.91 4.967 19.58 4.967 19.58C4.422 18.16 3.633 17.79 3.633 17.79C2.546 17.06 3.713 17.07 3.713 17.07C4.922 17.15 5.555 18.3 5.555 18.3C6.633 20.09 8.387 19.57 9.05 19.28C9.15 18.5 9.457 17.97 9.8 17.67C7.142 17.38 4.344 16.35 4.344 11.63C4.344 10.32 4.797 9.28 5.555 8.47C5.435 8.18 5.03 6.95 5.675 5.27C5.675 5.27 6.658 4.95 8.995 6.53C9.927 6.25 10.927 6.12 11.925 6.12C12.922 6.12 13.922 6.25 14.857 6.53C17.192 4.95 18.175 5.27 18.175 5.27C18.82 6.95 18.415 8.18 18.295 8.47C19.057 9.28 19.507 10.32 19.507 11.63C19.507 16.36 16.703 17.38 14.038 17.67C14.475 18.02 14.875 18.71 14.875 19.77C14.875 21.34 14.863 22.48 14.863 23.41C14.863 23.72 15.077 24.09 15.683 23.98C20.452 22.37 24 17.85 24 12.5C24 5.87 18.627 0.5 12 0.5Z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2">

    <path d="M14 3h7v7" />
    <path d="M10 14L21 3" />
    <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
  </svg>
);