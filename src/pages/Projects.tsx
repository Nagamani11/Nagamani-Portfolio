import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

// ─── Play Store SVG icon ───────────────────────────────────────────────────
function PlayStoreIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.37.21.8.22 1.18.04L16.76 12 4.36.2C3.98.02 3.55.03 3.18.24 2.47.65 2 1.42 2 2.28v19.44c0 .86.47 1.63 1.18 2.04z" />
      <path d="M20.5 10.26L17.54 8.6 13.9 12l3.64 3.4 2.96-1.66A2.02 2.02 0 0 0 21.5 12c0-.73-.38-1.38-.99-1.74z" opacity=".8" />
      <path d="M4.36.2l11.8 10.6-2.71 2.54L4.35.2z" opacity=".6" />
      <path d="M4.36 23.8l9.09-13.14 2.71 2.54L4.36 23.8z" opacity=".6" />
    </svg>
  )
}

// ─── External link icon ────────────────────────────────────────────────────
function ExternalIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

// ─── Data ──────────────────────────────────────────────────────────────────
type Project = {
  title: string
  subtitle: string
  description: string
  tags: string[]
  category: 'Web' | 'Mobile' | 'Mobile + Web'
  status: 'Live' | 'In Progress'
  gradient: string
  accentColor: string
  link?: string
  linkLabel?: string
  linkType?: 'playstore' | 'website'
  icon: string
}

const projects: Project[] = [
  {
    title: 'HiFix Customer App',
    subtitle: 'Home Services Marketplace',
    description: 'Mobile app for customers to book home services — cleaning, electricians, drivers. Features real-time booking, Razorpay payment gateway, Google Maps live tracking, and OTP login via AWS SNS.',
    tags: ['React Native', 'Django', 'Razorpay', 'Google Maps', 'AWS SNS', 'PostgreSQL'],
    category: 'Mobile',
    status: 'Live',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
    accentColor: '#3395ff',
    link: 'https://play.google.com/store/apps/details?id=com.hifixcustomer',
    linkLabel: 'Open on Play Store',
    linkType: 'playstore',
    icon: '🛠️',
  },
  {
    title: 'HiFix Experts App',
    subtitle: 'Service Expert Management',
    description: 'Expert-facing mobile app to manage bookings, update job status, and communicate with customers in real time. OTP login, Firebase push notifications, and a full Django REST API backend.',
    tags: ['React Native', 'Django REST', 'Firebase', 'Google Maps', 'PostgreSQL'],
    category: 'Mobile',
    status: 'Live',
    gradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 60%, #1c2128 100%)',
    accentColor: '#22c55e',
    link: 'https://play.google.com/store/apps/details?id=com.hifixexpert',
    linkLabel: 'Open on Play Store',
    linkType: 'playstore',
    icon: '👷',
  },
  {
    title: 'Jawar Community App',
    subtitle: 'Local Service Platform',
    description: 'Community service platform connecting users with local service providers. Features user registration, service booking, real-time notifications, and seamless provider-customer communication.',
    tags: ['React Native', 'Django REST', 'Firebase', 'PostgreSQL'],
    category: 'Mobile',
    status: 'Live',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d0d5a 60%, #3d1080 100%)',
    accentColor: '#a78bfa',
    link: 'https://play.google.com/store/apps/details?id=com.jawar',
    linkLabel: 'Open on Play Store',
    linkType: 'playstore',
    icon: '🏘️',
  },
  {
    title: 'HiFix Innovatives',
    subtitle: 'Service Marketplace Website',
    description: 'Responsive web portal for HiFix to showcase home services, enable user onboarding, and drive traffic to mobile app installations. Dynamic service listing, contact forms, and SEO optimization.',
    tags: ['React', 'Django', 'PostgreSQL', 'SEO'],
    category: 'Web',
    status: 'Live',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0d2137 60%, #0a3d62 100%)',
    accentColor: '#0ea5e9',
    link: 'https://hifix.in',
    linkLabel: 'Visit hifix.in',
    linkType: 'website',
    icon: '🌐',
  },
  {
    title: 'Rotiwala',
    subtitle: 'Food Delivery Platform',
    description: 'Complete food delivery platform offering homemade-style meals with order management, OTP authentication, secure online payment via Razorpay, and real-time order status updates.',
    tags: ['React Native', 'Django', 'Razorpay', 'PostgreSQL', 'Firebase'],
    category: 'Mobile',
    status: 'Live',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #2d1500 60%, #4a2400 100%)',
    accentColor: '#f97316',
    link: 'https://rotiwala.org',
    linkLabel: 'Visit rotiwala.org',
    linkType: 'website',
    icon: '🍱',
  },
  {
    title: 'SP Consultancies',
    subtitle: 'Pharmaceutical Engineering Website',
    description: 'Premium corporate website for Sneha & Prahar Consultancy Services presenting pharmaceutical engineering, CQV, CSV, MES, facility audit readiness, and related consultancy services.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'SEO', 'Vite'],
    category: 'Web',
    status: 'Live',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #122240 60%, #1a3a5c 100%)',
    accentColor: '#38bdf8',
    link: 'https://spconsultancies.in',
    linkLabel: 'Visit spconsultancies.in',
    linkType: 'website',
    icon: '🏭',
  },
  {
    title: 'AutoBrez Website',
    subtitle: 'Motors & Curtain Blinds',
    description: 'Company website for AutoBrez showcasing motors and curtain blinds products. Ensuring responsive design, optimal performance across devices, and modern UI.',
    tags: ['React.js', 'Django', 'PostgreSQL'],
    category: 'Web',
    status: 'In Progress',
    gradient: 'linear-gradient(135deg, #111111 0%, #1a1a1a 60%, #222222 100%)',
    accentColor: '#737373',
    icon: '🔧',
  },
  {
    title: 'AutoBrez Fitness App',
    subtitle: 'Trekking & Activity Tracker',
    description: 'Trekking & Fitness application featuring activity tracking, workout logging, step counting, personalized fitness goal management, and route recording for outdoor enthusiasts.',
    tags: ['React Native', 'Django', 'PostgreSQL'],
    category: 'Mobile + Web',
    status: 'In Progress',
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #0d2a0d 60%, #0f3a0f 100%)',
    accentColor: '#4ade80',
    icon: '🏃',
  },
]

const categories = ['All', 'Web', 'Mobile', 'Mobile + Web'] as const
type Category = typeof categories[number]

// ─── Card ──────────────────────────────────────────────────────────────────
function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const isLive = project.status === 'Live'
  const hasLink = !!project.link

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.015 }}
      style={{
        background: project.gradient,
        borderRadius: 24,
        padding: '32px',
        border: `1px solid ${project.accentColor}22`,
        boxShadow: `0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)`,
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        cursor: 'default',
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute', top: -40, right: -40, width: 160, height: 160,
        borderRadius: '50%', background: `${project.accentColor}18`,
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      {/* Top row: icon + status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          background: `${project.accentColor}18`,
          border: `1px solid ${project.accentColor}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26,
        }}>
          {project.icon}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          background: isLive ? 'rgba(34,197,94,0.12)' : 'rgba(115,115,115,0.15)',
          border: `1px solid ${isLive ? 'rgba(34,197,94,0.3)' : 'rgba(115,115,115,0.3)'}`,
          borderRadius: 99, padding: '4px 12px',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: isLive ? '#22c55e' : '#737373',
            boxShadow: isLive ? '0 0 6px #22c55e' : 'none',
          }} />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
            color: isLive ? '#4ade80' : '#aaa', letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Category pill */}
      <div style={{ marginBottom: 12 }}>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
          color: project.accentColor, letterSpacing: '0.08em', textTransform: 'uppercase',
          background: `${project.accentColor}15`,
          padding: '3px 10px', borderRadius: 99,
          border: `1px solid ${project.accentColor}25`,
        }}>
          {project.category}
        </span>
      </div>

      {/* Title + subtitle */}
      <h3 style={{
        fontFamily: 'var(--font-heading)', fontSize: 22, color: '#ffffff',
        margin: '0 0 4px', lineHeight: 1.2, letterSpacing: '-0.01em',
      }}>
        {project.title}
      </h3>
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.45)',
        marginBottom: 16, fontWeight: 500,
      }}>
        {project.subtitle}
      </div>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'rgba(255,255,255,0.6)',
        lineHeight: 1.75, margin: '0 0 24px', flexGrow: 1,
      }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
            color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '3px 10px', borderRadius: 99, letterSpacing: '0.02em',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* CTA button */}
      {hasLink ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
            color: project.accentColor,
            background: `${project.accentColor}12`,
            border: `1px solid ${project.accentColor}35`,
            padding: '10px 18px', borderRadius: 12,
            textDecoration: 'none', transition: 'all 0.2s ease',
            letterSpacing: '0.01em', alignSelf: 'flex-start',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = `${project.accentColor}25`
            el.style.borderColor = `${project.accentColor}60`
            el.style.transform = 'translateX(4px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = `${project.accentColor}12`
            el.style.borderColor = `${project.accentColor}35`
            el.style.transform = 'translateX(0)'
          }}
        >
          {project.linkType === 'playstore' ? <PlayStoreIcon size={15} /> : null}
          {project.linkLabel}
          <ExternalIcon size={12} />
        </a>
      ) : (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
          color: 'rgba(255,255,255,0.25)', padding: '8px 0',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
          Currently in Development
        </div>
      )}
    </motion.div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Projects() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  const liveCount = projects.filter(p => p.status === 'Live').length
  const playStoreCount = projects.filter(p => p.linkType === 'playstore').length
  const websiteCount = projects.filter(p => p.linkType === 'website').length

  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      {/* ── Hero ── */}
      <section style={{ padding: '80px 40px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -120, right: -120, width: 560, height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(91,92,246,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeading
            label="Work"
            title={"Selected<br /><em>Projects</em>"}
            subtitle="End-to-end digital products — from architecture to Play Store & production deployment."
          />

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'inline-flex', gap: 0, background: '#fafafa',
              border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 48,
            }}
          >
            {[
              { label: 'Total Projects', value: projects.length },
              { label: 'Live & Deployed', value: liveCount },
              { label: 'On Play Store', value: playStoreCount },
              { label: 'Live Websites', value: websiteCount },
            ].map((s, i) => (
              <div key={s.label} style={{
                padding: '16px 28px', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(0,0,0,0.07)' : 'none',
              }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: '#080808', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#aaa', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}
            style={{ display: 'flex', gap: 8, marginBottom: 48 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13,
                  padding: '9px 22px', borderRadius: 99, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: active === cat ? '#080808' : 'rgba(0,0,0,0.05)',
                  color: active === cat ? '#fff' : '#737373',
                  boxShadow: active === cat ? '0 4px 16px rgba(0,0,0,0.15)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 20,
              }}
            >
              {filtered.map((p, i) => (
                <ProjectCard key={p.title} project={p} delay={i * 0.07} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Live websites spotlight ── */}
      <section style={{ padding: '60px 40px 100px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
              color: '#5b5cf6', letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              Live Websites
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {[
                {
                  name: 'hifix.in',
                  label: 'HiFix Innovatives',
                  desc: 'Home services marketplace — book cleaning, electricians, drivers & more.',
                  href: 'https://hifix.in',
                  color: '#0ea5e9',
                },
                {
                  name: 'rotiwala.org',
                  label: 'Rotiwala',
                  desc: 'Homemade food delivery platform with online payment and order tracking.',
                  href: 'https://rotiwala.org',
                  color: '#f97316',
                },
                {
                  name: 'spconsultancies.in',
                  label: 'SP Consultancies',
                  desc: 'Pharmaceutical engineering & CQV consultancy services website.',
                  href: 'https://spconsultancies.in',
                  color: '#38bdf8',
                },
              ].map((site, i) => (
                <motion.a
                  key={site.name}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  style={{
                    textDecoration: 'none', display: 'block',
                    background: '#fafafa', border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: 20, padding: '28px', transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px rgba(0,0,0,0.1)`
                    ;(e.currentTarget as HTMLElement).style.borderColor = `${site.color}30`
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.07)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: '#22c55e', letterSpacing: '0.05em' }}>LIVE</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: '#080808', marginBottom: 4 }}>{site.label}</div>
                  <div style={{ fontFamily: 'var(--font-code)', fontSize: 12, color: site.color, marginBottom: 12 }}>{site.name}</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#737373', lineHeight: 1.65, margin: '0 0 20px' }}>{site.desc}</p>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700,
                    color: site.color,
                  }}>
                    Visit Website <ExternalIcon size={12} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
