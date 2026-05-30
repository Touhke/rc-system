import { motion } from 'framer-motion';
import {
  FaDesktop, FaNetworkWired, FaServer, FaSitemap,
  FaShieldAlt, FaLightbulb, FaHeadset, FaGraduationCap,
  FaLaptop, FaPlug, FaWhatsapp, FaArrowRight
} from 'react-icons/fa';
import { services } from '../data/index.js';
import { WA_LINK } from '../data/index.js';

const iconMap = {
  FaDesktop, FaNetworkWired, FaServer, FaSitemap,
  FaShieldAlt, FaLightbulb, FaHeadset, FaGraduationCap,
  FaLaptop, FaPlug,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function Services() {
  return (
    <section id="services" style={{ padding: '100px 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration - subtle */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(26, 31, 58, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-tag">
            <FaNetworkWired size={12} />
            Nos Services
          </div>
          <h2 className="section-title">
            Des Solutions IT <span>Complètes</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            De la maintenance informatique à la cybersécurité, nous couvrons l'ensemble de vos besoins technologiques avec expertise et réactivité.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.1)',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 25px rgba(15, 23, 42, 0.12)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(15, 23, 42, 0.1)'}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${service.color}, ${service.color}88)`,
                  borderRadius: '20px 20px 0 0',
                }} />

                {/* Icon */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: `${service.color}12`,
                  border: `1.5px solid ${service.color}25`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: service.color,
                  fontSize: '1.5rem',
                }}>
                  {Icon && <Icon />}
                </div>

                {/* Content */}
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#1a1f3a',
                  marginBottom: '10px',
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '0.92rem',
                  color: '#8b94a5',
                  lineHeight: 1.65,
                  marginBottom: '24px',
                }}>
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: service.color,
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}
                >
                  Demander ce service
                  <FaArrowRight size={12} />
                </a>
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
          <p style={{ color: '#8b94a5', marginBottom: '20px', fontSize: '1rem' }}>
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp size={20} />
            Discuter de votre besoin sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
