import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { WA_LINK } from '../data/index.js';

export default function FinalCTA() {
  return (
    <section style={{
      padding: '100px 0',
      background: '#1a1f3a',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background effects - subtle */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            color: 'rgba(255,255,255,0.9)',
            padding: '8px 20px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            marginBottom: '32px',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#25D366', animation: 'pulse 2s infinite', display: 'inline-block' }} />
            Disponible maintenant
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            Besoin de Support IT{' '}
            <span style={{
              color: 'rgb(96, 165, 250)',
            }}>
              Aujourd'hui ?
            </span>
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '560px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
            fontWeight: 400,
          }}>
            Ne laissez pas un problème informatique freiner votre activité. Nos experts sont prêts à intervenir rapidement pour vous.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, #25D366, #20ba5a)',
                color: 'white',
                padding: '18px 40px',
                borderRadius: '100px',
                fontWeight: 700,
                fontSize: '1.1rem',
                boxShadow: '0 8px 30px rgba(37,211,102,0.45)',
                textDecoration: 'none',
              }}
            >
              <FaWhatsapp size={24} />
              Discuter avec un Expert
              <FaArrowRight size={16} />
            </motion.a>
          </div>

          {/* Trust signals */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}>
            {[
              'Réponse en moins de 5 min',
              'Intervention rapide',
              'Devis gratuit',
            ].map((text, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.9rem',
              }}>
                <span style={{
                  width: '18px', height: '18px',
                  borderRadius: '50%',
                  background: 'rgba(37,211,102,0.3)',
                  border: '1px solid rgba(37,211,102,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.6rem',
                  color: '#4ade80',
                }}>
                  ✓
                </span>
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
