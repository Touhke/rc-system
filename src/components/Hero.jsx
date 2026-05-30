import { motion } from 'framer-motion';
import { FaWhatsapp, FaChevronDown, FaShieldAlt, FaBolt, FaHeadset } from 'react-icons/fa';
import { WA_LINK } from '../data/index.js';

const badges = [
  { icon: <FaShieldAlt />, text: 'Certifiés & Fiables' },
  { icon: <FaBolt />, text: 'Intervention Express' },
  { icon: <FaHeadset />, text: 'Support 24/7' },
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
        background: '#1a1f3a',
      }}
    >
      {/* Animated Background - Subtle gradient accent */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Subtle accent blob */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        {/* Subtle bottom accent */}
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute', bottom: '-15%', left: '-8%',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '80px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '760px' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              color: 'rgb(96, 165, 250)',
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'rgb(96, 165, 250)',
              boxShadow: '0 0 8px rgba(96, 165, 250, 0.4)',
              animation: 'pulse 2s infinite',
            }} />
            LA SOLUTION PARFAITE DES T.I.C. EN AFRIQUE
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: '20px',
            }}
          >
            Votre Partenaire de{' '}
            <span style={{
              color: 'rgb(96, 165, 250)',
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
              fontSize: '1.125rem',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.75,
              maxWidth: '640px',
              marginBottom: '36px',
              fontWeight: 400,
            }}
          >
            Maintenance informatique, installation réseau, cybersécurité et support technique.
            Une équipe de professionnels à votre service au Cameroun — rapidement, fiablement, efficacement.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: '1.05rem', padding: '16px 32px' }}
            >
              <FaWhatsapp size={22} />
              Contacter via WhatsApp
            </a>
            <button
              onClick={scrollToServices}
              className="btn-outline"
              style={{ fontSize: '1.05rem', padding: '16px 32px' }}
            >
              Nos Services
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
          >
            {badges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              >
                <span style={{ color: 'rgb(96, 165, 250)', fontSize: '1rem' }}>{b.icon}</span>
                {b.text}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats row at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            position: 'absolute',
            bottom: '-1px',
            left: '24px',
            right: '24px',
          }}
        >
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.3)',
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
        }}
        aria-label="Défiler vers le bas"
      >
        <FaChevronDown />
      </motion.button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
