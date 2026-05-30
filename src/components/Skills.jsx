import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data';
import './Skills.css';

const categoryColors = {
  "Programming Languages": { color: '#ff5f56', bg: 'rgba(255,95,86,0.1)' },
  Frontend: { color: '#00f5a0', bg: 'rgba(0,245,160,0.1)' },
  Backend: { color: '#7c3aed', bg: 'rgba(124,58,237,0.1)' },
  Database: { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  Tools: { color: '#00c8ff', bg: 'rgba(0,200,255,0.1)' },
  "Soft Skills": { color: '#ec4899', bg: 'rgba(236,72,153,0.1)' },
};


export default function Skills() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="skills" className="section" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,245,160,0.02) 50%, transparent)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">
            My Tech <span style={{ color: 'var(--accent)' }}>Arsenal</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            A curated stack of technologies I use to build production-grade applications.
          </p>
        </motion.div>



        {/* Skill bars by category */}
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], ci) => {
            const { color, bg } = categoryColors[category] || categoryColors.Frontend;
            return (
              <motion.div
                key={category}
                className="glass-card skills-category"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + ci * 0.1 }}
              >
                <div className="skills-category-header">
                  <div className="skills-cat-dot" style={{ background: color }} />
                  <span className="skills-cat-name" style={{ color }}>{category}</span>
                </div>
                <div className="skills-category-tags">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      className="skill-category-badge"
                      style={{ border: `1px solid ${color}40`, color: color, background: `${color}10` }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + (ci * 0.1) + (i * 0.05), duration: 0.3 }}
                      whileHover={{ scale: 1.05, background: `${color}20`, borderColor: color }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
