import React from 'react';
import { ArrowUp, Mail, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ data }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'QA Focus', href: '#qa-focus' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="footer-monogram">
                <span>{data.initials}</span>
              </div>
              <div>
                <h3 className="footer-name">{data.name}</h3>
                <p className="footer-tagline">{data.headline}</p>
              </div>
            </div>
            <p className="footer-bio">
              Information Systems undergraduate dedicated to delivering robust and defect-free software solutions through structured testing and quality assurance practices.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col links-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Direct Contact</h4>
            <div className="footer-contact-details">
              <a href={`mailto:${data.email}`} className="footer-contact-link">
                <Mail size={15} />
                <span>{data.email}</span>
              </a>
              <p className="footer-location">{data.location}</p>
              <div className="footer-qa-tag">
                <ShieldCheck size={14} />
                <span>Software Quality Assurance Portfolio</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {data.name}. All rights reserved. Built with precision and QA best practices.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            title="Return to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
