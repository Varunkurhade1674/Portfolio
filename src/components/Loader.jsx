import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('counting'); // counting | done

  useEffect(() => {
    const start = Date.now();
    const duration = 1800;
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));
      if (progress >= 1) {
        clearInterval(interval);
        setCount(100);
        setPhase('done');
        setTimeout(() => onComplete(), 400);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exiting' && (
        <motion.div
          className="loader-root"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="loader-bg-grid" />
          <motion.div
            className="loader-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader-monogram">
              <span>V</span>
              <div className="loader-monogram-ring" />
            </div>
            <div className="loader-name">VARUN VIJAY</div>
            <div className="loader-role">Full Stack Developer</div>
            <div className="loader-bar-wrapper">
              <motion.div
                className="loader-bar"
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.05, ease: 'linear' }}
              />
            </div>
            <div className="loader-count">{count}%</div>
          </motion.div>
          <div className="loader-corner loader-corner-tl">001</div>
          <div className="loader-corner loader-corner-tr">PORTFOLIO</div>
          <div className="loader-corner loader-corner-bl">KVV</div>
          <div className="loader-corner loader-corner-br">2026</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
