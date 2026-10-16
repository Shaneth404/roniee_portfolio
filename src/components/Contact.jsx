import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, Info, ArrowUpRight } from 'lucide-react';

export default function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., name@example.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setSubmittedStatus({
        type: 'error',
        message: 'Please resolve the highlighted validation errors before proceeding.'
      });
      return;
    }

    // Build the mailto url with proper encoding
    const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject.trim()} - from ${formData.name.trim()}`);
    const mailBody = encodeURIComponent(
      `Hello Ronie,\n\n${formData.message.trim()}\n\n---\nSender Name: ${formData.name.trim()}\nSender Email: ${formData.email.trim()}`
    );
    const mailtoUrl = `mailto:${data.email}?subject=${mailSubject}&body=${mailBody}`;

    setSubmittedStatus({
      type: 'success',
      message: 'Opening your default email application with your prefilled draft...'
    });

    // Trigger opening the visitor's mail client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact Information and Inquiry Form">
      <div className="container">
        <div className="section-header section-header-dark">
          <span className="section-eyebrow eyebrow-light">Connect &amp; Inquire</span>
          <h2 className="section-title title-light">Get in Touch</h2>
          <div className="section-divider divider-light" aria-hidden="true"></div>
          <p className="section-subtitle subtitle-light">
            I am actively seeking internship opportunities in Software QA and IT. Reach out directly or submit a message below.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Contact Details Card */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Direct Contact Information</h3>
            <p className="panel-desc">
              Feel free to connect directly via email or phone. I welcome inquiries regarding QA roles, academic collaborations, and internships.
            </p>

            <div className="contact-links-list">
              <a 
                href={`mailto:${data.email}`} 
                className="contact-channel-item"
                title={`Send direct email to ${data.email}`}
              >
                <div className="channel-icon-box">
                  <Mail size={20} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Official Email</span>
                  <span className="channel-value">{data.email}</span>
                </div>
                <ArrowUpRight size={16} className="channel-arrow" />
              </a>

              <a 
                href={`tel:${data.phone}`} 
                className="contact-channel-item"
                title={`Call ${data.phone}`}
              >
                <div className="channel-icon-box">
                  <Phone size={20} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Mobile Number</span>
                  <span className="channel-value">{data.phone}</span>
                </div>
                <ArrowUpRight size={16} className="channel-arrow" />
              </a>

              <div className="contact-channel-item static-channel">
                <div className="channel-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Location</span>
                  <span className="channel-value">{data.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-privacy-note">
              <Info size={16} className="privacy-note-icon" />
              <p>
                In accordance with personal privacy best practices, sensitive personal data (full residential address, birth date, religion) is strictly withheld from public display.
              </p>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-panel">
            <h3 className="panel-title">Compose a Message</h3>
            <p className="panel-desc">
              Fill out this form to launch a prefilled email draft addressed to Ronie Jr. C. Provedencia.
            </p>

            {submittedStatus && (
              <div 
                className={`form-alert ${submittedStatus.type === 'success' ? 'form-alert-success' : 'form-alert-error'}`}
                role="status"
              >
                {submittedStatus.type === 'success' ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}
                <span>{submittedStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Full Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                />
                {errors.name && (
                  <p id="error-name" className="field-error-text">
                    <AlertCircle size={13} /> {errors.name}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address <span className="required-star">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="e.g. jdoe@organization.com"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                />
                {errors.email && (
                  <p id="error-email" className="field-error-text">
                    <AlertCircle size={13} /> {errors.email}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject / Topic <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  className={`form-input ${errors.subject ? 'input-error' : ''}`}
                  placeholder="e.g. QA Internship Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'error-subject' : undefined}
                />
                {errors.subject && (
                  <p id="error-subject" className="field-error-text">
                    <AlertCircle size={13} /> {errors.subject}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message Details <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                  placeholder="Share details regarding the opportunity, project context, or question..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="error-message" className="field-error-text">
                    <AlertCircle size={13} /> {errors.message}
                  </p>
                )}
              </div>

              <div className="form-submission-info">
                <Info size={14} className="submit-info-icon" />
                <span>
                  Note: Clicking submit prepares a prefilled draft in your default email client. No visitor data is stored on remote servers.
                </span>
              </div>

              <button type="submit" className="btn btn-form-submit">
                <Send size={18} />
                <span>Open Email Draft</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
