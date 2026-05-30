import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiCheck, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { projects } from '../data';
import './Projects.css';

const allFilters = ['All', 'React', 'Node.js', 'MongoDB', 'JavaScript'];

function ProjectCard({ project, onClick, index, inView, isCarousel }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={`project-card glass-card ${project.featured ? 'project-featured' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={isCarousel ? { opacity: 0 } : { opacity: 0, y: 40 }}
      animate={isCarousel ? { opacity: 1 } : (inView ? { opacity: 1, y: 0 } : {})}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onClick={() => onClick(project)}
      whileHover={{ z: 20 }}
      style={{ 
        '--card-color': project.color,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {project.featured && (
        <div className="featured-ribbon">
          <FiStar size={10} />
          FEATURED
        </div>
      )}

      <div className="project-header">
        <div className="project-icon-wrap" style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
          <span className="project-icon">{project.icon}</span>
        </div>
        <div className="project-badge-wrap">
          <span
            className="badge"
            style={{
              background: `${project.color}15`,
              color: project.color,
              border: `1px solid ${project.color}30`,
            }}
          >
            {project.badge}
          </span>
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-subtitle" style={{ color: project.color }}>{project.subtitle}</p>
      <p className="project-desc">{project.description.slice(0, 110)}...</p>

      <div className="project-tech-row">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
        {project.tech.length > 4 && (
          <span className="tech-tag">+{project.tech.length - 4}</span>
        )}
      </div>

      <div className="project-footer">
        <span className="project-view-btn" style={{ color: project.color }}>
          View Details →
        </span>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  const [showVideo, setShowVideo] = useState(false);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {!showVideo ? (
          <motion.div
            key="details-panel"
            className="modal-panel"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            style={{ '--modal-color': project.color }}
          >
            <div className="modal-top-bar" style={{ background: `linear-gradient(90deg, ${project.color}15, transparent)`, borderBottom: `1px solid ${project.color}20` }}>
              <div className="modal-title-row">
                <span className="modal-icon">{project.icon}</span>
                <div>
                  <h2 className="modal-title">{project.title}</h2>
                  <p className="modal-subtitle" style={{ color: project.color }}>{project.subtitle}</p>
                </div>
                {project.featured && (
                  <span className="badge" style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30`, marginLeft: 'auto' }}>
                    <FiStar size={10} /> FEATURED
                  </span>
                )}
              </div>
              <button className="modal-close" onClick={onClose}><FiX size={20} /></button>
            </div>

          <div className="modal-body">
            <p className="modal-desc">{project.description}</p>

            <div className="modal-section">
              <div className="modal-section-title">Key Features</div>
              <div className="modal-features">
                {project.features.map((f) => (
                  <div key={f} className="modal-feature">
                    <FiCheck size={14} style={{ color: project.color, flexShrink: 0 }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <div className="modal-section-title">Tech Stack</div>
              <div className="modal-tech-row">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag" style={{ color: project.color, borderColor: `${project.color}25`, background: `${project.color}10` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-cta-row">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                <FiGithub size={16} /> GitHub
              </a>
              {project.demoVideo ? (
                <button onClick={() => setShowVideo(true)} className="btn btn-primary" style={{ background: project.color, boxShadow: `0 0 20px ${project.color}40`, border: 'none', color: '#050508' }}>
                  <FiExternalLink size={16} /> Live Demo
                </button>
              ) : (
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: project.color, boxShadow: `0 0 20px ${project.color}40` }}>
                  <FiExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
        ) : (
          <motion.div
            key="video-panel"
            className="video-panel-modal relative flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            style={{ 
              width: '100%', 
              maxWidth: '900px', 
              aspectRatio: '16/9', 
              background: '#050508', 
              borderRadius: '16px', 
              overflow: 'hidden',
              boxShadow: `0 0 40px ${project.color}30`,
              border: `1px solid ${project.color}20`
            }}
          >
            <button 
              className="modal-close" 
              onClick={() => setShowVideo(false)} 
              style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.1)', color: 'white', zIndex: 10, border: 'none' }}
            >
              <FiX size={24} />
            </button>
            <video 
              src={project.demoVideo}
              controls
              autoPlay
              controlsList="nodownload"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

function CarouselCard({ project, index, totalAngle, radius, smoothRotation, onSelect }) {
  const blur = useTransform(smoothRotation, (v) => {
    let relAngle = (v + totalAngle) % 360;
    if (relAngle > 180) relAngle -= 360;
    if (relAngle < -180) relAngle += 360;
    const absAngle = Math.abs(relAngle);
    if (absAngle < 35) return 'blur(0px)';
    const blurAmount = ((absAngle - 35) / 145) * 12; // Increased max blur to 12px
    return `blur(${blurAmount}px)`;
  });

  const opacity = useTransform(smoothRotation, (v) => {
    let relAngle = (v + totalAngle) % 360;
    if (relAngle > 180) relAngle -= 360;
    if (relAngle < -180) relAngle += 360;
    const absAngle = Math.abs(relAngle);
    if (absAngle < 60) return 1;
    return 1 - ((absAngle - 60) / 120) * 0.75; // Heavy opacity fade down to 0.25 at the far back
  });

  return (
    <motion.div
      className="carousel-card-wrap"
      style={{
        transform: `rotateY(${totalAngle}deg) translateZ(${radius}px)`,
        filter: blur,
        opacity: opacity
      }}
    >
      <ProjectCard project={project} onClick={onSelect} index={index} inView={true} isCarousel={true} />
    </motion.div>
  );
}

function ProjectCarousel({ items, onSelect }) {
  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, { stiffness: 60, damping: 20 });
  const [isHovered, setIsHovered] = useState(false);

  const angle = items.length ? 360 / items.length : 0;
  
  // Dynamically calculate the radius so that cards don't overlap.
  const baseCardWidth = 280; 
  let radius = 200;
  if(items.length > 1) {
    radius = (baseCardWidth / 2) / Math.tan(Math.PI / items.length) + 40;
    radius = Math.max(220, Math.min(radius, 400));
  }

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (items.length <= 1 || isHovered) return;
    
    const interval = setInterval(() => {
      const currentRot = rotation.get();
      const nearest = Math.round(currentRot / angle) * angle;
      rotation.set(nearest - angle); // Rotate right (next element)
    }, 5000);
    
    return () => clearInterval(interval);
  }, [items.length, angle, rotation, isHovered]);
  
  if (items.length <= 1) {
    return (
       <div className="projects-single-fallback">
         {items.map((project, i) => (
            <ProjectCard key={project.id} project={project} onClick={onSelect} index={i} inView={true} isCarousel={true} />
         ))}
       </div>
    )
  }

  function handleRotate(dir) {
    const currentRot = rotation.get();
    const nearest = Math.round(currentRot / angle) * angle;
    rotation.set(nearest + dir * angle);
  }

  return (
    <div 
      className="carousel-scene"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={() => setIsHovered(true)}
      onPointerUp={() => setIsHovered(false)}
    >
      <button className="carousel-nav-btn left-nav" onClick={() => handleRotate(1)}>
        <FiChevronLeft size={28} />
      </button>

      <motion.div
        className="carousel-rotator"
        style={{ rotateY: smoothRotation }}
        onPan={(e, info) => {
          rotation.set(rotation.get() + info.delta.x * 0.4);
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {items.map((project, i) => (
          <CarouselCard
            key={project.id}
            project={project}
            index={i}
            totalAngle={angle * i}
            radius={radius}
            smoothRotation={smoothRotation}
            onSelect={onSelect}
          />
        ))}
      </motion.div>

      <button className="carousel-nav-btn right-nav" onClick={() => handleRotate(-1)}>
        <FiChevronRight size={28} />
      </button>

      <div className="carousel-instructions">
        Swipe or use arrows to rotate
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView(0.1);
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Projects</div>
          <div className="projects-header">
            <div>
              <h2 className="section-title">
                Things I've <span style={{ color: 'var(--accent)' }}>Built</span>
              </h2>
              <p className="section-subtitle">
                From quantum-safe encrypted chat apps to MERN-stack platforms.
              </p>
            </div>
            <div className="project-filters">
              {allFilters.map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? 'filter-active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCarousel items={filtered} onSelect={setSelected} />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
