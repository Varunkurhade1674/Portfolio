import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          <span>Varun</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-copy">
          Designed &amp; Built by Kurhade Varun Vijay &nbsp;·&nbsp; {year}
        </p>
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
            <FiGithub size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
            <FiLinkedin size={16} />
          </a>
          <a href="mailto:kurhadevarun3@gmail.com" className="social-link">
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
