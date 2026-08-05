import { motion } from 'framer-motion'

interface Props {
  name: string
  icon: string
  category: string
  color?: string
  delay?: number
}

export default function TechnologyCard({ name, icon, category, color = '#5b5cf6', delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.1)' }}
      style={{
        background: '#fff', border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: 20, padding: '28px 20px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        cursor: 'default', transition: 'box-shadow 0.3s ease',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      <div style={{
        width: 56, height: 56, borderRadius: 16,
        background: `${color}12`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 28,
        border: `1px solid ${color}20`,
      }}>
        {icon}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: '#080808', marginBottom: 3 }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{category}</div>
      </div>
    </motion.div>
  )
}
