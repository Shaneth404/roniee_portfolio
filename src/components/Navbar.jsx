import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'QA Focus Areas', href: '#qa-focus' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Update hash in URL
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Monogram */}
        <a 
          href="#home" 
          className="navbar-brand" 
          onClick={(e) => handleLinkClick(e, '#home')}
          aria-label="Ronie Jr. C. Provedencia - Return to Top"
        >
          <div className="brand-monogram">
            <span className="brand-letters">RP</span>
            <span className="brand-dot"></span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Ronie Jr.</span>
            <span className="brand-sub">QA Portfolio</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                    {isActive && <span className="active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA Button in header */}
        <div className="navbar-actions">
          <a
            href="#contact"
            className="navbar-cta-btn"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            <Send size={15} />
            <span>Get in Touch</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${isOpen ? 'drawer-open' : ''}`} id="mobile-nav">
        <div className="mobile-drawer-header">
          <div className="brand-monogram">
            <span className="brand-letters">RP</span>
          </div>
          <span className="mobile-brand-title">Ronie Jr. C. Provedencia</span>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.href} className="mobile-nav-item">
                <a
                  href={link.href}
                  className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="mobile-active-tag">Active</span>}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-drawer-footer">
          <a
            href="#contact"
            className="mobile-drawer-cta"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            <Send size={16} />
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
