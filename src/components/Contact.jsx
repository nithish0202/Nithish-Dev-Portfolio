import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// ─── Replace these three values from your EmailJS dashboard ───
const EMAILJS_SERVICE_ID  = 'service_pk5z8ts';
const EMAILJS_TEMPLATE_ID = 'template_zytf1jc';
const EMAILJS_PUBLIC_KEY  = 'LsZRby9LItwe-CHYb';
// ──────────────────────────────────────────────────────────────

const contactLinks = [
  {
    label: 'Mail',
    value: 'nithishmagudeeswaran2004@gmail.com',
    href: 'mailto:nithishmagudeeswaran2004@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nithish-magudeeswaran-995660282',
    href: 'https://linkedin.com/in/nithish-magudeeswaran-995660282',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/nithish0202',
    href: 'https://github.com/nithish0202',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@nithish_magudeeswaran',
    href: 'https://instagram.com/nithish_magudeeswaran',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', description: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // These keys must match the variable names in your EmailJS template
    const templateParams = {
      from_name:    form.name,
      from_email:   form.email,
      message:      form.description,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('sent');
        setForm({ name: '', email: '', description: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">

          {/* ── LEFT ── */}
          <div className="contact-left">
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's Connect</h2>
            <p className="contact-desc">
              Open to opportunities, collaborations, or just a good conversation.
              Feel free to reach out through the form or via any of the platforms below.
            </p>

            <div className="contact-icons">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon-btn"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── DIVIDER ── */}
          <div className="contact-vdivider" aria-hidden="true" />

          {/* ── RIGHT ── */}
          <div className="contact-right">
            {status === 'sent' ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message received!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn-outline" onClick={() => setStatus(null)}>Send another</button>
              </div>
            ) : (
              <>
                <p className="form-heading">If you'd like to collab,<br />let's talk.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" placeholder="Tell me about your project or idea..." rows="4" value={form.description} onChange={handleChange} required />
                  </div>

                  {status === 'error' && (
                    <p className="form-error">Something went wrong. Please try again or email me directly.</p>
                  )}

                  <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Submit →'}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;