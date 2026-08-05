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
      whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
      style={{
        background: '#fff', border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: 20, padding: '24px',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {icon && (
        <div style={{ fontSize: 32, marginBottom: 12, lineHeight: 1 }}>{icon}</div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: '#080808', marginBottom: 3 }}>{name}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{category}</div>
        </div>
        <div style={{
          fontFamily: 'var(--font-code)', fontSize: 13, fontWeight: 600,
          color: '#5b5cf6', background: 'rgba(91,92,246,0.08)',
          padding: '3px 10px', borderRadius: 99,
        }}>
          {level}%
        </div>
      </div>
      {/* Progress bar */}
      <div style={{ height: 4, background: 'rgba(0,0,0,0.06)', borderRadius: 99, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '100%', borderRadius: 99,
            background: 'linear-gradient(90deg, #5b5cf6, #a78bfa)',
          }}
        />
      </div>
    </motion.div>
  )
}
