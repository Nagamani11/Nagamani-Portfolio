import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'
import FloatingBackground from '../components/FloatingBackground'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import TechnologyCard from '../components/TechnologyCard'
// Use a runtime public URL so deployed sites (GitHub Pages / static hosts)
// reliably serve the image from `public/assets/Developer.png`.
const developerImage = `${import.meta.env.BASE_URL}assets/Developer.png`

const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '+', label: 'Projects Delivered' },
  { value: 3, suffix: '', label: 'Play Store Apps' },
  { value: 3, suffix: '', label: 'Live Websites' },
  { value: 50, suffix: 'K+', label: 'Lines of Code' },
  { value: 99, suffix: '%', label: 'Delivery Rate' },
]

const featuredProjects = [
  {
    title: 'HiFix Customer App',
    subtitle: 'Home Services Marketplace',
    description: 'Mobile app for customers to book home services — cleaning, electricians, drivers. Features real-time booking, Razorpay payment gateway, Google Maps live tracking, and OTP login.',
    tags: ['React Native', 'Django', 'PostgreSQL'],
    category: 'Mobile' as const,
    status: 'Live' as const,
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
    accentColor: '#3395ff',
    link: 'https://play.google.com/store/apps/details?id=com.hifixcustomer',
    linkLabel: 'Open on Play Store',
    linkType: 'playstore' as const,
    icon: '🛠️',
  },
  {
    title: 'Rotiwala',
    subtitle: 'Food Delivery Platform',
    description: 'Complete food delivery platform offering homemade-style meals with order management, user authentication, secure online payment, and real-time order status updates.',
    tags: ['React Native', 'Django', 'Razorpay'],
    category: 'Mobile' as const,
    status: 'Live' as const,
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #2d1500 60%, #4a2400 100%)',
    accentColor: '#f97316',
    link: 'https://rotiwala.org',
    linkLabel: 'Visit rotiwala.org',
    linkType: 'website' as const,
    icon: '🍱',
  },
  {
    title: 'SP Consultancies',
    subtitle: 'Pharmaceutical Engineering Website',
    description: 'Premium corporate website for Sneha & Prahar Consultancy Services presenting pharmaceutical engineering, CQV, CSV, MES, facility audit readiness, and related consultancy services.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Web' as const,
    status: 'Live' as const,
    gradient: 'linear-gradient(135deg, #0a1628 0%, #122240 60%, #1a3a5c 100%)',
    accentColor: '#38bdf8',
    link: 'https://spconsultancies.in',
    linkLabel: 'Visit spconsultancies.in',
    linkType: 'website' as const,
    icon: '🏭',
  },
]

const techHighlights = [
  { name: 'React Native', icon: '📱', category: 'Mobile', color: '#61dafb' },
  { name: 'Django', icon: '🎯', category: 'Backend', color: '#092e20' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database', color: '#336791' },
  { name: 'Razorpay', icon: '💳', category: 'Integration', color: '#3395ff' },
  { name: 'Firebase', icon: '🔥', category: 'Backend', color: '#ffca28' },
  { name: 'Google Maps', icon: '🗺️', category: 'Integration', color: '#4285f4' },
]

const roles = ['Full Stack Developer', 'React Native Developer', 'Django Developer']

function RoleCycler() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      style={{
        fontFamily: 'var(--font-body)', fontSize: 20, fontWeight: 600,
        background: 'linear-gradient(90deg, var(--accent-light), var(--cyan))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.01em',
      }}
    >
      {roles[index]}
    </motion.div>
  )
}

// Inline Play Store Icon for featured projects
function PlayStoreIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.37.21.8.22 1.18.04L16.76 12 4.36.2C3.98.02 3.55.03 3.18.24 2.47.65 2 1.42 2 2.28v19.44c0 .86.47 1.63 1.18 2.04z" />
      <path d="M20.5 10.26L17.54 8.6 13.9 12l3.64 3.4 2.96-1.66A2.02 2.02 0 0 0 21.5 12c0-.73-.38-1.38-.99-1.74z" opacity=".8" />
      <path d="M4.36.2l11.8 10.6-2.71 2.54L4.35.2z" opacity=".6" />
      <path d="M4.36 23.8l9.09-13.14 2.71 2.54L4.36 23.8z" opacity=".6" />
    </svg>
  )
}

function ExternalIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

// Featured Project Card Component
function FeaturedProjectCard({ project, delay }: { project: any, delay: number }) {
  const isLive = project.status === 'Live'
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
      }}
    >
      <div style={{
        position: 'absolute', top: -40, right: -40, width: 160, height: 160,
        borderRadius: '50%', background: `${project.accentColor}18`,
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

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

      <p style={{
        fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'rgba(255,255,255,0.6)',
        lineHeight: 1.75, margin: '0 0 24px', flexGrow: 1,
      }}>
        {project.description}
      </p>

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
    </motion.div>
  )
}


export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* ── HERO ── */}
      <section ref={heroRef} style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <FloatingBackground />
        <motion.div style={{ y: heroY, opacity: heroOpacity, position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '120px 40px 80px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' }}>
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: 99, padding: '6px 16px', marginBottom: 28,
                  boxShadow: 'var(--glow-accent)',
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--accent-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Available for work</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--text-secondary)', margin: '0 0 8px', fontWeight: 500 }}>Hello, I'm</p>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(52px, 6vw, 88px)', margin: '0 0 12px', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff' }}>
                  Gugulothu<br />
                  <span className="gradient-text">Nagamani</span>
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} style={{ height: 36, marginBottom: 24, overflow: 'hidden' }}>
                <RoleCycler />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 500, marginBottom: 40 }}
              >
                Building scalable web applications, enterprise systems, and mobile apps for businesses around the world. Based in Hyderabad, India.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/projects" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
                  color: '#fff', background: 'var(--accent)',
                  padding: '14px 30px', borderRadius: 14,
                  textDecoration: 'none', transition: 'all 0.25s ease',
                  letterSpacing: '-0.01em', boxShadow: 'var(--glow-accent)',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--accent-light)'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 12px 32px rgba(99,102,241,0.4)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--accent)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'var(--glow-accent)' }}
                >
                  Explore Projects
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <a href="#" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
                  color: 'var(--text-primary)', background: 'rgba(255,255,255,0.03)',
                  padding: '13px 30px', borderRadius: 14,
                  textDecoration: 'none', border: '1.5px solid var(--border)',
                  transition: 'all 0.25s ease'
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.2)'; el.style.background = 'rgba(255,255,255,0.08)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.background = 'rgba(255,255,255,0.03)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                  Download Resume
                </a>
              </motion.div>
            </div>

            {/* Right: Photo + floating cards */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: 420, height: 520, borderRadius: 32,
                background: 'var(--bg-elevated)', overflow: 'hidden',
                position: 'relative', border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
              }}>
                <img
                  src={developerImage}
                  alt="Gugulothu Nagamani - Full Stack Developer"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,7,15,0.8) 0%, transparent 40%)' }} />
                <div style={{
                  position: 'absolute', bottom: 24, left: 24, right: 24,
                  background: 'rgba(13,13,26,0.6)', backdropFilter: 'blur(20px)',
                  borderRadius: 20, padding: '16px 20px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: '#fff' }}>Gugulothu Nagamani</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>Full Stack Developer · Hyderabad</div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} style={{
                position: 'absolute', top: 48, left: -20,
                background: 'rgba(13,13,26,0.8)', backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20,
                padding: '18px 24px', boxShadow: '0 16px 48px rgba(0,0,0,0.4)', minWidth: 160
              }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 36, color: '#fff', lineHeight: 1, textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>2+</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>Years Experience</div>
              </motion.div>

              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} style={{
                position: 'absolute', bottom: 140, right: -28,
                background: 'rgba(13,13,26,0.8)', backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20,
                padding: '16px 20px', boxShadow: '0 16px 48px rgba(0,0,0,0.4)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: 'var(--green)' }}>Available Now</span>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>Open to opportunities</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 1 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 24, height: 36, border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 99, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '5px 0' }}>
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 4, height: 8, background: 'var(--accent)', borderRadius: 99, boxShadow: '0 0 8px var(--accent)' }} />
          </div>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '60px 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0 }}>
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{ textAlign: 'center', padding: '20px 16px', borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 42, color: 'var(--text-primary)', lineHeight: 1, marginBottom: 6 }}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section style={{ padding: '120px 40px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20%', left: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1440, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
            <SectionHeading label="Portfolio" title={"Featured <em>Projects</em>"} subtitle="Handcrafted digital products that drive real business results." />
            <Link to="/projects" style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
              color: 'var(--accent-light)', textDecoration: 'none', whiteSpace: 'nowrap',
              marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6,
            }}>
              View All Projects <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {featuredProjects.map((p, i) => <FeaturedProjectCard key={p.title} project={p} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{ padding: '80px 40px 120px', background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <SectionHeading label="Stack" title={"Built with modern <em>technology</em>"} subtitle="Tools and frameworks I use to build robust, scalable applications." center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
            {techHighlights.map((t, i) => <TechnologyCard key={t.name} {...t} delay={i * 0.06} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/technology" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--accent-light)', textDecoration: 'none' }}>View Full Stack →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '100px 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'linear-gradient(135deg, var(--bg-surface) 0%, #16162e 100%)',
              borderRadius: 32, padding: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 60, position: 'relative', overflow: 'hidden',
              border: '1px solid var(--border)', boxShadow: '0 32px 64px rgba(0,0,0,0.5)'
            }}>
            <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(99,102,241,0.15)', filter: 'blur(40px)' }} />
            <div style={{ position: 'absolute', bottom: -60, left: 200, width: 200, height: 200, borderRadius: '50%', background: 'rgba(167,139,250,0.1)', filter: 'blur(30px)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4vw, 56px)', color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>
                Ready to build something<br /><span className="gradient-text">extraordinary?</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-secondary)', margin: 0, maxWidth: 480 }}>
                {"I'm currently taking on new clients and projects. Let's discuss how I can help build your next product."}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flexShrink: 0, position: 'relative', zIndex: 1 }}>
              <Link to="/contact" style={{
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
                color: '#fff', background: 'var(--accent)',
                padding: '14px 32px', borderRadius: 14, textDecoration: 'none',
                transition: 'all 0.2s', textAlign: 'center', whiteSpace: 'nowrap',
                boxShadow: 'var(--glow-accent)',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--accent-light)'; el.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--accent)'; el.style.transform = 'translateY(0)' }}
              >
                Start a Project
              </Link>
              <Link to="/about" style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
                color: 'var(--text-muted)', textDecoration: 'none', textAlign: 'center', padding: '10px',
                transition: 'color 0.2s'
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
              >
                Learn About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
