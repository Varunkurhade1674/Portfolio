import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data';
import { 
  FaPython, FaJava, FaReact, FaHtml5, FaBootstrap, 
  FaNodeJs, FaGithub, FaDatabase, FaLaptopCode 
} from 'react-icons/fa';
import { 
  SiJavascript, SiExpress, SiFastapi, SiMongodb, SiFirebase 
} from 'react-icons/si';
import { TbApi, TbBrain } from 'react-icons/tb';
import { BsRobot } from 'react-icons/bs';
import './Skills.css';

const iconMap = {
  "JavaScript": <SiJavascript color="#f7df1e" />,
  "Python": <FaPython color="#3776AB" />,
  "Java": <FaJava color="#007396" />,
  "React": <FaReact color="#61DAFB" />,
  "HTML & CSS": <FaHtml5 color="#E34F26" />,
  "Bootstrap": <FaBootstrap color="#7952B3" />,
  "Node.js": <FaNodeJs color="#339933" />,
  "Express.js": <SiExpress color="#000000" />,
  "REST APIs": <TbApi color="#00a870" />,
  "FastAPI": <SiFastapi color="#009688" />,
  "MongoDB": <SiMongodb color="#47A248" />,
  "SQL": <FaDatabase color="#336791" />,
  "Firebase": <SiFirebase color="#FFCA28" />,
  "Vector Databases": <FaDatabase color="#00a870" />,
  "Generative AI": <TbBrain color="#7c3aed" />,
  "Agentic AI": <BsRobot color="#ec4899" />,
  "LangChain & LangGraph": <TbBrain color="#0ea5e9" />,
  "RAG": <FaDatabase color="#f59e0b" />,
  "Git & GitHub": <FaGithub color="#181717" />,
  "VS Code": <FaLaptopCode color="#007ACC" />
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
            return (
              <motion.div
                key={category}
                className="glass-card skills-category"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + ci * 0.1 }}
              >
                <div className="skills-category-header">
                  <div className="skills-cat-dot" style={{ background: 'var(--accent)' }} />
                  <span className="skills-cat-name" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{category}</span>
                </div>
                <div className="skills-category-tags">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      className="skill-category-badge"
                      style={{ 
                        border: `1px solid rgba(187, 213, 218, 0.4)`, 
                        color: 'var(--text-primary)', 
                        background: 'rgba(255, 255, 255, 0.4)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + (ci * 0.1) + (i * 0.05), duration: 0.3 }}
                      whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.8)', borderColor: 'var(--accent)' }}
                    >
                      {iconMap[skill.name] && <span style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>{iconMap[skill.name]}</span>}
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
