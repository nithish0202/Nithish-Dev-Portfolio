import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Jr. Software Engineer',
    company: 'Initech Solutions',
    duration: 'Nov 2025 – Present',
    location: 'Coimbatore, Tamil Nadu · On-site',
    type: 'Full-time',
    description: [
      'Building and maintaining full-stack web applications as a .NET Developer using the .NET ecosystem alongside modern frontend frameworks.',
      'Collaborating with cross-functional teams to design scalable, efficient solutions aligned with business requirements.',
      'Applying strong debugging, code review, and deployment practices in a professional production environment.',
    ],
    tags: ['ASP.NET', 'C#', 'Visual Studio 2022', 'Bootstrap', 'SQL Server'],
  },
  {
    role: 'Full Stack Developer',
    company: 'I-Bacus Tech Solutions Pvt. Ltd.',
    duration: 'Aug 2025 – Oct 2025',
    location: 'Coimbatore, Tamil Nadu · On-site',
    type: 'Internship',
    description: [
      'Developed responsive front-end interfaces using React.js, Redux, Tailwind CSS, Material UI, and Bootstrap with client-side routing via React Router DOM.',
      'Built and maintained RESTful APIs with Node.js and Express.js; integrated JWT and Google OAuth for secure authentication.',
      'Managed databases using MongoDB and MySQL with Prisma ORM for schema modeling, migrations, and CRUD operations.',
      'Conducted practical HTML/CSS sessions for college students covering responsive layouts, accessible design, and web best practices.',
      'Deployed applications on Vercel and Render; used Git and GitHub for version control, branching, and pull requests.',
    ],
    tags: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Prisma ORM', 'Tailwind CSS', 'JWT', 'Vercel'],
  },
  {
    role: 'MERN Stack Developer',
    company: 'I-Bacus Tech Solutions Pvt. Ltd.',
    duration: 'Feb 2025 – Jul 2025',
    location: 'Coimbatore, Tamil Nadu · On-site',
    type: 'Trainee',
    description: [
      'Completed self-directed MERN stack training, building responsive UIs with React.js, Bootstrap, and React Icons.',
      'Implemented Redux for state management and developed RESTful APIs using Node.js and Express.js.',
      'Integrated JWT and Google OAuth authentication; managed MongoDB databases and deployed apps on Netlify.',
      'Strengthened debugging, Git/GitHub version control, and scalable application development skills.',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'Google OAuth', 'Netlify', 'Git'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Where I've worked and what I've built along the way.
        </p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker">
                <div className={`timeline-dot ${i === 0 ? 'active' : ''}`}></div>
                {i < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company} · {exp.location}</p>
                  </div>
                  <div className="exp-meta">
                    <span className={`exp-type-badge ${exp.type.toLowerCase()}`}>{exp.type}</span>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {exp.description.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="exp-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;