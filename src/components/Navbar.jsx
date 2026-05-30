import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      let found = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) found = id;
      }
      setActive(found);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="navbar-inner">
          <button className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-name">Varun</span>
          </button>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className={`nav-link ${active === link.href.replace('#', '') ? 'nav-link-active' : ''}`}
                onClick={() => handleClick(link.href)}
              >
                {link.label}
                {active === link.href.replace('#', '') && (
                  <motion.div className="nav-link-indicator" layoutId="nav-indicator" />
                )}
              </button>
            ))}
          </div>

          <div className="navbar-right">
            <a
              href="mailto:kurhadevarun3@gmail.com"
              className="btn btn-primary navbar-cta"
            >
              Let's Connect
            </a>
            <button className="navbar-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                className="mobile-nav-link"
                onClick={() => handleClick(link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="mobile-nav-num">0{i + 1}</span>
                {link.label}
              </motion.button>
            ))}
            <a href="mailto:kurhadevarun3@gmail.com" className="btn btn-primary" style={{ marginTop: 16 }}>
              Let's Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
