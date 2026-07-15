import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiGitMerge, FiMessageSquare, FiLayers, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { education, personalInfo } from '../data';
import './About.css';

const traits = [
  { icon: <FiCpu size={20} />, title: 'Agentic Workflows', desc: 'Building multi-agent systems for autonomous problem solving.' },
  { icon: <FiLayers size={20} />, title: 'RAG Architecture', desc: 'Scalable semantic search & contextual document intelligence.' },
  { icon: <FiMessageSquare size={20} />, title: 'Multimodal AI', desc: 'Integrating text, vision, and speech for richer interactions.' },
  { icon: <FiGitMerge size={20} />, title: 'LLM Orchestration', desc: 'Prompt engineering & integrating LLMs for real-world automation.' },
];

export default function About() {
  const [ref, inView] = useInView(0.2);
  const [hovered, setHovered] = useState(false);

  // Define the cards data for the deck
  const cards = [
    {
      id: 'bio',
      title: 'The Developer',
      content: (
        <div className="card-inner-content">
          <div className="about-avatar">
            <span>KVV</span>
            <div className="avatar-ring" />
          </div>
          <h3 className="card-subtitle">{personalInfo.name}</h3>
          <p className="card-tagline">{personalInfo.roles[0]}</p>
          <div className="card-divider" />
          <p className="card-body">
            I'm a Computer Science student at Jain College of Engineering, actively building intelligent automation solutions.
          </p>
          <p className="card-body">
            {personalInfo.bio}
          </p>
          <div className="card-footer-info">
             <div><FiMail /> {personalInfo.email}</div>
             <div><FiMapPin /> {personalInfo.location}</div>
          </div>
        </div>
      ),
      color: 'var(--accent)',
      rotation: -10,
      offset: -320,
    },
    {
      id: 'philosophy',
      title: 'Core Principles',
      content: (
        <div className="card-inner-content">
          <div className="traits-stack">
            {traits.map((t, i) => (
              <div key={i} className="trait-row">
                <div className="trait-icon">{t.icon}</div>
                <div>
                  <div className="trait-title">{t.title}</div>
                  <div className="trait-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      color: '#7c3aed',
      rotation: 0,
      offset: 0,
    },
    {
      id: 'education',
      title: 'Academics',
      content: (
        <div className="card-inner-content">
          {education.map((e, i) => (
            <div key={i} className="edu-stack-item">
              <span className="edu-icon">{e.icon}</span>
              <div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-inst">{e.institution}</div>
                <div className="edu-score">{e.score}</div>
              </div>
            </div>
          ))}
        </div>
      ),
      color: '#00d2ff',
      rotation: 10,
      offset: 320,
    }
  ];

  return (
    <section id="about" className="section Stack-About-Section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="about-header-centered"
        >
          <div className="section-label centered-label">About Me</div>
          <h2 className="section-title">
            The Developer<br />
            <span style={{ color: 'var(--accent)' }}>Behind the Code</span>
          </h2>
          <p className="section-subtitle centered-subtitle">
            Hover over the deck below to fan out and explore my journey, principles, and academic background.
          </p>
        </motion.div>

        <div 
          className="deck-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="deck-wrapper">
            {cards.map((card, index) => {
              const isFanned = hovered;
              const xPos = isFanned ? card.offset : 0;
              const yPos = isFanned ? Math.abs(card.rotation) * 2 : (index * -12);
              const rot = isFanned ? card.rotation : (index - 1) * 3;
              const zIdx = isFanned ? 10 : index;
              const scaleVal = isFanned ? 1 : 1 - ((2 - index) * 0.05);

              return (
                <motion.div
                  key={card.id}
                  className="holographic-card"
                  style={{ zIndex: zIdx, '--card-glow': card.color }}
                  initial={false}
                  animate={{
                    x: xPos,
                    y: yPos,
                    rotate: rot,
                    scale: scaleVal,
                  }}
                  transition={{ 
                    type: 'spring', 
                    damping: 18, 
                    stiffness: 110,
                    mass: 0.8
                  }}
                  whileHover={{
                    scale: 1.05, 
                    zIndex: 20, 
                    y: yPos - 15,
                    boxShadow: `0 30px 60px -10px ${card.color}40`,
                    borderColor: `${card.color}AA` 
                  }}
                >
                  <div className="holo-glow" />
                  <div className="card-glass-panel">
                    <h2 className="holo-card-title" style={{ color: card.color }}>
                      {card.title}
                    </h2>
                    {card.content}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
