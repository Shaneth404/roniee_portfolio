import React from 'react';
import { Printer, Download, Mail, Phone, MapPin, GraduationCap, Award, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export default function Resume({ data }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section resume-section" aria-label="Resume and Curriculum Vitae">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Curriculum Vitae</span>
          <h2 className="section-title">My Resume</h2>
          <div className="section-divider" aria-hidden="true"></div>
          <p className="section-subtitle">
            A comprehensive, verified summary of academic qualifications, QA competencies, and certifications.
          </p>
        </div>

        {/* Action Bar */}
        <div className="resume-action-bar">
          <div className="resume-action-info">
            <FileCheck size={20} className="action-info-icon" />
            <span>Ready for printing or browser Save-as-PDF</span>
          </div>
          <button
            type="button"
            className="btn btn-primary resume-print-btn"
            onClick={handlePrint}
            title="Open browser print dialog to print or save as PDF"
          >
            <Printer size={18} />
            <span>Print / Save as PDF</span>
          </button>
        </div>

        {/* Printable Resume Sheet */}
        <div className="resume-sheet" id="printable-resume">
          {/* Resume Header */}
          <header className="resume-sheet-header">
            <div className="resume-header-main">
              <h3 className="resume-name">{data.name}</h3>
              <p className="resume-headline">{data.title}</p>
            </div>
            <div className="resume-contact-block">
              <div className="resume-contact-line">
                <Mail size={13} />
                <span>{data.email}</span>
              </div>
              <div className="resume-contact-line">
                <Phone size={13} />
                <span>{data.phone}</span>
              </div>
              <div className="resume-contact-line">
                <MapPin size={13} />
                <span>{data.location}</span>
              </div>
            </div>
          </header>

          <div className="resume-divider"></div>

          {/* Professional Summary */}
          <section className="resume-block">
            <h4 className="resume-block-title">Professional Profile</h4>
            <p className="resume-summary-text">{data.aboutStatement}</p>
          </section>

          {/* Education */}
          <section className="resume-block">
            <h4 className="resume-block-title">Education</h4>
            <div className="resume-edu-list">
              {data.education.map((edu, idx) => (
                <div key={idx} className="resume-edu-item">
                  <div className="resume-item-header">
                    <span className="resume-item-title">{edu.institution}</span>
                    <span className="resume-item-date">{edu.period}</span>
                  </div>
                  <div className="resume-item-sub">{edu.level}</div>
                  <p className="resume-item-desc">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Grid */}
          <section className="resume-block">
            <h4 className="resume-block-title">Skills &amp; Competencies</h4>
            <div className="resume-skills-grid">
              {data.skills.map((group, idx) => (
                <div key={idx} className="resume-skill-col">
                  <h5 className="resume-skill-cat-title">{group.category}</h5>
                  <ul className="resume-skill-list">
                    {group.items.map((item, sIdx) => (
                      <li key={sIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* QA Focus Areas */}
          <section className="resume-block">
            <h4 className="resume-block-title">QA Knowledge Areas</h4>
            <div className="resume-qa-grid">
              {data.qaFocusAreas.map((area) => (
                <div key={area.id} className="resume-qa-item">
                  <span className="resume-qa-name">{area.title}:</span>
                  <span className="resume-qa-desc"> {area.description}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section className="resume-block">
            <h4 className="resume-block-title">Certificates &amp; Training</h4>
            <ul className="resume-cert-list">
              {data.certificates.map((cert) => (
                <li key={cert.id} className="resume-cert-item">
                  <span className="cert-bullet">•</span>
                  <span className="cert-item-name">{cert.title}</span>
                  <span className="cert-item-issuer"> — {cert.issuer}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
