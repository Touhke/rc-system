import { motion } from 'framer-motion';
import { FaWhatsapp, FaSearch, FaTools, FaCheckCircle } from 'react-icons/fa';
import { process } from '../data/index.js';
import { WA_LINK } from '../data/index.js';

const iconMap = { FaWhatsapp, FaSearch, FaTools, FaCheckCircle };

export default function Process() {
  return (
    <section style={{ padding: '100px 0', background: 'white', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <div className="section-tag">
            <FaTools size={12} />
            Comment ça marche
          </div>
          <h2 className="section-title">
            Notre <span>Processus</span> Simple
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            En 4 étapes simples, nous transformons votre problème informatique en solution efficace et durable.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '0',
          position: 'relative',
        }}>
          {/* Connector line (desktop only) */}
          <div style={{
            position: 'absolute',
            top: '48px',
            left: '12.5%',
            right: '12.5%',
            height: '2px',
            background: 'linear-gradient(90deg, rgb(96, 165, 250), rgb(59, 130, 246))',
            zIndex: 0,
          }} className="process-line" />

          {process.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0 20px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Circle icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    background: i === 0
                      ? '#25D366'
                      : 'rgb(96, 165, 250)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.8rem',
                    marginBottom: '24px',
                    boxShadow: i === 0
                      ? '0 4px 15px rgba(37,211,102,0.3)'
                      : '0 4px 15px rgba(59, 130, 246, 0.3)',
                    border: '3px solid white',
                    flexShrink: 0,
                  }}
                >
                  {Icon && <Icon />}
                </motion.div>

                {/* Step number badge */}
                <div style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%) translateX(30px)',
                  background: '#1a1f3a',
                  color: 'white',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  border: '2px solid white',
                }}>
                  {i + 1}
                </div>

                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#1a1f3a',
                  marginBottom: '10px',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#8b94a5',
                  lineHeight: 1.65,
                  maxWidth: '200px',
                }}>
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginTop: '64px',
            padding: '48px',
            background: 'rgba(59, 130, 246, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(59, 130, 246, 0.15)',
          }}
        >
          <h3 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#1a1f3a',
            marginBottom: '8px',
          }}>
            Prêt à commencer ?
          </h3>
          <p style={{ color: '#8b94a5', marginBottom: '24px' }}>
            Contactez-nous dès maintenant et obtenez une assistance rapide.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ fontSize: '1.05rem', padding: '16px 36px' }}
          >
            <FaWhatsapp size={22} />
            Démarrer sur WhatsApp
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-line { display: none; }
        }
      `}</style>
    </section>
  );
}
