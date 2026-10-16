import React from 'react';
import { Layers, Code2, FileSpreadsheet, CheckCircle2, ArrowRight } from 'lucide-react';

export default function QAFocusAreas({ data }) {
  const getIcon = (id) => {
    switch (id) {
      case 'qa-1':
        return <Layers size={28} className="qa-icon" />;
      case 'qa-2':
        return <Code2 size={28} className="qa-icon" />;
      case 'qa-3':
        return <FileSpreadsheet size={28} className="qa-icon" />;
      default:
        return <CheckCircle2 size={28} className="qa-icon" />;
    }
  };

  return (
    <section id="qa-focus" className="section section-alt qa-focus-section" aria-label="Software Quality Assurance Focus Areas">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Testing Methodologies</span>
          <h2 className="section-title">QA Focus Areas</h2>
          <div className="section-divider" aria-hidden="true"></div>
          <p className="section-subtitle">
            Core knowledge domains and methodologies in software verification, validation, and test case design.
          </p>
        </div>

        <div className="qa-focus-grid">
          {data.qaFocusAreas.map((area) => (
            <div key={area.id} className="qa-focus-card">
              <div className="qa-card-badge">
                <span>{area.tag}</span>
              </div>

              <div className="qa-icon-wrapper">
                {getIcon(area.id)}
              </div>

              <h3 className="qa-card-title">{area.title}</h3>

              <p className="qa-card-description">
                {area.description}
              </p>

              <div className="qa-highlights-container">
                <span className="qa-highlights-title">Key Principles:</span>
                <ul className="qa-highlights-list">
                  {area.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="qa-highlight-item">
                      <CheckCircle2 size={15} className="highlight-bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
