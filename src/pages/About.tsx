import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

// Use runtime public asset path so the image is served correctly after build/deploy.
const developerImage = `${import.meta.env.BASE_URL}assets/Developer.png`

const values = [
  { title: 'User-Centric', description: 'Building products that prioritize the end-user experience above all else.', icon: '🎯' },
  { title: 'Performance First', description: 'Writing clean, optimized code that scales efficiently under load.', icon: '⚡' },
  { title: 'Continuous Learning', description: 'Staying ahead of the curve with modern frameworks and best practices.', icon: '📚' },
]

export default function About() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px' }}>
        
        {/* Intro Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 120 }}>
          <div>
            <SectionHeading label="About Me" title={"Turning ideas into<br /><em>reality</em>"} subtitle="I am a passionate Full Stack Developer focused on building robust, scalable, and user-friendly digital products." />
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 24 }}>
                With over 2 years of hands-on experience, I specialize in designing and deploying full-stack web and mobile applications. My journey started with a fascination for how things work on the internet, which quickly evolved into a career of building them.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 40 }}>
                I currently build production-grade applications at AutoBrez while simultaneously maintaining and scaling multiple platforms for HiFix Innovatives. I thrive in environments that challenge me to solve complex problems and deliver seamless user experiences.
              </p>
              
              <div style={{ display: 'flex', gap: 20 }}>
                <Link to="/experience" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
                  color: '#fff', background: 'var(--accent)',
                  padding: '12px 28px', borderRadius: 12,
                  textDecoration: 'none', transition: 'all 0.2s',
                  boxShadow: 'var(--glow-accent)'
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-light)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                >
                  View Experience
                </Link>
                <Link to="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
                  color: 'var(--text-primary)', background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                  padding: '12px 28px', borderRadius: 12,
                  textDecoration: 'none', transition: 'all 0.2s'
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-elevated)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -20, background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }} />
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ borderRadius: 32, overflow: 'hidden', height: 540, background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>
                <img
                  src={developerImage}
                  alt="Gugulothu Nagamani - Full Stack Developer"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <SectionHeading label="Philosophy" title={"Core <em>Values</em>"} center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card-dark"
                style={{ padding: 40, textAlign: 'center' }}
              >
                <div style={{ fontSize: 48, marginBottom: 20, filter: 'drop-shadow(0 0 20px rgba(99,102,241,0.3))' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--text-primary)', margin: '0 0 12px' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
