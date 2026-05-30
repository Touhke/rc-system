import { motion } from 'framer-motion';
import { FaWhatsapp, FaChevronDown, FaShieldAlt, FaBolt, FaHeadset } from 'react-icons/fa';
import { WA_LINK } from '../data/index.js';

const badges = [
  { icon: <FaShieldAlt />, text: 'Certifiés & Fiables' },
  { icon: <FaBolt />,      text: 'Intervention Express' },
  { icon: <FaHeadset />,   text: 'Support 24/7' },
];

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0d1b3e 0%, #1a2a5e 50%, #0a1628 100%)',
      }}
    >
      {/* Animated background blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute', bottom: '-15%', left: '-8%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(0,194,255,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: '100px',
          paddingBottom: '80px',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '780px' }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(59,130,246,0.12)',
              border: '1px solid rgba(96,165,250,0.3)',
              color: 'rgb(96,165,250)',
              padding: '8px 18px',
              borderRadius: '100px',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: 'rgb(96,165,250)',
              boxShadow: '0 0 8px rgba(96,165,250,0.6)',
              flexShrink: 0,
              animation: 'heroPulse 2s infinite',
            }} />
            La Solution Parfaite des T.I.C. en Afrique
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-display, "Syne", sans-serif)',
              fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.18,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Votre Partenaire de{' '}
            <span style={{
              background: 'linear-gradient(90deg, rgb(96,165,250), rgb(0,194,255))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Confiance
            </span>{' '}
            pour l'IT & les Réseaux
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.8,
              maxWidth: '620px',
              marginBottom: '40px',
            }}
          >
            Maintenance informatique, installation réseau, cybersécurité et support technique.
            Une équipe de professionnels à votre service au Cameroun — rapidement, fiablement, efficacement.
          </motion.p>

          {/* ─── CTA BUTTONS ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              alignItems: 'center',
              marginBottom: '52px',
            }}
          >
            {/* Primary — WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#25D366',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.45)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.35)';
              }}
            >
              <FaWhatsapp size={20} />
              Contacter via WhatsApp
            </a>

            {/* Secondary — Nos Services */}
            <button
              onClick={scrollToServices}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: 'white',
                padding: '14px 30px',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: 600,
                border: '2px solid rgba(255,255,255,0.35)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
                flexShrink: 0,
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Nos Services
            </button>
          </motion.div>
          {/* ─────────────────────────────────────────────────── */}

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            {badges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                }}
              >
                <span style={{
                  color: 'rgb(96,165,250)',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  {b.icon}
                </span>
                {b.text}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: 'white',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 2,
          backdropFilter: 'blur(8px)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
        aria-label="Défiler vers le bas"
      >
        <FaChevronDown size={16} />
      </motion.button>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }
        @media (max-width: 480px) {
          #home .hero-btns a,
          #home .hero-btns button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
