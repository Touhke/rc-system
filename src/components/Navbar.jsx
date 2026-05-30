import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { WA_LINK } from '../data/index.js';
import logo from '../assets/logo.jpg';

const navLinks = [
  { label: 'Accueil',      href: '#home'     },
  { label: 'Services',     href: '#services' },
  { label: 'Pourquoi Nous',href: '#why-us'   },
  { label: 'Contact',      href: '#contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

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
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          transition: 'background 0.3s, box-shadow 0.3s',
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 12px rgba(15,23,42,0.08)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(15,23,42,0.06)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            height: '72px',
          }}
        >
          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav('#home'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: scrolled ? '2px solid rgba(10,77,157,0.2)' : '2px solid rgba(255,255,255,0.3)',
              transition: 'border-color 0.3s',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
            }}>
              <img
                src={logo}
                alt="R&C System logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display, "Syne", sans-serif)',
                fontWeight: 800,
                fontSize: '1.1rem',
                color: scrolled ? '#0d1b3e' : 'white',
                lineHeight: 1.1,
                transition: 'color 0.3s',
              }}>
                R&amp;C System
              </div>
              <div style={{
                fontSize: '0.62rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: scrolled ? '#64748b' : 'rgba(255,255,255,0.6)',
                transition: 'color 0.3s',
              }}>
                Solutions IT &amp; Réseaux
              </div>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav
            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            className="desktop-nav"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  padding: '8px 15px',
                  borderRadius: '7px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: scrolled ? '#0d1b3e' : 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = scrolled
                    ? 'rgba(10,77,157,0.08)'
                    : 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = scrolled ? '#0A4D9D' : 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = scrolled ? '#0d1b3e' : 'rgba(255,255,255,0.85)';
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginLeft: '10px',
                padding: '10px 20px',
                borderRadius: '8px',
                background: '#25D366',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 3px 12px rgba(37,211,102,0.3)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(37,211,102,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 3px 12px rgba(37,211,102,0.3)';
              }}
            >
              <FaWhatsapp size={17} />
              WhatsApp
            </a>
          </nav>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              color: scrolled ? '#0d1b3e' : 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'none',
              padding: '4px',
            }}
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            style={{
              position: 'fixed',
              top: '72px',
              left: 0, right: 0,
              zIndex: 999,
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(12px)',
              padding: '16px 24px 28px',
              boxShadow: '0 8px 32px rgba(15,23,42,0.1)',
              borderBottom: '1px solid rgba(15,23,42,0.06)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#0d1b3e',
                  borderBottom: '1px solid rgba(15,23,42,0.06)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '20px',
                padding: '14px',
                borderRadius: '10px',
                background: '#25D366',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <FaWhatsapp size={20} />
              Contacter via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav      { display: none !important; }
          .mobile-menu-btn  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
