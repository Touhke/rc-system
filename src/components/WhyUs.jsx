import { motion } from 'framer-motion';
import {
  FaUserTie, FaBolt, FaStar, FaCheckCircle, FaTag, FaHandshake, FaWhatsapp
} from 'react-icons/fa';
import { whyUs } from '../data/index.js';
import { WA_LINK } from '../data/index.js';

const iconMap = { FaUserTie, FaBolt, FaStar, FaCheckCircle, FaTag, FaHandshake };

export default function WhyUs() {
  return (
    <section
      id="why-us"
      style={{
        padding: '100px 0',
        background: '#1a1f3a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background subtle accent */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            color: 'rgb(96, 165, 250)',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            <FaStar size={10} />
            Pourquoi Nous Choisir
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            L'Excellence à Votre{' '}
            <span style={{
              color: 'rgb(96, 165, 250)',
            }}>
              Service
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', fontWeight: 400 }}>
            Nous ne nous contentons pas de résoudre vos problèmes — nous construisons une relation de confiance durable avec chaque client.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                  borderRadius: '12px',
                  padding: '32px',
                  transition: 'background 0.3s, border-color 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)';
                }}
              >
                <div style={{
                  width: '54px', height: '54px',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgb(96, 165, 250)',
                  fontSize: '1.4rem',
                  marginBottom: '20px',
                }}>
                  {Icon && <Icon />}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '10px',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.92rem',
                  color: 'rgba(255,255,255,0.76)',
                  lineHeight: 1.65,
                }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '56px' }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ fontSize: '1.05rem', padding: '16px 36px' }}
          >
            <FaWhatsapp size={22} />
            Demander un Devis Gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
