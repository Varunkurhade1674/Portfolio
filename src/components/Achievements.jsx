import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { achievements } from '../data';
import './Achievements.css';

export default function Achievements() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="achievements" className="section">
      <div
        className="achievements-bg"
        style={{
          background:
            'linear-gradient(180deg, transparent, rgba(245,158,11,0.03) 50%, transparent)',
        }}
      />
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Achievements</div>
          <h2 className="section-title">
            Wins &amp; <span style={{ color: 'var(--amber)' }}>Recognition</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            Competing and winning at the national and state level.
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              className="glass-card ach-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ '--ach-color': ach.color }}
            >
              <div className="ach-glow" style={{ background: ach.color }} />
              <div className="ach-icon-wrap" style={{ background: `${ach.color}15`, border: `1px solid ${ach.color}30` }}>
                <span className="ach-icon">{ach.icon}</span>
              </div>
              <div className="ach-type" style={{ color: ach.color }}>
                {ach.type}
              </div>
              <h3 className="ach-title">{ach.title}</h3>
              <p className="ach-desc">{ach.description}</p>
              {ach.venue && (
                <div className="ach-venue">📍 {ach.venue}</div>
              )}
            </motion.div>
          ))}


        </div>
      </div>
    </section>
  );
}
