import { motion } from 'framer-motion'

interface Props {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({ label, title, subtitle, center = false }: Props) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 64 }}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(99,102,241,0.1)',
            border: '1px solid rgba(99,102,241,0.25)',
            borderRadius: 99, padding: '5px 16px', marginBottom: 20,
          }}
        >
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 8px var(--accent)',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
            color: 'var(--accent-light)', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            {label}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(36px, 5vw, 58px)',
          margin: 0, lineHeight: 1.1, letterSpacing: '-0.025em',
          background: 'linear-gradient(135deg, #f1f5f9 0%, #a78bfa 55%, #6366f1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-body)', fontSize: 17,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: center ? 560 : 600,
            margin: center ? '20px auto 0' : '20px 0 0',
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
