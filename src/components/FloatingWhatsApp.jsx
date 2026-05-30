import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { WA_LINK } from '../data/index.js';

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    const tooltipTimer = setTimeout(() => setTooltip(false), 6000);
    return () => { clearTimeout(timer); clearTimeout(tooltipTimer); };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '12px',
        }}>
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  maxWidth: '240px',
                  position: 'relative',
                }}
              >
                <button
                  onClick={() => setTooltip(false)}
                  style={{
                    position: 'absolute',
                    top: '8px', right: '8px',
                    background: 'none',
                    color: '#94A3B8',
                    fontSize: '0.75rem',
                    lineHeight: 1,
                  }}
                >
                  <FaTimes />
                </button>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#0F172A',
                  fontWeight: 600,
                  marginBottom: '2px',
                }}>
                  Besoin d'aide ?
                </p>
                <p style={{ fontSize: '0.8rem', color: '#64748B' }}>
                  Écrivez-nous sur WhatsApp, on répond rapidement !
                </p>
                {/* Triangle */}
                <div style={{
                  position: 'absolute',
                  bottom: '-6px', right: '20px',
                  width: '12px', height: '12px',
                  background: 'white',
                  transform: 'rotate(45deg)',
                  boxShadow: '2px 2px 4px rgba(0,0,0,0.05)',
                }} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contacter via WhatsApp"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              boxShadow: '0 4px 24px rgba(37,211,102,0.5)',
              position: 'relative',
            }}
          >
            <FaWhatsapp />
            {/* Pulse ring */}
            <span style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              border: '2px solid rgba(37,211,102,0.5)',
              animation: 'ringPulse 2s infinite',
            }} />
            <span style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              border: '2px solid rgba(37,211,102,0.25)',
              animation: 'ringPulse 2s infinite 0.4s',
            }} />
          </motion.a>
        </div>
      )}
      <style>{`
        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </AnimatePresence>
  );
}
