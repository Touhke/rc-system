import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../data/index.js';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section style={{
      padding: '100px 0',
      background: '#ffffff',
      overflow: 'hidden',
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-tag">
            <FaStar size={12} />
            Témoignages
          </div>
          <h2 className="section-title">
            Ce que Disent Nos <span>Clients</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            La satisfaction de nos clients est notre plus grande récompense. Voici ce qu'ils disent de notre travail.
          </p>
        </motion.div>

        {/* Carousel */}
        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
          <div style={{ overflow: 'hidden', borderRadius: '12px' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: 'clamp(32px, 5vw, 56px)',
                  boxShadow: '0 4px 15px rgba(15, 23, 42, 0.1)',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  position: 'relative',
                }}
              >
                {/* Quote icon */}
                <div style={{
                  position: 'absolute',
                  top: '28px',
                  right: '32px',
                  color: 'rgba(59, 130, 246, 0.08)',
                  fontSize: '4rem',
                }}>
                  <FaQuoteLeft />
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FaStar key={i} size={18} color="#F59E0B" />
                  ))}
                </div>

                {/* Text */}
                <p style={{
                  fontSize: '1.1rem',
                  color: '#1a1f3a',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  marginBottom: '32px',
                }}>
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '52px', height: '52px',
                    borderRadius: '50%',
                    background: 'rgb(96, 165, 250)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    flexShrink: 0,
                  }}>
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      color: '#1a1f3a',
                      fontSize: '1rem',
                    }}>
                      {testimonials[current].name}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '32px',
          }}>
            <button
              onClick={prev}
              style={{
                width: '44px', height: '44px',
                borderRadius: '50%',
                background: 'white',
                border: '1px solid rgba(59, 130, 246, 0.15)',
                color: 'rgb(96, 165, 250)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.08)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgb(96, 165, 250)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'rgb(96, 165, 250)'; }}
              aria-label="Précédent"
            >
              <FaChevronLeft size={14} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? 'rgb(96, 165, 250)' : '#e0e6ed',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: '44px', height: '44px',
                borderRadius: '50%',
                background: 'white',
                border: '1px solid rgba(59, 130, 246, 0.15)',
                color: 'rgb(96, 165, 250)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.08)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgb(96, 165, 250)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'rgb(96, 165, 250)'; }}
              aria-label="Suivant"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
