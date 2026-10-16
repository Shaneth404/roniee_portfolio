import React from 'react';
import { Award, Cloud, Brain, Database, Lock, BarChart3, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Certificates({ data }) {
  const getCertIcon = (title) => {
    if (title.includes('AWS')) return <Cloud size={24} className="cert-type-icon" />;
    if (title.includes('AI')) return <Brain size={24} className="cert-type-icon" />;
    if (title.includes('Data Transformation')) return <Database size={24} className="cert-type-icon" />;
    if (title.includes('Cybersecurity')) return <Lock size={24} className="cert-type-icon" />;
    if (title.includes('Data Science')) return <BarChart3 size={24} className="cert-type-icon" />;
    return <Award size={24} className="cert-type-icon" />;
  };

  return (
    <section id="certificates" className="section certificates-section" aria-label="Certificates and Learning">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Professional Credentials</span>
          <h2 className="section-title">Certificates &amp; Learning</h2>
          <div className="section-divider" aria-hidden="true"></div>
          <p className="section-subtitle">
            Verified course completions and foundational certifications in cloud, AI, data, and security.
          </p>
        </div>

        <div className="certificates-grid">
          {data.certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="cert-card-header">
                <div className="cert-icon-box">
                  {getCertIcon(cert.title)}
                </div>
                <span className="cert-category-tag">{cert.category}</span>
              </div>

              <div className="cert-card-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>

              <div className="cert-card-footer">
                <div className="cert-status">
                  <CheckCircle2 size={16} className="status-check" />
                  <span>Credential Completed</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
