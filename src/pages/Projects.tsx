import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

const projects = [
  {
    title: 'HiFix — Home Services Platform',
    description: 'A full-stack marketplace connecting homeowners with verified service experts. Includes customer app, expert app, admin panel, and a high-performance Django backend.',
    tags: ['React Native', 'Django', 'PostgreSQL', 'Firebase', 'AWS'],
    slug: 'hifix',
    status: 'Live',
    category: 'Mobile + Web',
    featured: true,
  },
  {
    title: 'Rotiwala — Food Delivery',
    description: 'On-demand home-cooked food delivery app connecting local home chefs with customers. Real-time GPS tracking, Razorpay integration, and automated notifications.',
    tags: ['React Native', 'Django', 'Google Maps', 'Razorpay'],
    slug: 'rotiwala',
    status: 'Live',
    category: 'Mobile',
  },
  {
    title: 'SP Consultancies',
    description: 'Enterprise pharmaceutical engineering website for Sneha and Prahar Consultancy Services. Global-ready with multi-language SEO, fast load times, and premium editorial design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    slug: 'spconsultancies',
    status: 'Live',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&auto=format',
  },
  {
    title: 'HiFix Admin Panel',
    description: 'A comprehensive React-based admin dashboard for managing service experts, customer orders, revenue analytics, and support tickets in real time.',
    tags: ['React.js', 'TypeScript', 'Power BI', 'Django REST'],
    slug: 'hifix-admin',
    status: 'Live',
    category: 'Web',
  },
  {
    title: 'HiFix Expert App',
    description: 'Mobile application for service professionals to manage bookings, track earnings, update availability, and receive real-time job notifications.',
    tags: ['React Native', 'Firebase', 'Google Maps', 'Django REST'],
    slug: 'hifix-expert',
    status: 'Live',
    category: 'Mobile',
  },
  {
    title: 'HiFix Customer App',
    description: 'Customer-facing mobile app for booking home services, tracking experts in real time, and managing payment history across iOS-compatible Android builds.',
    tags: ['React Native', 'Stripe', 'Razorpay', 'Firebase'],
    slug: 'hifix-customer',
    status: 'Live',
    category: 'Mobile',
  },
]

const categories = ['All', 'Web', 'Mobile', 'Mobile + Web']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      <section style={{ padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <SectionHeading
            label="Work"
            title={"Selected<br /><em>Projects</em>"}
            subtitle="End-to-end digital products, from architecture to deployment."
          />

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 60 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
                  padding: '9px 22px', borderRadius: 99, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: active === cat ? '#080808' : 'rgba(0,0,0,0.05)',
                  color: active === cat ? '#fff' : '#737373',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            >
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} {...p} delay={i * 0.08} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* SP Consultancies featured */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ marginTop: 60, background: 'linear-gradient(135deg, #080808 0%, #1a1040 100%)', borderRadius: 32, padding: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', overflow: 'hidden', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(91,92,246,0.2)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 99, padding: '4px 12px', marginBottom: 20 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#22c55e' }}>Live Website</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>Sneha & Prahar<br />Consultancies</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 28 }}>
                Premium pharmaceutical engineering website serving international clients. Built with React + TypeScript + Tailwind CSS. Lighthouse performance score of 96. Fully responsive with enterprise-grade SEO.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {['React', 'TypeScript', 'Tailwind CSS', 'SEO', 'Responsive', 'Vite'].map(tag => (
                  <span key={tag} style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', padding: '4px 12px', borderRadius: 99 }}>{tag}</span>
                ))}
              </div>
              <a
                href="https://spconsultancies.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: '#080808', background: '#fff', padding: '12px 28px', borderRadius: 12, textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#5b5cf6'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.color = '#080808' }}
              >
                Visit Live Site
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', zIndex: 1, boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&h=450&fit=crop&auto=format"
                alt="SP Consultancies website"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
