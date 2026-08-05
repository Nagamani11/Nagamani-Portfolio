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
      style={{
        background: '#fff', border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: 24, padding: '36px 40px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {current && (
        <div style={{
          position: 'absolute', top: 24, right: 24,
          background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
          color: '#16a34a', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 11,
          padding: '4px 12px', borderRadius: 99, letterSpacing: '0.05em',
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
          Current
        </div>
      )}

      <div style={{ display: 'flex', gap: 20, marginBottom: 28 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
          background: 'linear-gradient(135deg, rgba(91,92,246,0.1) 0%, rgba(167,139,250,0.15) 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-heading)', fontSize: 22, color: '#5b5cf6',
        }}>
          {company.charAt(0)}
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: '#080808', margin: '0 0 4px' }}>{role}</h3>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: '#5b5cf6', marginBottom: 4 }}>{company}</div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#aaa', display: 'flex', alignItems: 'center', gap: 5 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {period}
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#aaa', display: 'flex', alignItems: 'center', gap: 5 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {location}
            </span>
          </div>
        </div>
      </div>

      <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {description.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5b5cf6', marginTop: 7, flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555', lineHeight: 1.7 }}>{item}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {technologies.map(tech => (
          <span key={tech} style={{
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
            color: '#5b5cf6', background: 'rgba(91,92,246,0.07)',
            border: '1px solid rgba(91,92,246,0.15)',
            padding: '4px 12px', borderRadius: 99,
          }}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
