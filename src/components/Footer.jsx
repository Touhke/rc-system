import { motion } from 'framer-motion';
import {
  FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaFacebook, FaLinkedin, FaTwitter,
} from 'react-icons/fa';
import { WA_LINK, PHONE_PRIMARY, PHONE_SECONDARY, EMAIL } from '../data/index.js';
import logo from '../assets/logo.jpg';

const quickLinks   = [
  { label: 'Accueil',      href: '#home'     },
  { label: 'Nos Services', href: '#services' },
  { label: 'Pourquoi Nous',href: '#why-us'   },
  { label: 'Contact',      href: '#contact'  },
];

const serviceLinks = [
  'Maintenance Informatique',
  'Installation Réseau',
  'Cybersécurité',
  'Support Technique',
  'Formation IT',
  'Conseil IT',
];

const waPhone = (num) =>
  `https://wa.me/${num}?text=${encodeURIComponent("Bonjour R&C System, je souhaite avoir plus d'informations sur vos services.")}`;

const linkHover = (color = 'rgb(96,165,250)') => ({
  onMouseEnter: e => { e.currentTarget.style.color = color; },
  onMouseLeave: e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; },
});

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0d1b3e 0%, #070e20 100%)',
      color: 'rgba(255,255,255,0.65)',
      padding: '72px 0 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          paddingBottom: '56px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>

          {/* ── Brand ── */}
          <div>
            {/* Logo avec image */}
            <a
              href="#home"
              onClick={e => { e.preventDefault(); handleNav('#home'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                marginBottom: '16px',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '2px solid rgba(96,165,250,0.35)',
                background: 'white',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img
                  src={logo}
                  alt="R&C System"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display, "Syne", sans-serif)',
                  fontWeight: 800,
                  color: 'white',
                  fontSize: '1.05rem',
                  lineHeight: 1.1,
                }}>
                  R&amp;C System
                </div>
                <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Solutions IT &amp; Réseaux
                </div>
              </div>
            </a>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '24px', color: 'rgba(255,255,255,0.65)' }}>
              La solution parfaite des T.I.C. en Afrique. Votre partenaire de confiance pour tous vos besoins informatiques au Cameroun.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: <FaWhatsapp />, href: WA_LINK,  color: '#25D366' },
                { icon: <FaFacebook />, href: '#',       color: '#1877F2' },
                { icon: <FaLinkedin />, href: '#',       color: '#0A66C2' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px', height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background    = s.color;
                    e.currentTarget.style.color         = 'white';
                    e.currentTarget.style.borderColor   = s.color;
                    e.currentTarget.style.transform     = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background    = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color         = 'rgba(255,255,255,0.55)';
                    e.currentTarget.style.borderColor   = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform     = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '0.95rem', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Liens Rapides
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={e => { e.preventDefault(); handleNav(l.href); }}
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.65)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.2s',
                    }}
                    {...linkHover()}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgb(96,165,250)', flexShrink: 0 }} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '0.95rem', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Nos Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {serviceLinks.map(s => (
                <li key={s}>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.65)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.2s',
                    }}
                    {...linkHover()}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgb(96,165,250)', flexShrink: 0 }} />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '0.95rem', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: <FaPhone />,        value: PHONE_PRIMARY,                              href: waPhone('237690722872') },
                { icon: <FaPhone />,        value: PHONE_SECONDARY,                            href: waPhone('237674161584') },
                { icon: <FaEnvelope />,     value: EMAIL,                                      href: `mailto:${EMAIL}`       },
                { icon: <FaMapMarkerAlt />, value: "Biyem-Assi Lycée, En face d'Express Union", href: '#'                    },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.86rem',
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    lineHeight: 1.5,
                  }}
                  {...linkHover()}
                >
                  <span style={{ color: 'rgb(96,165,250)', marginTop: '2px', flexShrink: 0 }}>{c.icon}</span>
                  {c.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          padding: '22px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} R&amp;C System. Tous droits réservés.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#25D366',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <FaWhatsapp />
            Contacter sur WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
