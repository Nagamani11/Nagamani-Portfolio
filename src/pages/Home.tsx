import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'
import FloatingBackground from '../components/FloatingBackground'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import TechnologyCard from '../components/TechnologyCard'

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Projects Delivered' },
  { value: 3, suffix: '', label: 'Play Store Apps' },
  { value: 3, suffix: '', label: 'Live Websites' },
  { value: 100, suffix: 'K+', label: 'Lines of Code' },
  { value: 99, suffix: '%', label: 'Delivery Rate' },
]

const featuredProjects = [
  {
    title: 'HiFix Platform',
    description: 'End-to-end home services marketplace with real-time expert booking, customer app, admin panel, and a Django backend serving 10K+ monthly bookings.',
    tags: ['React Native', 'Django', 'PostgreSQL', 'AWS', 'Firebase'],
    slug: 'hifix',
    status: 'Live',
    featured: true,
  },
  {
    title: 'Rotiwala',
    description: 'On-demand food delivery app connecting home chefs with customers. GPS-enabled tracking, Razorpay integration, real-time order management.',
    tags: ['React Native', 'Django REST', 'Google Maps', 'Razorpay'],
    slug: 'rotiwala',
    status: 'Live',
  },
  {
    title: 'SP Consultancies',
    description: 'Premium pharmaceutical engineering website for global visibility. Enterprise-grade SEO and performance optimization.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'SEO'],
    slug: 'spconsultancies',
    status: 'Live',
  },
]

const techHighlights = [
  { name: 'React.js', icon: '⚛️', category: 'Frontend', color: '#61dafb' },
  { name: 'React Native', icon: '📱', category: 'Mobile', color: '#61dafb' },
  { name: 'TypeScript', icon: '🔷', category: 'Language', color: '#3178c6' },
  { name: 'Django', icon: '🐍', category: 'Backend', color: '#092e20' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database', color: '#336791' },
  { name: 'AWS', icon: '☁️', category: 'Cloud', color: '#ff9900' },
]

const roles = ['Full Stack Developer', 'React Native Developer', 'Django Developer', 'Mobile App Engineer']

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
      style={{ fontFamily: 'var(--font-body)', fontSize: 20, fontWeight: 600, color: '#5b5cf6', letterSpacing: '-0.01em' }}
    >
      {roles[index]}
    </motion.div>
  )
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div style={{ background: '#fff' }}>
      {/* HERO */}
      <section ref={heroRef} style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <FloatingBackground />
        <motion.div style={{ y: heroY, opacity: heroOpacity, position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '120px 40px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(91,92,246,0.08)', border: '1px solid rgba(91,92,246,0.15)',
                  borderRadius: 99, padding: '6px 16px', marginBottom: 28,
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: '#5b5cf6', letterSpacing: '0.06em' }}>AVAILABLE FOR WORK</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#737373', margin: '0 0 8px', fontWeight: 500 }}>Hello, I'm</p>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(52px, 6vw, 88px)', color: '#080808', margin: '0 0 12px', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                  Gugulothu<br />
                  <span style={{ background: 'linear-gradient(135deg, #5b5cf6 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nagamani</span>
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} style={{ height: 36, marginBottom: 24, overflow: 'hidden' }}>
                <RoleCycler />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#737373', lineHeight: 1.75, maxWidth: 500, marginBottom: 40 }}
              >
                Building scalable web applications, enterprise systems, and mobile apps for businesses around the world. Based in Hyderabad, India.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: '#fff', background: '#080808', padding: '13px 28px', borderRadius: 14, textDecoration: 'none', transition: 'all 0.25s ease', letterSpacing: '-0.01em' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#5b5cf6'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 12px 32px rgba(91,92,246,0.3)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#080808'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}
                >
                  Explore Projects
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: '#080808', background: 'transparent', padding: '12px 28px', borderRadius: 14, textDecoration: 'none', border: '1.5px solid rgba(0,0,0,0.14)', transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(0,0,0,0.3)'; el.style.background = 'rgba(0,0,0,0.03)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(0,0,0,0.14)'; el.style.background = 'transparent' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Resume
                </a>
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: '#5b5cf6', background: 'rgba(91,92,246,0.08)', padding: '12px 24px', borderRadius: 14, textDecoration: 'none', border: '1.5px solid rgba(91,92,246,0.15)', transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(91,92,246,0.14)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(91,92,246,0.08)' }}
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>

            {/* Right: Photo + floating cards */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 420, height: 520, borderRadius: 32, background: 'linear-gradient(160deg, #f0f0ff 0%, #e8e8f8 50%, #f8f0ff 100%)', overflow: 'hidden', position: 'relative', border: '1px solid rgba(91,92,246,0.12)', boxShadow: '0 40px 80px rgba(91,92,246,0.12)' }}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=840&h=1040&fit=crop&auto=format"
                  alt="Gugulothu Nagamani - Senior Full Stack Developer"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.4) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)', borderRadius: 16, padding: '16px 20px', border: '1px solid rgba(255,255,255,0.6)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: '#080808' }}>Gugulothu Nagamani</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#737373', marginTop: 2 }}>Senior Full Stack Developer · Hyderabad</div>
                </div>
              </div>

              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: 48, left: -20, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 20, padding: '18px 24px', boxShadow: '0 16px 48px rgba(0,0,0,0.1)', minWidth: 160 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 36, color: '#080808', lineHeight: 1 }}>4+</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#737373', marginTop: 4 }}>Years Experience</div>
              </motion.div>

              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} style={{ position: 'absolute', bottom: 140, right: -28, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 20, padding: '16px 20px', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#22c55e' }}>Available Now</span>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#555' }}>Open to opportunities</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 1 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 24, height: 36, border: '1.5px solid rgba(0,0,0,0.15)', borderRadius: 99, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '5px 0' }}>
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 4, height: 8, background: '#5b5cf6', borderRadius: 99 }} />
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section style={{ background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)', padding: '60px 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0 }}>
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{ textAlign: 'center', padding: '20px 16px', borderRight: i < stats.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 42, color: '#080808', lineHeight: 1, marginBottom: 6 }}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ padding: '120px 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
            <SectionHeading label="Portfolio" title={"Featured <em>Projects</em>"} subtitle="Handcrafted digital products that drive real business results." />
            <Link to="/projects" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: '#5b5cf6', textDecoration: 'none', whiteSpace: 'nowrap', marginBottom: 20 }}>
              All Projects →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 24 }}>
            {featuredProjects.map((p, i) => <ProjectCard key={p.slug} {...p} featured={i === 0} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ padding: '80px 40px 120px', background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <SectionHeading label="Stack" title={"Built with modern <em>technology</em>"} subtitle="Tools and frameworks I use to build robust, scalable applications." center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
            {techHighlights.map((t, i) => <TechnologyCard key={t.name} {...t} delay={i * 0.06} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/technology" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: '#5b5cf6', textDecoration: 'none' }}>View Full Stack →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: 'linear-gradient(135deg, #080808 0%, #1a1a2e 100%)', borderRadius: 32, padding: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 60, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(91,92,246,0.15)' }} />
            <div style={{ position: 'absolute', bottom: -60, left: 200, width: 200, height: 200, borderRadius: '50%', background: 'rgba(167,139,250,0.1)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4vw, 56px)', color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>
                Ready to build something<br /><span style={{ color: '#a78bfa' }}>extraordinary?</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,0.6)', margin: 0, maxWidth: 480 }}>
                {"I'm currently taking on new clients and projects. Let's discuss how I can help build your next product."}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flexShrink: 0, position: 'relative', zIndex: 1 }}>
              <Link to="/contact" style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: '#080808', background: '#fff', padding: '14px 32px', borderRadius: 14, textDecoration: 'none', transition: 'all 0.2s', textAlign: 'center', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#5b5cf6'; el.style.color = '#fff'; el.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#fff'; el.style.color = '#080808'; el.style.transform = 'translateY(0)' }}
              >
                Start a Project
              </Link>
              <Link to="/about" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', textAlign: 'center', padding: '10px' }}>
                Learn About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
