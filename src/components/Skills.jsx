import React, { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    group: 'MERN Stack',
    skills: [
      { name: 'MongoDB',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Express.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'React.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'JavaScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'JSX',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'EJS',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg' },
      { name: 'Bootstrap',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Redux',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'Vue.js',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'JWT',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg' },
      { name: 'Google OAuth',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { name: 'REST API',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Middleware',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Next.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', badge: 'Exploring' },
      { name: 'NestJS',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', badge: 'Exploring' },
      { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', badge: 'Learning' },
    ],
  },
  {
    group: '.NET Stack',
    skills: [
      { name: 'C#',             icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'ASP.NET Core',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'ASP.NET MVC',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
      { name: 'Web API',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'jQuery',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
      { name: 'Ajax',           icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Chart.js',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'React + .NET',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Bootstrap',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Tortoise SVN',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/subversion/subversion-original.svg' },
      { name: 'Microservices',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'MCP',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'SQL Server',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
    ],
  },
  {
    group: 'Frontend',
    skills: [
      { name: 'HTML5',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Material UI',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
      { name: 'React Icons',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Figma',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
  },
  {
    group: 'Database',
    skills: [
      { name: 'MongoDB',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Oracle SQL',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'SQL Server',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
      { name: 'Prisma',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    ],
  },
{
  group: 'Deployment',
  skills: [
    { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
    { name: 'Vercel',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
    { name: 'Render',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rendering/rendering-original.svg', },
    { name: 'IIS',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
  ],
},
 {
  group: 'Cloud & DevOps',
  skills: [
    { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Tortoise SVN', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/subversion/subversion-original.svg' },
    { name: 'Azure',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', badge: 'Learning' },
    { name: 'AWS',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', badge: 'Learning' },
    { name: 'CI/CD',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', badge: 'Learning' },
  ],
},
  {
    group: 'Tools',
    skills: [
      { name: 'VS Code',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Visual Studio',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg' },
      { name: 'Postman',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'SSMS',             icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
      { name: 'MySQL Workbench',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB Atlas',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'pgAdmin4',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Oracle SQL Dev',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'Photoshop',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
      { name: 'Figma',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Canva',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState('MERN Stack');
  const current = skillCategories.find(c => c.group === active);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
  Real tools from real projects — across full stack, .NET, and cloud.
</p>

        <div className="skills-tabs">
          {skillCategories.map(cat => (
            <button
              key={cat.group}
              className={`skills-tab ${active === cat.group ? 'active' : ''}`}
              onClick={() => setActive(cat.group)}
            >
              {cat.group}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {current.skills.map(skill => (
            <div key={skill.name} className="skill-item">
              <div className="skill-icon-wrap">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <span className="skill-name">{skill.name}</span>
              {skill.badge && (
                <span className={`skill-badge badge-${skill.badge.toLowerCase()}`}>
                  {skill.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;