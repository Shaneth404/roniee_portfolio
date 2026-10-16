import React from 'react';
import { UserCheck, ShieldCheck, FileSpreadsheet, Brain, CheckCircle2 } from 'lucide-react';

export default function About({ data }) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Quality-Driven Mindset",
      description: "Dedicated to evaluating software behaviors against defined specifications to identify edge cases and functional defects early."
    },
    {
      icon: FileSpreadsheet,
      title: "Structured Documentation",
      description: "Trained in writing clear, repeatable test cases with explicit preconditions, steps, test data, and expected results."
    },
    {
      icon: Brain,
      title: "Analytical Problem Solving",
      description: "Applying critical thinking to dissect complex system workflows and systematically verify software integrity."
    }
  ];

  return (
    <section id="about" className="section section-alt about-section" aria-label="About Ronie">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Professional Profile</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" aria-hidden="true"></div>
        </div>

        <div className="about-content-card">
          <div className="about-statement-box">
            <div className="quote-accent" aria-hidden="true">“</div>
            <p className="about-statement-text">
              {data.aboutStatement}
            </p>
          </div>

          <div className="about-pillars-grid">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="about-pillar-card">
                  <div className="pillar-icon-wrapper">
                    <Icon size={24} className="pillar-icon" />
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-description">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
