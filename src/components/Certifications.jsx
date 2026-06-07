import React from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'C# Basics',
    issuer: 'HackerRank',
    category: 'Backend',
    link: 'https://drive.google.com/file/d/1jWOaNrtp57jMYU52lw_Kc4kZQBcopVm4/view?usp=drive_link',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Internship Certificate',
    category: 'Full Stack',
    link: 'https://drive.google.com/file/d/15URt_kGAT0aawu0Jm56lEznM5ZqMbtrM/view?usp=drive_link',
  },
  {
    title: 'MERN Stack Development using React and MongoDB',
    issuer: 'Microsoft',
    category: 'Full Stack',
    link: 'https://drive.google.com/file/d/1wMqB4fPFECoMOIx5_xOjVKgeIgI-emoW/view?usp=drive_link',
  },
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    category: 'Data Science',
    link: 'https://drive.google.com/file/d/1Q8N2waL5i8b3QRd3XvAZdoxsJ1AdHGMr/view?usp=drive_link',
  },
  {
    title: 'Cisco Networking Essentials',
    issuer: 'Cisco Networking Academy',
    category: 'Networking',
    link: 'https://drive.google.com/file/d/1TNTqq0exoSnlYN7v_MLkBk3COIkyp9mj/view?usp=drive_link',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="cert-section">
      <div className="container">
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Validated learning through industry-recognized certifications and courses.
        </p>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-item"
            >
              <span className="cert-category">{cert.category}</span>
              <span className="cert-title">{cert.title}</span>
              <span className="cert-issuer">{cert.issuer}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;