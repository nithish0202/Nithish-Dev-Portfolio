import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <a
          href="#hero"
          className="footer-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Back to top"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer hexagon */}
            <path
              d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
              stroke="#1a6b4a"
              strokeWidth="1.5"
              fill="none"
            />

            {/* Code icon */}
            <path
              d="M11 13L8 16L11 19"
              stroke="#1a6b4a"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 13L24 16L21 19"
              stroke="#1a6b4a"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 11L14 21"
              stroke="#1a6b4a"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </a>

        <div className="footer-text">
          <p className="footer-copy">
            © {year} Nithish M. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Developed by Nithish M
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;