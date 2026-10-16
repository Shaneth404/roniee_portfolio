import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Code2, 
  FileSpreadsheet, 
  FileText, 
  Table, 
  Presentation, 
  Eye, 
  BrainCircuit, 
  RefreshCw 
} from 'lucide-react';

export default function Skills({ data }) {
  // Map specific skill item icons
  const getItemIcon = (name) => {
    switch (name) {
      case 'Black-Box Testing':
        return <Layers size={18} className="item-icon" />;
      case 'White-Box Testing':
        return <Code2 size={18} className="item-icon" />;
      case 'Test Case Documentation using Qase':
        return <FileSpreadsheet size={18} className="item-icon" />;
      case 'Microsoft Word':
        return <FileText size={18} className="item-icon" />;
      case 'Microsoft Excel':
        return <Table size={18} className="item-icon" />;
      case 'Microsoft PowerPoint':
        return <Presentation size={18} className="item-icon" />;
      case 'Attention to Detail':
        return <Eye size={18} className="item-icon" />;
      case 'Analytical Thinking':
        return <BrainCircuit size={18} className="item-icon" />;
      case 'Adaptability':
        return <RefreshCw size={18} className="item-icon" />;
      default:
        return <CheckCircle2 size={18} className="item-icon" />;
    }
  };

  const getCategoryHeaderIcon = (category) => {
    switch (category) {
      case 'Software Testing':
        return <ShieldCheck size={28} className="cat-icon" />;
      case 'Computer Skills':
        return <Cpu size={28} className="cat-icon" />;
      case 'Professional Skills':
        return <Sparkles size={28} className="cat-icon" />;
      default:
        return <CheckCircle2 size={28} className="cat-icon" />;
    }
  };

  return (
    <section id="skills" className="section skills-section" aria-label="Skills and Expertise">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Core Competencies</span>
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <div className="section-divider" aria-hidden="true"></div>
          <p className="section-subtitle">
            Organized into key software quality assurance, computing, and professional competencies.
          </p>
        </div>

        <div className="skills-grid">
          {data.skills.map((categoryGroup, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                <div className="category-icon-box">
                  {getCategoryHeaderIcon(categoryGroup.category)}
                </div>
                <div>
                  <h3 className="category-title">{categoryGroup.category}</h3>
                  <span className="category-badge">{categoryGroup.items.length} Competencies</span>
                </div>
              </div>

              <p className="category-desc">{categoryGroup.description}</p>

              <ul className="skill-items-list" aria-label={`${categoryGroup.category} items`}>
                {categoryGroup.items.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-item">
                    <div className="skill-item-icon-box">
                      {getItemIcon(skill)}
                    </div>
                    <span className="skill-item-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
