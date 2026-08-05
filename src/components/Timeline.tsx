import { motion } from 'framer-motion'

interface TimelineItem {
  year: string
  title: string
  subtitle: string
  description: string
  type?: 'work' | 'education' | 'achievement'
}

interface Props {
  items: TimelineItem[]
}

const typeColors = {
  work: '#5b5cf6',
  education: '#22c55e',
  achievement: '#f59e0b',
}

export default function Timeline({ items }: Props) {
  return (
    <div style={{ position: 'relative', paddingLeft: 32 }}>
      {/* Vertical line */}
      <div style={{
        position: 'absolute', left: 15, top: 12, bottom: 12,
        width: 2, background: 'linear-gradient(180deg, #5b5cf6 0%, rgba(91,92,246,0.1) 100%)',
        borderRadius: 2,
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {items.map((item, i) => {
          const color = typeColors[item.type || 'work']
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', gap: 24, position: 'relative' }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -39, top: 6,
                width: 16, height: 16, borderRadius: '50%',
                background: '#fff', border: `3px solid ${color}`,
                boxShadow: `0 0 0 4px ${color}20`,
              }} />

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-code)', fontSize: 12, fontWeight: 500,
                    color, background: `${color}10`, border: `1px solid ${color}20`,
                    padding: '2px 10px', borderRadius: 99,
                  }}>
                    {item.year}
                  </span>
                  {item.type && (
                    <span style={{
                      fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
                      color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.07em',
                    }}>
                      {item.type}
                    </span>
                  )}
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, color: '#080808', margin: '0 0 4px' }}>{item.title}</h4>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#5b5cf6', marginBottom: 8 }}>{item.subtitle}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#737373', lineHeight: 1.7, margin: 0 }}>{item.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
