import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'End-to-end development of responsive, scalable, and secure web applications using React, Django, and PostgreSQL.',
    features: ['Custom Web Applications', 'SPA Development', 'Responsive Design', 'Performance Optimization'],
    icon: '💻',
    color: '#6366f1',
    price: 'Starting at $500 (₹40,000)'
  },
  {
    title: 'Mobile App Development',
    description: 'Native-feeling cross-platform mobile applications for iOS and Android using React Native.',
    features: ['Cross-platform Apps', 'App Store Deployment', 'Push Notifications', 'Offline Support'],
    icon: '📱',
    color: '#a78bfa',
    price: 'Starting at $800 (₹65,000)'
  },
  {
    title: 'API Design & Integration',
    description: 'Designing robust RESTful APIs and seamlessly integrating third-party services like payment gateways and mapping solutions.',
    features: ['RESTful API Design', 'Payment Integration', 'Authentication Systems', 'Third-party APIs'],
    icon: '🔌',
    color: '#22d3ee',
    price: 'Starting at $300 (₹25,000)'
  },
  {
    title: 'Database Architecture',
    description: 'Designing efficient database schemas, optimizing queries, and ensuring data integrity and security.',
    features: ['Schema Design', 'Query Optimization', 'Data Migration', 'Database Security'],
    icon: '🗄️',
    color: '#22c55e',
    price: 'Starting at $250 (₹20,000)'
  }
]

export default function Services() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px' }}>
        <SectionHeading label="Services" title={"What I can do for<br /><em>your business</em>"} subtitle="Comprehensive technical solutions to help your business grow and succeed in the digital world." center />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, marginTop: 60 }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, borderColor: `${s.color}60`, boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px ${s.color}20` }}
              className="card-dark"
              style={{
                padding: '48px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column'
              }}
            >
              {/* Background glow */}
              <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: s.color, opacity: 0.08, filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }} />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: `${s.color}15`, border: `1px solid ${s.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 32, boxShadow: `0 0 24px ${s.color}20`
                }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 64, color: 'var(--border)', lineHeight: 0.8, opacity: 0.5 }}>
                  0{i + 1}
                </div>
              </div>
              
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: 'var(--text-primary)', margin: '0 0 16px' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 16px', flexGrow: 1 }}>
                {s.description}
              </p>
              
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: s.color,
                background: `${s.color}15`, padding: '6px 14px', borderRadius: 10,
                display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32, alignSelf: 'flex-start'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                {s.price}
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                {s.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, boxShadow: `0 0 8px ${s.color}` }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--text-primary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
