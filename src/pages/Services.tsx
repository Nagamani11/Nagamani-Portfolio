import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Full Stack Web Development',
    icon: '🌐',
    description: "End-to-end web application development using React, TypeScript, and Django. From architecture to deployment — I own the entire stack and deliver production-ready products.",
    capabilities: ['React + TypeScript SPAs', 'Django REST APIs', 'PostgreSQL database design', 'Third-party API integrations', 'Authentication & authorization', 'CI/CD pipeline setup'],
    pricing: 'Starting at ₹80,000',
  },
  {
    number: '02',
    title: 'Mobile App Development',
    icon: '📱',
    description: 'Cross-platform iOS & Android applications built with React Native. I develop, test, and deploy to the Google Play Store — full lifecycle delivery.',
    capabilities: ['React Native (iOS + Android)', 'Play Store deployment', 'Push notifications (FCM)', 'Real-time GPS tracking', 'Offline-first architecture', 'Payment integration'],
    pricing: 'Starting at ₹1,20,000',
  },
  {
    number: '03',
    title: 'API Design & Backend Engineering',
    icon: '🔌',
    description: 'Scalable REST APIs designed for performance and developer experience. Django REST Framework with proper authentication, rate limiting, and documentation.',
    capabilities: ['REST API design', 'JWT & OAuth authentication', 'Database optimization', 'Redis caching', 'API documentation (Swagger)', 'Load testing & profiling'],
    pricing: 'Starting at ₹50,000',
  },
  {
    number: '04',
    title: 'E-Commerce & Payment Integration',
    icon: '💳',
    description: 'Seamless payment flows for Indian and global markets. Expert integration of Razorpay, Stripe, UPI, and subscription billing systems.',
    capabilities: ['Razorpay integration', 'Stripe payments', 'Subscription management', 'UPI & wallet support', 'Invoice generation', 'Refund & dispute handling'],
    pricing: 'Starting at ₹40,000',
  },
  {
    number: '05',
    title: 'Technical Consulting',
    icon: '🎯',
    description: 'Architecture reviews, technology selection, code audits, and performance optimization for existing projects. Senior-level technical guidance.',
    capabilities: ['Architecture design', 'Code review & audit', 'Technology stack selection', 'Performance optimization', 'Security assessment', 'Team onboarding'],
    pricing: '₹5,000 / hour',
  },
  {
    number: '06',
    title: 'Website Design & Development',
    icon: '✨',
    description: 'Premium corporate and portfolio websites with stunning design, excellent SEO, and perfect mobile responsiveness. Like spconsultancies.in.',
    capabilities: ['Custom React design', 'Tailwind CSS styling', 'SEO optimization', 'Core Web Vitals tuning', 'Content management', 'Figma to code'],
    pricing: 'Starting at ₹30,000',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: "We start with a deep-dive into your requirements, goals, and constraints. I'll draft a technical specification and project timeline." },
  { step: '02', title: 'Design', desc: 'UI/UX wireframes and architecture diagrams are shared for review and approval before any code is written.' },
  { step: '03', title: 'Development', desc: 'Iterative development with weekly demos and transparent progress tracking. You always know where things stand.' },
  { step: '04', title: 'Testing', desc: 'Unit tests, integration tests, and manual QA across all target devices and browsers before any release.' },
  { step: '05', title: 'Deployment', desc: 'I handle production deployment, monitoring setup, and the first 30 days of post-launch support.' },
  { step: '06', title: 'Maintenance', desc: 'Optional ongoing maintenance packages for bug fixes, security updates, and feature additions.' },
]

export default function Services() {
  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: '80px 40px 100px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <SectionHeading
            label="Services"
            title={"What I<br /><em>Offer</em>"}
            subtitle="End-to-end software development services for startups, enterprises, and product teams."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {services.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(0,0,0,0.1)' }}
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 24, padding: '36px', transition: 'box-shadow 0.3s', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 20, right: 24, fontFamily: 'var(--font-code)', fontSize: 48, color: 'rgba(0,0,0,0.04)', fontWeight: 700, lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: '#080808', margin: '0 0 12px', lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#737373', lineHeight: 1.75, marginBottom: 20 }}>{s.description}</p>
                <div style={{ marginBottom: 24 }}>
                  {s.capabilities.map(c => (
                    <div key={c} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#5b5cf6', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#555' }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: 16 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, color: '#5b5cf6' }}>{s.pricing}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '80px 40px 100px', background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <SectionHeading label="Process" title={"How I<br /><em>work</em>"} subtitle="A transparent, structured approach to delivering great software." center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: '#fff', borderRadius: 20, padding: '32px', border: '1px solid rgba(0,0,0,0.07)' }}>
                <div style={{ fontFamily: 'var(--font-code)', fontSize: 13, color: '#5b5cf6', background: 'rgba(91,92,246,0.08)', padding: '4px 12px', borderRadius: 99, display: 'inline-block', marginBottom: 18 }}>Step {p.step}</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: '#080808', margin: '0 0 12px' }}>{p.title}</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#737373', lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 52px)', color: '#080808', margin: '0 0 20px', lineHeight: 1.1 }}>
              {"Let's build something<br />"}
              <em>remarkable together</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#737373', lineHeight: 1.7, marginBottom: 40 }}>
              {"I'm available for freelance projects, long-term contracts, and full-time positions. Get in touch and let's talk about your project."}
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: '#fff', background: '#080808', padding: '15px 36px', borderRadius: 14, textDecoration: 'none', transition: 'all 0.25s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#5b5cf6'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(91,92,246,0.3)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#080808'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
            >
              Start a Conversation →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
