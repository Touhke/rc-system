import { motion } from 'framer-motion';
import {
  FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaFacebook, FaLinkedin, FaTwitter
} from 'react-icons/fa';
import { WA_LINK, PHONE_PRIMARY, PHONE_SECONDARY, EMAIL } from '../data/index.js';

const quickLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'Nos Services', href: '#services' },
  { label: 'Pourquoi Nous', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Maintenance Informatique',
  'Installation Réseau',
  'Cybersécurité',
  'Support Technique',
  'Formation IT',
  'Conseil IT',
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const waPhone = (num) =>
    `https://wa.me/${num}?text=${encodeURIComponent("Bonjour R&C System, je souhaite avoir plus d'informations sur vos services.")}`;

  return (
    <footer style={{
      background: '#1a1f3a',
      color: 'rgba(255,255,255,0.65)',
      padding: '72px 0 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          paddingBottom: '56px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '40px', height: '40px',
                borderRadius: '8px',
                background: '#242d4a',
                border: '2px solid rgb(96, 165, 250)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: 'rgb(96, 165, 250)', fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: '0.9rem' }}>R&C</span>
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: 'white', fontSize: '1.1rem' }}>R&C System</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>Solutions IT & Réseaux</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '24px', color: 'rgba(255,255,255,0.5)' }}>
              La solution parfaite des T.I.C. en Afrique. Votre partenaire de confiance pour tous vos besoins informatiques au Cameroun.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: <FaWhatsapp />, href: WA_LINK, color: '#25D366' },
                { icon: <FaFacebook />, href: '#', color: '#1877F2' },
                { icon: <FaLinkedin />, href: '#', color: '#0A66C2' },
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
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = s.color; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '20px' }}>
              Liens Rapides
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.55)',
                      transition: 'color 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgb(96, 165, 250)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgb(96, 165, 250)', flexShrink: 0 }} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '20px' }}>
              Nos Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.55)',
                      transition: 'color 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgb(96, 165, 250)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgb(96, 165, 250)', flexShrink: 0 }} />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '20px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: <FaPhone />, value: PHONE_PRIMARY, href: waPhone('237690722872') },
                { icon: <FaPhone />, value: PHONE_SECONDARY, href: waPhone('237674161584') },
                { icon: <FaEnvelope />, value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: <FaMapMarkerAlt />, value: "Biyem-Assi Lycée, En face d'Express Union", href: '#' },
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
                    fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.55)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgb(96, 165, 250)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  <span style={{ color: 'rgb(96, 165, 250)', marginTop: '2px', flexShrink: 0 }}>{c.icon}</span>
                  {c.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          padding: '24px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} R&C System. Tous droits réservés.
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
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
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
