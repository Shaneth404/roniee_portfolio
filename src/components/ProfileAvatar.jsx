import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ProfileAvatar({ name = "Ronie Jr. C. Provedencia", initials = "RP" }) {
  // Support an optional user-provided profile picture if placed in public/profile.jpg or assets
  const [imgError, setImgError] = useState(false);
  const profilePhotoPath = "/profile.png";

  return (
    <div className="profile-avatar-container" aria-label={`Profile representation for ${name}`}>
      <div className="profile-avatar-frame">
        {!imgError ? (
          <img
            src={profilePhotoPath}
            alt={name}
            className="profile-avatar-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="profile-avatar-placeholder">
            <div className="avatar-graphic">
              <svg viewBox="0 0 200 200" className="avatar-svg" aria-hidden="true">
                <defs>
                  <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0D3767" />
                    <stop offset="50%" stopColor="#2B6896" />
                    <stop offset="100%" stopColor="#6C9DC1" />
                  </linearGradient>
                  <radialGradient id="avatarGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#A6C1D8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0D3767" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="92" fill="url(#avatarGrad)" />
                <circle cx="100" cy="100" r="92" fill="url(#avatarGlow)" />
                <circle cx="100" cy="100" r="86" fill="none" stroke="#D5E4EE" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
                
                {/* Stylized QA / Code Silhouette */}
                <path
                  d="M100 45 C75 45 60 62 60 84 C60 102 72 116 88 122 C56 128 42 148 40 170 C58 178 80 182 100 182 C120 182 142 178 160 170 C158 148 144 128 112 122 C128 116 140 102 140 84 C140 62 125 45 100 45 Z"
                  fill="#D5E4EE"
                  opacity="0.9"
                />
              </svg>
              <div className="avatar-initials-badge">
                <span className="initials-text">{initials}</span>
              </div>
            </div>
          </div>
        )}

        {/* Verified QA Badge indicator */}
        <div className="avatar-qa-badge" title="Information Systems • QA Tester">
          <ShieldCheck size={18} className="badge-icon" />
          <span className="badge-text">QA Ready</span>
        </div>
      </div>

      <div className="avatar-caption">
        <span className="status-dot"></span>
        <span>Open to QA & IT Internships</span>
      </div>
    </div>
  );
}
