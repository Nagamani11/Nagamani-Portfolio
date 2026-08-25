import { motion } from 'framer-motion'

interface Props {
  name: string
  level: number
  category: string
  icon?: string
  delay?: number
}

export default function SkillCard({ name, level, category, icon, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, borderColor: 'var(--border-hover)', boxShadow: '0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.1)' }}
      style={{
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        borderRadius: 20, padding: '24px',
        transition: 'all 0.3s ease',
      }}
    >
      {icon && (
        <div style={{ fontSize: 32, marginBottom: 16, lineHeight: 1, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}>{icon}</div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 3 }}>{name}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{category}</div>
        </div>
        <div style={{
          fontFamily: 'var(--font-code)', fontSize: 13, fontWeight: 600,
          color: 'var(--accent-light)', background: 'var(--accent-muted)',
          border: '1px solid var(--accent-border)',
          padding: '3px 10px', borderRadius: 99,
        }}>
          {level}%
        </div>
      </div>
      {/* Progress bar */}
      <div style={{ height: 6, background: 'var(--bg-elevated)', borderRadius: 99, overflow: 'hidden', border: '1px solid var(--border)' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '100%', borderRadius: 99,
            background: 'linear-gradient(90deg, var(--accent), var(--purple))',
            boxShadow: '0 0 10px var(--accent)'
          }}
        />
      </div>
    </motion.div>
  )
}
