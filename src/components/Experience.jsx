import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheck } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { experience } from '../data';
import './Experience.css';

export default function Experience() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Experience</div>
          <h2 className="section-title">
            Where I've <span style={{ color: 'var(--accent)' }}>Worked</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            Real-world internships where I shipped code, solved problems, and grew as a developer.
          </p>
        </motion.div>

        <div className="timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="timeline-center">
                <div className="timeline-line" />
                <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}60` }}>
                  <FiBriefcase size={14} />
                </div>
              </div>

              <div className="timeline-card glass-card" style={{ '--exp-color': exp.color }}>
                <div className="exp-card-top">
                  <div>
                    <div className="exp-company-row">
                      <span className="exp-company" style={{ color: exp.color }}>{exp.company}</span>
                      {exp.type === 'current' && (
                        <span className="exp-current-badge">
                          <span className="current-dot" style={{ background: exp.color }} />
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-duration">
                      <FiCalendar size={12} />
                      {exp.duration}
                    </div>
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-highlights">
                  {exp.highlights.map((h) => (
                    <div key={h} className="exp-highlight">
                      <FiCheck size={13} style={{ color: exp.color, flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="exp-tech-row">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="tech-tag"
                      style={{ color: exp.color, background: `${exp.color}15`, borderColor: `${exp.color}30` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}