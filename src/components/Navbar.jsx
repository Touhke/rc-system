import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { WA_LINK } from '../data/index.js';

const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pourquoi Nous', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled
            ? 'rgba(255,255,255,0.98)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 1px 3px rgba(15, 23, 42, 0.08)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(15, 23, 42, 0.06)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: '72px' }}>
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home'); }} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: 40, height: 40, borderRadius: '8px',
              background: '#1a1f3a',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              border: '2px solid rgb(96, 165, 250)',
            }}>
              <span style={{ color: 'rgb(96, 165, 250)', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem' }}>R&C</span>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.15rem',
                color: scrolled ? '#1a1f3a' : 'white',
                lineHeight: 1.1,
                transition: 'color 0.3s',
              }}>R&C System</div>
              <div style={{
                fontSize: '0.65rem',
                color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.65)',
                letterSpacing: '0.05em',
                transition: 'color 0.3s',
              }}>Solutions IT & Réseaux</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: scrolled ? '#1a1f3a' : 'rgba(255,255,255,0.85)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = scrolled ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = scrolled ? 'rgb(96, 165, 250)' : 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = scrolled ? '#1a1f3a' : 'rgba(255,255,255,0.85)';
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ marginLeft: '8px', padding: '10px 22px', fontSize: '0.9rem' }}
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'none',
              color: scrolled ? '#1a1f3a' : 'white',
              fontSize: '1.4rem',
              display: 'none',
            }}
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(10px)',
              padding: '20px 24px 28px',
              boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)',
              borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#1a1f3a',
                  borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}
            >
              <FaWhatsapp size={20} />
              Contacter via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
