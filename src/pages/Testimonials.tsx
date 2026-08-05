import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const testimonials = [
  {
    name: 'Ravi Shankar Reddy',
    role: 'CEO & Founder',
    company: 'HiFix Innovatives',
    avatar: 'RS',
    rating: 5,
    content: "Nagamani has been the backbone of our entire technology infrastructure. In the 4 years she's been with us, she's built three mobile apps, our backend API, and our admin panel — all from scratch. The quality of her code is exceptional, and she consistently delivers beyond expectations. Our Play Store apps wouldn't be live without her vision and execution.",
    highlight: 'Built our entire technology stack from scratch',
  },
  {
    name: 'Dr. Sneha Prahar',
    role: 'Managing Director',
    company: 'Sneha & Prahar Consultancies',
    avatar: 'SP',
    rating: 5,
    content: 'We needed a website that would represent our firm to global pharmaceutical companies. Nagamani understood exactly what we needed, proposed a design that exceeded our expectations, and delivered a website that regularly brings in international inquiries. The Lighthouse score of 96 and the SEO improvements have made a measurable difference to our business.',
    highlight: 'Website that drives real international business',
  },
  {
    name: 'Arun Prasad',
    role: 'Product Manager',
    company: 'HiFix Innovatives',
    avatar: 'AP',
    rating: 5,
    content: "Working with Nagamani is a product manager's dream. She asks the right questions before writing a single line of code, anticipates edge cases I didn't think of, and always delivers on time. The way she structured our Django backend made it incredibly easy to add new features as we grew.",
    highlight: 'Exceptional at anticipating requirements',
  },
  {
    name: 'Kiran Kumar M.',
    role: 'Operations Lead',
    company: 'HiFix Innovatives',
    avatar: 'KK',
    rating: 5,
    content: "The admin panel Nagamani built for our operations team saved us at least 3 hours per day. The real-time booking visibility, expert management, and Power BI analytics she integrated means we can now make data-driven decisions in minutes instead of waiting for end-of-day reports.",
    highlight: 'Saved our team 3+ hours every day',
  },
  {
    name: 'Suresh Babu',
    role: 'Service Expert',
    company: 'HiFix Platform User',
    avatar: 'SB',
    rating: 5,
    content: "The HiFix Expert App is so smooth and easy to use. Booking notifications are instant, the GPS navigation to customer homes is perfect, and the earnings dashboard is crystal clear. I can see why we experts love using it daily.",
    highlight: 'Best app experience in the home services space',
  },
  {
    name: 'Priya Venkatesh',
    role: 'Startup Founder',
    company: 'TechStack India',
    avatar: 'PV',
    rating: 5,
    content: "I hired Nagamani for a technical consulting session to review our API architecture. In just 2 hours, she identified 4 critical performance bottlenecks, suggested schema optimizations, and provided a clear roadmap. The changes she recommended reduced our API response time by 60%. Worth every rupee.",
    highlight: '60% API performance improvement',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      <section style={{ padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <SectionHeading
            label="Testimonials"
            title={"What clients<br /><em>say</em>"}
            subtitle="Real feedback from real clients and teammates who have worked with me closely."
            center
          />

          {/* Featured testimonial */}
          <div style={{ marginBottom: 60 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'linear-gradient(135deg, #080808 0%, #1a1040 100%)',
                  borderRadius: 28, padding: '64px', position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(91,92,246,0.2)' }} />
                <div style={{ position: 'absolute', bottom: -60, left: -40, width: 250, height: 250, borderRadius: '50%', background: 'rgba(167,139,250,0.12)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 32 }}>
                    {[...Array(testimonials[active].rating)].map((_, i) => (
                      <span key={i} style={{ color: '#f59e0b', fontSize: 20 }}>★</span>
                    ))}
                  </div>
                  <blockquote style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', color: '#fff', lineHeight: 1.45, margin: '0 0 40px', fontStyle: 'italic' }}>
                    "{testimonials[active].content}"
                  </blockquote>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #5b5cf6, #a78bfa)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 18, color: '#fff', flexShrink: 0 }}>
                      {testimonials[active].avatar}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: '#fff' }}>{testimonials[active].name}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{testimonials[active].role} · {testimonials[active].company}</div>
                    </div>
                    <div style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 99, padding: '6px 16px' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>"{testimonials[active].highlight}"</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 24 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: active === i ? 28 : 8, height: 8, borderRadius: 99, border: 'none', cursor: 'pointer',
                    background: active === i ? '#5b5cf6' : 'rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease', padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* All testimonial grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setActive(i)}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
                style={{
                  background: active === i ? 'linear-gradient(135deg, rgba(91,92,246,0.06), rgba(167,139,250,0.08))' : '#fff',
                  border: active === i ? '1.5px solid rgba(91,92,246,0.25)' : '1px solid rgba(0,0,0,0.07)',
                  borderRadius: 20, padding: '28px', cursor: 'pointer', transition: 'all 0.3s ease',
                }}
              >
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                  {[...Array(t.rating)].map((_, j) => <span key={j} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>)}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#444', lineHeight: 1.75, marginBottom: 20, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  "{t.content}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #5b5cf6, #a78bfa)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: '#fff', flexShrink: 0 }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: '#080808' }}>{t.name}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#aaa' }}>{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
