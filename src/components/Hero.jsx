import React from 'react';
import { ArrowDown, Mail, MapPin, GraduationCap, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import ProfileAvatar from './ProfileAvatar';

export default function Hero({ data }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section" aria-label="Hero Introduction">
      {/* Subtle decorative background glow */}
      <div className="hero-bg-accent" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="pill-dot"></span>
            <span className="pill-text">Information Systems • Software QA Focus</span>
          </div>

          <h1 className="hero-name">
            {data.name}
          </h1>

          <p className="hero-title">
            {data.title}
          </p>

          <p className="hero-intro">
            {data.heroIntro}
          </p>

          {/* Quick Info Badges */}
          <div className="hero-meta-grid">
            <div className="meta-badge">
              <MapPin size={16} className="meta-icon" />
              <span>{data.location}</span>
            </div>
            <div className="meta-badge">
              <GraduationCap size={16} className="meta-icon" />
              <span>Carlos Hilado Memorial State University</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary hero-btn-main"
              onClick={() => scrollTo('skills')}
            >
              <span>Explore My Skills</span>
              <ArrowDown size={18} />
            </button>
            <button
              type="button"
              className="btn btn-secondary hero-btn-sub"
              onClick={() => scrollTo('contact')}
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Profile Visual */}
        <div className="hero-visual">
          <ProfileAvatar name={data.name} initials={data.initials} />
        </div>
      </div>
    </section>
  );
}
