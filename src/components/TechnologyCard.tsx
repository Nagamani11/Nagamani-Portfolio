import { motion } from 'framer-motion'

interface Props {
  name: string
  icon: string
  category: string
  color?: string
  delay?: number
}

export default function TechnologyCard({ name, icon, category, color = '#6366f1', delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, borderColor: `${color}60`, boxShadow: `0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px ${color}25` }}
      style={{
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        borderRadius: 20, padding: '28px 20px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        cursor: 'default', transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        width: 64, height: 64, borderRadius: 16,
        background: `${color}15`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 32,
        border: `1px solid ${color}30`,
        boxShadow: `0 0 24px ${color}20`,
      }}>
        {icon}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{category}</div>
      </div>
    </motion.div>
  )
}
