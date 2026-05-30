import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useInView(0.15);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <FiMail size={18} />, label: 'Email', value: 'kurhadevarun3@gmail.com', href: 'mailto:kurhadevarun3@gmail.com' },
    { icon: <FiPhone size={18} />, label: 'Phone', value: '+91 9356022799', href: 'tel:+919356022799' },
    { icon: <FiMapPin size={18} />, label: 'Location', value: 'Bengaluru, Karnataka', href: null },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Contact</div>
          <h2 className="section-title">
            Let's <span style={{ color: 'var(--accent)' }}>Work Together</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            Open to internships, freelance projects, and full-time opportunities. Let's build something great.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left info */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card contact-info-card">
              <h3 className="contact-info-title">Get In Touch</h3>
              <p className="contact-info-text">
                Whether you have a project idea, a job opportunity, or just want to chat about tech — my inbox is always open.
              </p>

              <div className="contact-items">
                {contactInfo.map((item) => (
                  <div key={item.label} className="contact-item">
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="contact-item-value">{item.value}</a>
                      ) : (
                        <span className="contact-item-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-divider" />

              <div className="contact-social-title">Find me on</div>
              <div className="contact-socials">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-social-btn">
                  <FiGithub size={18} />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-social-btn contact-social-li">
                  <FiLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass-card contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input form-textarea"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary form-submit ${loading ? 'form-loading' : ''} ${sent ? 'form-sent' : ''}`}
                  disabled={loading || sent}
                >
                  {sent ? (
                    <><FiCheck size={16} /> Message Sent!</>
                  ) : loading ? (
                    <><span className="spinner" /> Sending...</>
                  ) : (
                    <><FiSend size={16} /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
