import React from 'react';
import { GraduationCap, Calendar, School, Building2 } from 'lucide-react';

export default function Education({ data }) {
  return (
    <section id="education" className="section section-alt education-section" aria-label="Education History">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" aria-hidden="true"></div>
          <p className="section-subtitle">
            Formal educational background from secondary school to ongoing college studies.
          </p>
        </div>

        <div className="education-timeline-container">
          <div className="education-timeline-line" aria-hidden="true"></div>

          <div className="education-cards-list">
            {data.education.map((item, index) => (
              <div key={index} className="education-timeline-item">
                {/* Timeline node */}
                <div className="timeline-marker">
                  <div className="marker-inner">
                    <GraduationCap size={18} className="marker-icon" />
                  </div>
                </div>

                {/* Timeline card content */}
                <div className="education-card">
                  <div className="education-card-top">
                    <div className="edu-badge-row">
                      <span className="edu-level-badge">{item.level}</span>
                      <div className="edu-period">
                        <Calendar size={14} className="period-icon" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <h3 className="institution-name">{item.institution}</h3>
                  </div>

                  <p className="institution-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
