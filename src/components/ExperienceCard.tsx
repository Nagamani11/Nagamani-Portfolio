import { motion } from 'framer-motion'

interface Props {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  technologies: string[]
  current?: boolean
  delay?: number
}

export default function ExperienceCard({ company, role, period, location, description, technologies, current = false, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card-dark"
      style={{
        padding: '36px 40px',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {current && (
        <div style={{
          position: 'absolute', top: 24, right: 24,
          background: 'var(--green-glow)', border: '1px solid rgba(34,197,94,0.3)',
          color: 'var(--green)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 11,
          padding: '4px 12px', borderRadius: 99, letterSpacing: '0.05em',
          display: 'flex', alignItems: 'center', gap: 6,
          boxShadow: '0 0 12px rgba(34,197,94,0.2)'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 6px var(--green)' }} />
          Current
        </div>
      )}

      <div style={{ display: 'flex', gap: 20, marginBottom: 28 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
          background: 'var(--accent-muted)',
          border: '1px solid var(--accent-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--accent-light)',
          boxShadow: 'var(--glow-accent)',
        }}>
          {company.charAt(0)}
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--text-primary)', margin: '0 0 4px' }}>{role}</h3>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--accent-light)', marginBottom: 4 }}>{company}</div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              {period}
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              {location}
            </span>
          </div>
        </div>
      </div>

      <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {description.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginTop: 7, flexShrink: 0, boxShadow: '0 0 6px var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {technologies.map(tech => (
          <span key={tech} style={{
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
            color: 'var(--text-primary)', background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            padding: '4px 12px', borderRadius: 99,
          }}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
