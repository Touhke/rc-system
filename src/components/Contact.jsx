import { motion } from 'framer-motion';
import {
  FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaClock, FaHeadset
} from 'react-icons/fa';
import { WA_LINK, PHONE_PRIMARY, PHONE_SECONDARY, EMAIL, ADDRESS } from '../data/index.js';

export default function Contact() {
  const waPhone = (num) =>
    `https://wa.me/${num.replace(/\D/g, '')}?text=${encodeURIComponent("Bonjour R&C System, je souhaite avoir plus d'informations sur vos services.")}`;

  return (
    <section
      id="contact"
      style={{ padding: '100px 0', background: 'white', overflow: 'hidden' }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-tag">
            <FaHeadset size={12} />
            Contactez-Nous
          </div>
          <h2 className="section-title">
            Besoin d'une <span>Assistance</span> Immédiate ?
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Notre équipe est disponible pour répondre à toutes vos questions et intervenir rapidement sur vos problèmes IT.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '48px',
        }}>
          {/* Contact Cards */}
          {[
            {
              icon: <FaPhone />,
              title: 'Téléphone Principal',
              value: PHONE_PRIMARY,
              sub: 'Cliquez pour ouvrir WhatsApp',
              href: waPhone('237690722872'),
              color: '#25D366',
              bg: 'rgba(37,211,102,0.08)',
              border: 'rgba(37,211,102,0.2)',
            },
            {
              icon: <FaPhone />,
              title: 'Téléphone Secondaire',
              value: PHONE_SECONDARY,
              sub: 'Cliquez pour ouvrir WhatsApp',
              href: waPhone('237674161584'),
              color: 'rgb(96, 165, 250)',
              bg: 'rgba(59, 130, 246, 0.08)',
              border: 'rgba(59, 130, 246, 0.2)',
            },
            {
              icon: <FaEnvelope />,
              title: 'Email',
              value: EMAIL,
              sub: 'Réponse sous 24h',
              href: `mailto:${EMAIL}`,
              color: 'rgb(96, 165, 250)',
              bg: 'rgba(59, 130, 246, 0.08)',
              border: 'rgba(59, 130, 246, 0.2)',
            },
            {
              icon: <FaMapMarkerAlt />,
              title: 'Adresse',
              value: 'Biyem-Assi Lycée',
              sub: "En face d'Express Union, Cameroun",
              href: 'https://maps.google.com/?q=Biyem-Assi+Lycée+Yaoundé',
              color: 'rgb(96, 165, 250)',
              bg: 'rgba(59, 130, 246, 0.08)',
              border: 'rgba(59, 130, 246, 0.2)',
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '28px',
                background: item.bg,
                border: `1.5px solid ${item.border}`,
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 20px rgba(59, 130, 246, 0.12)`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{
                width: '48px', height: '48px',
                borderRadius: '10px',
                background: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1f3a', marginBottom: '2px' }}>
                  {item.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {item.sub}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Google Maps and Location Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginTop: '48px',
          marginBottom: '48px',
        }}>
          {/* Location details card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'var(--off-white)',
              border: '1.5px solid var(--border-gray)',
              borderRadius: '12px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 850,
              color: 'var(--navy-dark)',
              marginBottom: '16px',
            }}>
              Notre Bureau Physique
            </h3>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              marginBottom: '28px',
            }}>
              Venez nous rencontrer directement pour vos besoins de maintenance informatique, configuration de réseaux ou conseils IT. Nous sommes idéalement situés à Yaoundé.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  fontSize: '1.1rem',
                  flexShrink: 0,
                }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--navy-dark)', fontSize: '0.95rem', marginBottom: '2px' }}>Adresse Principale</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                    {ADDRESS}
                  </div>
                </div>
              </div>
            </div>
 
            <a
              href="https://maps.google.com/?q=Biyem-Assi+Lycée+Yaoundé"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                alignSelf: 'flex-start',
                fontSize: '0.95rem',
                padding: '12px 28px',
                textAlign: 'center',
              }}
            >
              Obtenir l'itinéraire
            </a>
          </motion.div>
 
          {/* Map Frame Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: 'white',
              border: '1.5px solid var(--border-gray)',
              borderRadius: '12px',
              padding: '12px',
              boxShadow: 'var(--shadow-sm)',
              minHeight: '380px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <iframe
              title="R&C System Location Map"
              src="https://maps.google.com/maps?q=Biyem-Assi%20Lyc%C3%A9e,%20En%20face%20d'Express%20Union,%20Yaound%C3%A9,%20Cameroun&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: '8px',
                minHeight: '356px',
                display: 'block',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        {/* Hours + Main WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#1a1f3a',
            borderRadius: '12px',
            padding: 'clamp(36px, 5vw, 56px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
          }}
        >
          <div style={{
            width: '72px', height: '72px',
            borderRadius: '50%',
            background: 'rgba(37,211,102,0.15)',
            border: '2px solid rgba(37,211,102,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#25D366',
            fontSize: '2rem',
          }}>
            <FaWhatsapp />
          </div>

          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.9rem',
              marginBottom: '8px',
            }}>
              <FaClock size={14} />
              Support disponible 7j/7
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 900,
              color: 'white',
              marginBottom: '8px',
            }}>
              Contactez-nous sur WhatsApp
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '500px', fontWeight: 400 }}>
              Décrivez votre problème, et nous vous répondons rapidement pour vous proposer la meilleure solution.
            </p>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#25D366',
              color: 'white',
              padding: '18px 40px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(37,211,102,0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(37,211,102,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(37,211,102,0.3)'; }}
          >
            <FaWhatsapp size={24} />
            Ouvrir WhatsApp Maintenant
          </a>

          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
            Ou appelez le{' '}
            <a href={`tel:+237690722872`} style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
              +237 690 722 872
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
